import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function BenefitsSection() {
  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-center text-[#001e50] font-light mb-16"
        >
          ¿Quién le da MÁS por su nómina y sus ahorros?
        </motion.h2>

        {/* Benefits Grid */}
        <div className="space-y-16">
          {/* Benefit 1 - Nómina */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#001e50] to-[#003087] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                
                <span className="text-xs uppercase tracking-wider text-[#ffd000] font-semibold">
                  MÁS REMUNERACIÓN
                </span>
                
                <div className="mt-6">
                  <span className="text-6xl md:text-7xl font-light text-[#ffd000]">500 €</span>
                </div>
                
                <p className="text-xl mt-4 font-medium">por traer su nómina</p>
                
                <p className="text-white/70 mt-4 text-sm leading-relaxed">
                  Domiciliando una nómina<sup>1</sup> a partir de 2.000 €/mes.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=400&fit=crop"
                alt="Tarjeta de débito"
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Benefit 2 - Ahorros */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=400&fit=crop"
                alt="Ahorros"
                className="rounded-2xl shadow-lg max-w-full h-auto"
              />
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-[#f8f9fa] to-white border border-gray-200 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#001e50]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <span className="text-xs uppercase tracking-wider text-[#001e50] font-semibold">
                  MÁS RENTABILIDAD
                </span>
                
                <div className="mt-6">
                  <span className="text-5xl md:text-6xl font-light text-[#001e50]">Hasta 2.240 €</span>
                </div>
                
                <p className="text-xl mt-4 font-medium text-[#001e50]">por traer sus ahorros</p>
                
                <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                  1,50 % TAE para saldos entre 10.000 € y 150.000 €<sup>2</sup>.
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
            <strong className="text-[#001e50]">Aproveche una o ambas promociones</strong> antes del 02/03/2026, 
            cumpliendo <span className="text-[#001e50] underline cursor-pointer">condiciones</span><sup>3</sup>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#001e50] hover:bg-[#003087] text-white px-8 py-6 text-base font-medium transition-all duration-300"
            >
              Contratar con Gestor
            </Button>
            <Button
              variant="outline"
              className="border-[#001e50] text-[#001e50] hover:bg-[#001e50] hover:text-white px-8 py-6 text-base font-medium transition-all duration-300"
            >
              Contratar en App DB
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}