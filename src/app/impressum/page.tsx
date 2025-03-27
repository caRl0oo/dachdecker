import React from 'react';
import Link from 'next/link';

export default function Impressum() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Dachdecker Berlin<br />
              Zwickauer Damm 87<br />
              12355 Berlin
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Kontakt</h2>
            <p>
              Telefon: 0172 - 315 88 47<br />
              E-Mail: info@dachdecker-berlin.de
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Geschäftsführer</h2>
            <p>
              [Name des Geschäftsführers]<br />
              [Geburtsdatum und -ort]
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Handelsregister</h2>
            <p>
              Eintragung im Handelsregister<br />
              Registergericht: Amtsgericht Berlin<br />
              Registernummer: [Nummer]
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              [USt-ID]
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Gewerberecht</h2>
            <p>
              Zuständige Aufsichtsbehörde:<br />
              [Name der Behörde]<br />
              [Adresse der Behörde]
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">Haftungsausschluss</h2>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
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