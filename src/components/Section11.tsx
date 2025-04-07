import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-38_foot-recortada.png';
import centeredImage from '../assets/images/logosyvectores-09.svg';

const Section11: React.FC = () => {
  return (
    <section 
      className="relative w-full flex flex-col sm:flex-row sm:justify-between items-center text-[#111C46]  sm:min-h-[500px] sm:min-h-75 bg-contain sm:bg-contain bg-top bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Imagen centrada en mobile */}
      <div className="block sm:hidden absolute top-5 left-[65%]">
        <img src={centeredImage} alt="Imagen destacada" className="w-25 mx-auto" />
      </div>

      {/* Contenido izquierdo */}
      <div className="w-full sm:w-1/2 px-4 sm:px-20 text-left font-bold font-poppins flex flex-col justify-center">
        <p className="text-sm sm:text-[1.2rem] pb-10 sm:pb-0 pt-20 sm:pt-[20%] leading-relaxed text-center sm:text-left">
          Al participar, los asistentes no solo vivirán una experiencia inolvidable, sino que también contribuirán directamente
          al trabajo de la Fundación PUPI, ayudando a transformar la vida de cientos de niños y familias.
        </p>
      </div>

      {/* Imagen posicionada en desktop */}
      <div className="hidden sm:block absolute top-8 left-[55%]">
        <img src={centeredImage} alt="Imagen destacada" className="w-40 sm:w-54" />
      </div>
    </section>
  );
};

export default Section11;
