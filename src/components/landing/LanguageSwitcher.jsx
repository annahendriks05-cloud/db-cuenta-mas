import React from 'react';
import { Globe } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function LanguageSwitcher() {
  const [language, setLanguage] = React.useState('de');

  const handleLanguageChange = (value) => {
    setLanguage(value);
    localStorage.setItem('language', value);
    window.dispatchEvent(new Event('languageChange'));
  };

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'de';
    setLanguage(savedLanguage);
  }, []);

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-white/70" />
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[120px] bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="de">🇩🇪 Deutsch</SelectItem>
          <SelectItem value="en">🇬🇧 English</SelectItem>
          <SelectItem value="fr">🇫🇷 Français</SelectItem>
          <SelectItem value="es">🇪🇸 Español</SelectItem>
          <SelectItem value="nl">🇳🇱 Nederlands</SelectItem>
          <SelectItem value="it">🇮🇹 Italiano</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}