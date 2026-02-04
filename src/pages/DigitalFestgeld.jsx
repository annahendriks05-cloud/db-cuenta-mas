import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/landing/Navigation';
import { useTranslation } from '@/components/landing/useTranslation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';
import {
  ShieldCheck,
  TrendingUp,
  Lock,
  Wallet,
  Clock,
  CheckCircle2,
  Gift,
  Loader2
} from 'lucide-react';

export default function DigitalFestgeld() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    rufnummer: '',
    waehrung: '',
    anlagebetrag: null
  });
  const [autorizo, setAutorizo] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!autorizo) {
      toast.error('Bitte akzeptieren Sie die Datenschutzrichtlinie');
      return;
    }

    setLoading(true);
    
    try {
      await base44.entities.Anlage.create(formData);
      toast.success('Vielen Dank! Wir werden Sie innerhalb von 24 Stunden kontaktieren.');
      setFormData({
        vorname: '',
        nachname: '',
        email: '',
        rufnummer: '',
        waehrung: '',
        anlagebetrag: null
      });
      setAutorizo(false);
    } catch (error) {
      toast.error('Fehler beim Senden des Formulars');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#00008B] text-white py-4">
        <div className="max-w-7xl mx-auto px-4">
          <Link to={createPageUrl('Home')} className="hover:opacity-80 transition-opacity inline-flex">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697cf26cc2a02d112fd30c1c/df2e47d7b_image.png"
              alt="Deutsche Bank Logo"
              className="h-12"
            />
          </Link>
        </div>
      </div>
      <Navigation />
      
      {/* Risk Indicator */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 border-b border-green-200">
        <div className="max-w-7xl mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-[#00008B] mb-2">1/6</div>
              <p className="text-xs md:text-sm font-semibold text-gray-800">Geringstes Produktrisiko - Höchste Sicherheit</p>
            </div>
            <div className="hidden md:block w-px h-20 bg-gray-300"></div>
            <div className="text-xs md:text-sm text-gray-700 max-w-lg text-center md:text-left px-4 md:px-0">
              <p><strong>Deutsche Bank ist Mitglied des Einlagensicherungsfonds.</strong></p>
              <p>Der garantierte Betrag beträgt bis zu 100.000 € pro Einleger.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#00008B] to-[#0000CD] text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 md:px-4 py-1.5 md:py-2 mb-4 md:mb-6">
              <p className="text-xs md:text-sm font-semibold">{t('digitalFestgeldPionier')}</p>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-4 md:mb-6 px-4">
              {t('revolutionaerDigitalFestgeld')}
            </h1>
            
            <p className="text-base md:text-xl text-white/90 mb-8 md:mb-12 px-4">
              {t('digitalFestgeldDesc')}
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12 px-2">
              {[
                { label: t('einlagensicherung'), value: t('bisZu100k'), icon: ShieldCheck },
                { label: t('attraktiveZinsen'), value: t('zinsen4bis6'), icon: TrendingUp },
                { label: t('cashback2'), value: t('sofortNachEinzahlung'), icon: Gift },
                { label: t('maximaleSicherheit'), value: t('dezentraleLoesung'), icon: Lock }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 md:p-4"
                >
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#ffd000] mb-2 mx-auto" />
                  <p className="text-[10px] md:text-xs text-white/70 mb-1">{item.label}</p>
                  <p className="text-xs md:text-sm font-semibold">{item.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interest Rates Table */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#00008B] text-center mb-8 md:mb-12 px-4">
            EURAU & EURC Festgeld Digital - Attraktive Zinsen
          </h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-x-auto mb-8">
            <table className="w-full min-w-[500px]">
              <thead className="bg-[#00008B] text-white">
                <tr>
                  <th className="py-3 md:py-4 px-3 md:px-6 text-left text-xs md:text-base">Anlagesumme</th>
                  <th className="py-3 md:py-4 px-3 md:px-6 text-left text-xs md:text-base">Laufzeit</th>
                  <th className="py-3 md:py-4 px-3 md:px-6 text-left text-xs md:text-base">Zinssatz p.a.</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-base">10.000€ - 25.000€</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-xs md:text-base">12 Monate</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-[#00008B] font-bold text-base md:text-lg">4.00%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-base">50.000€ - 75.000€</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-xs md:text-base">12 Monate</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-[#00008B] font-bold text-base md:text-lg">5.00%</td>
                </tr>
                <tr>
                  <td className="py-3 md:py-4 px-3 md:px-6 font-semibold text-xs md:text-base">100.000€ - 200.000€</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-xs md:text-base">12 Monate</td>
                  <td className="py-3 md:py-4 px-3 md:px-6 text-[#00008B] font-bold text-base md:text-lg">6.00%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#ffd000] rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-[#00008B] mb-2">
              Cashback Einzahlungsbonus: 2% sofort nach Einzahlung
            </h3>
            <p className="text-sm text-gray-700">
              Im Rahmen unserer Digital Festgeld Einführung - Deutsche Bank als Vorreiter
            </p>
          </div>
        </div>
      </div>

      {/* Cashback Examples */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            {[
              { amount: '25.000€', bonus: '500€' },
              { amount: '50.000€', bonus: '1.000€' },
              { amount: '100.000€', bonus: '2.000€' },
              { amount: '200.000€', bonus: '4.000€' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#00008B] to-[#0000CD] text-white rounded-xl p-4 md:p-6 text-center"
              >
                <p className="text-xs md:text-sm text-white/70 mb-2">Anlage</p>
                <p className="text-2xl md:text-3xl font-light mb-3 md:mb-4">{item.amount}</p>
                <div className="border-t border-white/20 pt-3 md:pt-4">
                  <p className="text-[10px] md:text-xs text-[#ffd000] mb-1">Sofortbonus</p>
                  <p className="text-xl md:text-2xl font-semibold text-[#ffd000]">{item.bonus}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <p className="text-center text-gray-600">
            + Ihre Zinserträge von 4% bis 6% p.a. zusätzlich
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#00008B] text-center mb-3 md:mb-4 px-4">
            Ihre Vorteile auf einen Blick
          </h2>
          <p className="text-center text-sm md:text-base text-gray-600 mb-8 md:mb-12 px-4">
            Deutsche Bank revolutioniert das Festgeld mit digitaler Innovation und maximaler Sicherheit
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Einlagensicherung bis 100.000€',
                desc: 'Ihre Einlagen sind durch den Einlagensicherungsfonds vollständig geschützt. Deutsche Bank garantiert maximale Sicherheit.'
              },
              {
                icon: TrendingUp,
                title: 'Bis zu 6% Zinsen p.a.',
                desc: '4% bei 10k-25k, 5% bei 50k-75k, 6% bei 100k-200k. Deutlich höher als klassisches Festgeld.'
              },
              {
                icon: Gift,
                title: '2% Cashback Einzahlungsbonus',
                desc: 'Sofort nach Einzahlung erhalten Sie 2% Ihrer Anlagesumme als Bonus. Bei 100.000€ sind das 2.000€ extra!'
              },
              {
                icon: Lock,
                title: 'Dezentrale Tresor-Lösung',
                desc: 'Ihr digitales Geld wird wie in einem Tresor gesichert. Höchste Sicherheitsstandards durch innovative Blockchain-Technologie.'
              },
              {
                icon: Wallet,
                title: 'Gratis IBAN mit EURAU/EURC',
                desc: 'Erhalten Sie eine kostenlose digitale IBAN. Empfangen und senden Sie Zahlungen - sicherer als klassisches Online-Banking.'
              },
              {
                icon: Clock,
                title: 'Sofortige Kontoeröffnung',
                desc: 'Keine Wartezeiten. Füllen Sie das Formular aus und ein Berater kontaktiert Sie innerhalb von 24 Stunden unverbindlich.'
              },
              {
                icon: CheckCircle2,
                title: '100% auf Ihren Namen',
                desc: 'Volle Kontrolle über Ihr Geld. Nur Sie haben Zugriff auf Ihr Digital Festgeld Konto bei Deutsche Bank.'
              },
              {
                icon: CheckCircle2,
                title: 'Komplett kostenlos',
                desc: 'Keine Kontoführungsgebühren, keine versteckten Kosten. Profitieren Sie von allen Vorteilen ohne Zusatzkosten.'
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-lg p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-[#00008B] mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-[#00008B] mb-2">{benefit.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#00008B] text-center mb-3 md:mb-4 px-4">
            So einfach funktioniert's
          </h2>
          <p className="text-center text-sm md:text-base text-gray-600 mb-8 md:mb-12 px-4">
            In nur 4 Schritten zu Ihrem hochverzinsten Digital Festgeld bei Deutsche Bank
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: '1',
                title: 'Formular ausfüllen',
                desc: 'Geben Sie Ihre Daten und gewünschte Anlagesumme an. Komplett unverbindlich und kostenlos.'
              },
              {
                step: '2',
                title: 'Beratungsgespräch',
                desc: 'Ein Berater der Deutschen Bank kontaktiert Sie innerhalb von 24 Stunden für eine persönliche Beratung.'
              },
              {
                step: '3',
                title: 'Konto eröffnen',
                desc: 'Nach Ihrer Zustimmung wird Ihr Digital Festgeld Konto bei Deutsche Bank eröffnet. Sie erhalten Ihre digitale IBAN.'
              },
              {
                step: '4',
                title: 'Einzahlung & Bonus',
                desc: 'Zahlen Sie Ihre Anlagesumme ein. Ihr Geld wird in sicheres EURAU/EURC umgewandelt. Sie erhalten sofort 2% Cashback-Bonus!'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#00008B] text-white rounded-full flex items-center justify-center text-xl md:text-2xl font-light mb-3 md:mb-4 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-base md:text-lg font-semibold text-[#00008B] mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-12 text-center">
            <h3 className="text-xl font-semibold text-[#00008B] mb-2">100% Unverbindlich & Kostenlos</h3>
            <p className="text-sm text-gray-700">
              Die Kontoeröffnung ist komplett kostenlos und unverbindlich. Keine versteckten Gebühren. 
              Sie entscheiden erst nach dem Beratungsgespräch, ob Sie das Digital Festgeld nutzen möchten.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="bg-gradient-to-br from-[#00008B] to-[#0000CD] py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-[#00008B] text-center mb-2">
              Jetzt Digital Festgeld Konto eröffnen
            </h2>
            <p className="text-center text-sm md:text-base text-gray-600 mb-6">Deutsche Bank • Kostenlos & Unverbindlich</p>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700 text-center">
                <strong>Unverbindliches Beratungsgespräch</strong><br />
                Ein Berater kontaktiert Sie innerhalb von 24 Stunden. Kostenlos und ohne Verpflichtung.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="vorname">Vorname <span className="text-red-500">*</span></Label>
                  <Input
                    id="vorname"
                    required
                    value={formData.vorname}
                    onChange={(e) => setFormData({ ...formData, vorname: e.target.value })}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="nachname">Nachname <span className="text-red-500">*</span></Label>
                  <Input
                    id="nachname"
                    required
                    value={formData.nachname}
                    onChange={(e) => setFormData({ ...formData, nachname: e.target.value })}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="rufnummer">Rufnummer <span className="text-red-500">*</span></Label>
                <div className="flex gap-2 mt-1">
                  <Select defaultValue="de">
                    <SelectTrigger className="w-24">
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
                    id="rufnummer"
                    required
                    value={formData.rufnummer}
                    onChange={(e) => setFormData({ ...formData, rufnummer: e.target.value })}
                    className="flex-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">E-Mail <span className="text-red-500">*</span></Label>
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
                <Label htmlFor="waehrung">Währung <span className="text-red-500">*</span></Label>
                <Select
                  value={formData.waehrung}
                  onValueChange={(value) => setFormData({ ...formData, waehrung: value })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Bitte wählen..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="EURC">EURC</SelectItem>
                    <SelectItem value="EURAU">EURAU</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="anlagebetrag">Anlagesumme <span className="text-red-500">*</span></Label>
                <Select
                  value={formData.anlagebetrag?.toString()}
                  onValueChange={(value) => setFormData({ ...formData, anlagebetrag: parseFloat(value) })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Bitte wählen Sie Ihre gewünschte Anlagesumme..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="10000">10.000€ - 25.000€ • 4% p.a. + 500€ Bonus</SelectItem>
                    <SelectItem value="50000">50.000€ - 75.000€ • 5% p.a. + 1.000€ Bonus</SelectItem>
                    <SelectItem value="100000">100.000€ - 200.000€ • 6% p.a. + 2.000€ Bonus</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-3 pt-2">
                <Checkbox
                  id="autorizo"
                  checked={autorizo}
                  onCheckedChange={setAutorizo}
                  className="mt-1"
                />
                <Label htmlFor="autorizo" className="text-xs text-gray-600 leading-relaxed">
                  Ich autorisiere die Erhebung und Verarbeitung meiner Daten zur Kontoeröffnung und Kontaktaufnahme 
                  durch Deutsche Bank gemäß Datenschutzrichtlinie. Das Angebot ist unverbindlich und kostenlos.
                </Label>
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#00008B] hover:bg-[#0000CD] text-white py-3 md:py-4 text-sm md:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 md:w-5 md:h-5 mr-2 animate-spin" />
                    Wird gesendet...
                  </>
                ) : (
                  'JETZT UNVERBINDLICH BERATEN LASSEN'
                )}
              </Button>

              <div className="flex justify-center gap-6 pt-2">
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> 100% Kostenlos
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Unverbindlich
                </span>
                <span className="text-xs text-gray-500 flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-green-600" /> Sicher
                </span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Security Section */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#00008B] text-center mb-3 md:mb-4 px-4">
            Maximale Sicherheit garantiert
          </h2>
          <p className="text-center text-sm md:text-base text-gray-600 mb-8 md:mb-12 px-4">
            Deutsche Bank kombiniert bewährte Bankensicherheit mit innovativer Blockchain-Technologie
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Deutsche Bank Garantie',
                desc: 'Alle EURAU/EURC Einlagen werden von der Deutschen Bank vollständig gesichert und garantiert.'
              },
              {
                icon: ShieldCheck,
                title: 'Einlagensicherung bis 100.000€',
                desc: 'Mitglied des Einlagensicherungsfonds. Jeder Einleger ist bis zu 100.000€ vollständig geschützt.'
              },
              {
                icon: Lock,
                title: 'Dezentrale Tresor-Technologie',
                desc: 'Ihr digitales Geld wird wie in einem hochsicheren Tresor verwahrt. Höchste Sicherheitsstandards.'
              },
              {
                icon: ShieldCheck,
                title: 'Betrugsschutz auf höchstem Niveau',
                desc: 'Modernste Sicherheitstechnologie schützt jede Transaktion vor unbefugtem Zugriff.'
              },
              {
                icon: CheckCircle2,
                title: '100% auf Ihren Namen',
                desc: 'Nur Sie haben Zugriff auf Ihr Konto. Vollständige Kontrolle über Ihr digitales Festgeld.'
              },
              {
                icon: CheckCircle2,
                title: 'Reguliert & Lizenziert',
                desc: 'Deutsche Bank ist vollständig reguliert und lizenziert. Ihre Sicherheit ist unsere Priorität.'
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white rounded-lg p-4 md:p-6 shadow-sm"
              >
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-green-600 mb-3 md:mb-4" />
                <h3 className="text-base md:text-lg font-semibold text-[#00008B] mb-2">{item.title}</h3>
                <p className="text-xs md:text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="bg-[#ffd000] rounded-lg p-6 text-center mt-12">
            <p className="text-[#00008B] font-semibold">
              🏆 Deutsche Bank - Ihr vertrauenswürdiger Partner seit Jahrzehnten. 
              Jetzt Vorreiter im Digital Festgeld mit revolutionärer EURAU/EURC Technologie.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-light text-[#00008B] text-center mb-3 md:mb-4 px-4">
            Häufig gestellte Fragen
          </h2>
          <p className="text-center text-sm md:text-base text-gray-600 mb-8 md:mb-12 px-4">
            Alle wichtigen Informationen zum Digital Festgeld bei Deutsche Bank
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-[#00008B] font-semibold hover:no-underline">
                Was ist Digital Festgeld bei Deutsche Bank?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Digital Festgeld ist eine innovative Anlageform, bei der Ihr Geld in hochsichere digitale Währungen 
                (EURAU/EURC) umgewandelt wird. Sie profitieren von attraktiven Zinsen bis zu 6% p.a. plus 2% Cashback-Bonus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-[#00008B] font-semibold hover:no-underline">
                Wie sicher ist mein Geld?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Ihre Einlagen sind bis zu 100.000€ durch den Einlagensicherungsfonds vollständig geschützt. 
                Deutsche Bank garantiert die Sicherheit durch bewährte Bankenstandards kombiniert mit moderner Blockchain-Technologie.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-[#00008B] font-semibold hover:no-underline">
                Was ist EURAU/EURC?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                EURAU und EURC sind digitale Stablecoins im Verhältnis 1:1 zum Euro. Jeder EURAU/EURC entspricht 
                exakt 1€ und ist vollständig durch Deutsche Bank abgesichert.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-[#00008B] font-semibold hover:no-underline">
                Wie funktioniert der 2% Cashback-Bonus?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Sofort nach Ihrer Einzahlung erhalten Sie 2% Ihrer Anlagesumme als Bonus gutgeschrieben. 
                Bei 100.000€ Anlage sind das 2.000€ extra - zusätzlich zu den Zinserträgen!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-[#00008B] font-semibold hover:no-underline">
                Welche Zinsen erhalte ich?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Die Zinsen sind gestaffelt: 4% p.a. bei 10k-25k, 5% p.a. bei 50k-75k und 6% p.a. bei 100k-200k Anlagesumme. 
                Deutlich attraktiver als klassisches Festgeld.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-[#00008B] font-semibold hover:no-underline">
                Kann ich Zahlungen empfangen und tätigen?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Ja! Sie erhalten eine kostenlose digitale IBAN und können Zahlungen empfangen und tätigen - 
                mit höherer Sicherheit als beim klassischen Online-Banking.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-[#00008B] font-semibold hover:no-underline">
                Gibt es versteckte Kosten?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Nein, die Kontoeröffnung und Kontoführung sind komplett kostenlos. Keine Gebühren, keine versteckten Kosten.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-[#00008B] font-semibold hover:no-underline">
                Wie schnell kann ich mein Konto eröffnen?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Füllen Sie einfach das Formular aus. Ein Berater kontaktiert Sie innerhalb von 24 Stunden. 
                Nach Ihrer Zustimmung erfolgt die Kontoeröffnung schnell und unkompliziert.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-[#00008B] font-semibold hover:no-underline">
                Ist das Angebot wirklich unverbindlich?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Ja, absolut! Das Beratungsgespräch ist kostenlos und unverbindlich. 
                Sie entscheiden erst nach dem Gespräch, ob Sie das Digital Festgeld nutzen möchten.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-gray-50 rounded-lg px-6">
              <AccordionTrigger className="text-[#00008B] font-semibold hover:no-underline">
                Warum ist Deutsche Bank Vorreiter?
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                Deutsche Bank kombiniert jahrzehntelange Bankerfahrung mit modernster Blockchain-Technologie. 
                Wir sind die erste große Bank, die digitales Festgeld mit EURAU/EURC anbietet.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-br from-[#00008B] to-[#0000CD] py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-4xl font-light text-white mb-3 md:mb-4 px-4">
              Bereit für Digital Festgeld der Zukunft?
            </h2>
            <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 px-4">
              Profitieren Sie von bis zu 6% Zinsen + 2% Cashback-Bonus. Starten Sie jetzt mit Deutsche Bank!
            </p>
            <Button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              className="bg-[#ffd000] hover:bg-[#ffdb33] text-[#00008B] px-8 md:px-12 py-5 md:py-6 text-base md:text-lg font-semibold"
            >
              JETZT KONTO ERÖFFNEN
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#00008B] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-white/70 mb-2">
            © 2026 Deutsche Bank AG. Alle Rechte vorbehalten. Digital Festgeld mit EURAU/EURC.
          </p>
          <p className="text-xs text-white/50">
            Einlagensicherung bis 100.000€ pro Kunde. Risikoindikator 1/6. Unverbindliches Angebot.
          </p>
        </div>
      </div>
    </div>
  );
}