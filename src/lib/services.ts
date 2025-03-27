interface ServiceDetail {
  title: string;
  description: string;
}

interface Service {
  title: string;
  slug: string;
  description: string;
  image: string;
  details: ServiceDetail[];
}

export const services: Service[] = [
  {
    title: "Flachdacharbeiten",
    slug: "flachdacharbeiten",
    description: "Professionelle Verlegung und Reparatur von Flachdächern mit modernsten Materialien.",
    image: "/images/services/flachdach.jpg",
    details: [
      {
        title: "Abdichtung",
        description: "Hochwertige Abdichtungssysteme für maximale Dichtheit und lange Haltbarkeit."
      },
      {
        title: "Dämmung",
        description: "Energieeffiziente Dämmlösungen für optimalen Wärmeschutz."
      }
    ]
  },
  {
    title: "Steildacharbeiten",
    slug: "steildacharbeiten",
    description: "Fachgerechte Eindeckung und Sanierung von Steildächern.",
    image: "/images/services/steildach.jpg",
    details: [
      {
        title: "Dacheindeckung",
        description: "Verschiedene Materialien wie Ziegel, Schiefer oder Metalleindeckungen."
      },
      {
        title: "Dachfenster",
        description: "Installation und Austausch von Dachfenstern aller Art."
      }
    ]
  },
  {
    title: "Klempnerarbeiten",
    slug: "klempnerarbeiten",
    description: "Montage und Wartung von Dachentwässerungssystemen.",
    image: "/images/services/klempner.jpg",
    details: [
      {
        title: "Dachentwässerung",
        description: "Installation von Rinnen und Fallrohren für optimale Wasserableitung."
      },
      {
        title: "Metallverkleidungen",
        description: "Herstellung und Montage von Metallverkleidungen und Abdeckungen."
      }
    ]
  },
  {
    title: "Dachsanierung",
    slug: "dachsanierung",
    description: "Umfassende Sanierung und Modernisierung bestehender Dachkonstruktionen.",
    image: "/images/services/sanierung.jpg",
    details: [
      {
        title: "Komplettsanierung",
        description: "Vollständige Erneuerung der Dacheindeckung und Dämmung."
      },
      {
        title: "Teilsanierung",
        description: "Gezielte Reparatur und Austausch beschädigter Bereiche."
      }
    ]
  },
  {
    title: "Dachbegrünung",
    slug: "dachbegruenung",
    description: "Professionelle Planung und Ausführung von Gründachprojekten.",
    image: "/images/services/begruenung.jpg",
    details: [
      {
        title: "Extensive Begrünung",
        description: "Pflegeleichte Begrünung mit Sedumpflanzen und Moosen."
      },
      {
        title: "Intensive Begrünung",
        description: "Gestaltung von Dachgärten mit vielfältiger Bepflanzung."
      }
    ]
  },
  {
    title: "Notfallservice",
    slug: "notfallservice",
    description: "24/7 Notdienst bei Sturmschäden und Wassereinbrüchen.",
    image: "/images/services/notfall.jpg",
    details: [
      {
        title: "Schnelle Hilfe",
        description: "Sofortige Schadensbegrenzung bei akuten Problemen."
      },
      {
        title: "Reparatur",
        description: "Fachgerechte Beseitigung von Sturmschäden und Undichtigkeiten."
      }
    ]
  }
]; 