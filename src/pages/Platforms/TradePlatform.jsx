import React, { useState } from 'react';
import { motion } from 'framer-motion';

const TradePlatform = () => {
  const [activeTab, setActiveTab] = useState('buyer');

  const businessCategories = ['Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Ltd.', 'Other'];
  const textileItems = ['Textile Raw Materials', 'Textile Finished Products', 'Textile Industrial Machineries', 'Textile Spares'];

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-white p-2 rounded-xl shadow-inner flex gap-2">
            <button 
              onClick={() => setActiveTab('buyer')}
              className={`px-8 py-3 rounded-lg font-bold transition-all ${activeTab === 'buyer' ? 'bg-blue-900 text-white shadow-lg' : 'text-gray-500'}`}
            >
              BUYER’S PLATFORM
            </button>
            <button 
              onClick={() => setActiveTab('seller')}
              className={`px-8 py-3 rounded-lg font-bold transition-all ${activeTab === 'seller' ? 'bg-blue-900 text-white shadow-lg' : 'text-gray-500'}`}
            >
              SELLER’S PLATFORM
            </button>
          </div>
        </div>

        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-4">
            {activeTab === 'buyer' ? 'Buyer Registration' : 'Seller Registration'}
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Common Fields */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-2">Authorized Official Name</label>
              <input type="text" className="p-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Enter name" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-2">Code No.</label>
              <input type="text" className="p-3 border rounded-lg bg-gray-50" placeholder="Unique Code" />
            </div>

            <hr className="md:col-span-2 my-4" />

            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-2">Business Title / Name</label>
              <input type="text" className="p-3 border rounded-lg bg-gray-50" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-2">Email ID</label>
              <input type="email" className="p-3 border rounded-lg bg-gray-50" />
            </div>

            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold text-gray-700 mb-2">Business Address</label>
              <textarea className="p-3 border rounded-lg bg-gray-50 h-24"></textarea>
            </div>

            {/* Roll-down Mode (Dropdown) */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-2">Category of Business</label>
              <select className="p-3 border rounded-lg bg-gray-50">
                {businessCategories.map(cat => <option key={cat}>{cat}</option>)}
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-2">Textile Items ({activeTab === 'buyer' ? 'to Buy' : 'to Sell'})</label>
              <select className="p-3 border rounded-lg bg-gray-50">
                {textileItems.map(item => <option key={item}>{item}</option>)}
              </select>
            </div>

            {/* Document Upload Section */}
            <div className="md:col-span-2 bg-blue-50 p-6 rounded-xl border-dashed border-2 border-blue-200">
              <label className="font-bold text-blue-900 block mb-4 italic">Upload Documents (GST, MSME, Trade License, CIN)</label>
              <input type="file" multiple className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer" />
            </div>

            {/* Financials */}
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-2">Required Quantity</label>
              <input type="number" className="p-3 border rounded-lg bg-gray-50" />
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-gray-700 mb-2">{activeTab === 'buyer' ? 'Tentative Budget' : 'Expected Rate'}</label>
              <input type="text" className="p-3 border rounded-lg bg-gray-50" />
            </div>

            <div className="md:col-span-2 flex gap-4 mt-8">
              <button type="button" className="flex-1 bg-gray-800 text-white py-4 rounded-xl font-bold hover:bg-black transition">Preview</button>
              <button type="submit" className="flex-1 bg-blue-900 text-white py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg shadow-blue-200">Submit to e-trade@parekhtrade.com</button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default TradePlatform;
