import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
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
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-black/90 text-white flex items-center justify-between px-6 z-50 backdrop-blur-md border-b border-white/5">
      {/* Logo y Branding */}
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-12 h-10 flex items-center justify-center font-black text-3xl text-[#F97316]">
            ZM
          </div>
          <span className="font-bold text-xl tracking-tight hidden lg:block">Zinguería <span className="text-[#F97316]">Mercedes</span></span>
        </Link>

        {/* Links de navegación */}
        <div className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[0.15em] text-zinc-400">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Inicio</button>
          <button onClick={() => scrollToSection('where-to-find-us')} className="hover:text-white transition-colors">Ubicación</button>
          <button onClick={() => scrollToSection('catalog-start')} className="hover:text-white transition-colors">Productos</button>
          <button onClick={() => scrollToSection('best-sellers')} className="hover:text-white transition-colors">Destacados</button>
          <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="hover:text-white transition-colors">Contacto</button>
        </div>
      </div>

      {/* Barra de Búsqueda */}
      <div className="flex-1 max-w-lg mx-12 hidden sm:block">
        <div className="relative">
          <input 
            type="text" 
            placeholder="¿Qué estás buscando?" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-zinc-900/50 border border-white/10 rounded-full py-2.5 px-12 focus:outline-none focus:ring-1 focus:ring-[#F97316] transition-all text-sm text-zinc-300 placeholder-zinc-600"
          />
          <Search className="w-4 h-4 text-zinc-600 absolute left-5 top-3.5" />
        </div>
      </div>

      {/* Acciones */}
      <div className="flex items-center gap-4">
        <Link to="/login" className="p-2.5 hover:bg-white/5 rounded-full transition-colors text-zinc-400 hover:text-white" title="Panel Admin">
          <User size={22} />
        </Link>
        <button 
          onClick={onCartClick}
          className="relative p-2.5 hover:bg-white/5 rounded-full transition-colors group"
        >
          <ShoppingCart className="w-6 h-6 text-zinc-400 group-hover:text-white transition-colors" />
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
