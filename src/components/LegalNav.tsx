"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LegalNav() {
  const pathname = usePathname();

  const links = [
    { href: '/impressum', label: 'Impressum' },
    { href: '/datenschutz', label: 'Datenschutz' },
    { href: '/agbs', label: 'AGBs' },
  ];

  return (
    <nav 
      className="bg-white/50 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-10"
      role="navigation"
      aria-label="Rechtliche Navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-14">
          <div className="flex space-x-8" role="menubar">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                role="menuitem"
                aria-current={pathname === link.href ? 'page' : undefined}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                  pathname === link.href
                    ? 'text-primary bg-primary/5'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
} 