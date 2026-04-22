import React from 'react';
import { motion } from 'framer-motion';
import logo from '/4.png';

const Preloader = () => {
    // Animation Variants for cleaner code
    const containerVars = {
        initial: { y: 0 },
        exit: {
            y: '-100vh',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
        }
    };

    const childVars = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <motion.div
            variants={containerVars}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050816] text-white px-4 overflow-hidden"
        >
            <div className="text-center flex flex-col items-center">

                {/* 1. LOGO SECTION - Subtle scale and soft glow */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative mb-6"
                >
                    {/* Soft ambient glow */}
                    <div className="absolute inset-0 bg-[#155dfc]/20 blur-3xl rounded-full scale-150" />

                    <div className="relative h-20 w-20 md:h-24 md:w-24 flex items-center justify-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-[85%] w-[85%] object-contain relative z-10"
                        />
                    </div>
                </motion.div>

                {/* 2. MAIN BRANDING - Uses "Mask" effect for premium feel */}
                <div className="overflow-hidden mb-1">
                    <motion.h1
                        variants={childVars}
                        initial="initial"
                        animate="animate"
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tighter"
                    >
                        <span className="text-white">PAREKH</span>{' '}
                        <span className="text-[#155dfc]">e-TRADE</span>{' '}
                        <span className="text-white">Market</span>
                    </motion.h1>
                </div>

                {/* 3. SUBTITLE & LINE */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center w-full"
                >
                    <p className="text-xs md:text-sm text-slate-400 font-medium tracking-[0.2em] uppercase">
                        Textile Solutions
                    </p>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '60px' }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="h-[1px] bg-[#155dfc] mt-4"
                    />
                </motion.div>

                {/* 4. LOCATION - Minimalist style */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 0.5, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="mt-6 text-[10px] md:text-xs font-light tracking-[0.4em] uppercase text-slate-300"
                >
                    Hyderabad • TG • India
                </motion.div>

            </div>

            {/* 5. PROGRESS LOADER - Slimmer and more modern */}
            <div className="absolute bottom-12 w-32 h-[1px] bg-white/5 overflow-hidden">
                <motion.div
                    initial={{ left: '-100%' }}
                    animate={{ left: '100%' }}
                    transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        ease: "easeInOut"
                    }}
                    className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-[#155dfc] to-transparent"
                />
            </div>
        </motion.div>
    );
};

export default Preloader;
