import { Metadata } from 'next';
import CostCalculator from '@/components/forms/CostCalculator';

export const metadata: Metadata = {
  title: 'Kostenrechner | Dachdecker Template',
  description: 'Berechnen Sie die ungefähren Kosten für Ihr Dachprojekt mit unserem interaktiven Kostenrechner',
};

export default function CostCalculatorPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Kostenrechner</h1>
          <p className="text-xl text-gray-600 mb-8">
            Mit diesem interaktiven Rechner können Sie die ungefähren Kosten für Ihr Dachprojekt kalkulieren.
          </p>
        </div>
        
        <div className="mb-16">
          <CostCalculator />
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">Vorteile unseres Kostenrechners</h2>
          
          <div>
            <ul className="list-disc pl-5 space-y-3 text-gray-700">
              <li>Interaktive Berechnung mit Echtzeit-Ergebnissen</li>
              <li>Berücksichtigung verschiedener Dachtypen und Materialien</li>
              <li>Differenzierte Kalkulation nach Flächengröße</li>
              <li>Einbeziehung von Zusatzleistungen und Sonderausstattungen</li>
              <li>Transparente Darstellung der Kostenstruktur</li>
              <li>Hohe Genauigkeit durch regelmäßig aktualisierte Preisdaten</li>
            </ul>
          </div>
          
          <div className="mt-8 p-4 bg-primary-50 rounded-lg">
            <p className="text-primary-700 font-medium">
              Bitte beachten Sie: Der Kostenrechner liefert Richtwerte basierend auf Durchschnittspreisen. 
              Für ein verbindliches Angebot kontaktieren Sie uns bitte direkt.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 