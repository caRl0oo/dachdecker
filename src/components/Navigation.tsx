'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  PhoneIcon, 
  Bars3Icon, 
  XMarkIcon, 
  HomeIcon, 
  UserGroupIcon,
  WrenchScrewdriverIcon,
  PhoneArrowUpRightIcon,
  ArrowRightIcon,
  EnvelopeIcon,
  ClockIcon,
  MapPinIcon,
  ChevronRightIcon,
  ClipboardDocumentIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/lib/config'

// Erweiterte Menüstruktur mit Unterkategorien
const menuItems = [
  { 
    name: 'Start', 
    href: '/',
    icon: HomeIcon,
    description: 'Zurück zur Startseite'
  },
  { 
    name: 'Über uns', 
    href: '/ueber-uns',
    icon: UserGroupIcon,
    description: 'Erfahren Sie mehr über unser Unternehmen',
    subItems: [
      { name: 'Unternehmen', href: '/ueber-uns#firma', description: 'Unsere Geschichte und Mission' },
      { name: 'Team', href: '/ueber-uns#team', description: 'Lernen Sie unsere Experten kennen' },
      { name: 'Referenzen', href: '/ueber-uns#referenzen', description: 'Erfolgreich abgeschlossene Projekte' },
      { name: 'Zertifikate', href: '/ueber-uns#zertifikate', description: 'Unsere Qualitätsnachweise' },
    ]
  },
  { 
    name: 'Leistungen', 
    href: '/leistungen',
    icon: WrenchScrewdriverIcon,
    description: 'Entdecken Sie unser Leistungsspektrum',
    subItems: [
      { name: 'Steildach', href: '/leistungen/steildach', description: 'Reparatur und Neueindeckung' },
      { name: 'Flachdach', href: '/leistungen/flachdach', description: 'Abdichtung und Sanierung' },
      { name: 'Dachbegrünung', href: '/leistungen/begruenung', description: 'Ökologisch und nachhaltig' },
      { name: 'Dachsanierung', href: '/leistungen/sanierung', description: 'Modernisierung und Reparatur' },
      { name: 'Klempnerarbeiten', href: '/leistungen/klempner', description: 'Fachgerechte Metallarbeiten' },
      { name: 'Notdienst', href: '/leistungen/notfall', description: '24h Notfallservice' },
    ]
  },
  {
    name: 'Formulare',
    href: '/formulare',
    icon: ClipboardDocumentIcon,
    description: 'Praktische Tools für Ihr Dachprojekt',
    subItems: [
      { name: 'Kostenrechner', href: '/formulare/kostenrechner', description: 'Berechnen Sie Ihre Dachkosten' },
      { name: 'Anfrage-Formular', href: '/formulare/anfrage', description: 'Detailliertes Anfrageformular' },
    ]
  },
  {
    name: 'Premium', 
    href: '/premium',
    icon: SparklesIcon,
    description: 'Entdecken Sie unsere Premium-Features',
    subItems: [
      { name: 'Terminbuchung', href: '/formulare/terminbuchung', description: 'Online-Terminbuchung für Kunden' },
      { name: 'Alle Premium-Features', href: '/premium', description: 'Übersicht aller Premium-Funktionen' },
    ]
  },
  { 
    name: 'Kontakt', 
    href: '/kontakt',
    icon: PhoneArrowUpRightIcon,
    description: 'Nehmen Sie Kontakt mit uns auf'
  },
]

