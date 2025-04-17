import React from 'react';
import img1 from '../assets/images/pngfondosimagenes-01bis.png';
import svg1 from '../assets/images/logosyvectores-01.svg';
import svg2 from '../assets/images/logosyvectores-02.svg';
import svg3 from '../assets/images/logosyvectores-05.svg';
import svg4 from '../assets/images/logosyvectores-06.svg';
import svgLogoEs from '../assets/images/logosyvectores-03.svg'; 
import svgLogoEn from '../assets/images/logosyvectores-03_eng.svg'; 
import svgLogoIt from '../assets/images/logosyvectores-03_ita.svg'; 
import pupi from '../assets/images/logosyvectores-04.svg';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSelector';

const Section1: React.FC = () => {
  const { i18n } = useTranslation();




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
    <section className="w-full py-3 static z-1 sm:min-h-[115vh] sm:py-0 h-full bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${img1})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
      <div className="flex flex-row flex-wrap  w-[100%]  h-full">
      <LanguageSelector />
        {/* Parte izquierda */}
        <div className="w-1/2 flex flex-col p-[5%] relative space-y-2 sm:space-y-8 items-start h-full ">
          {/* SVG 1 y SVG 2 al lado izquierdo */}
          <div className="flex flex-row">
            <img src={svg1} alt="Imagen pequeña 1" className="w-5 sm:w-15 h-auto" />
            <img src={svg2} alt="SVG 2" className="w-15 ml-2 sm:ml-5 sm:w-55 h-auto" />
          </div>
          
          {/* estrellas*/}
          <div className="flex flex-col items-start space-y-6 sm:space-y-2 mt-8 sm:mt-110">
          <img src={svg3} alt="SVG 3" className="absolute w-6 sm:w-20 h-auto left-[15%] top-[80%] sm:right-[25%] sm:top-[45%]" />
          <img src={svg4} alt="SVG 4" className="absolute w-6 sm:w-20 h-auto left-[3%] top-[125%] sm:right-[25%] sm:top-[60%]" />
          </div>
        </div>

        {/* Parte derecha */}
        <div className="w-1/2 flex p-[5%] flex-col space-y-2 relative items-end h-full">
          <img src={getSvgLogoByLanguage()}  alt="Logo" className="w-28 sm:w-80 mr-10 h-auto" />
          <img src={pupi} alt="Logo" className="w-12 sm:w-30 h-auto sm:pt-10 " />
          {/* estrellas*/}
          <div className="flex flex-row space-y-1 sm:space-y-0 mt-8 sm:mt-60 items-start">
            <img src={svg3} alt="SVG 3" className="absolute w-7 sm:w-20 h-auto right-[45%] top-[85%] sm:right-[40%] sm:top-[80%]" />
            <img src={svg4} alt="SVG 4" className="absolute w-7 sm:w-20 h-auto right-[5%] top-[90%] sm:right-[15%] sm:top-[90%]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;
