#!/usr/bin/env node
/**
 * Optimize gallery images for Vercel Blob.
 *
 * For every image under gallery-originals/gallery and gallery-originals/gallery-photos
 * (the full-resolution originals, kept out of git and out of the deployment):
 *   - applies EXIF orientation and strips remaining metadata
 *   - resizes to a max long edge of FULL_MAX px, progressive JPEG q80
 *   - writes a THUMB_MAX px thumbnail alongside
 *
 * Output goes to gallery-optimized/{full,thumb}/<same relative path>.jpg
 * (outside public/, gitignored). Originals are never modified.
 *
 * Also writes gallery-optimized/index.json listing every processed image,
 * which the upload script consumes.
 *
 * Usage: node scripts/optimize-gallery.mjs [--force]
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import os from 'node:os';
import { execFileSync } from 'node:child_process';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const SOURCE_ROOT = path.join(ROOT, 'gallery-originals');
const SOURCE_DIRS = ['gallery', 'gallery-photos']; // relative to SOURCE_ROOT; also the former public/ folders
const OUT_DIR = path.join(ROOT, 'gallery-optimized');
const FULL_MAX = 2000;
const THUMB_MAX = 600;
const QUALITY = 80;
const CONCURRENCY = 4;
const FORCE = process.argv.includes('--force');
const IMAGE_EXT = /\.(jpe?g|png|heic|heif|webp|tiff?)$/i;

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (entry.isFile() && IMAGE_EXT.test(entry.name)) out.push(p);
  }
  return out.sort();
}

/**
 * Output filename: JPEG sources keep their base name with a .jpg extension.
 * Other formats (HEIC, PNG, ...) get the source extension folded into the name,
 * e.g. IMG_1.HEIC -> IMG_1-heic.jpg, so a .jpeg and a .HEIC with the same base
 * name cannot overwrite each other.
 */
function outputName(rel) {
  const ext = path.extname(rel);
  const base = rel.slice(0, -ext.length);
  const lower = ext.toLowerCase();
  return lower === '.jpg' || lower === '.jpeg' ? `${base}.jpg` : `${base}-${lower.slice(1)}.jpg`;
}

async function isFresh(src, dest) {
  if (FORCE) return false;
  try {
    const [s, d] = await Promise.all([fs.stat(src), fs.stat(dest)]);
    return d.mtimeMs >= s.mtimeMs && d.size > 0;
  } catch {
    return false;
  }
}

