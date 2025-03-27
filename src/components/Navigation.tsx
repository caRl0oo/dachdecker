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
    <nav className="bg-white border-b border-secondary-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
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
                className="text-gray-600 hover:text-primary"
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
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary"
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-secondary-200">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="tel:+491234567890"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-primary hover:bg-primary/90"
                >
                  <PhoneIcon className="w-5 h-5 inline-block mr-2" />
                  +49 123 456 7890
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 