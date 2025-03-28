'use client';

import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: "24/7",
    label: "Notdienst verfügbar"
  },
  {
    value: "100%",
    label: "Qualitätsgarantie"
  },
  {
    value: "10",
    label: "Jahre Gewährleistung"
  }
];

export default function Stats() {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#FF6B00] mb-8">
          Ihre Dachdeckerei in München
        </h1>
        <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-16">
          Als Meisterbetrieb stehen wir für höchste Qualität und Zuverlässigkeit bei allen Dacharbeiten. 
          Mit modernster Technik und traditionellem Handwerk realisieren wir Ihre Projekte professionell und termingerecht.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#FF6B00] mb-4">
                {stat.value}
              </div>
              <div className="text-gray-700">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 