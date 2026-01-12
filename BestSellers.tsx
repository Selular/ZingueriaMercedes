
import React, { useRef } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface BestSellersProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const BestSellers: React.FC<BestSellersProps> = ({ products, onAddToCart }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-zinc-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-orange-500 font-black text-xs uppercase tracking-widest mb-2 block">Tendencias</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Los Más <span className="text-orange-600">Vendidos.</span></h2>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-orange-600 hover:border-orange-600 transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-white hover:bg-orange-600 hover:border-orange-600 transition-all"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
        >
          {products.map(product => (
            <div key={product.id} className="min-w-[280px] md:min-w-[320px] snap-start">
              <ProductCard product={product} onAddToCart={() => onAddToCart(product)} />
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
