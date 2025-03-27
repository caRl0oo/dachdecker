import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50">
            <span className="text-2xl font-bold text-primary">Dachdecker Berlin</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Startseite
            </Link>
            <Link 
              href="/leistungen" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Leistungen
            </Link>
            <Link 
              href="/referenzen" 
              className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
            >
              Referenzen
            </Link>
            <Link 
              href="/#contact" 
              className="inline-flex items-center px-6 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full transition-all duration-200 font-medium"
            >
              Kontakt
            </Link>
            <Link 
              href="tel:+491234567890" 
              className="inline-flex items-center px-4 py-2.5 bg-primary text-white rounded-full hover:bg-primary-600 transition-colors duration-200 font-medium"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              030 1234567
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative z-50 p-2 text-gray-700 hover:text-primary transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <Link 
              href="/" 
              className="text-2xl text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Startseite
            </Link>
            <Link 
              href="/leistungen" 
              className="text-2xl text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Leistungen
            </Link>
            <Link 
              href="/referenzen" 
              className="text-2xl text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Referenzen
            </Link>
            <Link 
              href="/#contact" 
              className="text-2xl text-gray-700 hover:text-primary transition-colors duration-200 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
            <Link 
              href="tel:+491234567890" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-600 transition-colors duration-200 font-medium text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <PhoneIcon className="w-6 h-6 mr-2" />
              030 1234567
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
} 