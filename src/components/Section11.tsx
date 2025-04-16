import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-38_foot-recortada.png';
import centeredImage from '../assets/images/logosyvectores-09.svg';
import { useTranslation } from 'react-i18next';

const Section11: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section 
      className="relative w-full flex flex-col sm:flex-row sm:justify-between items-center text-[#111C46]  sm:min-h-[400px] sm:min-h-75 bg-contain sm:bg-contain bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Imagen centrada en mobile */}
      <div className="block sm:hidden absolute top-5 left-[65%]">
        <a href="https://live.tickethoy.com/" target="_blank" rel="noopener noreferrer">
          <img src={centeredImage} alt="Imagen destacada" className="w-25 mx-auto cursor-pointer" />
        </a>
      </div>

      {/* Contenido izquierdo */}
      <div className="w-full sm:w-1/2 sm:pl-20 px-4 sm:px-20 text-left font-bold font-poppins flex flex-col justify-center">
      <p className="text-sm sm:text-[1.2rem] pb-10 sm:pb-0 pt-20 sm:pt-[20%] leading-relaxed text-center sm:text-left whitespace-pre-line">
          {t('section11_text')}
        </p>
      </div>

      {/* Imagen posicionada en desktop */}
      <div className="hidden sm:block absolute top-8 left-[55%] sm:left-[57%]">
        <a href="https://live.tickethoy.com/" target="_blank" rel="noopener noreferrer">
          <img src={centeredImage} alt="Imagen destacada" className="w-40 sm:w-54" />
        </a>
      </div>
    </section>
  );
};

export default Section11;
