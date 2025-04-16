import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-39.png';
import star1 from '../assets/images/logosyvectores-05.svg';
import star2 from '../assets/images/logosyvectores-06.svg';
import mobileBackgroundImage from '../assets/images/pngfondosimagenes-39-sq.png';
import { useTranslation } from 'react-i18next';

const Section12: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full flex flex-col sm:flex-row min-h-screen sm:pb-10">
      {/* Fondo gris en mobile */}
      <div className="block sm:hidden absolute inset-0 bg-gray-100 z-[-1]" />

      {/* Fondo imagen en desktop */}
      <div
        className="hidden sm:block absolute inset-0 w-full h-full bg-cover bg-center z-[0] "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Imagen superior solo en mobile */}
      <div className="block sm:hidden w-full flex justify-center">
        <img src={mobileBackgroundImage} alt="Imagen mobile" className="w-full object-cover" />
      </div>
      {/* Lado Izquierdo */}
      <div className="w-full sm:w-[55%] z-[1]  mt-[-10%] sm:mt-10 flex flex-col justify-center px-6 sm:px-20 py-10 sm:py-0 text-left font-poppins text-[#111C46]">
        <h2 className="text-[2rem] mt-[-85%] sm:mt-0 sm:text-[4.5rem] text-[#0E1373] font-extrabold leading-tight">{t('section12_title_1')}</h2>
        <h2 className="text-[1.7rem]  sm:text-[3rem] text-[#0E1373] sm:ml-35 font-extrabold ml-10 mt-[-20px] sm:mt-[-6%]">{t('section12_title_2')}</h2>
        <p className="mt-[70%] sm:mt-8 w-[90%] text-[0.8rem] text-[#0E1373] sm:text-[1rem] font-bold leading-relaxed">
        {t('section12_p1')}
        </p>
        <p className="mt-4 w-[90%] text-[0.8rem] text-[#0E1373] sm:text-[1rem] font-bold leading-relaxed">
        {t('section12_p2')}
        </p>
        <p className="mt-4 w-[90%] text-[0.8rem] text-[#0E1373] sm:text-[1rem] font-bold leading-relaxed">
        {t('section12_p3')}
        </p>
      </div>

      {/* Lado Derecho */}
      <div className="w-full sm:w-1/2 relative flex justify-center items-center mt-10 sm:mt-0">
        {/* Imagen superior izquierda */}
        <img
          src={star2}
          alt="Imagen adicional 1"
          className="absolute top-4 sm:top-[25%] left-4 sm:left-0 w-12 sm:w-24"
        />
        {/* Imagen inferior derecha */}
        <img
          src={star1}
          alt="Imagen adicional 2"
          className="absolute bottom-4 sm:bottom-5 right-4 sm:right-[25%] w-12 sm:w-24"
        />
      </div>
    </section>
  );
};

export default Section12;
