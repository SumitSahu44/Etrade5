import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('authPerson');
  
  // States
  const [authName, setAuthName] = useState('');
  const [authCode, setAuthCode] = useState('');
  const [csvFile, setCsvFile] = useState(null);
  
  const [authPersons, setAuthPersons] = useState([]);
  const [buyers, setBuyers] = useState([]);
  const [sellers, setSellers] = useState([]);

  // Fetch data
  const fetchAuthPersons = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/authorized-person/list');
      const data = await res.json();
      if(data.success) setAuthPersons(data.data);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchSubmissions = async (type) => {
    try {
      const res = await fetch(`http://localhost:5000/api/etrade/submissions?type=${type}`);
      const data = await res.json();
      if (data.success) {
          if (type === 'buyer') setBuyers(data.data);
          else setSellers(data.data);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchAuthPersons();
    fetchSubmissions('buyer');
    fetchSubmissions('seller');
  }, []);

  const handleAddSingle = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/authorized-person/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: authName, code: authCode })
      });
      const data = await res.json();
      if(data.success) {
        alert(data.message);
        setAuthName('');
        setAuthCode('');
        fetchAuthPersons();
      } else {
        alert(data.message);
      }
    } catch (e) {
      console.error(e);
      alert("Error adding person.");
    }
  };

  const handleBulkUpload = async (e) => {
    e.preventDefault();
    if (!csvFile) return alert("Select CSV first");

    const formData = new FormData();
    formData.append('file', csvFile);

    try {
      const res = await fetch('http://localhost:5000/api/authorized-person/bulk-upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if(data.success) {
        alert(data.message);
        setCsvFile(null);
        fetchAuthPersons();
      } else {
        alert(data.message);
      }
    } catch (e) {
      console.error(e);
      alert("Error uploading CSV.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-10 pt-32">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 uppercase mb-8">Admin Dashboard</h1>
        
        {/* TABS */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setActiveTab('authPerson')}
            className={`px-6 py-3 rounded-xl font-bold uppercase text-xs ${activeTab === 'authPerson' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 shadow'}`}
          >
            Manage Authorized Persons
          </button>
          <button 
            onClick={() => setActiveTab('buyers')}
            className={`px-6 py-3 rounded-xl font-bold uppercase text-xs ${activeTab === 'buyers' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 shadow'}`}
          >
            Buyer Enquiries
          </button>
          <button 
            onClick={() => setActiveTab('sellers')}
            className={`px-6 py-3 rounded-xl font-bold uppercase text-xs ${activeTab === 'sellers' ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 shadow'}`}
          >
            Seller Enquiries
          </button>
        </div>

        {/* TAB CONTENTS */}
        
        {activeTab === 'authPerson' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Single Add */}
              <div className="bg-white p-8 rounded-3xl shadow">
                <h3 className="font-bold text-xl mb-6">Add Single Manual Person</h3>
                <form onSubmit={handleAddSingle} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Name</label>
                    <input type="text" value={authName} onChange={e => setAuthName(e.target.value)} required className="w-full p-3 border rounded-xl" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 mb-1">Unique Code</label>
                    <input type="text" value={authCode} onChange={e => setAuthCode(e.target.value)} required className="w-full p-3 border rounded-xl" />
                  </div>
                  <button type="submit" className="px-6 py-3 bg-slate-900 text-white rounded-xl text-xs font-bold uppercase w-full">Add Person</button>
                </form>
              </div>
              
              {/* Bulk Upload CSV */}
              <div className="bg-white p-8 rounded-3xl shadow">
                <h3 className="font-bold text-xl mb-6">Bulk Upload CSV</h3>
                <form onSubmit={handleBulkUpload} className="space-y-4">
                  <p className="text-xs text-slate-500">CSV must have 'name' and 'code' columns.</p>
                  <div>
                    <input type="file" accept=".csv" onChange={e => setCsvFile(e.target.files[0])} required className="w-full p-3 border rounded-xl" />
                  </div>
                  <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-xl text-xs font-bold uppercase w-full">Upload CSV</button>
                </form>
              </div>
            </div>

            {/* List */}
            <div className="bg-white p-8 rounded-3xl shadow">
              <h3 className="font-bold text-xl mb-6">Authorized Persons List ({authPersons.length})</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-xs uppercase text-slate-600">
                      <th className="p-4 rounded-tl-xl rounded-bl-xl">Name</th>
                      <th className="p-4 text-center">Code</th>
                      <th className="p-4 rounded-tr-xl rounded-br-xl text-right">Added On</th>
                    </tr>
                  </thead>
                  <tbody>
                    {authPersons.map(p => (
                      <tr key={p._id} className="border-b border-slate-50 hover:bg-slate-50 transition">
                        <td className="p-4 font-bold">{p.name}</td>
                        <td className="p-4 text-center text-blue-600 font-mono bg-blue-50/50">{p.code}</td>
                        <td className="p-4 text-right text-sm text-slate-500">{new Date(p.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'buyers' && (
          <div className="bg-white p-8 rounded-3xl shadow">
            <h3 className="font-bold text-xl mb-6">Buyer Enquiries ({buyers.length})</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                  <thead>
                    <tr className="bg-slate-100 text-xs uppercase text-slate-600">
                      <th className="p-4 rounded-tl-xl rounded-bl-xl">Buyer / Business</th>
                      <th className="p-4">Filled By (Authorized)</th>
                      <th className="p-4">Contact</th>
                      <th className="p-4">Item to Buy</th>
                      <th className="p-4">Qty / Budget</th>
                      <th className="p-4 rounded-tr-xl rounded-br-xl">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {buyers.map(b => (
                      <tr key={b._id} className="border-b border-slate-50">
                        <td className="p-4">
                          <p className="font-bold text-slate-900">{b.buyerName}</p>
                          <p className="text-xs text-slate-500">{b.businessTitle}</p>
                        </td>
                        <td className="p-4">
                            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                                {b.authorizedPerson?.name || 'Unknown'} ({b.authorizedPerson?.code || 'N/A'})
                            </span>
                        </td>
                        <td className="p-4 text-sm">{b.mobileNo}<br/>{b.emailId}</td>
                        <td className="p-4 text-sm font-bold text-blue-600">{b.textileItemsToBuy}</td>
                        <td className="p-4 text-sm">{b.requiredQuantity}<br/>{b.tentativeBudget}</td>
                        <td className="p-4 text-sm text-slate-500">{new Date(b.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                    {buyers.length === 0 && <tr><td colSpan="6" className="p-8 text-center text-slate-500">No buyers found.</td></tr>}
                  </tbody>
                </table>
            </div>
          </div>
        )}

        {activeTab === 'sellers' && (
          <div className="bg-white p-8 rounded-3xl shadow">
            <h3 className="font-bold text-xl mb-6">Seller Enquiries ({sellers.length})</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse whitespace-nowrap">
                  <thead>
                    <tr className="bg-slate-100 text-xs uppercase text-slate-600">
                      <th className="p-4 rounded-tl-xl rounded-bl-xl">Seller / Business</th>
                      <th className="p-4">Filled By (Authorized)</th>
                      <th className="p-4">Contact</th>
                      <th className="p-4">Item to Sell</th>
                      <th className="p-4">Total Qty / Expected Rate</th>
                      <th className="p-4 rounded-tr-xl rounded-br-xl">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sellers.map(s => (
                      <tr key={s._id} className="border-b border-slate-50">
                        <td className="p-4">
                          <p className="font-bold text-slate-900">{s.sellerName}</p>
                          <p className="text-xs text-slate-500">{s.businessName}</p>
                        </td>
                        <td className="p-4">
                            <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                                {s.authorizedPerson?.name || 'Unknown'} ({s.authorizedPerson?.code || 'N/A'})
                            </span>
                        </td>
                        <td className="p-4 text-sm">{s.mobileNo}<br/>{s.emailId}</td>
                        <td className="p-4 text-sm font-bold text-blue-600">{s.textileItemsToSell}</td>
                        <td className="p-4 text-sm">{s.totalQuantity}<br/>{s.expectedRate}</td>
                        <td className="p-4 text-sm text-slate-500">{new Date(s.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                    {sellers.length === 0 && <tr><td colSpan="6" className="p-8 text-center text-slate-500">No sellers found.</td></tr>}
                  </tbody>
                </table>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
