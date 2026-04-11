import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Edit3, ShieldAlert } from 'lucide-react';

const PreviewModal = ({ isOpen, onClose, data, fields, onConfirm, loading, title = "Form Review" }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-blue-50 flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="bg-slate-900 p-6 md:p-8 text-white relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
            <div className="flex justify-between items-start relative z-10">
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tighter mb-1">{title}</h2>
                <div className="flex items-center gap-2 text-blue-400">
                  <ShieldAlert size={14} />
                  <span className="text-[10px] font-black uppercase tracking-widest">Verify Information Before Submission</span>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6 custom-scrollbar">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fields.map((field) => (
                <div key={field.key} className="space-y-1">
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{field.label}</p>
                  <p className="text-sm font-bold text-slate-800 break-words">
                    {data[field.key] || <span className="text-slate-300 italic">Not Provided</span>}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 flex gap-3 italic">
              <CheckCircle className="text-blue-600 shrink-0" size={18} />
              <p className="text-[10px] text-blue-800 font-medium leading-relaxed uppercase tracking-tight">
                I hereby confirm that the information provided above is accurate to the best of my knowledge and associated documentation.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 md:p-8 bg-slate-50 border-t border-slate-100 flex flex-col md:flex-row gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-4 border-2 border-slate-900 text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
            >
              <Edit3 size={16} /> Back to Edit
            </button>
            <button
              onClick={onConfirm}
              disabled={loading}
              className="flex-[2] py-4 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? "Processing..." : "Confirm & Submit"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PreviewModal;
