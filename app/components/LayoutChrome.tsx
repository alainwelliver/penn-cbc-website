'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import CursorParticles from './CursorParticles';
import Navigation from './Navigation';

export default function LayoutChrome() {
  const pathname = usePathname();
  const isStandaloneLinks = pathname === '/links';

  useEffect(() => {
    document.body.classList.toggle('links-standalone', isStandaloneLinks);

    return () => {
      document.body.classList.remove('links-standalone');
    };
  }, [isStandaloneLinks]);

  if (isStandaloneLinks) {
    return null;
  }

  return (
    <>
      <CursorParticles />
      <Navigation />
    </>
  );
}
