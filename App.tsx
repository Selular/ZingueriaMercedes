
import React, { useState, useMemo } from 'react';
import { Category, Brand, Product, CartItem } from './types';
import { products } from './data/products';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Sidebar from './components/Sidebar';
import CartSidebar from './components/CartSidebar';
import AIAssistant from './components/AIAssistant';
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
      const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchBrand && matchSearch;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const bestSellers = useMemo(() => products.filter(p => p.isBestSeller), []);

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

  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col scroll-smooth">
      <Navbar 
        cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      
      {/* 1. HERO */}
      <Hero />

      {/* 2. HIGHLIGHTS */}
      <div id="best-sellers">
        <BestSellers products={bestSellers} onAddToCart={addToCart} onSelectProduct={setSelectedProduct} />
      </div>
      
      {/* 3. CATALOG */}
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
              <h2 className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tight leading-none mb-8">
                {selectedCategory === 'Todos' ? 'Catálogo Completo' : selectedCategory}
              </h2>
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
                  className="mt-10 bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-[#F97316]"
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

      <AIAssistant />

      {/* FOOTER ACTUALIZADO SEGÚN IMAGEN */}
      <footer className="bg-black text-white pt-20 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          
          {/* Columna 1: Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-4xl font-black text-[#F97316]">ZM</span>
              <h2 className="text-2xl font-bold">
                Zinguería <span className="text-[#F97316]">Mercedes</span>
              </h2>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Llevamos el calor a tu hogar con la pasión y el profesionalismo que nos caracteriza. Distribución oficial y zinguería de alta gama.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://www.instagram.com/zingueria_mercedes/" target="_blank" rel="noreferrer" className="text-white hover:text-[#F97316] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="space-y-8">
            <h3 className="text-[#F97316] font-black text-xs uppercase tracking-[0.3em] border-b-2 border-[#F97316] w-fit pb-1">
              NAVEGACIÓN
            </h3>
            <ul className="space-y-4 text-zinc-300 text-sm">
              <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-white transition-colors">Inicio</button></li>
              <li><button onClick={() => scrollToSection('catalog-start')} className="hover:text-white transition-colors">Catálogo Completo</button></li>
              <li><button onClick={() => scrollToSection('best-sellers')} className="hover:text-white transition-colors">Ofertas Destacadas</button></li>
            </ul>
          </div>

          {/* Columna 3: Atención */}
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
                  <p className="text-zinc-400 text-xs leading-relaxed">Encontranos en la 101 y 30bis<br />n°732, Mercedes Bs. As</p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg className="w-6 h-6 text-[#F97316] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-bold text-white mb-1">WhatsApp Directo</p>
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
