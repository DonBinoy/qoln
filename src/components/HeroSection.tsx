'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SvgLogo from './SvgLogo';

export default function HeroSection() {
  // Framer Motion variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const letterVariants = {
    hidden: { y: 150, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1, 
      transition: { type: "spring", stiffness: 80, damping: 20 } 
    }
  };

  const name = "QOLN".split("");

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent"
    >
      {/* Minimalist interactive dot grid */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Abstract ambient glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-zinc-50 rounded-full blur-[120px] -z-10 pointer-events-none"
      />

      <div className="relative z-10 flex flex-col items-center w-full max-w-7xl px-6">
        
        {/* Animated SvgLogo & Name */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-6 md:gap-10 text-[6rem] md:text-[10rem] lg:text-[14rem] leading-[0.8] text-[#0a0a0b] mb-8 w-full"
        >
          {/* Logo */}
          <motion.div variants={letterVariants}>
            <SvgLogo className="w-[4.5rem] h-[10.8rem] md:w-[7.5rem] h-[18rem] lg:w-[10.5rem] lg:h-[25.2rem]" />
          </motion.div>
          
          {/* Gamified Name Letters */}
          <div className="flex">
            {name.map((char, index) => (
              <motion.span 
                key={index} 
                variants={letterVariants}
                className="font-sans font-bold tracking-tighter inline-block cursor-crosshair text-[#0a0a0b]"
                whileHover={{ 
                  y: -30, 
                  scale: 1.05, 
                  color: "#a1a1aa", 
                  transition: { type: "spring", stiffness: 400, damping: 10 } 
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Animated Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <p className="text-[1.25rem] md:text-[2rem] lg:text-[2.5rem] font-serif italic font-medium leading-snug tracking-tight text-zinc-500">
            Your Vision. Built to Perfection.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
