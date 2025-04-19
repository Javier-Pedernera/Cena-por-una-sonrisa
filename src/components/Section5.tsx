import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-05.png';
import svg3 from '../assets/images/logosyvectores-05.svg';
import svg4 from '../assets/images/logosyvectores-06.svg';
import { useTranslation } from 'react-i18next';

const Section5: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full bg-white flex items-center justify-center">
      {/* Contenedor con la imagen de fondo */}
      <div
        className="w-full flex h-[20vh] sm:h-[60vh] relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {/* Parte izquierda */}
        <div className="top-10 left-10 sm:left-[5%] w-[50%] sm:w-[50%]">
          <div className="flex flex-col leading-tight  justify-end h-[90%] top-10 left-10 sm:top-[50%] sm:left-[5%]">
            <p className="absolute top-[45%] left-[7%] text-white p-1 text-[1.5rem] sm:text-[6rem] font-poppins font-bold leading-tight text-left">
            {t('section5_title')}
            </p>
            <p className="absolute top-[60%] sm:top-[65%] left-[18%] text-white p-1 text-[1.1rem] sm:text-[3.5rem] font-poppins font-bold leading-tight text-left">
            {t('section5_subtitle')}
            </p>
          </div> 

          {/* Imagen 1 en posición absoluta */}
          <img
            src={svg3}
            alt="Imagen 1"
            className="absolute top-[-5%] left-[25%] sm:top-[-5%] sm:left-[25%] w-[7%] sm:w-[7%]"
          />
          
          {/* Imagen 2 en posición absoluta */}
          <img
            src={svg4}
            alt="Imagen 2"
            className="absolute top-[15%] left-[35%] sm:top-[15%] sm:left-[35%] w-[7%] sm:w-[7%]"
          />
        </div>

        {/* Parte derecha */}
        <div className="flex flex-col justify-end h-[95%]  w-[50%] sm:w-[50%]">
          <p className="p-[5%] text-[#fff] opacity-90 text-[0.45rem] sm:pl-[7%] sm:pr-[15%] sm:text-[1.1rem] font-poppins font-semibold leading-tight text-left">
          {t('section5_paragraph')}
          </p>
        </div> 
      </div>
    </section>
  );
};

export default Section5;
