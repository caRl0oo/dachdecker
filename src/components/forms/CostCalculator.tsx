'use client';

import { useState, useEffect } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

// Preisdaten für die Berechnung
const priceData = {
  roofTypes: {
    'flachdach': { basePrice: 100, name: 'Flachdach' },
    'steildach': { basePrice: 120, name: 'Steildach' },
    'walmdach': { basePrice: 130, name: 'Walmdach' },
    'satteldach': { basePrice: 125, name: 'Satteldach' },
    'pultdach': { basePrice: 115, name: 'Pultdach' },
  },
  materials: {
    'ziegel': { pricePerSqm: 35, name: 'Ziegel/Dachpfannen' },
    'bitumen': { pricePerSqm: 25, name: 'Bitumen/Dachpappe' },
    'metall': { pricePerSqm: 45, name: 'Metall/Blech' },
    'schiefer': { pricePerSqm: 60, name: 'Schiefer' },
    'gruendach': { pricePerSqm: 70, name: 'Gründach' },
  },
  additionalServices: {
    'daemmung': { price: 2000, name: 'Dämmung' },
    'dachfenster': { price: 1200, name: 'Dachfenster (pro Stück)' },
    'regenrinne': { price: 800, name: 'Neue Regenrinnen' },
    'geruestkosten': { price: 1500, name: 'Gerüstkosten' },
    'entsorgung': { price: 1000, name: 'Entsorgung Altmaterial' },
  }
};

