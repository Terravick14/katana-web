import React, { useState } from 'react';
import AnimatedShaderBackground from './ui/AnimatedShaderBackground';

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    fecha: '',
    hora: '',
    personas: '2',
    comentarios: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReservation = () => {
    const message = `Hola Katana, me gustaría hacer una reservación.%0A%0A*Detalles:*%0A- Nombre: ${formData.nombre}%0A- Teléfono: ${formData.telefono}%0A- Fecha: ${formData.fecha}%0A- Hora: ${formData.hora}%0A- Personas: ${formData.personas}%0A- Comentarios: ${formData.comentarios || 'Ninguno'}`;
    window.open(`https://wa.me/526471065375?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 px-6 relative bg-deep-black z-10 flex items-center justify-center overflow-hidden">
      
      {/* Animated Shader Background con opacidad muy leve */}
      <div className="absolute inset-0 z-0 opacity-30 mt-0 pointer-events-none mix-blend-screen overflow-hidden">
        <AnimatedShaderBackground />
      </div>

      <div className="max-w-xl w-full relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-ivory mb-4 font-heading">Reserva tu Experiencia</h2>
          <p className="text-smoke text-sm">Asegura tu lugar en uno de los espacios más exclusivos.</p>
        </div>
        
        <form className="bg-charcoal p-8 md:p-12 rounded-[14px] shadow-2xl shadow-black/50 border border-smoke/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-xs text-smoke uppercase tracking-wider mb-2">Nombre</label>
              <input 
                type="text" 
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="bg-transparent border-b border-smoke/50 py-2 text-ivory outline-none focus:border-gold transition-colors duration-300 font-body"
                placeholder="Tu nombre completo"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-smoke uppercase tracking-wider mb-2">Teléfono</label>
              <input 
                type="tel" 
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="bg-transparent border-b border-smoke/50 py-2 text-ivory outline-none focus:border-gold transition-colors duration-300 font-body"
                placeholder="Tu número"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label className="text-xs text-smoke uppercase tracking-wider mb-2">Fecha</label>
              <input 
                type="date" 
                name="fecha"
                value={formData.fecha}
                onChange={handleChange}
                className="bg-transparent border-b border-smoke/50 py-2 text-ivory outline-none focus:border-gold transition-colors duration-300 font-body"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xs text-smoke uppercase tracking-wider mb-2">Hora</label>
              <input 
                type="time" 
                name="hora"
                value={formData.hora}
                onChange={handleChange}
                className="bg-transparent border-b border-smoke/50 py-2 text-ivory outline-none focus:border-gold transition-colors duration-300 font-body"
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label className="text-xs text-smoke uppercase tracking-wider mb-2">Personas</label>
            <select 
              name="personas"
              value={formData.personas}
              onChange={handleChange}
              className="bg-transparent border-b border-smoke/50 py-2 text-ivory outline-none focus:border-gold transition-colors duration-300 font-body appearance-none"
            >
              <option className="bg-charcoal text-ivory" value="2">2 Personas</option>
              <option className="bg-charcoal text-ivory" value="3">3 Personas</option>
              <option className="bg-charcoal text-ivory" value="4">4 Personas</option>
              <option className="bg-charcoal text-ivory" value="5+">5 o más Personas</option>
            </select>
          </div>

          <div className="flex flex-col mb-10">
            <label className="text-xs text-smoke uppercase tracking-wider mb-2">Comentarios (Opcional)</label>
            <textarea 
              name="comentarios"
              value={formData.comentarios}
              onChange={handleChange}
              className="bg-transparent border-b border-smoke/50 py-2 text-ivory outline-none focus:border-gold transition-colors duration-300 font-body resize-none"
              placeholder="Ej: Mesa decorada, orden de platillos con anticipación, etc."
              rows={2}
            ></textarea>
          </div>

          <button 
            type="button"
            onClick={handleReservation}
            className="w-full py-4 bg-gold text-deep-black font-medium tracking-wide uppercase text-sm rounded-xl hover:bg-ivory transition-colors duration-300 active:scale-[0.98]"
          >
            Reservar Ahora (Vía WhatsApp)
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
