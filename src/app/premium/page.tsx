import { Metadata } from 'next';
import Link from 'next/link';
import { CalendarIcon, ArrowUpCircleIcon, DocumentTextIcon, ChartBarIcon, ChatBubbleLeftRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Premium-Features | Dachdecker Template',
  description: 'Erweitern Sie Ihre Website mit Premium-Features wie Terminbuchung, 3D-Dachrechner und mehr für ein optimales Kundenerlebnis.',
};

// Premium Feature Definition
const premiumFeatures = [
  {
    id: 'appointmentBooking',
    title: 'Online-Terminbuchung',
    description: 'Ermöglichen Sie Ihren Kunden, Beratungstermine direkt online zu buchen. Mit Kalender-Integration, automatischen Bestätigungen und Erinnerungen.',
    icon: CalendarIcon,
    enabled: siteConfig.premium?.features?.appointmentBooking ?? false,
    demoLink: '/formulare/terminbuchung',
  },
  {
    id: 'fileUpload',
    title: 'Datei-Upload in Formularen',
    description: 'Lassen Sie Ihre Kunden Fotos, Pläne und andere Dokumente direkt über die Kontaktformulare hochladen.',
    icon: ArrowUpCircleIcon,
    enabled: siteConfig.premium?.features?.fileUpload ?? false,
    demoLink: '/formulare/anfrage?premium=true',
  },
  {
    id: 'roofCalculator3D',
    title: '3D-Dachrechner',
    description: 'Ein fortschrittlicher Rechner mit 3D-Visualisierung, der detaillierte Kostenvoranschläge basierend auf Dachform und -größe liefert.',
    icon: DocumentTextIcon,
    enabled: siteConfig.premium?.features?.roofCalculator3D ?? false,
    demoLink: '/formulare/dachrechner-3d',
  },
  {
    id: 'liveChatSupport',
    title: 'Live-Chat Support',
    description: 'Bieten Sie sofortige Unterstützung für Ihre Website-Besucher durch einen integrierten Live-Chat mit Nachrichtenverlauf.',
    icon: ChatBubbleLeftRightIcon,
    enabled: siteConfig.premium?.features?.liveChatSupport ?? false,
    demoLink: '/?chat=open',
  },
  {
    id: 'advancedAnalytics',
    title: 'Erweiterte Statistiken',
    description: 'Umfassende Analyse-Tools, um das Besucherverhalten zu verstehen, Conversion-Raten zu verfolgen und Ihre Marketing-Strategie zu optimieren.',
    icon: ChartBarIcon,
    enabled: siteConfig.premium?.features?.advancedAnalytics ?? false,
    demoLink: '/admin/analytics',
  }
];

// Preispläne
const pricingPlans = [
  {
    id: 'essential',
    name: 'Essential',
    price: '0',
    features: [
      'Responsive Design',
      'Basis-Kontaktformular',
      'Einfacher Kostenrechner',
      'SEO-Grundlagen',
      'Unbegrenzte Inhaltsseiten',
    ],
    cta: 'Kostenlos enthalten',
    recommended: false,
    ctaLink: '/',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: siteConfig.premium?.purchaseInfo?.priceMonthly.toString() || '19,99',
    features: [
      'Alles aus Essential',
      'Online-Terminbuchung',
      'Datei-Upload in Formularen',
      'Erweiterte Statistiken',
      'Prioritäts-Support',
    ],
    cta: 'Jetzt kaufen',
    recommended: true,
    ctaLink: siteConfig.premium?.purchaseInfo?.checkoutUrl || '/premium/checkout',
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: '49,99',
    features: [
      'Alles aus Premium',
      '3D-Dachrechner',
      'Live-Chat Support',
      'Individuelle Anpassungen',
      'Monatliche SEO-Optimierung',
    ],
    cta: 'Kontaktieren Sie uns',
    recommended: false,
    ctaLink: '/kontakt',
  }
];

export default function PremiumFeaturesPage() {
  const premiumEnabled = siteConfig.premium?.enabled;
  
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Premium-Features</h1>
          <p className="text-xl text-gray-600 mb-8">
            Erweitern Sie Ihre Dachdecker-Website mit leistungsstarken Tools, 
            die das Kundenerlebnis verbessern und Ihre Conversion-Raten steigern.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {premiumFeatures.map((feature) => (
            <div key={feature.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-primary/10 p-6 relative">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h2 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h2>
                <p className="text-gray-600">
                  {feature.description}
                </p>
                {feature.enabled && (
                  <div className="absolute top-4 right-4 text-green-500 flex items-center">
                    <CheckCircleIcon className="h-5 w-5 mr-1" />
                    <span className="text-xs font-medium">Aktiviert</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                {feature.enabled ? (
                  <Link 
                    href={feature.demoLink} 
                    className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
                  >
                    Feature ansehen
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                ) : (
                  <div className="text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 17V17.01M12 7V13M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Nicht aktiviert</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Pricing Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Wählen Sie Ihr Paket</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div 
                key={plan.id} 
                className={`bg-white rounded-xl shadow-md overflow-hidden border-2 ${
                  plan.recommended ? 'border-primary' : 'border-transparent'
                } transition-transform hover:scale-105 duration-300`}
              >
                {plan.recommended && (
                  <div className="bg-primary text-white text-center py-2 font-medium">
                    Empfohlen
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-bold">{plan.price} €</span>
                    <span className="text-gray-500 ml-1">/Monat</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-primary shrink-0 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={plan.ctaLink} 
                    className={`w-full block text-center py-3 rounded-md font-medium ${
                      plan.recommended 
                        ? 'bg-primary text-white hover:bg-primary-dark' 
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    } transition-colors`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mt-20 bg-primary/5 p-8 rounded-xl text-center">
          <h2 className="text-2xl font-bold mb-4">Bereit, Ihre Website zu verbessern?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Kontaktieren Sie uns noch heute, um mehr über unsere Premium-Features zu erfahren 
            oder um ein individuelles Angebot für Ihre spezifischen Anforderungen zu erhalten.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/kontakt" 
              className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors shadow-md"
            >
              Kontakt aufnehmen
            </Link>
            <Link 
              href={siteConfig.premium?.purchaseInfo?.checkoutUrl || "/premium/checkout"}
              className="px-8 py-3 bg-white text-primary border border-primary rounded-md hover:bg-primary/5 transition-colors shadow-md"
            >
              Premium-Paket erwerben
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 