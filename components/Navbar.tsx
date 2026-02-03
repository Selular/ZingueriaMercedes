
import React from 'react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick, searchQuery, setSearchQuery }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-black/90 text-white flex items-center justify-between px-6 z-50 backdrop-blur-md border-b border-white/5">
      {/* Logo y  elBranding */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Logo 2 */}
          <div className="w-12 h-10 flex items-center justify-center font-black text-3xl bold text-[#F97316] drop-shadow-[0_0_8px_rgba(249,115,22,0.3)]">
            ZM
          </div>
          <span className="font-bold text-xl tracking-tight hidden lg:block">Zinguería <span className="text-[#F97316]">Mercedes</span></span>
        </div>

        {/* Links para navegar en la pag*/}
        <div className="hidden md:flex items-center gap-8 text-[12px] regular uppercase tracking-[0.15em] text-zinc-400">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Inicio</button>
          <button onClick={() => scrollToSection('catalog-start')} className="hover:text-white transition-colors">Productos</button>
          <button onClick={() => scrollToSection('best-sellers')} className="hover:text-white transition-colors">Destacados</button>
          <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="hover:text-white transition-colors">Contacto</button>
        </div>
      </div>

      {/* Barra de Búsqueda */}
      <div className="flex-1 max-w-lg mx-12">
        <div className="relative">
          <input 
            type="text" 
            placeholder="¿Qué estás buscando?" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-2.5 px-12 focus:outline-none focus:ring-1 focus:ring-[#F97316] transition-all text-sm text-zinc-300 placeholder-zinc-600"
          />
          <svg className="w-4 h-4 text-zinc-600 absolute left-5 top-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Carrito */}
      <div className="flex items-center">
        <button 
          onClick={onCartClick}
          className="relative p-2.5 hover:bg-white/5 rounded-full transition-colors group"
        >
          <svg className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute top-1 right-1 bg-[#F97316] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-black">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
