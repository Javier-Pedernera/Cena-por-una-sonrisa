import React from 'react';
import mainImage from '../assets/images/pngfondosimagenes-03.png';
import sideImage from '../assets/images/pngfondosimagenes-04.png';
import svg3 from '../assets/images/logosyvectores-05.svg';

const Section4: React.FC = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center">
      {/* Imagen principal */}
      <div className="w-full">
        <img src={mainImage} alt="Fundación PUPI" className="w-full h-auto" />
      </div>

      {/* Contenido debajo de la imagen */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center p-6 sm:p-12">
        {/* Sección izquierda */}
        <div className="w-[100%] text-left text-[#121C47] sm:w-[50%] p-[5%] text-[0.8rem] sm:text-[1.1rem] font-poppins font-medium text-sm sm:text-base leading-tight">
          <p className="font-extrabold sm:text-[1.1rem] mb-4">La Fundación PUPI, creada en el año 2001 por el exfutbolista argentino Javier Zanetti y su esposa Paula, nació con el firme propósito de brindar apoyo y asistencia a niños y adolescentes en situaciones de vulnerabilidad social.</p>
          <p className="font-extrabold sm:text-[1.1rem] mb-4 leading-tight">Motivados por la profunda convicción de que todos los niños merecen las mismas oportunidades, Javier y Paula decidieron fundar esta organización tras haber vivido de cerca las dificultades que enfrentan muchas familias en contextos desfavorecidos.</p>
          <p className="leading-tight mb-4">El nombre "PUPI" proviene del apodo con el que Zanetti es conocido en el mundo del fútbol, y a su vez representa las siglas de "Por un Piberío Integrado". Este nombre refleja el compromiso central de la fundación: trabajar por la inclusión y el desarrollo integral de los niños, asegurando que puedan acceder a una vida digna y a un futuro lleno de oportunidades.</p>
          <p className="leading-tight mb-4">A lo largo de más de dos décadas de trabajo, la Fundación PUPI ha desarrollado un modelo de intervención integral, donde no solo se atienden las necesidades básicas de los niños, sino que se abordan aspectos fundamentales para su crecimiento, como la educación, la salud, la alimentación y el desarrollo social y emocional.</p>
          <p className="leading-tight mb-4">El objetivo principal es mejorar la calidad de vida de los niños y adolescentes de barrios carenciados, ofreciendo herramientas que les permitan romper el ciclo de pobreza y exclusión.</p>
          <p className="leading-tight">Entre sus programas más destacados se encuentran el apoyo escolar, actividades deportivas, talleres culturales y programas de nutrición y salud. Estos espacios no solo fortalecen el aprendizaje y el desarrollo de habilidades, sino que también fomentan la construcción de valores como el respeto, la solidaridad y el trabajo en equipo.</p>
        </div>

        {/* Sección derecha */}
        <div className="w-[100%] sm:w-[50%] p-[5%] flex flex-col items-center sm:items-end relative mt-5 sm:-mt-45">
          <img src={sideImage} alt="Javier Zanetti" className="w-[80%] sm:w-[90%] h-auto -mt-12 sm:-mt-5" />
          <img src={svg3} alt="SVG 3" className="absolute w-7 sm:w-20 h-auto left-[15%] top-[5%] sm:left-[85%] sm:top-[35%]" />
          <img src={svg3} alt="SVG 3" className="absolute w-7 sm:w-20 h-auto left-[80%] top-[20%] sm:left-[72%] sm:top-[20%]" />
          <p className="text-[#121C47] text-[0.8rem] sm:text-[1.1rem] font-poppins font-medium sm:text-base leading-tight text-center sm:text-left mt-6">
            Con sede en la localidad de Banfield, en la provincia de Buenos Aires, la Fundación PUPI ha logrado un impacto positivo en miles de familias, brindando esperanza y mejores oportunidades a los más vulnerables.
          </p>
          <p className="text-[#121C47] text-[0.8rem] sm:text-[1.1rem] font-poppins font-medium sm:text-base leading-tight text-center sm:text-left mt-4">
            El trabajo constante y comprometido de Javier Zanetti, su equipo, y los colaboradores que apoyan esta causa, ha consolidado a la fundación como una referencia en el ámbito de la filantropía en Argentina y el mundo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
