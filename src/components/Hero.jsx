import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Setup initial states
      gsap.set('.hero-text-elem', { y: 50, opacity: 0 });
      gsap.set(imageRef.current, { scale: 1.0 });

      // Build timeline
      const tl = gsap.timeline();
      
      tl.to('.hero-text-elem', {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.2
      })
      .to(imageRef.current, {
        scale: 1.08,
        duration: 20,
        ease: 'none',
      }, 0);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center bg-deep-black z-0 overflow-hidden">
      
      {/* Background Video taking full screen */}
      <video 
        ref={imageRef}
        src="https://res.cloudinary.com/dddjqjtbk/video/upload/v1776737350/0420_dnpytw.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover origin-center z-0 opacity-40"
      />
      {/* Dark overlay to ensure text is always readable against the fire */}
      <div className="absolute inset-0 bg-gradient-to-r from-deep-black/90 via-deep-black/60 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-deep-black/40 z-0 pointer-events-none" />

      {/* Main Content Overlay */}
      <div className="w-full max-w-7xl mx-auto relative z-10 px-8 lg:px-12 flex flex-col justify-center mt-20 md:mt-0">
        <div ref={textRef} className="max-w-2xl">
          <h1 className="hero-text-elem text-7xl md:text-9xl text-ivory font-heading italic tracking-wider mb-2 leading-[1.1] drop-shadow-lg">
            Katana
          </h1>
          <h2 className="hero-text-elem text-2xl md:text-4xl text-gold font-heading italic tracking-wide font-light mb-8 drop-shadow-md">
            Donde cada platillo es una obra maestra
          </h2>
          <p className="hero-text-elem text-ivory/90 text-lg md:text-xl font-body font-light mb-12 leading-relaxed tracking-wide drop-shadow-md">
            Transformamos ingredientes en experiencias. <span className="text-gold font-heading italic opacity-100">Sushi, variedad de platillos y postres</span> diseñados para sorprender.
          </p>
          
          <div className="hero-text-elem flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <a href="#menu" className="group relative px-8 py-4 bg-gold text-deep-black font-medium tracking-wide uppercase text-sm overflow-hidden flex items-center gap-3 transition-colors hover:bg-ivory hover:text-deep-black rounded-xl duration-300 shadow-xl">
              Ver Menú
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="https://wa.me/526471065375?text=Hola,%20me%20gustar%C3%ADa%20hacer%20una%20reservaci%C3%B3n." target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-black/40 backdrop-blur-sm border border-gold/50 text-gold font-medium tracking-wide uppercase text-sm hover:bg-gold hover:text-deep-black transition-all duration-300 rounded-xl shadow-lg">
              Reservar Mesa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
