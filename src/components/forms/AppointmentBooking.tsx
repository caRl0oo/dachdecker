'use client';

import { useState, useEffect } from 'react';
import { ArrowLeftIcon, ArrowRightIcon, ClockIcon, CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

// Mock-Daten für verfügbare Tage und Zeiten
// In einer Produktivumgebung würden diese Daten von einer API abgerufen werden
const AVAILABLE_DAYS = [
  new Date(new Date().setDate(new Date().getDate() + 3)),
  new Date(new Date().setDate(new Date().getDate() + 4)),
  new Date(new Date().setDate(new Date().getDate() + 5)),
  new Date(new Date().setDate(new Date().getDate() + 6)),
  new Date(new Date().setDate(new Date().getDate() + 7)),
  new Date(new Date().setDate(new Date().getDate() + 10)),
  new Date(new Date().setDate(new Date().getDate() + 11)),
  new Date(new Date().setDate(new Date().getDate() + 12)),
  new Date(new Date().setDate(new Date().getDate() + 13)),
  new Date(new Date().setDate(new Date().getDate() + 14)),
];

const TIME_SLOTS = [
  { id: 1, time: '08:00', available: true },
  { id: 2, time: '09:00', available: true },
  { id: 3, time: '10:00', available: true },
  { id: 4, time: '11:00', available: true },
  { id: 5, time: '13:00', available: true },
  { id: 6, time: '14:00', available: true },
  { id: 7, time: '15:00', available: false },
  { id: 8, time: '16:00', available: true },
];

// Verfügbare Service-Typen
const SERVICE_TYPES = [
  { id: 'beratung', name: 'Allgemeine Beratung' },
  { id: 'inspektion', name: 'Dachinspektion' },
  { id: 'angebot', name: 'Angebotserstellung' },
  { id: 'schadensbegutachtung', name: 'Schadensbegutachtung' },
];

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
};

