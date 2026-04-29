'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const projects = [
  {
    name: "Concrete Echoes",
    client: "ArchDaily",
    year: "2024",
    tags: ["Architecture", "Editorial"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
  },
  {
    name: "Midnight in Shibuya",
    client: "Independent",
    year: "2023",
    tags: ["Street", "Film"],
    image: "https://images.unsplash.com/photo-1542051841-57431b86d1da?w=800",
  },
  {
    name: "The Glass Factory",
    client: "Vogue Living",
    year: "2023",
    tags: ["Portraiture", "Fashion"],
    image: "https://images.unsplash.com/photo-1508921912186-1d1a65ebb1c1?w=800",
  },
  {
    name: "Nordic Solitude",
    client: "Traveler Magazine",
    year: "2022",
    tags: ["Landscape", "Travel"],
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
  },
  {
    name: "Static Motion",
    client: "Nike",
    year: "2022",
    tags: ["Commercial", "Motion"],
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
  },
  {
    name: "After Hours",
    client: "Personal",
    year: "2021",
    tags: ["Documentary", "Black & White"],
    image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800",
  }
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <header className="mb-16">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#666666] dark:text-[#A1A1A1] hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA] mb-6" style={{ fontFamily: 'Geist, sans-serif' }}>
            Selected Works
          </h1>
          <p className="text-xl text-[#666666] dark:text-[#A1A1A1] max-w-2xl">
            A curated collection of visual stories, ranging from architectural studies to intimate portraiture.
          </p>
        </header>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              className="group relative bg-[#FFFFFF] dark:bg-[#121212] rounded-3xl overflow-hidden border border-[#E5E5E5] dark:border-[#262626] shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-[#FAFAFA]">{project.name}</h3>
                  <span className="text-sm text-[#666666] dark:text-[#A1A1A1]">{project.year}</span>
                </div>
                <p className="text-sm text-[#666666] dark:text-[#A1A1A1] mb-4">{project.client}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 rounded-full bg-[#F5F5F5] dark:bg-[#1A1A1A] text-[10px] uppercase tracking-wider text-[#0A0A0A] dark:text-[#FAFAFA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}