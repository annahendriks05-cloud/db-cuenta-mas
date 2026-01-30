import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function HeroSection() {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    personalausweis: '',
    telefon: '',
    email: '',
    postleitzahl: '',
    autorizo: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formular eingereicht:', formData);
  };

  return (
    <div className="bg-[#001e50] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-[#001e50]" fill="currentColor">
                  <path d="M2 4h20v2H2V4zm0 7h20v2H2v-2zm0 7h20v2H2v-2z"/>
                </svg>
              </div>
              <div>
                <p className="text-xl font-semibold">Deutsche Bank</p>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
              Ihr Geld ist hier MEHR wert
            </h1>

            {/* Promotion Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-[#002654] rounded-lg p-8 inline-block"
            >
              <p className="text-white/80 text-lg mb-2">Erhalten Sie bis zu</p>
              <p className="text-[#ffd000] text-6xl md:text-7xl font-light mb-2">500€</p>
              <p className="text-white text-lg">Bonus in EURC</p>
            </motion.div>

            <p className="mt-8 text-white/80 text-sm">
              Wählen Sie, wie Sie Ihr Konto eröffnen möchten, über einen Berater oder direkt online in der{' '}
              <span className="text-white underline cursor-pointer hover:text-[#ffd000] transition-colors">
                DB App
              </span>
            </p>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-lg shadow-2xl p-8"
          >
            <h2 className="text-xl font-semibold text-[#001e50] mb-2">
              Konto eröffnen bei Deutsche Bank
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Füllen Sie dieses Formular aus und wir werden uns unverbindlich mit Ihnen in Verbindung setzen.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-semibold text-[#001e50] mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Was passiert mit Ihren Daten?
              </h3>
              <ul className="text-xs text-gray-700 space-y-1.5">
                <li>• Ein persönlicher Berater wird Sie innerhalb von 24 Stunden kontaktieren</li>
                <li>• Ihre Daten werden sicher und vertraulich behandelt</li>
                <li>• Keine versteckten Kosten oder Verpflichtungen</li>
                <li>• Sie erhalten detaillierte Informationen über EURUA und EURC Produkte</li>
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="vorname" className="text-sm text-gray-700">
                  Vorname <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="vorname"
                  placeholder="Ihr Vorname"
                  value={formData.vorname}
                  onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                />
              </div>

              <div>
                <Label htmlFor="nachname" className="text-sm text-gray-700">
                  Nachname <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nachname"
                  placeholder="Ihr Nachname"
                  value={formData.nachname}
                  onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                />
              </div>

              <div>
                <Label htmlFor="personalausweis" className="text-sm text-gray-700">
                  Personalausweis <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="personalausweis"
                  placeholder="Beispiel: 12345678X"
                  value={formData.personalausweis}
                  onChange={(e) => setFormData({ ...formData, personalausweis: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                />
              </div>

              <div>
                <Label htmlFor="telefon" className="text-sm text-gray-700">
                  Telefon <span className="text-red-500">*</span>
                </Label>
                <div className="flex gap-2 mt-1">
                  <Select defaultValue="de">
                    <SelectTrigger className="w-24 border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="de">🇩🇪 +49</SelectItem>
                      <SelectItem value="at">🇦🇹 +43</SelectItem>
                      <SelectItem value="ch">🇨🇭 +41</SelectItem>
                      <SelectItem value="es">🇪🇸 +34</SelectItem>
                      <SelectItem value="fr">🇫🇷 +33</SelectItem>
                      <SelectItem value="uk">🇬🇧 +44</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="telefon"
                    placeholder="612 34 56 78"
                    value={formData.telefon}
                    onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                    className="flex-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-sm text-gray-700">
                  E-Mail <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Beispiel: email@domain.de"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                />
              </div>

              <div>
                <Label htmlFor="postleitzahl" className="text-sm text-gray-700">
                  Postleitzahl <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="postleitzahl"
                  placeholder="Beispiel: 10115"
                  value={formData.postleitzahl}
                  onChange={(e) => setFormData({ ...formData, postleitzahl: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="autorizo"
                  checked={formData.autorizo}
                  onCheckedChange={(checked) => setFormData({ ...formData, autorizo: checked })}
                  className="mt-1 border-gray-300 data-[state=checked]:bg-[#001e50]"
                />
                <Label htmlFor="autorizo" className="text-xs text-gray-600 leading-relaxed">
                  ICH AUTORISIERE die Erhebung und Verarbeitung meiner Daten zur Verwaltung meines Antrags und zum Empfang kommerzieller Informationen, wie in der{' '}
                  <span className="text-[#001e50] underline cursor-pointer hover:text-[#003087]">
                    Datenschutzrichtlinie
                  </span>{' '}
                  beschrieben.
                </Label>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#001e50] hover:bg-[#003087] text-white py-6 text-base font-medium transition-all duration-300 mt-4"
              >
                FORMULAR ABSENDEN
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}