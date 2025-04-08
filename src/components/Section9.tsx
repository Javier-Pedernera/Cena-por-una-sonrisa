import React from 'react';
import star1 from '../assets/images/logosyvectores-05.svg';
import star2 from '../assets/images/logosyvectores-06.svg';
import backgroundImage from '../assets/images/pngfondosimagenes-38_up.png';

const Section9: React.FC = () => {
  return (
    <section
      className="relative w-full min-h-[30vh] h-full sm:min-h-[70vh] bg-cover bg-top bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Contenido centrado */}
      <div className="relative z-10 text-center px-4 max-w-xl">
      
      </div>
      {/* Estrella 1 */}
      <img
        src={star1}
        alt="Estrella 1"
        className="absolute w-12 sm:w-25 top-2 right-12 sm:top-10 sm:right-60 animate-twinkle"
      />

      {/* Estrella 2 */}
      <img
        src={star2}
        alt="Estrella 2"
        className="absolute w-12 sm:w-25 top-22 right-24 sm:top-30 sm:right-100 animate-twinkle"
      />

      {/* Animación titileo */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.4; }
          }
          .animate-twinkle {
            animation: twinkle 1.5s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Section9;
