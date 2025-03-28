import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CheckIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Demo - Konfigurationen und Designs',
  description: 'Erkunden Sie verschiedene Konfigurationen und Designs unseres Dachdecker-Templates',
};

export default function DemoPage() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Template-Vorschau
          </span>
          <h1 className="text-4xl font-bold mb-4">Design-Varianten erkunden</h1>
          <p className="text-xl text-gray-600 mb-8">
            Entdecken Sie die verschiedenen Anpassungsmöglichkeiten und Farbschemata des Templates
          </p>
        </div>

        {/* Color Schemes */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Farbschemata</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 h-20 flex items-center justify-center text-white font-bold">
                Standard Orange
              </div>
              <div className="p-6">
                <div className="flex space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-600"></div>
                  <div className="w-10 h-10 rounded-full bg-orange-700"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-800"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
                <p className="text-gray-700 mb-4">
                  Das Standard-Farbschema mit Orange als Primärfarbe, ideal für Dachdecker.
                </p>
                <Link href="#" className="text-orange-600 font-medium hover:underline">
                  Live-Vorschau
                </Link>
              </div>
            </div>

            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 h-20 flex items-center justify-center text-white font-bold">
                Professionelles Blau
              </div>
              <div className="p-6">
                <div className="flex space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600"></div>
                  <div className="w-10 h-10 rounded-full bg-blue-800"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-800"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
                <p className="text-gray-700 mb-4">
                  Ein professionelles Blau-Schema, das Vertrauen und Zuverlässigkeit vermittelt.
                </p>
                <Link href="#" className="text-blue-600 font-medium hover:underline">
                  Live-Vorschau
                </Link>
              </div>
            </div>

            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-emerald-600 h-20 flex items-center justify-center text-white font-bold">
                Eco-Grün
              </div>
              <div className="p-6">
                <div className="flex space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-600"></div>
                  <div className="w-10 h-10 rounded-full bg-emerald-800"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-800"></div>
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                </div>
                <p className="text-gray-700 mb-4">
                  Ein umweltfreundliches Grün-Schema, ideal für nachhaltige Dachdeckerbetriebe.
                </p>
                <Link href="#" className="text-emerald-600 font-medium hover:underline">
                  Live-Vorschau
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Layout Options */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-center">Layout-Optionen</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                <Image 
                  src="/images/demo/mega-menu.jpg" 
                  alt="Mega-Menü Layout"
                  width={400}
                  height={200}
                  className="object-cover rounded"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Mega-Menü Navigation</h3>
                <p className="text-gray-700 mb-4">
                  Umfangreiche Navigation mit mehreren Ebenen und visuellen Elementen.
                </p>
                <div className="flex items-center text-green-600 mb-2">
                  <CheckIcon className="w-5 h-5 mr-2" />
                  <span>Mehrstufige Kategorien</span>
                </div>
                <div className="flex items-center text-green-600 mb-2">
                  <CheckIcon className="w-5 h-5 mr-2" />
                  <span>Visuelle Hervorhebungen</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckIcon className="w-5 h-5 mr-2" />
                  <span>Bessere Konversionsrate</span>
                </div>
              </div>
            </div>

            <div className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                <Image 
                  src="/images/demo/standard-menu.jpg" 
                  alt="Standard-Menü Layout"
                  width={400}
                  height={200}
                  className="object-cover rounded"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Standard-Navigation</h3>
                <p className="text-gray-700 mb-4">
                  Klassische, platzsparende Navigation mit Dropdown-Menüs.
                </p>
                <div className="flex items-center text-green-600 mb-2">
                  <CheckIcon className="w-5 h-5 mr-2" />
                  <span>Minimalistisches Design</span>
                </div>
                <div className="flex items-center text-green-600 mb-2">
                  <CheckIcon className="w-5 h-5 mr-2" />
                  <span>Schnellere Ladezeit</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckIcon className="w-5 h-5 mr-2" />
                  <span>Bessere Mobile-Ansicht</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-10 text-center">Verfügbare Versionen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow relative">
              <div className="absolute top-0 right-0 bg-gray-200 text-gray-800 font-medium py-1 px-3 rounded-bl-lg rounded-tr-lg">
                Basic
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-6">Standard-Version</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">€49</span>
                <span className="text-gray-500"> / Einmalig</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Standard-Navigation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Kontaktformular</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>3 Farbvarianten</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Leistungsseiten</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors">
                Auswählen
              </button>
            </div>

            <div className="border-2 border-primary rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative bg-white -translate-y-4">
              <div className="absolute top-0 right-0 bg-primary text-white font-medium py-1 px-3 rounded-bl-lg rounded-tr-lg">
                Empfohlen
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-6">Premium-Version</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">€129</span>
                <span className="text-gray-500"> / Einmalig</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Alles aus Standard</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Mega-Menü Navigation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Multistep Anfrage-Formular</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Kostenrechner</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>6 Farbvarianten</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Premium Support (3 Monate)</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
                Auswählen
              </button>
            </div>

            <div className="border rounded-xl p-6 hover:shadow-lg transition-shadow relative">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white font-medium py-1 px-3 rounded-bl-lg rounded-tr-lg">
                Komplett
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-6">Enterprise-Version</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">€299</span>
                <span className="text-gray-500"> / Einmalig</span>
              </div>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Alles aus Premium</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Buchungssystem</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>CRM Integration</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Lead-Management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>12 Farbvarianten</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Premium Support (12 Monate)</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Individuelle Anpassungen</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-600 hover:text-white transition-colors">
                Anfragen
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto mt-20 bg-gradient-to-r from-primary to-primary-dark rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Bereit, Ihr Dachdecker-Business online zu bringen?</h2>
          <p className="mb-6">
            Wählen Sie die passende Template-Version und starten Sie noch heute mit Ihrer professionellen Website.
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors">
            Template kaufen
          </button>
        </div>
      </div>
    </main>
  );
} 