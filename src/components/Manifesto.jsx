import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const content = "En Katana, no servimos comida, creamos momentos, cada ingrediente, cada platillo, cada presentacion esta diseñada para provocar algo mas que sabor: Emocion.";
const words = content.split(' ');

const Manifesto = () => {
  const containerRef = useRef(null);
  const signRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animación de las letras (ahora completamente seguras y renderizadas por React)
      gsap.fromTo('.char', 
        { opacity: 0, y: 16, filter: 'blur(4px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          stagger: 0.015,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: signRef.current,
            start: 'top 85%',
          }
        }
      );

      // Animación del 'letrero' (la caja/marco)
      gsap.fromTo(signRef.current, 
        { opacity: 0, y: 30, scale: 0.98 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 1.5, 
          ease: 'expo.out',
          scrollTrigger: {
            trigger: signRef.current,
            start: 'top 85%',
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-40 px-6 flex items-center justify-center min-h-[60vh] z-10 relative overflow-hidden bg-deep-black">
      
      {/* Background Image with Opacity */}
      <img 
        src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1776847109/dsc_6039_xzuzd8.jpg"
        alt="Fondo Manifiesto"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-25"
      />
      <div className="absolute inset-0 bg-deep-black/60 z-0 pointer-events-none" />

      {/* Contenedor tipo Letrero Elegante */}
      <div 
        ref={signRef}
        className="relative w-full max-w-5xl p-12 md:p-20 bg-[#143851]/50 border border-gold/20 backdrop-blur-md rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col items-center justify-center text-center z-10"
      >
        {/* Adornos en las esquinas para el toque de letrero premium */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold/40" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold/40" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold/40" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold/40" />
        
        {/* Usamos un contenedor Flex con huecos (gaps) para separar cada palabra impecablemente */}
        <p className="text-xl md:text-3xl lg:text-4xl text-ivory font-heading italic leading-relaxed md:leading-[1.7] tracking-[0.1em] uppercase font-light flex flex-wrap justify-center gap-x-3 md:gap-x-5 gap-y-2">
          {words.map((word, wordIdx) => (
            <span key={wordIdx} className="inline-block whitespace-nowrap">
              {word.split('').map((char, charIdx) => (
                <span key={`${wordIdx}-${charIdx}`} className="char inline-block">
                  {char}
                </span>
              ))}
            </span>
          ))}
        </p>
        
        <div className="mt-12 flex justify-center items-center gap-6">
          <div className="w-12 h-[1px] bg-gold/30" />
          <span className="text-gold font-body text-[10px] md:text-xs tracking-[0.5em] uppercase font-medium">
            Mística Katana
          </span>
          <div className="w-12 h-[1px] bg-gold/30" />
        </div>
      </div>
      
      {/* Luces sutiles detrás del letrero para darle profundidad */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-gold/5 blur-[120px] rounded-full pointer-events-none -z-10" />
    </section>
  );
};

export default Manifesto;
