import React from 'react';
import { motion } from 'framer-motion';
import { Gavel, Clock, MapPin, User, Building2, Hash, Phone, Mail, Upload, AlertCircle, CheckCircle } from 'lucide-react';

const AuctionPortal = () => {
  const auctions = [
    { id: "AUC-771", item: "Used 2022 Swiss Spinning Frame", bid: "₹45,00,000", time: "04h 20m", loc: "Surat" },
    { id: "AUC-892", item: "Bulk Raw Silk (500kg)", bid: "₹12,50,000", time: "01h 15m", loc: "Bangalore" }
  ];

  const inputClass = "w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all text-sm font-semibold placeholder:text-slate-400";
  const labelClass = "block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 ml-1";

  return (
    <div className="py-24 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION 1: E-AUCTION PARTICIPATION FORM --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 bg-white rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden"
        >
          <div className="bg-slate-900 p-10 md:p-14 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-black tracking-tighter mb-2 text-white">e-Auction <span className="text-blue-400">Participation</span></h2>
              <div className="flex items-center gap-2 text-blue-300">
                <AlertCircle size={16} />
                <p className="text-xs font-bold  tracking-widest">At present, No e-Auction published</p>
              </div>
            </div>
            <Gavel className="absolute right-[-20px] bottom-[-20px] text-white/5 w-64 h-64 -rotate-12" />
          </div>

          <form className="p-10 md:p-14 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Row 1 */}
              <div>
                <label className={labelClass}>Name of the Participant</label>
                <div className="relative">
                  <input type="text" className={inputClass} placeholder="Full Name" />
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Legal Name of the Business</label>
                <div className="relative">
                  <input type="text" className={inputClass} placeholder="Registered Enterprise Name" />
                  <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                </div>
              </div>

              {/* Row 2 */}
              <div className="md:col-span-2">
                <label className={labelClass}>Business Address with Pin code</label>
                <div className="relative">
                  <input type="text" className={inputClass} placeholder="Complete Office Address & Pincode" />
                  <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                </div>
              </div>

              {/* Row 3 */}
              <div>
                <label className={labelClass}>GST No.</label>
                <div className="relative">
                  <input type="text" className={inputClass} placeholder="15-digit GST Number" />
                  <Hash className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Mobile No.</label>
                <div className="relative">
                  <input type="tel" className={inputClass} placeholder="+91 00000-00000" />
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                </div>
              </div>

              {/* Row 4 */}
              <div>
                <label className={labelClass}>Email Id</label>
                <div className="relative">
                  <input type="email" className={inputClass} placeholder="official@business.com" />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Upload GST Certificate</label>
                <label className="flex flex-col items-center justify-center w-full h-[52px] border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <Upload size={16} /> Choose PDF / Image
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
            >
              Register for Auction <CheckCircle size={18} />
            </motion.button>
          </form>
        </motion.div>

        {/* --- SECTION 2: LIVE AUCTION LISTING --- */}
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">LIVE e-AUCTIONS</h2>
            <p className="text-slate-500 font-medium mt-1">Real-time bidding for textile machinery and surplus stock.</p>
          </div>
          <div className="bg-red-500 text-white px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest animate-pulse flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span> {auctions.length} Live Sessions
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {auctions.map((auc) => (
            <motion.div 
              key={auc.id} 
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200 group hover:shadow-2xl hover:shadow-slate-200 transition-all duration-300"
            >
              <div className="p-8">
                <div className="flex justify-between text-[10px] font-black text-slate-400 mb-6 uppercase tracking-widest">
                  <span className="px-3 py-1 bg-slate-100 rounded-full">ID: {auc.id}</span>
                  <span className="flex items-center gap-1 text-red-500 font-bold"><Clock size={14}/> {auc.time} left</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight group-hover:text-blue-600 transition-colors">{auc.item}</h3>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-8">
                  <div className="p-2 bg-slate-50 rounded-lg"><MapPin size={16} className="text-blue-500"/></div>
                  {auc.loc} Trading Hub
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl mb-8 border border-slate-100">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">Current Highest Bid</p>
                  <p className="text-3xl font-black text-slate-900 tracking-tighter">{auc.bid}</p>
                </div>

                <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 transition-all flex items-center justify-center gap-3">
                  <Gavel size={18}/> Place Bid Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[10px] font-black text-slate-600 tracking-[0.2em]">
            Official Auction Portal • Parekh e-Trade Hub
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuctionPortal;