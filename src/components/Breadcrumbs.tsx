"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/20/solid';

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbNames: { [key: string]: string } = {
    impressum: 'Impressum',
    datenschutz: 'Datenschutz',
    agbs: 'AGBs',
  };

  return (
    <nav className="container mx-auto px-4" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2 text-sm text-gray-500 py-4">
        <li>
          <Link 
            href="/"
            className="flex items-center hover:text-primary transition-colors"
            aria-label="Zur Startseite"
          >
            <HomeIcon className="h-4 w-4" />
          </Link>
        </li>
        {segments.map((segment, index) => (
          <li key={segment} className="flex items-center">
            <ChevronRightIcon className="h-4 w-4 mx-1 text-gray-400" />
            <Link
              href={`/${segments.slice(0, index + 1).join('/')}`}
              className={`hover:text-primary transition-colors ${
                index === segments.length - 1 ? 'text-primary font-medium' : ''
              }`}
            >
              {breadcrumbNames[segment] || segment}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
} 