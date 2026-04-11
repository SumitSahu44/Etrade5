import React from 'react';
import { motion } from 'framer-motion';

const Management = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-6 py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl w-full bg-white shadow-2xl rounded-[2rem] overflow-hidden grid md:grid-cols-2 border border-slate-100"
      >
        {/* Image Section */}
        <div className="h-[300px] md:h-auto">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
            alt="Management Team"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Our <span className="text-blue-600">Management</span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            Parekh e-Trade Market (Textile) is administered and governed by the highly skilled,
            experienced and qualified Management.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Management;