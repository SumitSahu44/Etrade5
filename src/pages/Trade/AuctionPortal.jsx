import React from 'react';
import { Gavel, Clock, MapPin } from 'lucide-react';

const AuctionPortal = () => {
  const auctions = [
    { id: "AUC-771", item: "Used 2022 Swiss Spinning Frame", bid: "₹45,00,000", time: "04h 20m", loc: "Surat" },
    { id: "AUC-892", item: "Bulk Raw Silk (500kg)", bid: "₹12,50,000", time: "01h 15m", loc: "Bangalore" }
  ];

  return (
    <div className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-black text-slate-900 tracking-tighter">LIVE e-AUCTIONS</h2>
            <p className="text-slate-500">Real-time bidding for textile machinery and surplus stock.</p>
          </div>
          <div className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold animate-pulse">
            ● {auctions.length} Live Sessions
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {auctions.map((auc) => (
            <div key={auc.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
              <div className="p-6">
                <div className="flex justify-between text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">
                  <span>ID: {auc.id}</span>
                  <span className="flex items-center gap-1 text-red-500"><Clock size={14}/> {auc.time} left</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-6">{auc.item}</h3>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                  <MapPin size={16}/> {auc.loc} hub
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl mb-6">
                  <p className="text-xs text-slate-400 font-bold uppercase mb-1">Current Highest Bid</p>
                  <p className="text-2xl font-black text-blue-600">{auc.bid}</p>
                </div>

                <button className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-blue-600 transition-all flex items-center justify-center gap-2">
                  <Gavel size={18}/> Place Bid Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AuctionPortal;