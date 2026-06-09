import React from 'react';
import SvgLogo from './SvgLogo';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-12 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-3">
            <SvgLogo className="w-[1.125rem] h-[2.7rem] text-black" />
            <span className="text-black font-sans font-bold tracking-tight">
              QOLN
            </span>
          </div>
          <p className="text-zinc-500 font-serif italic text-sm">
            Architecture of Digital Success.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-zinc-600 font-sans text-sm font-medium">
          <a href="#services" className="hover:text-black transition-colors">Services</a>
          <a href="#process" className="hover:text-black transition-colors">Process</a>
          <a href="#stack" className="hover:text-black transition-colors">Stack</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </div>

        <p className="text-zinc-400 font-sans text-xs">
          © {new Date().getFullYear()} QOLN. All rights reserved.
        </p>
        
      </div>
    </footer>
  );
}
