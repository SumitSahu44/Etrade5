import React from 'react';
import { motion } from 'framer-motion';
import { Send, Globe, Phone, Building2, MapPin, Hash, Mail, User } from 'lucide-react';

const TradeEnquiry = () => {
  const inputClass = "w-full p-4 bg-white/70 backdrop-blur-md border border-white/30 rounded-2xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold placeholder:text-slate-400";
  const labelClass = "block text-[10px] font-black text-blue-900 uppercase tracking-[0.1em] mb-2 ml-1";

  return (
    <div className="py-24 min-h-screen relative overflow-hidden flex items-center justify-center">
      
      {/* --- ELITE BACKGROUND TEXTURES --- */}
      <div className="absolute inset-0 bg-[#f0f4f8]"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-200/30 rounded-full blur-[120px]"></div>

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      {/* --- FORM CONTAINER --- */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-4xl w-full px-6 relative z-10"
      >
        <div className="bg-white/60 backdrop-blur-2xl p-10 md:p-16 rounded-[4rem] border border-white/50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]">
          
          {/* Header */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-blue-100 pb-8">
            <div>
              <div className="flex items-center gap-2 text-blue-600 mb-3">
                <Globe size={18} className="animate-spin-slow" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Trade Enquiry</span>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 tracking-tighter uppercase leading-none">
                B2B <span className="text-blue-600">Portal</span>
              </h2>
            </div>
            <p className="text-slate-500 font-medium text-sm max-w-[240px]">
              Fill out the details below to connect with our textile network.
            </p>
          </div>

          <form className="space-y-6">
            {/* Row 1: Name and Business Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Name of the Trader</label>
                <div className="relative">
                  <input type="text" className={inputClass} placeholder="Full Name" />
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-200" size={18} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Business Name</label>
                <div className="relative">
                  <input type="text" className={inputClass} placeholder="Company Name" />
                  <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-200" size={18} />
                </div>
              </div>
            </div>

            {/* Row 2: Address */}
            <div>
              <label className={labelClass}>Business Address with Pin Code</label>
              <div className="relative">
                <input type="text" className={inputClass} placeholder="Street, City, State - Pin Code" />
                <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-200" size={18} />
              </div>
            </div>

            {/* Row 3: GST and Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>GST No.</label>
                <div className="relative">
                  <input type="text" className={inputClass} placeholder="22AAAAA0000A1Z5" />
                  <Hash className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-200" size={18} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Mobile No.</label>
                <div className="relative">
                  <input type="tel" className={inputClass} placeholder="+91 00000-00000" />
                  <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-200" size={18} />
                </div>
              </div>
            </div>

            {/* Row 4: Email and Dropdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Email Id</label>
                <div className="relative">
                  <input type="email" className={inputClass} placeholder="business@example.com" />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-200" size={18} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Trade Options</label>
                <select className={inputClass}>
                  <option value="">Select Enquiry Type</option>
                  <option value="sell_textile">For Textile Product Sell</option>
                  <option value="buy_textile">For Textile Product Buy</option>
                  <option value="sell_machinery">For Textile Machinery & Spare Sell</option>
                  <option value="buy_machinery">For Textile Machinery Buy</option>
                  <option value="others">Others</option>
                </select>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 mt-4"
            >
              Submit Enquiry <Send size={18} />
            </motion.button>

            <div className="text-center pt-4">
              <p className="text-[9px] font-black text-slate-600 uppercase ">
                Official Submission Portal • Textile Trade Market
              </p>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default TradeEnquiry;