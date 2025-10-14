'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/calendar', name: 'Calendar' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-8 right-8 z-50">
      <div className="flex items-center gap-3">
        {/* Menu label */}
        <span
          className="font-sans font-semibold text-sm mr-1"
          style={{ color: '#D97757' }}
        >
          Menu
        </span>

        {routes.map((route) => {
          const isActive = pathname === route.path;

          return (
            <Link
              key={route.path}
              href={route.path}
              className="group relative flex items-center justify-center transition-all duration-300"
              aria-label={route.name}
            >
              {/* Circle */}
              <div
                className="rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: '#D97757',
                  width: isActive ? '20px' : '14px',
                  height: isActive ? '20px' : '14px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              />

              {/* Tooltip */}
              <span className="absolute top-full mt-2 px-3 py-1 text-sm font-sans font-medium text-white bg-gray-800 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {route.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
