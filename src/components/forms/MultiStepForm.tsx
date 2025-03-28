'use client';

import { useState } from 'react';
import { ArrowRightIcon, ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

// Schritte im Formular
const steps = [
  { id: 'step1', name: 'Persönliche Daten' },
  { id: 'step2', name: 'Projektdetails' },
  { id: 'step3', name: 'Zeitraum & Budget' },
  { id: 'step4', name: 'Kontaktpräferenz' }
];

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    projectType: '',
    roofType: '',
    area: '',
    details: '',
    timeframe: '',
    budget: '',
    contactPreference: '',
    additionalInfo: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde normalerweise der API-Call stattfinden
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto">
        <div className="text-center py-10">
          <div className="bg-green-100 rounded-full p-3 inline-block mb-4">
            <CheckCircleIcon className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Vielen Dank für Ihre Anfrage!</h2>
          <p className="text-gray-600 mb-6">
            Wir haben Ihre Anfrage erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
          </p>
          <p className="text-primary font-medium">
            Eine Bestätigungs-E-Mail wurde an {formData.email} gesendet.
          </p>
          <div className="mt-8">
            <a 
              href="/" 
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-md inline-block"
            >
              Zurück zur Startseite
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">Anfrage-Formular</h2>
      <p className="text-gray-600 mb-8 text-center">
        Füllen Sie das Formular aus und wir erstellen Ihnen ein unverbindliches Angebot.
      </p>
      
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {/* Step 1 */}
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep > 0 ? 'bg-primary text-white' : 
              currentStep === 0 ? 'bg-primary text-white' : 
              'bg-gray-200 text-gray-700'
            }`}>
              {currentStep > 0 ? (
                <CheckCircleIcon className="h-6 w-6" />
              ) : (
                <span className="font-bold text-lg">1</span>
              )}
            </div>
            <span className="text-xs mt-1 hidden sm:block text-gray-700">Persönliche Daten</span>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep > 1 ? 'bg-primary text-white' : 
              currentStep === 1 ? 'bg-primary text-white' : 
              'bg-gray-200 text-gray-700'
            }`}>
              {currentStep > 1 ? (
                <CheckCircleIcon className="h-6 w-6" />
              ) : (
                <span className="font-bold text-lg">2</span>
              )}
            </div>
            <span className="text-xs mt-1 hidden sm:block text-gray-700">Projektdetails</span>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep > 2 ? 'bg-primary text-white' : 
              currentStep === 2 ? 'bg-primary text-white' : 
              'bg-gray-200 text-gray-700'
            }`}>
              {currentStep > 2 ? (
                <CheckCircleIcon className="h-6 w-6" />
              ) : (
                <span className="font-bold text-lg">3</span>
              )}
            </div>
            <span className="text-xs mt-1 hidden sm:block text-gray-700">Zeitraum & Budget</span>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
              currentStep > 3 ? 'bg-primary text-white' : 
              currentStep === 3 ? 'bg-primary text-white' : 
              'bg-gray-200 text-gray-700'
            }`}>
              {currentStep > 3 ? (
                <CheckCircleIcon className="h-6 w-6" />
              ) : (
                <span className="font-bold text-lg">4</span>
              )}
            </div>
            <span className="text-xs mt-1 hidden sm:block text-gray-700">Kontaktpräferenz</span>
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
          <div 
            className="bg-primary h-2.5 rounded-full transition-all duration-300" 
            style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>

      <form onSubmit={currentStep === steps.length - 1 ? handleSubmit : nextStep} className="bg-gray-50 p-6 rounded-lg">
        {/* Step 1: Persönliche Daten */}
        {currentStep === 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Persönliche Daten</h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vorname *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nachname *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Telefonnummer</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Straße, Hausnummer, PLZ, Ort"
              />
            </div>
          </div>
        )}
        
        {/* Step 2: Projektdetails */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Projektdetails</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Art des Projekts *</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Bitte wählen</option>
                <option value="Neueindeckung">Neueindeckung</option>
                <option value="Dachreparatur">Dachreparatur</option>
                <option value="Dachsanierung">Dachsanierung</option>
                <option value="Dachfenster">Dachfenster</option>
                <option value="Dachbegrünung">Dachbegrünung</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Dachtyp</label>
              <select
                name="roofType"
                value={formData.roofType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Bitte wählen</option>
                <option value="Flachdach">Flachdach</option>
                <option value="Satteldach">Satteldach</option>
                <option value="Walmdach">Walmdach</option>
                <option value="Pultdach">Pultdach</option>
                <option value="Mansarddach">Mansarddach</option>
                <option value="Sonstiges">Sonstiges</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ungefähre Dachfläche (m²)</label>
              <input
                type="number"
                name="area"
                value={formData.area}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Weitere Details zum Projekt</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Beschreiben Sie Ihr Projekt genauer..."
              ></textarea>
            </div>
          </div>
        )}
        
        {/* Step 3: Zeitraum & Budget */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Zeitraum & Budget</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gewünschter Zeitraum</label>
              <select
                name="timeframe"
                value={formData.timeframe}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Bitte wählen</option>
                <option value="So schnell wie möglich">So schnell wie möglich</option>
                <option value="In den nächsten 4 Wochen">In den nächsten 4 Wochen</option>
                <option value="In 1-3 Monaten">In 1-3 Monaten</option>
                <option value="In 3-6 Monaten">In 3-6 Monaten</option>
                <option value="In mehr als 6 Monaten">In mehr als 6 Monaten</option>
                <option value="Nur Beratung">Nur Beratung gewünscht</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Voraussichtliches Budget</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Bitte wählen</option>
                <option value="Unter 5.000 €">Unter 5.000 €</option>
                <option value="5.000 € - 10.000 €">5.000 € - 10.000 €</option>
                <option value="10.000 € - 20.000 €">10.000 € - 20.000 €</option>
                <option value="20.000 € - 50.000 €">20.000 € - 50.000 €</option>
                <option value="Über 50.000 €">Über 50.000 €</option>
                <option value="Noch keine Vorstellung">Noch keine Vorstellung</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Zusätzliche Informationen</label>
              <textarea
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Haben Sie weitere Anmerkungen oder Fragen?"
              ></textarea>
            </div>
          </div>
        )}
        
        {/* Step 4: Kontaktpräferenz */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Kontaktpräferenz</h2>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Wie möchten Sie kontaktiert werden? *</label>
              <div className="mt-2 space-y-2">
                <div className="flex items-center">
                  <input
                    id="contact-email"
                    name="contactPreference"
                    type="radio"
                    value="email"
                    checked={formData.contactPreference === 'email'}
                    onChange={handleInputChange}
                    required
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <label htmlFor="contact-email" className="ml-3 text-sm text-gray-700">
                    E-Mail
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="contact-phone"
                    name="contactPreference"
                    type="radio"
                    value="phone"
                    checked={formData.contactPreference === 'phone'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <label htmlFor="contact-phone" className="ml-3 text-sm text-gray-700">
                    Telefon
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="contact-both"
                    name="contactPreference"
                    type="radio"
                    value="both"
                    checked={formData.contactPreference === 'both'}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                  />
                  <label htmlFor="contact-both" className="ml-3 text-sm text-gray-700">
                    Beides ist okay
                  </label>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-md mt-6 border border-gray-200">
              <p className="text-sm text-gray-500">
                Mit dem Absenden des Formulars erklären Sie sich damit einverstanden, dass wir Ihre Daten zur Bearbeitung Ihrer Anfrage verwenden. 
                Wir geben Ihre Daten nicht an Dritte weiter. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
              </p>
            </div>
          </div>
        )}
        
        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          {currentStep > 0 ? (
            <button
              type="button"
              onClick={prevStep}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" /> Zurück
            </button>
          ) : (
            <div></div>
          )}
          
          <button
            type={currentStep === steps.length - 1 ? 'submit' : 'button'}
            onClick={currentStep !== steps.length - 1 ? nextStep : undefined}
            className="flex items-center px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors shadow-md"
          >
            {currentStep === steps.length - 1 ? 'Anfrage absenden' : 'Weiter'}
            {currentStep !== steps.length - 1 && <ArrowRightIcon className="h-4 w-4 ml-2" />}
          </button>
        </div>
      </form>
    </div>
  );
} 