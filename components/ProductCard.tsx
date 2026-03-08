import React from 'react';
import { Product } from '../types';
import { ShoppingCart, Eye } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onClick }) => {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0
  }).format(product.price);

  return (
    <div className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden bg-zinc-100 cursor-pointer" onClick={onClick}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-contain p-6 transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
            {product.brand}
          </span>
          {product.isBestSeller && (
            <span className="bg-orange-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">
              DESTACADO
            </span>
          )}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-1 block">
            {product.category}
          </span>
          <h3 className="text-lg font-bold text-zinc-900 leading-tight mb-2 group-hover:text-orange-600 transition-colors">
            {product.name}
          </h3>
        </div>
        
        <div className="mt-4 flex items-center justify-between">
          <div className="text-xl font-black text-zinc-900 tracking-tighter">
            {formattedPrice}
          </div>
          <button 
            onClick={(e) => { e.stopPropagation(); onAddToCart(); }}
            className="w-10 h-10 bg-orange-600 text-white rounded-xl flex items-center justify-center hover:bg-orange-700 transition-all active:scale-90 shadow-lg shadow-orange-600/20"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
