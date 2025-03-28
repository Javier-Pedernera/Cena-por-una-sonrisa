import React from 'react';

// Importa las imágenes
import img1 from '../assets/images/pngfondosimagenes-01.png';
import svg1 from '../assets/images/logosyvectores-01.svg';
import svg2 from '../assets/images/logosyvectores-02.svg';
import svg3 from '../assets/images/logosyvectores-05.svg';
import svgLogo2 from '../assets/images/logosyvectores-03.svg';

const Section1: React.FC = () => {
  return (
    <section className="w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img1})` }}>
      <div className="flex flex-col sm:flex-row px-[1%] py-[1%] space-y-4 sm:space-y-0 justify-between">
        {/* Parte izquierda */}
        <div className="w-full sm:w-1/2 flex flex-col sm:space-x-4 space-y-4 sm:space-y-0">
          {/* SVG 1 y SVG 2 al lado izquierdo */}
          <div className="flex flex-row">
            <img src={svg1} alt="Imagen pequeña 1" className="w-30 h-30" />
            <img src={svg2} alt="SVG 2" className="w-60 h-60" />
          </div>
          
          {/* SVG 3 y otro SVG 3 abajo */}
          <div className="flex flex-col space-y-8 mt-20">
            <img src={svg3} alt="SVG 3" className="w-25 h-25 ml-20" /> 
            <img src={svg3} alt="SVG 3" className="w-25 h-25 mr-30" /> 
          </div>
        </div>

        {/* Parte derecha */}
        <div className="w-full sm:w-1/2 flex flex-col space-y-8 ">
          <img src={svgLogo2} alt="Logo" className="w-80 h-80 self-end" />
          
          {/* Los SVG 3 más abajo en la parte derecha */}
          <div className="flex flex-col space-y-8 mt-50">
            <img src={svg3} alt="SVG 3" className="w-25 h-25 self-end mr-30" />
            <img src={svg3} alt="SVG 3" className="w-25 h-25 self-end" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section1;

