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