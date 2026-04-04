import React from 'react';
import { CalendarDays, MapPin } from 'lucide-react';

const Appointment = () => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100">
        <div className="bg-blue-900 p-12 text-white flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-6 tracking-tighter uppercase">Visit Us</h2>
            <p className="text-blue-200 font-medium mb-10 leading-relaxed">
              Schedule a visit to our center in Hyderabad. Please book your appointment 24 hours in advance.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-blue-400" />
                <div>
                  <p className="text-xs font-black uppercase text-blue-300 mb-1">Location</p>
                  <p className="font-bold">Hyderabad, TG, India</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-blue-800">
            <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">Official Webmail</p>
            <p className="font-bold text-lg">e-trade@parekhtrade.com</p>
          </div>
        </div>

        <div className="p-12">
          <form className="space-y-6">
            <h3 className="text-xl font-black text-slate-800 uppercase tracking-tight mb-6">Book Appointment</h3>
            <input type="text" placeholder="Full Name" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-blue-600" />
            <div className="grid grid-cols-2 gap-4">
              <input type="date" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none" />
              <input type="time" className="w-full p-4 bg-slate-50 border rounded-2xl outline-none" />
            </div>
            <textarea placeholder="Purpose of Meeting" className="w-full p-4 bg-slate-50 border rounded-2xl h-28 resize-none outline-none"></textarea>
            <button className="w-full py-4 bg-blue-600 text-white font-black rounded-2xl shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
              <CalendarDays size={18} /> Confirm Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appointment;