import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, CheckCircleIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { services } from '@/lib/services';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

type PageProps = {
  params: {
    slug: string;
  };
};

async function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export default async function ServicePage({ params }: PageProps) {
  const service = await getService(params.slug);

  if (!service) {
    return (
      <div className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Leistung nicht gefunden</h1>
            <Link href="/" className="text-primary hover:text-primary/80">
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section mit Parallax-Effekt */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 scale-105" style={{ transform: 'translateZ(0)' }}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
        </div>
        
        {/* Content mit Glassmorphism */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <div className="glass-effect rounded-2xl p-8 mx-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{service.title}</h1>
            <p className="text-lg md:text-xl text-white/90">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Navigation mit Glassmorphism */}
      <div className="sticky top-0 z-20 glass-effect border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-800 hover:text-primary transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Zurück zur Übersicht
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-12 animate-fade-in">
            <div className="prose max-w-none">
              <h2 className="text-3xl font-bold mb-8 text-gradient">Unsere Leistungen im Detail</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.details.map((detail, index) => (
                  <div 
                    key={index}
                    className="card-modern hover-scale"
                  >
                    <div className="flex items-start">
                      <CheckCircleIcon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="ml-4 text-gray-700">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-modern bg-gradient-to-br from-gray-50 to-white">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Warum uns wählen?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-primary mr-3" />
                    <span>Über 35 Jahre Erfahrung</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-primary mr-3" />
                    <span>Qualifizierte Fachkräfte</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-primary mr-3" />
                    <span>Modernste Materialien</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircleIcon className="w-5 h-5 text-primary mr-3" />
                    <span>Garantierte Qualitätsarbeit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact */}
          <div className="lg:col-span-1">
            <div className="card-modern sticky top-24 animate-fade-in">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">Jetzt Angebot anfordern</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ihr Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input-modern"
                    placeholder="Max Mustermann"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Ihre E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="input-modern"
                    placeholder="max@beispiel.de"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Ihre Telefonnummer
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="input-modern"
                    placeholder="0123 456789"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Ihre Nachricht
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="input-modern"
                    placeholder="Beschreiben Sie Ihr Anliegen..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Anfrage senden
                </button>
              </form>

              <div className="mt-8 pt-6 border-t">
                <p className="text-sm text-gray-600 mb-4">Oder rufen Sie uns direkt an:</p>
                <a 
                  href="tel:0172-3158847"
                  className="flex items-center justify-center gap-2 hover-scale bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-lg transition-colors"
                >
                  <PhoneIcon className="w-5 h-5" />
                  0172 - 315 88 47
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services mit modernem Design */}
      <section className="bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gradient text-center">Weitere Leistungen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter(s => s.slug !== params.slug)
              .slice(0, 3)
              .map((relatedService, index) => (
                <Link 
                  key={index}
                  href={`/leistungen/${relatedService.slug}`}
                  className="card-modern hover-scale"
                >
                  <h3 className="text-xl font-semibold mb-3">{relatedService.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{relatedService.description}</p>
                  <span className="text-primary font-medium inline-flex items-center">
                    Mehr erfahren
                    <ArrowLeftIcon className="w-4 h-4 ml-2 rotate-180" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
} 