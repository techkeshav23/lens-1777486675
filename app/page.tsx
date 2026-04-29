'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Camera, Compass } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
  { name: "Concrete Echoes", client: "ArchDaily", year: "2024", tags: ["Architecture", "Editorial"], image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" },
  { name: "Midnight in Shibuya", client: "Independent", year: "2023", tags: ["Street", "Film"], image: "https://images.unsplash.com/photo-1542051841-57431b86d1da?w=800" },
  { name: "The Glass Factory", client: "Vogue Living", year: "2023", tags: ["Portraiture", "Fashion"], image: "https://images.unsplash.com/photo-1508921912186-1d1a65ebb1c1?w=800" },
  { name: "Nordic Solitude", client: "Traveler Magazine", year: "2022", tags: ["Landscape", "Travel"], image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800" },
  { name: "Static Motion", client: "Nike", year: "2022", tags: ["Commercial", "Motion"], image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800" },
  { name: "After Hours", client: "Personal", year: "2021", tags: ["Documentary", "Black & White"], image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800" }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 px-6 flex flex-col items-center justify-center text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-[#0A0A0A] dark:text-[#FAFAFA] mb-8">
            Lens<span className="text-[#0070F3] dark:text-[#4A9EFF]">.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-[#666666] dark:text-[#A1A1A1] font-light mb-12">
            Capturing moments, freezing time.
          </p>
          <Link href="/gallery" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#0A0A0A] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#0A0A0A] font-medium hover:scale-105 transition-transform">
            View Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* Bento Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-[#FFFFFF] dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#262626] ${i % 3 === 0 ? 'md:col-span-8' : 'md:col-span-4'} aspect-[4/3]`}
            >
              <img 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <h3 className="text-white text-2xl font-bold">{project.name}</h3>
                <p className="text-white/80">{project.client} • {project.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F5F5F5] dark:bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
          {[
            { name: "Visual Identity", icon: Sparkles, desc: "Crafting cohesive visual languages for brands." },
            { name: "Editorial Photography", icon: Camera, desc: "High-end portraiture and narrative-driven imagery." },
            { name: "Art Direction", icon: Compass, desc: "Overseeing the aesthetic trajectory of campaigns." }
          ].map((s) => (
            <div key={s.name} className="p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#262626]">
              <s.icon className="h-8 w-8 mb-6 text-[#0070F3] dark:text-[#4A9EFF]" />
              <h3 className="text-xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA] mb-4">{s.name}</h3>
              <p className="text-[#666666] dark:text-[#A1A1A1]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}