
import React, { useState, useRef, useEffect } from 'react';
import { getProductRecommendation } from '../services/gemini';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Efecto para mantener el scroll al final de la conversación
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const botResponse = await getProductRecommendation(userMsg);
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Hubo un error de conexión. Por favor, reintentá en un momento." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[200]">
      {isOpen ? (
        <div className="bg-white rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.2)] w-[360px] md:w-[420px] h-[580px] flex flex-col border border-zinc-100 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          {/* Header del Chat */}
          <div className="bg-black text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center font-black text-2xl text-[#F97316] drop-shadow-[0_0_10px_rgba(249,115,22,0.4)]">
                ZM
              </div>
              <div>
                <p className="font-bold text-sm tracking-tight leading-none mb-1">Asesoría Zinguería Mercedes</p>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-[0.1em]">Online</span>
                </div>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="p-2 hover:bg-zinc-800 rounded-full transition-colors text-zinc-400 hover:text-white"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Área de Mensajes */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-5 bg-zinc-50 scroll-smooth">
            {messages.length === 0 && (
              <div className="text-center py-12 animate-in fade-in zoom-in duration-700">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <svg className="w-10 h-10 text-[#F97316]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                </div>
                <h4 className="font-black text-zinc-900 text-lg mb-2">¡Bienvenido!</h4>
                <p className="text-sm text-zinc-500 px-6 leading-relaxed">
                  ¿Buscás calefacción eficiente o zinguería a medida? Consultame lo que necesites sobre <b>Tromen</b> y <b>Lepen</b>.
                </p>
              </div>
            )}
            
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[88%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-[#F97316] text-white rounded-br-none shadow-lg shadow-orange-600/20 font-medium' 
                  : 'bg-white text-zinc-800 border border-zinc-200 rounded-bl-none shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-zinc-200 p-4 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-orange-300 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Área de Entrada */}
          <div className="p-6 bg-white border-t border-zinc-100">
            <div className="flex gap-3 items-center">
              <input 
                type="text" 
                placeholder="Escribí tu mensaje aquí..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                disabled={isLoading}
                className="flex-1 bg-zinc-100 border-none rounded-2xl px-5 py-4 text-sm focus:ring-2 focus:ring-[#F97316] transition-all disabled:opacity-50 placeholder-zinc-400"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-black text-white p-4 rounded-2xl hover:bg-[#F97316] transition-all disabled:opacity-30 active:scale-95 shadow-xl flex items-center justify-center"
              >
                <svg className="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black text-white w-18 h-18 rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all hover:scale-110 active:scale-95 group flex items-center justify-center relative border-4 border-white"
        >
          <svg className="w-8 h-8 text-white group-hover:text-orange-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-600 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}
    </div>
  );
};

export default AIAssistant;
