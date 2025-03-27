"use client";

import { CheckCircleIcon, UserGroupIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    id: 1,
    name: 'Jahre Erfahrung',
    value: 35,
    icon: StarIcon,
  },
  {
    id: 2,
    name: 'Zufriedene Kunden',
    value: 500,
    icon: UserGroupIcon,
  },
  {
    id: 3,
    name: 'Abgeschlossene Projekte',
    value: 1000,
    icon: CheckCircleIcon,
  },
  {
    id: 4,
    name: 'Garantierte Qualität',
    value: 100,
    icon: ShieldCheckIcon,
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Erfolgszahlen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Qualität und Erfahrung, die sich in Zahlen widerspiegelt
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {stat.value}+
              </div>
              <div className="text-gray-600">{stat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 