async function processOne(absSrc) {
  const relFromPublic = path.relative(SOURCE_ROOT, absSrc); // e.g. gallery-photos/photo1.jpg
  const relJpg = outputName(relFromPublic);
  const fullOut = path.join(OUT_DIR, 'full', relJpg);
  const thumbOut = path.join(OUT_DIR, 'thumb', relJpg);
  await fs.mkdir(path.dirname(fullOut), { recursive: true });
  await fs.mkdir(path.dirname(thumbOut), { recursive: true });

  const srcSize = (await fs.stat(absSrc)).size;
  let skipped = true;

  // sharp's bundled libheif cannot decode every HEIC variant. If decoding fails on macOS,
  // convert to a temporary JPEG with `sips` (max quality) and feed that to sharp instead.
  let decodeSrc = absSrc;
  if (/\.heic$|\.heif$/i.test(absSrc)) {
    try {
      await sharp(absSrc).metadata();
      await sharp(absSrc).resize(8, 8).toBuffer(); // force an actual decode
    } catch {
      if (process.platform !== 'darwin') throw new Error('HEIC decode failed and no sips fallback on this platform');
      const tmp = path.join(await fs.mkdtemp(path.join(os.tmpdir(), 'gallery-heic-')), path.basename(absSrc, path.extname(absSrc)) + '.jpg');
      execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '100', absSrc, '--out', tmp], { stdio: 'ignore' });
      decodeSrc = tmp;
      console.log(`  (HEIC via sips) ${path.relative(ROOT, absSrc)}`);
    }
  }

  const base = () => sharp(decodeSrc, { failOn: 'none' }).rotate(); // .rotate() with no args applies EXIF orientation

  if (!(await isFresh(absSrc, fullOut))) {
    await base()
      .resize({ width: FULL_MAX, height: FULL_MAX, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
      .toFile(fullOut); // sharp strips metadata by default unless .withMetadata() is called
    skipped = false;
  }
  if (!(await isFresh(absSrc, thumbOut))) {
    await base()
      .resize({ width: THUMB_MAX, height: THUMB_MAX, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
      .toFile(thumbOut);
    skipped = false;
  }

  const [fullMeta, fullSize, thumbSize] = await Promise.all([
    sharp(fullOut).metadata(),
    fs.stat(fullOut).then((s) => s.size),
    fs.stat(thumbOut).then((s) => s.size),
  ]);

  return {
    original: '/' + relFromPublic.split(path.sep).join('/'), // former public URL path; the manifest key used in the app
    full: path.posix.join('full', relJpg.split(path.sep).join('/')),
    thumb: path.posix.join('thumb', relJpg.split(path.sep).join('/')),
    width: fullMeta.width,
    height: fullMeta.height,
    bytes: { original: srcSize, full: fullSize, thumb: thumbSize },
    skipped,
  };
}

async function main() {
  const sources = [];
  for (const d of SOURCE_DIRS) {
    const abs = path.join(SOURCE_ROOT, d);
    try {
      sources.push(...(await walk(abs)));
    } catch (e) {
      console.error(`Cannot read ${abs}: ${e.message}`);
      process.exit(1);
    }
  }
  console.log(`Found ${sources.length} images. Output: ${path.relative(ROOT, OUT_DIR)}/`);

  // Refuse to run if two sources would write the same output file.
  const seen = new Map();
  for (const src of sources) {
    const out = outputName(path.relative(SOURCE_ROOT, src));
    if (seen.has(out)) {
      console.error(`Output collision: ${seen.get(out)} and ${src} both map to ${out}`);
      process.exit(1);
    }
    seen.set(out, src);
  }

  const results = new Array(sources.length);
  let next = 0;
  let done = 0;
  const failures = [];
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (next < sources.length) {
        const i = next++;
        const src = sources[i];
        try {
          results[i] = await processOne(src);
          done++;
          const r = results[i];
          const mb = (n) => (n / 1048576).toFixed(2);
          console.log(
            `[${done}/${sources.length}] ${r.skipped ? 'skip ' : 'done '}${r.original}  ${mb(r.bytes.original)} MB -> ${mb(r.bytes.full)} MB (thumb ${mb(r.bytes.thumb)} MB)`,
          );
        } catch (e) {
          failures.push({ src, error: e.message });
          console.error(`FAILED ${src}: ${e.message}`);
        }
      }
    }),
  );

  const ok = results.filter(Boolean);
  const sum = (k) => ok.reduce((a, r) => a + r.bytes[k], 0);
  const mb = (n) => (n / 1048576).toFixed(1) + ' MB';

  await fs.writeFile(
    path.join(OUT_DIR, 'index.json'),
    JSON.stringify(
      { generatedAt: new Date().toISOString(), fullMax: FULL_MAX, thumbMax: THUMB_MAX, quality: QUALITY, images: ok.map(({ skipped, ...r }) => r) },
      null,
      2,
    ),
  );

  console.log('\n=== Summary ===');
  console.log(`Processed: ${ok.length}  Failed: ${failures.length}`);
  console.log(`Originals: ${mb(sum('original'))}`);
  console.log(`Full-size: ${mb(sum('full'))}`);
  console.log(`Thumbs:    ${mb(sum('thumb'))}`);
  console.log(`Total to upload: ${mb(sum('full') + sum('thumb'))}`);
  if (sum('full') + sum('thumb') > 500 * 1048576) {
    console.log('WARNING: optimized set exceeds 500 MB. Consider a smaller FULL_MAX or lower QUALITY.');
  }
  if (failures.length) process.exit(1);
}

main();
