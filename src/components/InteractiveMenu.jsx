import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const menuImages = [
  "https://res.cloudinary.com/dddjqjtbk/image/upload/v1776735669/669622991_1412580550884917_1880145839636944627_n_zpe2s5.jpg",
  "https://res.cloudinary.com/dddjqjtbk/image/upload/v1776735674/669851895_1412580554218250_5520956871069606693_n_sarzbz.jpg",
  "https://res.cloudinary.com/dddjqjtbk/image/upload/v1776735678/670097656_1412580617551577_2270198060252932990_n_r2um3q.jpg",
  "https://res.cloudinary.com/dddjqjtbk/image/upload/v1776735681/670289963_1412580557551583_1574618571387661451_n_ffvnej.jpg"
];

const InteractiveMenu = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollPos = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      const newIndex = Math.round(scrollPos / width);
      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: width * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  const nextSlide = () => {
    if (activeIndex < menuImages.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  const prevSlide = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  return (
    <section className="relative w-full py-24 px-4 md:px-12 bg-deep-black z-10 overflow-hidden">
      {/* Background Image with opacity */}
      <img 
        src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1776846200/dsc_5813_kiiyqd.jpg"
        alt="Fondo interactivo"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      />
      {/* Dark overlay to ensure text/menu readability */}
      <div className="absolute inset-0 bg-deep-black/60 z-0 pointer-events-none" />

      {/* Main Content Container */}
      <div className="w-full max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col items-center mb-10 text-center">
        <h2 className="text-4xl md:text-5xl text-ivory mb-4">El Menú</h2>
        <div className="w-16 h-0.5 bg-gold mb-4" />
        <p className="text-smoke text-sm">Escanea nuestro menú o desliza para explorar.</p>
      </div>

      {/* Slider interactivo */}
      <div className="relative w-full max-w-3xl mx-auto group">
        
        {/* Contenedor desplazable */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory rounded-2xl shadow-2xl shadow-black border border-charcoal bg-deep-black/30"
          style={{ scrollBehavior: 'smooth' }}
        >
          {menuImages.map((src, idx) => (
            <div 
              key={idx} 
              className="min-w-full w-full flex-shrink-0 snap-center snap-always flex items-start justify-center relative overflow-hidden"
            >
              <img 
                src={src} 
                alt={`Menú página ${idx + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Cajas de navegación flechas (solo en desktop, aunque útiles para todos) */}
        <button 
          onClick={prevSlide}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-charcoal/80 hover:bg-gold text-white hover:text-deep-black p-3 rounded-full backdrop-blur transition-all duration-300 shadow-xl ${activeIndex === 0 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button 
          onClick={nextSlide}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-charcoal/80 hover:bg-gold text-white hover:text-deep-black p-3 rounded-full backdrop-blur transition-all duration-300 shadow-xl ${activeIndex === menuImages.length - 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicadores (Dots) */}
        <div className="flex justify-center gap-3 mt-8">
          {menuImages.map((_, idx) => (
             <button 
               key={idx}
               onClick={() => scrollToIndex(idx)}
               className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-gold scale-125' : 'bg-smoke/50 hover:bg-smoke'}`}
               aria-label={`Ir a la página ${idx + 1}`}
             />
          ))}
        </div>
      </div>

      {/* Ordena Aquí WhatsApp Button */}
      <div className="mt-16 flex justify-center">
        <a 
          href="https://wa.me/526471065375?text=Hola,%20me%20gustar%C3%ADa%20hacer%20un%20pedido." 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-10 py-4 bg-[#25D366] text-white font-medium tracking-wide rounded-full hover:bg-[#1ebd5b] transition-all duration-300 shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40 hover:-translate-y-1 z-10 relative"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.063-.173-.299-.018-.461.13-.611.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Ordena Aquí
        </a>
      </div>
      </div>
    </section>
  );
};

export default InteractiveMenu;
