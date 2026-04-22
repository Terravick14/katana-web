import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  { id: 1, name: 'Variedad de Sushis y Platillos', desc: 'Anguila premium braseada, salsa unagi artesanal', img: 'https://res.cloudinary.com/dddjqjtbk/image/upload/v1776846456/dsc_5996_yofwqp.jpg', colSpan: 'col-span-12 md:col-span-8', rowSpan: 'row-span-2' },
  { id: 2, name: 'Charolas', desc: 'Charolas para compartir un momento agradable', img: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1925&auto=format&fit=crop', colSpan: 'col-span-12 md:col-span-4', rowSpan: 'row-span-1' },
  { id: 3, name: 'Variedad de platillos', desc: 'Selección del chef, cortes finos frescos', img: 'https://res.cloudinary.com/dddjqjtbk/image/upload/v1776846631/dsc_6000_hdshmv.jpg', colSpan: 'col-span-12 md:col-span-4', rowSpan: 'row-span-1' },
  { id: 4, name: 'Mesas decoradas para eventos', desc: 'Haz tu cotización', img: 'https://res.cloudinary.com/dddjqjtbk/image/upload/v1776788366/486948764_1099100905566218_4130306225769235701_n_jmcexz.jpg', colSpan: 'col-span-12 md:col-span-6', rowSpan: 'row-span-1', fit: 'object-contain', bg: 'bg-black' },
  { id: 5, name: 'Yakimeshi Especial', desc: 'Arroz frito clásico estilo Katana', img: 'https://res.cloudinary.com/dddjqjtbk/image/upload/v1776788544/484337415_9334446276593119_2880671873338431140_n_cntdwi.jpg', colSpan: 'col-span-12 md:col-span-6', rowSpan: 'row-span-1', fit: 'object-cover', position: 'object-center' },
];

const Showcase = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.showcase-item').forEach((item) => {
        gsap.fromTo(item, 
          { clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)', opacity: 0 },
          {
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
            opacity: 1,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto bg-deep-black z-10 relative">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl text-ivory mb-4">Nuestras Creaciones</h2>
        <div className="w-16 h-0.5 bg-gold" />
      </div>

      <div className="grid grid-cols-12 auto-rows-[300px] gap-6">
        {dishes.map((dish) => (
          <div 
            key={dish.id} 
            className={`showcase-item relative rounded-xl overflow-hidden group cursor-pointer ${dish.colSpan} ${dish.rowSpan} ${dish.bg || 'bg-transparent'}`}
          >
            <div className="absolute inset-0 bg-deep-black/30 group-hover:bg-deep-black/60 transition-colors duration-500 z-10" />
            
            <img 
              src={dish.img} 
              alt={dish.name}
              className={`w-full h-full ${dish.fit || 'object-cover'} ${dish.position || 'object-center'} transition-transform duration-700 ease-out group-hover:scale-110`}
            />
            
            <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <h3 className="text-2xl text-gold mb-2">{dish.name}</h3>
              <p className="text-ivory/80 text-sm font-body">{dish.desc}</p>
            </div>
            
            {/* Subtle Gold Border Reveal */}
            <div className="absolute inset-4 border border-gold/0 group-hover:border-gold/30 rounded-lg transition-all duration-700 z-20 pointer-events-none scale-105 group-hover:scale-100" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
