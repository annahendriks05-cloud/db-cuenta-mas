import React from 'react';
import { Lock } from 'lucide-react';

export default function RiskIndicator() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Risk Indicator Header */}
        <div className="text-center mb-3">
          <span className="text-xs font-semibold tracking-wider text-[#001e50] uppercase">
            Indicador de Riesgo
          </span>
        </div>
        
        {/* Risk Scale */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 border border-[#001e50] rounded-sm p-4">
          <div className="flex flex-col items-center">
            <span className="text-4xl font-light text-[#001e50]">1/6</span>
            <p className="text-xs text-gray-600 text-center max-w-md mt-1">
              Este número es indicativo del riesgo del producto, siendo 1/6 indicativo del menor riesgo y 6/6 del mayor riesgo.
            </p>
          </div>
          
          <div className="hidden md:block w-px h-16 bg-gray-300"></div>
          
          <p className="text-xs text-gray-600 text-center md:text-left max-w-md">
            Deutsche Bank se encuentra adherido al Fondo de Garantía de Depósitos de Entidades de Crédito de España. 
            <span className="text-[#001e50] font-medium"> El importe garantizado tiene como límite 100.000 € por depositante.</span>
          </p>
        </div>
        
        {/* Lock Notice */}
        <div className="flex items-center justify-center gap-2 mt-3 text-xs text-gray-600">
          <Lock className="w-4 h-4" />
          <p>El reembolso, rescate o la devolución anticipada de una parte o de todo el principal invertido están sujetos a comisiones o penalizaciones.</p>
        </div>
      </div>
    </div>
  );
}