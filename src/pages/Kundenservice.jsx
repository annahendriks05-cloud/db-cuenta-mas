import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Phone, Mail, MessageCircle, FileText, HelpCircle, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Navigation from '@/components/landing/Navigation';
import Footer from '@/components/landing/Footer';
import ChatDialog from '@/components/landing/ChatDialog';
import { useTranslation } from '@/components/landing/useTranslation';

function Kundenservice() {
  const { t } = useTranslation();
  const [chatOpen, setChatOpen] = useState(false);
  const faqItems = [
    {
      question: 'Wie eröffne ich ein Konto bei Deutsche Bank?',
      answer: 'Sie können ein Konto online über unsere Website eröffnen oder einen Termin in einer unserer Filialen vereinbaren. Für die Online-Eröffnung benötigen Sie einen gültigen Ausweis und etwa 10 Minuten Zeit.'
    },
    {
      question: 'Was ist Digital Festgeld mit EURAU/EURC?',
      answer: 'Digital Festgeld ist eine innovative Anlageform, bei der Ihr Geld in sichere digitale Währungen (EURAU/EURC) umgewandelt wird. Sie profitieren von attraktiven Zinsen bis zu 6% p.a. plus 2% Cashback-Bonus bei Einzahlung.'
    },
    {
      question: 'Wie sicher ist mein Geld bei Deutsche Bank?',
      answer: 'Ihre Einlagen sind bis zu 100.000€ durch den Einlagensicherungsfonds vollständig geschützt. Deutsche Bank garantiert maximale Sicherheit durch bewährte Bankenstandards und moderne Technologie.'
    },
    {
      question: 'Wie kann ich meine Karte sperren?',
      answer: 'Rufen Sie unsere 24/7 Sperr-Hotline unter +49 116 116 an oder sperren Sie Ihre Karte direkt in der Deutsche Bank App. Die Sperrung ist kostenlos und erfolgt sofort.'
    },
    {
      question: 'Welche Gebühren fallen für ein Girokonto an?',
      answer: 'Unser digitales Girokonto ist komplett kostenlos. Es fallen keine Kontoführungsgebühren an. Für Premium-Services und bestimmte Transaktionen können Gebühren anfallen. Details finden Sie in unserem Preis- und Leistungsverzeichnis.'
    },
    {
      question: 'Wie beantrage ich einen Kredit?',
      answer: 'Sie können einen Kreditantrag online stellen oder einen Beratungstermin vereinbaren. Wir prüfen Ihren Antrag in der Regel innerhalb von 24 Stunden und informieren Sie über die Konditionen.'
    },
    {
      question: 'Kann ich mein Limit erhöhen?',
      answer: 'Ja, Limiterhöhungen können Sie über die App, telefonisch oder in der Filiale beantragen. Die Bearbeitung erfolgt in der Regel innerhalb von 1-3 Werktagen.'
    },
    {
      question: 'Wie funktioniert Online-Banking?',
      answer: 'Nach der Kontoeröffnung erhalten Sie Ihre Zugangsdaten. Mit diesen können Sie sich in der App oder auf unserer Website anmelden. Für zusätzliche Sicherheit nutzen wir Zwei-Faktor-Authentifizierung.'
    }
  ];

  const serviceOptions = [
    {
      icon: Phone,
      title: t('phoneHotline'),
      description: t('available247'),
      detail: '+49 30 544 480 512',
      action: t('callNow')
    },
    {
      icon: Mail,
      title: t('emailSupport'),
      description: t('response24h'),
      detail: 'info@deutschebank.de',
      action: t('sendEmail')
    },
    {
      icon: MessageCircle,
      title: t('liveChat'),
      description: 'Mo-Fr 8:00-20:00 Uhr',
      detail: t('chatWithAdvisor'),
      action: t('startChat')
    },
    {
      icon: FileText,
      title: t('documents'),
      description: t('allDocuments'),
      detail: t('downloadCenter'),
      action: t('toDocuments')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <div className="bg-gradient-to-br from-[#00008B] via-[#0000CD] to-[#00008B] text-white py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              {t('customerServiceTitle')}
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {t('customerServiceSubtitle')}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Options */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#00008B] mb-4">{t('contactTitle')}</h2>
          <p className="text-gray-600 text-lg">{t('quickHelp')}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {serviceOptions.map((option, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white border-2 border-gray-100 rounded-xl p-8 hover:shadow-xl hover:border-[#00008B] transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-[#00008B] rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <option.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#00008B] mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{option.description}</p>
              <p className="text-sm font-semibold text-gray-900 mb-6">{option.detail}</p>
              <Button 
                onClick={() => {
                  if (idx === 2) setChatOpen(true);
                }}
                className="w-full bg-[#00008B] hover:bg-[#0000CD] text-white"
              >
                {option.action}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Branch Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 border border-gray-200 rounded-xl p-12 mb-20"
        >
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-[#00008B] mb-6">{t('headquarters')}</h3>
              <div className="space-y-4 text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="font-semibold min-w-[80px] text-[#00008B]">Adresse:</span>
                  <span>Unter den Linden 13-15, 10117 Berlin, Deutschland</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="font-semibold min-w-[80px] text-[#00008B]">Telefon:</span>
                  <span>+49 30 544 480 512</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="font-semibold min-w-[80px] text-[#00008B]">Email:</span>
                  <span>info@deutschebank.de</span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-bold text-[#00008B] mb-6">{t('openingTitle')}</h4>
              <div className="space-y-3 text-gray-700">
                <p className="flex justify-between">
                  <span className="font-medium">{t('mondayFriday')}:</span>
                  <span>9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">{t('saturday')}:</span>
                  <span>10:00 - 14:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">{t('sunday')}:</span>
                  <span className="text-red-600 font-semibold">{t('closed')}</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Emergency Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-red-50 border border-red-200 rounded-xl p-6 mb-16"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-red-900 mb-2">
                {t('emergencyHotline')}
              </h3>
              <p className="text-red-800 mb-4">
                {t('cardLostStolen')}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  {t('blockCard')}: +49 30 544 480 512
                </Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  {t('blockOnline')}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-20"
         >
           <div className="text-center mb-12">
             <h2 className="text-4xl font-bold text-[#00008B] mb-4">
               {t('faq')}
             </h2>
             <p className="text-gray-600 text-lg">
               {t('findAnswers')}
             </p>
           </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-white border border-gray-200 rounded-lg px-6 hover:border-[#00008B]/30 transition-colors"
              >
                <AccordionTrigger className="text-[#00008B] font-semibold hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact CTA */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="bg-gradient-to-br from-[#00008B] via-[#0000CD] to-[#00008B] text-white rounded-2xl p-16 text-center"
         >
           <h2 className="text-4xl font-bold mb-4">
             {t('stillQuestions')}
           </h2>
           <p className="text-white/90 mb-10 max-w-2xl mx-auto text-lg">
             {t('contactTeam')}
           </p>
           <div className="flex flex-wrap gap-4 justify-center">
             <Link to={createPageUrl('Kontakt')} onClick={() => window.scrollTo(0, 0)}>
               <Button className="bg-[#ffd000] hover:bg-[#ffdb33] text-[#00008B] px-8 font-semibold">
                 {t('contactForm')}
               </Button>
             </Link>
             <Link to={createPageUrl('Filialen')} onClick={() => window.scrollTo(0, 0)}>
               <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 font-semibold">
                 {t('findBranch')}
               </Button>
             </Link>
           </div>
         </motion.div>
        </div>

      <ChatDialog open={chatOpen} onOpenChange={setChatOpen} />

      <Footer />
    </div>
  );
}

export default Kundenservice;