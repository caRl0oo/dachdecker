import React from 'react';
import Link from 'next/link';

export default function AGB() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">§1 Geltungsbereich</h2>
            <p>
              Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der Dachdecker Berlin 
              und ihren Kunden. Abweichende Bedingungen des Kunden werden nur anerkannt, wenn wir ihnen 
              ausdrücklich schriftlich zugestimmt haben.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">§2 Vertragsschluss</h2>
            <p>
              Der Vertrag kommt durch Angebot und Annahme zustande. Unsere Angebote sind freibleibend und 
              unverbindlich. Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung zustande.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">§3 Preise und Zahlungsbedingungen</h2>
            <p>
              Die Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Rechnungen sind innerhalb 
              von 14 Tagen nach Rechnungsstellung ohne Abzug zahlbar. Bei Zahlungsverzug behalten wir uns 
              die Geltendmachung von Verzugszinsen vor.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">§4 Gewährleistung</h2>
            <p>
              Die Gewährleistung richtet sich nach den gesetzlichen Vorschriften. Die Gewährleistungsfrist 
              beträgt 2 Jahre ab Abnahme der Leistung. Mängelansprüche müssen unverzüglich nach Entdeckung 
              schriftlich geltend gemacht werden.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">§5 Haftung</h2>
            <p>
              Wir haften nur für Vorsatz und grobe Fahrlässigkeit. Die Haftung für einfache Fahrlässigkeit 
              ist ausgeschlossen, es sei denn, es handelt sich um die Verletzung einer wesentlichen 
              Vertragspflicht.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">§6 Datenschutz</h2>
            <p>
              Wir verarbeiten personenbezogene Daten im Einklang mit der DSGVO und dem BDSG. 
              Details entnehmen Sie bitte unserer Datenschutzerklärung.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">§7 Schlussbestimmungen</h2>
            <p>
              Es gilt deutsches Recht. Gerichtsstand ist Berlin. Sollten einzelne Bestimmungen dieser 
              AGB unwirksam sein, so berührt dies die Wirksamkeit der übrigen Bestimmungen nicht.
            </p>

            <div className="mt-12">
              <Link 
                href="/" 
                className="inline-flex items-center text-primary hover:text-primary/80"
              >
                Zurück zur Startseite
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 