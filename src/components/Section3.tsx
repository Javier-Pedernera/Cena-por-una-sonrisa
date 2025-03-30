import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-02.png';

const Section3: React.FC = () => {
  return (
    <section className="relative w-full bg-white flex items-center justify-center">
      {/* Contenedor con la imagen de fondo */}
      <div
        className="w-full h-[15vh] sm:h-[40vh] relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Texto en posición absoluta */}
      <div className="absolute top-10 left-42 sm:top-[45%] sm:left-[55%]  w-[50%] sm:w-[35%]">
        <p className="text-white text-[0.5rem] p-1 sm:text-[1.2rem] font-poppins font-bold  text-left">
          Cada noche en la que, además de disfrutar de una experiencia única, los asistentes tienen la oportunidad de ser parte de un cambio positivo en la vida de quienes más lo necesitan.
        </p>
      </div>
    
    </section>
  );
};

export default Section3;
