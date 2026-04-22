import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Metrics = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray('.metric-number');
      
      counters.forEach((counter) => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = target % 1 !== 0;
        
        gsap.to({ value: 0 }, {
          value: target,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
          onUpdate: function() {
            counter.innerText = isDecimal ? this.targets()[0].value.toFixed(1) : Math.floor(this.targets()[0].value);
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 border-y border-charcoal bg-deep-black/50 z-10 relative">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center divider-x divide-charcoal">
        <div className="flex flex-col items-center">
          <span className="text-gold text-5xl md:text-6xl font-heading mb-2 flex items-baseline">
            <span className="metric-number" data-target="5000">0</span>
            <span className="text-3xl">+</span>
          </span>
          <span className="text-smoke uppercase tracking-widest text-sm">Clientes Satisfechos</span>
        </div>
        
        <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-charcoal pt-12 md:pt-0">
          <span className="text-gold text-5xl md:text-6xl font-heading mb-2 flex items-baseline">
            <span className="metric-number" data-target="4.9">0.0</span>
            <span className="text-3xl ml-1">★</span>
          </span>
          <span className="text-smoke uppercase tracking-widest text-sm">Rating Promedio</span>
        </div>
        
        <div className="flex flex-col items-center border-t md:border-t-0 md:border-l border-charcoal pt-12 md:pt-0">
          <span className="text-gold text-5xl md:text-6xl font-heading mb-2 flex items-baseline">
            <span className="metric-number" data-target="14">14</span>
            <span className="text-3xl">+</span>
          </span>
          <span className="text-smoke uppercase tracking-widest text-sm">Años de Experiencia</span>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
