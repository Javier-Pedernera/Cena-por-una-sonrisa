import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-40.png';
import star1 from '../assets/images/logosyvectores-03.svg';
import star2 from '../assets/images/logosyvectores-04.svg';
import instagramIcon from '../assets/images/logosyvectores-10.svg';
import facebookIcon from '../assets/images/logosyvectores-11.svg';
import whatsappIcon from '../assets/images/logosyvectores-12.svg';

const Section13: React.FC = () => {
  return (
    <section 
      className="relative w-full flex flex-col sm:flex-row py-4 sm:py-10 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat' }}
    >
      {/* Lado Izquierdo */}
      <div className="w-full sm:w-1/2 flex flex-col justify-center px-8 py-10 sm:px-20 text-left font-poppins">
        <h2 className="text-4xl sm:text-6xl font-bold">Gracias!</h2>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="text-[0.6rem] sm:text-[1.1rem]">
            <h3 className="text-xl font-semibold">Contacto</h3>
            <p>www.loca-agency.com</p>
            <p>Buenos Aires | Argentina</p>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6 mr-2" />
                <span>@lo.casas</span>
              </div>
              <div className="flex items-center">
                <img src={facebookIcon} alt="Facebook" className="w-6 h-6 mr-2" />
                <span>/LoCaimagenyeventos</span>
              </div>
              <div className="flex items-center">
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 mr-2" />
                <span>+1 305 677 3928 🇺🇸</span>
              </div>
              <div className="flex items-center">
                <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 mr-2" />
                <span>+54 9 11 5032 5546 🇦🇷</span>
              </div>
            </div>
          </div>
          <div>
            <p className="text-[0.8rem] sm:text-[1.1rem]">Lorena Cataldo</p>
            <p className="text-[0.6rem] sm:text-[0.9rem] opacity-90">lorenacataldo@loca-agency.com</p>
            <p className="text-[0.8rem] sm:text-[1.1rem] mt-3">Juan Ignacio Moreno</p>
            <p className="text-[0.6rem] sm:text-[0.9rem] opacity-90">jim@loca-agency.com</p>
            <p className="text-[0.8rem] sm:text-[1.1rem] mt-3">Martin Bode</p>
            <p className="text-[0.6rem] sm:text-[0.9rem] opacity-90">mbode@534ent.com</p>
            <p className="text-[0.8rem] sm:text-[1.1rem] mt-3">Diego Barassi</p>
            <p className="text-[0.6rem] sm:text-[0.9rem] opacity-90">dbarassi@534ent.com</p>
          </div>
        </div>
      </div>

      {/* Lado Derecho */}
      <div className="w-full mb-5 sm:mb-10 sm:w-1/2 relative flex justify-center items-center">
        {/* Imagen superior izquierda */}
        <img src={star1} alt="Imagen adicional 1" className="absolute sm:bottom-0 left-20 sm:left-30 w-16 sm:w-24" />
        {/* Imagen inferior derecha */}
        <img src={star2} alt="Imagen adicional 2" className="absolute sm:bottom-0 left-50 sm:left-0 w-16 sm:w-24" />
      </div>
    </section>
  );
};

export default Section13;
