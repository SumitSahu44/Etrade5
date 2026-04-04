import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, ArrowRight, Bell, Download } from 'lucide-react';

const Circulars = () => {
  const circulars = [
    { id: 1, title: "Revised GST Norms for Textile Job Work", date: "02 April 2026", category: "Regulation", size: "1.2 MB" },
    { id: 2, title: "Cotton Export Quota Update - Q2 2026", date: "28 March 2026", category: "Export", size: "850 KB" },
    { id: 3, title: "Import Duty Relief on Spinning Machinery", date: "15 March 2026", category: "Machinery", size: "2.1 MB" },
  ];

  return (
    <div className="min-h-screen bg-[#f1f5f9] font-sans relative overflow-hidden">
      
      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.35.713.974 1.246 1.717 1.438L30 23.062l-6.1 4.735 2.352 7.747L20 31l-6.252 4.544 2.352-7.747L10 23.062l7.099-1.624L20 15l1.184 5z' fill='%23000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}>
      </div>

      {/* --- DARK HEADER SECTION --- */}
      <section className="bg-slate-950 pt-24 pb-48 px-6 relative">
        {/* Subtle Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-6"
          >
            <Bell size={14} className="animate-bounce" /> Live Notifications
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4">
            Official <span className="text-blue-500 text-outline">Circulars</span>
          </h1>
          <p className="text-slate-400 font-medium max-w-lg mx-auto text-sm md:text-base">
            Latest regulatory updates, trade notices, and industrial policy shifts directly from Parekh e-Trade desk.
          </p>
        </div>
      </section>

      {/* --- CIRCULARS LIST (Layered Over Header) --- */}
      <section className="max-w-4xl mx-auto px-6 -mt-32 pb-24 relative z-20">
        <div className="space-y-4">
          {circulars.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white shadow-2xl shadow-slate-900/5 flex flex-col md:flex-row items-center gap-6 hover:bg-white transition-all duration-300"
            >
              {/* Icon with Color Background */}
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <FileText size={28} />
              </div>

              {/* Text Info */}
              <div className="flex-grow text-center md:text-left">
                <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase">
                    <Calendar size={12}/> {item.date}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase">
                    <Download size={12}/> {item.size}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Action Button */}
              <button className="p-4 rounded-2xl bg-slate-900 text-white group-hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 group-hover:shadow-blue-200">
                <ArrowRight size={20} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* --- ARCHIVE BUTTON --- */}
        <div className="mt-12 text-center">
           <button className="text-[11px] font-black text-slate-400 uppercase tracking-[0.4em] hover:text-blue-600 transition-all">
             View Older Archives ↓
           </button>
        </div>
      </section>
    </div>
  );
};

export default Circulars;