import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, CheckCircle2 } from 'lucide-react';

const AssociatesMap = () => {
  const hubs = [
    { city: 'Hyderabad (HQ)', type: 'Central Operations' },
    { city: 'Surat Hub', type: 'Textile Manufacturing' },
    { city: 'Bhiwandi Center', type: 'Logistics & Warehousing' },
    { city: 'Ludhiana Unit', type: 'Machinery & Spares' }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Professional Content */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-black uppercase tracking-widest mb-6">
            <Globe size={14} /> Global Presence
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Our Textile <br />
            <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">Associates & Network</span>
          </h2>
          
          <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl">
            PAREKH e-TRADE boasts a robust pan-India infrastructure. Our authorized partners 
            and advanced supply centers are strategically located in every major textile 
            manufacturing hub to ensure seamless trade and rapid logistics.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {hubs.map((hub, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 rounded-2xl border border-slate-50 hover:border-blue-100 hover:bg-blue-50/50 transition-all"
              >
                <div className="mt-1 bg-blue-600 text-white p-1.5 rounded-lg shadow-lg shadow-blue-200">
                  <MapPin size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{hub.city}</h4>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-tighter">{hub.type}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 flex items-center gap-6 p-6 bg-slate-900 rounded-3xl text-white">
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-700 flex items-center justify-center text-[10px] font-bold">Partner</div>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold">500+ Verified Associates</p>
              <p className="text-xs text-slate-400">Expanding across 22 states in India</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Professional Video Presentation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50" />

          {/* Video Wrapper */}
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border-8 border-white group">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline 
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
            >
              <source src="/videos/india-map.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Glassmorphism Overlay Label */}
            {/* <div className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-md bg-white/70 border border-white/50 rounded-2xl flex items-center justify-between">
              <div>
                <p className="text-[10px] font-black uppercase text-blue-600 tracking-[0.2em]">Network Status</p>
                <p className="text-sm font-bold text-slate-900">Live Coverage: Active</p>
              </div>
              <CheckCircle2 className="text-green-500" size={24} />
            </div> */}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AssociatesMap;