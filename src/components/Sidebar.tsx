
import React from 'react';
import { Category, Brand } from '../types';

interface SidebarProps {
  selectedCategory: Category | 'Todos';
  setSelectedCategory: (c: Category | 'Todos') => void;
  selectedBrand: Brand | 'Todos';
  setSelectedBrand: (b: Brand | 'Todos') => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  selectedCategory, 
  setSelectedCategory, 
  selectedBrand, 
  setSelectedBrand 
}) => {
  const handleWhatsAppExpert = () => {
    const phone = "5492324699889";
    const text = "Hola Zinguería Mercedes! Me gustaría recibir asesoramiento técnico personalizado sobre sus productos.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <aside className="hidden lg:block w-72 h-fit sticky top-28 py-4">
      <div className="bg-white rounded-3xl border border-zinc-100 p-8 shadow-sm">
        <div className="mb-10">
          <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">Filtrar por Categoría</h3>
          <ul className="space-y-2">
            <li 
              onClick={() => setSelectedCategory('Todos')}
              className={`cursor-pointer px-4 py-3 rounded-xl transition-all flex items-center justify-between group ${selectedCategory === 'Todos' ? 'bg-black text-white font-bold shadow-lg shadow-black/10' : 'text-zinc-500 hover:bg-zinc-50'}`}
            >
              <span>Todos</span>
              <svg className={`w-4 h-4 ${selectedCategory === 'Todos' ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </li>
            {Object.values(Category).map(cat => (
              <li 
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-4 py-3 rounded-xl transition-all flex items-center justify-between group ${selectedCategory === cat ? 'bg-black text-white font-bold shadow-lg shadow-black/10' : 'text-zinc-500 hover:bg-zinc-50'}`}
              >
                <span>{cat}</span>
                <svg className={`w-4 h-4 ${selectedCategory === cat ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                </svg>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10">
          <h3 className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-6">Filtrar por Marca</h3>
          <div className="space-y-4">
            {['Todos', ...Object.values(Brand)].map(brand => (
              <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="radio" 
                  name="brand" 
                  className="hidden" 
                  checked={selectedBrand === brand}
                  onChange={() => setSelectedBrand(brand as Brand | 'Todos')}
                />
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selectedBrand === brand ? 'border-orange-600 bg-orange-600 shadow-lg shadow-orange-600/30' : 'border-zinc-200 bg-white group-hover:border-zinc-300'}`}>
                  {selectedBrand === brand && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                </div>
                <span className={`text-sm transition-colors ${selectedBrand === brand ? 'text-zinc-900 font-bold' : 'text-zinc-500 group-hover:text-zinc-800'}`}>{brand}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-100">
          <div className="bg-zinc-950 p-6 rounded-2xl relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-white text-sm font-bold leading-snug mb-4">¿Asesoramiento técnico a medida?</p>
              <button 
                onClick={handleWhatsAppExpert}
                className="w-full bg-orange-600 text-white py-3 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-orange-500 transition-colors shadow-lg shadow-orange-600/20"
              >
                Hablar con Experto
              </button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-20 h-20 bg-orange-600/20 rounded-full blur-2xl group-hover:bg-orange-600/30 transition-colors"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
