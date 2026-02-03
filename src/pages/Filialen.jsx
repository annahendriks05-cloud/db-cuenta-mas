import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Search, Globe2, Building2, TrendingUp, Vault } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';
import { useTranslation } from '@/components/landing/useTranslation';

function Filialen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllCountries, setShowAllCountries] = useState(false);
  const { t } = useTranslation();

  const filialen = [
    // Holanda
    {
      name: 'Deutsche Bank Amsterdam Zentrum',
      adresse: 'De Entree 195, 1101 HE Amsterdam, Nederland',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Nederland'
    },
    {
      name: 'Deutsche Bank Amsterdam Zuid',
      adresse: 'Zuidplein 116, 1077 XV Amsterdam, Nederland',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Nederland'
    },
    {
      name: 'Deutsche Bank Rotterdam',
      adresse: 'Weena 690, 3012 CN Rotterdam, Nederland',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Nederland'
    },
    {
      name: 'Deutsche Bank Den Haag',
      adresse: 'Prinses Beatrixlaan 15, 2595 AK Den Haag, Nederland',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Nederland'
    },
    {
      name: 'Deutsche Bank Utrecht',
      adresse: 'Papendorpseweg 100, 3528 BJ Utrecht, Nederland',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Nederland'
    },
    // Alemania - Frankfurt (5 sucursales)
    {
      name: 'Deutsche Bank Frankfurt Hauptsitz',
      adresse: 'Taunusanlage 12, 60325 Frankfurt am Main, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Frankfurt Kaiserstraße',
      adresse: 'Kaiserstraße 30, 60311 Frankfurt am Main, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Frankfurt Flughafen',
      adresse: 'Frankfurt Airport Center 1, 60549 Frankfurt am Main, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Frankfurt Bockenheim',
      adresse: 'Leipziger Straße 48, 60487 Frankfurt am Main, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Frankfurt Sachsenhausen',
      adresse: 'Schweizer Straße 32, 60594 Frankfurt am Main, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    // Berlin (5 sucursales)
    {
      name: 'Deutsche Bank Berlin Unter den Linden',
      adresse: 'Unter den Linden 13-15, 10117 Berlin, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Berlin Kurfürstendamm',
      adresse: 'Kurfürstendamm 237, 10719 Berlin, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Berlin Alexanderplatz',
      adresse: 'Alexanderplatz 2, 10178 Berlin, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Berlin Friedrichstraße',
      adresse: 'Friedrichstraße 181, 10117 Berlin, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Berlin Potsdamer Platz',
      adresse: 'Potsdamer Platz 5, 10785 Berlin, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    // München (5 sucursales)
    {
      name: 'Deutsche Bank München Promenadeplatz',
      adresse: 'Promenadeplatz 15, 80333 München, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank München Marienplatz',
      adresse: 'Tal 21, 80331 München, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank München Leopoldstraße',
      adresse: 'Leopoldstraße 234, 80807 München, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank München Sendlinger Tor',
      adresse: 'Sendlinger-Tor-Platz 8, 80336 München, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank München Pasing',
      adresse: 'Gleichmannstraße 5, 81241 München, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    // Hamburg (4 sucursales)
    {
      name: 'Deutsche Bank Hamburg Jungfernstieg',
      adresse: 'Jungfernstieg 7, 20354 Hamburg, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Hamburg Mönckebergstraße',
      adresse: 'Mönckebergstraße 7, 20095 Hamburg, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Hamburg Eppendorf',
      adresse: 'Eppendorfer Landstraße 96, 20249 Hamburg, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Hamburg Altona',
      adresse: 'Ottenser Hauptstraße 10, 22765 Hamburg, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    // Otras ciudades alemanas
    {
      name: 'Deutsche Bank Köln',
      adresse: 'Domkloster 2, 50667 Köln, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Stuttgart',
      adresse: 'Königstraße 26, 70173 Stuttgart, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Düsseldorf',
      adresse: 'Königsallee 45-47, 40212 Düsseldorf, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Hannover',
      adresse: 'Große Packhofstraße 1, 30159 Hannover, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Leipzig',
      adresse: 'Grimmaische Straße 19-21, 04109 Leipzig, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Dresden',
      adresse: 'Prager Straße 8, 01069 Dresden, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    // Reino Unido - London (5 sucursales)
    {
      name: 'Deutsche Bank London Winchester Street',
      adresse: '1 Great Winchester Street, London EC2N 2DB, United Kingdom',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'United Kingdom'
    },
    {
      name: 'Deutsche Bank London Fenchurch Street',
      adresse: '23 Fenchurch Street, London EC3M 3BY, United Kingdom',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'United Kingdom'
    },
    {
      name: 'Deutsche Bank London Canary Wharf',
      adresse: '1 Appold Street, London EC2A 2UU, United Kingdom',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'United Kingdom'
    },
    {
      name: 'Deutsche Bank London Mayfair',
      adresse: '31 Curzon Street, London W1J 7TX, United Kingdom',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'United Kingdom'
    },
    {
      name: 'Deutsche Bank London City',
      adresse: '60 Victoria Embankment, London EC4Y 0JP, United Kingdom',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'United Kingdom'
    },
    // Francia - Paris (4 sucursales)
    {
      name: 'Deutsche Bank Paris Avenue de Friedland',
      adresse: '3 Avenue de Friedland, 75008 Paris, France',
      zeiten: 'Mo-Fr: 9:00-17:30',
      land: 'France'
    },
    {
      name: 'Deutsche Bank Paris Champs-Élysées',
      adresse: '66 Avenue des Champs-Élysées, 75008 Paris, France',
      zeiten: 'Mo-Fr: 9:00-17:30',
      land: 'France'
    },
    {
      name: 'Deutsche Bank Paris La Défense',
      adresse: '7 Place du Chancelier Adenauer, 75016 Paris, France',
      zeiten: 'Mo-Fr: 9:00-17:30',
      land: 'France'
    },
    {
      name: 'Deutsche Bank Paris Opéra',
      adresse: '12 Boulevard de la Madeleine, 75009 Paris, France',
      zeiten: 'Mo-Fr: 9:00-17:30',
      land: 'France'
    },
    // Italia - Milano (3 sucursales)
    {
      name: 'Deutsche Bank Milano Piazza del Calendario',
      adresse: 'Piazza del Calendario 3, 20126 Milano, Italia',
      zeiten: 'Mo-Fr: 9:00-17:30',
      land: 'Italia'
    },
    {
      name: 'Deutsche Bank Milano Piazza Duomo',
      adresse: 'Piazza Duomo 19, 20121 Milano, Italia',
      zeiten: 'Mo-Fr: 9:00-17:30',
      land: 'Italia'
    },
    {
      name: 'Deutsche Bank Milano Porta Nuova',
      adresse: 'Via Gaetano de Castillia 6, 20124 Milano, Italia',
      zeiten: 'Mo-Fr: 9:00-17:30',
      land: 'Italia'
    },
    // Roma
    {
      name: 'Deutsche Bank Roma Via Mercadante',
      adresse: 'Via Mercadante 12/14, 00198 Roma, Italia',
      zeiten: 'Mo-Fr: 9:00-17:30',
      land: 'Italia'
    },
    {
      name: 'Deutsche Bank Roma Via Nazionale',
      adresse: 'Via Nazionale 91, 00184 Roma, Italia',
      zeiten: 'Mo-Fr: 9:00-17:30',
      land: 'Italia'
    },
    // España - Madrid (3 sucursales)
    {
      name: 'Deutsche Bank Madrid Castellana',
      adresse: 'Paseo de la Castellana 18, 28046 Madrid, España',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'España'
    },
    {
      name: 'Deutsche Bank Madrid Serrano',
      adresse: 'Calle Serrano 55, 28006 Madrid, España',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'España'
    },
    {
      name: 'Deutsche Bank Madrid Azca',
      adresse: 'Paseo de la Castellana 95, 28046 Madrid, España',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'España'
    },
    // Barcelona (2 sucursales)
    {
      name: 'Deutsche Bank Barcelona Diagonal',
      adresse: 'Avinguda Diagonal 477, 08036 Barcelona, España',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'España'
    },
    {
      name: 'Deutsche Bank Barcelona Passeig de Gràcia',
      adresse: 'Passeig de Gràcia 111, 08008 Barcelona, España',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'España'
    },
    // Estados Unidos - New York (4 sucursales)
    {
      name: 'Deutsche Bank New York Wall Street',
      adresse: '60 Wall Street, New York, NY 10005, USA',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'USA'
    },
    {
      name: 'Deutsche Bank New York Midtown',
      adresse: '1251 Avenue of the Americas, New York, NY 10020, USA',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'USA'
    },
    {
      name: 'Deutsche Bank New York Park Avenue',
      adresse: '875 Third Avenue, New York, NY 10022, USA',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'USA'
    },
    {
      name: 'Deutsche Bank New York Columbus Circle',
      adresse: '10 Columbus Circle, New York, NY 10019, USA',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'USA'
    },
    // Suiza - Zürich (3 sucursales)
    {
      name: 'Deutsche Bank Zürich Uraniastrasse',
      adresse: 'Uraniastrasse 9, 8001 Zürich, Schweiz',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Schweiz'
    },
    {
      name: 'Deutsche Bank Zürich Paradeplatz',
      adresse: 'Paradeplatz 6, 8001 Zürich, Schweiz',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Schweiz'
    },
    {
      name: 'Deutsche Bank Zürich Bahnhofstrasse',
      adresse: 'Bahnhofstrasse 45, 8001 Zürich, Schweiz',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Schweiz'
    },
    // Geneva
    {
      name: 'Deutsche Bank Genève',
      adresse: 'Rue du Rhône 65, 1204 Genève, Schweiz',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Schweiz'
    },
    // Bélgica
    {
      name: 'Deutsche Bank Bruxelles Marnix',
      adresse: 'Avenue Marnix 24, 1000 Bruxelles, Belgique',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Belgique'
    },
    {
      name: 'Deutsche Bank Bruxelles Louise',
      adresse: 'Avenue Louise 326, 1050 Bruxelles, Belgique',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Belgique'
    },
    // Austria - Wien (3 sucursales)
    {
      name: 'Deutsche Bank Wien Fleischmarkt',
      adresse: 'Fleischmarkt 1, 1010 Wien, Österreich',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Österreich'
    },
    {
      name: 'Deutsche Bank Wien Ringstraße',
      adresse: 'Kärntner Ring 17, 1010 Wien, Österreich',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Österreich'
    },
    {
      name: 'Deutsche Bank Wien Donau City',
      adresse: 'Donau-City-Straße 6, 1220 Wien, Österreich',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Österreich'
    },
    // Luxemburgo
    {
      name: 'Deutsche Bank Luxembourg Kirchberg',
      adresse: '2 Boulevard Konrad Adenauer, 1115 Luxembourg',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Luxembourg'
    },
    {
      name: 'Deutsche Bank Luxembourg Centre',
      adresse: 'Boulevard Royal 19, 2449 Luxembourg',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Luxembourg'
    },
    // Singapur (2 sucursales)
    {
      name: 'Deutsche Bank Singapore Raffles Quay',
      adresse: 'One Raffles Quay, Singapore 048583',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Singapore'
    },
    {
      name: 'Deutsche Bank Singapore Marina Bay',
      adresse: '6 Shenton Way, Singapore 068809',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Singapore'
    },
    // Hong Kong (3 sucursales)
    {
      name: 'Deutsche Bank Hong Kong Cheung Kong Center',
      adresse: 'Cheung Kong Center, 2 Queen\'s Road Central, Hong Kong',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Hong Kong'
    },
    {
      name: 'Deutsche Bank Hong Kong International Finance Centre',
      adresse: '8 Finance Street, Central, Hong Kong',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Hong Kong'
    },
    {
      name: 'Deutsche Bank Hong Kong Kowloon',
      adresse: '1 Peking Road, Tsim Sha Tsui, Kowloon, Hong Kong',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Hong Kong'
    },
    // Japón - Tokyo (2 sucursales)
    {
      name: 'Deutsche Bank Tokyo Nagatacho',
      adresse: '2-11-1 Nagatacho, Chiyoda-ku, Tokyo 100-6171, Japan',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Japan'
    },
    {
      name: 'Deutsche Bank Tokyo Marunouchi',
      adresse: '2-7-1 Marunouchi, Chiyoda-ku, Tokyo 100-7021, Japan',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Japan'
    },
    // Australia - Sydney (2 sucursales)
    {
      name: 'Deutsche Bank Sydney Deutsche Bank Place',
      adresse: 'Deutsche Bank Place, Corner Hunter & Phillip Streets, Sydney NSW 2000, Australia',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Australia'
    },
    {
      name: 'Deutsche Bank Sydney Martin Place',
      adresse: '126 Phillip Street, Sydney NSW 2000, Australia',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Australia'
    }
  ];

  const filteredFilialen = filialen.filter(filiale => {
    // Si hay búsqueda, mostrar todos los países
    if (searchQuery.trim()) {
      return filiale.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        filiale.adresse.toLowerCase().includes(searchQuery.toLowerCase()) ||
        filiale.land.toLowerCase().includes(searchQuery.toLowerCase());
    }
    // Sin búsqueda, solo mostrar Holanda
    return filiale.land === 'Nederland';
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#00008B] text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link to={createPageUrl('Home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity inline-flex">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Deutsche_Bank_logo_without_wordmark.svg/240px-Deutsche_Bank_logo_without_wordmark.svg.png" 
              alt="Deutsche Bank Logo" 
              className="w-10 h-10 bg-white p-1"
            />
            <p className="text-lg font-semibold">Deutsche Bank</p>
          </Link>
        </div>
      </div>
      <Navigation />

      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#00008B] via-[#0000CD] to-[#1a1a8f] py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ffd000] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Globe2 className="w-4 h-4 text-[#ffd000]" />
              <span className="text-white/90 text-sm font-medium">{t('worldwidePresent')}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
              {t('findBranch')}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-12 px-4">
              {t('branchesNetherlands')}
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative group">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-[#00008B] transition-colors" />
                <Input
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-14 pr-6 py-6 md:py-7 text-sm md:text-base bg-white/95 backdrop-blur-sm border-0 shadow-2xl rounded-2xl focus:ring-2 focus:ring-[#ffd000] transition-all"
                />
              </div>
              
              {searchQuery && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white/70 text-sm mt-4"
                >
                  {filteredFilialen.length} {filteredFilialen.length === 1 ? t('branchFound') : t('branchesFound')}
                </motion.p>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filialen List */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        {!searchQuery && (
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-2xl md:text-3xl font-light text-[#00008B] mb-3">
                {t('deutscheBankNetherlands')}
              </h2>
              <p className="text-gray-600">{t('visitBranches')}</p>
            </motion.div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFilialen.map((filiale, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              {/* Country Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className="inline-flex items-center gap-1 bg-[#00008B] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg">
                  <Globe2 className="w-3 h-3" />
                  {filiale.land}
                </span>
              </div>
              
              {/* Gradient Header */}
              <div className="h-32 bg-gradient-to-br from-[#00008B] to-[#0000CD] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-4">
                <h3 className="text-xl font-semibold text-[#00008B] mb-4 group-hover:text-[#0000CD] transition-colors">
                  {filiale.name}
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-[#00008B]" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{filiale.adresse}</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{filiale.zeiten}</p>
                  </div>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-gradient-to-r from-[#00008B] to-[#0000CD] hover:from-[#0000A0] hover:to-[#0000E0] text-white font-medium py-5 md:py-6 rounded-xl shadow-lg shadow-blue-500/20 group-hover:shadow-xl group-hover:shadow-blue-500/30 transition-all text-sm md:text-base">
                  <MapPin className="w-4 h-4 mr-2" />
                  {t('planRoute')}
                </Button>
              </div>

              {/* Decorative Bottom Border */}
              <div className="h-1 bg-gradient-to-r from-[#00008B] via-[#ffd000] to-[#0000CD]"></div>
            </motion.div>
          ))}
        </div>

        {filteredFilialen.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
              <Search className="w-10 h-10 text-gray-400" />
            </div>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">{t('noBranchesFound')}</h3>
            <p className="text-gray-500">{t('tryAnotherSearch')}</p>
          </motion.div>
        )}
      </div>

      {/* Info Section */}
      <div className="relative bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00008B] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#ffd000] rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-light text-[#00008B] mb-4">{t('whyDeutscheBank')}</h2>
            <p className="text-lg md:text-xl text-gray-600">{t('trustedPartner')}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00008B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#00008B] to-[#0000CD] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Globe2 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#00008B] mb-3">{t('worldwidePresence')}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{t('worldwideDesc')}</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-2 text-[#00008B] font-semibold text-sm md:text-base">
                    <TrendingUp className="w-5 h-5" />
                    <span>{t('countriesPlus')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ffd000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ffd000] to-[#ffdb33] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Building2 className="w-10 h-10 text-[#00008B]" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#00008B] mb-3">{t('personalAdvice')}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">{t('personalAdviceDesc')}</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-2 text-[#00008B] font-semibold text-sm md:text-base">
                    <TrendingUp className="w-5 h-5" />
                    <span>{t('expertTeam')}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                  <Vault className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold text-[#00008B] mb-3">Digitale Tresor-Lösung</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">Kostenlose digitale IBAN für sichere Euro-Transaktionen. Maximale Sicherheit durch zentrale und dezentrale Verwahrung - eine innovative Lösung, die höchste Schutzstandards übertrifft.</p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-2 text-[#00008B] font-semibold text-sm md:text-base">
                    <TrendingUp className="w-5 h-5" />
                    <span>Höchste Sicherheitsstandards</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Filialen;