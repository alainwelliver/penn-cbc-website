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
  const initialPhotos = shuffle(getAllGalleryPhotos()).slice(0, 12);
  return <HomeClient initialPhotos={initialPhotos} />;
}
