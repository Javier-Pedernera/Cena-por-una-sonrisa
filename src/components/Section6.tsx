import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-06.png';
import logo1 from '../assets/images/logosyvectores-07.svg';
import logo2 from '../assets/images/logosyvectores-04.svg';
import svgLogoEs from '../assets/images/logosyvectores-03.svg'; 
import svgLogoEn from '../assets/images/logosyvectores-03_eng.svg'; 
import svgLogoIt from '../assets/images/logosyvectores-03_ita.svg'; 
import i18n from '../i18n';
import logo4 from '../assets/images/logosyvectores-01oro.svg';
import logo5 from '../assets/images/logosyvectores-08.svg';
import svg4 from '../assets/images/logosyvectores-05.svg';
import { useTranslation } from 'react-i18next';

const Section6: React.FC = () => {
  const { t } = useTranslation();
  // const isMobile = window.innerWidth < 640;

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
      className="relative py-5 sm:py-0 w-full h-[67vh] sm:h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full h-[100%] flex flex-col-reverse sm:flex-col  sm:flex-row items-center justify-between px-5 sm:px-10">
        {/* Lado Izquierdo - Texto en Rectángulo Blanco */}
        <div className="w-full h-[80%] flex flex-col justify-between items-center sm:w-[45%] bg-white p-5 sm:py-15 sm:px-5 rounded-lg shadow-lg">
        {/* Apertura */}
        <p className="text-[#0E1373] mb-3 sm:mb-5 text-[1rem] sm:w-[80%] sm:text-[1.3rem] font-bold text-center">
          {t('section6_opening_title')}
        </p>
        <p className="text-[#0E1373] text-[0.8rem] mb-5 w-[75%] sm:w-[60%] sm:text-[1rem] text-left">
          <span className="font-bold">{t('section6_date')}</span> {t('section6_opening_date_info')}
          <br />
          <span className="font-bold">{t('section6_location')}</span> {t('section6_opening_location_info')}
        </p>

        {/* Cierre */}
        <p className="text-[#0E1373] text-[1rem] mb-3 sm:mb-5 sm:w-[80%] sm:text-[1.3rem] font-bold text-center mt-5">
          {t('section6_closing_title')}
        </p>
        <p className="text-[#0E1373] text-[0.8rem] w-[75%] sm:w-[60%] sm:text-[1rem] text-left">
          <span className="font-bold">{t('section6_date')}</span> {t('section6_closing_date_info')}
          <br />
          <span className="font-bold">{t('section6_location')}</span> {t('section6_closing_location_info')}
        </p>
        {/* Línea divisoria + texto */}
        <hr className="my-4 border-1 my-5 w-[90%] border-[#0E1373]" />
        <p className="text-[#0E1373] w-[90%] text-[0.8rem] sm:text-[1rem] text-center font-semibold">
          {t('section6_description')}
        </p>
      </div>

        {/* Lado Derecho - Título y Logos */}
        <div className="w-full h-[70%] sm:h-[90%] sm:w-[45%] relative  flex sm:flex-col items-center">
          {/* Título con Posición Absoluta */}
          <img
            src={svg4}
            alt="Imagen 2"
            className="absolute top-[-15%] left-[90%] sm:top-[-13%] sm:left-[90%] w-[7%] sm:w-[15%]"
          />
          <p className="absolute top-[45%] left-[15%] sm:top-[5%] sm:left-[0%]  text-white text-[2rem] sm:text-[5.8rem] font-extrabold">Detalles</p>
          <p className="absolute top-[60%] left-[35%] sm:top-[24%] sm:left-[30%] text-white text-[2rem] sm:text-[4rem] font-extrabold">del evento</p>

          {/* Logos acomodados en dos filas */}
          <div className="absolute w-full top-[15%] sm:top-[45%] items-end content-end h-[20%] sm:px-0 flex flex-start  justify-center gap-2 sm:gap-6 sm:mt-16">
            <div className="flex w-60 sm:w-[60%] justify-around  sm:justify-between sm:gap-3 sm:flex-nowrap">
              <img src={logo1} alt="Logo 1" className="w-15 sm:w-30" />
              <img src={logo2} alt="Logo 2" className="w-13 sm:w-23" />
              <img src={getSvgLogoByLanguage()} alt="Logo 3" className="w-12 sm:w-23" />
            </div>
            <div className="flex w-40 sm:w-[40%] justify-around sm:justify-between gap-1 sm:gap-5 mt-2 sm:mt-[-2%]">
              <img src={logo4} alt="Logo 4" className="w-10 sm:w-15" />
              <img src={logo5} alt="Logo 5" className="w-17 sm:w-35" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;

