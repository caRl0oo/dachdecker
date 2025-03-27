import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Dachdecker Berlin</h3>
            <p className="text-gray-600">
              Professionelle Dacharbeiten in Berlin und Umgebung
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Kontakt</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Musterstraße 123</li>
              <li>10115 Berlin</li>
              <li>Tel: 030 1234567</li>
              <li>E-Mail: info@dachdecker-berlin.de</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Leistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/leistungen/dachsanierung" className="text-gray-600 hover:text-primary">
                  Dachsanierung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/dachbegruenung" className="text-gray-600 hover:text-primary">
                  Dachbegrünung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/flachdacharbeiten" className="text-gray-600 hover:text-primary">
                  Flachdacharbeiten
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-600 hover:text-primary">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-600 hover:text-primary">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-600 hover:text-primary">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary-200 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Dachdecker Berlin. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
} 