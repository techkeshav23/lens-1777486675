'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const founder = {
    name: "Elias Thorne",
    bio: "Elias is a visual storyteller based in London, specializing in medium-format film and high-contrast digital street photography. With over a decade behind the lens, his work focuses on the intersection of human isolation and urban geometry. His approach is rooted in the philosophy that the most profound stories are found in the quiet, overlooked spaces between events.",
    photo: "https://i.pravatar.cc/300?img=12"
  };

  const press = [
    "Featured in 'The Future of Minimalism' — Aperture 2023",
    "Best Portfolio Design — Awwwards 2024",
    "Top 10 Emerging Photographers — British Journal of Photography"
  ];

  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-300">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start"
        >
          {/* Bio Section */}
          <div className="md:col-span-7 space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0A0A0A] dark:text-[#FAFAFA]" style={{ fontFamily: 'Geist, sans-serif' }}>
              The lens behind the story.
            </h1>
            <p className="text-lg md:text-xl text-[#666666] dark:text-[#A1A1A1] leading-relaxed">
              {founder.bio}
            </p>
            
            <div className="pt-8 border-t border-[#E5E5E5] dark:border-[#262626]">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#0A0A0A] dark:text-[#FAFAFA] mb-6">
                Accolades & Press
              </h3>
              <ul className="space-y-4">
                {press.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[#666666] dark:text-[#A1A1A1]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0070F3] dark:bg-[#4A9EFF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image Sidebar */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:col-span-5 sticky top-24"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-[#E5E5E5] dark:bg-[#1A1A1A] shadow-2xl">
              <img 
                src={founder.photo} 
                alt={founder.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA]">{founder.name}</h2>
              <p className="text-[#666666] dark:text-[#A1A1A1]">Lead Photographer & Founder</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <section className="mt-32">
          <h2 className="text-3xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA] mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Visual Identity", desc: "Crafting cohesive visual languages for brands that demand a premium, editorial aesthetic." },
              { name: "Editorial Photography", desc: "High-end portraiture and narrative-driven imagery for print and digital publications." },
              { name: "Art Direction", desc: "Overseeing the aesthetic trajectory of campaigns from mood-boarding to final color grade." }
            ].map((service, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#262626] hover:border-[#0070F3] dark:hover:border-[#4A9EFF] transition-colors">
                <h4 className="text-xl font-semibold text-[#0A0A0A] dark:text-[#FAFAFA] mb-3">{service.name}</h4>
                <p className="text-[#666666] dark:text-[#A1A1A1] text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}