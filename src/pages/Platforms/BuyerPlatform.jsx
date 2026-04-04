import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UserCheck, Building2, ShoppingBag, FolderLock, Eye, SendHorizontal, CheckCircle } from 'lucide-react';

const BuyerPlatform = () => {
  const [showPreview, setShowPreview] = useState(false);

  const businessNatures = ['Retailer', 'Wholesaler', 'Manufacturer'];
  const businessCategories = ['Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Ltd.', 'Other'];
  const textileItems = [
    'Textile Raw Materials', 
    'Textile Finished Products', 
    'Textile Industrial Machineries', 
    'Textile other Machineries', 
    'Textile Spares'
  ];

  const inputStyle = "w-full p-4 bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100/50 transition-all text-sm font-medium shadow-sm";
  const labelStyle = "block text-[11px] font-black text-slate-500 uppercase  mb-2 ml-1";

  return (
    <div className="min-h-screen bg-[#f0f4f8] font-sans relative overflow-hidden">
      
      {/* --- VISUAL BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div>

      {/* --- TOP BRANDED HERO STRIP (Dark Navy) --- */}
      <div className="bg-slate-950 pt-24 pb-40 px-6 relative">
        <img 
          src="https://media.istockphoto.com/id/177724641/photo/famous-saree-of-dhaka.webp?a=1&b=1&s=612x612&w=0&k=20&c=2IlqZ4V92HA1KIodjaA89w3X4flblnhoFY2y4B2mQCM=" 
          className="absolute inset-0 w-full h-full object-cover opacity-10" 
          alt="Textile Warehouse" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f0f4f8]"></div>
        
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase  mb-6 shadow-lg shadow-blue-500/20">
            Official Buyer Portal
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4  uppercase leading-none">
            Buyer's <span className="text-blue-500 text-outline">Platform</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-xl mx-auto text-sm md:text-base">
            Source premium raw materials, machineries, and spares through a verified B2B e-trade environment.
          </p>
        </div>
      </div>

      {/* --- MAIN FORM CONTAINER --- */}
      <div className="max-w-5xl mx-auto px-6 -mt-32 pb-20 relative z-20">
        <div className="bg-white/80 backdrop-blur-xl rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] border border-white overflow-hidden">
          
          <form className="p-8 md:p-16 space-y-16">
            
            {/* Section 1: Official Authorization */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
                  <UserCheck size={24} />
                </div>
                <div>
                   <h3 className="font-black text-slate-900 uppercase  text-xl leading-none">Official Authorization</h3>
                   <p className="text-[10px] font-bold text-slate-400 uppercase  mt-1">E-Trade Market Credentials</p>
                </div>
              </div>
              <div>
                <label className={labelStyle}>Authorized Official Name</label>
                <input type="text" placeholder="Full Name" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Code No.</label>
                <input type="text" placeholder="Assigned Code" className={inputStyle} />
              </div>
            </div>

            {/* Section 2: Buyer's Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-slate-100">
              <div className="md:col-span-2 flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <Building2 size={24} />
                </div>
                <h3 className="font-black text-slate-900 uppercase  text-xl">Business Information</h3>
              </div>
              <div>
                <label className={labelStyle}>Name of the Buyer</label>
                <input type="text" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Title of the Business</label>
                <input type="text" className={inputStyle} />
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Address of the Business</label>
                <textarea className={`${inputStyle} h-28 resize-none`} placeholder="Complete Office Address"></textarea>
              </div>
              <div>
                <label className={labelStyle}>Mobile No.</label>
                <input type="tel" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Email Id</label>
                <input type="email" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Website URL (If any)</label>
                <input type="url" placeholder="https://" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Nature of Business</label>
                <select className={inputStyle}>
                  <option value="">Select Nature</option>
                  {businessNatures.map(n => <option key={n} value={n}>{n}</option>)}
                </select>
              </div>
              <div>
                <label className={labelStyle}>Category of Business</label>
                <select className={inputStyle}>
                  <option value="">Select Category</option>
                  {businessCategories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Membership in Chamber of Textile (If any)</label>
                <input type="text" className={inputStyle} />
              </div>
            </div>

            {/* Section 3: Secure Document Vault (DARK THEME) */}
            <div className="p-10 bg-slate-950 rounded-[2.5rem] text-white relative overflow-hidden group">
               {/* Pattern for dark section */}
               <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity" 
                  style={{ backgroundImage: `linear-gradient(45deg, #2563eb 25%, transparent 25%, transparent 50%, #2563eb 50%, #2563eb 75%, transparent 75%, transparent)`, backgroundSize: '4px 4px' }}>
               </div>
               
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 text-blue-400">
                  <FolderLock size={28} />
                  <h3 className="font-black uppercase  text-xl">KYC Document Vault</h3>
                </div>
                <p className="text-xs font-medium text-slate-400 mb-8 max-w-md leading-relaxed">
                  Upload clear copies for verification: <br/>
                  <span className="text-white font-bold underline decoration-blue-500 underline-offset-4 ">
                    GST, MSME, Trade License, Labour License, LLP, CIN
                  </span>
                </p>
                <div className="relative cursor-pointer group/upload">
                  <input type="file" multiple className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer" />
                  <div className="p-8 border-2 border-dashed border-slate-700 rounded-3xl flex flex-col items-center justify-center bg-white/5 group-hover/upload:bg-white/10 transition-all duration-300">
                    <p className="text-sm font-bold text-slate-300 mb-1 uppercase ">Select Files</p>
                    <p className="text-[10px] text-slate-500 font-black ">MAX 10MB (PDF/JPG/PNG)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4: Procurement Requirements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-slate-100">
              <div className="md:col-span-2 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-200">
                  <ShoppingBag size={24} />
                </div>
                <h3 className="font-black text-slate-900 uppercase  text-xl">Procurement Details</h3>
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Textile Items to Buy (Roll-down mode)</label>
                <select className={inputStyle}>
                  <option value="">Select Item Category</option>
                  {textileItems.map(item => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Description of the items to buy</label>
                <textarea className={`${inputStyle} h-28 resize-none`} placeholder="Specify Material, Grade, Loom Type, or Spare Specs..."></textarea>
              </div>
              <div>
                <label className={labelStyle}>Required Quantity</label>
                <input type="text" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Tentative Rate for Buying</label>
                <input type="text" className={inputStyle} />
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Tentative Budget for Buying</label>
                <input type="text" className={inputStyle} />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-6 pt-12 border-t border-slate-100">
              <button 
                type="button" 
                onClick={() => setShowPreview(true)}
                className="flex-1 py-5 border-2 border-slate-900 text-slate-900 rounded-[1.5rem] font-black text-xs uppercase  hover:bg-slate-900 hover:text-white transition-all duration-300"
              >
                Preview Entry
              </button>
              <button 
                type="submit" 
                className="flex-1 py-5 bg-blue-600 text-white rounded-[1.5rem] font-black text-xs uppercase  shadow-[0_20px_40px_-10px_rgba(37,99,235,0.5)] hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Submit Request <CheckCircle size={16} />
              </button>
            </div>
            
            <div className="text-center pt-4">
              <p className="text-[10px] font-black text-slate-400  uppercase">
                Official Webmail: <span className="text-blue-600 underline">e-trade@parekhtrade.com</span>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* --- PREVIEW MODAL --- */}
      <AnimatePresence>
        {showPreview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-slate-900/60 backdrop-blur-xl z-[300] flex items-center justify-center p-6">
            <motion.div initial={{ scale: 0.9, y: 30 }} animate={{ scale: 1, y: 0 }} className="bg-white rounded-[3rem] w-full max-w-2xl p-12 relative border border-white">
              <div className="absolute top-0 left-0 w-full h-3 bg-blue-600"></div>
              <h3 className="text-3xl font-black text-slate-900 mb-6 uppercase ">Buyer Verification</h3>
              <p className="text-sm text-slate-500 font-medium mb-10 leading-relaxed">
                Confirm your procurement details and business certifications. After submission, our trade desk will authorize your membership within 24 business hours.
              </p>
              <button onClick={() => setShowPreview(false)} className="w-full py-5 bg-blue-600 text-white font-black rounded-2xl uppercase  text-xs shadow-xl shadow-blue-200">
                Back to Edit
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BuyerPlatform;