import React from 'react';

const Tenders = () => {
  const tableData = [
    { id: "TEN-901", title: "Bulk Raw Cotton Supply", end: "20-Apr-2026", status: "Active" },
    { id: "TEN-905", title: "Spinning Machine Spare Parts", end: "15-Apr-2026", status: "Closed" },
    { id: "AUC-201", title: "e-Auction: Industrial Loom", end: "18-Apr-2026", status: "Active" },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold mb-2">Tenders & Auctions</h2>
            <p className="text-slate-400">Exclusive e-Trade opportunities for verified members.</p>
          </div>
          <button className="bg-blue-600 px-6 py-3 rounded-lg font-bold">View Contract Terms</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-700 text-slate-400 uppercase text-sm">
                <th className="pb-4">Contract ID</th>
                <th className="pb-4">Title</th>
                <th className="pb-4">Closing Date</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {tableData.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-800 transition">
                  <td className="py-6 font-mono text-blue-400">{row.id}</td>
                  <td className="py-6 font-bold">{row.title}</td>
                  <td className="py-6">{row.end}</td>
                  <td className="py-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${row.status === 'Active' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="py-6">
                    <button className="underline hover:text-blue-400">Apply/Bid</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Tenders;