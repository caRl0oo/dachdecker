import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { services } from '@/lib/services';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service nicht gefunden',
    };
  }

  return {
    title: `${service.title} - Dachdecker Berlin`,
    description: service.description,
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
            quality={90}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSAyVC08MTY3LjIyOUFTRjo/Tj4yMkhiS0hHSUZJPVBQUFBQUFBQUFBQUH/2wBDAR0XFyAeIBogHh4gIiAoJCAoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{service.title}</h1>
          <p className="text-lg md:text-xl text-white/90">{service.description}</p>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Zurück zur Startseite
          </Link>

          {/* Service Details */}
          <div className="prose prose-lg max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {service.details.map((detail, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-900">{detail.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{detail.description}</p>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Kontaktieren Sie uns</h2>
              <p className="mb-6 text-gray-600">
                Haben Sie Fragen zu unseren {service.title.toLowerCase()}? Kontaktieren Sie uns für eine 
                unverbindliche Beratung. Wir erstellen Ihnen gerne ein individuelles Angebot.
              </p>
              <Link 
                href="/#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors duration-200"
              >
                Jetzt Kontakt aufnehmen
              </Link>
            </div>

            {/* Additional Info */}
            <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold mb-4 text-gray-900">Warum uns wählen?</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Jahrelange Erfahrung im Bereich {service.title}</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Qualifizierte Fachkräfte und modernste Ausrüstung</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Kostenlose Erstberatung und transparente Preisgestaltung</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">✓</span>
                  <span>Garantie auf alle ausgeführten Arbeiten</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 