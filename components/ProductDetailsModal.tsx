
import React from 'react';
import { Product } from '../types';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  const formattedPrice = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(product.price);

  const handleWhatsAppInquiry = () => {
    const phone = "5492324699889";
    const text = `Hola! Estoy viendo en su web el producto "${product.name}" de la marca ${product.brand} y me gustaría recibir más información o asesoramiento técnico.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-0 md:p-6 lg:p-12 overflow-hidden">
      {/* Overlay con desenfoque profundo */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-500" 
        onClick={onClose} 
      />
      
      {/* Contenedor Principal: Se ajusta al contenido o al viewport */}
      <div className="relative w-full max-w-7xl h-full md:h-auto md:max-h-[92vh] bg-white md:rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.6)] flex flex-col md:flex-row animate-in zoom-in-95 fade-in slide-in-from-bottom-8 duration-500">
        
        {/* Botón Cerrar Flotante (Desktop) */}
        <button 
          onClick={onClose} 
          className="absolute top-8 right-8 z-50 hidden md:flex items-center justify-center w-12 h-12 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-full transition-all group active:scale-90"
        >
          <svg className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Sección de Imagen - Ocupa la mitad en desktop */}
        <div className="w-full md:w-1/2 lg:w-[45%] h-[40vh] md:h-full relative bg-zinc-100 overflow-hidden shrink-0">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          {/* Badges sobre la imagen */}
          <div className="absolute top-6 left-6 flex flex-col gap-2">
             <span className="bg-black/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
               {product.brand}
             </span>
             {product.isBestSeller && (
               <span className="bg-[#F97316] text-white px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">
                 Más Vendido
               </span>
             )}
          </div>
          
          {/* Botón Cerrar (Mobile) */}
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 md:hidden bg-black/40 backdrop-blur-md text-white p-2 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Sección de Contenido - Scroll interno suave */}
        <div className="flex-1 flex flex-col min-h-0 bg-white">
          <div className="flex-1 overflow-y-auto p-8 md:p-12 lg:p-16 custom-scrollbar">
            <div className="max-w-2xl mx-auto md:mx-0">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-12 bg-[#F97316]"></div>
                <span className="text-[10px] font-black text-[#F97316] uppercase tracking-[0.4em]">Detalles Técnicos</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-black text-zinc-900 tracking-tighter leading-tight mb-6">
                {product.name}
              </h2>

              <p className="text-zinc-500 text-lg leading-relaxed font-medium mb-10">
                {product.description}
              </p>

              {/* Grid de Especificaciones Optimizado */}
              {product.specs && (
                <div className="grid grid-cols-2 gap-3 mb-12">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="bg-zinc-50 p-5 rounded-2xl border border-zinc-100 flex flex-col hover:border-[#F97316]/30 transition-colors">
                      <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest mb-1">{spec.label}</span>
                      <span className="text-zinc-900 font-bold text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Lista de Características en Chips */}
              {product.features && (
                <div className="mb-8">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-4">Puntos Destacados</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="bg-orange-50 text-[#F97316] px-4 py-2 rounded-full text-xs font-black border border-orange-100/50">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Barra de Acción Inferior - Siempre visible */}
          <div className="shrink-0 p-8 md:p-10 border-t border-zinc-100 bg-white/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest mb-1">Precio de Lista</p>
              <p className="text-4xl font-black text-zinc-900 tracking-tighter">{formattedPrice}</p>
            </div>
            
            <div className="flex gap-3 w-full sm:w-auto">
               <button 
                onClick={handleWhatsAppInquiry}
                className="flex-1 sm:flex-none border-2 border-zinc-900 text-zinc-900 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all hover:bg-zinc-900 hover:text-white active:scale-95"
              >
                Consultar
              </button>
              <button 
                onClick={() => {
                  onAddToCart();
                  onClose();
                }}
                className="flex-1 sm:flex-none bg-[#F97316] hover:bg-black text-white px-10 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-xl shadow-orange-600/20 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e4e4e7; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #F97316; }
      `}</style>
    </div>
  );
};

export default ProductDetailsModal;
