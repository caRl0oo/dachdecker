import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum | Dachdecker Berlin',
  description: 'Impressum der Dachdecker Berlin - Rechtliche Informationen und Kontaktdaten',
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-gradient">Impressum</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                [Ihr Name]<br />
                [Ihre Straße und Hausnummer]<br />
                [PLZ und Stadt]
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
              <p>
                Telefon: [Ihre Telefonnummer]<br />
                E-Mail: [Ihre E-Mail-Adresse]
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Gewerberegister</h2>
              <p>
                Eintragung im Handelsregister<br />
                Registergericht: [Amtsgericht]<br />
                Registernummer: [IHRE REGISTERNUMMER]
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
                [IHRE UST-ID]
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Berufshaftpflichtversicherung</h2>
              <p>
                [Name der Versicherung]<br />
                [Adresse der Versicherung]
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Gewerberecht</h2>
              <p>
                Zuständige Aufsichtsbehörde:<br />
                [Name der Behörde]<br />
                [Adresse der Behörde]
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                [Ihr Name]<br />
                [Ihre Adresse]
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8">
              <h2 className="text-2xl font-semibold mb-4">Haftungsausschluss</h2>
              <p>
                Haftung für Inhalte:<br />
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>

              <p className="mt-4">
                Haftung für Links:<br />
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
              </p>

              <p className="mt-4">
                Urheberrecht:<br />
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 