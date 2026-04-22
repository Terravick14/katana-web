import React from 'react';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';

const LocationCTA = () => {
  return (
    <section className="relative w-full z-10 flex flex-col bg-deep-black">
      
      {/* Location Split */}
      <div className="flex flex-col lg:flex-row min-h-[60vh]">
        {/* Left: Info */}
        <div className="relative w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-deep-black overflow-hidden group">
          {/* Background Image with Opacity */}
          <img 
            src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1776845934/dsc_5948_qhwgnt.jpg" 
            alt="Fondo Visítanos"
            className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Overlay oscuro para no perder legibilidad */}
          <div className="absolute inset-0 bg-deep-black/40 z-0 pointer-events-none" />

          <div className="relative z-10 w-full">
            <h2 className="text-4xl text-ivory font-heading mb-12 drop-shadow-md">Visítanos</h2>
            
            <div className="space-y-8 flex-col">
              <div className="flex items-start gap-6 group/item">
                <MapPin className="text-gold w-6 h-6 mt-1 group-hover/item:scale-110 transition-transform drop-shadow" />
                <div>
                  <h4 className="text-gold font-heading text-xl mb-1 drop-shadow-sm">Ubicación</h4>
                  <p className="text-ivory font-body font-medium text-lg max-w-xs leading-relaxed drop-shadow-sm">
                    Hermosillo S/N, Anselmo Macías, 85950 Huatabampo, Son.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group/item">
                <Clock className="text-gold w-6 h-6 mt-1 group-hover/item:scale-110 transition-transform drop-shadow" />
                <div>
                  <h4 className="text-gold font-heading text-xl mb-1 drop-shadow-sm">Horarios</h4>
                  <p className="text-ivory font-body font-medium text-lg drop-shadow-sm">Lunes a Domingo</p>
                  <p className="text-ivory font-body font-medium text-lg drop-shadow-sm">1:00 p.m. a 11:00 p.m.</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group/item">
                <Phone className="text-gold w-6 h-6 mt-1 group-hover/item:scale-110 transition-transform drop-shadow" />
                <div>
                  <h4 className="text-gold font-heading text-xl mb-1 drop-shadow-sm">Contacto</h4>
                  <p className="text-ivory font-body font-medium text-lg drop-shadow-sm">647-112-0101</p>
                  <p className="text-ivory font-body font-medium text-lg drop-shadow-sm">647-106-5375</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Map (Stylized dark image placeholder with Link) */}
        <a 
          href="https://www.google.com/maps/place/Katana/@26.8235152,-109.6316773,17z/data=!3m1!4b1!4m6!3m5!1s0x86b78bb8817e177d:0x5f565118c18400bd!8m2!3d26.8235152!4d-109.6316773!16s%2Fg%2F11b6vmjbbb?entry=ttu&g_ep=EgoyMDI2MDQxNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full lg:w-1/2 min-h-[400px] lg:min-h-full relative overflow-hidden group cursor-pointer"
        >
          {/* Overlay oscuro para integrar la estética */}
          <div className="absolute inset-0 bg-deep-black/60 group-hover:bg-deep-black/20 transition-colors duration-700 z-10" />
          
          <img 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
            alt="Map location Katana Huatabampo"
            className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out grayscale custom-dark-filter block"
            style={{ filter: 'grayscale(1) brightness(0.4) contrast(1.2)' }}
          />

          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity duration-500">
            <div className="bg-charcoal/80 backdrop-blur-sm border border-gold/40 px-6 py-4 rounded-xl flex items-center justify-center gap-3">
              <MapPin className="text-gold w-6 h-6" />
              <span className="text-ivory font-body tracking-widest text-sm uppercase">Ver en Google Maps</span>
            </div>
          </div>
        </a>
      </div>

      {/* Final CTA */}
      <div className="relative py-32 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
        {/* Background Image with low opacity for text legibility */}
        <img 
          src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1776845691/dsc_5958_oki1ia.jpg" 
          alt="Katana Experience"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
        />
        {/* Background gradient/texture over the image to darken edges */}
        <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/60 to-transparent z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-deep-black/30 z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-heading text-ivory mb-8">
            Reserva tu experiencia en Katana
          </h2>
          <p className="text-gold font-heading italic text-2xl md:text-3xl mb-12 font-light tracking-wide drop-shadow-md">
            Descubre el arte de la gastronomía japonesa en un ambiente inigualable.
          </p>
          <a 
            href="https://wa.me/526471065375?text=Hola,%20me%20gustar%C3%ADa%20hacer%20una%20reservaci%C3%B3n." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group px-10 py-5 bg-gold text-deep-black font-medium tracking-widest uppercase text-sm rounded-xl overflow-hidden inline-flex items-center gap-3 transition-colors hover:bg-ivory hover:text-deep-black duration-300"
          >
            Reservar Mesa
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default LocationCTA;
