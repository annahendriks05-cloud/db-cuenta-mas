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
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Deutsche_Bank_logo_without_wordmark.svg/240px-Deutsche_Bank_logo_without_wordmark.svg.png" 
            alt="Deutsche Bank Logo" 
            className="w-10 h-10 bg-white p-1"
          />
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
              className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              {t('digitalFestgeld')}
            </Link>
            <Link 
              to={createPageUrl('Kontakt')}
              className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              {t('kontakt')}
            </Link>
            <Link 
              to={createPageUrl('Filialen')}
              className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              {t('filialen')}
            </Link>
            <Link 
              to={createPageUrl('Kundenservice')}
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