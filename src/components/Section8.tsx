import React from 'react';
import mainImage from '../assets/images/pngfondosimagenes-43.png';
// import mainImage from '../assets/images/pngfondosimagenes-08.png';
// import { playersData } from '../data/playersData';
// import { useTranslation } from 'react-i18next';
// import { motion } from 'framer-motion';

const Section8: React.FC = () => {
//   const { t } = useTranslation();

//   // Definimos las variantes para las animaciones
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//     },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, scale: 0.8, y: 30 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     y: 0,
//     transition: { duration: 0.5, ease: 'easeOut' },
//   },
// };

  return (
    <section className="w-full  flex flex-col items-center py-2 sm:py-10 sm:px-5">
      {/* Contenedor principal dividido en dos */}
      <div className="w-full relative flex flex-row sm:flex-row items-center justify-between mb-10">
        {/* Título en columna */}
        {/* <div className="w-full  flex flex-col pl-10 items-start leading-tight font-bold text-[#0c0c6c]">
        <p className="ml-0 sm:ml-5 text-[2rem] sm:text-[5rem]">{t('section8_title_line1')}</p>
        <p className="ml-5 sm:ml-20 text-[1.4rem] sm:text-[3rem] mt-[-0.6rem] sm:mt-[-1rem]">{t('section8_title_line2')}</p>
        <p className="ml-8 sm:ml-40 text-[1.5rem] sm:text-[3.5rem] mt-[-0.6rem] sm:mt-[-1rem]">{t('section8_title_line3')}</p>
        </div> */}

        {/* Imagen */}
        {/* <div className="absolute right-[-7%] sm:right-[-1.2%] w-1/2 flex justify-center"> */}
          {/* <img src={mainImage} alt="Main" className="w-full " /> */}
        {/* </div> */}

        <img src={mainImage} alt="Main" className="w-full " />
      </div>

      {/* Grid de Cards */}
      {/* <motion.div
  className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 w-full max-w-[1200px]"
  variants={containerVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
>
  {playersData.map((player, index) => (
    <motion.div
      key={index}
      className="flex flex-col items-center text-center cursor-pointer"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={player.image}
        alt={player.name}
        className="w-15 h-15 sm:w-25 sm:h-25 object-cover rounded-full shadow-lg"
      />
      <p className="text-[#0E1373] text-center mt-2 font-bold text-[0.9rem] sm:text-lg">
        {player.name}
      </p>
      <p className="text-[#0E1373] text-center text-[0.8rem]">{player.country}</p>
      {player.teams && (
        <p className="text-[#0E1373] text-center text-[0.7rem]">({player.teams})</p>
      )}
    </motion.div>
  ))}
</motion.div> */}
    </section>
  );
};

export default Section8;
