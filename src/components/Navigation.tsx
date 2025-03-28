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
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

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
    name: 'Kontakt', 
    href: '/kontakt',
    icon: PhoneArrowUpRightIcon,
    description: 'Nehmen Sie Kontakt mit uns auf'
  },
]

// Kontaktinformationen für das Mega-Menü
const contactInfo = {
  phone: '+49 123 456 7890',
  email: 'info@dachdecker-muenchen.de',
  address: 'Musterstraße 123, 80331 München',
  hours: 'Mo-Fr: 8:00-17:00 Uhr'
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
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.svg"
                alt="Dachdecker München"
                width={200}
                height={60}
                className="w-auto h-10"
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              {menuItems.map((item) => (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.subItems && setActiveCategory(item.name)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <Link
                    href={item.href}
                    className="flex items-center py-2 text-gray-700 hover:text-primary transition-colors duration-200"
                  >
                    <item.icon className="w-5 h-5 mr-1.5" />
                    {item.name}
                    {item.subItems && (
                      <ChevronRightIcon className="w-4 h-4 ml-1 group-hover:rotate-90 transition-transform duration-200" />
                    )}
                  </Link>
                  
                  {/* Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
                </div>
              ))}
              
              {/* Call Button */}
              <a
                href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <PhoneIcon className="w-4 h-4 mr-2" />
                {contactInfo.phone}
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
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

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white lg:hidden pt-20 overflow-y-auto"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="space-y-6">
                {menuItems.map((item) => (
                  <div key={item.name} className="border-b border-gray-100 pb-6">
                    <div
                      className="flex items-center justify-between mb-4" 
                      onClick={() => setActiveCategory(activeCategory === item.name ? null : item.name)}
                    >
                      <div className="flex items-center text-gray-900">
                        <item.icon className="w-6 h-6 mr-3 text-primary" />
                        <span className="text-lg font-medium">{item.name}</span>
                      </div>
                      {item.subItems && (
                        <ChevronRightIcon className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                          activeCategory === item.name ? 'rotate-90' : ''
                        }`} />
                      )}
                    </div>
                    
                    <AnimatePresence>
                      {activeCategory === item.name && item.subItems && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-9 space-y-3"
                        >
                          {item.subItems.map((subItem) => (
                            <Link 
                              key={subItem.name} 
                              href={subItem.href}
                              className="block py-2 text-gray-600 hover:text-primary"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    
                    {!item.subItems && (
                      <Link 
                        href={item.href}
                        className="block ml-9 text-gray-600 hover:text-primary" 
                        onClick={() => setIsOpen(false)}
                      >
                        {item.description}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Mobile Contact Info */}
              <div className="mt-8 bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Kontakt</h3>
                <div className="space-y-4">
                  <a 
                    href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} 
                    className="flex items-center text-gray-600 hover:text-primary"
                  >
                    <PhoneIcon className="w-5 h-5 mr-3 text-primary" />
                    <span>{contactInfo.phone}</span>
                  </a>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="flex items-center text-gray-600 hover:text-primary"
                  >
                    <EnvelopeIcon className="w-5 h-5 mr-3 text-primary" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <div className="flex items-start text-gray-600">
                    <MapPinIcon className="w-5 h-5 mr-3 text-primary flex-shrink-0 mt-0.5" />
                    <span>{contactInfo.address}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ClockIcon className="w-5 h-5 mr-3 text-primary" />
                    <span>{contactInfo.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add a spacer to prevent content from being hidden under the fixed navbar */}
      <div className="h-20"></div>
    </>
  )
} 