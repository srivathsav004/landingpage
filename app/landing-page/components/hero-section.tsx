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
        <div className="container mx-auto px-4 py-3">
          {/* 3-column grid keeps logo left, links centered, CTA right */}
          <div className="grid grid-cols-3 items-center">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              className="flex items-center gap-2"
            >
              {/* PASTE YOUR SVG LOGO HERE */}
              <svg width="175" height="36" viewBox="0 0 175 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.8814 0.878278C18.1249 0.93538 13.819 2.84681 10.638 5.92734C9.1102 7.40299 7.84498 9.14912 6.908 11.0876C6.89905 11.1056 6.89009 11.1207 6.88413 11.1357C6.87517 11.1537 6.86622 11.1687 6.86025 11.1868C6.09635 12.7917 5.56221 14.5258 5.29663 16.347H36.0678V3.69433C36.0678 2.05639 34.7369 0.731014 33.1106 0.752051L22.8814 0.878278ZM30.7801 11.1868H12.7268C12.7358 11.1687 12.7477 11.1537 12.7626 11.1357C12.7746 11.1177 12.7865 11.1026 12.8014 11.0876C13.1267 10.6488 13.4877 10.2281 13.8787 9.82834C16.2897 7.36993 19.5095 5.99045 22.9411 5.94838L24.6509 5.92734L30.7801 5.8492V11.1868Z" fill="#24CB71"/>
              <path d="M41.3584 13.7684C41.3584 15.208 40.1976 16.3771 38.7683 16.3771H2.59012C1.16078 16.3771 0 15.208 0 13.7684C0 12.3288 1.16078 11.1598 2.59012 11.1598H38.7683C40.2006 11.1598 41.3584 12.3258 41.3584 13.7684Z" fill="#24CB71"/>
              <path d="M18.48 35.1217C23.2365 35.0646 27.5424 33.1532 30.7264 30.0726C32.2542 28.597 33.5194 26.8509 34.4564 24.9124C34.4654 24.8943 34.4743 24.8793 34.4803 24.8643C34.4892 24.8463 34.4982 24.8312 34.5041 24.8132C35.2681 23.2083 35.8022 21.4742 36.0678 19.6529H5.29663V32.3056C5.29663 33.9436 6.6275 35.269 8.25379 35.2479L18.48 35.1217ZM10.5843 24.8132H28.6346C28.6256 24.8312 28.6137 24.8463 28.5988 24.8643C28.5869 24.8823 28.5749 24.8973 28.56 24.9124C28.2347 25.3512 27.8737 25.7719 27.4828 26.1716C25.0717 28.63 21.8519 30.0095 18.4203 30.0516L16.7105 30.0726L10.5813 30.1508V24.8132H10.5843Z" fill="#24CB71"/>
              <path d="M0.00300598 22.2316C0.00300598 20.792 1.16379 19.6229 2.59313 19.6229H38.7713C40.2006 19.6229 41.3614 20.792 41.3614 22.2316C41.3614 23.6712 40.2006 24.8403 38.7713 24.8403H2.59313C1.1608 24.8403 0.00300598 23.6742 0.00300598 22.2316Z" fill="#24CB71"/>
              <path d="M71.661 17.8076C71.661 23.6982 69.1395 28.0741 64.5501 29.3063C63.3595 29.6248 61.6795 29.7992 59.5071 29.7992H53.8196C52.5305 29.7992 51.4861 28.7473 51.4861 27.4489V8.38874C51.4861 6.72976 52.2918 5.84918 53.939 5.81312H60.8022C68.3697 5.81312 71.661 10.1529 71.661 17.8076ZM60.8052 10.0117H56.2874V25.4624H60.1756C65.0097 25.4624 66.6897 22.8537 66.6897 17.8076C66.6897 13.008 65.2185 10.0117 60.8052 10.0117Z" fill="black"/>
              <path d="M90.6155 20.5396C90.6155 26.9591 87.7777 30.2049 82.1737 30.2049C76.5698 30.2049 73.7678 26.9591 73.7678 20.5396C73.7678 14.0479 76.5698 10.8382 82.1737 10.8382C87.7777 10.8382 90.6155 14.0509 90.6155 20.5396ZM78.4974 20.5396C78.5332 24.1731 79.7567 26.0064 82.1409 26.0064C84.5222 26.0064 85.7128 24.101 85.7486 20.3983C85.7486 16.7648 84.558 14.9646 82.1767 14.9646C79.7239 14.9676 78.4974 16.8369 78.4974 20.5396Z" fill="black"/>
              <path d="M97.5175 8.08826V29.7812H92.8595V5.79515H95.2765C96.5029 5.79515 97.5175 6.85304 97.5175 8.08826Z" fill="black"/>
              <path d="M105.506 8.08826V29.7812H100.848V5.79515H103.265C104.488 5.79515 105.506 6.85304 105.506 8.08826Z" fill="black"/>
              <path d="M112.933 15.9894H108.275C108.836 12.5332 111.253 10.8382 115.526 10.8382C120.641 10.8382 123.231 12.5302 123.335 15.9894V22.3398C123.335 27.491 120.253 29.7841 115.245 30.1358C110.796 30.4874 107.714 28.4077 107.714 24.2813C107.818 19.8002 111.041 18.6041 115.735 18.1443C117.731 17.8978 118.746 17.2967 118.746 16.2749C118.641 15.217 117.66 14.6881 115.735 14.6881C114.088 14.6851 113.178 15.1088 112.933 15.9894ZM118.865 22.1294C118.913 21.5494 118.892 20.9633 118.808 20.4284C118.826 20.5366 117.188 20.9964 117.057 21.0324C116.251 21.2488 115.425 21.3811 114.625 21.6155C114.183 21.7447 113.745 21.907 113.36 22.1625C112.014 23.0551 111.906 25.252 113.416 26.0575C113.855 26.2919 114.365 26.358 114.864 26.343C116.508 26.2979 117.913 25.4083 118.501 23.8395C118.698 23.3165 118.817 22.7275 118.865 22.1294Z" fill="black"/>
              <path d="M125.579 20.1519C125.719 14.12 128.906 11.1206 135.104 11.1206H135.77V14.3995C135.77 15.2771 135.065 15.9864 134.194 15.9864C131.604 15.9864 130.306 17.3628 130.306 20.0797V29.7811H125.579V20.1519Z" fill="black"/>
              <path d="M148.836 21.2459H142.812V29.7812H137.945V8.37077C137.945 6.9943 139.031 5.79515 140.398 5.79515H148.487C153.53 5.79515 156.156 8.51202 156.156 13.519C156.156 18.2465 153.599 21.2459 148.836 21.2459ZM147.61 16.9061C150.063 16.9421 151.286 15.7761 151.286 13.4499C151.286 11.1207 150.132 9.95762 147.855 9.95762H142.88V16.9061H147.61Z" fill="black"/>
              <path d="M166.6 30.2049C160.997 30.0276 158.195 26.7487 158.195 20.3983C158.195 14.0479 161.032 10.8742 166.669 10.8382C172.554 10.8382 175.32 14.4717 174.971 21.7718H162.993C163.169 24.6299 164.392 26.0755 166.669 26.0755C167.755 26.0755 168.77 25.6157 169.68 24.7351C170.101 24.2753 170.626 24.0649 171.256 24.0649H174.687C173.673 28.017 171.151 30.2049 166.6 30.2049ZM163.061 18.4238H170.032C169.752 15.9533 168.597 14.6851 166.6 14.6851C164.604 14.6851 163.411 15.9533 163.061 18.4238Z" fill="black"/>
            </svg>
            </motion.div>

            {/* Desktop Nav Links (center) */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="hidden md:flex items-center justify-center gap-8"
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
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium" 
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
              className="ml-auto flex items-center justify-end gap-3"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="hidden md:inline-flex text-white font-medium px-6 py-2 rounded-lg"
                  style={{ backgroundColor: '#24CB71' }}
                  onClick={handleNavClick}
                >
                  Open App
                </Button>
              </motion.div>
              <motion.button
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {mobileMenuOpen ? <X /> : <Menu />}
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
              className="md:hidden mt-4 py-4 flex flex-col gap-4 overflow-hidden"
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
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium" 
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
                  className="text-white w-full font-medium px-6 py-2 rounded-lg"
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

      {/* Hero Section - Responsive, layered layout (text on bg, image overlaps onto gradient) */}
      <section className="relative overflow-hidden bg-gray-50">
        <div className="container mx-auto px-4 pt-4 md:pt-6 pb-0">
          {/* Base gradient image container (1402x1303) with hero background over it */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-[1402px] rounded-2xl overflow-hidden border border-gray-200/60 shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
          >
            {/* Base gradient image (was the rectangle) */}
            <div className="relative w-full aspect-[1402/1303]">
              <Image src="/hero-base.png" alt="Hero Base" fill className="object-cover" priority />
              {/* Top hero background (1049h) sits over base with Darken blend */}
              <div className="absolute inset-x-0 top-0">
                <div className="relative w-full aspect-[1402/1049]">
                  <Image
                    src="/hero-background.png"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    style={{ mixBlendMode: 'darken' }}
                    priority
                  />
                </div>
              </div>
            </div>
            {/* Text content confined to hero-background area */}
            <div className="absolute inset-x-0 top-0 px-4 text-center pointer-events-none">
              <div className="relative mx-auto w-full aspect-[1402/1049] flex flex-col items-center justify-start pt-10 md:pt-14 lg:pt-16">
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
                >
                  Stablecoin Payment APIs for India 🇮🇳
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                  className="mt-3 md:mt-4 text-base md:text-lg text-gray-600 max-w-2xl"
                >
                  Access all of South East Asia with just one integration.
                  <br />
                  Enable 24×7 instant payouts.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="mt-5 flex flex-col sm:flex-row gap-4 pointer-events-auto"
                >
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" className="text-white text-base px-8 py-4 rounded-lg" style={{ backgroundColor: '#24CB71' }}>
                      Get Started
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
                    <Button size="lg" variant="outline" className="text-base px-8 py-4 rounded-lg border-2 border-gray-300 hover:border-emerald-500">
                      Book Demo
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
            {/* Dashboard preview inside base image near bottom, perfectly centered */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute inset-x-0 bottom-6 md:bottom-10 lg:bottom-12 flex justify-center"
            >
              <div className="w-[92%] md:w-[88%] max-w-[1068px] rounded-2xl border border-gray-200 bg-white shadow-2xl/10 shadow-black/5">
                <div className="relative w-full aspect-[1067.387/823.038] overflow-hidden rounded-2xl">
                  <Image src="/dashboard-preview.png" alt="Dashboard Preview" fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Small spacer below hero */}
          <div className="mx-auto w-full max-w-[1402px] h-10 md:h-12"></div>

          {/* Bottom spacing to fully reveal hero before next section */}
          <div className="h-16 md:h-24"></div>
        </div>
      </section>
    </>
  );
}