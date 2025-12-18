import HomeClient from "./components/HomeClient";

export const dynamic = "force-dynamic";

type Photo = { src: string; alt: string };

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
    return {
      src: `/gallery-photos/photo${n}.jpg`,
      alt: `CBC gallery photo ${n}`,
    };
  });
}

export default function Home() {
  const allPhotos = getAllGalleryPhotos();

  // Always include photo2.jpg
  const photo2 = { src: '/gallery-photos/photo2.jpg', alt: 'CBC gallery photo 2' };

  // Get other photos excluding photo2, shuffle them, and take 11
  const otherPhotos = allPhotos.filter(p => p.src !== photo2.src);
  const shuffledOthers = shuffle(otherPhotos).slice(0, 11);

  // Combine photo2 with the shuffled others
  const initialPhotos = [photo2, ...shuffledOthers];

  return <HomeClient initialPhotos={initialPhotos} />;
}
