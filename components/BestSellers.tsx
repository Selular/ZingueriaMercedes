
import React, { useRef, useEffect, useState } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface BestSellersProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

const BestSellers: React.FC<BestSellersProps> = ({ products, onAddToCart, onSelectProduct }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Duplicamos los productos para dar la sensación de carrusel continuo al scrollear
  const displayProducts = [...products, ...products, ...products];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Si llegamos cerca del final o del inicio, reseteamos la posición al centro
      // para simular infinitud
      const oneThird = scrollWidth / 3;
      if (scrollLeft > oneThird * 2) {
        scrollContainerRef.current.scrollLeft = scrollLeft - oneThird;
      } else if (scrollLeft < oneThird - clientWidth) {
        scrollContainerRef.current.scrollLeft = scrollLeft + oneThird;
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      // Empezar en la sección del medio para que se pueda ir a la izquierda desde el inicio
      const middle = container.scrollWidth / 3;
      container.scrollLeft = middle;
      
      container.addEventListener('scroll', checkScroll);
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-zinc-900 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-orange-500 font-black text-xs uppercase tracking-widest mb-2 block">Tendencias</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Los Más <span className="text-orange-600">Vendidos.</span></h2>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-orange-600 hover:border-orange-600 transition-all active:scale-90"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-orange-600 hover:border-orange-600 transition-all active:scale-90"
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 cursor-grab active:cursor-grabbing"
          style={{ scrollBehavior: 'smooth' }}
        >
          {displayProducts.map((product, idx) => (
            <div key={`${product.id}-${idx}`} className="min-w-[300px] md:min-w-[350px] snap-start">
              <ProductCard 
                product={product} 
                onAddToCart={() => onAddToCart(product)} 
                onClick={() => onSelectProduct(product)}
              />
            </div>
          ))}
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