export default function CostCalculator() {
  const [roofType, setRoofType] = useState('');
  const [roofSize, setRoofSize] = useState('');
  const [material, setMaterial] = useState('');
  const [additionalServices, setAdditionalServices] = useState<string[]>([]);
  const [totalCost, setTotalCost] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [costBreakdown, setCostBreakdown] = useState<{ label: string; cost: number }[]>([]);

  // Berechne die Kosten basierend auf den Eingaben
  useEffect(() => {
    if (roofType && roofSize && material) {
      const size = parseFloat(roofSize);
      
      if (!isNaN(size)) {
        // Grundpreis basierend auf Dachtyp
        const basePrice = priceData.roofTypes[roofType as keyof typeof priceData.roofTypes].basePrice * size;
        
        // Materialkosten
        const materialPrice = priceData.materials[material as keyof typeof priceData.materials].pricePerSqm * size;
        
        // Zusatzleistungen
        let additionalCost = 0;
        let breakdown = [
          { label: `${priceData.roofTypes[roofType as keyof typeof priceData.roofTypes].name} (Grundpreis)`, cost: basePrice },
          { label: `${priceData.materials[material as keyof typeof priceData.materials].name} (Material)`, cost: materialPrice },
        ];
        
        additionalServices.forEach(service => {
          const serviceData = priceData.additionalServices[service as keyof typeof priceData.additionalServices];
          const serviceCost = service === 'dachfenster' ? 
            serviceData.price * (additionalServices.includes('dachfenster') ? 2 : 0) : 
            serviceData.price;
          
          additionalCost += serviceCost;
          
          if (serviceCost > 0) {
            breakdown.push({ label: serviceData.name, cost: serviceCost });
          }
        });
        
        // Gesamtkosten
        const total = basePrice + materialPrice + additionalCost;
        setTotalCost(total);
        setCostBreakdown(breakdown);
      }
    }
  }, [roofType, roofSize, material, additionalServices]);

  // Formular zurücksetzen
  const resetForm = () => {
    setRoofType('');
    setRoofSize('');
    setMaterial('');
    setAdditionalServices([]);
    setShowResult(false);
  };

  // Zusatzleistungen hinzufügen/entfernen
  const handleAdditionalService = (service: string) => {
    setAdditionalServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  // Formular abschicken
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      {!showResult ? (
        <form onSubmit={handleSubmit} className="p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Dachkosten berechnen</h2>
          <p className="text-gray-600 mb-8 text-center">
            Berechnen Sie die ungefähren Kosten für Ihr Dachprojekt mit unserem interaktiven Rechner.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">1. Dachtyp auswählen</h3>
              <div className="space-y-3">
                {Object.keys(priceData.roofTypes).map((type) => (
                  <label 
                    key={type} 
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                      roofType === type ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="roofType"
                      value={type}
                      checked={roofType === type}
                      onChange={(e) => setRoofType(e.target.value)}
                      className="hidden"
                      required
                    />
                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                      roofType === type ? 'border-primary' : 'border-gray-300'
                    }`}>
                      {roofType === type && <CheckIcon className="w-4 h-4 text-primary" />}
                    </span>
                    <span className="text-gray-800">
                      {priceData.roofTypes[type as keyof typeof priceData.roofTypes].name}
                    </span>
                  </label>
                ))}
              </div>

              <div className="mt-6">
                <label className="block text-gray-700 font-medium mb-2">
                  Dachfläche (m²)
                </label>
                <input
                  type="number"
                  value={roofSize}
                  onChange={(e) => setRoofSize(e.target.value)}
                  placeholder="z.B. 120"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  required
                  min="5"
                  max="1000"
                />
              </div>
            </div>

            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">2. Material auswählen</h3>
              <div className="space-y-3">
                {Object.keys(priceData.materials).map((mat) => (
                  <label 
                    key={mat} 
                    className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                      material === mat ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <input
                      type="radio"
                      name="material"
                      value={mat}
                      checked={material === mat}
                      onChange={(e) => setMaterial(e.target.value)}
                      className="hidden"
                      required
                    />
                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center mr-3 ${
                      material === mat ? 'border-primary' : 'border-gray-300'
                    }`}>
                      {material === mat && <CheckIcon className="w-4 h-4 text-primary" />}
                    </span>
                    <span className="text-gray-800">
                      {priceData.materials[mat as keyof typeof priceData.materials].name}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">3. Zusatzleistungen (optional)</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {Object.keys(priceData.additionalServices).map((service) => (
                <label 
                  key={service} 
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                    additionalServices.includes(service) ? 'border-primary bg-primary/5' : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    name="additionalServices"
                    value={service}
                    checked={additionalServices.includes(service)}
                    onChange={() => handleAdditionalService(service)}
                    className="hidden"
                  />
                  <span className={`w-5 h-5 rounded flex items-center justify-center mr-3 ${
                    additionalServices.includes(service) 
                      ? 'bg-primary text-white' 
                      : 'border border-gray-300'
                  }`}>
                    {additionalServices.includes(service) && <CheckIcon className="w-4 h-4" />}
                  </span>
                  <span className="text-gray-800">
                    {priceData.additionalServices[service as keyof typeof priceData.additionalServices].name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-md"
            >
              Kosten berechnen
            </button>
          </div>
        </form>
      ) : (
        <div className="p-6 md:p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">Kostenübersicht</h3>
            <p className="text-gray-600">
              Basierend auf Ihren Angaben haben wir folgende Kostenübersicht erstellt:
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="mb-4 space-y-4">
              {costBreakdown.map((item, index) => (
                <div key={index} className="flex justify-between border-b border-gray-200 pb-2">
                  <span className="text-gray-700">{item.label}</span>
                  <span className="font-medium">{item.cost.toLocaleString('de-DE')} €</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between pt-3">
              <span className="text-lg font-bold">Gesamtkosten (ca.)</span>
              <span className="text-lg font-bold text-primary">{totalCost.toLocaleString('de-DE')} €</span>
            </div>
          </div>

          <div className="bg-primary/10 rounded-lg p-4 mb-8">
            <p className="text-sm text-gray-700">
              <strong>Hinweis:</strong> Diese Berechnung dient nur als grobe Orientierung. 
              Die tatsächlichen Kosten können variieren und hängen von verschiedenen Faktoren ab, 
              wie z.B. der genauen Beschaffenheit Ihres Daches, Zugang, zusätzlichen Arbeiten etc.
              Für ein detailliertes Angebot kontaktieren Sie uns bitte.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={resetForm}
              className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Neue Berechnung
            </button>
            
            <a
              href="/kontakt"
              className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors text-center shadow-md"
            >
              Unverbindliches Angebot anfordern
            </a>
          </div>
        </div>
      )}
    </div>
  );
} 