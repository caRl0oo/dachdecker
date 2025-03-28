'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CreditCardIcon, LockClosedIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { siteConfig } from '@/lib/config';

export default function CheckoutPage() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
    couponCode: '',
  });
  const [agreed, setAgreed] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const monthlyPrice = siteConfig.premium?.purchaseInfo?.priceMonthly || 19.99;
  const yearlyPrice = siteConfig.premium?.purchaseInfo?.priceYearly || 199.99;
  const currency = siteConfig.premium?.purchaseInfo?.currency || 'EUR';
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name === 'cardNumber') {
      // Format card number with spaces every 4 digits and limit to 19 chars (16 digits + 3 spaces)
      const formattedValue = value
        .replace(/\s/g, '')
        .replace(/(\d{4})/g, '$1 ')
        .trim()
        .slice(0, 19);
      setFormData({ ...formData, [name]: formattedValue });
    } else if (name === 'expiry') {
      // Format expiry as MM/YY
      const formattedValue = value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .slice(0, 5);
      setFormData({ ...formData, [name]: formattedValue });
    } else if (name === 'cvc') {
      // Limit CVC to 3-4 digits
      const formattedValue = value.replace(/\D/g, '').slice(0, 4);
      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, this would process the payment via a payment gateway
    console.log('Processing payment...', {
      plan: selectedPlan,
      amount: selectedPlan === 'monthly' ? monthlyPrice : yearlyPrice,
      ...formData
    });
    
    // Simulate a successful payment
    setTimeout(() => {
      setOrderComplete(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };
  
  if (orderComplete) {
    return (
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
            <div className="text-center">
              <div className="inline-block p-3 bg-green-100 rounded-full mb-4">
                <CheckCircleIcon className="h-12 w-12 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold mb-4">Vielen Dank für Ihren Kauf!</h1>
              <p className="text-gray-600 mb-6">
                Ihr Premium-Paket wurde erfolgreich aktiviert. Sie erhalten in Kürze eine Bestätigungs-E-Mail mit allen Details.
              </p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-8 text-left">
                <h2 className="font-semibold mb-3">Ihre Bestellübersicht</h2>
                <div className="flex justify-between mb-2">
                  <span>Paket:</span>
                  <span>Premium {selectedPlan === 'monthly' ? 'Monatlich' : 'Jährlich'}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Preis:</span>
                  <span>{selectedPlan === 'monthly' ? monthlyPrice : yearlyPrice} {currency}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Datum:</span>
                  <span>{new Date().toLocaleDateString('de-DE')}</span>
                </div>
                <div className="border-t border-gray-200 mt-4 pt-4 flex justify-between font-semibold">
                  <span>Aktivierte Features:</span>
                  <span>5/5</span>
                </div>
              </div>
              
              <div className="flex space-x-4 justify-center">
                <Link 
                  href="/premium" 
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors shadow-md"
                >
                  Premium-Features erkunden
                </Link>
                <Link 
                  href="/" 
                  className="px-6 py-3 border border-gray-300 bg-white text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Zur Startseite
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Premium-Paket Checkout</h1>
          
          <div className="grid md:grid-cols-5 gap-8">
            {/* Checkout Form */}
            <div className="md:col-span-3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Plan Selection */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Zahlungsplan wählen</h2>
                    <div className="grid grid-cols-2 gap-4">
                      <div 
                        className={`border rounded-lg p-4 cursor-pointer ${
                          selectedPlan === 'monthly' 
                            ? 'border-primary bg-primary/5' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedPlan('monthly')}
                      >
                        <div className="flex items-center mb-2">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            selectedPlan === 'monthly' ? 'border-primary' : 'border-gray-300'
                          }`}>
                            {selectedPlan === 'monthly' && (
                              <div className="w-3 h-3 rounded-full bg-primary"></div>
                            )}
                          </div>
                          <span className="ml-2 font-medium">Monatlich</span>
                        </div>
                        <div className="ml-7">
                          <div className="text-xl font-bold">{monthlyPrice} {currency}</div>
                          <div className="text-sm text-gray-500">pro Monat</div>
                        </div>
                      </div>
                      
                      <div 
                        className={`border rounded-lg p-4 cursor-pointer ${
                          selectedPlan === 'yearly' 
                            ? 'border-primary bg-primary/5' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => setSelectedPlan('yearly')}
                      >
                        <div className="flex items-center mb-2">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                            selectedPlan === 'yearly' ? 'border-primary' : 'border-gray-300'
                          }`}>
                            {selectedPlan === 'yearly' && (
                              <div className="w-3 h-3 rounded-full bg-primary"></div>
                            )}
                          </div>
                          <span className="ml-2 font-medium">Jährlich</span>
                          <span className="ml-2 text-xs px-2 py-1 bg-green-100 text-green-800 rounded-full">-17%</span>
                        </div>
                        <div className="ml-7">
                          <div className="text-xl font-bold">{yearlyPrice} {currency}</div>
                          <div className="text-sm text-gray-500">pro Jahr</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Kontaktinformationen */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Kontaktinformationen</h2>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
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
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Firma</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Zahlungsinformationen */}
                  <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <CreditCardIcon className="h-5 w-5 mr-2 text-primary" />
                      Zahlungsinformationen
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Kartennummer *</label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Gültig bis *</label>
                          <input
                            type="text"
                            name="expiry"
                            value={formData.expiry}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">CVC *</label>
                          <input
                            type="text"
                            name="cvc"
                            value={formData.cvc}
                            onChange={handleInputChange}
                            placeholder="123"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Gutscheincode */}
                  <div>
                    <h2 className="text-lg font-semibold mb-2">Gutscheincode</h2>
                    <div className="flex">
                      <input
                        type="text"
                        name="couponCode"
                        value={formData.couponCode}
                        onChange={handleInputChange}
                        placeholder="Gutscheincode eingeben"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                      <button
                        type="button"
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-r-md border-t border-r border-b border-gray-300 hover:bg-gray-200 transition-colors"
                      >
                        Anwenden
                      </button>
                    </div>
                  </div>
                  
                  {/* Nutzungsbedingungen */}
                  <div className="pt-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          checked={agreed}
                          onChange={() => setAgreed(!agreed)}
                          required
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="terms" className="text-gray-700">
                          Ich stimme den <Link href="/agbs" className="text-primary hover:underline">Nutzungsbedingungen</Link> und der <Link href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link> zu
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={!agreed}
                      className={`w-full py-3 px-4 rounded-md font-medium flex items-center justify-center ${
                        agreed ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      } transition-colors`}
                    >
                      <LockClosedIcon className="h-4 w-4 mr-2" />
                      Jetzt kostenpflichtig bestellen
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 h-fit sticky top-24">
                <h2 className="text-xl font-semibold mb-4">Bestellübersicht</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between pb-4 border-b border-gray-200">
                    <span className="font-medium">Premium {selectedPlan === 'monthly' ? 'Monatlich' : 'Jährlich'}</span>
                    <span className="font-bold">{selectedPlan === 'monthly' ? monthlyPrice : yearlyPrice} {currency}</span>
                  </div>
                  
                  <div className="pb-4 border-b border-gray-200">
                    <h3 className="font-medium mb-2">Enthaltene Features:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                        <span>Online-Terminbuchung</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                        <span>Datei-Upload in Formularen</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                        <span>Erweiterte Statistiken</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                        <span>Prioritäts-Support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 shrink-0 mr-2" />
                        <span>Regelmäßige Updates</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex justify-between font-bold text-lg">
                    <span>Gesamt:</span>
                    <span>{selectedPlan === 'monthly' ? monthlyPrice : yearlyPrice} {currency}</span>
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-4">
                    Alle Preise inkl. MwSt. Sie können jederzeit kündigen.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 