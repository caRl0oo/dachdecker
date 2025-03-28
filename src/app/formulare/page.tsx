import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRightIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/lib/config';

export const metadata: Metadata = {
  title: 'Formulare | Dachdecker Template',
  description: 'Fortschrittliche Formulare für Dachdecker - Multi-Step-Formular, Kostenrechner und mehr',
};

export default function FormsPage() {
  const premiumEnabled = siteConfig.premium?.enabled;
  const appointmentBookingEnabled = premiumEnabled && siteConfig.premium?.features?.appointmentBooking;

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Formularlösungen</h1>
          <p className="text-xl text-gray-600 mb-8">
            Unsere fortschrittlichen Formularlösungen helfen Ihnen dabei, Kundenanfragen effizient zu erfassen und zu verarbeiten.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
            <div className="bg-primary/10 p-8">
              <h2 className="text-2xl font-bold mb-2 text-primary">Kostenrechner</h2>
              <p className="text-gray-600">
                Mit diesem interaktiven Rechner können Ihre Kunden die ungefähren Kosten für ihr Dachprojekt kalkulieren.
              </p>
            </div>
            <div className="p-8">
              <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-700">
                <li>Interaktive Berechnung mit Echtzeit-Ergebnissen</li>
                <li>Anpassbare Preistabellen und Leistungen</li>
                <li>Konfigurierbare Zusatzleistungen</li>
                <li>Detaillierte Aufschlüsselung der Kosten</li>
              </ul>
              <Link 
                href="/formulare/kostenrechner" 
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
              >
                Zum Kostenrechner
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
            <div className="bg-primary/10 p-8">
              <h2 className="text-2xl font-bold mb-2 text-primary">Anfrage-Formular</h2>
              <p className="text-gray-600">
                Dieses mehrstufige Formular führt Ihre Kunden durch den Anfrageprozess und 
                sammelt alle relevanten Informationen für ein präzises Angebot.
              </p>
            </div>
            <div className="p-8">
              <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-700">
                <li>Mehrstufiger Prozess mit Fortschrittsanzeige</li>
                <li>Validierung auf jeder Stufe</li>
                <li>Unterstützt verschiedene Eingabetypen</li>
                <li>Ansprechende Bestätigungsseite</li>
              </ul>
              <Link 
                href="/formulare/anfrage" 
                className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
              >
                Zum Anfrage-Formular
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
            <div className="bg-primary/10 p-8 relative">
              <div className="absolute top-3 right-3 bg-primary text-white text-xs font-bold py-1 px-2 rounded-full">
                Premium
              </div>
              <h2 className="text-2xl font-bold mb-2 text-primary">Terminbuchung</h2>
              <p className="text-gray-600">
                Mit unserem Terminbuchungssystem können Kunden direkt online Beratungstermine vereinbaren und Ihren Kalender einsehen.
              </p>
            </div>
            <div className="p-8">
              <ul className="list-disc pl-5 space-y-2 mb-8 text-gray-700">
                <li>Kalender-Integration mit freien Terminen</li>
                <li>Automatische Bestätigungsmails</li>
                <li>SMS-Erinnerungen vor dem Termin</li>
                <li>Synchronisation mit Ihrem Firmenkalender</li>
              </ul>
              {appointmentBookingEnabled ? (
                <Link 
                  href="/formulare/terminbuchung" 
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  Zur Terminbuchung
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              ) : (
                <div className="flex flex-col space-y-2">
                  <span className="flex items-center text-gray-500">
                    <LockClosedIcon className="h-4 w-4 mr-2" />
                    Premium-Feature nicht aktiviert
                  </span>
                  <Link 
                    href={siteConfig.premium?.purchaseInfo?.checkoutUrl || "/premium"}
                    className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-colors inline-flex items-center justify-center mt-2"
                  >
                    Premium-Paket erwerben
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Weitere Form-Features</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-primary-600 mb-2">Termin-Buchung</h4>
              <p className="text-sm text-gray-600">
                Kalender-Integration für direkte Terminvereinbarungen durch Kunden.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-primary-600 mb-2">Beratungs-Widget</h4>
              <p className="text-sm text-gray-600">
                Live-Chat und Beratungsfunktion für sofortige Kundenanfragen.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="font-medium text-primary-600 mb-2">Projekt-Checkliste</h4>
              <p className="text-sm text-gray-600">
                Interaktive Checklisten für verschiedene Dachprojekte und Sanierungsarbeiten.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-primary-50 rounded-lg">
            <p className="text-primary-700 font-medium">
              Diese Formularlösungen steigern die Conversion-Rate und vereinfachen den Anfrageprozess für Ihre Kunden.
              Alle Komponenten sind vollständig anpassbar und können an Ihre spezifischen Bedürfnisse angepasst werden.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 