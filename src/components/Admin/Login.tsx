import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowRight } from 'lucide-react';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock login
    if (username === 'admin' && password === 'admin123') {
      localStorage.setItem('isAdminAuthenticated', 'true');
      navigate('/admin');
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-[40px] p-10 shadow-2xl overflow-hidden relative group">
        <div className="absolute top-0 left-0 w-full h-2 bg-orange-600"></div>
        
        <div className="mb-10 text-center">
          <div className="w-16 h-16 bg-zinc-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-orange-600">
            <Lock size={32} />
          </div>
          <h1 className="text-3xl font-black text-zinc-900 tracking-tighter mb-2">Acceso Administrador</h1>
          <p className="text-zinc-400 text-sm font-medium">Ingresa tus credenciales para gestionar el catálogo</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-4">Usuario</label>
            <div className="relative">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all text-sm font-medium"
                placeholder="Nombre de usuario"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-[0.2em] ml-4">Contraseña</label>
            <div className="relative">
              <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-2 focus:ring-orange-600/20 focus:border-orange-600 transition-all text-sm font-medium"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {error && (
            <div className="bg-red-50 text-red-600 text-xs font-bold p-4 rounded-xl border border-red-100 animate-shake">
              {error}
            </div>
          )}

          <button 
            type="submit"
            className="w-full bg-zinc-900 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-orange-600 transition-all active:scale-95 shadow-xl shadow-black/10 flex items-center justify-center gap-3 group"
          >
            Iniciar Sesión
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-zinc-100 text-center">
          <button 
            onClick={() => navigate('/')}
            className="text-zinc-400 text-xs font-bold hover:text-zinc-900 transition-colors"
          >
            Volver a la tienda
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
