'use client';

import React from 'react';

const services = [
  {
    num: '01',
    title: 'Web Applications',
    description: 'Full-stack Next.js and Node.js applications. From SaaS platforms to enterprise portals, we architect digital products that scale flawlessly.',
  },
  {
    num: '02',
    title: 'Mobile Engineering',
    description: 'Native-quality cross-platform applications built with React Native. One robust codebase, deployed seamlessly across iOS and Android.',
  },
  {
    num: '03',
    title: 'Cloud Infrastructure',
    description: 'Infrastructure as code, CI/CD pipelines, and auto-scaling cloud architectures engineered for 99.99% uptime and zero friction.',
  },
  {
    num: '04',
    title: 'Backend Systems',
    description: 'High-throughput APIs, microservices, and event-driven architectures designed to securely process millions of requests per second.',
  },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          
          {/* Section Heading */}
          <div className="md:col-span-5">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-sans font-bold leading-none tracking-tight text-[#0a0a0b] mb-4">
              Core Capabilities
            </h2>
            <p className="font-serif italic text-xl text-zinc-500">
              End-to-end product engineering.
            </p>
          </div>

          {/* Services List */}
          <div className="md:col-span-7 flex flex-col">
            <div className="line-separator mb-8"></div>
            
            {services.map((service, i) => (
              <React.Fragment key={i}>
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 py-8 group hover:bg-zinc-50 transition-colors duration-300 -mx-6 px-6 rounded-2xl cursor-default">
                  <div className="sm:col-span-2 pt-1">
                    <span className="item-number">[{service.num}]</span>
                  </div>
                  <div className="sm:col-span-10">
                    <h3 className="font-sans font-semibold text-2xl text-[#0a0a0b] mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="font-sans text-zinc-600 text-base leading-relaxed max-w-lg">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="line-separator"></div>
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
