import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function BankChangeService() {
  const services = [
    'Ihre Lastschriften (Strom, Wasser, etc.).',
    'Periodische ausgehende Überweisungen und regelmäßige Eingänge (z.B. Mieteinnahmen).',
    'Übertragung Ihres aktuellen Guthabens und sogar Kontoschließung.'
  ];

  return (
    <div className="bg-white py-16 md:py-24 border-t border-gray-100">
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
              Wir helfen Ihnen, alle Ihre Bankabbuchungen zu wechseln
            </h2>
            
            <p className="text-gray-600 mb-8">
              Der Prozess ist <strong className="text-[#001e50]">einfach, sicher und völlig kostenlos</strong>, 
              und Sie können ihn digital oder über Ihren persönlichen Berater durchführen. Sie wählen, was Sie ändern möchten:
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
              alt="Bankwechsel"
              className="rounded-2xl shadow-lg max-w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-[#f8f9fa] to-white rounded-2xl p-8 shadow-sm border border-gray-100"
        >
          <p className="text-lg text-[#001e50]">
            Werden Sie Kunde und genießen Sie alle Vorteile der Deutschen Bank, 
            <strong> einer globalen Bank, die so lokal ist, wie Sie es brauchen</strong>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}