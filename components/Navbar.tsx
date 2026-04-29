'use client';

import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { Menu, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl bg-[#FAFAFA]/80 dark:bg-[#0A0A0A]/80 border-b border-[#E5E5E5] dark:border-[#262626] transition-colors duration-300"
      style={{ fontFamily: '"Inter", sans-serif' }}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-xl font-bold tracking-tighter text-[#0A0A0A] dark:text-[#FAFAFA]"
        >
          <Camera className="h-6 w-6" />
          <span>Lens</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#666666] dark:text-[#A1A1A1] hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden p-2 rounded-full bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[#0A0A0A] dark:text-[#FAFAFA]"
          >
            <Menu className="h-5 w-5" />
          </motion.button>
          <Link 
            href="/contact"
            className="hidden md:block px-5 py-2.5 rounded-full bg-[#0A0A0A] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#0A0A0A] text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Inquire
          </Link>
        </div>
      </nav>
    </header>
  );
}