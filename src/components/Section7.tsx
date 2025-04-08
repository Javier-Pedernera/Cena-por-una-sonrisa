import React from 'react';
import mainImage from '../assets/images/pngfondosimagenes-07.png';
import overlayImage1 from '../assets/images/logosyvectores-05.svg';
import overlayImage2 from '../assets/images/logosyvectores-06.svg';
import { useTranslation } from 'react-i18next';

const Section7: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full flex items-center flex-col sm:flex-row">
      {/* Lado Izquierdo - Imágenes */}
      <div className="w-full sm:w-1/2 relative  sm:h-full">
        <img src={mainImage} alt="Fondo" className="w-full sm:w-[100%] h-full object-cover" />
        <img 
          src={overlayImage1} 
          alt="Imagen 1" 
          className="absolute top-10 left-[10%] sm:left-[40%] w-20 sm:w-30"
        />
        <img 
          src={overlayImage2} 
          alt="Imagen 2" 
          className="absolute bottom-10 left-[62%] sm:left-[60%] w-20 sm:w-30"
        />
      </div>

      {/* Lado Derecho - Texto */}
      <div className="w-full sm:w-1/2 bg-white p-6 sm:p-12 flex items-center">
        <p className="text-[#0E1373] text-left sm:w-[80%] text-[0.8rem] sm:text-[1.2rem] font-bold whitespace-pre-line">
          {t('section7_text')}
        </p>
      </div>
    </section>
  );
};

export default Section7;
