import React from 'react';
import { motion } from 'framer-motion';

const Management = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-14">

      {/* 🔥 Center Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Our <span className="text-blue-600">Management</span>
        </h2>
        {/* <p className="text-slate-500 mt-3 text-lg">
          Meet the leadership behind Parekh e-Trade Market
        </p> */}
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* 🔥 Card Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-[2rem] overflow-hidden grid md:grid-cols-2 border border-slate-100"
      >

        {/* Image Section */}
        <div className="h-[300px] md:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80"
            alt="Management Team"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-5">
            Experienced Leadership
          </h3>

          <p className="text-slate-600 text-lg leading-relaxed">
            Parekh e-Trade Market (Textile) is administered and governed by the highly skilled,
            experienced and qualified Management. </p>

          {/* Optional Button */}
          {/* <button className="mt-6 w-fit px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold shadow hover:bg-blue-700 transition">
            Learn More
          </button> */}
        </div>
      </motion.div>
    </section>
  );
};

export default Management;