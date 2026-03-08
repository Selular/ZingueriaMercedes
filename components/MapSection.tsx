import React from 'react';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const MapSection: React.FC = () => {
  return (
    <section id="where-to-find-us" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-1 w-10 bg-orange-600 rounded-full"></span>
                <span className="text-orange-600 font-black text-[10px] uppercase tracking-[0.5em]">Ubicación</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-zinc-900 tracking-tighter leading-none mb-6">
                Donde <span className="text-orange-600">Encontrarnos.</span>
              </h2>
              <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
                Visítanos en nuestro showroom en Mercedes. Contamos con stock permanente y asesoramiento personalizado para tu proyecto.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 transition-all hover:shadow-xl hover:shadow-zinc-200/50 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black text-zinc-900 uppercase tracking-widest text-xs mb-1">Dirección</h4>
                  <p className="text-zinc-500 font-medium">Calle 101 y 30bis n°732, Mercedes, BA</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 transition-all hover:shadow-xl hover:shadow-zinc-200/50 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-black text-zinc-900 uppercase tracking-widest text-xs mb-1">Teléfono / WhatsApp</h4>
                  <p className="text-zinc-500 font-medium">+54 9 2324 69-9889</p>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-3xl bg-zinc-50 border border-zinc-100 transition-all hover:shadow-xl hover:shadow-zinc-200/50 group">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-all">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-black text-zinc-900 uppercase tracking-widest text-xs mb-1">Horarios</h4>
                  <p className="text-zinc-500 font-medium">Lunes a Viernes: 8:00 - 18:00<br />Sábados: 8:30 - 13:00</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-[48px] overflow-hidden shadow-2xl shadow-black/10 border-8 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1d3283.432657833543!2d-59.42398452425946!3d-34.61848497294951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc730000000001%3A0x0!2zMzTCsDM3JzA2LjUiUyA1OcKwMjUnMTguMSJX!5e0!3m2!1ses-419!2sar!4v1710000000000!5m2!1ses-419!2sar" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-1000"
            ></iframe>
            <div className="absolute top-8 right-8 bg-black text-white px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl">
              Showroom Mercedes
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