// Aktualisiere kontaktInfo mit Werten aus der Konfiguration
const contactInfo = {
  phone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: siteConfig.contact.address,
  hours: siteConfig.contact.hours
}

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll-Event-Handler für transparenten Header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isOpen ? 'bg-white shadow-lg' : 'bg-white/80 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-28">
            {/* Logo - Centered on smaller screens */}
            <div className="flex-1 flex justify-center lg:justify-start">
              <Link href="/" className="flex items-center">
                <Image
                  src={siteConfig.logo.main}
                  alt={siteConfig.siteName}
                  width={siteConfig.logo.width}
                  height={siteConfig.logo.height}
                  className="w-auto h-28"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex flex-1 items-center justify-end">
              <div className="flex items-center">
                {menuItems.map((item) => (
                  <div 
                    key={item.name}
                    className="relative group mx-1"
                    onMouseEnter={() => item.subItems && setActiveCategory(item.name)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center py-2 px-1.5 text-gray-700 hover:text-primary transition-colors duration-200 text-sm whitespace-nowrap"
                    >
                      <item.icon className="w-3.5 h-3.5 mr-0.5" />
                      {item.name}
                      {item.subItems && (
                        <ChevronRightIcon className="w-3 h-3 ml-0.5 group-hover:rotate-90 transition-transform duration-200" />
                      )}
                    </Link>
                    
                    {/* Underline Animation */}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                  </div>
                ))}
              </div>
              
              {/* Call Button */}
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="ml-2 inline-flex items-center px-2 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <PhoneIcon className="w-3 h-3 mr-1" />
                {contactInfo.phone}
              </a>
            </div>

            {/* Mobile Menu Button - Aligned to the right */}
            <div className="lg:hidden flex justify-end">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100"
                aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
              >
                {isOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu for Desktop */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50 hidden lg:block"
              onMouseEnter={() => setActiveCategory(activeCategory)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <div className="container mx-auto py-8 px-4">
                {menuItems.map((item) => 
                  item.name === activeCategory && item.subItems && (
                    <div key={item.name} className="grid grid-cols-12 gap-8">
                      {/* Category Description */}
                      <div className="col-span-3 border-r border-gray-100 pr-8">
                        <div className="flex items-center mb-4 text-primary">
                          <item.icon className="w-6 h-6 mr-2" />
                          <h3 className="text-xl font-semibold">{item.name}</h3>
                        </div>
                        <p className="text-gray-600 mb-6">{item.description}</p>
                        <Link 
                          href={item.href}
                          className="inline-flex items-center text-primary hover:text-primary-600 font-medium group"
                        >
                          Alle {item.name} ansehen
                          <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                      </div>
                      
                      {/* Subcategories Grid */}
                      <div className="col-span-6">
                        <div className="grid grid-cols-2 gap-6">
                          {item.subItems.map((subItem) => (
                            <Link 
                              key={subItem.name} 
                              href={subItem.href}
                              className="group"
                            >
                              <div className="p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <h4 className="font-medium text-gray-900 group-hover:text-primary transition-colors duration-200">
                                  {subItem.name}
                                </h4>
                                <p className="text-sm text-gray-600 mt-1">{subItem.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* Contact Info */}
                      <div className="col-span-3 bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Kontakt</h4>
                        <div className="space-y-3">
                          <div className="flex items-center text-gray-600">
                            <PhoneIcon className="w-5 h-5 mr-3 text-primary" />
                            <span>{contactInfo.phone}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <EnvelopeIcon className="w-5 h-5 mr-3 text-primary" />
                            <span>{contactInfo.email}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPinIcon className="w-5 h-5 mr-3 text-primary" />
                            <span>{contactInfo.address}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <ClockIcon className="w-5 h-5 mr-3 text-primary" />
                            <span>{contactInfo.hours}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu Expanded */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-28 left-0 right-0 bg-white z-40 shadow-lg lg:hidden"
          >
            <div className="px-4 pt-4 pb-6 space-y-4 divide-y divide-gray-100 max-h-[calc(100vh-7rem)] overflow-y-auto">
              {/* Main Categories and their SubItems */}
              <div className="py-3 space-y-3">
                {menuItems.map((item) => (
                  <div key={item.name} className="space-y-1">
                    <Link
                      href={item.href}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 active:bg-gray-100 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="bg-gray-100 rounded-full p-2 mr-3 text-primary">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-900 block">{item.name}</span>
                        <span className="text-xs text-gray-500 truncate block max-w-[180px]">
                          {item.description}
                        </span>
                      </div>
                    </Link>
                    
                    {/* SubItems for each category */}
                    {item.subItems && (
                      <div className="ml-12 mt-2 space-y-1 border-l-2 border-gray-100 pl-3">
                        {item.subItems.map((subItem, index) => (
                          <Link
                            key={index}
                            href={subItem.href}
                            className="flex items-center p-2 rounded-lg hover:bg-gray-50 active:bg-gray-100"
                            onClick={() => setIsOpen(false)}
                          >
                            <span className="text-sm text-gray-700">{subItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact */}
              <div className="py-3 space-y-3">
                <h3 className="text-xs uppercase font-semibold text-gray-500 px-2 py-2">Kontakt</h3>
                <div className="space-y-2">
                  <a
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                    className="flex items-center p-3 hover:bg-gray-50 rounded-lg group"
                  >
                    <PhoneIcon className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                      {contactInfo.phone}
                    </span>
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center p-3 hover:bg-gray-50 rounded-lg group"
                  >
                    <EnvelopeIcon className="w-4 h-4 text-primary mr-3" />
                    <span className="text-sm text-gray-700 group-hover:text-primary transition-colors">
                      {contactInfo.email}
                    </span>
                  </a>
                  <div className="flex items-start p-3">
                    <ClockIcon className="w-4 h-4 text-primary mr-3 mt-0.5" />
                    <span className="text-sm text-gray-700">
                      {contactInfo.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <Link
                  href="/kontakt"
                  className="block w-full rounded-lg bg-primary text-white text-center py-3 font-medium shadow-sm hover:bg-primary-dark transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Kostenloses Angebot anfordern
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Adjust spacer height to match new navbar height */}
      <div className="h-28"></div>
    </>
  )
} 