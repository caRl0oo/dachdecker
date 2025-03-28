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
    slug: "flachdach",
    description: "Professionelle Verlegung und Reparatur von Flachdächern mit modernsten Materialien.",
    image: "/images/services/flachdach.svg",
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
    slug: "steildach",
    description: "Fachgerechte Eindeckung und Sanierung von Steildächern.",
    image: "/images/services/steildach.svg",
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
    slug: "klempner",
    description: "Montage und Wartung von Dachentwässerungssystemen.",
    image: "/images/services/klempner.svg",
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
    slug: "sanierung",
    description: "Umfassende Sanierung und Modernisierung bestehender Dachkonstruktionen.",
    image: "/images/services/sanierung.svg",
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
    slug: "begruenung",
    description: "Professionelle Planung und Ausführung von Gründachprojekten.",
    image: "/images/services/begruenung.svg",
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
    slug: "notfall",
    description: "24/7 Notdienst bei Sturmschäden und Wassereinbrüchen.",
    image: "/images/services/notfall.svg",
    details: [
      {
        title: "Sturmschäden",
        description: "Schnelle Hilfe bei beschädigten Dächern nach Stürmen."
      },
      {
        title: "Wassereinbrüche",
        description: "Professionelle Behebung von Wasserschäden am Dach."
      }
    ]
  }
]; 