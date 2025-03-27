import React from 'react';
import Link from 'next/link';

export default function Datenschutz() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
            <h3 className="text-xl font-semibold mt-6 mb-3">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
              Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
              denen Sie persönlich identifiziert werden können.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Datenerfassung auf dieser Website</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
              können Sie dem Impressum dieser Website entnehmen.
            </p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Ihre Rechte</h3>
            <p>
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
              gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
              oder Sperrung dieser Daten zu verlangen.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Datenerfassung auf dieser Website</h2>
            <p>
              Unsere Website erhebt eine Reihe von allgemeinen Daten und Informationen bei jedem Aufruf. 
              Diese allgemeinen Daten und Informationen werden in den Logfiles des Servers gespeichert.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Ihre Rechte</h2>
            <p>
              Sie haben das Recht, jederzeit unentgeltlich Auskunft über Ihre gespeicherten personenbezogenen 
              Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung zu erhalten.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Analyse-Tools und Werbung</h2>
            <p>
              Wir verwenden auf dieser Website keine Analyse-Tools oder Werbung. Falls wir in Zukunft 
              solche Tools einsetzen sollten, werden wir Sie darüber informieren.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Plugins und Tools</h2>
            <p>
              Unsere Website verwendet keine Plugins oder Tools von Drittanbietern. Falls wir in Zukunft 
              solche Tools einsetzen sollten, werden wir Sie darüber informieren.
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