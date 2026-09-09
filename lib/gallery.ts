import manifest from './gallery-manifest.json';

/** Full and thumbnail Blob URLs for one gallery image, keyed by its original public path. */
export type GalleryImage = { full: string; thumb: string; width: number; height: number };

/** A gallery photo ready for rendering: thumbnail for grids, full-size for lightboxes. */
export type GalleryPhoto = GalleryImage & { alt: string };

const images = manifest as Record<string, GalleryImage>;

/**
 * Look up the Blob URLs for an image by its former path under public/
 * (e.g. "/gallery-photos/photo1.jpg"). Throws if the image is not in the manifest,
 * which means scripts/optimize-gallery.mjs and scripts/upload-gallery.mjs need rerunning.
 */
export function getGalleryImage(publicPath: string): GalleryImage {
  const entry = images[publicPath];
  if (!entry) throw new Error(`Gallery image not in manifest: ${publicPath}`);
  return entry;
}

export function toGalleryPhoto(publicPath: string, alt: string): GalleryPhoto {
  return { ...getGalleryImage(publicPath), alt };
}
