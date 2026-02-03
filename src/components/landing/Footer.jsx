import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useTranslation } from './useTranslation';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-[#00008B] text-white">
      {/* Footnotes */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="space-y-4 text-xs text-white/60">
            <p>
              <sup>1</sup> Aktion gültig für Gehaltsüberweisungen von mindestens 2.000 € pro Monat. 
              Vollständige Bedingungen auf der Website einsehen.
            </p>
            <p>
              <sup>2</sup> Effektiver Jahreszins von 4% bis 6% anwendbar auf Guthaben zwischen 10.000 € und 150.000 €. 
              4% ab 25.000€, 5% ab 50.000€, 6% ab 100.000€.
            </p>
            <p>
              <sup>3</sup> Aktionen gültig bis 02.03.2026. 
              Vorbehaltlich der allgemeinen Geschäftsbedingungen. Vollständige rechtliche Grundlagen einsehen.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-10 h-10" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="10" width="100" height="100" fill="#00008B" stroke="white" strokeWidth="8"/>
            <rect x="20" y="20" width="80" height="80" fill="white"/>
            <polygon points="40,40 80,40 80,80" fill="#0000CD"/>
          </svg>
          <div>
            <p className="font-semibold text-lg">Deutsche Bank</p>
          </div>
        </div>
        <p className="text-sm text-white/70 max-w-2xl mb-8">
          {t('footerDescription')}
        </p>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Deutsche Bank AG. {t('allRightsReserved')}.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
            <Link 
              to={createPageUrl('DigitalFestgeld')}
              onClick={() => window.scrollTo(0, 0)}
              className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              {t('digitalFestgeld')}
            </Link>
            <Link 
              to={createPageUrl('Kontakt')}
              onClick={() => window.scrollTo(0, 0)}
              className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              {t('kontakt')}
            </Link>
            <Link 
              to={createPageUrl('Filialen')}
              onClick={() => window.scrollTo(0, 0)}
              className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              {t('filialen')}
            </Link>
            <Link 
              to={createPageUrl('Kundenservice')}
              onClick={() => window.scrollTo(0, 0)}
              className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              {t('kundenservice')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}