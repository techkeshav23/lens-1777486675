'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] transition-colors duration-300">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0A0A0A] dark:text-[#FAFAFA] mb-8">
            Let&apos;s create something <span className="italic text-[#0070F3] dark:text-[#4A9EFF]">extraordinary</span>.
          </h1>
          <p className="text-xl text-[#666666] dark:text-[#A1A1A1] max-w-2xl mb-16">
            Elias Thorne is currently accepting new commissions for editorial, commercial, and portraiture projects. Please reach out with your project scope and timeline.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            {/* Contact Form */}
            <div className="md:col-span-7">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0A0A0A] dark:text-[#FAFAFA]">Name</label>
                    <input type="text" className="w-full p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#262626] focus:ring-2 focus:ring-[#0070F3] outline-none transition-all text-[#0A0A0A] dark:text-[#FAFAFA]" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-[#0A0A0A] dark:text-[#FAFAFA]">Email</label>
                    <input type="email" className="w-full p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#262626] focus:ring-2 focus:ring-[#0070F3] outline-none transition-all text-[#0A0A0A] dark:text-[#FAFAFA]" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#0A0A0A] dark:text-[#FAFAFA]">Project Details</label>
                  <textarea rows={6} className="w-full p-4 rounded-2xl bg-[#FFFFFF] dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#262626] focus:ring-2 focus:ring-[#0070F3] outline-none transition-all text-[#0A0A0A] dark:text-[#FAFAFA]" placeholder="Tell me about your vision..." />
                </div>
                <button className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-[#0A0A0A] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#0A0A0A] font-semibold hover:opacity-90 transition-all">
                  Send Inquiry <Send className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-5 space-y-8">
              <div className="p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#262626] shadow-sm">
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-[#F5F5F5] dark:bg-[#1A1A1A]">
                    <Mail className="h-6 w-6 text-[#0A0A0A] dark:text-[#FAFAFA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0A0A] dark:text-[#FAFAFA]">Email</h3>
                    <p className="text-[#666666] dark:text-[#A1A1A1]">studio@eliasthorne.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-[#F5F5F5] dark:bg-[#1A1A1A]">
                    <MapPin className="h-6 w-6 text-[#0A0A0A] dark:text-[#FAFAFA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0A0A] dark:text-[#FAFAFA]">Location</h3>
                    <p className="text-[#666666] dark:text-[#A1A1A1]">London, United Kingdom</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-[#F5F5F5] dark:bg-[#1A1A1A]">
                    <Clock className="h-6 w-6 text-[#0A0A0A] dark:text-[#FAFAFA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0A0A] dark:text-[#FAFAFA]">Availability</h3>
                    <p className="text-[#666666] dark:text-[#A1A1A1]">Currently booking for Q3/Q4 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}