# Dachdecker Premium Template

Ein modernes, voll anpassbares Website-Template für Handwerksunternehmen, speziell optimiert für Dachdecker, Zimmereien und verwandte Gewerke.

![Dachdecker Preview](./public/preview.jpg)

## Features

- ⚡️ Gebaut mit Next.js 14 und App Router
- 🎨 Voll anpassbares Farbschema
- 📱 Responsive Design für alle Geräte
- 🔍 SEO-Optimierung
- 🌐 Modernes Mega-Menü
- 💼 Spezialisierte Branchen-Komponenten
- 🔧 Einfache Konfiguration über zentrale Config-Datei
- 🎭 Animationen mit Framer Motion
- 🖼️ Optimierte Bildverwaltung

## Schnellstart

### Installation

```bash
# Repository klonen
git clone https://github.com/user/dachdecker-template.git mein-projekt

# In das Verzeichnis wechseln
cd mein-projekt

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Anwendung läuft dann unter [http://localhost:3000](http://localhost:3000).

### Konfiguration

Die wichtigsten Einstellungen können in der zentralen Konfigurationsdatei angepasst werden:

```typescript
// src/lib/config.ts
export const siteConfig = {
  siteName: 'Ihre Firma',
  siteUrl: 'https://ihre-domain.de',
  contact: {
    email: 'info@ihre-domain.de',
    phone: '01234 / 56789',
    // ...
  },
  // ...
}
```

### Farbschema anpassen

Die Hauptfarben des Templates sind in der `tailwind.config.js` definiert:

```js
// tailwind.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#f97316', // Hauptfarbe
          // ...
        },
        // ...
      }
    }
  }
}
```

## Seitenstruktur

Das Template enthält folgende Seiten:

- ✅ Startseite
- ✅ Leistungsübersicht
- ✅ Leistungsdetails
- ✅ Über uns
- ✅ Kontakt
- ✅ Impressum/Datenschutz (Platzhalter)

## Komponenten

Das Template enthält spezialisierte Komponenten für Handwerksunternehmen:

- `Header` - Mit oder ohne Mega-Menü
- `Services` - Diensteübersicht mit Filterfunktion
- `Testimonials` - Kundenbewertungen
- `ContactForm` - Kontaktformular
- `Gallery` - Bildergalerie für Referenzprojekte
- `TeamMembers` - Team-Vorstellung
- `CTASection` - Call-to-Action-Bereiche
- `ServiceProcess` - Prozessvisualisierung
- und viele mehr...

## Anpassungen

### Bilder

Ersetzen Sie die Beispielbilder im Verzeichnis `public/images/` mit Ihren eigenen. Achten Sie darauf, dass die Dateinamen identisch sind oder passen Sie die Bildpfade in den entsprechenden Komponenten an.

### Inhalte

Die meisten Inhalte können über die Konfigurationsdateien oder Komponenten-Props angepasst werden. Für umfangreichere Änderungen können Sie die entsprechenden Komponenten in `src/components/` anpassen.

### Meta-Tags und SEO

Die SEO-Konfiguration befindet sich in `src/lib/config.ts` und wird für die Generierung von Meta-Tags verwendet.

## Support

Bei Fragen oder Problemen eröffnen Sie bitte ein Issue auf GitHub oder kontaktieren Sie uns unter support@ihre-domain.de.

## Lizenz

Dieses Template ist urheberrechtlich geschützt und darf nicht weitergegeben oder verkauft werden. Weitere Informationen finden Sie in der LICENSE-Datei. 