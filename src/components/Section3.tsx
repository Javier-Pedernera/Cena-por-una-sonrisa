import React from 'react';
import backgroundImage from '../assets/images/pngfondosimagenes-02.png';
import { useTranslation } from 'react-i18next';

const Section3: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full bg-white flex items-center justify-center">
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
      <div className="absolute top-10 left-50 sm:top-[45%] sm:left-[55%]  w-[50%] sm:w-[35%]">
        <p className="text-white text-[0.5rem] mt-4 sm:mt-0 p-3 sm:p-1 sm:text-[1.2rem] font-poppins font-bold  text-left">
        {t('section3_text')}
        </p>
      </div>
    
    </section>
  );
};

export default Section3;
