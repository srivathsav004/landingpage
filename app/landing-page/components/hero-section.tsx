'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white border-b border-gray-100 sticky top-0 z-50"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between max-w-[1400px] mx-auto">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <Image 
                src="/Dollarpe Logo.svg" 
                alt="DollarPe" 
                width={120} 
                height={28} 
                className="w-auto h-6 md:h-8"
              />
            </motion.div>

            {/* Desktop Nav Links */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="hidden md:flex items-center justify-center gap-6 lg:gap-8 flex-1"
            >
              {['Benefits', 'Solutions', 'Security', 'Docs'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1, ease: "easeOut" }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-sm lg:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium" 
                    onClick={handleNavClick}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Right side CTA & mobile toggle */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="flex items-center justify-end gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block"
              >
                <Button
                  className="text-white font-medium px-5 lg:px-6 py-2 rounded-lg text-sm lg:text-base"
                  style={{ backgroundColor: '#24CB71' }}
                  onClick={handleNavClick}
                >
                  Open App
                </Button>
              </motion.div>
              <motion.button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden mt-4 py-4 flex flex-col gap-3 overflow-hidden border-t border-gray-100"
            >
              {['Benefits', 'Solutions', 'Security', 'Docs'].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium block py-2 text-base" 
                    onClick={handleNavClick}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                <Button
                  className="text-white w-full font-medium px-4 py-2.5 rounded-lg text-base"
                  style={{ backgroundColor: '#24CB71' }}
                  onClick={handleNavClick}
                >
                  Open App
                </Button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="w-full px-4 sm:px-6 lg:px-8 pt-3 sm:pt-5 md:pt-8 pb-0">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[1402px] rounded-2xl overflow-hidden border border-gray-200/60"
          >
            {/* Base gradient image */}
            <div className="relative w-full aspect-[1402/1303] lg:aspect-[1402/1350] xl:aspect-[1402/1400] 2xl:aspect-[1402/1450] min-h-[460px] lg:min-h-[720px] xl:min-h-[780px]">
              <Image 
                src="/hero-base.png" 
                alt="Hero Base" 
                fill 
                className="object-cover"
                priority 
                sizes="(max-width: 768px) 100vw, (max-width: 1402px) 100vw, 1402px"
              />
              
              {/* Top hero background with Darken blend and rounded corners */}
              <div className="absolute inset-x-0 top-0 bottom-[15%] sm:bottom-[13%] md:bottom-[12%] lg:bottom-[11%] rounded-2xl sm:rounded-[22px] md:rounded-[26px] lg:rounded-[28px] overflow-hidden">
                <Image
                  src="/hero-background.png"
                  alt="Hero Background"
                  fill
                  className="object-cover"
                  style={{ mixBlendMode: 'darken' }}
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1402px) 100vw, 1402px"
                />
              </div>

              {/* Dashboard preview - No shadow */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="absolute left-[7%] right-[7%] top-[56%] sm:left-[8%] sm:right-[8%] sm:top-[48%] md:left-[11%] md:right-[11%] md:top-[42%] lg:left-[12%] lg:right-[12%] lg:top-[35%] xl:left-[10%] xl:right-[10%] xl:top-[31.5%] 2xl:left-[9%] 2xl:right-[9%] 2xl:top-[30%]"
              >
                <div className="w-full rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden">
                  <div className="relative w-full aspect-[1067.387/823.038]">
                    <Image 
                      src="/Dashboard Screen.svg" 
                      alt="Dashboard Preview" 
                      fill 
                      className="object-contain"
                      sizes="(max-width: 640px) 90vw, (max-width: 1068px) 84vw, 1068px"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Text content overlay */}
            <div className="absolute inset-x-0 top-0 px-3 sm:px-6 md:px-8 pointer-events-none">
              <div className="relative mx-auto w-full flex flex-col items-center justify-start pt-[4%] sm:pt-[5%] md:pt-[6%] lg:pt-[7%]">
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="leading-tight font-bold text-gray-900 text-center px-2 text-[length:clamp(1.375rem,5vw,3.25rem)]"
                  style={{ maxWidth: '90vw' }}
                >
                  <span className="inline-block">Stablecoin Payment APIs for Asia</span>
                  {/* <Image
                    src="/flag.svg"
                    alt="India Flag"
                    width={28}
                    height={28}
                    className="inline-block ml-[0.2em] align-middle"
                    style={{ width: 'clamp(1.25rem, 4.5vw, 2rem)', height: 'auto' }}
                  /> */}
                </motion.h1>
                
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="mt-[2%] text-[length:clamp(0.875rem,2.5vw,1.125rem)] leading-relaxed text-gray-700 text-center px-4"
                  style={{ maxWidth: '95vw' }}
                >
                  <span className="inline-block">Access all of South East Asia with just one integration.</span>
                  <br />
                  <span className="inline-block">Enable 24×7 instant payouts.</span>
                </motion.p>

                {/* CTA Buttons - Updated layout matching Figma */}
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="mt-[3%] pointer-events-auto flex justify-center mb-[8%] sm:mb-[10%] md:mb-[12%]"
                >
                  <div className="bg-white rounded-xl px-[0.75vw] py-[0.75vw] sm:px-[1vw] sm:py-[0.8vw] flex flex-row gap-[1.5vw] items-center shadow-sm">
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -1 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="text-white text-[length:clamp(0.875rem,2.2vw,1rem)] px-[3vw] sm:px-[2.5vw] md:px-[2vw] py-[1.5vw] sm:py-[1.2vw] md:py-[0.8vw] rounded-lg font-semibold whitespace-nowrap" 
                        style={{ backgroundColor: '#24CB71' }}
                      >
                        Get Started
                      </Button>
                    </motion.div>
                    <motion.div 
                      whileHover={{ scale: 1.05, y: -1 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        variant="ghost" 
                        className="text-[length:clamp(0.875rem,2.2vw,1rem)] px-[3vw] sm:px-[2.5vw] md:px-[2vw] py-[1.5vw] sm:py-[1.2vw] md:py-[0.8vw] rounded-lg text-gray-900 font-semibold hover:bg-gray-50 whitespace-nowrap"
                      >
                        Book Demo
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Bottom spacing */}
          <div className="h-8 sm:h-12 md:h-16 lg:h-24 xl:h-28"></div>
        </div>
      </section>
    </>
  );
}