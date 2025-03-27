import { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier kommt die Formularverarbeitung
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-secondary-200 overflow-hidden">
      <div className="grid md:grid-cols-2">
        {/* Kontaktinformationen */}
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 md:p-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Kontaktieren Sie uns</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <PhoneIcon className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">Telefon</h3>
                <p className="text-gray-600">030 1234567</p>
              </div>
            </div>
            <div className="flex items-start">
              <EnvelopeIcon className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">E-Mail</h3>
                <p className="text-gray-600">info@dachdecker-berlin.de</p>
              </div>
            </div>
            <div className="flex items-start">
              <MapPinIcon className="w-6 h-6 text-primary mr-4 mt-1" />
              <div>
                <h3 className="font-medium text-gray-900">Adresse</h3>
                <p className="text-gray-600">Musterstraße 123<br />10115 Berlin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Kontaktformular */}
        <div className="p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-Mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors duration-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 transform hover:scale-[1.02]"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 