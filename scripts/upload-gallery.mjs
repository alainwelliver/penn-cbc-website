#!/usr/bin/env node
/**
 * Upload optimized gallery images to Vercel Blob and write the manifest.
 *
 * Reads gallery-optimized/index.json (produced by scripts/optimize-gallery.mjs),
 * uploads every full-size image and thumbnail with public access, and writes
 * lib/gallery-manifest.json mapping each original public path to its blob URLs.
 *
 * Blob pathnames mirror the public/ folder structure:
 *   full:  gallery-photos/photo1.jpg, gallery/Hackathon/hackathon_2260.jpg, ...
 *   thumb: thumbs/gallery-photos/photo1.jpg, thumbs/gallery/Hackathon/..., ...
 *
 * Idempotent: blobs whose pathname already exists in the store are skipped.
 *
 * Requires BLOB_READ_WRITE_TOKEN in the environment. Run with:
 *   node --env-file=.env.local scripts/upload-gallery.mjs [--dry-run]
 */
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { list, put } from '@vercel/blob';

const ROOT = path.resolve(new URL('..', import.meta.url).pathname);
const STAGING = path.join(ROOT, 'gallery-optimized');
const MANIFEST_PATH = path.join(ROOT, 'lib', 'gallery-manifest.json');
const THUMB_PREFIX = 'thumbs/';
const CONCURRENCY = 6;
const DRY_RUN = process.argv.includes('--dry-run');
// One year; blobs are immutable by pathname, so long caching is safe.
const CACHE_MAX_AGE = 60 * 60 * 24 * 365;

// Pass the token explicitly: when the repo is linked to a Vercel project, the SDK
// otherwise prefers OIDC auth, which only works if the store is connected to that project.
const TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
if (!TOKEN) {
  console.error('BLOB_READ_WRITE_TOKEN is not set. Run with: node --env-file=.env.local scripts/upload-gallery.mjs');
  process.exit(1);
}

/** Blob pathname for a full-size image: strip the "full/" staging prefix. */
const fullPathname = (stagingRel) => stagingRel.replace(/^full\//, '');
/** Blob pathname for a thumbnail: replace the "thumb/" staging prefix. */
const thumbPathname = (stagingRel) => THUMB_PREFIX + stagingRel.replace(/^thumb\//, '');

async function listExisting() {
  const existing = new Map(); // pathname -> url
  let cursor;
  do {
    const page = await list({ cursor, limit: 1000, token: TOKEN });
    for (const b of page.blobs) existing.set(b.pathname, b.url);
    cursor = page.hasMore ? page.cursor : undefined;
  } while (cursor);
  return existing;
}

async function main() {
  const index = JSON.parse(await fs.readFile(path.join(STAGING, 'index.json'), 'utf8'));
  const jobs = [];
  for (const img of index.images) {
    jobs.push({ original: img.original, kind: 'full', file: path.join(STAGING, img.full), pathname: fullPathname(img.full) });
    jobs.push({ original: img.original, kind: 'thumb', file: path.join(STAGING, img.thumb), pathname: thumbPathname(img.thumb) });
  }

  console.log(`Listing existing blobs...`);
  const existing = await listExisting();
  console.log(`${existing.size} blobs already in store. ${jobs.length} files to reconcile.`);

  const urls = new Map(); // pathname -> url
  let uploaded = 0;
  let skipped = 0;
  const failures = [];
  let next = 0;

  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (next < jobs.length) {
        const job = jobs[next++];
        if (existing.has(job.pathname)) {
          urls.set(job.pathname, existing.get(job.pathname));
          skipped++;
          continue;
        }
        if (DRY_RUN) {
          console.log(`[dry-run] would upload ${job.pathname}`);
          uploaded++;
          continue;
        }
        try {
          const body = await fs.readFile(job.file);
          const blob = await put(job.pathname, body, {
            token: TOKEN,
            access: 'public',
            addRandomSuffix: false,
            contentType: 'image/jpeg',
            cacheControlMaxAge: CACHE_MAX_AGE,
          });
          urls.set(job.pathname, blob.url);
          uploaded++;
          console.log(`[${uploaded + skipped}/${jobs.length}] uploaded ${job.pathname}`);
        } catch (e) {
          failures.push({ pathname: job.pathname, error: e.message });
          console.error(`FAILED ${job.pathname}: ${e.message}`);
        }
      }
    }),
  );

  // Build manifest: original public path -> { full, thumb, width, height }
  const manifest = {};
  for (const img of [...index.images].sort((a, b) => a.original.localeCompare(b.original))) {
    const full = urls.get(fullPathname(img.full));
    const thumb = urls.get(thumbPathname(img.thumb));
    if (!full || !thumb) continue; // failed or dry-run
    manifest[img.original] = { full, thumb, width: img.width, height: img.height };
  }

  if (!DRY_RUN) {
    await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
    await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');
  }

  console.log('\n=== Summary ===');
  console.log(`Uploaded: ${uploaded}  Skipped (already existed): ${skipped}  Failed: ${failures.length}`);
  console.log(`Manifest entries: ${Object.keys(manifest).length} of ${index.images.length}${DRY_RUN ? ' (dry run, not written)' : ` -> ${path.relative(ROOT, MANIFEST_PATH)}`}`);
  if (failures.length) process.exit(1);
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
