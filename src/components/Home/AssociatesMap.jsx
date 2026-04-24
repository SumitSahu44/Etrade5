import React from 'react';
import { motion } from 'framer-motion';

const AssociatesMap = () => {
  return (
    <section className="py-10 bg-white flex flex-col items-center justify-center">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
        Our Textile Association
      </h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl px-4"
      >
        <div className="overflow-hidden  bg-black">

          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain"
          >
            <source src="/videos/india-map.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

        </div>
      </motion.div>

    </section>
  );
};

export default AssociatesMap;