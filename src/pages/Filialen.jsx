import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';

function Filialen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllCountries, setShowAllCountries] = useState(false);

  const filialen = [
    // Holanda
    {
      name: 'Deutsche Bank Amsterdam',
      adresse: 'De Entree 195, 1101 HE Amsterdam, Nederland',
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
    // Alemania
    {
      name: 'Deutsche Bank Frankfurt Hauptsitz',
      adresse: 'Taunusanlage 12, 60325 Frankfurt am Main, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Berlin',
      adresse: 'Unter den Linden 13-15, 10117 Berlin, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank München',
      adresse: 'Promenadeplatz 15, 80333 München, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00',
      land: 'Deutschland'
    },
    {
      name: 'Deutsche Bank Hamburg',
      adresse: 'Jungfernstieg 7, 20354 Hamburg, Deutschland',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      land: 'Deutschland'
    },
    // Reino Unido
    {
      name: 'Deutsche Bank London',
      adresse: '1 Great Winchester Street, London EC2N 2DB, United Kingdom',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'United Kingdom'
    },
    // Francia
    {
      name: 'Deutsche Bank Paris',
      adresse: '3 Avenue de Friedland, 75008 Paris, France',
      zeiten: 'Mo-Fr: 9:00-17:30',
      land: 'France'
    },
    // Italia
    {
      name: 'Deutsche Bank Milano',
      adresse: 'Piazza del Calendario 3, 20126 Milano, Italia',
      zeiten: 'Mo-Fr: 9:00-17:30',
      land: 'Italia'
    },
    {
      name: 'Deutsche Bank Roma',
      adresse: 'Via Mercadante 12/14, 00198 Roma, Italia',
      zeiten: 'Mo-Fr: 9:00-17:30',
      land: 'Italia'
    },
    // España
    {
      name: 'Deutsche Bank Madrid',
      adresse: 'Paseo de la Castellana 18, 28046 Madrid, España',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'España'
    },
    {
      name: 'Deutsche Bank Barcelona',
      adresse: 'Avinguda Diagonal 477, 08036 Barcelona, España',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'España'
    },
    // Estados Unidos
    {
      name: 'Deutsche Bank New York',
      adresse: '60 Wall Street, New York, NY 10005, USA',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'USA'
    },
    // Suiza
    {
      name: 'Deutsche Bank Zürich',
      adresse: 'Uraniastrasse 9, 8001 Zürich, Schweiz',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Schweiz'
    },
    // Bélgica
    {
      name: 'Deutsche Bank Bruxelles',
      adresse: 'Avenue Marnix 24, 1000 Bruxelles, Belgique',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Belgique'
    },
    // Austria
    {
      name: 'Deutsche Bank Wien',
      adresse: 'Fleischmarkt 1, 1010 Wien, Österreich',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Österreich'
    },
    // Luxemburgo
    {
      name: 'Deutsche Bank Luxembourg',
      adresse: '2 Boulevard Konrad Adenauer, 1115 Luxembourg',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Luxembourg'
    },
    // Singapur
    {
      name: 'Deutsche Bank Singapore',
      adresse: 'One Raffles Quay, Singapore 048583',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Singapore'
    },
    // Hong Kong
    {
      name: 'Deutsche Bank Hong Kong',
      adresse: 'Cheung Kong Center, 2 Queen\'s Road Central, Hong Kong',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Hong Kong'
    },
    // Japón
    {
      name: 'Deutsche Bank Tokyo',
      adresse: '2-11-1 Nagatacho, Chiyoda-ku, Tokyo 100-6171, Japan',
      zeiten: 'Mo-Fr: 9:00-17:00',
      land: 'Japan'
    },
    // Australia
    {
      name: 'Deutsche Bank Sydney',
      adresse: 'Deutsche Bank Place, Corner Hunter & Phillip Streets, Sydney NSW 2000, Australia',
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
            <div className="w-10 h-10 bg-white flex items-center justify-center p-1.5">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <rect x="10" y="10" width="80" height="80" fill="none" stroke="#00008B" strokeWidth="8"/>
                <path d="M20 80 L80 20" stroke="#00008B" strokeWidth="8"/>
              </svg>
            </div>
            <p className="text-lg font-semibold">Deutsche Bank</p>
          </Link>
        </div>
      </div>
      <Navigation />

      {/* Hero */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-light text-[#00008B] mb-6">
              Filialen
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Deutsche Bank filialen in Nederland. Zoek wereldwijd in de zoekbalk.
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Zoek wereldwijd: stad, land of adres..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 py-6 text-base"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Filialen List */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFilialen.map((filiale, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold text-[#00008B] mb-4">
                {filiale.name}
              </h3>

              <div className="space-y-3 text-sm mb-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#00008B] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{filiale.adresse}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#00008B] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{filiale.zeiten}</p>
                </div>
              </div>

              <Button className="w-full mt-4 bg-[#00008B] hover:bg-[#0000CD] text-white">
                Route planen
              </Button>
            </motion.div>
          ))}
        </div>

        {filteredFilialen.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Keine Filialen gefunden</p>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-[#00008B] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#00008B] mb-2">Weltweit vertreten</h3>
              <p className="text-gray-600">In über 50 Ländern für Sie da</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-[#00008B] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#00008B] mb-2">Persönliche Beratung</h3>
              <p className="text-gray-600">Kompetente Experten vor Ort</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-[#00008B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#00008B] mb-2">Flexible Öffnungszeiten</h3>
              <p className="text-gray-600">Auch samstags für Sie geöffnet</p>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Filialen;