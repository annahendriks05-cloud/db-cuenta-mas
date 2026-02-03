import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from './useTranslation';

export default function Navigation() {
  const { t } = useTranslation();
  
  const navItems = [
    { label: t('digitalFestgeld'), path: 'DigitalFestgeld' },
    { label: t('kontakt'), path: 'Kontakt' },
    { label: t('filialen'), path: 'Filialen' },
    { label: t('kundenservice'), path: 'Kundenservice' }
  ];

  return (
    <nav className="bg-[#00008B] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center py-3 md:py-4 gap-3 md:gap-0">
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-1 flex-wrap">
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={createPageUrl(item.path)}
                className="text-white hover:text-[#ffd000] transition-colors text-xs md:text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}