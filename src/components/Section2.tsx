import React from 'react';
import { useTranslation } from 'react-i18next';
import svgLogoEs from '../assets/images/logosyvectores-03.svg'; 
import svgLogoEn from '../assets/images/logosyvectores-03_eng.svg'; 
import svgLogoIt from '../assets/images/logosyvectores-03_ita.svg'; 
import i18n from '../i18n';

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

  return (
    <section className="w-full py-5 sm:mt-10 sm:py-20 flex flex-col sm:flex-row items-center justify-center py-10 ">
      {/* Parte izquierda con el logo */}
      <div className="w-full sm:w-[35%] flex justify-center items-center">
        <img src={getSvgLogoByLanguage()}  alt="Logo" className="w-1/3 mb-5 sm:mb-0 sm:w-2/3" />
      </div>

      {/* Parte derecha con el texto */}
      <div className="w-full sm:w-[50%] flex justify-center items-center text-left">
        <p className="text-[#121C47] text-[0.9rem] sm:text-[1.2rem] font-poppins font-semibold leading-[1.2] text-left whitespace-pre-line w-5/6">
        {t('section2_text')}
        </p>
      </div>
    </section>
  );
}

export default Section2;
