This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Gallery photos (Vercel Blob)

Gallery photos are **not** stored in this repo or in `public/`. They are served from a
Vercel Blob store (`penn-cbc-website-blob`), and the site looks them up through
`lib/gallery-manifest.json`. This keeps the deployment small: the originals are about
2 GB, which blew past the Vercel Hobby deployment storage limit.

**Do not add photos to `public/gallery` or `public/gallery-photos`.** Those folders are
gone on purpose. Files put there will deploy and will bring the storage problem back.

### Adding new photos

1. Get the Blob token from a club officer and put it in `.env.local` (this file is
   gitignored, never commit it):

   ```
   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...
   ```

2. Put the full-resolution photos in `gallery-originals/gallery-photos/` (the main
   gallery) or an event subfolder under `gallery-originals/gallery/`. This folder is
   gitignored; it lives only on your machine.

3. Optimize them. This writes 2000px full-size images and 600px thumbnails to
   `gallery-optimized/` (also gitignored) and skips anything already done:

   ```bash
   node scripts/optimize-gallery.mjs
   ```

4. Upload them and regenerate the manifest. Already-uploaded files are skipped, so it is
   safe to rerun:

   ```bash
   node --env-file=.env.local scripts/upload-gallery.mjs
   ```

5. Reference the photo in code by its **original path**, exactly as if it were still in
   `public/`. The helper resolves it to the Blob URLs:

   ```ts
   import { toGalleryPhoto } from '@/lib/gallery';
   const photo = toGalleryPhoto('/gallery-photos/photo33.jpg', 'Describe the photo');
   // photo.thumb -> use in grids and carousels
   // photo.full  -> use in lightboxes
   ```

   For the main gallery page, add an entry to the `photos` array in `app/gallery/page.tsx`.
   The homepage carousel picks from `photo1.jpg` to `photo25.jpg` in `app/page.tsx`.

6. Commit `lib/gallery-manifest.json` along with your code change. The build fails with
   `Gallery image not in manifest` if you reference a path that was never uploaded.

### Notes

- Only the optimized copies go to Blob. Keep your originals somewhere safe; nobody else
  has them.
- Blob pathnames mirror the old `public/` layout, with thumbnails under `thumbs/`.
- If a store is ever recreated it must be created with **public** access. That setting
  cannot be changed afterwards.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
