'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef } from 'react';

type RouteItem =
  | { path: string; name: string }
  | { name: string; dropdown: { path: string; name: string }[] };

const routes: RouteItem[] = [
  { path: '/', name: 'Home' },
  { path: '/events', name: 'Events' },
  {
    name: 'Foundry',
    dropdown: [
      { path: '/foundry/get-involved', name: 'Get Involved' },
      { path: '/foundry/products', name: 'Products' }
    ]
  },
  { path: '/team', name: 'Team' },
  { path: '/gallery', name: 'Gallery' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

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
          // Handle dropdown items
          if ('dropdown' in route && route.dropdown) {
            const isDropdownActive = route.dropdown.some(item => pathname === item.path);
            const isOpen = openDropdown === route.name;

            return (
              <div
                key={route.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(route.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="group flex items-center gap-2 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5">
                  <div
                    className="rounded-full transition-all duration-300 ease-out group-hover:scale-125 group-hover:shadow-md"
                    style={{
                      backgroundColor: '#D97757',
                      width: isDropdownActive ? '16px' : '12px',
                      height: isDropdownActive ? '16px' : '12px',
                      boxShadow: isDropdownActive ? '0 2px 8px rgba(217, 119, 87, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                  <span
                    className="font-sans font-semibold transition-all duration-300 ease-out group-hover:opacity-100"
                    style={{
                      color: '#D97757',
                      opacity: isDropdownActive ? 1 : 0.7,
                      fontSize: 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {route.name}
                  </span>
                </div>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div
                    className="absolute top-full mt-1 rounded-xl overflow-hidden backdrop-blur-md"
                    style={{
                      backgroundColor: 'var(--nav-bg)',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(217, 119, 87, 0.1)',
                      minWidth: '160px'
                    }}
                  >
                    {route.dropdown.map((item) => {
                      const isActive = pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          href={item.path}
                          className="block px-4 py-3 transition-all duration-200"
                          style={{
                            backgroundColor: isActive ? 'rgba(217, 119, 87, 0.1)' : 'transparent',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(217, 119, 87, 0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = isActive ? 'rgba(217, 119, 87, 0.1)' : 'transparent';
                          }}
                        >
                          <span
                            className="font-sans font-semibold"
                            style={{
                              color: '#D97757',
                              opacity: isActive ? 1 : 0.8,
                              fontSize: '0.9rem'
                            }}
                          >
                            {item.name}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          // Handle regular items
          if (!('path' in route)) return null;

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
