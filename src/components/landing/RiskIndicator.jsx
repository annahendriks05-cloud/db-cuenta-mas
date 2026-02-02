import React from 'react';
import { Lock, Shield, ShieldCheck } from 'lucide-react';

export default function RiskIndicator() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Risk Indicator Header */}
        <div className="text-center mb-4">
          <span className="text-xs font-semibold tracking-wider text-[#00008B] uppercase">
            Risikoindikator
          </span>
        </div>
        
        {/* Risk Scale */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 border border-[#00008B] rounded-sm p-4 mb-6">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-light text-[#00008B]">1/6</span>
            <p className="text-xs text-gray-600 text-center max-w-md mt-1">
              Diese Zahl ist ein Indikator für das Produktrisiko, wobei 1/6 das geringste Risiko und 6/6 das höchste Risiko anzeigt.
            </p>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-gray-300"></div>
          
          <p className="text-xs text-gray-600 text-center md:text-left max-w-md">
            Deutsche Bank ist Mitglied des Einlagensicherungsfonds für Kreditinstitute. 
            <span className="text-[#00008B] font-medium"> Der garantierte Betrag beträgt bis zu 100.000 € pro Einleger.</span>
          </p>
        </div>

        {/* Security & Fraud Protection Section */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border border-green-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-green-600 rounded-full p-2">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#00008B]">
              Sicherheit & Betrugsschutzgarantien
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">100% Betrugsschutz</p>
                <p className="text-gray-600">
                  Sie sind vollständig gegen betrügerische Transaktionen geschützt. Bei Missbrauch erstatten wir Ihnen den vollständigen Betrag zurück.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Echtzeit-Überwachung</p>
                <p className="text-gray-600">
                  Unsere KI-gestützten Systeme überwachen alle Transaktionen rund um die Uhr auf verdächtige Aktivitäten.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sichere Verschlüsselung</p>
                <p className="text-gray-600">
                  Alle Daten werden mit modernster 256-Bit-SSL-Verschlüsselung geschützt und entsprechen den höchsten Sicherheitsstandards.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900 mb-1">Sofortbenachrichtigungen</p>
                <p className="text-gray-600">
                  Sie erhalten Echtzeit-Benachrichtigungen bei jeder Kontobewegung, um verdächtige Aktivitäten sofort zu erkennen.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Lock Notice */}
        <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-600">
          <Lock className="w-4 h-4" />
          <p>Die Rückzahlung, Rücknahme oder vorzeitige Rückgabe eines Teils oder des gesamten investierten Kapitals unterliegt Gebühren oder Strafen.</p>
        </div>
      </div>
    </div>
  );
}