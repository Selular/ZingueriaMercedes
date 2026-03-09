import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Edit2, 
  Trash2, 
  LogOut, 
  Package, 
  TrendingUp, 
  DollarSign,
  X,
  Save,
  Image as ImageIcon,
  ChevronLeft,
  ChevronRight,
  Upload,
  AlertTriangle
} from 'lucide-react';
import { Product, Category, Brand } from '../../types';
import { products as initialProducts } from '../../data/products';

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [productToDelete, setProductToDelete] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 8;
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    price: 0,
    category: Category.CALEFACCION,
    brand: Brand.TROMEN,
    imageUrl: '',
    isBestSeller: false,
    specs: []
  });

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAdminAuthenticated');
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    // Load products from localStorage or use initial
    const savedProducts = localStorage.getItem('zm_products');
    if (savedProducts) {
      setProducts(JSON.parse(savedProducts));
    } else {
      setProducts(initialProducts);
      localStorage.setItem('zm_products', JSON.stringify(initialProducts));
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    navigate('/login');
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const stats = {
    total: products.length,
    bestSellers: products.filter(p => p.isBestSeller).length,
    avgPrice: products.reduce((acc, p) => acc + p.price, 0) / (products.length || 1)
  };

  const openModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product);
      setFormData(product);
    } else {
      setEditingProduct(null);
      setFormData({
        name: '',
        price: 0,
        category: Category.CALEFACCION,
        brand: Brand.TROMEN,
        imageUrl: '',
        isBestSeller: false,
        specs: []
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProduct(null);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    let updatedProducts: Product[];

    if (editingProduct) {
      updatedProducts = products.map(p => p.id === editingProduct.id ? { ...p, ...formData } as Product : p);
    } else {
      const newProduct: Product = {
        ...formData,
        id: Math.random().toString(36).substr(2, 9),
      } as Product;
      updatedProducts = [...products, newProduct];
    }

    setProducts(updatedProducts);
    localStorage.setItem('zm_products', JSON.stringify(updatedProducts));
    closeModal();
  };

  const handleDelete = (id: string) => {
    const updatedProducts = products.filter(p => p.id !== id);
    setProducts(updatedProducts);
    localStorage.setItem('zm_products', JSON.stringify(updatedProducts));
    setProductToDelete(null);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, imageUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      {/* Sidebar */}
      <aside className="w-72 bg-zinc-950 text-white flex flex-col p-8 sticky top-0 h-screen">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-10 h-10 flex items-center justify-center font-black text-3xl text-orange-600">ZM</div>
          <span className="font-bold text-lg">Administración</span>
        </div>

        <nav className="flex-1 space-y-2">
          <button className="w-full flex items-center gap-4 px-6 py-4 bg-orange-600 rounded-2xl font-bold text-sm transition-all">
            <Package size={20} /> Productos
          </button>
        </nav>

        <button 
          onClick={handleLogout}
          className="flex items-center gap-4 px-6 py-4 text-zinc-500 hover:text-red-500 transition-colors font-bold text-sm"
        >
          <LogOut size={20} /> Cerrar Sesión
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12">
        <header className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-black text-zinc-900 tracking-tighter mb-2">Gestión de Productos</h1>
            <p className="text-zinc-400 font-medium">Gestión del catálogo de Zinguería Mercedes</p>
          </div>
          <button 
            onClick={() => openModal()}
            className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all flex items-center gap-3 shadow-xl shadow-black/10"
          >
            <Plus size={18} /> Nuevo Producto
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
              <Package size={24} />
            </div>
            <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-1">Total Productos</p>
            <p className="text-3xl font-black text-zinc-900">{stats.total}</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm">
            <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6">
              <TrendingUp size={24} />
            </div>
            <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-1">Más Vendidos</p>
            <p className="text-3xl font-black text-zinc-900">{stats.bestSellers}</p>
          </div>
          <div className="bg-white p-8 rounded-[32px] border border-zinc-100 shadow-sm">
            <div className="w-12 h-12 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-6">
              <DollarSign size={24} />
            </div>
            <p className="text-zinc-400 text-xs font-black uppercase tracking-widest mb-1">Precio Promedio</p>
            <p className="text-3xl font-black text-zinc-900">
              {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(stats.avgPrice)}
            </p>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-[40px] border border-zinc-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
            <h3 className="font-black text-zinc-900 uppercase tracking-widest text-xs">Listado de Catálogo</h3>
            <div className="relative w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={16} />
              <input 
                type="text" 
                placeholder="Buscar por nombre o marca..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-zinc-200 rounded-xl py-2.5 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-black text-zinc-400 uppercase tracking-widest border-b border-zinc-100">
                  <th className="px-8 py-6">Producto</th>
                  <th className="px-8 py-6">Categoría</th>
                  <th className="px-8 py-6">Marca</th>
                  <th className="px-8 py-6">Precio</th>
                  <th className="px-8 py-6">Estado</th>
                  <th className="px-8 py-6 text-right">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100">
                {paginatedProducts.map(product => (
                  <tr key={product.id} className="group hover:bg-zinc-50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl overflow-hidden bg-zinc-100 shrink-0">
                          <img src={product.imageUrl} alt="" className="w-full h-full object-contain p-1" />
                        </div>
                        <span className="font-bold text-zinc-900">{product.name}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="px-3 py-1 bg-zinc-100 text-zinc-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">
                        {product.category}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="font-medium text-zinc-500">{product.brand}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className="font-black text-zinc-900">
                        {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(product.price)}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      {product.isBestSeller ? (
                        <span className="flex items-center gap-2 text-orange-600 text-[10px] font-black uppercase tracking-wider">
                          <TrendingUp size={12} /> Destacado
                        </span>
                      ) : (
                        <span className="text-zinc-300 text-[10px] font-bold uppercase tracking-wider">Estándar</span>
                      )}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => openModal(product)}
                          className="p-2 text-zinc-400 hover:text-zinc-900 hover:bg-white rounded-lg transition-all"
                        >
                          <Edit2 size={18} />
                        </button>
                        <button 
                          onClick={() => setProductToDelete(product.id)}
                          className="p-2 text-zinc-400 hover:text-red-500 hover:bg-white rounded-lg transition-all"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="p-8 border-t border-zinc-100 flex items-center justify-between bg-zinc-50/30">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                Mostrando <span className="text-zinc-900">{(currentPage - 1) * ITEMS_PER_PAGE + 1}</span> a <span className="text-zinc-900">{Math.min(currentPage * ITEMS_PER_PAGE, filteredProducts.length)}</span> de <span className="text-zinc-900">{filteredProducts.length}</span> productos
              </p>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-xl border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex items-center gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 rounded-xl text-xs font-black transition-all ${
                        currentPage === page 
                          ? 'bg-zinc-900 text-white shadow-lg shadow-black/10' 
                          : 'text-zinc-400 hover:text-zinc-900 hover:bg-white border border-transparent hover:border-zinc-200'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                </div>

                <button 
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-xl border border-zinc-200 text-zinc-400 hover:text-zinc-900 hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />
          <div className="relative w-full max-w-2xl bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-8 bg-zinc-950 text-white flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-black tracking-tighter">
                  {editingProduct ? 'Editar Producto' : 'Nuevo Producto'}
                </h2>
                <p className="text-zinc-500 text-xs font-medium">Completa la información del catálogo</p>
              </div>
              <button onClick={closeModal} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSave} className="flex-1 overflow-y-auto p-10 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-4">Nombre del Producto</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all text-sm font-medium"
                    placeholder="Ej: Estufa Lepen 12000"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-4">Precio (ARS)</label>
                  <input 
                    type="number" 
                    required
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: Number(e.target.value) })}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all text-sm font-medium"
                    placeholder="0"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-4">Categoría</label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as Category })}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all text-sm font-medium appearance-none"
                  >
                    {Object.values(Category).map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-4">Marca</label>
                  <select 
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value as Brand })}
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all text-sm font-medium appearance-none"
                  >
                    {Object.values(Brand).map(brand => (
                      <option key={brand} value={brand}>{brand}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-4">Imagen del Producto</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <ImageIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
                    <input 
                      type="url" 
                      required
                      value={formData.imageUrl}
                      onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                      className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all text-sm font-medium"
                      placeholder="URL de la imagen..."
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="file" 
                      id="file-upload"
                      className="hidden" 
                      accept="image/*"
                      onChange={handleImageUpload}
                    />
                    <label 
                      htmlFor="file-upload"
                      className="w-full bg-zinc-50 border border-zinc-100 border-dashed rounded-2xl py-4 px-6 flex items-center justify-center gap-3 text-sm font-bold text-zinc-500 hover:bg-zinc-100 hover:border-orange-600 transition-all cursor-pointer"
                    >
                      <Upload size={18} /> Subir desde PC
                    </label>
                  </div>
                </div>
                {formData.imageUrl && (
                  <div className="mt-4 w-32 h-32 rounded-2xl overflow-hidden border border-zinc-100">
                    <img src={formData.imageUrl} alt="Preview" className="w-full h-full object-contain p-2" />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 p-6 bg-zinc-50 rounded-[32px] border border-zinc-100">
                <input 
                  type="checkbox" 
                  id="isBestSeller"
                  checked={formData.isBestSeller}
                  onChange={(e) => setFormData({ ...formData, isBestSeller: e.target.checked })}
                  className="w-6 h-6 rounded-lg border-zinc-200 text-orange-600 focus:ring-orange-600/20"
                />
                <label htmlFor="isBestSeller" className="text-sm font-bold text-zinc-900 cursor-pointer">
                  Marcar como Producto Destacado (Best Seller)
                </label>
              </div>

              <div className="pt-6 border-t border-zinc-100 flex gap-4">
                <button 
                  type="button"
                  onClick={closeModal}
                  className="flex-1 py-4 border-2 border-zinc-100 text-zinc-400 rounded-2xl font-bold hover:bg-zinc-50 transition-all"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-1 py-4 bg-zinc-900 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3"
                >
                  <Save size={18} /> Guardar Cambios
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {productToDelete && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setProductToDelete(null)} />
          <div className="relative w-full max-w-md bg-white rounded-[40px] shadow-2xl p-10 text-center">
            <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <AlertTriangle size={40} />
            </div>
            <h2 className="text-3xl font-black text-zinc-900 tracking-tighter mb-4">¿Estás seguro?</h2>
            <p className="text-zinc-500 font-medium mb-10 leading-relaxed">
              Esta acción eliminará permanentemente el producto del catálogo. No se puede deshacer.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => setProductToDelete(null)}
                className="flex-1 py-4 border-2 border-zinc-100 text-zinc-400 rounded-2xl font-bold hover:bg-zinc-50 transition-all"
              >
                Cancelar
              </button>
              <button 
                onClick={() => handleDelete(productToDelete)}
                className="flex-1 py-4 bg-red-600 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-red-700 transition-all shadow-xl shadow-red-600/20"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
