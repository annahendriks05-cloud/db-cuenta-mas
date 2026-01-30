import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function BankChangeService() {
  const services = [
    'Sus recibos (luz, agua, etc.).',
    'Transferencias periódicas salientes e ingresos habituales (ej. Ingreso por alquiler).',
    'Traspaso de su saldo actual e incluso el cierre de cuenta.'
  ];

  return (
    <div className="bg-[#f8f9fa] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl text-[#001e50] font-light mb-6 leading-tight">
              Le ayudamos a cambiar todos sus recibos de banco
            </h2>
            
            <p className="text-gray-600 mb-8">
              El proceso es <strong className="text-[#001e50]">sencillo, seguro y sin ningún coste</strong>, 
              y lo puede realizar de forma digital o a través de su Gestor Personal. Usted elige que desea cambiar:
            </p>
            
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#001e50] flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">{service}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=400&fit=crop"
              alt="Cambio de banco"
              className="rounded-2xl shadow-lg max-w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
        >
          <p className="text-lg text-[#001e50]">
            Hágase cliente y disfrute de todos los beneficios de ser de Deutsche Bank, 
            <strong> un banco global tan local como lo necesite</strong>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}