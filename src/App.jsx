import React, { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import Showcase from './components/Showcase.jsx';

import InteractiveMenu from './components/InteractiveMenu.jsx';
import ReservationForm from './components/ReservationForm.jsx';
import Metrics from './components/Metrics.jsx';
import LocationCTA from './components/LocationCTA.jsx';

function App() {
  return (
    <div className="bg-deep-black min-h-screen text-ivory selection:bg-gold selection:text-deep-black relative">
      {/* Navbar con navegación fluida */}
      <header className="fixed top-0 left-0 w-full p-6 lg:px-12 z-50 flex justify-between items-center bg-gradient-to-b from-deep-black/90 to-transparent backdrop-blur-md">
        <div 
          className="cursor-pointer flex items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <img 
            src="https://res.cloudinary.com/dddjqjtbk/image/upload/v1776737706/ChatGPT_Image_20_abr_2026_18_49_50_kjalr7.png" 
            alt="Katana Logo" 
            className="h-24 w-auto object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Enlaces de Navegación */}
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-body text-smoke">
          <a href="#menu" className="text-[#F28C28] hover:text-gold transition-colors duration-300">Menú</a>
          <a href="#ubicacion" className="text-[#F28C28] hover:text-gold transition-colors duration-300">Ubicación</a>
          <a href="#ubicacion" className="text-[#F28C28] hover:text-gold transition-colors duration-300">Teléfono</a>
          <a href="#reserva" className="text-gold border border-gold/30 px-5 py-2 rounded-full hover:bg-gold hover:text-deep-black transition-all duration-300">Reserva</a>
        </nav>
      </header>
      
      <main className="w-full overflow-hidden flex flex-col">
        <Hero />
        <div id="menu"><InteractiveMenu /></div>
        <div id="reserva"><ReservationForm /></div>
        <Showcase />
        <Metrics />
        <div id="ubicacion"><LocationCTA /></div>
      </main>

      <footer className="bg-deep-black py-8 border-t border-smoke/10 text-center relative z-10">
        <p className="text-smoke/50 text-xs tracking-widest uppercase font-body">© 2026 Katana Sushi. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
