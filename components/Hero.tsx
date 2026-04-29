'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500"
      style={{ fontFamily: '"Geist", sans-serif' }}
    >
      {/* Background Image with Overlay */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80"
        alt="Architectural photography"
        className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAFAFA]/50 to-[#FAFAFA] dark:via-[#0A0A0A]/50 dark:to-[#0A0A0A]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-4xl px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0A0A0A]/5 dark:bg-[#FAFAFA]/5 backdrop-blur-md border border-[#0A0A0A]/10 dark:border-[#FAFAFA]/10 mb-8"
        >
          <Sparkles className="h-4 w-4 text-[#0A0A0A] dark:text-[#4A9EFF]" />
          <span className="text-sm font-medium text-[#0A0A0A] dark:text-[#FAFAFA]">
            Available for select commissions in 2024
          </span>
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#0A0A0A] dark:text-[#FAFAFA] mb-8 leading-[0.9]">
          Lens
        </h1>
        
        <p className="text-xl md:text-2xl text-[#666666] dark:text-[#A1A1A1] max-w-2xl mx-auto mb-12 font-light">
          Capturing moments, freezing time. Elias Thorne’s visual storytelling through the lens of urban geometry and human isolation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/gallery" 
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A0A0A] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#0A0A0A] font-medium hover:opacity-90 transition-all hover:scale-105"
          >
            Explore Portfolio
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/contact" 
            className="px-8 py-4 rounded-full text-[#0A0A0A] dark:text-[#FAFAFA] border border-[#0A0A0A]/20 dark:border-[#FAFAFA]/20 hover:bg-[#0A0A0A]/5 dark:hover:bg-[#FAFAFA]/10 transition-all font-medium"
          >
            Inquire Now
          </Link>
        </div>
      </motion.div>
    </section>
  );
}