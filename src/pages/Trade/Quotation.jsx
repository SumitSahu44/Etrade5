import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Printer, Send, Calculator, CheckCircle2, User, Building2, MapPin, Hash, Phone, Mail, ListTodo } from 'lucide-react';
import { API_BASE_URL } from '../../utils/api';

const Quotation = () => {
  const [formData, setFormData] = useState({
    traderName: '',
    businessName: '',
    businessAddress: '',
    gstNo: '',
    mobileNo: '',
    email: '',
    quotationType: '',
    particulars: ''
  });
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const inputClass = "w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold placeholder:text-slate-400";
  const labelClass = "block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 ml-1";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      const response = await fetch(`${API_BASE_URL}/quotation`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          siteId: "ParekheTradeMarket02",
          ...formData
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Failed to submit quotation.');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
 const accentBlue = "#2563eb";

  return (
    <div className="py-20 bg-slate-50 min-h-screen relative overflow-hidden font-sans">

      {/* --- ELITE BACKGROUND TEXTURE --- */}
      <div className="absolute top-0 left-0 w-full h-80 bg-slate-950">
        <div className="absolute inset-0 opacity-20 bg-[url('https://img.freepik.com/free-photo/color-tone-texture-fabric-sample_1373-421.jpg?w=1060')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* --- HEADER ACTIONS --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-white md:text-slate-900 tracking-tighter mb-2">e-Quotation</h2>
            <p className="text-black font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
              <CheckCircle2 size={14} /> Official Trade Submission Form
            </p>
          </div>

        </div>

        {/* --- MAIN FORM CARD --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] shadow-2xl shadow-slate-900/5 border border-white overflow-hidden"
        >
          {/* Top Branding Bar */}
          <div className="p-10 md:p-14 bg-slate-50 flex flex-col md:flex-row justify-between gap-8 border-b border-slate-100">
            <div className="flex flex-col">
  {/* Line 1: PAREKH (Black) */}
  <h1 className="text-[14px] md:text-[15px] font-black text-slate-900 leading-none">
    PAREKH
  </h1>

  {/* Line 2: e-TRADE Market (Textile) (All Blue) */}
  <div style={{ color: accentBlue }} className="flex items-baseline gap-1 mt-0.5">
    <span className="text-[13px] md:text-[14px] font-black leading-none">
      <span className="lowercase italic">e</span>-TRADE
    </span>
    <span className="text-[13px] md:text-[14px] font-black uppercase tracking-tight">
      Market (Textile) Hub
    </span>
  </div>

  {/* Line 3: Portal Info */}
  <div className="mt-0.5">
    <p className="text-[11px] font-black uppercase text-slate-600 leading-none">
      Quotation Submission Portal
    </p>
  </div>
</div>
         
          </div>

          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center p-14 text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Quotation Submitted</h3>
              <p className="text-slate-500 font-medium">Thank you. Your quotation has been successfully submitted to Parekh Trade.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-10 md:p-14 space-y-8">
              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border-l-4 border-red-500 mb-4">
                  {errorMsg}
                </div>
              )}
              {/* Section 1: Trader Identity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}>Name of the Trader *</label>
                  <div className="relative">
                    <input type="text" name="traderName" required value={formData.traderName} onChange={handleChange} className={inputClass} placeholder="Full Name" />
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Business Name *</label>
                  <div className="relative">
                    <input type="text" name="businessName" required value={formData.businessName} onChange={handleChange} className={inputClass} placeholder="Company / Firm Name" />
                    <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                </div>
              </div>

              {/* Section 2: Address & GST */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <label className={labelClass}>Business Address with Pin Code *</label>
                  <div className="relative">
                    <input type="text" name="businessAddress" required value={formData.businessAddress} onChange={handleChange} className={inputClass} placeholder="Full Office Address..." />
                    <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>GST No.</label>
                  <div className="relative">
                    <input type="text" name="gstNo" value={formData.gstNo} onChange={handleChange} className={inputClass} placeholder="15-digit GSTIN" />
                    <Hash className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                </div>
              </div>

              {/* Section 3: Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className={labelClass}>Mobile No. *</label>
                  <div className="relative">
                    <input type="tel" name="mobileNo" required value={formData.mobileNo} onChange={handleChange} className={inputClass} placeholder="+91 00000-00000" />
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Email Id *</label>
                  <div className="relative">
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="business@email.com" />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                </div>
              </div>

              {/* Section 4: Quotation Type & Particulars */}
              <div className="space-y-8 pt-4 border-t border-slate-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className={labelClass}>Quotation For (Options) *</label>
                    <select name="quotationType" required value={formData.quotationType} onChange={handleChange} className={inputClass}>
                      <option value="">Select Quotation Type</option>
                      <option value="finished">Quotation for sell our Finished Textile Products</option>
                      <option value="raw">Quotation for sell or Raw Textile Products</option>
                      <option value="particulars">Particulars of the Products</option>
                    </select>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-slate-500 mb-2">
                      <Calculator size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Market Standards</span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-medium">
                      Ensure all particulars include Quality, Grade, and Packaging details.
                    </p>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Particulars Details (Optional)</label>
                  <div className="relative">
                    <textarea
                      name="particulars"
                      value={formData.particulars}
                      onChange={handleChange}
                      className={`${inputClass} h-40 resize-none pt-4`}
                      placeholder="List products here (e.g. Item Name, Qty, Price, Fabric Weight, etc.)"
                    ></textarea>
                    <ListTodo className="absolute right-4 bottom-4 text-slate-300" size={20} />
                  </div>
                </div>
              </div>

              {/* Submit Section */}
              <div className="flex flex-col items-center gap-6 pt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-12 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs tracking-[0.2em] shadow-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Submit e-Quotation"} {!loading && <Send size={16} />}
                </motion.button>
              </div>

            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Quotation;
