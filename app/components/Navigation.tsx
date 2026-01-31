'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/events', name: 'Events' },
  { path: '/foundry', name: 'Foundry' },
  { path: '/team', name: 'Team' },
  { path: '/gallery', name: 'Gallery' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 right-0 z-50 m-6 lg:m-8">
      <div
        className="flex items-center gap-5 px-6 py-4 rounded-2xl backdrop-blur-md transition-all duration-300"
        style={{
          backgroundColor: 'var(--nav-bg)',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(217, 119, 87, 0.1)'
        }}
      >
        {routes.map((route) => {
          const isActive = pathname === route.path;

          return (
            <Link
              key={route.path}
              href={route.path}
              className="group flex items-center gap-2 transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
              {/* Circle */}
              <div
                className="rounded-full transition-all duration-300 ease-out group-hover:scale-125 group-hover:shadow-md"
                style={{
                  backgroundColor: '#D97757',
                  width: isActive ? '16px' : '12px',
                  height: isActive ? '16px' : '12px',
                  boxShadow: isActive ? '0 2px 8px rgba(217, 119, 87, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              />

              {/* Label */}
              <span
                className="font-sans font-semibold transition-all duration-300 ease-out group-hover:opacity-100"
                style={{
                  color: '#D97757',
                  opacity: isActive ? 1 : 0.7,
                  fontSize: 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',
                  letterSpacing: '-0.01em'
                }}
              >
                {route.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
