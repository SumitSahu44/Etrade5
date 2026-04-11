import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ y: 0 }}
            exit={{ y: '-100vh' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816] text-white px-4"
        >
            <div className="text-center">
                {/* Main Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter uppercase"
                >
                    HC PAREKH <span className="text-[#155dfc]">&</span> ASSOCIATES
                </motion.h1>

                {/* Animated Line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-[2px] bg-red-600 mt-2 mx-auto max-w-[300px]"
                />

                {/* Subtitle */}
                <div className="flex flex-col md:flex-row justify-between mt-4 text-xs md:text-sm font-mono tracking-widest uppercase opacity-80">
                    <p>Industrial Project Consultant</p>
                    <p className="mt-1 md:mt-0 text-[#155dfc]">Hyderabad, TG, India</p>
                </div>
            </div>

            {/* Progress Bar (Optional) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden w-24 h-[1px] bg-white/20">
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                    className="w-full h-full bg-[#155dfc]"
                />
            </div>
        </motion.div>
    );
};

export default Preloader;