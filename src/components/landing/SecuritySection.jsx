import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Building2, Lock, CheckCircle2 } from 'lucide-react';

export default function SecuritySection() {
  return (
    <div className="bg-gradient-to-br from-[#f8f9fa] to-white py-16 md:py-24 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-[#001e50] font-light mb-4">
            EURAU & EURC: 100% Sicher
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            EURAU gehört zur <strong className="text-[#001e50]">Deutsche Bank</strong> - 
            Ihre Einlagen sind vollständig geschützt
          </p>
        </motion.div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-[#001e50] flex items-center justify-center mb-6 mx-auto">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#001e50] mb-3 text-center">
              Teil der Deutsche Bank
            </h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              EURAU ist ein Produkt der Deutsche Bank AG und profitiert von der Stabilität und Sicherheit einer der größten Banken der Welt.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center mb-6 mx-auto">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#001e50] mb-3 text-center">
              100% Einlagensicherung
            </h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Ihre Einlagen sind bis zu <strong className="text-green-600">100.000 € pro Kunde</strong> durch den gesetzlichen Einlagensicherungsfonds geschützt.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center mb-6 mx-auto">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-[#001e50] mb-3 text-center">
              Betrugsschutz
            </h3>
            <p className="text-gray-600 text-center text-sm leading-relaxed">
              Modernste Sicherheitstechnologie und Betrugsschutz schützen Ihre Transaktionen rund um die Uhr vor unbefugtem Zugriff.
            </p>
          </motion.div>
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#001e50] to-[#003087] rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <CheckCircle2 className="w-8 h-8 text-[#ffd000]" />
            <h3 className="text-2xl md:text-3xl font-light">100% Sicher & Zuverlässig</h3>
          </div>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Als Teil der <strong className="text-white">Deutsche Bank</strong> bietet EURAU Ihnen nicht nur 
            attraktive Zinsen, sondern auch die Sicherheit und Stabilität eines globalen Finanzinstituts 
            mit über 150 Jahren Erfahrung.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#ffd000]" />
              <span className="text-sm">Reguliert & Lizenziert</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#ffd000]" />
              <span className="text-sm">Einlagensicherung</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#ffd000]" />
              <span className="text-sm">Betrugsschutz</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}