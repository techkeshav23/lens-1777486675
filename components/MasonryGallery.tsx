'use client';

import { motion } from 'framer-motion';

const projects = [
  { name: "Concrete Echoes", client: "ArchDaily", year: "2024", tags: ["Architecture", "Editorial"], image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800" },
  { name: "Midnight in Shibuya", client: "Independent", year: "2023", tags: ["Street", "Film"], image: "https://images.unsplash.com/photo-1542051841-57431b86d1da?w=800" },
  { name: "The Glass Factory", client: "Vogue Living", year: "2023", tags: ["Portraiture", "Fashion"], image: "https://images.unsplash.com/photo-1508921912186-1d1a65ebb1c1?w=800" },
  { name: "Nordic Solitude", client: "Traveler Magazine", year: "2022", tags: ["Landscape", "Travel"], image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800" },
  { name: "Static Motion", client: "Nike", year: "2022", tags: ["Commercial", "Motion"], image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800" },
  { name: "After Hours", client: "Personal", year: "2021", tags: ["Documentary", "Black & White"], image: "https://images.unsplash.com/photo-1554080353-a576cf803bda?w=800" }
];

export default function MasonryGallery() {
  return (
    <section className="py-20 bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl bg-[#FFFFFF] dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#262626] shadow-lg hover:shadow-2xl transition-all duration-500"
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
                  <h3 className="text-lg font-semibold text-[#0A0A0A] dark:text-[#FAFAFA] font-['Geist']">
                    {project.name}
                  </h3>
                  <span className="text-xs font-medium text-[#666666] dark:text-[#A1A1A1] bg-[#F5F5F5] dark:bg-[#1A1A1A] px-2 py-1 rounded-full">
                    {project.year}
                  </span>
                </div>
                <p className="text-sm text-[#666666] dark:text-[#A1A1A1] mb-4">{project.client}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] uppercase tracking-wider text-[#0070F3] dark:text-[#4A9EFF] font-bold"
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
    </section>
  );
}