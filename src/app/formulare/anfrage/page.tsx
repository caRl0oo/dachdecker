import { Metadata } from 'next';
import MultiStepForm from '@/components/forms/MultiStepForm';

export const metadata: Metadata = {
  title: 'Anfrage-Formular | Dachdecker Template',
  description: 'Stellen Sie eine detaillierte Anfrage für Ihr Dachprojekt mit unserem mehrstufigen Formular',
};

export default function RequestFormPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Anfrage-Formular</h1>
          <p className="text-xl text-gray-600 mb-8">
            Füllen Sie unser mehrstufiges Formular aus, um eine detaillierte Anfrage für Ihr Dachprojekt zu stellen.
          </p>
        </div>
        
        <div className="mb-16">
          <MultiStepForm />
        </div>
        
        <div className="max-w-4xl mx-auto mt-16 bg-gray-50 p-8 rounded-xl">
          <h2 className="text-2xl font-bold mb-6">So geht es nach Ihrer Anfrage weiter</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="text-primary text-2xl font-bold mb-3">1</div>
              <h3 className="font-semibold mb-2">Eingang Ihrer Anfrage</h3>
              <p className="text-gray-700 text-sm">
                Wir erhalten Ihre Anfrage und senden Ihnen umgehend eine Bestätigung per E-Mail.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="text-primary text-2xl font-bold mb-3">2</div>
              <h3 className="font-semibold mb-2">Individuelle Prüfung</h3>
              <p className="text-gray-700 text-sm">
                Unser Expertenteam prüft Ihre Anfrage und bereitet ein passendes Angebot vor.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="text-primary text-2xl font-bold mb-3">3</div>
              <h3 className="font-semibold mb-2">Kontaktaufnahme</h3>
              <p className="text-gray-700 text-sm">
                Innerhalb von 48 Stunden melden wir uns bei Ihnen zur Terminvereinbarung oder Angebotsübermittlung.
              </p>
            </div>
          </div>
          
          <div className="mt-8 p-4 bg-primary-50 rounded-lg">
            <p className="text-primary-700 font-medium">
              Datenschutzhinweis: Ihre Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 