import React, { useEffect, useState } from 'react';
import img1 from '../assets/images/pngfondosimagenes-01bis.png';
import img1Low from '../assets/images/pngfondosimagenes-01bis-low.png';
import svg1 from '../assets/images/logosyvectores-01oro.svg';
import svgLogoLocaEs from '../assets/images/logosyvectores-02.svg';
import svgLogoLocaEn from '../assets/images/logosyvectores-02-eng.svg';
import svgLogoLocaIt from '../assets/images/logosyvectores-02-ita.svg';
import svg3 from '../assets/images/logosyvectores-05.svg';
import svg4 from '../assets/images/logosyvectores-06.svg';
import svgLogoEs from '../assets/images/logosyvectores-03.svg'; 
import svgLogoEn from '../assets/images/logosyvectores-03_eng.svg'; 
import svgLogoIt from '../assets/images/logosyvectores-03_ita.svg'; 
// import svgTicketeraEs from '../assets/images/ticketera-esp.svg'; 
// import svgTicketeraEn from '../assets/images/ticketera-eng.svg'; 
// import svgTicketeraIt from '../assets/images/ticketera-ita.svg';
import pupi from '../assets/images/logosyvectores-04.svg';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';
// import { motion } from 'framer-motion';

const Section1: React.FC = () => {
  const { i18n } = useTranslation();
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = img1;
    img.onload = () => setBackgroundLoaded(true);
  }, []);

  const getSvgLogoLoca = () => {
    switch (i18n.language) {
      case 'en':
        return svgLogoLocaEn;
      case 'it':
        return svgLogoLocaIt;
      case 'es':
      default:
        return svgLogoLocaEs;
    }
  };
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
    <section className="w-full py-3 static z-1 sm:min-h-[115vh] sm:py-0 h-full bg-cover flex justify-center items-center" 
    style={{ backgroundImage: `url(${backgroundLoaded ? img1 : img1Low})`,
     backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain' }}>
      <div className="flex flex-row flex-wrap w-[100%] h-full">
      <div className="absolute top-15 right-3 sm:top-20 sm:right-10 z-50">
        <LanguageSelector />
      </div>
        
        {/* Parte izquierda */}
        <div className="w-1/2 flex flex-col p-[5%] relative space-y-2 sm:space-y-1 items-start h-full">
          {/* SVG 1 y SVG 2 al lado izquierdo */}
          <div className="flex flex-col">
            <img src={getSvgLogoLoca()} alt="SVG 2" className="w-15 mb-2 sm:mb-5 sm:w-55 h-auto" />
            <img src={svg1} alt="Imagen pequeña 1" className="w-5 sm:w-20 h-auto" />
          </div>

          {/* Estrellas */}
          <div className="flex flex-col items-start space-y-6 sm:space-y-2 mt-8 sm:mt-110">
            <img src={svg3} alt="SVG 3" className="absolute w-6 sm:w-20 h-auto left-[20%] top-[70%] sm:left-[22%] sm:top-[42%]" />
            <img src={svg4} alt="SVG 4" className="absolute w-6 sm:w-20 h-auto left-[5%] top-[95%] sm:right-[25%] sm:top-[55%]" />
            
           
          </div>
        </div>

        {/* Parte derecha */}
        <div className="w-full sm:w-1/2 flex p-[5%] flex-col space-y-2 relative items-end h-full">
          <img src={getSvgLogoByLanguage()} alt="Logo" className="hidden sm:block sm:w-[70%] sm:mr-10 h-auto" />
          <img src={pupi} alt="Logo" className="w-12 sm:w-35 h-auto -mt-5 mb-10 sm:mt-0 sm:mb-0 sm:mr-10 sm:pt-12 transition duration-300 ease-in-out  hover:scale-101" />
          
          {/* Estrellas */}
          <div className="flex flex-row space-y-1 sm:space-y-0 mt-8 sm:mt-60 items-start">
            <img src={svg3} alt="SVG 3" className="absolute w-7 sm:w-20 h-auto right-[45%] top-[70%] sm:right-[45%] sm:top-[70%]" />
            <img src={svg4} alt="SVG 4" className="absolute w-7 sm:w-20 h-auto right-[5%] top-[90%] sm:right-[15%] sm:top-[80%]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
