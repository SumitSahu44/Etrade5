import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Printer, Send, Calculator, CheckCircle2 } from 'lucide-react';

const Quotation = () => {
  const quoteData = {
    id: "PQ-2026-8812",
    date: "04 April 2026",
    validUntil: "18 April 2026",
    customer: "Textile Mills Pvt Ltd",
    items: [
      { desc: "Organic Long-Staple Cotton", qty: "10 Tons", rate: "₹1,80,000", total: "₹18,00,000" },
      { desc: "High-Speed Spindle Spares", qty: "50 Units", rate: "₹4,500", total: "₹2,25,000" }
    ],
    subtotal: "₹20,25,000",
    tax: "₹3,64,500 (18% GST)",
    grandTotal: "₹23,89,500"
  };

  return (
    <div className="py-20 bg-slate-50 min-h-screen relative overflow-hidden font-sans">
      
      {/* --- ELITE BACKGROUND TEXTURE --- */}
      <div className="absolute top-0 left-0 w-full h-80 bg-slate-950">
        <div className="absolute inset-0 opacity-20 bg-[url('https://img.freepik.com/free-photo/color-tone-texture-fabric-sample_1373-421.jpg?t=st=1773905383~exp=1773908983~hmac=ee98bd610456c8cca1bf474924f0cc15b5239039f4b439ad70afe0eb3676113d&w=1060')]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER ACTIONS --- */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black text-white md:text-slate-900 tracking-tighter uppercase mb-2">e-Quotation</h2>
            <p className="text-blue-500 font-bold uppercase text-[10px] tracking-widest flex items-center gap-2">
              <CheckCircle2 size={14} /> Official Trade Document
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
              <Printer size={16} /> Print
            </button>
            <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
              <Download size={16} /> Download PDF
            </button>
          </div>
        </div>

        {/* --- MAIN QUOTATION CARD --- */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[3rem] shadow-2xl shadow-slate-900/5 border border-white overflow-hidden"
        >
          {/* Top Branding Bar */}
          <div className="p-10 md:p-14 bg-slate-50 flex flex-col md:flex-row justify-between gap-8 border-b border-slate-100">
            <div>
              <h1 className="text-2xl font-black text-slate-900 mb-2">PAREKH <span className="text-blue-600 font-black">e-TRADE</span></h1>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest leading-relaxed">
                Market (Textile) Hub <br /> Hyderabad, TG, India
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Quote Reference</p>
              <p className="text-xl font-black text-slate-900 mb-2">{quoteData.id}</p>
              <p className="text-xs font-bold text-slate-500">Date: {quoteData.date}</p>
            </div>
          </div>

          {/* Billing Info */}
          <div className="p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">Quotation For:</h4>
              <p className="text-lg font-bold text-slate-900">{quoteData.customer}</p>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mt-2">
                Registered Office Address, <br /> Industrial Hub, Gujarat, India.
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-4">Validity:</h4>
              <p className="text-sm font-bold text-slate-900">Document Valid Until:</p>
              <p className="text-lg font-black text-red-500 mt-1 uppercase tracking-tighter">{quoteData.validUntil}</p>
            </div>
          </div>

          {/* Table Structure */}
          <div className="px-10 md:px-14">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <th className="py-4">Product Description</th>
                    <th className="py-4 text-center">Qty</th>
                    <th className="py-4 text-center">Rate</th>
                    <th className="py-4 text-right">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {quoteData.items.map((item, idx) => (
                    <tr key={idx} className="group">
                      <td className="py-6 font-bold text-slate-800">{item.desc}</td>
                      <td className="py-6 text-center text-slate-600 font-medium">{item.qty}</td>
                      <td className="py-6 text-center text-slate-600 font-medium">{item.rate}</td>
                      <td className="py-6 text-right font-black text-slate-900">{item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Grand Totals */}
          <div className="p-10 md:p-14 bg-slate-50 mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <Calculator size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Payment Terms</span>
              </div>
              <p className="text-xs text-slate-400 font-medium leading-relaxed">
                1. 50% Advance with Purchase Order <br />
                2. Balance 50% on Delivery <br />
                3. Prices inclusive of Loading/Unloading
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-bold text-slate-500 uppercase tracking-tighter">
                <span>Subtotal</span>
                <span>{quoteData.subtotal}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-blue-600 uppercase tracking-tighter border-b pb-4">
                <span>Tax (GST)</span>
                <span>{quoteData.tax}</span>
              </div>
              <div className="flex justify-between text-2xl font-black text-slate-900 pt-2">
                <span className="uppercase tracking-tighter">Total Amount</span>
                <span>{quoteData.grandTotal}</span>
              </div>
            </div>
          </div>

          {/* Form Footer */}
          <div className="px-10 md:px-14 py-8 flex justify-center">
             <button className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] hover:text-blue-600 transition-colors">
               <Send size={14} /> Official Trade Market Document • Hyderabad
             </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quotation;