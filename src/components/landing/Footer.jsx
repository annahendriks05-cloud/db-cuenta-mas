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
              <sup>1</sup> Promoción válida para nóminas domiciliadas de al menos 2.000€ mensuales. 
              Consulte condiciones completas en la web.
            </p>
            <p>
              <sup>2</sup> TAE 1,50% aplicable a saldos entre 10.000€ y 150.000€. 
              Para importes superiores, consulte condiciones específicas.
            </p>
            <p>
              <sup>3</sup> Promociones válidas hasta el 02/03/2026. 
              Sujetas a términos y condiciones. Consulte las bases legales completas.
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
                <p className="text-xs text-white/60">España</p>
              </div>
            </div>
            <p className="text-sm text-white/70 max-w-sm">
              Deutsche Bank España ofrece soluciones financieras de calidad para particulares y empresas, 
              respaldado por la solidez de un banco global.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Productos</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white transition-colors cursor-pointer">Cuenta Más DB</li>
              <li className="hover:text-white transition-colors cursor-pointer">Hipotecas</li>
              <li className="hover:text-white transition-colors cursor-pointer">Inversiones</li>
              <li className="hover:text-white transition-colors cursor-pointer">Seguros</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="hover:text-white transition-colors cursor-pointer">Aviso Legal</li>
              <li className="hover:text-white transition-colors cursor-pointer">Política de Privacidad</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cookies</li>
              <li className="hover:text-white transition-colors cursor-pointer">MiFID</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            © {new Date().getFullYear()} Deutsche Bank España. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer">
              Contacto
            </span>
            <span className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer">
              Oficinas
            </span>
            <span className="text-xs text-white/50 hover:text-white transition-colors cursor-pointer">
              Atención al Cliente
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}