import React from 'react';
import { Lock } from 'lucide-react';

export default function RiskIndicator() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Risk Indicator Header */}
        <div className="text-center mb-3">
          <span className="text-xs font-semibold tracking-wider text-[#00008B] uppercase">
            Risikoindikator
          </span>
        </div>
        
        {/* Risk Scale */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 border border-[#00008B] rounded-sm p-4">
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
        
        {/* Lock Notice */}
        <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-600">
          <Lock className="w-4 h-4" />
          <p>Die Rückzahlung, Rücknahme oder vorzeitige Rückgabe eines Teils oder des gesamten investierten Kapitals unterliegt Gebühren oder Strafen.</p>
        </div>
      </div>
    </div>
  );
}