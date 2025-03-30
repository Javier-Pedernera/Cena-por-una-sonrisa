import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-05.png';
import svg3 from '../assets/images/logosyvectores-05.svg';
import svg4 from '../assets/images/logosyvectores-06.svg';

const Section5: React.FC = () => {
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
              Objetivos
            </p>
            <p className="absolute top-[65%] left-[17%] text-white p-1 text-[1.1rem] sm:text-[3.5rem] font-poppins font-bold leading-tight text-left">
              de las cenas
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
          <p className="p-[5%] text-white opacity-70 text-[0.35rem] sm:pl-[7%] sm:pr-[15%] sm:text-[1.1rem] font-poppins font-medium leading-tight text-left">
            Además de la recaudación de fondos, estas cenas ofrecerán a los asistentes una experiencia única, con la participación de exfutbolistas reconocidos mundialmente.<br />
            La oportunidad de compartir una velada exclusiva con figuras emblemáticas del fútbol hará que el evento sea inolvidable, creando un ambiente de camaradería y apoyo a la causa.<br /><br />
            Al asistir a estas cenas, los invitados no solo disfrutarán de una noche especial, sino que también estarán contribuyendo directamente al trabajo de la Fundación PUPI, ayudando a mejorar la vida de cientos de niños y sus familias.
          </p>
        </div> 
      </div>
    </section>
  );
};

export default Section5;
