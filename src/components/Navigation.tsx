'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { PhoneIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const menuItems = [
  { name: 'Start', href: '/' },
  { name: 'Über uns', href: '/#about' },
  { name: 'Leistungen', href: '/#services' },
  { name: 'Kontakt', href: '/#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Dachdecker Berlin
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:+491234567890"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              <PhoneIcon className="w-4 h-4 mr-2" />
              +49 123 456 7890
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:+491234567890"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90"
                onClick={() => setIsOpen(false)}
              >
                <PhoneIcon className="w-5 h-5 inline-block mr-2" />
                +49 123 456 7890
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 