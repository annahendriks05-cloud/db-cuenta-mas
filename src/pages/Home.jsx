import React from 'react';
import Navigation from '@/components/landing/Navigation';
import HeroSection from '@/components/landing/HeroSection';
import ProductSection from '@/components/landing/ProductSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import SecuritySection from '@/components/landing/SecuritySection';
import BankChangeService from '@/components/landing/BankChangeService';
import RiskIndicator from '@/components/landing/RiskIndicator';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <ProductSection />
      <BenefitsSection />
      <FeaturesSection />
      <SecuritySection />
      <BankChangeService />
      <RiskIndicator />
      <Footer />
    </div>
  );
}