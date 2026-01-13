
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: () => void;
  onClick?: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, onClick }) => {
  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(product.price);

  const installmentValue = product.installments 
    ? new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(product.price / product.installments)
    : null;

  return (
    <div 
      onClick={onClick}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-100 flex flex-col h-full cursor-pointer relative"
    >
      <div className="relative aspect-square overflow-hidden bg-zinc-100">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="bg-black text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            {product.brand}
          </span>
          {product.installments && (
            <span className="bg-orange-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
              {product.installments} Cuotas Fijas
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-orange-600 transition-colors leading-tight">
          {product.name}
        </h3>
        
        {/* Descripción eliminada para un diseño más compacto */}

        <div className="mt-auto pt-4 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-zinc-400 text-[10px] block uppercase font-bold tracking-tighter">Precio contado</span>
              <span className="text-xl font-extrabold text-zinc-900">{formattedPrice}</span>
              {installmentValue && (
                <span className="block text-orange-600 text-xs font-bold mt-1">
                  o {product.installments} cuotas de {installmentValue}
                </span>
              )}
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart();
              }}
              className="bg-orange-600 text-white p-3 rounded-xl hover:bg-black transition-all transform active:scale-95 shadow-lg shadow-orange-600/20"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
