import React from 'react';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import Section7 from '../components/Section7';
import Section8 from '../components/Section8';
import Section9 from '../components/Section9';
import Section10 from '../components/Section10';
import Section11 from '../components/Section11';
import Section1 from '../components/Section1';
import Section12 from '../components/Section12';
import Section13 from '../components/Section13';
import svgTicketeraEs from '../assets/images/ticketera-2-esp.svg'; 
import svgTicketeraEn from '../assets/images/ticketera-2-eng.svg'; 
import svgTicketeraIt from '../assets/images/ticketera-2-ita.svg';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
const { i18n } = useTranslation();

  const getSvgTicketeraByLanguage = () => {
    switch (i18n.language) {
      case 'en':
        return svgTicketeraEn;
      case 'it':
        return svgTicketeraIt;
      case 'es':
      default:
        return svgTicketeraEs;
    }
  };

  return (
    <div className="w-full h-full">
      {/* Barra fija */}
      <div className="fixed top-0 left-0 w-full h-[45px] sm:h-[70px] bg-[#262a3e] border-b border-[#d1933f] flex items-center justify-center z-[100]">
  <a href="https://live.tickethoy.com/" target="_blank" rel="noopener noreferrer">
    <img src={getSvgTicketeraByLanguage()} alt="Logo" className="h-4 sm:h-8 mx-auto" />
  </a>
</div>
      {/* Secciones*/}
      <div className="pt-[44px] sm:pt-[70px]">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Section11 />
      <Section12 />
      <Section13 />
      </div>
    </div>
  );
};

export default Home;
