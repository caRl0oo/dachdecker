'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface ContactCTAProps {
  serviceName?: string;
}

export default function ContactCTA({ serviceName }: ContactCTAProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Contact Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 mb-4 w-64"
            >
              <div className="space-y-4">
                <Link
                  href="tel:+491234567890"
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <PhoneIcon className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-medium">Anrufen</div>
                    <div className="text-sm text-gray-500">030 1234567</div>
                  </div>
                </Link>
                <Link
                  href="https://wa.me/491234567890"
                  target="_blank"
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <ChatBubbleLeftIcon className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm text-gray-500">Direkt chatten</div>
                  </div>
                </Link>
                <Link
                  href="/#contact"
                  className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                >
                  <EnvelopeIcon className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-medium">E-Mail</div>
                    <div className="text-sm text-gray-500">Nachricht senden</div>
                  </div>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary hover:bg-primary-600 text-white rounded-full p-4 shadow-lg transition-transform duration-200 hover:scale-110"
        >
          {isOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <PhoneIcon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Main CTA Section */}
      <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl shadow-lg border border-primary-200">
        <div className="flex items-start md:items-center md:justify-between flex-col md:flex-row gap-6">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-900">
              Kostenlose Beratung anfordern
            </h2>
            <p className="text-gray-600">
              {serviceName 
                ? `Lassen Sie sich zu ${serviceName} beraten`
                : 'Wir beraten Sie gerne zu allen Dacharbeiten'}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="tel:+491234567890" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-base font-medium rounded-lg text-primary hover:bg-primary hover:text-white transition-all duration-200 hover:scale-105"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              030 1234567
            </Link>
            <Link 
              href="/#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-600 transition-all duration-200 hover:scale-105 shadow-md"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>
      </div>
    </>
  );
} 