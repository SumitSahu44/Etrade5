import React from 'react';
import { motion } from 'framer-motion';
// import { Linkedin, Mail } from 'lucide-react';

const Management = () => {
  const leaders = [
    { name: "Executive Director", role: "MD", desc: "25+ years of trade expertise.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" },
    { name: "Operational Lead", role: "COO", desc: "Expert in Global Supply Chain.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" },
    { name: "Technical Chief", role: "CTO", desc: "Digital e-Trade specialist.", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" }
  ];

  return (
    <section id="management" className="py-24 bg-blue-50/50 relative overflow-hidden">
      
      {/* Dark Texture Overlay for the Header */}
      <div className="absolute top-0 left-0 w-full h-[45vh] bg-slate-950 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551278135-21d120d88031?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-20"
          alt="Textile Texture"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* White Text Header */}
        <div className="text-center mb-20 h-[25vh] flex flex-col justify-center">
          <h2 className="text-sm font-black text-blue-400 uppercase tracking-[0.3em] mb-4">Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tighter uppercase">Our Management Team</h3>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {leaders.map((person, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/5 border border-white group"
            >
              <div className="h-80 overflow-hidden relative">
                <img src={person.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={person.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-10 text-center">
                <h4 className="text-xl font-bold text-slate-800 mb-1">{person.name}</h4>
                <p className="text-blue-600 text-xs font-black uppercase tracking-widest mb-4">{person.role}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 font-medium">{person.desc}</p>
                <div className="flex justify-center gap-4 border-t border-slate-100 pt-6">
                  {/* <button className="p-3 bg-slate-100 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all"><Linkedin size={18}/></button>
                  <button className="p-3 bg-slate-100 rounded-full text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all"><Mail size={18}/></button> */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Management;