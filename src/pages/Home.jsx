import React, { useState } from 'react';
import { motion } from 'framer-motion';
import RiskIndicator from '@/components/landing/RiskIndicator';
import Navigation from '@/components/landing/Navigation';
import HeroSection from '@/components/landing/HeroSection';
import ProductSection from '@/components/landing/ProductSection';
import BankChangeService from '@/components/landing/BankChangeService';
import FeaturesSection from '@/components/landing/FeaturesSection';
import SecuritySection from '@/components/landing/SecuritySection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header con Logo */}
      <div className="bg-gradient-to-r from-[#00008B] to-[#0000CD] py-6">
        <div className="max-w-7xl mx-auto px-4 flex justify-center">
          <img 
            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/697cf26cc2a02d112fd30c1c/35a51d85a_image.png"
            alt="Deutsche Bank Logo"
            className="h-20"
          />
        </div>
      </div>
      <RiskIndicator />
      <Navigation />
      <HeroSection />
      <ProductSection />
      <BankChangeService />
      <FeaturesSection />
      <SecuritySection />
      <Footer />
    </div>
  );
}