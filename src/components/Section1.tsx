import React from 'react';
import img1 from '../assets/images/pngfondosimagenes-01bis.png';
import svg1 from '../assets/images/logosyvectores-01.svg';
import svg2 from '../assets/images/logosyvectores-02.svg';
import svg3 from '../assets/images/logosyvectores-05.svg';
import svg4 from '../assets/images/logosyvectores-06.svg';
import svgLogo2 from '../assets/images/logosyvectores-03.svg';
import pupi from '../assets/images/logosyvectores-04.svg';

const Section1: React.FC = () => {
  return (
    <section className="w-full h-auto bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: `url(${img1})`, backgroundRepeat: 'no-repeat',backgroundSize: 'cover'}}>
      <div className="flex flex-row flex-wrap  w-[100%]  h-full">
        {/* Parte izquierda */}
        <div className="w-1/2 flex flex-col p-[5%] relative space-y-2 sm:space-y-8 items-start h-full ">
          {/* SVG 1 y SVG 2 al lado izquierdo */}
          <div className="flex flex-row">
            <img src={svg1} alt="Imagen pequeña 1" className="w-7 sm:w-20 h-auto" />
            <img src={svg2} alt="SVG 2" className="w-15 sm:w-50 h-auto" />
          </div>
          
          {/* estrellas*/}
          <div className="flex flex-col items-start space-y-6 sm:space-y-2 mt-8 sm:mt-110">
          <img src={svg3} alt="SVG 3" className="absolute w-7 sm:w-20 h-auto left-[15%] top-[80%] sm:right-[25%] sm:top-[45%]" />
          <img src={svg4} alt="SVG 4" className="absolute w-7 sm:w-20 h-auto left-[5%] top-[105%] sm:right-[25%] sm:top-[60%]" />
          </div>
        </div>

        {/* Parte derecha */}
        <div className="w-1/2 flex p-[5%] flex-col space-y-2 relative items-end h-full">
          <img src={svgLogo2} alt="Logo" className="w-28 sm:w-95 h-auto" />
          <img src={pupi} alt="Logo" className="w-12 sm:w-30 h-auto sm:mt-0 " />
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
