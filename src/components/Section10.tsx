import React from 'react';
import star from '../assets/images/logosyvectores-05.svg';

const Section10: React.FC = () => {
  return (
    <section className="relative h-full w-full flex flex-col sm:flex-row justify-between items-start sm:pb-20 pt-16 bg-[#111C46] text-white">
      {/* Imágenes superpuestas en el centro */}
      <div className="absolute sm:h-1/2 sm:left-1/2 left-75 top-65 rotate-45 sm:rotate-0 top-65 sm:top-[52%] transform -translate-x-1/2 flex sm:flex-col space-y-2">
        <img src={star} alt="Imagen 1" className="w-8 sm:w-16 sm:w-27 animate-fade" />
        <img src={star} alt="Imagen 2" className="w-8 sm:w-16 sm:w-27 animate-fade" />
        <img src={star} alt="Imagen 3" className="w-8 sm:w-16 sm:w-27 animate-fade" />
      </div>

      {/* Contenido lado izquierdo dividido en dos partes */}
      <div className="w-full sm:w-1/2 sm:px-20 text-left font-poppins flex flex-col justify-start h-full">
        <div className="w-[90%] ml-[5%] sm-ml-0 justify-center sm:w-full sm:h-1/2 flex flex-col sm:justify-start">
          <h2 className="text-[3rem] ml-10 sm:ml-0 sm:text-[5rem] font-bold leading-tight">Propósito</h2>
          <h2 className="text-[2rem] ml-35 sm:ml-40 mt-[-1rem] sm:mt-[-1.5rem] sm:text-[3.5rem] font-bold leading-tight">de la cena</h2>
          <p className="mt-2 sm:mt-4 sm:mt-10  text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
            Las cenas a beneficio de la Fundación PUPI tienen un objetivo claro: 
            recaudar fondos para seguir ayudando a niños y adolescentes en situación de vulnerabilidad.
          </p>
        </div>
        <div className="w-[90%] ml-[5%] sm:w-full mt-4 sm:mt-14 sm:h-1/2 flex flex-col justify-start">
          <h2 className="text-[3rem] ml-10 sm:text-3xl sm:text-[5rem] font-bold leading-tight">Cómo</h2>
          <h2 className="text-[2rem] ml-25 mt-[-1rem] sm:text-3xl sm:ml-28 sm:mt-[-1.5rem] sm:text-[3.5rem] font-bold leading-tight">participar</h2>
          <p className="mt-2 sm:mt-4 sm:mt-10 text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
            Para sumarse a esta causa solidaria, los interesados podrán adquirir sus entradas 
            a través de la plataforma de venta de entradas ticketmaster. Las entradas estarán disponibles 
            en diferentes categorías, adaptadas a las preferencias de cada participante.
          </p>
        </div>
      </div>

      {/* Contenido lado derecho */}
      <div className="w-[90%] ml-[5%] sm:w-1/2 sm:px-20 text-left font-poppins mt-10 sm:mt-0">
        <p className="text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
          Cada aporte permite continuar con los programas que buscan
          mejorar su calidad de vida y ofrecerles oportunidades que
          hagan la diferencia.
        </p>
        <p className="mt-4 text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
          Estas noches especiales aprovechan el poder del fútbol como
          motor de cambio, uniendo a exjugadores y aficionados en un
          evento lleno de solidaridad.
        </p>
        <p className="mt-4 text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
          Participar no solo ayuda a recaudar fondos, sino también a
          generar conciencia sobre la importancia de construir un futuro
          más justo para quienes más lo necesitan.
        </p>
        <h3 className="mt-4 sm:mt-8 text-[1.1rem] sm:text-xl font-bold">Entrada General</h3>
        <p className="text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
          Incluye acceso a la cena y participación en todas las actividades programadas.
        </p>
        <h3 className="mt-4 sm:mt-8 text-[1.1rem] sm:text-xl font-bold">Entrada VIP</h3>
        <p className="text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
          Con acceso exclusivo a los invitados especiales, permitiendo
          interactuar personalmente con exjugadores de fútbol y disfrutar de beneficios adicionales.
        </p>
        <h3 className="mt-4 sm:mt-8 text-[1.1rem] sm:text-xl font-bold">Mesa Corporativa</h3>
        <p className="text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
          Ideal para empresas y grupos, con una mesa reservada y
          reconocimiento especial durante el evento.
        </p>
      </div>

      {/* Estilos personalizados */}
      <style>
        {`
          @keyframes fade {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          .animate-fade {
            animation: fade 2s infinite ease-in-out;
          }
        `}
      </style>
    </section>
  );
};

export default Section10;
