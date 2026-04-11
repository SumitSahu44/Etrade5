import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, PhoneCall } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="py-24 bg-[#f1f5f9] relative overflow-hidden">

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border border-white overflow-hidden grid grid-cols-1 lg:grid-cols-12">

          {/* LEFT SIDE (Same as before) */}
          <div className="lg:col-span-5 bg-slate-950 p-12 lg:p-16 text-white relative overflow-hidden flex flex-col justify-between">

            <img
              src="https://images.unsplash.com/photo-1558444479-c8a51bc9d844?auto=format&fit=crop&q=80"
              className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale"
              alt="Factory"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-transparent to-slate-950/90"></div>

            <div className="relative z-10">


              <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tighter uppercase leading-[1.1]">
                Contact Us
              </h2>

              <div className="space-y-8 mt-10">

                {/* Phone */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <PhoneCall className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Call Us</p>
                    <p className="font-bold text-sm">6353778329</p>
                  </div>
                </div>

                {/* Trade Enquiry */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Trade Enquiry</p>
                    <p className="font-bold text-sm">trade-enquiry@parekhtrade.com</p>
                  </div>
                </div>

                {/* Customer Care */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <Mail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Customer Care</p>
                    <p className="font-bold text-sm">customer-care@parekhtrade.com</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-5 group">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10">
                    <MapPin className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-400 mb-1">Location</p>
                    <p className="font-bold text-sm">Hyderabad, TG, India</p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE (MAP) */}
          <div className="lg:col-span-7 h-[500px]">
            <iframe
              title="Hyderabad Location"
              src="https://www.google.com/maps?q=Hyderabad%20India&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;