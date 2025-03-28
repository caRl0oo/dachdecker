'use client';

import Link from 'next/link';
import Image from 'next/image';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ArrowTopRightOnSquareIcon 
} from '@heroicons/react/24/outline';
import { siteConfig } from '@/lib/config';

// Footer-Navigationsgruppen
const footerNav = [
  {
    title: 'Unternehmen',
    links: [
      { name: 'Über uns', href: '/ueber-uns' },
      { name: 'Team', href: '/ueber-uns#team' },
      { name: 'Referenzen', href: '/ueber-uns#referenzen' },
      { name: 'Zertifikate', href: '/ueber-uns#zertifikate' },
    ]
  },
  {
    title: 'Leistungen',
    links: [
      { name: 'Steildach', href: '/leistungen/steildach' },
      { name: 'Flachdach', href: '/leistungen/flachdach' },
      { name: 'Dachbegrünung', href: '/leistungen/begruenung' },
      { name: 'Dachsanierung', href: '/leistungen/sanierung' },
      { name: 'Klempnerarbeiten', href: '/leistungen/klempner' },
      { name: 'Notdienst', href: '/leistungen/notfall' },
    ]
  },
  {
    title: 'Rechtliches',
    links: [
      { name: 'Impressum', href: '/impressum' },
      { name: 'Datenschutz', href: '/datenschutz' },
      { name: 'AGB', href: '/agb' },
      { name: 'Sitemap', href: '/sitemap.xml', external: true },
    ]
  },
];

// Social Media Icons
const socialIcons = [
  {
    name: 'Facebook',
    href: siteConfig.social.facebook,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: siteConfig.social.instagram,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 3.982-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-3.982-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
      </svg>
    ),
  },
];

export default function Footer() {
  const footerLinks = siteConfig.pages.filter(page => page.showInFooter);
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {siteConfig.footer.showLogo && (
              <Link href="/" className="inline-block mb-6">
                <Image
                  src={siteConfig.logo.main}
                  alt={siteConfig.siteName}
                  width={180}
                  height={60}
                  className="h-16 w-auto brightness-0 invert"
                />
              </Link>
            )}
            <p className="text-gray-400 mb-4 max-w-md">
              {siteConfig.siteDescription}
            </p>
            
            <div className="space-y-3 mt-6">
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary-400 mr-3" />
                <a 
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, '')}`} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-primary-400 mr-3" />
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-primary-400 mr-3 mt-1" />
                <p className="text-gray-300">
                  {siteConfig.contact.address}
                </p>
              </div>
            </div>
            
            {/* Social Links */}
            {siteConfig.footer.showSocialIcons && (
              <div className="mt-6 flex space-x-4">
                {socialIcons.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            )}
          </div>
          
          {/* Navigation Columns */}
          {footerNav.map((group) => (
            <div key={group.title}>
              <h3 className="text-lg font-semibold mb-4 text-white">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-500 transition-colors flex items-center"
                      >
                        {link.name}
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                      </a>
                    ) : (
                      <Link 
                        href={link.href}
                        className="text-gray-400 hover:text-primary-500 transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Newsletter */}
          {siteConfig.footer.showNewsletter && (
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Melden Sie sich an und bleiben Sie informiert über aktuelle Angebote und Neuigkeiten.
              </p>
              <form className="mt-4">
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Ihre E-Mail"
                    className="bg-gray-800 border border-gray-700 rounded px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded transition-colors"
                  >
                    Anmelden
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Mit der Anmeldung akzeptieren Sie unsere Datenschutzerklärung.
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.siteName}. Alle Rechte vorbehalten.
          </p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-gray-500 text-sm">
              Erstellt mit ♥ in München
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 