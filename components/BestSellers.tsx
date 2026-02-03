
import React, { useRef, useState, useEffect } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface BestSellersProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

const BestSellers: React.FC<BestSellersProps> = ({ products, onAddToCart, onSelectProduct }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);


  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // Uso un pequeño margen de 5px para evitar problemas de redondeo :p
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, [products]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth; 
      const scrollTo = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-zinc-950 overflow-hidden select-none border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-1 w-8 bg-orange-600 rounded-full"></span>
              <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.4em]">Tendencias</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
              Los Más <span className="text-orange-600">Vendidos.</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('left')}
              disabled={!showLeftArrow}
              className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 active:scale-90 ${
                showLeftArrow 
                ? 'border-zinc-700 text-white hover:bg-orange-600 hover:border-orange-600 shadow-lg shadow-orange-600/0 hover:shadow-orange-600/20' 
                : 'border-zinc-800 text-zinc-800 cursor-not-allowed opacity-20'
              }`}
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!showRightArrow}
              className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 active:scale-90 ${
                showRightArrow 
                ? 'border-zinc-700 text-white hover:bg-orange-600 hover:border-orange-600 shadow-lg shadow-orange-600/0 hover:shadow-orange-600/20' 
                : 'border-zinc-800 text-zinc-700 cursor-not-allowed opacity-20'
              }`}
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-10 cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'smooth' }}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[280px] sm:min-w-[320px] md:min-w-[380px] snap-start transition-transform duration-500"
            >
              <ProductCard 
                product={product} 
                onAddToCart={() => onAddToCart(product)} 
                onClick={() => onSelectProduct(product)}
              />
            </div>
          ))}
          {/* Espaciador final por el scroll completillo*/}
          <div className="min-w-[1px] h-full shrink-0"></div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default BestSellers;
