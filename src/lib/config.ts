/**
 * TEMPLATE KONFIGURATION
 * 
 * Dies ist die zentrale Konfigurationsdatei für das Dachdecker-Template.
 * Hier können Sie alle wichtigen Einstellungen ändern, ohne den Code direkt bearbeiten zu müssen.
 */

export const siteConfig = {
  // Allgemeine Einstellungen
  // ========================
  siteName: 'Dachdecker München', // Name Ihrer Website
  siteUrl: 'https://dachdecker-muenchen.de', // URL Ihrer Website
  siteDescription: 'Ihr zuverlässiger Dachdecker-Meisterbetrieb in München', // Beschreibung Ihrer Website
  locale: 'de_DE', // Spracheinstellung (de_DE, en_US, etc.)
  
  // Kontaktinformationen
  // ====================
  contact: {
    email: 'info@dachdecker-muenchen.de',
    phone: '0172 - 315 88 47',
    address: 'Musterstraße 123, 80333 München',
    hours: 'Mo-Fr: 8:00-17:00 Uhr',
    googleMapsUrl: 'https://goo.gl/maps/XXXXXXXXXX', // Ihre Google Maps URL
  },
  
  // Social Media
  // ===========
  social: {
    facebook: 'https://facebook.com/dachdeckermuenchen',
    instagram: 'https://instagram.com/dachdeckermuenchen',
    twitter: 'https://twitter.com/dachdeckermuc',
    linkedin: 'https://linkedin.com/company/dachdeckermuenchen',
    youtube: 'https://youtube.com/c/dachdeckermuenchen',
  },
  
  // Logo Einstellungen
  // =================
  logo: {
    main: '/images/logo-transparent.png', // Pfad zum Hauptlogo
    alt: '/images/logo-alt.png', // Alternatives Logo (z.B. für dunklen Hintergrund)
    favicon: '/favicon.ico', // Favicon
    width: 400, // Breite des Logos in Pixeln
    height: 120, // Höhe des Logos in Pixeln
  },
  
  // SEO Einstellungen
  // ================
  seo: {
    title: {
      default: 'Dachdecker München - Ihr Profi für alle Dacharbeiten',
      template: '%s | Dachdecker München', // %s wird durch den Seitentitel ersetzt
    },
    metaDescription: 'Professionelle Dacharbeiten in München: Steildach, Flachdach, Reparaturen, Sanierungen und mehr. Erfahrener Meisterbetrieb mit besten Referenzen.',
    keywords: 'Dachdecker, München, Dacharbeiten, Steildach, Flachdach, Dachsanierung, Dachprofis',
    openGraph: {
      images: [
        {
          url: '/og-image.jpg', // Bild für Social Media Shares
          width: 1200,
          height: 630,
          alt: 'Dachdecker München',
        },
      ],
    },
  },
  
  // Header Einstellungen
  // ==================
  header: {
    sticky: true, // Fixierter Header beim Scrollen
    transparent: false, // Transparenter Header auf der Startseite
    showTopBar: true, // Topbar mit Kontaktinfos anzeigen
    showSocialIcons: true, // Social Media Icons anzeigen
  },
  
  // Footer Einstellungen
  // ==================
  footer: {
    showLogo: true, // Logo im Footer anzeigen
    showSocialIcons: true, // Social Media Icons anzeigen
    showNewsletter: true, // Newsletter-Anmeldung anzeigen
    columns: 4, // Anzahl der Spalten im Footer
  },
  
  // Seitenliste für Navigationen
  // ===========================
  pages: [
    { 
      name: 'Startseite', 
      path: '/',
      showInMainNav: true,
      showInFooter: true,
    },
    { 
      name: 'Leistungen', 
      path: '/leistungen',
      showInMainNav: true,
      showInFooter: true,
    },
    { 
      name: 'Über uns', 
      path: '/ueber-uns',
      showInMainNav: true,
      showInFooter: true,
    },
    { 
      name: 'Kontakt', 
      path: '/kontakt',
      showInMainNav: true,
      showInFooter: true,
    },
    { 
      name: 'Impressum', 
      path: '/impressum',
      showInMainNav: false,
      showInFooter: true,
    },
    { 
      name: 'Datenschutz', 
      path: '/datenschutz',
      showInMainNav: false,
      showInFooter: true,
    },
  ],
  
  // Feature Flags
  // ============
  features: {
    darkMode: false, // Dark Mode Unterstützung
    animations: true, // Animationen aktivieren
    cookieConsent: true, // Cookie-Consent Banner anzeigen
    megaMenu: true, // Mega-Menü aktivieren
    backToTop: true, // "Zurück nach oben" Button anzeigen
  },
  
  // Sonstige Einstellungen
  // ====================
  analytics: {
    googleAnalyticsId: 'G-XXXXXXXXXX', // Google Analytics ID
  },
  
  // Testimonials für die Startseite
  // =============================
  testimonials: [
    {
      name: 'Max Mustermann',
      role: 'Hausbesitzer',
      image: '/images/testimonials/person1.jpg',
      content: 'Ausgezeichnete Arbeit bei der Dachsanierung. Professionelles Team und erstklassige Ergebnisse.',
      rating: 5,
    },
    {
      name: 'Anna Beispiel',
      role: 'Architektin',
      image: '/images/testimonials/person2.jpg',
      content: 'Wir arbeiten seit Jahren mit diesem Betrieb zusammen und sind immer wieder begeistert von der Qualität.',
      rating: 5,
    },
    {
      name: 'Thomas Schmidt',
      role: 'Bauherr',
      image: '/images/testimonials/person3.jpg',
      content: 'Termingerechte Ausführung, faire Preise und top Beratung. Klare Empfehlung!',
      rating: 4,
    },
  ],
}; 