import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { createPageUrl } from '@/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

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
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.autorizo) {
      toast.error('Bitte akzeptieren Sie die Datenschutzrichtlinie');
      return;
    }

    setLoading(true);
    
    try {
      await base44.entities.ContactoFormulario.create(formData);
      toast.success('Formular erfolgreich übermittelt! Wir werden Sie bald kontaktieren.');
      setFormData({
        vorname: '',
        nachname: '',
        personalausweis: '',
        telefon: '',
        email: '',
        postleitzahl: '',
        autorizo: false
      });
    } catch (error) {
      toast.error('Fehler beim Senden des Formulars');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#00008B] relative overflow-hidden">
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
              <div className="w-16 h-16 bg-white flex items-center justify-center p-2">
                <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                  <rect x="10" y="10" width="80" height="80" fill="none" stroke="#001e50" strokeWidth="8"/>
                  <path d="M20 80 L80 20" stroke="#001e50" strokeWidth="8"/>
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
            <Link to={createPageUrl('DigitalFestgeld')}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#0000A0] rounded-lg p-8 inline-block cursor-pointer hover:bg-[#0000B5] transition-colors"
              >
                <p className="text-white/80 text-lg mb-2">Erhalten Sie bis zu</p>
                <p className="text-[#ffd000] text-6xl md:text-7xl font-light mb-2">8.000€</p>
                <p className="text-white text-lg">Bonus in EURC</p>
                <p className="text-white/70 text-xs mt-3 space-y-1">
                  <div>25k: 4% + 2% Cashback</div>
                  <div>50k: 5% + 2% Cashback</div>
                  <div>100k: 6% + 2% Cashback</div>
                </p>
              </motion.div>
            </Link>

            <p className="mt-8 text-white/80 text-sm">
              Wählen Sie, wie Sie Ihr Konto eröffnen möchten, über einen Berater oder direkt über der SMS Funktion{' '}
              <span className="text-white underline cursor-pointer hover:text-[#ffd000] transition-colors">
                FORMULAR ABSENDEN
              </span>
            </p>

            {/* Security & Trust Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 space-y-6"
            >
              {/* Security Badge */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Maximale Sicherheit</h3>
                    <p className="text-white/70 text-sm">Von Deutsche Bank garantiert</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90"><strong className="text-white">Einlagensicherung:</strong> Bis zu 100.000€ vollständig geschützt</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90"><strong className="text-white">Betrugsschutz:</strong> Höchste Sicherheit für alle Transaktionen</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90"><strong className="text-white">Kostenlose EURC/EURAU IBAN:</strong> Ihr persönliches sicheres Konto</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90"><strong className="text-white">Zahlungen senden & empfangen:</strong> Mit maximaler Sicherheit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90"><strong className="text-white">100% auf Ihren Namen:</strong> Nur Sie haben Zugriff</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90"><strong className="text-white">Dezentrale Lösungen:</strong> Erstmalig innovative Blockchain-Technologie</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/90"><strong className="text-white">Komplett kostenlos:</strong> Keine versteckten Gebühren</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-lg shadow-2xl p-8"
          >
            <h2 className="text-xl font-semibold text-[#00008B] mb-2">
              Konto eröffnen bei Deutsche Bank
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Füllen Sie dieses Formular aus und wir werden uns unverbindlich mit Ihnen in Verbindung setzen.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-semibold text-[#00008B] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Maximale Sicherheit mit EURUA/EURC
              </h3>
              <ul className="text-xs text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Einlagensicherung:</strong> Bis zu 100.000€ vollständig geschützt</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Betrugsschutz:</strong> Höchste Sicherheit für alle Transaktionen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Kostenlose digitale EURC/EURAU IBAN:</strong> Ihr persönliches sicheres Konto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Zahlungen senden & empfangen:</strong> Mit maximaler Sicherheit</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>100% auf Ihren Namen:</strong> Nur Sie haben Zugriff</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Dezentrale Lösungen:</strong> Erstmalig innovative Blockchain-Technologie</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  <span><strong>Komplett kostenlos:</strong> Keine versteckten Gebühren</span>
                </li>
              </ul>
              <p className="text-xs text-gray-600 mt-3 pt-3 border-t border-blue-200">
                Ein Berater wird Sie innerhalb von 24 Stunden unverbindlich kontaktieren
              </p>
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
                  className="mt-1 border-gray-300 focus:border-[#00008B] focus:ring-[#00008B]"
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
                  className="mt-1 border-gray-300 focus:border-[#00008B] focus:ring-[#00008B]"
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
                  className="mt-1 border-gray-300 focus:border-[#00008B] focus:ring-[#00008B]"
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
                    className="flex-1 border-gray-300 focus:border-[#00008B] focus:ring-[#00008B]"
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
                  className="mt-1 border-gray-300 focus:border-[#00008B] focus:ring-[#00008B]"
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
                  className="mt-1 border-gray-300 focus:border-[#00008B] focus:ring-[#00008B]"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="autorizo"
                  checked={formData.autorizo}
                  onCheckedChange={(checked) => setFormData({ ...formData, autorizo: checked })}
                  className="mt-1 border-gray-300 data-[state=checked]:bg-[#00008B]"
                />
                <Label htmlFor="autorizo" className="text-xs text-gray-600 leading-relaxed">
                  ICH AUTORISIERE die Erhebung und Verarbeitung meiner Daten zur Verwaltung meines Antrags und zum Empfang kommerzieller Informationen, wie in der{' '}
                  <span className="text-[#00008B] underline cursor-pointer hover:text-[#0000CD]">
                    Datenschutzrichtlinie
                  </span>{' '}
                  beschrieben.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00008B] hover:bg-[#0000CD] text-white py-6 text-base font-medium transition-all duration-300 mt-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Senden...
                  </>
                ) : (
                  'FORMULAR ABSENDEN'
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}