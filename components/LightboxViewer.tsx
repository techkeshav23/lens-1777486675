'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface LightboxProps {
  images: { src: string; alt: string; title: string; client: string }[];
  initialIndex?: number;
  onClose: () => void;
}

export default function LightboxViewer({ images, initialIndex = 0, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length, onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#FAFAFA]/95 dark:bg-[#0A0A0A]/95 backdrop-blur-2xl p-4 md:p-12"
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 p-3 rounded-full bg-[#E5E5E5] dark:bg-[#262626] text-[#0A0A0A] dark:text-[#FAFAFA] hover:scale-110 transition-transform"
      >
        <X className="h-6 w-6" />
      </button>

      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
          >
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold text-[#0A0A0A] dark:text-[#FAFAFA] font-['Geist']">
                {images[currentIndex].title}
              </h2>
              <p className="text-[#666666] dark:text-[#A1A1A1] mt-1">
                Client: {images[currentIndex].client}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
          className="absolute left-4 md:left-8 p-4 rounded-full bg-[#FFFFFF] dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#262626] shadow-lg hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A]"
        >
          <ChevronLeft className="h-6 w-6 text-[#0A0A0A] dark:text-[#FAFAFA]" />
        </button>

        <button
          onClick={() => setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
          className="absolute right-4 md:right-8 p-4 rounded-full bg-[#FFFFFF] dark:bg-[#121212] border border-[#E5E5E5] dark:border-[#262626] shadow-lg hover:bg-[#F5F5F5] dark:hover:bg-[#1A1A1A]"
        >
          <ChevronRight className="h-6 w-6 text-[#0A0A0A] dark:text-[#FAFAFA]" />
        </button>
      </div>
    </motion.div>
  );
}