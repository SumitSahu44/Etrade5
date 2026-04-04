import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Drill, Waves, Settings2, Component } from 'lucide-react';

const products = [
  { 
    title: "Raw Materials", 
    desc: "Premium Cotton, Yarn, Silk, and Synthetic Fibers sourced globally.", 
    icon: <Waves className="w-6 h-6" />, 
    img: "https://plus.unsplash.com/premium_photo-1664299852788-5a24db0d7e05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJhdyUyME1hdGVyaWFscyUyMHRleHRpbGV8ZW58MHx8MHx8fDA%3D",
    color: "blue"
  },
  { 
    title: "Finished Products", 
    desc: "High-grade Apparel fabrics, Home Textiles, and Industrial Cloth.", 
    icon: <Component className="w-6 h-6" />, 
    img: "https://img.freepik.com/premium-photo/silk-tie-featuring-cranberry-vines-lowangle-closeup-evening-ambiance_1317319-31101.jpg?w=1060",
    color: "indigo"
  },
  { 
    title: "Textile Machineries", 
    desc: "Next-gen Spinning, Weaving, and Knitting automation technology.", 
    icon: <Settings2 className="w-6 h-6" />, 
    img: "https://img.freepik.com/premium-photo/high-angle-closeup-shot-colorful-textiles-with-beautiful-asian-patterns_926199-3639020.jpg?w=1060",
    color: "slate"
  },
  { 
    title: "Precision Spares", 
    desc: "Certified original spare parts for all major textile machinery brands.", 
    icon: <Drill className="w-6 h-6" />, 
    img: "https://img.freepik.com/free-photo/color-tone-texture-fabric-sample_1373-421.jpg?t=st=1773905383~exp=1773908983~hmac=ee98bd610456c8cca1bf474924f0cc15b5239039f4b439ad70afe0eb3676113d&w=1060",
    color: "blue"
  }
];

const ProductServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-blue-600 font-black mb-4">Marketplace</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
              Strategic Solutions for the <br/> 
              <span className="text-slate-400">Global Textile Industry</span>
            </h3>
          </div>
          <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
            Access a comprehensive catalog of materials and technology designed for high-scale production.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <img 
                src={item.img} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content Box */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="bg-white/10 backdrop-blur-md w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20 group-hover:bg-blue-600 group-hover:border-transparent transition-all duration-300">
                  {item.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-3 tracking-tight">
                  {item.title}
                </h4>
                
                <p className="text-slate-300 text-sm leading-relaxed mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {item.desc}
                </p>

                <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:text-blue-400 transition-colors">
                  Explore Category <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductServices;