"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import Stats from '@/components/Stats';

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

      {/* Team Section */}
      <section className="w-full py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Unser Team</h2>
            <div className="mt-8 text-center">
              <p className="text-lg text-gray-700">
                Unser erfahrenes Team von qualifizierten Dachdeckern steht Ihnen mit Rat und Tat zur Seite. 
                Mit jahrelanger Erfahrung und kontinuierlicher Weiterbildung garantieren wir Ihnen beste 
                Qualität bei allen Dacharbeiten.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 