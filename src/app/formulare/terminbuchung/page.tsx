import { Metadata } from 'next';
import Link from 'next/link';
import AppointmentBooking from '@/components/forms/AppointmentBooking';
import { siteConfig } from '@/lib/config';
import { LockClosedIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Online Terminbuchung | Dachdecker Template',
  description: 'Buchen Sie bequem online einen Beratungstermin mit unseren Dachexperten. Wählen Sie aus verfügbaren Terminen und erhalten Sie sofort eine Bestätigung.',
};

export default function AppointmentBookingPage() {
  const premiumEnabled = siteConfig.premium?.enabled;
  const appointmentBookingEnabled = premiumEnabled && siteConfig.premium?.features?.appointmentBooking;

  // Wenn das Premium-Feature nicht aktiviert ist, zeige einen alternativen Inhalt an
  if (!appointmentBookingEnabled) {
    return (
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Online-Terminbuchung</h1>
              <p className="text-lg text-gray-600 mb-8">
                Dieses Feature ist Teil unseres Premium-Pakets.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-primary/5 p-6 rounded-xl mb-6 inline-block">
                <LockClosedIcon className="h-16 w-16 text-primary mx-auto" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Premium-Feature nicht aktiviert</h2>
              <p className="text-gray-600 mb-8">
                Die Online-Terminbuchung ist ein Premium-Feature, das nicht in Ihrem aktuellen Paket enthalten ist. 
                Mit diesem Feature können Ihre Kunden direkt online Termine mit Ihnen vereinbaren.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="font-semibold mb-3">Premium-Vorteile</h3>
                <ul className="text-left space-y-2 max-w-md mx-auto">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Kalender-Integration mit freien Terminen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Automatische Bestätigungsmails</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>SMS-Erinnerungen vor dem Termin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">✓</span>
                    <span>Synchronisation mit Ihrem Firmenkalender</span>
                  </li>
                </ul>
              </div>
              
              <div className="flex justify-center">
                <Link
                  href={siteConfig.premium?.purchaseInfo?.checkoutUrl || "/premium"}
                  className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors shadow-md inline-block"
                >
                  Premium-Paket erwerben
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Online-Terminbuchung</h1>
            <p className="text-lg text-gray-600">
              Vereinbaren Sie einen Beratungstermin mit unseren Dachexperten. 
              Wählen Sie einfach einen passenden Termin und erhalten Sie sofort eine Bestätigung.
            </p>
          </div>
          
          <div id="appointment-booking" className="scroll-mt-28">
            <AppointmentBooking />
          </div>
          
          <div className="mt-16 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Vorteile unserer Online-Terminbuchung</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-primary mb-2">Flexibel & bequem</h3>
                <p className="text-gray-600 text-sm">
                  Buchen Sie Termine rund um die Uhr, auch außerhalb unserer Geschäftszeiten.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-primary mb-2">Sofortige Bestätigung</h3>
                <p className="text-gray-600 text-sm">
                  Erhalten Sie sofort eine Bestätigung per E-Mail und SMS.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-primary mb-2">Erinnerungen</h3>
                <p className="text-gray-600 text-sm">
                  Wir erinnern Sie automatisch 24 Stunden vor Ihrem Termin.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-primary mb-2">Persönliche Beratung</h3>
                <p className="text-gray-600 text-sm">
                  Sichern Sie sich einen exklusiven Beratungstermin mit unseren Experten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 