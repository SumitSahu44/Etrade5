import React from 'react';
import { motion } from 'framer-motion';

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

        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold"
          >
            Buyer Platform
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg font-bold transition"
          >
            Seller Platform
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Hero;