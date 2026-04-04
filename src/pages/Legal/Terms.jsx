import React from 'react';
import { ShieldAlert, FileText, Scale } from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      id: "01",
      title: "Membership & Eligibility",
      icon: <ShieldAlert size={20} />,
      content: "All Buyers and Sellers must be registered entities with valid GST and Trade Licenses. Verification of documents (MSME, CIN) is mandatory before any trade transaction can be initiated on the PAREKH e-TRADE platform."
    },
    {
      id: "02",
      title: "Bidding & Auction Rules",
      icon: <Scale size={20} />,
      content: "Bids placed during e-Auctions are legally binding. Withdrawal of a winning bid may result in temporary or permanent suspension of the member's account and forfeiture of security deposits if applicable."
    },
    {
      id: "03",
      title: "Payments & Spares",
      icon: <FileText size={20} />,
      content: "All payments must be made via authorized banking channels. PAREKH e-TRADE serves as a marketplace facilitator; the final contract of sale is between the buyer and seller directly."
    }
  ];

  return (
    <div className="py-24 bg-[#f1f5f9] min-h-screen relative overflow-hidden font-sans">
      
      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
        style={{ backgroundImage: `radial-gradient(#1e3a8a 1px, transparent 1px)`, backgroundSize: '32px 32px' }}>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="bg-slate-900 rounded-t-[2.5rem] p-10 md:p-16 text-center border-b border-slate-800">
          <div className="inline-block px-4 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-6">
            Legal Compliance 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase mb-4">
            Terms <span className="text-blue-500">&</span> Conditions
          </h1>
          <p className="text-slate-400 font-medium text-sm max-w-lg mx-auto leading-relaxed">
            Please read these e-Trade regulations carefully before initiating any buy or sell transactions on the platform.
          </p>
        </div>

        {/* --- CONTENT BODY --- */}
        <div className="bg-white rounded-b-[2.5rem] shadow-2xl shadow-slate-900/10 p-8 md:p-16 space-y-12">
          {sections.map((section) => (
            <section key={section.id} className="relative pl-0 md:pl-12 group">
              {/* Vertical Line for Desktop */}
              <div className="absolute left-0 top-0 h-full w-px bg-slate-100 hidden md:block"></div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-50 text-blue-600 p-2 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {section.icon}
                </div>
                <h2 className="text-lg font-black text-slate-800 uppercase tracking-tight">
                  {section.id}. {section.title}
                </h2>
              </div>
              
              <p className="text-slate-600 leading-[1.8] font-medium text-sm md:text-base">
                {section.content}
              </p>
            </section>
          ))}

          {/* --- FOOTER NOTICE --- */}
          <div className="mt-16 pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="bg-blue-50/50 px-6 py-3 rounded-2xl border border-blue-100">
              <p className="text-[11px] font-bold text-blue-700 uppercase tracking-widest">
                Last Updated: April 2026
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-xs font-black text-slate-400 uppercase tracking-tighter mb-1">Legal Queries</p>
              <a href="mailto:legal@parekhtrade.com" className="text-blue-600 font-bold hover:underline">
                legal@parekhtrade.com
              </a>
            </div>
          </div>
        </div>

        {/* --- BACK BUTTON --- */}
        <div className="text-center mt-12">
           <p className="text-[10px] font-black text-slate-400">
             PAREKH e-TRADE MARKET (TEXTILE) • HYDERABAD, TG, INDIA
           </p>
        </div>

      </div>
    </div>
  );
};

export default Terms;