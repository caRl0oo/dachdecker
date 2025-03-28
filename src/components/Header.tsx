"use client";

import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { siteConfig } from '@/lib/config';

// Wir nutzen jetzt die Navigationsdaten aus der zentralen Konfiguration
const navItems = siteConfig.pages.filter(page => page.showInMainNav);

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Bar - wird nur angezeigt, wenn in der Konfiguration aktiviert */}
      {siteConfig.header.showTopBar && (
        <div className="bg-gradient-to-r from-primary to-primary-600 text-white py-2">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-sm flex items-center">
              <PhoneIcon className="h-4 w-4 mr-2" />
              <span>Notfallservice: {siteConfig.contact.phone}</span>
            </div>
            <div className="text-sm">
              <span>{siteConfig.contact.hours}</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo - Centered on Mobile, Left on Desktop */}
          <div className="flex justify-center w-full md:w-auto md:justify-start">
            <Link href="/" className="flex items-center">
              <Image
                src={siteConfig.logo.main}
                alt={siteConfig.siteName}
                width={siteConfig.logo.width}
                height={siteConfig.logo.height}
                priority
                className="h-28 w-auto"
              />
            </Link>
          </div>
          
          {/* Navigation and CTA - Hidden on Mobile */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation */}
            <nav className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            
            {/* CTA Button */}
            <div>
              <Link
                href="/kontakt"
                className="btn-primary"
              >
                Kostenlose Beratung
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 