import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo und Beschreibung */}
          <div className="space-y-4">
            <span className="text-2xl font-bold text-white">Dachdecker Berlin</span>
            <p className="text-gray-400">
              Professionelle Dacharbeiten in Berlin mit über 25 Jahren Erfahrung. Qualität und Zuverlässigkeit stehen bei uns an erster Stelle.
            </p>
          </div>

          {/* Schnelllinks */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/referenzen" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Referenzen
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/leistungen/dachsanierung" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Dachsanierung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/dachreparatur" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Dachreparatur
                </Link>
              </li>
              <li>
                <Link href="/leistungen/dachdeckung" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Dachdeckung
                </Link>
              </li>
              <li>
                <Link href="/leistungen/dachbegrünung" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Dachbegrünung
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneIcon className="w-5 h-5 text-primary mr-3 mt-1" />
                <div>
                  <p className="text-gray-400">Telefon</p>
                  <a href="tel:+491234567890" className="text-white hover:text-primary transition-colors duration-200">
                    030 1234567
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <EnvelopeIcon className="w-5 h-5 text-primary mr-3 mt-1" />
                <div>
                  <p className="text-gray-400">E-Mail</p>
                  <a href="mailto:info@dachdecker-berlin.de" className="text-white hover:text-primary transition-colors duration-200">
                    info@dachdecker-berlin.de
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="w-5 h-5 text-primary mr-3 mt-1" />
                <div>
                  <p className="text-gray-400">Adresse</p>
                  <p className="text-white">
                    Musterstraße 123<br />
                    10115 Berlin
                  </p>
                </div>
              </li>
            </ul>
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