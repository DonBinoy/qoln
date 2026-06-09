'use client';

import React from 'react';

const steps = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    description: 'We start by deeply understanding your business, users, and technical requirements. We define the scope and craft a precise architectural roadmap.',
  },
  {
    num: '02',
    title: 'Design & Prototype',
    description: 'Our design team creates high-fidelity prototypes. Every interaction is refined through rigorous UX principles before a single line of code is written.',
  },
  {
    num: '03',
    title: 'Build & Iterate',
    description: 'Agile development with weekly transparency. We write clean, tested, documented code. Every feature is scrutinized and optimized prior to merging.',
  },
  {
    num: '04',
    title: 'Deploy & Scale',
    description: 'Production-grade deployment with advanced monitoring and auto-scaling. We ensure your product performs flawlessly under real-world pressure.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif italic text-3xl md:text-5xl text-[#0a0a0b] mb-6">
            A methodology engineered for precision.
          </h2>
          <p className="font-sans text-lg text-zinc-600">
            Four focused phases that transition your project from raw concept to a scalable production environment. No ambiguity, just systemic execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col">
              <div className="font-serif italic text-4xl text-zinc-300 mb-6">
                {step.num}.
              </div>
              <h3 className="font-sans font-bold text-xl text-[#0a0a0b] mb-4 tracking-tight">
                {step.title}
              </h3>
              <p className="font-sans text-zinc-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
