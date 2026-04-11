import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Gavel, Clock, MapPin, User, Building2, Hash, Phone, Mail, Upload, AlertCircle, CheckCircle } from 'lucide-react';

const AuctionPortal = () => {
  const auctions = [
    { id: "AUC-771", item: "Used 2022 Swiss Spinning Frame", bid: "₹45,00,000", time: "04h 20m", loc: "Surat" },
    { id: "AUC-892", item: "Bulk Raw Silk (500kg)", bid: "₹12,50,000", time: "01h 15m", loc: "Bangalore" }
  ];

  const [formData, setFormData] = useState({
    participantName: '',
    legalBusinessName: '',
    businessAddress: '',
    gstNo: '',
    mobileNo: '',
    email: ''
  });
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef(null);

  const inputClass = "w-full p-4 bg-white border border-slate-200 rounded-2xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-50 transition-all text-sm font-semibold placeholder:text-slate-400";
  const labelClass = "block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 ml-1";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    const submitData = new FormData();
    submitData.append("siteId", "ParekheTradeMarket02");
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });
    if (file) {
      submitData.append("gstCertificate", file);
    }

    try {
      const response = await fetch("http://localhost:5000/api/auction", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(result.message || 'Failed to register for auction. Please try again.');
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setErrorMsg('Server error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 bg-slate-50 font-sans">
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

          {isSubmitted ? (
            <div className="p-14 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Registration Successful</h3>
              <p className="text-slate-500 font-medium max-w-lg">
                Your participation request for e-Auction has been received. Our team will verify your documents and get back to you.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-10 md:p-14 space-y-8">
              {errorMsg && (
                <div className="p-4 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-widest border-l-4 border-red-500 mb-4">
                  {errorMsg}
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Row 1 */}
                <div>
                  <label className={labelClass}>Name of the Participant *</label>
                  <div className="relative">
                    <input type="text" name="participantName" required value={formData.participantName} onChange={handleChange} className={inputClass} placeholder="Full Name" />
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Legal Name of the Business *</label>
                  <div className="relative">
                    <input type="text" name="legalBusinessName" required value={formData.legalBusinessName} onChange={handleChange} className={inputClass} placeholder="Registered Enterprise Name" />
                    <Building2 className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="md:col-span-2">
                  <label className={labelClass}>Business Address with Pin code *</label>
                  <div className="relative">
                    <input type="text" name="businessAddress" required value={formData.businessAddress} onChange={handleChange} className={inputClass} placeholder="Complete Office Address & Pincode" />
                    <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                </div>

                {/* Row 3 */}
                <div>
                  <label className={labelClass}>GST No.</label>
                  <div className="relative">
                    <input type="text" name="gstNo" value={formData.gstNo} onChange={handleChange} className={inputClass} placeholder="15-digit GST Number" />
                    <Hash className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Mobile No. *</label>
                  <div className="relative">
                    <input type="tel" name="mobileNo" required value={formData.mobileNo} onChange={handleChange} className={inputClass} placeholder="+91 00000-00000" />
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                </div>

                {/* Row 4 */}
                <div>
                  <label className={labelClass}>Email Id *</label>
                  <div className="relative">
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="official@business.com" />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Upload GST Certificate</label>
                  <label className="flex flex-col items-center justify-center w-full h-[52px] border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                      <Upload size={16} /> {file ? file.name : 'Choose PDF / Image'}
                    </div>
                    <input type="file" className="hidden" ref={fileInputRef} onChange={handleFileChange} accept=".pdf,image/*" />
                  </label>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
              >
                {loading ? "Submitting..." : "Register for Auction"} {!loading && <CheckCircle size={18} />}
              </motion.button>
            </form>
          )}
        </motion.div>


      </div>
    </div>
  );
};

export default AuctionPortal;