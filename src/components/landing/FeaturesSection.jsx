import React from 'react';
import { motion } from 'framer-motion';
import { PlusCircle, MinusCircle, CreditCard, Banknote, Globe, Shield, Vault, Clock } from 'lucide-react';
import { useTranslation } from './useTranslation';

export default function FeaturesSection() {
  const { t } = useTranslation();
  const featureGroups = [
    {
      title: t('moreFreedom'),
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop',
      features: [
        {
          icon: PlusCircle,
          title: t('moreAtms'),
          description: t('atmDesc'),
          highlight: true
        },
        {
          icon: MinusCircle,
          title: t('noFees'),
          description: t('noFeesDesc'),
          highlight: false
        }
      ]
    },
    {
      title: t('moreBenefits'),
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop',
      features: [
        {
          icon: Banknote,
          title: t('moreProfit'),
          description: t('profitDesc'),
          highlight: true
        },
        {
          icon: Globe,
          title: t('globalAccess'),
          description: t('globalAccessDesc'),
          highlight: false
        }
      ]
    },
    {
      title: t('moreSafetyVault'),
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=350&fit=crop',
      features: [
        {
          icon: Vault,
          title: t('realVaultSolution'),
          description: t('vaultDesc'),
          highlight: true
        },
        {
          icon: CreditCard,
          title: t('ownDigitalIban'),
          description: t('ibanDesc'),
          highlight: false
        }
      ]
    },
    {
      title: t('moreFlexibility'),
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      features: [
        {
          icon: Clock,
          title: t('flexibleHoursVault'),
          description: t('hoursDesc'),
          highlight: true
        },
        {
          icon: Shield,
          title: t('sevenDaysAvailable'),
          description: t('sevenDaysDesc'),
          highlight: false
        }
      ]
    }
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl text-[#00008B] font-light">
            {t('accountForMore')}
          </h2>
        </motion.div>

        {/* Feature Groups */}
        <div className="space-y-20">
          {featureGroups.map((group, groupIndex) => (
            <motion.div
              key={groupIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: groupIndex * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                groupIndex % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={groupIndex % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  src={group.image}
                  alt={group.title}
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
              </div>

              {/* Content */}
              <div className={groupIndex % 2 === 1 ? 'lg:order-1' : ''}>
                <h3 className="text-2xl md:text-3xl text-[#00008B] font-light mb-8">
                  {group.title}
                </h3>

                <div className="space-y-6">
                  {group.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: groupIndex % 2 === 0 ? 20 : -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                        feature.highlight 
                          ? 'bg-[#00008B] text-white' 
                          : 'bg-gray-100 text-[#00008B]'
                      }`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#00008B] mb-1">{feature.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { icon: Shield, title: t('securityBadge'), desc: 'Maximaler Schutz für Ihre Daten und Transaktionen' },
            { icon: CreditCard, title: t('noHiddenCosts'), desc: t('noCostsDesc') },
            { icon: Globe, title: t('globalPresence'), desc: t('globalPresenceDesc') }
          ].map((badge, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-[#f8f9fa] hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#00008B]/10 flex items-center justify-center mx-auto mb-4">
                <badge.icon className="w-7 h-7 text-[#00008B]" />
              </div>
              <h4 className="font-semibold text-[#00008B] mb-2">{badge.title}</h4>
              <p className="text-gray-600 text-sm">{badge.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}