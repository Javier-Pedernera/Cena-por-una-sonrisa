import React, { useEffect, useRef, useState } from 'react';
import img1 from '../assets/images/pngfondosimagenes-01bis.png';
import svg1 from '../assets/images/logosyvectores-01.svg';
import svg2 from '../assets/images/logosyvectores-02.svg';
import svg3 from '../assets/images/logosyvectores-05.svg';
import svg4 from '../assets/images/logosyvectores-06.svg';
import svgLogo2 from '../assets/images/logosyvectores-03.svg';
import pupi from '../assets/images/logosyvectores-04.svg';
import { useTranslation } from 'react-i18next';
import iconTranslation from '../assets/images/icon-translation.png';

const Section1: React.FC = () => {
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
    <section className="w-full py-3 sm:py-0 h-auto bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${img1})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
      <div className="flex flex-row flex-wrap  w-[100%]  h-full">
      <div className="absolute top-4 right-2 sm:top-10 sm:right-15 z-50" ref={menuRef}>
        <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="appearance-none bg-white/2 hover:bg-white/4 text-white px-1 py-0.5 sm:px-2 sm:py-1 rounded-full text-sm font-medium backdrop-blur-xs sm:backdrop-blur-sm border border-white/10 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <img src={iconTranslation} alt="translate" className="w-5 h-5  sm:w-12 sm:h-12 " />
          {/* {i18n.language.toUpperCase()} */}
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
        {/* Parte izquierda */}
        <div className="w-1/2 flex flex-col p-[5%] relative space-y-2 sm:space-y-8 items-start h-full ">
          {/* SVG 1 y SVG 2 al lado izquierdo */}
          <div className="flex flex-row">
            <img src={svg1} alt="Imagen pequeña 1" className="w-7 sm:w-20 h-auto" />
            <img src={svg2} alt="SVG 2" className="w-15 sm:w-50 h-auto" />
          </div>
          
          {/* estrellas*/}
          <div className="flex flex-col items-start space-y-6 sm:space-y-2 mt-8 sm:mt-110">
          <img src={svg3} alt="SVG 3" className="absolute w-7 sm:w-20 h-auto left-[15%] top-[80%] sm:right-[25%] sm:top-[45%]" />
          <img src={svg4} alt="SVG 4" className="absolute w-7 sm:w-20 h-auto left-[5%] top-[105%] sm:right-[25%] sm:top-[60%]" />
          </div>
        </div>

        {/* Parte derecha */}
        <div className="w-1/2 flex p-[5%] flex-col space-y-2 relative items-end h-full">
          <img src={svgLogo2} alt="Logo" className="w-28 sm:w-95 h-auto" />
          <img src={pupi} alt="Logo" className="w-12 sm:w-30 h-auto sm:mt-0 " />
          {/* estrellas*/}
          <div className="flex flex-row space-y-1 sm:space-y-0 mt-8 sm:mt-60 items-start">
            <img src={svg3} alt="SVG 3" className="absolute w-7 sm:w-20 h-auto right-[45%] top-[85%] sm:right-[40%] sm:top-[80%]" />
            <img src={svg4} alt="SVG 4" className="absolute w-7 sm:w-20 h-auto right-[5%] top-[90%] sm:right-[15%] sm:top-[90%]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
