import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  const getShortLang = (lang: string) => {
    switch (lang) {
      case 'en':
        return 'EN';
      case 'it':
        return 'IT';
      case 'es':
      default:
        return 'ES';
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="absolute top-15 right-3 sm:top-20 sm:right-15 z-50" ref={menuRef}>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-5 h-5 sm:w-12 sm:h-12 bg-[#9d782b] text-[#1D263C]  text-[0.8rem] sm:text-[1.2rem] font-bold flex items-center justify-center shadow-md transition-all duration-300 hover:scale-105 active:scale-95"
        >
          {getShortLang(i18n.language)}
        </button>

        {open && (
          <div className="absolute text-[0.8rem] sm:text-[1.2rem] mt-1 right-0 sm:mt-0 w-10 sm:w-40  overflow-hidden shadow-2xl border border-white/5 backdrop-blur-xs bg-[#222538]/10 text-white animate-fadeIn">
            {[
              { code: 'es', label: '🇪🇸 Español', short: 'ES' },
              { code: 'en', label: '🇺🇸 English', short: 'EN' },
              { code: 'it', label: '🇮🇹 Italiano', short: 'IT' }
            ].map(({ code, label, short }) => (
              <button
                key={code}
                onClick={() => changeLanguage(code)}
                className={`w-full px-2 py-1 sm:px-4 sm:py-2 text-left transition-colors duration-200 backdrop-blur-xs hover:text-[#CDA434] hover:bg-[#222538]/20 ${
                  i18n.language === code ? 'text-[#CDA434]' : ''
                }`}
              >
                <span className="sm:hidden">{short}</span>
                <span className="hidden sm:inline">{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
