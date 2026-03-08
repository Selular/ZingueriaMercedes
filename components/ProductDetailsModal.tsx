
import React from 'react';
import { Product } from '../types';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: () => void;
}

const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({ product, onClose, onAddToCart }) => {
  if (!product) return null;

  const currencyFormatter = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  });

  const formattedPrice = currencyFormatter.format(product.price);
  
  const availableInstallments = product.installments?.length
    ? [...product.installments].sort((a, b) => a - b)
    : [3, 6];

  const installmentCards = availableInstallments.map((installments) => {
    const interestRate = installments >= 6 ? 1.3 : 1.15;
    return {
      installments,
      value: currencyFormatter.format((product.price * interestRate) / installments),
    };
  });

  const handleWhatsAppInquiry = () => {
    const phone = "5492324699889";
    const text = `Hola! Estoy viendo en su web el producto "${product.name}" de la marca ${product.brand} y me interesan los planes de pago en cuotas.`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Overlay con desenfoquecito */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose} 
      />
      
      {/* Contenedor pprincipal */}
      <div className="relative w-full max-w-6xl h-full max-h-[90vh] md:h-auto md:max-h-[85vh] bg-white rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl flex flex-col md:flex-row">
        
        {/* Botón para Cerrar */}
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 z-[160] flex items-center justify-center w-10 h-10 bg-zinc-100 hover:bg-zinc-200 text-zinc-900 rounded-full transition-all active:scale-90 shadow-md"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Sección de Imagen */}
        <div className="w-full md:w-[45%] h-[30vh] md:h-auto relative bg-zinc-200 shrink-0">
          <img 
            src={product.imageUrl} 
            alt={product.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 flex flex-col gap-2">
             <span className="bg-black/80 backdrop-blur-md text-white px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em]">
               {product.brand}
             </span>
             <span className="bg-orange-600 text-white px-4 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-[0.2em]">
               ZINGUERÍA PROPIA
             </span>
          </div>
        </div>

        {/* Sección de la info */}
        <div className="flex-1 flex flex-col min-h-0 bg-white">
          <div className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-14 custom-scrollbar">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-1 w-10 bg-orange-600"></div>
                <span className="text-[10px] font-black text-orange-600 uppercase tracking-[0.4em]">Financiación Disponible</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-black text-zinc-900 tracking-tighter leading-tight mb-8">
                {product.name}
              </h2>

              {/* Opciones de cuotas con interés */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {installmentCards.map((card) => (
                  <div
                    key={card.installments}
                    className={`p-5 rounded-2xl flex flex-col relative overflow-hidden ${
                      card.installments >= 6
                        ? 'bg-zinc-900 shadow-lg'
                        : 'bg-zinc-100 border border-zinc-200'
                    }`}
                  >
                    <span
                      className={`text-[8px] font-black uppercase tracking-[0.2em] mb-1 ${
                        card.installments >= 6 ? 'text-orange-500' : 'text-zinc-400'
                      }`}
                    >
                      {card.installments >= 6 ? 'Plan Extendido' : 'Financiación'}
                    </span>
                    <p className={`text-lg font-black leading-none ${card.installments >= 6 ? 'text-white' : 'text-zinc-900'}`}>
                      {card.installments} CUOTAS FIJAS
                    </p>
                    <p className={`text-xs font-bold mt-1 ${card.installments >= 6 ? 'text-zinc-400' : 'text-zinc-500'}`}>
                      Valor por cuota:{' '}
                      <span className={card.installments >= 6 ? 'text-white font-black' : 'text-zinc-900'}>{card.value}</span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Especificaciones técnicas */}
              {product.specs && (
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {product.specs.map((spec, idx) => (
                    <div key={idx} className="bg-zinc-50 p-4 rounded-xl border border-zinc-100 flex flex-col justify-center">
                      <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest mb-1">{spec.label}</span>
                      <span className="text-zinc-900 font-bold text-sm">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Características */}
              {product.features && (
                <div>
                  <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-zinc-400 mb-4">Garantía y Confianza</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="bg-zinc-100 text-zinc-700 px-3 py-1.5 rounded-lg text-[10px] font-bold">
                        • {feature}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer fijado VER */}
          <div className="p-6 md:p-10 border-t border-zinc-100 bg-zinc-50 flex flex-col sm:flex-row items-center justify-between gap-6 shrink-0">
            <div className="text-center sm:text-left">
              <p className="text-zinc-400 text-[9px] font-black uppercase tracking-widest mb-1">Precio Pago Contado</p>
              <p className="text-3xl font-black text-zinc-900 tracking-tighter">{formattedPrice}</p>
            </div>
            
            <div className="flex gap-3 w-full sm:w-auto">
               <button 
                onClick={handleWhatsAppInquiry}
                className="flex-1 sm:flex-none border-2 border-zinc-900 text-zinc-900 px-6 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all hover:bg-zinc-900 hover:text-white active:scale-95"
              >
                Consultar
              </button>
              <button 
                onClick={() => {
                  onAddToCart();
                  onClose();
                }}
                className="flex-1 sm:flex-none bg-orange-600 hover:bg-black text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] transition-all active:scale-95 shadow-xl shadow-orange-600/20 flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Agregar
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProductDetailsModal;
