import React from 'react';
import mainImage from '../assets/images/pngfondosimagenes-07.png';
import overlayImage1 from '../assets/images/logosyvectores-05.svg';
import overlayImage2 from '../assets/images/logosyvectores-06.svg';

const Section7: React.FC = () => {
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
        <p className="text-[#0E1373] text-left sm:w-[80%] text-[0.8rem] sm:text-[1.2rem] font-bold">
          Uno de los grandes atractivos de las cenas a beneficio de la Fundación PUPI será la participación de destacados exjugadores de fútbol, quienes han dejado una marca imborrable en la historia de este deporte.<br /><br />
          Figuras emblemáticas que, a lo largo de sus carreras, no solo han sido reconocidas por su talento en el campo de juego, sino también por su compromiso con causas sociales y su cercanía con los aficionados.<br /><br />
          Estos invitados especiales no solo contribuirán con su presencia al éxito del evento, sino que brindarán a los asistentes la oportunidad única de compartir una velada íntima con sus ídolos. Los asistentes tendrán la posibilidad de interactuar directamente con ellos, compartir conversaciones, obtener autógrafos e incluso fotografiarse junto a estas leyendas del fútbol.<br /><br />
          La cercanía con estas figuras del deporte convertirá la cena en una experiencia inolvidable, creando un ambiente de camaradería y emoción, donde los asistentes podrán vivir de cerca el legado de grandes jugadores. Además, su participación refuerza el espíritu de la cena: unir el poder del fútbol con el compromiso social para generar un impacto positivo en la vida de los más vulnerables.<br /><br />
          Estos exjugadores no solo han sido protagonistas de momentos icónicos en el deporte, sino que ahora se suman a una causa noble, apoyando con su presencia y su voz el trabajo que la Fundación PUPI realiza día a día.
        </p>
      </div>
    </section>
  );
};

export default Section7;
