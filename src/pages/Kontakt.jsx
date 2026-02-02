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
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';
import { Loader2, CheckCircle2 } from 'lucide-react';

export default function Kontakt() {
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
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.autorizo) {
      toast.error('Bitte akzeptieren Sie die Datenschutzrichtlinie');
      return;
    }

    setLoading(true);
    
    try {
      await base44.entities.ContactoFormulario.create(formData);
      setSubmitted(true);
      toast.success('Vielen Dank! Wir werden uns bald bei Ihnen melden.');
    } catch (error) {
      toast.error('Fehler beim Senden des Formulars');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#001e50] to-[#003087] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white rounded-2xl shadow-2xl p-12 max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-[#001e50] mb-4">
            Vielen Dank!
          </h2>
          <p className="text-gray-600 mb-8">
            Ihre Anfrage wurde erfolgreich übermittelt. Ein Berater wird Sie innerhalb von 24 Stunden kontaktieren.
          </p>
          <Button
            onClick={() => window.location.href = '/'}
            className="bg-[#001e50] hover:bg-[#003087] text-white"
          >
            Zur Startseite
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f9fa] to-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 bg-white border-2 border-[#001e50] flex items-center justify-center p-2 rounded-lg shadow-lg">
              <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                <rect x="10" y="10" width="80" height="80" fill="none" stroke="#001e50" strokeWidth="8"/>
                <path d="M20 80 L80 20" stroke="#001e50" strokeWidth="8"/>
              </svg>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-[#001e50] mb-4">
            Konto eröffnen bei Deutsche Bank
          </h1>
          <p className="text-lg text-gray-600">
            Füllen Sie dieses Formular aus und wir werden uns unverbindlich mit Ihnen in Verbindung setzen
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-[#001e50] to-[#003087] rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-semibold mb-4">Erhalten Sie bis zu</h3>
              <p className="text-6xl font-light text-[#ffd000] mb-2">500€</p>
              <p className="text-xl mb-6">Bonus in EURC</p>
              <div className="h-px bg-white/20 my-6"></div>
              <p className="text-white/90">
                Profitieren Sie von unserem exklusiven Willkommensbonus für neue Kunden
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-[#001e50] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
                Ihre Vorteile
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Einlagensicherung</strong> bis zu 100.000€</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Kostenlose EURC/EURAU IBAN</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Höchste Sicherheit</strong> für alle Transaktionen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Komplett kostenlos</strong> - keine versteckten Gebühren</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-1">✓</span>
                  <span><strong>Blockchain-Technologie</strong> - innovative dezentrale Lösungen</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-2xl p-8"
          >
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong className="text-[#001e50]">⏱ Schnelle Bearbeitung:</strong> Ein Berater wird Sie innerhalb von 24 Stunden unverbindlich kontaktieren
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="vorname" className="text-sm text-gray-700">
                  Vorname <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="vorname"
                  required
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
                  required
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
                  required
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
                    required
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
                  required
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
                  required
                  placeholder="Beispiel: 10115"
                  value={formData.postleitzahl}
                  onChange={(e) => setFormData({ ...formData, postleitzahl: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#001e50] focus:ring-[#001e50]"
                />
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="autorizo"
                  required
                  checked={formData.autorizo}
                  onCheckedChange={(checked) => setFormData({ ...formData, autorizo: checked })}
                  className="mt-1 border-gray-300 data-[state=checked]:bg-[#001e50]"
                />
                <Label htmlFor="autorizo" className="text-xs text-gray-600 leading-relaxed">
                  ICH AUTORISIERE die Erhebung und Verarbeitung meiner Daten zur Verwaltung meines Antrags und zum Empfang kommerzieller Informationen, wie in der{' '}
                  <span className="text-[#001e50] underline cursor-pointer hover:text-[#003087]">
                    Datenschutzrichtlinie
                  </span>{' '}
                  beschrieben. <span className="text-red-500">*</span>
                </Label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#001e50] hover:bg-[#003087] text-white py-6 text-base font-medium transition-all duration-300 mt-4"
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