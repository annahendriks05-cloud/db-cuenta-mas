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
      await base44.integrations.Core.SendEmail({
        to: 'kontakt@deutschebank.de',
        subject: `Kontaktanfrage: ${formData.betreff}`,
        body: `
          Vorname: ${formData.vorname}
          Nachname: ${formData.nachname}
          Email: ${formData.email}
          Telefon: ${formData.telefon}
          
          Nachricht:
          ${formData.nachricht}
        `
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
            className="lg:col-span-2 bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-[#00008B] rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#00008B]">
                {t('sendMessage')}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="vorname">{t('firstName')} *</Label>
                  <Input
                    id="vorname"
                    required
                    value={formData.vorname}
                    onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="nachname">{t('lastName')} *</Label>
                  <Input
                    id="nachname"
                    required
                    value={formData.nachname}
                    onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="telefon">{t('phone')}</Label>
                  <Input
                    id="telefon"
                    value={formData.telefon}
                    onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="betreff">{t('subject')} *</Label>
                <Select
                  value={formData.betreff}
                  onValueChange={(value) => setFormData({ ...formData, betreff: value })}
                >
                  <SelectTrigger className="mt-1">
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
                <Label htmlFor="nachricht">{t('message')} *</Label>
                <Textarea
                  id="nachricht"
                  required
                  value={formData.nachricht}
                  onChange={(e) => setFormData({ ...formData, nachricht: e.target.value })}
                  className="mt-1 h-32"
                  placeholder={t('messagePlaceholder')}
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00008B] hover:bg-[#0000CD] text-white py-6 text-base"
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