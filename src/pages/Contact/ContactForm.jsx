import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar, Clock, Send, PhoneCall } from 'lucide-react';

const ContactForm = () => {
  const inputClass = "w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all text-sm font-semibold placeholder:text-slate-400 shadow-sm";
  const labelClass = "block text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-2 ml-1";

  return (
    <section className="py-24 bg-[#f1f5f9] relative overflow-hidden">
      
      {/* --- BACKGROUND DECORATIONS --- */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-white overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* --- LEFT SIDE: CONTACT INFO (Dark Industrial) --- */}
          <div className="lg:col-span-5 bg-slate-950 p-12 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between">
            {/* Background Image Texture */}
            <img 
              src="https://images.unsplash.com/photo-1558444479-c8a51bc9d844?auto=format&fit=crop&q=80" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale" 
              alt="Factory"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-slate-950/90"></div>

            <div className="relative z-10">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-8"
              >
                Connect With Us
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tighter uppercase leading-[1.1]">
                Visit The <br /> <span className="text-blue-500">Textile Hub</span>
              </h2>
              <p className="text-slate-400 font-medium mb-12 max-w-xs leading-relaxed">
                Book a slot for physical inspection of machineries or bulk trade negotiations.
              </p>

              <div className="space-y-8">
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                    <MapPin className="text-blue-400 group-hover:text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Our Location</p>
                    <p className="font-bold text-lg leading-tight">Hyderabad, TG, India</p>
                  </div>
                </div>

                <div className="flex gap-5 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                    <Mail className="text-blue-400 group-hover:text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Official Webmail</p>
                    <p className="font-bold text-lg leading-tight tracking-tight">e-trade@parekhtrade.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-10 border-t border-white/10 mt-12">
               <p className="text-[10px] font-black text-slate-500 tracking-[0.3em]">
                 PAREKH e-TRADE MARKET • 2026
               </p>
            </div>
          </div>

          {/* --- RIGHT SIDE: APPOINTMENT FORM (Clean Modern) --- */}
          <div className="lg:col-span-7 p-12 lg:p-16 bg-white">
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-slate-900 tracking-tighter uppercase mb-2">Book Appointment</h3>
              <p className="text-slate-500 font-medium text-sm">Please provide your details for a scheduled visit.</p>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Your Full Name</label>
                  <input type="text" placeholder="John Doe" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Contact Number</label>
                  <div className="relative">
                    <input type="tel" placeholder="+91" className={inputClass} />
                    <PhoneCall className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Preferred Date</label>
                  <div className="relative">
                    <input type="date" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Preferred Time</label>
                  <div className="relative">
                    <input type="time" className={inputClass} />
                  </div>
                </div>
              </div>

              <div>
                <label className={labelClass}>Meeting Purpose</label>
                <textarea 
                  placeholder="Specify if for Machinery, Raw Materials or Spares..." 
                  className={`${inputClass} h-32 resize-none pt-4`}
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-blue-600 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3"
              >
                Request Slot <Send size={18} />
              </motion.button>
              
              <div className="text-center mt-6">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  Confirmations are sent via email within 2 hours.
                </p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;