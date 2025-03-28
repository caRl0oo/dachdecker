import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo und Beschreibung */}
          <div>
            <h3 className="text-xl font-bold mb-4">Dachdecker Berlin</h3>
            <p className="text-gray-400">
              Ihr kompetenter Partner für alle Dacharbeiten in Berlin und Umgebung.
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <p className="text-gray-400">
              [Ihre Adresse]<br />
              [PLZ und Stadt]<br />
              Tel: [Ihre Telefonnummer]<br />
              E-Mail: [Ihre E-Mail]
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Startseite
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="text-gray-400 hover:text-white transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-xl font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-gray-400 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agbs" className="text-gray-400 hover:text-white transition-colors">
                  AGBs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Dachdecker Berlin. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
} 