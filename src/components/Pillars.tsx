'use client';

import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    num: '01',
    title: 'Elite Full-Stack Engineering',
    description: 'Building heavy-duty, optimized applications using modern stacks like React, Next.js, and Tailwind CSS. We deliver production-grade engineering that scales.',
  },
  {
    num: '02',
    title: 'Cinematic Minimalist UI/UX',
    description: 'Crafting gorgeous, high-end interfaces that feel like an interactive experience rather than a basic school assignment. Driven by fluid mechanics and spatial computing.',
  },
  {
    num: '03',
    title: 'Academic Blueprinting',
    description: 'Compiling pristine, submission-ready systems documentation, architecture schemas, and IEEE-standard reports to ensure students clear their evaluations with flying colors.',
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 md:py-32 px-6 relative z-10 bg-transparent">
      <div className="max-w-7xl mx-auto backdrop-blur-sm bg-white/40 p-8 md:p-16 rounded-[2rem] border border-white/50 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Section Heading */}
          <div className="md:col-span-5">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-sans font-bold leading-none tracking-tight text-[#0a0a0b] mb-4">
              Core Pillars
            </h2>
            <p className="font-serif italic text-xl text-zinc-600">
              The foundation of QOLN.
            </p>
          </div>

          {/* Pillars List */}
          <div className="md:col-span-7 flex flex-col">
            <div className="line-separator mb-8 bg-zinc-300"></div>
            
            {pillars.map((pillar, i) => (
              <React.Fragment key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-6 py-8 group hover:bg-white/60 transition-colors duration-300 -mx-6 px-6 rounded-2xl cursor-default"
                >
                  <div className="sm:col-span-2 pt-1">
                    <span className="item-number">[{pillar.num}]</span>
                  </div>
                  <div className="sm:col-span-10">
                    <h3 className="font-sans font-semibold text-2xl text-[#0a0a0b] mb-3 tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-zinc-700 text-base leading-relaxed max-w-lg">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
                <div className="line-separator bg-zinc-300"></div>
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
