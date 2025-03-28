'use client';

import { useState } from 'react';
import { SwatchIcon } from '@heroicons/react/24/outline';

// Vordefinierte Farbschemata
const themes = [
  { 
    name: 'Orange (Standard)', 
    primary: '#f97316',
    secondary: '#6b7280',
    accent: '#ef4444'
  },
  { 
    name: 'Blau', 
    primary: '#3b82f6',
    secondary: '#6b7280',
    accent: '#06b6d4'
  },
  { 
    name: 'Grün', 
    primary: '#10b981',
    secondary: '#6b7280',
    accent: '#84cc16'
  },
  { 
    name: 'Lila', 
    primary: '#8b5cf6',
    secondary: '#6b7280',
    accent: '#ec4899'
  },
  { 
    name: 'Rot', 
    primary: '#ef4444',
    secondary: '#6b7280',
    accent: '#f97316'
  },
];

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(0);
  
  // Funktion zum Ändern des Themes
  const changeTheme = (index: number) => {
    // Theme-Farben setzen
    document.documentElement.style.setProperty('--color-primary', themes[index].primary);
    document.documentElement.style.setProperty('--color-secondary', themes[index].secondary);
    document.documentElement.style.setProperty('--color-accent', themes[index].accent);
    
    // Aktives Theme speichern
    setActiveTheme(index);
    
    // Panel schließen
    setIsOpen(false);
  };
  
  return (
    <div className="fixed bottom-24 right-4 z-50">
      {/* Theme Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Theme-Einstellungen ändern"
      >
        <SwatchIcon className="w-6 h-6 text-primary-500" />
      </button>
      
      {/* Theme Panel */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-4 w-64">
          <h3 className="text-lg font-medium mb-3">Template-Farbe wählen</h3>
          <div className="space-y-3">
            {themes.map((theme, index) => (
              <button
                key={theme.name}
                onClick={() => changeTheme(index)}
                className={`flex items-center w-full p-2 rounded hover:bg-gray-100 transition-colors ${
                  activeTheme === index ? 'bg-gray-100' : ''
                }`}
              >
                <div 
                  className="w-6 h-6 rounded-full mr-3"
                  style={{ backgroundColor: theme.primary }}
                />
                <span className="text-sm">{theme.name}</span>
                {activeTheme === index && (
                  <span className="ml-auto text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">
                    Aktiv
                  </span>
                )}
              </button>
            ))}
          </div>
          
          <div className="mt-4 pt-3 border-t text-xs text-gray-500">
            <p>Hinweis: Diese Demo-Funktion zeigt die Anpassungsmöglichkeiten des Templates.</p>
          </div>
        </div>
      )}
    </div>
  );
} 