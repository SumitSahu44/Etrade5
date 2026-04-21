import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 px-6 py-14">

      {/* 🔥 Center Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          About <span className="text-blue-600">Us</span>
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto bg-white shadow-xl hover:shadow-2xl transition-all duration-300 rounded-[2rem] overflow-hidden grid md:grid-cols-2 border border-slate-100"
      >

        {/* Image Section */}
        <div className="h-[300px] md:h-auto overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559588168-0df3fa08d4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGV4dGlsZSUyMGV0cmRhfGVufDB8fDB8fHww"
            alt="Textile Industry"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Parekh e-Trade Market <span className="text-blue-600">(Textile)</span>
          </h1>

          <p className="text-slate-600 text-lg leading-relaxed font-medium">
            Is a trusted digital platform to bulk purchase and sell
            of the Textile Finished Products, Textile Raw Materials, Textile Machineries and Spares.
            It provides a vast digital platform for the Textile manufacturer and supplier to grow
            their sell and purchase graph at their expected price and quality.
          </p>
        </div>

      </motion.div>
    </section>
  );
};

export default About;
