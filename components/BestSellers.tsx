import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      setShowLeftArrow(scrollLeft > 20);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 20);
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
      const scrollAmount = clientWidth * 0.8; 
      const scrollTo = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-zinc-950 overflow-hidden select-none border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-1 w-10 bg-orange-600 rounded-full"></span>
              <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.5em]">Colección Exclusiva</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">
              Los Más <span className="text-orange-600">Vendidos.</span>
            </h2>
          </motion.div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              disabled={!showLeftArrow}
              className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-500 active:scale-90 ${
                showLeftArrow 
                ? 'border-zinc-800 text-white hover:bg-orange-600 hover:border-orange-600 hover:shadow-[0_0_30px_rgba(234,88,12,0.3)]' 
                : 'border-zinc-900 text-zinc-800 cursor-not-allowed opacity-30'
              }`}
            >
              <ChevronLeft size={24} strokeWidth={2.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!showRightArrow}
              className={`w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-500 active:scale-90 ${
                showRightArrow 
                ? 'border-zinc-800 text-white hover:bg-orange-600 hover:border-orange-600 hover:shadow-[0_0_30px_rgba(234,88,12,0.3)]' 
                : 'border-zinc-900 text-zinc-800 cursor-not-allowed opacity-30'
              }`}
            >
              <ChevronRight size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-12 no-scrollbar cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="min-w-[300px] sm:min-w-[340px] md:min-w-[400px] snap-start"
            >
              <ProductCard 
                product={product} 
                onAddToCart={() => onAddToCart(product)} 
                onClick={() => onSelectProduct(product)}
              />
            </motion.div>
          ))}
          <div className="min-w-[100px] h-full shrink-0"></div>
        </div>
      </div>
      
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-orange-600/5 to-transparent pointer-events-none" />
    </section>
  );
};

export default BestSellers;
