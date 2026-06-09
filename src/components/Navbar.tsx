'use client';

import React from 'react';
import SvgLogo from './SvgLogo';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 no-underline">
          <SvgLogo className="w-[1.125rem] h-[2.7rem] text-black" />
          <span className="text-black font-sans font-bold text-xl tracking-tight">
            QOLN
          </span>
        </a>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#services" className="nav-link">Services</a>
          <a href="#process" className="nav-link">Process</a>
          <a href="#stack" className="nav-link">Stack</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn-solid text-sm hidden sm:inline-flex">
          Start a Project
        </a>
      </div>
    </header>
  );
}
