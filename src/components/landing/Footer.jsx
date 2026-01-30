import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#001e50] text-white">
      {/* Footnotes */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="space-y-4 text-xs text-white/60">
            <p>
              <sup>1</sup> Aktion gültig für Gehaltsüberweisungen von mindestens 2.000 € pro Monat. 
              Vollständige Bedingungen auf der Website einsehen.
            </p>
            <p>
              <sup>2</sup> Effektiver Jahreszins von 1,50% anwendbar auf Guthaben zwischen 10.000 € und 150.000 €. 
              Für höhere Beträge spezifische Bedingungen einsehen.
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#001e50]" fill="currentColor">
                  <path d="M2 4h20v2H2V4zm0 7h20v2H2v-2zm0 7h20v2H2v-2z"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Deutsche Bank</p>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-sm">
              Deutsche Bank bietet hochwertige Finanzlösungen für Privatkunden und Unternehmen, 
              unterstützt durch die Stärke einer globalen Bank.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Produkte</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white transition-colors cursor-pointer">EURUA Festgeld</li>
              <li className="hover:text-white transition-colors cursor-pointer">Hypotheken</li>
              <li className="hover:text-white transition-colors cursor-pointer">Investitionen</li>
              <li className="hover:text-white transition-colors cursor-pointer">Versicherungen</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white transition-colors cursor-pointer">Impressum</li>
              <li className="hover:text-white transition-colors cursor-pointer">Datenschutz</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cookies</li>
              <li className="hover:text-white transition-colors cursor-pointer">AGB</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Deutsche Bank AG. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer">
              Kontakt
            </span>
            <span className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer">
              Filialen
            </span>
            <span className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer">
              Kundenservice
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}