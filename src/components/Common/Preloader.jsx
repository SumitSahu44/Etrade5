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

                {/* 🔥 Main Branding */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight"
                >
                    <span className="text-white">PAREKH</span>{' '}
                    <span className="text-[#155dfc]">e-TRADE</span>{' '}
                    <span className="text-white">Market</span>
                </motion.h1>

                {/* 🔥 Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.8 }}
                    transition={{ delay: 0.4 }}
                    className="text-sm md:text-base mt-2 text-slate-300 font-semibold tracking-wide"
                >
                    (Textile)
                </motion.p>

                {/* 🔥 Animated Line */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="h-[2px] bg-[#155dfc] mt-4 mx-auto max-w-[260px]"
                />

                {/* 🔥 Location */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ delay: 0.6 }}
                    className="mt-4 text-xs md:text-sm font-mono tracking-[0.3em] uppercase text-slate-400"
                >
                    Hyderabad • TG • India
                </motion.div>

            </div>

            {/* 🔥 Progress Animation */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 overflow-hidden w-28 h-[2px] bg-white/10 rounded-full">
                <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
                    className="w-full h-full bg-[#155dfc]"
                />
            </div>

        </motion.div>
    );
};

export default Preloader;