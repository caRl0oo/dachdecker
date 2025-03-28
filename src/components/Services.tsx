"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    title: "Steildach",
    description: "Professionelle Steildachdeckung mit modernsten Materialien",
    imageUrl: "/images/services/steildach.svg"
  },
  {
    title: "Klempnerarbeiten",
    description: "Fachgerechte Klempnerarbeiten für dichte Dächer",
    imageUrl: "/images/services/klempner.svg"
  },
  {
    title: "Flachdach",
    description: "Zuverlässige Flachdachabdichtung und -begrünung",
    imageUrl: "/images/services/flachdach.svg"
  },
  {
    title: "Dachbegrünung",
    description: "Nachhaltige Dachbegrünung für bessere Umweltbilanz",
    imageUrl: "/images/services/begruenung.svg"
  },
  {
    title: "Dachsanierung",
    description: "Professionelle Dachsanierung und -reparatur",
    imageUrl: "/images/services/sanierung.svg"
  },
  {
    title: "Notfallservice",
    description: "24/7 Notfallservice für dringende Dachreparaturen",
    imageUrl: "/images/services/notfall.svg"
  }
];

export default function Services() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Unsere Leistungen</h2>
          <p className="text-lg text-gray-600">Professionelle Dachdeckerarbeiten für Ihr Zuhause</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  fill
                  className="object-contain p-4"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 