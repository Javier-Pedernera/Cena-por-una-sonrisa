import React from 'react';
import star from '../assets/images/logosyvectores-05.svg';
import { useTranslation } from 'react-i18next';

const Section10: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="relative h-full w-full flex flex-col sm:flex-row justify-between items-start sm:pb-20 pt-16 bg-[#111C46] text-white">
      {/* Imágenes superpuestas en el centro */}
      <div className="absolute sm:h-1/2 z-10 sm:left-1/2 left-75 top-70 rotate-25 sm:rotate-0 top-65 sm:top-[52%] transform -translate-x-1/2 flex sm:flex-col space-y-2">
        <img src={star} alt="Imagen 1" className="w-8 ml-2 sm:ml-0 sm:w-16 sm:w-27 animate-fade" />
        <img src={star} alt="Imagen 2" className="w-8 ml-2 sm:ml-0 sm:w-16 sm:w-27 animate-fade" />
        <img src={star} alt="Imagen 3" className="w-8 ml-2 sm:ml-0 sm:w-16 sm:w-27 animate-fade" />
      </div>

      {/* Contenido lado izquierdo dividido en dos partes */}
      <div className="w-full sm:w-1/2 sm:px-20 text-left font-poppins flex flex-col justify-start h-full">
        <div className="w-[90%] ml-[5%] mb-5 sm-ml-0 justify-center sm:w-full sm:h-1/2 flex flex-col sm:justify-start">
          <h2 className="text-[3rem] ml-1 sm:ml-0 sm:text-[5rem] font-bold leading-tight">{t('section10_title1')}</h2>
          <h2 className="text-[2rem] ml-25 sm:ml-40 mt-[-1rem] sm:mt-[-1.5rem] sm:text-[3.5rem] font-bold leading-tight">{t('section10_title2')}</h2>
          <p className="mt-2 sm:mt-4 sm:mt-10  text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
          {t('section10_text1')}
          </p>
        </div>
        <div className="w-[90%] ml-[5%] sm:w-full mt-4 sm:mt-14 sm:h-1/2 flex flex-col justify-start">
          <h2 className="text-[3rem] ml-0 sm:text-3xl sm:text-[5rem] font-bold leading-tight">{t('section10_title3')}</h2>
          <h2 className="text-[2rem] ml-17 mt-[-1rem] sm:text-3xl sm:ml-28 sm:mt-[-1.5rem] sm:text-[3.5rem] font-bold leading-tight">{t('section10_title4')}</h2>
          <p className="mt-2 sm:mt-4 sm:mt-10 text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
          {t('section10_text2')}
          </p>
        </div>
      </div>

      {/* Contenido lado derecho */}
      <div className="w-[90%] ml-[5%] sm:w-1/2 sm:px-20 text-left font-poppins mt-10 sm:mt-0">
        <p className="text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
        {t('section10_text3')}
        </p>
        <p className="mt-4 text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
        {t('section10_text4')}
        </p>
        <p className="mt-4 text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
        {t('section10_text5')}
        </p>
        <h3 className="mt-4 sm:mt-8 text-[1.1rem] sm:text-xl font-bold">{t('section10_general')}</h3>
        <p className="text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
          {t('section10_general_text')}
        </p>
        <h3 className="mt-4 sm:mt-8 text-[1.1rem] sm:text-xl font-bold">{t('section10_vip')}</h3>
        <p className="text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
        {t('section10_vip_text')}
        </p>
        <h3 className="mt-4 sm:mt-8 text-[1.1rem] sm:text-xl font-bold">{t('section10_corp')}</h3>
        <p className="text-[0.8rem] sm:text-[0.9rem] leading-relaxed">
        {t('section10_corp_text')}
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
