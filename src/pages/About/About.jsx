import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const team = [
    { name: "Executive Director", role: "Strategic Operations", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" },
    { name: "Technical Head", role: "e-Trade Systems", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80" },
    { name: "Market Analyst", role: "Textile Relations", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" }
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* --- HERO SECTION (Dark Blue Tint) --- */}
      <section className="relative h-[450px] flex items-center justify-center bg-slate-950 text-white overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1558444479-c8a51bc9d844?auto=format&fit=crop&q=80" 
          className="absolute inset-0 w-full h-full object-cover opacity-20 scale-110" 
          alt="Textile Background"
        />
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-slate-950"></div>
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-blue-400 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Established 2026
          </motion.span>
          <motion.h1 
            initial={{ y: 30, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            About <span className="text-blue-500">Parekh e-Trade</span>
          </motion.h1>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- MISSION & VISION (Soft Blue Background) --- */}
      <section className="py-24 bg-blue-50/50 relative">
        {/* Abstract Background Shape */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 -skew-x-12 transform origin-top"></div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div 
            initial={{ x: -50, opacity: 0 }} 
            whileInView={{ x: 0, opacity: 1 }} 
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-sm font-black text-blue-600 uppercase tracking-widest mb-2">Our Core Purpose</h2>
              <h3 className="text-4xl font-bold text-slate-900 tracking-tighter uppercase">Empowering The <br/> Textile Ecosystem</h3>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              PAREKH e-TRADE MARKET was established to bridge the gap between global buyers and sellers. We provide a transparent, secure, and efficient digital platform for trading Raw Materials, Finished Goods, and state-of-the-art Textile Machinery.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-100">
                <Award className="text-blue-600 mb-4" size={32} />
                <h4 className="font-bold text-slate-900 text-2xl">100%</h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Verified Sellers</p>
              </div>
              <div className="p-6 bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-blue-100">
                <TrendingUp className="text-blue-600 mb-4" size={32} />
                <h4 className="font-bold text-slate-900 text-2xl">Global</h4>
                <p className="text-sm font-bold text-slate-400 uppercase tracking-wider">Market Reach</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }} 
            whileInView={{ scale: 1, opacity: 1 }} 
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1713952852616-1827a2f0cf51?w=800&auto=format&fit=crop&q=80" 
              className="rounded-[2.5rem] shadow-2xl relative z-10 border-8 border-white" 
              alt="Industry Factory" 
            />
          </motion.div>
        </div>
      </section>

      {/* --- MANAGEMENT (Slate Grey Background) --- */}
      <section className="py-24 bg-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-sm font-black text-blue-600 uppercase tracking-[0.3em] mb-3">Leadership</h2>
            <h3 className="text-4xl font-bold text-slate-900 tracking-tighter uppercase">Our Management</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -15 }} 
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/5 border border-white group"
              >
                <div className="relative h-80 overflow-hidden">
                  <img src={member.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={member.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
                </div>
                <div className="p-10">
                  <h3 className="font-bold text-2xl text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-black text-xs  tracking-widest">{member.role}</p>
                  <div className="w-10 h-1 bg-slate-100 mx-auto mt-6 rounded-full group-hover:w-20 group-hover:bg-blue-600 transition-all duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VISION STRIP (Deep Navy) --- */}
      <section className="py-16 bg-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h4 className="text-lg font-medium text-blue-200 italic leading-relaxed">
            "Our vision is to become the backbone of the global textile trade, ensuring every thread reaches its destination with trust and efficiency."
          </h4>
        </div>
      </section>
    </div>
  );
};

export default About;