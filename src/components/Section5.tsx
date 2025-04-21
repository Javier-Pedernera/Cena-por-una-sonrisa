import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-05.png';
import backgroundImage2 from '../assets/images/pngfondosimagenes-05bis.png'
import svg3 from '../assets/images/logosyvectores-05.svg';
import svg4 from '../assets/images/logosyvectores-06.svg';
import { useTranslation } from 'react-i18next';

const Section5: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = window.innerWidth < 640;
  // bg-[#111C46]
  return (
    <section className="relative w-full bg-[#111C46] sm:bg-[#fff] flex items-center justify-center">
      {/* Contenedor con la imagen de fondo */}
      <div
        className="w-full flex h-[40vh] flex-col justify-end sm:flex-row sm:justify-center -mt-1 sm:h-[60vh] relative bg-cover bg-center"
        style={{
          backgroundImage: isMobile ? `url(${backgroundImage2})`:`url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: isMobile ? 'contain' : 'cover',
          backgroundPosition: isMobile ? 'top' : 'center',
        }}
      >
        {/* Parte izquierda */}
        <div className=" flex flex-col justify-end sm:justify-center left-10 h-[45%] sm:h-auto sm:left-[5%] w-[100%] sm:w-[45%]">
          <div className="sm:relative flex flex-col leading-tight  justify-end sm:justify-center h-[90%] sm:h-auto  top-10 left-10 sm:top-[10%] sm:left-[5%]">
            <p className="sm:absolute mt-0 ml-[7%] sm:ml-0 text-white p-1 text-[1.5rem] sm:text-[6rem] font-poppins font-bold leading-tight text-left">
            {t('section5_title')}
            </p>
            <p className="sm:absolute -mt-[10px] sm:top-10   ml-[18%] sm:ml-40 text-white p-1 text-[1.1rem] sm:text-[3.5rem] font-poppins font-bold leading-tight text-left">
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
        <div className="flex flex-col justify-end h-[55%] sm:h-[95%] sm:mt-0 w-[100%] sm:w-[45%]">
          <p className=" p-[5%] pb-7 text-[#fff]  text-[0.8rem] sm:pl-[10%] sm:pr-[5%] sm:text-[1.1rem] font-poppins font-semibold leading-tight text-left">
          {t('section5_paragraph')}
          </p>
        </div> 
      </div>
    </section>
  );
};

export default Section5;
