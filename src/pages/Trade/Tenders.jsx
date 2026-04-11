import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Info } from 'lucide-react';

const Tenders = () => {
  const tableData = []; // No active tenders

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-8 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[9px] font-black text-blue-400 uppercase tracking-[0.2em] mb-4">
              <ShieldCheck size={12} /> Verified Procurement
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 uppercase tracking-tighter">
              Tenders & <span className="text-blue-500">Contracts</span>
            </h2>
            <p className="text-slate-400 max-w-xl font-medium">
              Access premium textile production contracts and procurement opportunities through our secure e-trade portal.
            </p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-blue-900/40">
            View Contract Terms
          </button>
        </div> */}

        {tableData.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700 text-slate-400 uppercase text-[10px] font-black tracking-widest">
                  <th className="pb-6 px-4">Contract ID</th>
                  <th className="pb-6 px-4">Title</th>
                  <th className="pb-6 px-4">Closing Date</th>
                  <th className="pb-6 px-4">Status</th>
                  <th className="pb-6 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/50 transition-colors group">
                    <td className="py-8 px-4 font-mono text-blue-400 text-sm">{row.id}</td>
                    <td className="py-8 px-4 font-bold text-lg">{row.title}</td>
                    <td className="py-8 px-4 text-slate-400 font-medium">{row.end}</td>
                    <td className="py-8 px-4">
                      <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${row.status === 'Active' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-8 px-4 text-right">
                      <button className="text-xs font-black uppercase tracking-widest text-blue-500 hover:text-white transition-colors underline underline-offset-8">Apply/Bid</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* --- PREMIUM FALLBACK FOR NO TENDERS --- */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-800/30 backdrop-blur-sm rounded-[3rem] border border-slate-700/50 p-16 md:p-24 text-center"
          >
            <div className="w-20 h-20 bg-blue-500/10 text-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-inner border border-blue-500/20">
              <Info size={40} />
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6">
              ( At present, No EOI published .)
            </h3>
            {/* <p className="text-slate-400 font-medium max-w-lg mx-auto leading-relaxed">
              We're currently preparing new expression of interest (EOI) opportunities. Verified members will be notified as soon as new contracts are listed.
            </p>
            <div className="mt-12 flex justify-center items-center gap-4 text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">
              <span className="w-12 h-[1px] bg-slate-700"></span>
              PAREKH e-TRADE HUB
              <span className="w-12 h-[1px] bg-slate-700"></span>
            </div> */}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Tenders;
