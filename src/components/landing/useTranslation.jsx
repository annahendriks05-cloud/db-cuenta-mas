import { useState, useEffect } from 'react';

const translations = {
  de: {
    // Filialen page
    worldwidePresent: 'Weltweit präsent',
    findBranch: 'Finden Sie Ihre nächste Filiale',
    branchesNetherlands: 'Deutsche Bank Filialen in den Niederlanden. Suchen Sie weltweit nach allen Standorten.',
    searchPlaceholder: 'Weltweit suchen: Stadt, Land oder Adresse...',
    branchesFound: 'Filialen gefunden',
    branchFound: 'Filiale gefunden',
    deutscheBankNetherlands: 'Deutsche Bank Niederlande',
    visitBranches: 'Besuchen Sie eine unserer Filialen in den Niederlanden',
    planRoute: 'Route planen',
    noBranchesFound: 'Keine Filialen gefunden',
    tryAnotherSearch: 'Versuchen Sie eine andere Suche',
    whyDeutscheBank: 'Warum Deutsche Bank?',
    trustedPartner: 'Ihr vertrauenswürdiger Partner weltweit',
    worldwidePresence: 'Weltweit vertreten',
    worldwideDesc: 'In über 50 Ländern für Sie da mit lokaler Expertise und globalem Wissen',
    countriesPlus: '50+ Länder',
    personalAdvice: 'Persönliche Beratung',
    personalAdviceDesc: 'Erfahrene Berater helfen Ihnen bei allen finanziellen Fragen und Zielen',
    expertTeam: 'Expertenteam',
    flexibleHours: 'Flexible Öffnungszeiten',
    flexibleHoursDesc: 'Auch samstags geöffnet für Ihre Bequemlichkeit und Planung',
    daysAvailable: '7 Tage verfügbar'
  },
  en: {
    worldwidePresent: 'Worldwide presence',
    findBranch: 'Find your nearest branch',
    branchesNetherlands: 'Deutsche Bank branches in the Netherlands. Search worldwide for all locations.',
    searchPlaceholder: 'Search worldwide: city, country or address...',
    branchesFound: 'branches found',
    branchFound: 'branch found',
    deutscheBankNetherlands: 'Deutsche Bank Netherlands',
    visitBranches: 'Visit one of our branches in the Netherlands',
    planRoute: 'Plan route',
    noBranchesFound: 'No branches found',
    tryAnotherSearch: 'Try another search',
    whyDeutscheBank: 'Why Deutsche Bank?',
    trustedPartner: 'Your trusted partner worldwide',
    worldwidePresence: 'Worldwide presence',
    worldwideDesc: 'Present in over 50 countries with local expertise and global knowledge',
    countriesPlus: '50+ countries',
    personalAdvice: 'Personal advice',
    personalAdviceDesc: 'Experienced advisors help you with all your financial questions and goals',
    expertTeam: 'Expert team',
    flexibleHours: 'Flexible opening hours',
    flexibleHoursDesc: 'Also open on Saturdays for your convenience and planning',
    daysAvailable: '7 days available'
  },
  fr: {
    worldwidePresent: 'Présence mondiale',
    findBranch: 'Trouvez votre agence la plus proche',
    branchesNetherlands: 'Agences Deutsche Bank aux Pays-Bas. Recherchez dans le monde entier.',
    searchPlaceholder: 'Recherche mondiale: ville, pays ou adresse...',
    branchesFound: 'agences trouvées',
    branchFound: 'agence trouvée',
    deutscheBankNetherlands: 'Deutsche Bank Pays-Bas',
    visitBranches: 'Visitez l\'une de nos agences aux Pays-Bas',
    planRoute: 'Planifier l\'itinéraire',
    noBranchesFound: 'Aucune agence trouvée',
    tryAnotherSearch: 'Essayez une autre recherche',
    whyDeutscheBank: 'Pourquoi Deutsche Bank?',
    trustedPartner: 'Votre partenaire de confiance dans le monde entier',
    worldwidePresence: 'Présence mondiale',
    worldwideDesc: 'Présent dans plus de 50 pays avec une expertise locale et des connaissances mondiales',
    countriesPlus: '50+ pays',
    personalAdvice: 'Conseil personnalisé',
    personalAdviceDesc: 'Des conseillers expérimentés vous aident pour toutes vos questions financières',
    expertTeam: 'Équipe d\'experts',
    flexibleHours: 'Horaires flexibles',
    flexibleHoursDesc: 'Également ouvert le samedi pour votre commodité',
    daysAvailable: '7 jours disponibles'
  },
  es: {
    worldwidePresent: 'Presencia mundial',
    findBranch: 'Encuentre su sucursal más cercana',
    branchesNetherlands: 'Sucursales Deutsche Bank en los Países Bajos. Busque en todo el mundo.',
    searchPlaceholder: 'Buscar en todo el mundo: ciudad, país o dirección...',
    branchesFound: 'sucursales encontradas',
    branchFound: 'sucursal encontrada',
    deutscheBankNetherlands: 'Deutsche Bank Países Bajos',
    visitBranches: 'Visite una de nuestras sucursales en los Países Bajos',
    planRoute: 'Planificar ruta',
    noBranchesFound: 'No se encontraron sucursales',
    tryAnotherSearch: 'Intente otra búsqueda',
    whyDeutscheBank: '¿Por qué Deutsche Bank?',
    trustedPartner: 'Su socio de confianza en todo el mundo',
    worldwidePresence: 'Presencia mundial',
    worldwideDesc: 'Presente en más de 50 países con experiencia local y conocimiento global',
    countriesPlus: '50+ países',
    personalAdvice: 'Asesoramiento personal',
    personalAdviceDesc: 'Asesores experimentados le ayudan con todas sus preguntas financieras',
    expertTeam: 'Equipo experto',
    flexibleHours: 'Horarios flexibles',
    flexibleHoursDesc: 'También abierto los sábados para su comodidad',
    daysAvailable: '7 días disponibles'
  },
  nl: {
    worldwidePresent: 'Wereldwijd aanwezig',
    findBranch: 'Vind uw dichtstbijzijnde filiaal',
    branchesNetherlands: 'Deutsche Bank filialen in Nederland. Zoek wereldwijd naar alle locaties.',
    searchPlaceholder: 'Zoek wereldwijd: stad, land of adres...',
    branchesFound: 'filialen gevonden',
    branchFound: 'filiaal gevonden',
    deutscheBankNetherlands: 'Deutsche Bank Nederland',
    visitBranches: 'Bezoek een van onze filialen in Nederland',
    planRoute: 'Route plannen',
    noBranchesFound: 'Geen filialen gevonden',
    tryAnotherSearch: 'Probeer een andere zoekopdracht',
    whyDeutscheBank: 'Waarom Deutsche Bank?',
    trustedPartner: 'Uw vertrouwde partner wereldwijd',
    worldwidePresence: 'Wereldwijd aanwezig',
    worldwideDesc: 'In meer dan 50 landen voor u klaar met lokale expertise en mondiale kennis',
    countriesPlus: '50+ landen',
    personalAdvice: 'Persoonlijk advies',
    personalAdviceDesc: 'Ervaren adviseurs helpen u met al uw financiële vragen en doelstellingen',
    expertTeam: 'Expert team',
    flexibleHours: 'Flexibele openingstijden',
    flexibleHoursDesc: 'Ook op zaterdag geopend voor uw gemak en planning',
    daysAvailable: '7 dagen beschikbaar'
  },
  it: {
    worldwidePresent: 'Presenza mondiale',
    findBranch: 'Trova la tua filiale più vicina',
    branchesNetherlands: 'Filiali Deutsche Bank nei Paesi Bassi. Cerca in tutto il mondo.',
    searchPlaceholder: 'Cerca in tutto il mondo: città, paese o indirizzo...',
    branchesFound: 'filiali trovate',
    branchFound: 'filiale trovata',
    deutscheBankNetherlands: 'Deutsche Bank Paesi Bassi',
    visitBranches: 'Visita una delle nostre filiali nei Paesi Bassi',
    planRoute: 'Pianifica percorso',
    noBranchesFound: 'Nessuna filiale trovata',
    tryAnotherSearch: 'Prova un\'altra ricerca',
    whyDeutscheBank: 'Perché Deutsche Bank?',
    trustedPartner: 'Il tuo partner di fiducia in tutto il mondo',
    worldwidePresence: 'Presenza mondiale',
    worldwideDesc: 'Presente in oltre 50 paesi con competenza locale e conoscenza globale',
    countriesPlus: '50+ paesi',
    personalAdvice: 'Consulenza personale',
    personalAdviceDesc: 'Consulenti esperti ti aiutano con tutte le tue domande finanziarie',
    expertTeam: 'Team di esperti',
    flexibleHours: 'Orari flessibili',
    flexibleHoursDesc: 'Aperto anche il sabato per la tua comodità',
    daysAvailable: '7 giorni disponibili'
  }
};

export function useTranslation() {
  const [language, setLanguage] = useState('de');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'de';
    setLanguage(savedLanguage);

    const handleLanguageChange = () => {
      const newLanguage = localStorage.getItem('language') || 'de';
      setLanguage(newLanguage);
    };

    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  const t = (key) => {
    return translations[language]?.[key] || translations.de[key] || key;
  };

  return { t, language };
}