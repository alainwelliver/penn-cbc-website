import HomeClient from "./components/HomeClient";
import { toGalleryPhoto, type GalleryPhoto } from "@/lib/gallery";

export const dynamic = "force-dynamic";

type Photo = GalleryPhoto;

function shuffle<T>(arr: T[]): T[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getAllGalleryPhotos(): Photo[] {
  return Array.from({ length: 25 }, (_, i) => {
    const n = i + 1;
    return toGalleryPhoto(`/gallery-photos/photo${n}.jpg`, `CBC gallery photo ${n}`);
  });
}

export default function Home() {
  const allPhotos = getAllGalleryPhotos();

  // Always include photo2.jpg
  const photo2 = toGalleryPhoto('/gallery-photos/photo2.jpg', 'CBC gallery photo 2');

  // Get other photos excluding photo2, shuffle them, and take 11
  const otherPhotos = allPhotos.filter(p => p.full !== photo2.full);
  const shuffledOthers = shuffle(otherPhotos).slice(0, 11);

  // Combine photo2 with the shuffled others
  const initialPhotos = [photo2, ...shuffledOthers];

  return <HomeClient initialPhotos={initialPhotos} />;
}
