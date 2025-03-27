import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircleIcon, PhoneIcon, EnvelopeIcon, MapPinIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { services } from '@/lib/services';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section mit Parallax-Effekt */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 scale-105" style={{ transform: 'translateZ(0)' }}>
          <Image
            src="/hero-roof.jpg"
            alt="Professionelle Dachdeckerarbeiten"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Ihr Dachdecker in Berlin</h1>
          <p className="text-xl text-white/90 mb-8">Professionelle Dacharbeiten mit über 35 Jahren Erfahrung</p>
          <a
            href="#contact"
            className="btn-primary inline-block"
          >
            Jetzt anfragen
          </a>
        </div>
      </section>

      {/* Über uns Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl font-bold mb-8 text-gradient">Ihre Dachdeckerei in Berlin</h2>
            <p className="text-lg text-gray-600 mb-12">
              Vor über 35 Jahren in Berlin gegründet, sind wir Ihr zuverlässiger Partner für sämtliche Dachdeckeraufgaben. 
              Mit unserem kompetenten Team übernehmen wir Dachdeckerarbeiten, sowie Zimmerei- und Klempneraufgaben für Sie.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-modern hover-scale">
                <div className="text-4xl font-bold text-gradient mb-2">35+</div>
                <div className="text-gray-600">Jahre Erfahrung</div>
              </div>
              <div className="card-modern hover-scale">
                <div className="text-4xl font-bold text-gradient mb-2">1000+</div>
                <div className="text-gray-600">Zufriedene Kunden</div>
              </div>
              <div className="card-modern hover-scale">
                <div className="text-4xl font-bold text-gradient mb-2">8</div>
                <div className="text-gray-600">Experten im Team</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Von der Flachdachabdichtung bis zur Dachsanierung - wir bieten Ihnen 
              professionelle Lösungen für alle Ihre Dachprobleme.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden group">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    href={`/leistungen/${service.slug}`}
                    className="text-primary hover:text-primary/80 inline-flex items-center"
                  >
                    Mehr erfahren
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white">
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
                      <a href="mailto:info@dachdecker-berlin.de" className="text-gray-600 hover:text-primary">
                        info@dachdecker-berlin.de
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-modern hover-scale">
                  <div className="flex items-center space-x-4">
                    <MapPinIcon className="w-6 h-6 text-primary" />
                    <div>
                      <p className="font-semibold">Adresse</p>
                      <p className="text-gray-600">Zwickauer Damm 87, 12355 Berlin</p>
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
    </div>
  );
} 