import React from 'react';
import mainImage from '../assets/images/pngfondosimagenes-03.png';
import sideImage from '../assets/images/pngfondosimagenes-04.png';
import svg3 from '../assets/images/logosyvectores-05.svg';
import { useTranslation } from 'react-i18next';

const Section4: React.FC = () => {
  const { t } = useTranslation();
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
        <p className="font-extrabold sm:text-[1.1rem] mb-4">{t('section4_paragraph_1')}</p>
          <p className="font-extrabold sm:text-[1.1rem] mb-4 leading-tight">{t('section4_paragraph_2')}</p>
          <p className="leading-tight mb-4">{t('section4_paragraph_3')}</p>
          <p className="leading-tight mb-4">{t('section4_paragraph_4')}</p>
          <p className="leading-tight mb-4">{t('section4_paragraph_5')}</p>
          <p className="leading-tight">{t('section4_paragraph_6')}</p>
        </div>

        {/* Sección derecha */}
        <div className="w-[100%] sm:w-[50%] p-[5%] flex flex-col items-center sm:items-end relative mt-5 sm:-mt-45">
          <img src={sideImage} alt="Javier Zanetti" className="w-[80%] sm:w-[90%] h-auto -mt-12 sm:-mt-5" />
          <img src={svg3} alt="SVG 3" className="absolute w-7 sm:w-20 h-auto left-[15%] top-[5%] sm:left-[85%] sm:top-[35%]" />
          <img src={svg3} alt="SVG 3" className="absolute w-7 sm:w-20 h-auto left-[80%] top-[20%] sm:left-[72%] sm:top-[20%]" />
          <p className="text-[#121C47] text-[0.8rem] sm:text-[1.1rem] font-poppins font-medium sm:text-base leading-tight text-center sm:text-left mt-6">
          {t('section4_paragraph_7')}
          </p>
          <p className="text-[#121C47] text-[0.8rem] sm:text-[1.1rem] font-poppins font-medium sm:text-base leading-tight text-center sm:text-left mt-4">
          {t('section4_paragraph_8')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section4;
