import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';
import { useTranslation } from '@/components/landing/useTranslation';

function Kontakt() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    betreff: '',
    nachricht: ''
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await base44.entities.Kontaktanfrage.create({
        vorname: formData.vorname,
        nachname: formData.nachname,
        email: formData.email,
        telefon: formData.telefon,
        betreff: formData.betreff,
        nachricht: formData.nachricht,
        status: 'neu'
      });
      
      toast.success('Ihre Nachricht wurde erfolgreich gesendet!');
      setFormData({
        vorname: '',
        nachname: '',
        email: '',
        telefon: '',
        betreff: '',
        nachricht: ''
      });
    } catch (error) {
      toast.error('Fehler beim Senden der Nachricht');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#00008B] text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link to={createPageUrl('Home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity inline-flex">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697cf26cc2a02d112fd30c1c/f1efd9eb2_image.png"
              alt="Deutsche Bank Logo"
              className="h-12"
            />
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Mail className="w-4 h-4 text-[#ffd000]" />
              <span className="text-white/90 text-sm font-medium">24/7 Erreichbar</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-light text-white mb-6">
              {t('contactTitle')}
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              {t('contactSubtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Info & Form */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-[#00008B] to-[#0000CD] text-white rounded-2xl p-8 shadow-xl"
            >
              <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#ffd000] rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#00008B]" />
                </div>
                {t('contactInformation')}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all">
                  <div className="w-10 h-10 bg-[#ffd000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#00008B]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-[#ffd000]">{t('phone')}</p>
                    <p className="text-white text-lg font-medium">+49 30 544480512</p>
                    <p className="text-xs text-white/70 mt-1">Montag - Freitag: 9:00 - 18:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all">
                  <div className="w-10 h-10 bg-[#ffd000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#00008B]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-[#ffd000]">{t('email')}</p>
                    <p className="text-white text-lg font-medium">info@deutschebank-netherlands.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all">
                  <div className="w-10 h-10 bg-[#ffd000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#00008B]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-[#ffd000]">Deutsche Bank Berlin</p>
                    <p className="text-white/90">
                      Unter den Linden 13-15<br />
                      10117 Berlin<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all">
                  <div className="w-10 h-10 bg-[#ffd000] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#00008B]" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2 text-[#ffd000]">{t('openingHours')}</p>
                    <p className="text-white/90 text-sm">
                      Montag - Freitag: 9:00 - 18:00<br />
                      Samstag: 9:00 - 13:00<br />
                      Sonntag: Geschlossen
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-[#ffd000] to-[#ffdb33] rounded-2xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#00008B] mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {t('quickHelp')}
              </h3>
              <p className="text-sm text-[#00008B]/80 mb-4">
                {t('urgentMatters')}
              </p>
              <Button className="w-full bg-[#00008B] hover:bg-[#0000CD] text-white shadow-lg">
                <Phone className="w-4 h-4 mr-2" />
                {t('callHotline')}
              </Button>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-lg shadow-2xl p-8"
          >
            <h2 className="text-xl font-semibold text-[#00008B] mb-2">
              {t('sendMessage')}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              {t('contactSubtitle')}
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <h3 className="text-sm font-semibold text-[#00008B] mb-3 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Sicherheit bei Deutsche Bank
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
                Wir werden Sie in Kürze kontaktieren
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="vorname" className="text-sm text-gray-700">
                  {t('firstName')} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="vorname"
                  placeholder="Ihr Vorname"
                  required
                  value={formData.vorname}
                  onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#00008B] focus:ring-[#00008B]"
                />
              </div>

              <div>
                <Label htmlFor="nachname" className="text-sm text-gray-700">
                  {t('lastName')} <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="nachname"
                  placeholder="Ihr Nachname"
                  required
                  value={formData.nachname}
                  onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#00008B] focus:ring-[#00008B]"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm text-gray-700">
                  E-Mail <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Beispiel: email@domain.de"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#00008B] focus:ring-[#00008B]"
                />
              </div>

              <div>
                <Label htmlFor="telefon" className="text-sm text-gray-700">
                  {t('phone')}
                </Label>
                <Input
                  id="telefon"
                  placeholder="Beispiel: +49 612 34 56 78"
                  value={formData.telefon}
                  onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                  className="mt-1 border-gray-300 focus:border-[#00008B] focus:ring-[#00008B]"
                />
              </div>

              <div>
                <Label htmlFor="betreff" className="text-sm text-gray-700">
                  {t('subject')} <span className="text-red-500">*</span>
                </Label>
                <Select
                  value={formData.betreff}
                  onValueChange={(value) => setFormData({ ...formData, betreff: value })}
                >
                  <SelectTrigger className="mt-1 border-gray-300 focus:border-[#00008B] focus:ring-[#00008B]">
                    <SelectValue placeholder="Bitte wählen..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Kontoeröffnung">Kontoeröffnung</SelectItem>
                    <SelectItem value="Digital Festgeld">Digital Festgeld</SelectItem>
                    <SelectItem value="Beratungstermin">Beratungstermin</SelectItem>
                    <SelectItem value="Beschwerden">Beschwerden</SelectItem>
                    <SelectItem value="Allgemeine Anfrage">Allgemeine Anfrage</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="nachricht" className="text-sm text-gray-700">
                  {t('message')} <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="nachricht"
                  required
                  value={formData.nachricht}
                  onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                  className="mt-1 h-32 border-gray-300 focus:border-[#00008B] focus:ring-[#00008B]"
                  placeholder="Ihre Nachricht..."
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00008B] hover:bg-[#0000CD] text-white py-6 text-base font-medium transition-all duration-300 mt-4"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {t('sending')}
                  </>
                ) : (
                  t('sendButton')
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Kontakt;