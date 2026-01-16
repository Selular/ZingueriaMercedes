
import React, { useState, useMemo, useEffect } from 'react';
import { Category, Brand, Product, CartItem } from './types';
import { products } from './data/products';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Sidebar from './components/Sidebar';
import CartSidebar from './components/CartSidebar';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import ProductDetailsModal from './components/ProductDetailsModal';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'Todos'>('Todos');
  const [selectedBrand, setSelectedBrand] = useState<Brand | 'Todos'>('Todos');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchCategory = selectedCategory === 'Todos' || p.category === selectedCategory;
      const matchBrand = selectedBrand === 'Todos' || p.brand === selectedBrand;
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchBrand && matchSearch;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const bestSellers = useMemo(() => products.filter(p => p.isBestSeller), []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // Efecto para scrollear al catálogo cuando se busca algo
  useEffect(() => {
    if (searchQuery.length > 0) {
      scrollToSection('catalog-start');
    }
  }, [searchQuery]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col scroll-smooth">
      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      <Hero />

      <div id="best-sellers">
        <BestSellers products={bestSellers} onAddToCart={addToCart} onSelectProduct={setSelectedProduct} />
      </div>
      
      <div id="catalog-start" className="max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <Sidebar 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedBrand={selectedBrand}
            setSelectedBrand={setSelectedBrand}
          />
          
          <main className="flex-1">
            <header className="mb-16">
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-12 bg-[#F97316]"></span>
                <span className="text-[11px] font-black text-[#F97316] uppercase tracking-[0.5em]">Nuestros Productos</span>
              </div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <h2 className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tight leading-none">
                  {selectedCategory === 'Todos' ? 'Catálogo' : selectedCategory}
                </h2>
                {searchQuery && (
                  <p className="text-zinc-400 font-medium">Resultados para: <span className="text-black font-bold">"{searchQuery}"</span></p>
                )}
              </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={() => addToCart(product)} 
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-32 text-center bg-white rounded-[40px] border border-zinc-100 shadow-sm">
                <h3 className="text-3xl font-black text-zinc-900 mb-4">Sin resultados</h3>
                <button 
                  onClick={() => {
                    setSelectedCategory('Todos');
                    setSelectedBrand('Todos');
                    setSearchQuery('');
                  }}
                  className="mt-10 bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-[#F97316] transition-colors"
                >
                  Restablecer filtros
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      <ProductDetailsModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        onAddToCart={() => selectedProduct && addToCart(selectedProduct)} 
      />

      <footer className="bg-black text-white pt-20 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black text-[#F97316] italic">ZM</span>
              <h2 className="text-2xl font-bold">
                Zinguería <span className="text-[#F97316]">Mercedes</span>
              </h2>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Llevamos el calor a tu hogar con la pasión y el profesionalismo que nos caracteriza. Distribución oficial y zinguería de alta gama.
            </p>
          </div>

          <div className="space-y-8">
            <h3 className="text-[#F97316] font-black text-xs uppercase tracking-[0.3em] border-b-2 border-[#F97316] w-fit pb-1">
              NAVEGACIÓN
            </h3>
            <ul className="space-y-4 text-zinc-300 text-sm">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Inicio</button></li>
              <li><button onClick={() => scrollToSection('catalog-start')} className="hover:text-white transition-colors">Catálogo Completo</button></li>
              <li><button onClick={() => scrollToSection('best-sellers')} className="hover:text-white transition-colors">Más Vendidos</button></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h3 className="text-[#F97316] font-black text-xs uppercase tracking-[0.3em]">
              ATENCIÓN
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[#F97316] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-bold text-white mb-1">¿Dónde estamos?</p>
                  <p className="text-zinc-400 text-xs leading-relaxed">Calle 101 y 30bis n°732<br />Mercedes, Buenos Aires</p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[#F97316] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-bold text-white mb-1">WhatsApp</p>
                  <p className="text-zinc-400 text-xs font-bold">+54 9 2324 69-9889</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-10 border-t border-white/5 text-center">
           <p className="text-zinc-700 text-[10px] font-black uppercase tracking-widest">© {new Date().getFullYear()} Zinguería Mercedes. Distribuidor Oficial.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
