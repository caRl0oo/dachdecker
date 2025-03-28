import { Metadata } from 'next';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Kontakt | Dachdecker München',
  description: 'Nehmen Sie Kontakt mit uns auf. Wir beraten Sie gerne zu allen Themen rund ums Dach.',
};

const contactInfo = {
  phone: '+49 123 456 7890',
  email: 'info@dachdecker-muenchen.de',
  address: 'Musterstraße 123, 80331 München',
  hours: 'Mo-Fr: 8:00-17:00 Uhr'
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-roof.jpg"
            alt="Kontakt"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Kontakt</h1>
          <p className="text-lg md:text-xl text-white/90">Wir sind für Sie da</p>
        </div>
      </section>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Kontaktinformationen</h2>
            <p className="text-gray-600 mb-8">
              Sie haben Fragen zu unseren Leistungen oder benötigen ein Angebot? 
              Kontaktieren Sie uns – wir sind gerne für Sie da.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Telefon</h3>
                  <p className="text-gray-600">{contactInfo.phone}</p>
                  <p className="text-sm text-gray-500 mt-1">Mo-Fr 8:00-17:00 Uhr</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <EnvelopeIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">E-Mail</h3>
                  <p className="text-gray-600">{contactInfo.email}</p>
                  <p className="text-sm text-gray-500 mt-1">Wir antworten innerhalb von 24 Stunden</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <MapPinIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Adresse</h3>
                  <p className="text-gray-600">{contactInfo.address}</p>
                  <p className="text-sm text-gray-500 mt-1">Termine nach Vereinbarung</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg mr-4">
                  <ClockIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Öffnungszeiten</h3>
                  <p className="text-gray-600">{contactInfo.hours}</p>
                  <p className="text-sm text-gray-500 mt-1">An Feiertagen geschlossen</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-xl mb-4">Notfallservice</h3>
              <p className="text-gray-600 mb-4">
                Bei Notfällen wie Sturmschäden oder Wassereinbrüchen erreichen Sie 
                unseren 24-Stunden-Notdienst unter der Notfallnummer:
              </p>
              <a 
                href="tel:+491234567890" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-600 transition-colors duration-200"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                +49 123 456 7890
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-secondary-200 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Schreiben Sie uns</h2>
            <ContactForm />
          </div>
          
          {/* Map */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">So finden Sie uns</h2>
            <div className="rounded-xl overflow-hidden h-[400px] bg-gray-200 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Kartenansicht wird hier eingebettet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 