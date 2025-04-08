import React from 'react';
import logo from '../assets/images/logosyvectores-03.svg';
import { useTranslation } from 'react-i18next';

const Section2: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full py-20 flex flex-col sm:flex-row items-center justify-center py-10">
      {/* Parte izquierda con el logo */}
      <div className="w-full sm:w-[40%] flex justify-center items-center">
        <img src={logo} alt="Logo" className="w-1/3 mb-5 sm:mb-0 sm:w-2/3" />
      </div>

      {/* Parte derecha con el texto */}
      <div className="w-full sm:w-[50%] flex justify-center items-center text-left">
        <p className="text-[#121C47] text-[0.9rem] sm:text-[1.2rem] font-poppins font-semibold leading-[1.2] text-left whitespace-pre-line w-5/6">
        {t('section2_text')}
        </p>
      </div>
    </section>
  );
}

export default Section2;
