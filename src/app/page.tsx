import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, SparklesIcon } from '@heroicons/react/24/outline';
import StatsSection from '@/components/StatsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import AnimatedSection from '@/components/AnimatedSection';
import BackToTop from '@/components/BackToTop';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/services';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Premium Banner */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-2 text-center">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <SparklesIcon className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">
            Template in der <span className="font-bold">Standard-Version</span> - 
            <a href="#premium" className="underline ml-1 font-bold hover:text-white/90 transition-colors">
              Premium-Version mit mehr Features entdecken
            </a>
          </span>
        </div>
      </div>

      {/* Hero Section mit Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero-roof.jpg"
            alt="Dachdecker München"
            fill
            className="object-cover transform scale-105 animate-ken-burns"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
            Ihr Dachdecker-Meisterbetrieb in München
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-delayed">
            Von der Reparatur bis zur Komplettsanierung - Wir sind Ihr kompetenter Partner für alle Dacharbeiten
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed-2">
            <Link 
              href="/#contact" 
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-lg font-medium rounded-full text-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Kostenlose Beratung
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full p-1">
            <div className="w-1.5 h-1.5 bg-white rounded-full mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Über uns Section */}
      <AnimatedSection>
        <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8 text-gradient">Ihre Dachdeckerei in München</h2>
              <p className="text-lg text-gray-600 mb-12">
                Als Meisterbetrieb stehen wir für höchste Qualität und Zuverlässigkeit bei allen Dacharbeiten.
                Mit modernster Technik und traditionellem Handwerk realisieren wir Ihre Projekte professionell und termingerecht.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card-modern hover-scale">
                  <div className="text-4xl font-bold text-gradient mb-2">24/7</div>
                  <div className="text-gray-600">Notdienst verfügbar</div>
                </div>
                <div className="card-modern hover-scale">
                  <div className="text-4xl font-bold text-gradient mb-2">100%</div>
                  <div className="text-gray-600">Qualitätsgarantie</div>
                </div>
                <div className="card-modern hover-scale">
                  <div className="text-4xl font-bold text-gradient mb-2">10</div>
                  <div className="text-gray-600">Jahre Gewährleistung</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Services Section */}
      <AnimatedSection>
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Unsere Leistungen
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Professionelle Dacharbeiten für Ihr Zuhause oder Geschäft
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.slug}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  slug={service.slug}
                />
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection>
        <StatsSection />
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection>
        <TestimonialsSection />
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <CTASection />
      </AnimatedSection>

      {/* Kontakt Section */}
      <AnimatedSection>
        <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Kontaktieren Sie uns</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h3 className="text-2xl font-semibold mb-8">Kontaktdaten</h3>
                  <div className="card-modern hover-scale">
                    <div className="flex items-center space-x-4">
                      <PhoneIcon className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-semibold">Telefon</p>
                        <a href="tel:0172-3158847" className="text-gray-600 hover:text-primary">0172 - 315 88 47</a>
                      </div>
                    </div>
                  </div>
                  <div className="card-modern hover-scale">
                    <div className="flex items-center space-x-4">
                      <EnvelopeIcon className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-semibold">E-Mail</p>
                        <a href="mailto:info@dachdecker-muenchen.de" className="text-gray-600 hover:text-primary">
                          info@dachdecker-muenchen.de
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-modern hover-scale">
                    <div className="flex items-center space-x-4">
                      <MapPinIcon className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-semibold">Adresse</p>
                        <p className="text-gray-600">Musterstraße 123, 80333 München</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-modern">
                  <h3 className="text-2xl font-semibold mb-6">Schnellanfrage</h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Ihr Name"
                        className="input-modern"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Ihre E-Mail"
                        className="input-modern"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Ihre Nachricht"
                        rows={4}
                        className="input-modern"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn-primary w-full"
                    >
                      Nachricht senden
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Premium Features Section */}
      <section id="premium" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">Premium-Version</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Zusätzliche Premium-Features</h2>
            <p className="text-lg text-gray-600">
              Nutzen Sie weitere fortschrittliche Funktionen, die den Wert Ihrer Website deutlich steigern.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Termin-Buchungssystem</h3>
              <p className="text-gray-600 mb-4">
                Integriertes Kalendersystem zur Online-Terminvereinbarung mit automatischen Bestätigungen.
              </p>
              <span className="text-sm font-medium text-primary">Nur in der Premium-Version</span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Live-Chat Integration</h3>
              <p className="text-gray-600 mb-4">
                Direkter Kundenkontakt über integrierten Chat mit Offline-Nachrichten und Lead-Erfassung.
              </p>
              <span className="text-sm font-medium text-primary">Nur in der Premium-Version</span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Bewertungs-Management</h3>
              <p className="text-gray-600 mb-4">
                System zur Sammlung und Verwaltung von Kundenbewertungen mit Einbindung von Google Reviews.
              </p>
              <span className="text-sm font-medium text-primary">Nur in der Premium-Version</span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Online-Bezahlmodul</h3>
              <p className="text-gray-600 mb-4">
                Sichere Zahlungsabwicklung für Anzahlungen oder Rechnungen direkt über die Website.
              </p>
              <span className="text-sm font-medium text-primary">Nur in der Premium-Version</span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Erweiterte Analytics</h3>
              <p className="text-gray-600 mb-4">
                Detaillierte Benutzerstatistiken und Conversion-Tracking mit Dashboard zur Leistungsüberwachung.
              </p>
              <span className="text-sm font-medium text-primary">Nur in der Premium-Version</span>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-primary/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Push-Benachrichtigungen</h3>
              <p className="text-gray-600 mb-4">
                Browser-Benachrichtigungen für Aktionen, Sonderangebote und Kundeninteraktionen.
              </p>
              <span className="text-sm font-medium text-primary">Nur in der Premium-Version</span>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="#" className="inline-block py-3 px-8 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
              Premium-Version erwerben
            </a>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  );
} 