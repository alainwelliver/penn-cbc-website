'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/calendar', name: 'Calendar' },
  { path: '/past-meetings', name: 'Past Meetings' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-8 right-8 z-50">
      <div className="flex items-center gap-4">
        {routes.map((route) => {
          const isActive = pathname === route.path;

          return (
            <Link
              key={route.path}
              href={route.path}
              className="group flex items-center gap-2 transition-all duration-300"
            >
              {/* Circle */}
              <div
                className="rounded-full transition-all duration-300 hover:scale-110"
                style={{
                  backgroundColor: '#D97757',
                  width: isActive ? '16px' : '12px',
                  height: isActive ? '16px' : '12px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                }}
              />

              {/* Label */}
              <span
                className="font-sans font-semibold text-sm transition-all duration-300"
                style={{
                  color: '#D97757',
                  opacity: isActive ? 1 : 0.7
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
