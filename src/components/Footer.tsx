import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <p className="text-gray-400">
              Dachdecker Berlin<br />
              Zwickauer Damm 87<br />
              12355 Berlin
            </p>
            <div className="mt-4">
              <a href="tel:0172-3158847" className="text-gray-400 hover:text-white transition-colors">
                0172 - 315 88 47
              </a>
            </div>
            <div>
              <a href="mailto:info@dachdecker-berlin.de" className="text-gray-400 hover:text-white transition-colors">
                info@dachdecker-berlin.de
              </a>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/leistungen/flachdacharbeiten" className="text-gray-400 hover:text-white transition-colors">
                  Flachdacharbeiten
                </Link>
              </li>
              <li>
                <Link href="/leistungen/steildacharbeiten" className="text-gray-400 hover:text-white transition-colors">
                  Steildacharbeiten
                </Link>
              </li>
              <li>
                <Link href="/leistungen/klempnerarbeiten" className="text-gray-400 hover:text-white transition-colors">
                  Klempnerarbeiten
                </Link>
              </li>
              <li>
                <Link href="/leistungen/dachsanierung" className="text-gray-400 hover:text-white transition-colors">
                  Dachsanierung
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-400 hover:text-white transition-colors">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Öffnungszeiten</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Mo - Fr: 8:00 - 18:00</li>
              <li>Sa: Nach Vereinbarung</li>
              <li>So: Geschlossen</li>
            </ul>
            <div className="mt-4">
              <p className="text-sm text-gray-500">
                Notfallservice: 24/7 erreichbar
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dachdecker Berlin. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
} 