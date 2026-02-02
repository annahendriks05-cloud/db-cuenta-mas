import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { TrendingUp, Lock, Building2 } from 'lucide-react';
import AnlageDialog from './AnlageDialog';

export default function ProductSection() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center text-[#00008B] font-light mb-16"
        >
          Wer gibt Ihnen MEHR für Ihr Gehalt und Ihre Ersparnisse?
        </motion.h2>

        {/* EURUA/EURC Product */}
        <div className="space-y-16">
          {/* Main Product Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="bg-gradient-to-br from-[#00008B] to-[#0000CD] rounded-2xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-[#ffd000]" />
                  <span className="text-xs uppercase tracking-wider text-[#ffd000] font-semibold">
                    DIGITALES FESTGELD
                  </span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-light mb-2">
                  EURAU bis <span className="text-[#ffd000]">6%</span>
                </h3>
                <h3 className="text-4xl md:text-5xl font-light mb-6">
                  EURC bis <span className="text-[#ffd000]">6%</span>
                </h3>
                
                <div className="bg-white/10 rounded-lg p-4 mb-6 border border-white/20">
                  <p className="text-white/90 text-sm font-medium mb-2">Zinsgestaffelt:</p>
                  <div className="text-white/80 text-sm space-y-1">
                    <div>• Ab 25.000€: <span className="text-[#ffd000] font-semibold">4%</span></div>
                    <div>• Ab 50.000€: <span className="text-[#ffd000] font-semibold">5%</span></div>
                    <div>• Ab 100.000€: <span className="text-[#ffd000] font-semibold">6%</span></div>
                  </div>
                  <p className="text-white/70 text-xs mt-2">+ 2% Cashback auf alle Beträge</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ffd000]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-[#ffd000]"></div>
                    </div>
                    <p className="text-white/90">
                      <strong>Modern:</strong> Ein modernes, sicheres digitales Festgeld
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ffd000]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-[#ffd000]"></div>
                    </div>
                    <p className="text-white/90">
                      <strong>Mehr Zinsen:</strong> Attraktive Verzinsung für Ihre Einlagen
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#ffd000]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-3 h-3 rounded-full bg-[#ffd000]"></div>
                    </div>
                    <p className="text-white/90">
                      <strong>Mehr Sicherheit:</strong> Vollständig abgesichert durch Deutsche Bank
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=400&fit=crop"
                alt="Deutsche Bank Karte"
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Traditional Savings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=400&fit=crop"
                alt="Ersparnisse"
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-[#f8f9fa] to-white border border-gray-200 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00008B]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <span className="text-xs uppercase tracking-wider text-[#00008B] font-semibold">
                  MEHR RENTABILITÄT
                </span>
                
                <div className="mt-6">
                  <span className="text-5xl md:text-6xl font-light text-[#00008B]">Bis zu 6.000 €</span>
                </div>
                
                <p className="text-xl mt-4 font-medium text-[#00008B]">für Ihre Ersparnisse</p>
                
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  6% effektiver Jahreszins für Guthaben zwischen 10.000 € und 150.000 €<sup>2</sup>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            <strong className="text-[#00008B]">Nutzen Sie eine oder beide Aktionen</strong> vor dem 02.03.2026 
            unter Einhaltung der <span className="text-[#00008B] underline cursor-pointer">Bedingungen</span><sup>3</sup>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#00008B] hover:bg-[#0000CD] text-white px-8 py-6 text-base font-medium transition-all duration-300"
            >
              Mit Berater kontaktieren
            </Button>
            <Button
              variant="outline"
              onClick={() => setDialogOpen(true)}
              className="border-[#001e50] text-[#00008B] hover:bg-[#001e50] hover:text-white px-8 py-6 text-base font-medium transition-all duration-300"
            >
              Geld anlegen
            </Button>
          </div>
        </motion.div>
      </div>
      
      <AnlageDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
}