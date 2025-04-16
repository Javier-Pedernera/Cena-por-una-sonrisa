import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import iconTranslation from '../assets/images/icon-translation.png';

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setOpen(false);
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
    <div className="absolute top-4 right-2 sm:top-10 sm:right-15 z-50" ref={menuRef}>
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="appearance-none bg-white/2 hover:bg-white/4 text-white px-1 py-0.5 sm:px-2 sm:py-1 rounded-full text-sm font-medium backdrop-blur-xs sm:backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <img src={iconTranslation} alt="translate" className="w-5 h-5 sm:w-12 sm:h-12" />
        </button>

        {open && (
          <div className="absolute text-[0.8rem] sm:text-[1rem] mt-1 right-0 sm:mt-2 w-8 sm:w-40 rounded-xl overflow-hidden shadow-2xl border border-white/5 backdrop-blur-xs bg-[#222538]/10 text-white animate-fadeIn">
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
