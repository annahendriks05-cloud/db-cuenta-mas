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
      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-light text-[#00008B] mb-6">
              {t('contactTitle')}
            </h1>
            <p className="text-xl text-gray-600">
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
              className="bg-gradient-to-br from-[#00008B] to-[#0000CD] text-white rounded-xl p-6"
            >
              <h2 className="text-2xl font-semibold mb-6">{t('contactInformation')}</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#ffd000] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{t('phone')}</p>
                    <p className="text-white/90">+49 69 910-00</p>
                    <p className="text-xs text-white/70 mt-1">Mo-Fr: 8:00 - 20:00 Uhr</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#ffd000] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{t('email')}</p>
                    <p className="text-white/90">kontakt@deutschebank.de</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#ffd000] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{t('headquarters')}</p>
                    <p className="text-white/90">
                      Taunusanlage 12<br />
                      60325 Frankfurt am Main<br />
                      Deutschland
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#ffd000] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">{t('openingHours')}</p>
                    <p className="text-white/90 text-sm">
                      Montag - Freitag: 8:00 - 20:00<br />
                      Samstag: 9:00 - 14:00<br />
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
              className="bg-blue-50 border border-blue-200 rounded-xl p-6"
            >
              <h3 className="text-lg font-semibold text-[#00008B] mb-3">{t('quickHelp')}</h3>
              <p className="text-sm text-gray-700 mb-4">
                {t('urgentMatters')}
              </p>
              <Button className="w-full bg-[#00008B] hover:bg-[#0000CD] text-white">
                {t('callHotline')}
              </Button>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-[#00008B] mb-6">
              {t('sendMessage')}
            </h2>

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