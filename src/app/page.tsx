import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
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

      {/* Back to Top Button */}
      <BackToTop />
    </main>
  );
} 