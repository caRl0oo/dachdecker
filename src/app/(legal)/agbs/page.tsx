import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AGBs | Dachdecker Berlin',
  description: 'Allgemeine Geschäftsbedingungen der Dachdecker Berlin',
};

export default function AGBsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">§1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der Dachdecker Berlin und ihren Kunden.
                Abweichende Bedingungen des Kunden werden nur anerkannt, wenn wir ihnen ausdrücklich schriftlich zugestimmt haben.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">§2 Vertragsschluss</h2>
              <p>
                Der Vertrag kommt durch schriftliche Auftragsbestätigung zustande. Mündliche Nebenabreden bedürfen der schriftlichen Bestätigung.
                Die Auftragsbestätigung gilt als angenommen, wenn der Kunde nicht binnen einer Woche nach Zugang widerspricht.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">§3 Preise und Zahlungsbedingungen</h2>
              <p>
                Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer. Die Preise gelten für die vereinbarte Leistung.
                Bei Änderungen des Auftragsumfangs behalten wir uns eine Preisanpassung vor.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">§4 Gewährleistung</h2>
              <p>
                Die Gewährleistung richtet sich nach den gesetzlichen Vorschriften. Die Gewährleistungsfrist beträgt 2 Jahre ab Abnahme der Leistung.
                Bei Mängeln haben wir das Recht zur Nachbesserung oder Ersatzlieferung.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">§5 Haftung</h2>
              <p>
                Wir haften für Vorsatz und grobe Fahrlässigkeit. Bei einfacher Fahrlässigkeit haften wir nur bei Verletzung einer wesentlichen Vertragspflicht.
                Die Haftung ist auf den vorhersehbaren, typischerweise eintretenden Schaden begrenzt.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">§6 Datenschutz</h2>
              <p>
                Wir verarbeiten personenbezogene Daten im Einklang mit der DSGVO und dem BDSG.
                Details entnehmen Sie bitte unserer Datenschutzerklärung.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">§7 Schlussbestimmungen</h2>
              <p>
                Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist Berlin.
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 