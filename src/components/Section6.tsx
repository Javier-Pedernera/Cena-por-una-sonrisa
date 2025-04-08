import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-06.png';
import logo1 from '../assets/images/logosyvectores-07.svg';
import logo2 from '../assets/images/logosyvectores-04.svg';
import logo3 from '../assets/images/logosyvectores-03.svg';
import logo4 from '../assets/images/logosyvectores-01.svg';
import logo5 from '../assets/images/logosyvectores-08.svg';
import svg4 from '../assets/images/logosyvectores-05.svg';
import { useTranslation } from 'react-i18next';

const Section6: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      className="relative py-5 sm:py-0 w-full h-[60vh] sm:h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className="w-full h-[100%] flex flex-col-reverse sm:flex-col  sm:flex-row items-center justify-between px-5 sm:px-20">
        {/* Lado Izquierdo - Texto en Rectángulo Blanco */}
        <div className="w-full h-[80%] flex flex-col justify-between sm:w-[45%] bg-white p-5 sm:py-20 rounded-lg shadow-lg">
          <p className="text-[#111c46] text-[1rem] sm:text-[1.3rem] font-bold text-center">
          {t('section6_opening_title')}
          </p>
          <p className="text-[#111c46] text-[0.8rem] sm:text-[1.1rem] text-center">
          {t('section6_opening_info')}
            <br />
            {t('section6_closing_title')}
          </p>
          <p className="text-[#111c46] text-[1rem] sm:text-[1.3rem] font-bold text-center mt-5">
          {t('section6_closing_info')}
          </p>
          <p className="text-[#111c46] text-[0.8rem] sm:text-[1.1rem] text-center">
          {t('section6_title')}
            <br />
            {t('section6_subtitle')}
          </p>
        </div>

        {/* Lado Derecho - Título y Logos */}
        <div className="w-full h-[90%] sm:w-[45%] relative  flex sm:flex-col items-center">
          {/* Título con Posición Absoluta */}
          <img
            src={svg4}
            alt="Imagen 2"
            className="absolute top-[-15%] left-[90%] sm:top-[-13%] sm:left-[90%] w-[7%] sm:w-[15%]"
          />
          <p className="absolute top-[45%] left-[15%] sm:top-[5%] sm:left-[0%]  text-white text-[2rem] sm:text-[5.8rem] font-extrabold">Detalles</p>
          <p className="absolute top-[60%] left-[35%] sm:top-[24%] sm:left-[30%] text-white text-[2rem] sm:text-[4rem] font-extrabold">del evento</p>

          {/* Logos acomodados en dos filas */}
          <div className="absolute top-[0%] sm:top-[35%] sm:px-5 flex flex-start sm:flex-wrap justify-center gap-2 sm:gap-6 sm:mt-16">
            <div className="flex justify-center sm:gap-10 sm:flex-nowrap">
              <img src={logo1} alt="Logo 1" className="w-17 sm:w-26" />
              <img src={logo2} alt="Logo 2" className="w-17 sm:w-26" />
              <img src={logo3} alt="Logo 3" className="w-14 sm:w-26" />
            </div>
            <div className="flex justify-center gap-1 sm:gap-16 mt-2 sm:mt-[-6%]">
              <img src={logo4} alt="Logo 4" className="w-14 sm:w-26" />
              <img src={logo5} alt="Logo 5" className="w-17 sm:w-26" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;

