import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-40.png';
import svgLogoEs from '../assets/images/logosyvectores-03.svg'; 
import svgLogoEn from '../assets/images/logosyvectores-03_eng.svg'; 
import svgLogoIt from '../assets/images/logosyvectores-03_ita.svg'; 
import i18n from '../i18n';
import pupi from '../assets/images/logosyvectores-04.svg';
import instagramIcon from '../assets/images/logosyvectores-10.svg';
import facebookIcon from '../assets/images/logosyvectores-11.svg';
import whatsappIcon from '../assets/images/logosyvectores-12.svg';
import { useTranslation } from 'react-i18next';

const Section13: React.FC = () => {
  const { t } = useTranslation();

  const getSvgLogoByLanguage = () => {
    switch (i18n.language) {
      case 'en':
        return svgLogoEn;
      case 'it':
        return svgLogoIt;
      case 'es':
      default:
        return svgLogoEs;
    }
  };

  return (
    <section
  className="relative w-full flex flex-col sm:flex-row py-2 sm:py-14 bg-[#111C46] bg-contain sm:bg-cover bg-bottom sm:bg-center bg-no-repeat text-white"
  style={{ backgroundImage: `url(${backgroundImage})` }}
>
      {/* Lado Izquierdo */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center px-8 pb-30 pt-5 sm:py-10 sm:px-20 text-left font-poppins">
        <h2 className="text-4xl sm:text-6xl font-bold">{t('section13_title')}</h2>
        <div className="sm:mt-6 grid grid-cols-2 gap-4">
          <div className="text-[0.6rem] sm:text-[1.1rem]">
            <h3 className="text-xl font-semibold">{t('section13_subtitle')}</h3>
            <a
              href="https://www.loca-agency.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-white"
            >
              <p className="text-white">www.loca-agency.com</p>
            </a>
            
            <p>Buenos Aires | Argentina</p>
            <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center">
  <a
    href="https://www.instagram.com/lo.casas"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-white"
  >
    <img src={instagramIcon} alt="Instagram" className="w-6 h-6 mr-2" />
    <span className="text-white">@lo.casas</span>
  </a>
</div>

<div className="flex items-center">
  <a
    href="https://www.facebook.com/LoCaimagenyeventos"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
    <img src={facebookIcon} alt="Facebook" className="w-6 h-6 mr-2" />
    <span className="text-white">/LoCaimagenyeventos</span>
  </a>
</div>

<div className="flex items-center">
  <a
    href="https://wa.me/13056773928"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
    <img src={whatsappIcon} alt="WhatsApp USA" className="w-6 h-6 mr-2" />
    <span className="text-white">+1 305 677 3928 🇺🇸</span>
  </a>
</div>

<div className="flex items-center">
  <a
    href="https://wa.me/5491150325546"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center"
  >
    <img src={whatsappIcon} alt="WhatsApp ARG" className="w-6 h-6 mr-2" />
    <span className="text-white">+54 9 11 5032 5546 🇦🇷</span>
  </a>
</div>
            </div>
          </div>
          <div>
            <p className="text-[0.8rem] sm:text-[1.1rem]">Lorena Cataldo</p>
            <p className="text-[0.6rem] sm:text-[0.9rem] opacity-90">lorenacataldo@loca-agency.com</p>
            <p className="text-[0.8rem] sm:text-[1.1rem] mt-3">Juan Ignacio Moreno</p>
            <p className="text-[0.6rem] sm:text-[0.9rem] opacity-90">jim@loca-agency.com</p>
            <p className="text-[0.8rem] sm:text-[1.1rem] mt-3">Martin Bode</p>
            <p className="text-[0.6rem] sm:text-[0.9rem] opacity-90">mbode@534ent.com</p>
            <p className="text-[0.8rem] sm:text-[1.1rem] mt-3">Diego Barassi</p>
            <p className="text-[0.6rem] sm:text-[0.9rem] opacity-90">dbarassi@534ent.com</p>
          </div>
        </div>
      </div>
      
      {/* Lado Derecho */}
      <div className="w-full mb-5 sm:mb-10 sm:w-1/2 relative flex justify-center items-center">
      
        {/* Imagen superior izquierda */}
        <img src={getSvgLogoByLanguage()} alt="Imagen adicional 1" className="absolute bottom-0 sm:bottom-0 left-13 sm:left-20 w-16 sm:w-24" />
        {/* Imagen inferior derecha */}
        <img src={pupi} alt="Imagen adicional 2" className="absolute bottom-0 left-38 sm:bottom-0 sm:left-50 sm:left-0 w-16 sm:w-24" />
      </div>
      <div className="w-full absolute sm:hidden h-[0.03px] bg-[#f2f2f2] bottom-32"></div>
    </section>
  );
};

export default Section13;
