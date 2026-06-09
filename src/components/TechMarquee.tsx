'use client';

import React from 'react';

const techItems = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Go', 'Python',
  'PostgreSQL', 'Redis', 'MongoDB', 'Docker', 'Kubernetes', 'AWS',
  'Tailwind CSS', 'GraphQL', 'Prisma', 'Vercel', 'Terraform', 'Figma',
];

export default function TechMarquee() {
  return (
    <section id="stack" className="py-20 bg-white border-y border-zinc-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-[#0a0a0b] tracking-tight">
          Technology Stack
        </h2>
        <p className="font-serif italic text-zinc-500">
          Tools we use to engineer perfection.
        </p>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...techItems, ...techItems].map((tech, i) => (
            <div
              key={i}
              className="flex-shrink-0 px-8 py-3 rounded-full border border-zinc-200 text-zinc-600 font-sans font-medium text-sm tracking-wide hover:border-black hover:text-black transition-colors duration-300 cursor-default select-none"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
