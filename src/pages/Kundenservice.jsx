import React from 'react';
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

export default function Kundenservice() {
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
      title: 'Telefon-Hotline',
      description: '24/7 für Notfälle erreichbar',
      detail: '+49 69 910-00',
      action: 'Jetzt anrufen'
    },
    {
      icon: Mail,
      title: 'E-Mail Support',
      description: 'Antwort innerhalb von 24 Stunden',
      detail: 'service@deutschebank.de',
      action: 'E-Mail senden'
    },
    {
      icon: MessageCircle,
      title: 'Live-Chat',
      description: 'Mo-Fr 8:00-20:00 Uhr',
      detail: 'Chat mit Kundenberater',
      action: 'Chat starten'
    },
    {
      icon: FileText,
      title: 'Dokumente & Formulare',
      description: 'Alle wichtigen Unterlagen',
      detail: 'Download-Center',
      action: 'Zu den Dokumenten'
    }
  ];

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
              Kundenservice
            </h1>
            <p className="text-xl text-gray-600">
              Wir sind für Sie da - per Telefon, E-Mail, Chat oder in unseren Filialen
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Options */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceOptions.map((option, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all text-center"
            >
              <div className="w-16 h-16 bg-[#00008B] rounded-full flex items-center justify-center mx-auto mb-4">
                <option.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-[#00008B] mb-2">
                {option.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{option.description}</p>
              <p className="text-sm font-medium text-gray-800 mb-4">{option.detail}</p>
              <Button className="w-full bg-[#00008B] hover:bg-[#0000CD] text-white">
                {option.action}
              </Button>
            </motion.div>
          ))}
        </div>

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
                Notfall-Hotline
              </h3>
              <p className="text-red-800 mb-4">
                Karte verloren oder gestohlen? Verdächtige Aktivitäten auf Ihrem Konto?
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Karte sperren: +49 116 116
                </Button>
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                  Online sperren
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
          className="mb-16"
        >
          <div className="text-center mb-12">
            <HelpCircle className="w-16 h-16 text-[#00008B] mx-auto mb-4" />
            <h2 className="text-3xl font-light text-[#00008B] mb-4">
              Häufig gestellte Fragen
            </h2>
            <p className="text-gray-600">
              Finden Sie schnelle Antworten auf die häufigsten Fragen
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="bg-gray-50 rounded-lg px-6 border border-gray-200"
              >
                <AccordionTrigger className="text-[#00008B] font-semibold hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
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
          className="bg-gradient-to-br from-[#00008B] to-[#0000CD] text-white rounded-xl p-12 text-center"
        >
          <h2 className="text-3xl font-light mb-4">
            Haben Sie noch Fragen?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Unser Kundenservice-Team ist gerne für Sie da. Kontaktieren Sie uns per Telefon, 
            E-Mail oder vereinbaren Sie einen persönlichen Beratungstermin.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to={createPageUrl('Kontakt')}>
              <Button className="bg-[#ffd000] hover:bg-[#ffdb33] text-[#00008B] px-8">
                Kontaktformular
              </Button>
            </Link>
            <Link to={createPageUrl('Filialen')}>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                Filiale finden
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}