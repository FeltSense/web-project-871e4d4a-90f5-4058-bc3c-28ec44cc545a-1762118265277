'use client';

import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      {/* Logo & Brand */}
      <div className="flex items-center space-x-3 group">
        <div className="relative">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 group-hover:shadow-primary-500/40 transition-all duration-300 group-hover:scale-105">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent-500 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
            OG's Resto
          </h1>
          <p className="text-xs text-neutral-500 font-medium tracking-wide">ORIGINAL DINING</p>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        <a 
          href="#home" 
          className="px-4 py-2 text-sm font-semibold text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100 transition-all duration-200"
        >
          Home
        </a>
        <a 
          href="#services" 
          className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-all duration-200"
        >
          Services
        </a>
        <a 
          href="#pricing" 
          className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-all duration-200"
        >
          Pricing
        </a>
        <a 
          href="#contact" 
          className="px-4 py-2 text-sm font-semibold text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-all duration-200"
        >
          Contact
        </a>
      </div>

      {/* CTA & Mobile Menu */}
      <div className="flex items-center space-x-4">
        <button className="hidden sm:flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105">
          <span>Reserve Table</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-neutral-700 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-all duration-200"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  {/* Decorative dots pattern */}
  <div className="absolute top-0 right-0 w-32 h-full overflow-hidden opacity-5 pointer-events-none">
    <div className="absolute top-4 right-4 w-2 h-2 bg-primary-600 rounded-full"></div>
    <div className="absolute top-8 right-12 w-2 h-2 bg-primary-600 rounded-full"></div>
    <div className="absolute top-12 right-6 w-2 h-2 bg-primary-600 rounded-full"></div>
    <div className="absolute top-16 right-16 w-2 h-2 bg-primary-600 rounded-full"></div>
  </div>
</nav>
  );
}