"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Stats from '@/components/Stats';
import AnimatedSection from '@/components/AnimatedSection';
import { CheckCircleIcon, UserCircleIcon, TrophyIcon } from '@heroicons/react/24/outline';

export default function AboutUs() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center">
        <Image
          src="/hero-roof.jpg"
          alt="Dachdecker bei der Arbeit"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Über uns
            </h1>
            <p className="text-xl md:text-2xl">
              Ihr verlässlicher Partner für alle Dacharbeiten seit 2015
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Unternehmen Section */}
      <AnimatedSection id="firma" className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Unser Unternehmen</h2>
                <p className="text-gray-700 mb-4">
                  Seit unserer Gründung im Jahr 2015 haben wir uns zu einem der führenden Dachdeckerbetriebe in München entwickelt. 
                  Unser Unternehmen steht für Qualität, Zuverlässigkeit und professionelle Ausführung aller Dacharbeiten.
                </p>
                <p className="text-gray-700 mb-4">
                  Als Familienunternehmen legen wir besonderen Wert auf persönlichen Kontakt und maßgeschneiderte Lösungen für jeden Kunden. 
                  Wir sind stolz darauf, dass viele unserer Aufträge auf Empfehlungen zufriedener Kunden basieren.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Familienbetrieb mit Tradition und Innovation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Qualifizierte Fachkräfte und moderne Ausstattung</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-6 h-6 text-primary mr-2 flex-shrink-0 mt-0.5" />
                    <span>Nachhaltigkeit und Umweltbewusstsein</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/team.svg"
                  alt="Unser Firmengebäude"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Team Section */}
      <AnimatedSection id="team" className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Unser Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="relative h-64">
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                      <UserCircleIcon className="w-20 h-20 text-primary/60" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1">Max Mustermann</h3>
                    <p className="text-primary mb-3">Dachdeckermeister</p>
                    <p className="text-gray-600 text-sm">
                      Mit über 15 Jahren Erfahrung im Dachdeckerhandwerk sorgt Max für die professionelle Ausführung aller Projekte.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <p className="text-lg text-gray-700">
                Unser erfahrenes Team von qualifizierten Dachdeckern steht Ihnen mit Rat und Tat zur Seite. 
                Mit jahrelanger Erfahrung und kontinuierlicher Weiterbildung garantieren wir Ihnen beste 
                Qualität bei allen Dacharbeiten.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Referenzen Section */}
      <AnimatedSection id="referenzen" className="w-full py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Unsere Referenzen</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                  <div className="relative h-48">
                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                      <TrophyIcon className="w-12 h-12 text-primary/40" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">Dachsanierung in München-Schwabing</h3>
                    <p className="text-gray-600 mb-4">
                      Komplette Sanierung eines Steildachs mit 180m² Fläche inklusive neuer Dämmung und Dachfenster.
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="mr-2">Abgeschlossen:</span>
                      <span>September 2023</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Zertifikate Section */}
      <AnimatedSection id="zertifikate" className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Unsere Zertifikate</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Meisterbetrieb', 'ISO 9001', 'Fachbetrieb', 'Nachhaltigkeit'].map((cert, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center">
                  <div className="w-24 h-24 mb-4">
                    <Image
                      src={`/images/certificates/${cert.toLowerCase().replace(/\s+/g, '')}.svg`}
                      alt={cert}
                      width={96}
                      height={96}
                    />
                  </div>
                  <h3 className="text-center font-medium">{cert}</h3>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-gray-700">
                Als zertifizierter Fachbetrieb garantieren wir höchste Qualitätsstandards und kontinuierliche Weiterbildung unserer Mitarbeiter.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
} 