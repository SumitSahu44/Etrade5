import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowUpRight, Box, Zap, ShieldCheck, Info } from 'lucide-react';
import { productApi, categoryApi, IMAGE_BASE_URL } from '../../utils/api';

const ProductMarketplace = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [dynamicProducts, setDynamicProducts] = useState([]);
  const [dynamicCategories, setDynamicCategories] = useState(['All']);
  const [loading, setLoading] = useState(true);

  const categories = ['All', 'Raw Materials', 'Finished Fabrics', 'Machinery', 'Spares'];

  const dummyProducts = [
    {
      id: 1,
      category: 'Raw Materials',
      name: "Organic Long-Staple Cotton",
      spec: "Grade: AAA | Origin: India",
      img: "https://img.freepik.com/premium-photo/textile-designer-isolated-flat-color-background_980928-38343.jpg?ga=GA1.1.124606815.1772781809&semt=ais_rp_progressive&w=740&q=80",
      // price: "Market Rate"
    },
    {
      id: 2,
      category: 'Machinery',
      name: "Air-Jet Weaving Loom",
      spec: "Model: PX-2026 | High Speed",
      img: "https://img.freepik.com/premium-photo/high-angle-closeup-shot-colorful-textiles-with-beautiful-asian-patterns_926199-3639020.jpg?w=1060",
      // price: "Inquiry Only"
    },
    {
      id: 3,
      category: 'Finished Fabrics',
      name: "Premium Silk Jacquard",
      spec: "100% Pure Silk | Export Quality",
      img: "https://img.freepik.com/premium-photo/thai-silk-pattern-design_147059-200.jpg?w=1480",
      // price: "₹1,200/mtr"
    },
    {
      id: 4,
      category: 'Spares',
      name: "Precision Spindle Set",
      spec: "Stainless Steel | Anti-Corrosive",
      img: "https://img.freepik.com/free-photo/fabric-background-with-floral-pattern_1385-1975.jpg?t=st=1773901894~exp=1773905494~hmac=6086c537b0ddf17663a89b1e6cd11e1c90bf283e9e9305c9fd70f6f77ac8e0a2&w=1060",
      // price: "₹8,500/unit"
    },
  ];

  useEffect(() => {
    const fetchMarketplaceData = async () => {
      try {
        setLoading(true);
        const siteId = 'ParekheTradeMarket02';

        // Fetch Categories and Products in Parallel
        const [prodRes, catRes] = await Promise.all([
          productApi.getProducts(siteId),
          categoryApi.getCategories(siteId)
        ]);

        if (catRes.data.success && catRes.data.data.length > 0) {
          setDynamicCategories(['All', ...catRes.data.data.map(c => c.name)]);
        }

        if (prodRes.data.success && prodRes.data.data.length > 0) {
          const mapped = prodRes.data.data.map(p => ({
            id: p._id,
            category: p.category,
            name: p.title,
            spec: `Category: ${p.category}`,
            img: `${IMAGE_BASE_URL}/${p.image}`,
            // price: "Inquiry Only"
          }));
          setDynamicProducts(mapped);
        }
      } catch (error) {
        console.error("Failed to fetch marketplace data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMarketplaceData();
  }, []);

  const productsToDisplay = dynamicProducts.length > 0 ? dynamicProducts : dummyProducts;
  const categoriesToDisplay = dynamicProducts.length > 0 ? dynamicCategories : ['All', 'Raw Materials', 'Finished Fabrics', 'Machinery', 'Spares'];

  const filteredProducts = activeCategory === 'All'
    ? productsToDisplay
    : productsToDisplay.filter(p => p.category === activeCategory);

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* --- ELITE HEADER --- */}
      <section className="bg-[#0f172a] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10"
          >
            <div>
              <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-xs mb-4 block">B2B Inventory</span>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                Product & Services
              </h1>
              <p className="text-slate-400 max-w-lg text-lg font-normal leading-relaxed">
                Bulk Purchase and Sell of the Textile Product, Finished and Raw.
                Purchase and Sell of the Textile Machineries & Spares. </p>
            </div>

          </motion.div>
        </div>
      </section>

      {/* --- SMART FILTERS --- */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap items-center gap-3">
          {categoriesToDisplay.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${activeCategory === cat
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400 hover:text-blue-600'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* --- PRODUCT GRID --- */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={product.id}
                className="group"
              >
                {/* Visual Card */}
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-6 shadow-xl shadow-slate-200/50 border border-slate-100 bg-slate-50">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute top-5 left-5 bg-white shadow-xl px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-blue-600 border border-blue-50">
                    {product.category}
                  </div>

                  {/* Action Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white p-4 rounded-2xl text-blue-600 shadow-2xl hover:bg-blue-600 hover:text-white transition-colors">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>
                </div>

                {/* Information */}
                <div className="px-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-[11px] font-bold text-slate-400 mb-5 uppercase tracking-wider flex items-center gap-1.5">
                    <Info size={12} className="text-blue-400" /> {product.spec}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t border-slate-100">
                    <span className="text-lg font-bold text-slate-700 tracking-tight">{product.price}</span>
                    <button className="text-[11px] font-black text-blue-600 uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                      Inquire →
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* --- MINIMAL TRUST SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-slate-50 rounded-[3.5rem] p-12 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            <div className="flex flex-col items-center text-center px-4">
              <Box className="text-blue-500 mb-5" size={40} strokeWidth={1.5} />
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-[0.2em] mb-2">Logistics</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Secured shipping to over 50 global destinations.</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <ShieldCheck className="text-blue-500 mb-5" size={40} strokeWidth={1.5} />
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-[0.2em] mb-2">Quality</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">Verified sources and industry-grade certifications.</p>
            </div>
            <div className="flex flex-col items-center text-center px-4">
              <Zap className="text-blue-500 mb-5" size={40} strokeWidth={1.5} />
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-[0.2em] mb-2">Speed</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">RFQ responses within a 24-hour trade window.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductMarketplace;
