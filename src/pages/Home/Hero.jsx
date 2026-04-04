import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Link import karna mat bhulna
const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 text-white overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1705248382836-3618e25706d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dGV4dGlsZSUyMGV0cmFkZSUyMGJ1bGt8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center"></div>

      <div className="relative z-10 text-center px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6"
        >
          India's Leading Textile <br/> <span className="text-blue-400">e-Trade Market</span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300"
        >
          Connecting Buyers and Sellers for Raw Materials, Finished Products, 
          Machineries, and Spares - All in one secure platform.
        </motion.p>

       <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-10">
      
      {/* --- BUYER PLATFORM LINK --- */}
      <Link to="/buyer" className="w-full md:w-auto">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-black uppercase text-xs tracking-widest shadow-xl shadow-blue-500/20 transition-all"
        >
          Buyer Platform
        </motion.button>
      </Link>

      {/* --- SELLER PLATFORM LINK --- */}
      <Link to="/seller" className="w-full md:w-auto">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full md:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white px-10 py-4 rounded-xl font-black uppercase text-xs tracking-widest transition-all backdrop-blur-sm"
        >
          Seller Platform
        </motion.button>
      </Link>

    </div>
      </div>
    </section>
  );
};

export default Hero;