import Link from 'next/link';
import { PhoneIcon } from '@heroicons/react/24/outline';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-primary-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Bereit für Ihr Dachprojekt?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Lassen Sie uns gemeinsam Ihr Dachprojekt verwirklichen. Wir beraten Sie gerne persönlich und erstellen Ihnen ein individuelles Angebot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-lg font-medium rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Kontakt aufnehmen
            </Link>
            <Link
              href="tel:+491234567890"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white text-lg font-medium rounded-full hover:bg-primary-600 transition-all duration-300 transform hover:scale-105"
            >
              <PhoneIcon className="w-5 h-5 mr-2" />
              030 1234567
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 