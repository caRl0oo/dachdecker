"use client";

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    id: 1,
    name: 'Thomas Schmidt',
    role: 'Hausbesitzer',
    content: 'Sehr professionelle Arbeit und termingerechte Ausführung. Das Team war immer freundlich und kompetent.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Maria Weber',
    role: 'Geschäftsführerin',
    content: 'Die Dachsanierung wurde fachgerecht durchgeführt. Die Kommunikation war sehr gut und die Kosten wurden eingehalten.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Peter Müller',
    role: 'Eigentümer',
    content: 'Hervorragende Arbeit bei der Dachreparatur. Das Team war sehr zuverlässig und hat alle Details beachtet.',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Was unsere Kunden sagen
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lesen Sie die Bewertungen unserer zufriedenen Kunden und überzeugen Sie sich selbst von unserer Qualität.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
            <div className="flex items-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <StarIcon key={i} className="w-6 h-6 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-900 mb-8">
              "{testimonials[currentIndex].content}"
            </blockquote>
            <div>
              <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
              <div className="text-gray-600">{testimonials[currentIndex].role}</div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <ChevronLeftIcon className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <ChevronRightIcon className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 