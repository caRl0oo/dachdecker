"use client";

import { useEffect, useRef, useState } from 'react';
import { CheckCircleIcon, UserGroupIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

interface CounterProps {
  end: number;
  duration: number;
  suffix?: string;
}

function Counter({ end, duration, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = countRef.current;
    
    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Easing-Funktion für smoothere Animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      
      const currentCount = Math.floor(startValue + (end - startValue) * easedProgress);
      setCount(currentCount);
      countRef.current = currentCount;

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

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
    suffix: '+',
    icon: UserGroupIcon,
  },
  {
    id: 3,
    name: 'Abgeschlossene Projekte',
    value: 1000,
    suffix: '+',
    icon: CheckCircleIcon,
  },
  {
    id: 4,
    name: 'Garantierte Qualität',
    value: 100,
    suffix: '%',
    icon: ShieldCheckIcon,
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
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
                {isVisible ? (
                  <Counter
                    end={stat.value}
                    duration={2000}
                    suffix={stat.suffix}
                  />
                ) : (
                  '0'
                )}
              </div>
              <div className="text-gray-600">{stat.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 