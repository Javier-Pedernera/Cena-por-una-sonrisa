import React from 'react';
import { useTranslation } from 'react-i18next';
import svgLogoEs from '../assets/images/logosyvectores-03.svg'; 
import svgLogoEn from '../assets/images/logosyvectores-03_eng.svg'; 
import svgLogoIt from '../assets/images/logosyvectores-03_ita.svg'; 
import i18n from '../i18n';
import svgTicketeraEs from '../assets/images/ticketera-esp.svg'; 
import svgTicketeraEn from '../assets/images/ticketera-eng.svg'; 
import svgTicketeraIt from '../assets/images/ticketera-ita.svg';

const Section2: React.FC = () => {
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
  const getSvgTicketeraByLanguage = () => {
    switch (i18n.language) {
      case 'en':
        return svgTicketeraEn;
      case 'it':
        return svgTicketeraIt;
      case 'es':
      default:
        return svgTicketeraEs;
    }
  };
  return (
    <section className="w-full pt-5 sm:mt-10 sm:py-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
      {/* Parte izquierda con el logo */}
      <div className="w-full sm:w-1/2  flex justify-center items-center">
        <img src={getSvgLogoByLanguage()}  alt="Logo" className="w-1/3 mb-5 sm:mb-0 sm:w-[40%]" />
      </div>

      {/* Parte derecha con el texto */}
      <div className="w-full sm:w-1/2 sm:w-[50%] flex justify-center items-center text-left">
        <p className="text-[#121C47] text-[0.9rem] sm:text-[1.2rem] font-poppins font-semibold leading-[1.2] text-left whitespace-pre-line w-5/6">
        {t('section2_text')}
        </p>
      </div>
      <a
            href="https://live.tickethoy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block sm:hidden w-35 h-auto self-center mt-5 "
          >
            <img src={getSvgTicketeraByLanguage()} alt="Ticketera" className="w-full h-auto" />
          </a>
    </section>
  );
}

export default Section2;
