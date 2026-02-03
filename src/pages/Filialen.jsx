import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';

export default function Filialen() {
  const [searchQuery, setSearchQuery] = useState('');

  const filialen = [
    {
      name: 'Deutsche Bank Frankfurt Hauptsitz',
      adresse: 'Taunusanlage 12, 60325 Frankfurt am Main',
      telefon: '+49 69 910-00',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      services: ['Beratung', 'Geldautomaten', 'Schließfächer']
    },
    {
      name: 'Deutsche Bank Berlin Mitte',
      adresse: 'Unter den Linden 13-15, 10117 Berlin',
      telefon: '+49 30 3407-0',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      services: ['Beratung', 'Geldautomaten', 'Depot']
    },
    {
      name: 'Deutsche Bank München Zentrum',
      adresse: 'Promenadeplatz 15, 80333 München',
      telefon: '+49 89 21270',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: Geschlossen',
      services: ['Beratung', 'Geldautomaten', 'Business Banking']
    },
    {
      name: 'Deutsche Bank Hamburg City',
      adresse: 'Jungfernstieg 7, 20354 Hamburg',
      telefon: '+49 40 37030',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      services: ['Beratung', 'Geldautomaten']
    },
    {
      name: 'Deutsche Bank Köln Innenstadt',
      adresse: 'Hohe Straße 145, 50667 Köln',
      telefon: '+49 221 1650',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: Geschlossen',
      services: ['Beratung', 'Geldautomaten', 'Schließfächer']
    },
    {
      name: 'Deutsche Bank Stuttgart Mitte',
      adresse: 'Königstraße 26, 70173 Stuttgart',
      telefon: '+49 711 2040',
      zeiten: 'Mo-Fr: 9:00-18:00, Sa: 9:00-13:00',
      services: ['Beratung', 'Geldautomaten']
    }
  ];

  const filteredFilialen = filialen.filter(filiale =>
    filiale.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    filiale.adresse.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
              Finden Sie eine Deutsche Bank Filiale in Ihrer Nähe
            </p>

            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Stadt, PLZ oder Straße suchen..."
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

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#00008B] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{filiale.adresse}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#00008B] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{filiale.telefon}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#00008B] flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">{filiale.zeiten}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500 mb-2">Verfügbare Services:</p>
                <div className="flex flex-wrap gap-2">
                  {filiale.services.map((service, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-50 text-[#00008B] px-2 py-1 rounded"
                    >
                      {service}
                    </span>
                  ))}
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
              <h3 className="text-xl font-semibold text-[#00008B] mb-2">Über 500 Filialen</h3>
              <p className="text-gray-600">In ganz Deutschland für Sie da</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl p-6 text-center"
            >
              <div className="w-16 h-16 bg-[#00008B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
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