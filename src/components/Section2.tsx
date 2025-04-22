import React from 'react';
import { useTranslation } from 'react-i18next';
import svgLogoEs from '../assets/images/logosyvectores-03.svg'; 
import svgLogoEn from '../assets/images/logosyvectores-03_eng.svg'; 
import svgLogoIt from '../assets/images/logosyvectores-03_ita.svg'; 
import i18n from '../i18n';
import { motion } from 'framer-motion';

const Section2: React.FC = () => {
  const { t } = useTranslation();

  const getSvgLogoByLanguage = () => {
    switch (i18n.language) {
      case 'en':
        return svgLogoEn;
      case 'it':
        return svgLogoIt;
      case 'es':
      default:
        return svgLogoEs;
    }
  };
 
  return (
    <section className="w-full pt-5 sm:mt-10 sm:py-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between">
      
    {/* Parte izquierda con el logo animado */}
    <motion.div
      className="w-full sm:w-1/2 flex justify-center items-center"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <motion.img
        src={getSvgLogoByLanguage()}
        alt="Logo"
        className="w-1/3 mb-5 sm:mb-0 sm:w-[40%]"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>

    {/* Parte derecha con el texto animado */}
    <motion.div
      className="w-full sm:w-1/2 sm:w-[50%] flex justify-center items-center text-left"
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <p className="text-[#121C47] text-[0.9rem] sm:text-[1.2rem] font-poppins font-semibold leading-[1.2] text-left whitespace-pre-line w-5/6">
        {t('section2_text')}
      </p>
    </motion.div>
  </section>
  );
}

export default Section2;
