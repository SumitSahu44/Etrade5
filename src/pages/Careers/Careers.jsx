import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Globe, ShieldCheck } from 'lucide-react';

const Careers = () => {
  const jobs = [
    { title: "Supply Chain Manager", type: "Full-Time", loc: "Hyderabad", dept: "Logistics" },
    { title: "React Developer", type: "Remote", loc: "Digital Hub", dept: "Tech Team" },
    { title: "Sales Executive", type: "Full-Time", loc: "Surat", dept: "Market Relations" }
  ];

  const benefits = [
    { icon: <Zap size={24} />, title: "Fast Growth", desc: "Rapid career advancement in a growing e-trade sector." },
    { icon: <Globe size={24} />, title: "Global Impact", desc: "Work on projects that connect international textile markets." },
    { icon: <ShieldCheck size={24} />, title: "Secure Future", desc: "Competitive packages with full healthcare benefits." }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans">
      
      {/* --- HERO HEADER (Industrial Dark) --- */}
      <section className="relative bg-slate-950 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 bg-blue-600/20 border border-blue-500/30 text-blue-400 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Work with Parekh e-Trade
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter uppercase mb-6 leading-none">
            Join Our <span className="text-blue-500">Elite Team</span>
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-lg font-medium">
            We are looking for innovators, thinkers, and doers to redefine the global textile commerce.
          </p>
        </div>
      </section>

      {/* --- BENEFITS SECTION (Subtle Texture) --- */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 -mt-20 relative z-20">
        {benefits.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-white group hover:border-blue-200 transition-all">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
              {item.icon}
            </div>
            <h4 className="text-lg font-bold text-slate-800 uppercase tracking-tight mb-3">{item.title}</h4>
            <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* --- JOB LISTINGS (Clean Slate Background) --- */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Open Opportunities</h2>
            <p className="text-slate-500 font-medium mt-1">Explore your next role in the textile ecosystem.</p>
          </div>
          <div className="hidden md:block text-xs font-black text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-lg">
            {jobs.length} Positions Active
          </div>
        </div>
        
        <div className="space-y-6">
          {jobs.map((job, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ x: 10 }}
              className="p-8 bg-white border border-slate-100 rounded-[2rem] flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group cursor-pointer"
            >
              <div className="flex gap-6 items-center w-full">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                  <Briefcase size={28} />
                </div>
                <div>
                  <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-1 block">{job.dept}</span>
                  <h3 className="text-2xl font-bold text-slate-900 leading-tight tracking-tight group-hover:text-blue-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-3">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <MapPin size={14} /> {job.loc}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                      <Clock size={14} /> {job.type}
                    </span>
                  </div>
                </div>
              </div>
              
              <button className="w-full md:w-auto bg-slate-950 text-white px-10 py-4 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl shadow-slate-900/20 hover:bg-blue-600 hover:shadow-blue-200 transition-all flex items-center justify-center gap-2">
                Apply Now <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- CTA FOOTER --- */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto bg-blue-900 rounded-[3rem] p-12 text-center text-white shadow-2xl shadow-blue-900/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <h3 className="text-3xl font-bold mb-4 uppercase tracking-tighter relative z-10">Don't see a fit?</h3>
          <p className="text-blue-200 mb-8 max-w-md mx-auto font-medium relative z-10">
            Send us your resume at <span className="text-white font-bold">hr@parekhtrade.com</span> and we'll keep you in mind for future roles.
          </p>
          <button className="bg-white text-blue-900 px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest relative z-10 hover:bg-blue-50 transition-all">
            General Application
          </button>
        </div>
      </section>
    </div>
  );
};

export default Careers;