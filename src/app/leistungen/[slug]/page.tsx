import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, CheckCircleIcon, PhoneIcon, ClockIcon, ShieldCheckIcon, StarIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import { services } from '@/lib/services';
import { notFound } from 'next/navigation';
import FAQ from '@/components/FAQ';
import ContactCTA from '@/components/ContactCTA';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  
  if (!service) {
    return {
      title: 'Service nicht gefunden',
    };
  }

  return {
    metadataBase: new URL('https://dachdecker-berlin.de'),
    title: {
      default: service.title,
      template: '%s | Dachdecker Berlin'
    },
    description: service.description,
    openGraph: {
      type: 'website',
      locale: 'de_DE',
      url: 'https://dachdecker-berlin.de',
      siteName: 'Dachdecker Berlin',
      title: `${service.title} - Professionelle Dacharbeiten in Berlin`,
      description: service.description,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const faqItems = [
    {
      question: "Wie lange dauert die Durchführung?",
      answer: "Die Dauer hängt von verschiedenen Faktoren ab, wie Größe und Komplexität des Projekts. In einem persönlichen Gespräch erstellen wir Ihnen einen detaillierten Zeitplan."
    },
    {
      question: "Welche Garantie erhalte ich?",
      answer: "Wir gewähren auf unsere Arbeiten eine umfassende Garantie. Die genauen Garantiebedingungen besprechen wir gerne in einem persönlichen Gespräch."
    },
    {
      question: "Arbeiten Sie mit Festpreisen?",
      answer: "Ja, nach einer gründlichen Bestandsaufnahme erhalten Sie von uns ein detailliertes Festpreisangebot ohne versteckte Kosten."
    },
    {
      question: "Sind Sie auch kurzfristig verfügbar?",
      answer: "Für Notfälle haben wir einen 24/7 Notdienst. Für normale Aufträge stimmen wir den Zeitplan individuell mit Ihnen ab."
    },
    {
      question: "Welche Zahlungsmöglichkeiten bieten Sie an?",
      answer: "Wir akzeptieren Überweisung, EC-Karte und nach Absprache auch Ratenzahlung. Die Details klären wir gerne im persönlichen Gespräch."
    }
  ];

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
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">{service.title}</h1>
          <p className="text-lg md:text-xl text-white/90">{service.description}</p>
        </div>
      </section>

      {/* Navigation */}
      <div className="bg-white border-b sticky top-0 z-20">
        <div className="container mx-auto px-4">
          <Link 
            href="/leistungen" 
            className="inline-flex items-center text-primary hover:text-primary/80 py-4"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2" />
            Zurück zur Übersicht
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Service Overview */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-secondary-200 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Unsere Leistungen im Überblick</h2>
            <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.details.map((detail, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{detail.title}</h3>
                    <p className="text-gray-600">{detail.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Benefits */}
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl border border-primary-200 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900">Ihre Vorteile</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <ShieldCheckIcon className="w-8 h-8 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">Qualitätsgarantie</h3>
                  <p className="text-gray-600">Hochwertige Materialien und fachgerechte Ausführung</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <ClockIcon className="w-8 h-8 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">Schnelle Ausführung</h3>
                  <p className="text-gray-600">Termingerechte und zügige Durchführung</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <StarIcon className="w-8 h-8 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">25 Jahre Erfahrung</h3>
                  <p className="text-gray-600">Langjährige Expertise in {service.title.toLowerCase()}</p>
                </div>
              </div>
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <UserGroupIcon className="w-8 h-8 text-primary mr-4" />
                <div>
                  <h3 className="font-semibold mb-2">Persönliche Beratung</h3>
                  <p className="text-gray-600">Individuelle Lösungen für Ihre Anforderungen</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section with new component */}
          <FAQ items={faqItems} />

          {/* Contact Section with new component */}
          <ContactCTA serviceName={service.title} />
        </div>
      </div>
    </div>
  );
}
