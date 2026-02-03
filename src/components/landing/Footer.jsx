import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Footer() {
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
          <div className="w-10 h-10 bg-white flex items-center justify-center p-1.5">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
              <rect x="10" y="10" width="80" height="80" fill="none" stroke="#00008B" strokeWidth="8"/>
              <path d="M20 80 L80 20" stroke="#00008B" strokeWidth="8"/>
            </svg>
          </div>
          <div>
            <p className="font-semibold text-lg">Deutsche Bank</p>
          </div>
        </div>
        <p className="text-sm text-white/70 max-w-2xl mb-8">
          Deutsche Bank bietet hochwertige Finanzlösungen für Privatkunden und Unternehmen, 
          unterstützt durch die Stärke einer globalen Bank.
        </p>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Deutsche Bank AG. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link 
              to={createPageUrl('DigitalFestgeld')}
              className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              Digital Festgeld
            </Link>
            <Link 
              to={createPageUrl('Kontakt')}
              className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              Kontakt
            </Link>
            <Link 
              to={createPageUrl('Filialen')}
              className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              Filialen
            </Link>
            <Link 
              to={createPageUrl('Kundenservice')}
              className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer"
            >
              Kundenservice
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}