
import React from 'react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('catalog-start');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Contenedor de la imagen con desenfoque */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 blur-md scale-110"
          style={{
            backgroundImage: "url('fotos/fotofondo.png')",
            opacity: 0.6
          }}
        />
        {/* Overlay degradado */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        <div className="max-w-4xl animate-in fade-in slide-in-from-left-8 duration-1000">
          <h1 className="text-7xl md:text-[110px] font-black text-white leading-[0.95] mb-8 tracking-tighter drop-shadow-2xl">
            Detalles que <br />
            <span className="text-[#F97316]">cuidan tu hogar.</span>
          </h1>
          
          <p className="text-zinc-200 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl font-medium drop-shadow-md">
            Fabricamos soluciones en zinguería a medida y <br />
            distribuimos las mejores marcas de cada calefacción del país: <br />
            <span className="text-white font-black uppercase tracking-widest bg-black/20 px-0 py-1 rounded backdrop-blur-sm">Tromen y Lepen.</span>
          </p>

          <div className="flex flex-wrap gap-6">
            <button 
              onClick={scrollToProducts}
              className="bg-[#F97316] hover:bg-orange-600 text-white font-black uppercase tracking-[0.2em] px-12 py-5 rounded-lg transition-all active:scale-95 text-xs shadow-xl shadow-orange-600/30"
            >
              VER CATÁLOGO
            </button>
            <button 
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-black uppercase tracking-[0.2em] px-12 py-5 rounded-lg transition-all text-xs"
            >
              CONTACTANOS
            </button>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-50">
        <span className="text-[10px] text-white font-bold uppercase tracking-widest">Descubrir</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
