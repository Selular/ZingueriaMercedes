
import React from 'react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cart, onRemove, onUpdateQuantity }) => {
  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const formattedTotal = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
  }).format(total);

  const handleWhatsAppConsultation = () => {
    const phone = "5492324699889"; 
    const text = `Hola Zinguería Mercedes! Me gustaría consultar por los siguientes productos:
${cart.map(item => `- ${item.name} (${item.quantity} x ${new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(item.price)})`).join('\n')}

*Total estimado: ${formattedTotal}*`;
    
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col transform transition-transform duration-500 ease-in-out">
          <div className="px-6 py-6 bg-black text-white flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tight">Tu Consulta <span className="text-orange-500">({cart.length})</span></h2>
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-full">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-zinc-400">
                <svg className="w-20 h-20 mb-4 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <p>No hay productos en tu lista de consulta.</p>
                <button 
                  onClick={onClose}
                  className="mt-4 text-orange-600 font-bold hover:underline"
                >
                  Seguir comprando
                </button>
              </div>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex gap-4 p-4 rounded-xl bg-zinc-50 border border-zinc-100 group">
                  <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white border border-zinc-100">
                    <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-zinc-900 leading-tight">{item.name}</h4>
                      <p className="text-zinc-500 text-xs">{item.brand}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-white rounded-lg border border-zinc-200 px-2">
                        <button 
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-orange-600 transition-colors"
                        >
                          -
                        </button>
                        <span className="font-bold text-sm min-w-[20px] text-center">{item.quantity}</span>
                        <button 
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center text-zinc-400 hover:text-orange-600 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="text-xs text-zinc-400 hover:text-red-500 transition-colors"
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cart.length > 0 && (
            <div className="p-6 bg-zinc-50 border-t border-zinc-200">
              <div className="flex justify-between items-center mb-6">
                <span className="text-zinc-500 font-medium">Subtotal Estimado</span>
                <span className="text-2xl font-black text-zinc-900">{formattedTotal}</span>
              </div>
              <button 
                onClick={handleWhatsAppConsultation}
                className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-lg transition-all active:scale-95"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.113l.379.225c1.13.671 2.334 1.025 3.586 1.026 5.233 0 9.492-4.259 9.495-9.496.002-2.538-.987-4.922-2.783-6.72-1.797-1.797-4.182-2.784-6.723-2.784-5.233 0-9.493 4.258-9.495 9.496-.001 2.016.521 3.988 1.512 5.717l.247.428-1 3.65 3.732-.979zm11.215-6.745c-.3-.149-1.776-.876-2.05-.976-.275-.1-.475-.149-.675.149-.2.3-.775.976-.95 1.176-.175.2-.35.225-.65.075-.3-.149-1.266-.467-2.411-1.487-.893-.796-1.495-1.78-1.67-2.08-.175-.3-.019-.462.13-.611.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5s.05-.375-.025-.525c-.075-.15-.675-1.626-.925-2.226-.243-.585-.49-.505-.675-.515-.175-.01-.375-.01-.575-.01s-.525.075-.8.375c-.275.3-1.05 1.026-1.05 2.501s1.075 2.901 1.225 3.101c.15.2 2.115 3.23 5.125 4.53 1.25.54 2.225.873 2.986 1.114.761.241 1.453.208 2.001.127.611-.09 1.776-.726 2.025-1.426.25-.7.25-1.301.175-1.426-.075-.125-.275-.2-.575-.35z" />
                </svg>
                Consultar por WhatsApp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
