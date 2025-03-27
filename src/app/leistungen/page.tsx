import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Unsere Leistungen | Dachdecker Berlin',
  description: 'Entdecken Sie unsere professionellen Dacharbeiten in Berlin. Von Dachsanierung bis Dachbegrünung - wir sind Ihr kompetenter Partner.',
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/services/hero.jpg"
            alt="Unsere Leistungen"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Unsere Leistungen</h1>
          <p className="text-lg md:text-xl text-white/90">Professionelle Dacharbeiten für Berlin und Umgebung</p>
        </div>
      </section>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.slug}
              href={`/leistungen/${service.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-secondary-200"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors duration-200">
                  {service.title}
                </h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 