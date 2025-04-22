import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-38_foot-recortada.png';
import { useTranslation } from 'react-i18next';
// import svgTicketeraEs from '../assets/images/ticketera-esp.svg'; 
// import svgTicketeraEn from '../assets/images/ticketera-eng.svg'; 
// import svgTicketeraIt from '../assets/images/ticketera-ita.svg';
// import i18n from '../i18n';

const Section11: React.FC = () => {
  const { t } = useTranslation();
  const isMobile = window.innerWidth < 640;

  // const getSvgTicketeraByLanguage = () => {
  //   switch (i18n.language) {
  //     case 'en':
  //       return svgTicketeraEn;
  //     case 'it':
  //       return svgTicketeraIt;
  //     case 'es':
  //     default:
  //       return svgTicketeraEs;
  //   }
  // };

  return (
    <section
  className="
    relative 
    w-full 
    flex flex-col sm:flex-row sm:justify-between 
    items-center 
    text-[#0E1373] 
    min-h-[30vh] sm:min-h-[300px] 
    bg-contain bg-center bg-no-repeat
    pt-5 sm:pt-20
    -mt-1
    sm:mb-15
  "
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: isMobile ? 'contain' : 'cover',
    backgroundPosition: isMobile ? 'top' : 'center',
  }}
>
      {/* Imagen centrada en mobile */}
      {/* <div className="block sm:hidden absolute top-2 left-[70%]">
        <a href="https://live.tickethoy.com/" target="_blank" rel="noopener noreferrer">
          <img src={getSvgTicketeraByLanguage()} alt="Imagen destacada" className="w-22 mx-auto cursor-pointer" />
        </a>
      </div> */}

      {/* Contenido izquierdo */}
      <div className="w-full sm:w-1/2 sm:pl-20 px-4 sm:px-20 text-left font-bold font-poppins flex flex-col justify-center">
      <p className="text-sm  sm:text-[1.2rem] pb-10 sm:pb-0 pt-20  leading-relaxed text-center sm:text-left ">
          {t('section11_text')}
        </p>
      </div>

      {/* Imagen posicionada en desktop */}
      {/* <div className="hidden sm:block absolute top-10 left-[55%] sm:left-[70%]">
      <a
            href="https://live.tickethoy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className=" w-20 h-auto self-center mt-2 "
          >
            <img src={getSvgTicketeraByLanguage()} alt="Ticketera" className="sm:w-60 h-auto" />
          </a>
      </div> */}
    </section>
  );
};

export default Section11;