export default function AppointmentBooking() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);

  // Kalender-Tage für den aktuellen Monat generieren
  useEffect(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    
    // Ersten Tag des Monats finden
    const firstDay = new Date(year, month, 1);
    
    // Letzten Tag des Monats finden
    const lastDay = new Date(year, month + 1, 0);
    
    // Alle Tage des Monats in ein Array packen
    const daysInMonth = [];
    
    // Füge leere Platzhalter für Tage vor dem ersten Tag des Monats hinzu
    const firstDayOfWeek = firstDay.getDay(); // 0 = Sonntag, 1 = Montag, usw.
    const firstDayAdjusted = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1; // Anpassen für Montag als ersten Tag der Woche
    
    for (let i = 0; i < firstDayAdjusted; i++) {
      const prevMonthDay = new Date(year, month, -i);
      daysInMonth.unshift(prevMonthDay);
    }
    
    // Füge die Tage des aktuellen Monats hinzu
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysInMonth.push(new Date(year, month, i));
    }
    
    // Füge Tage des nächsten Monats hinzu, um die letzte Woche zu vervollständigen
    const lastDayOfWeek = lastDay.getDay();
    const lastDayAdjusted = lastDayOfWeek === 0 ? 0 : 7 - lastDayOfWeek;
    
    for (let i = 1; i <= lastDayAdjusted; i++) {
      daysInMonth.push(new Date(year, month + 1, i));
    }
    
    setCalendarDays(daysInMonth);
  }, [currentMonth]);

  // Vorheriger Monat
  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Nächster Monat
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Prüfen, ob ein Datum verfügbar ist
  const isDateAvailable = (date: Date) => {
    return AVAILABLE_DAYS.some(availableDate => 
      availableDate.getDate() === date.getDate() &&
      availableDate.getMonth() === date.getMonth() &&
      availableDate.getFullYear() === date.getFullYear()
    );
  };

  // Prüfen, ob ein Datum der aktuelle Monat ist
  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth.getMonth();
  };

  // Prüfen, ob ein Datum vor heute liegt
  const isPastDate = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  // Datum auswählen
  const handleDateSelect = (date: Date) => {
    if (isDateAvailable(date) && !isPastDate(date)) {
      setSelectedDate(date);
    }
  };

  // Zeitslot auswählen
  const handleTimeSelect = (time: string) => {
    setSelectedTimeSlot(time);
  };

  // Zur Zusammenfassung gehen
  const goToSummary = () => {
    if (selectedDate && selectedTimeSlot) {
      setStep(2);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Formular-Eingaben behandeln
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Formular absenden
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booked:', {
      date: selectedDate,
      time: selectedTimeSlot,
      ...formData
    });
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Kalendernavigation
  const monthNames = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
  const dayNames = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  // Datumsformatierung
  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('de-DE', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    }).format(date);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-md">
        <div className="text-center py-8">
          <div className="bg-green-100 rounded-full p-4 inline-block mb-6">
            <CheckCircleIcon className="h-12 w-12 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Termin erfolgreich gebucht!</h2>
          <p className="text-gray-600 mb-6">
            Wir haben Ihre Terminanfrage erhalten und bestätigen diese in Kürze.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg mb-8 inline-block mx-auto">
            <div className="flex flex-col space-y-2 text-left">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">Datum:</span>
                <span className="ml-2">{selectedDate ? formatDate(selectedDate) : ''}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-primary mr-2" />
                <span className="font-medium">Uhrzeit:</span>
                <span className="ml-2">{selectedTimeSlot} Uhr</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">Termin:</span>
                <span className="ml-2">
                  {SERVICE_TYPES.find(type => type.id === formData.serviceType)?.name || formData.serviceType}
                </span>
              </div>
            </div>
          </div>
          <p className="text-primary font-medium mb-2">
            Eine Bestätigungs-E-Mail wurde an {formData.email} gesendet.
          </p>
          <p className="text-sm text-gray-500 mb-8">
            Sie erhalten 24 Stunden vor dem Termin eine Erinnerung.
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
    <div className="bg-white p-4 md:p-8 rounded-xl shadow-md">
      {step === 1 ? (
        <div>
          <h2 className="text-xl font-bold mb-6 text-gray-800">Termin auswählen</h2>
          
          {/* Kalendar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <button 
                onClick={previousMonth}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowLeftIcon className="h-5 w-5 text-gray-700" />
              </button>
              <h3 className="text-lg font-semibold">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              <button 
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <ArrowRightIcon className="h-5 w-5 text-gray-700" />
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-1">
              {dayNames.map(day => (
                <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
              
              {calendarDays.map((date, index) => {
                const isAvailable = isDateAvailable(date);
                const isSelected = selectedDate && 
                  date.getDate() === selectedDate.getDate() && 
                  date.getMonth() === selectedDate.getMonth() && 
                  date.getFullYear() === selectedDate.getFullYear();
                const isPast = isPastDate(date);
                const isThisMonth = isCurrentMonth(date);
                
                return (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(date)}
                    disabled={!isAvailable || isPast}
                    className={`
                      py-2 rounded-md text-sm
                      ${isSelected ? 'bg-primary text-white font-bold' : ''}
                      ${!isThisMonth ? 'text-gray-300' : ''}
                      ${isAvailable && isThisMonth && !isPast ? 'hover:bg-primary hover:text-white cursor-pointer' : ''}
                      ${isPast ? 'text-gray-300 cursor-not-allowed' : ''}
                      ${!isAvailable && !isPast ? 'text-gray-400 cursor-not-allowed' : ''}
                    `}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
          </div>
          
          {/* Zeit-Slots */}
          {selectedDate && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-primary" />
                Verfügbare Zeiten am {formatDate(selectedDate)}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TIME_SLOTS.map(slot => (
                  <button
                    key={slot.id}
                    onClick={() => handleTimeSelect(slot.time)}
                    disabled={!slot.available}
                    className={`
                      py-2 px-3 rounded-md text-center border
                      ${selectedTimeSlot === slot.time ? 'bg-primary text-white border-primary' : ''}
                      ${slot.available ? 'hover:border-primary cursor-pointer' : 'bg-gray-50 text-gray-400 cursor-not-allowed'}
                    `}
                  >
                    <span className="flex items-center justify-center">
                      <ClockIcon className="h-4 w-4 mr-1" />
                      {slot.time} Uhr
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {selectedDate && selectedTimeSlot && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={goToSummary}
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors shadow-md"
              >
                Termin bestätigen und fortfahren
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="flex items-center mb-6">
            <button 
              onClick={() => setStep(1)}
              className="mr-3 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeftIcon className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-bold text-gray-800">Persönliche Daten</h2>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium mb-2 text-gray-700">Ihr ausgewählter Termin</h3>
            <div className="flex space-x-6">
              <div className="flex items-center">
                <CalendarIcon className="h-5 w-5 text-primary mr-2" />
                <span>{selectedDate ? formatDate(selectedDate) : ''}</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-5 w-5 text-primary mr-2" />
                <span>{selectedTimeSlot} Uhr</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Termingrund *</label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Bitte wählen</option>
                {SERVICE_TYPES.map(type => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Nachricht (optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="Beschreiben Sie Ihre Anfrage oder Ihr Anliegen..."
              ></textarea>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md mt-6">
              <p className="text-sm text-gray-500">
                Mit dem Absenden des Formulars erklären Sie sich damit einverstanden, dass wir Ihre Daten zur Bearbeitung Ihrer Anfrage verwenden. 
                Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
              </p>
            </div>
            
            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors shadow-md"
              >
                Termin jetzt buchen
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
} 