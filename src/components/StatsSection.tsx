"use client";

import { useEffect, useState } from 'react';
import { CheckCircleIcon, UserGroupIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const stats = [
  {
    id: 1,
    name: 'Jahre Erfahrung',
    value: 25,
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="stats-section" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Unsere Erfolgszahlen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Über 25 Jahre Erfahrung in der Dachdeckerbranche - Qualität und Zuverlässigkeit stehen bei uns an erster Stelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4">
                <stat.icon className="w-12 h-12 text-primary" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">
                {isVisible ? `${stat.value}+` : '0+'}
              </div>
              <div className="text-gray-600">{stat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 