'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FAFAFA] dark:bg-[#0A0A0A] border-t border-[#E5E5E5] dark:border-[#262626] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-[#0A0A0A] dark:text-[#FAFAFA] mb-4 block">
            Lens.
          </Link>
          <p className="text-[#666666] dark:text-[#A1A1A1] max-w-sm mb-8">
            Capturing moments, freezing time. Specializing in medium-format film and high-contrast digital street photography.
          </p>
          <div className="flex gap-6">
            {['Instagram', 'Twitter', 'Behance', 'LinkedIn'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm font-medium text-[#0A0A0A] dark:text-[#FAFAFA] hover:text-[#0070F3] dark:hover:text-[#4A9EFF] transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#0A0A0A] dark:text-[#FAFAFA] mb-6 uppercase tracking-widest">Navigation</h4>
          <ul className="space-y-4">
            {['Gallery', 'About', 'Contact', 'Work'].map((link) => (
              <li key={link}>
                <Link
                  href={`/${link.toLowerCase()}`}
                  className="text-[#666666] dark:text-[#A1A1A1] hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-[#0A0A0A] dark:text-[#FAFAFA] mb-6 uppercase tracking-widest">Press</h4>
          <ul className="space-y-4">
            <li className="text-[#666666] dark:text-[#A1A1A1] text-sm leading-relaxed">
              Featured in 'The Future of Minimalism' — Aperture 2023
            </li>
            <li className="text-[#666666] dark:text-[#A1A1A1] text-sm leading-relaxed">
              Best Portfolio Design — Awwwards 2024
            </li>
            <li className="text-[#666666] dark:text-[#A1A1A1] text-sm leading-relaxed">
              Top 10 Emerging Photographers — British Journal of Photography
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-[#E5E5E5] dark:border-[#262626] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[#666666] dark:text-[#A1A1A1]">
          © {currentYear} Elias Thorne. All rights reserved.
        </p>
        <div className="flex gap-8">
          <span className="text-xs text-[#666666] dark:text-[#A1A1A1]">Privacy Policy</span>
          <span className="text-xs text-[#666666] dark:text-[#A1A1A1]">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}