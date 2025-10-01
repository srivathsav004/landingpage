'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">DollarPe</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            <Link href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">
              Benefits
            </Link>
            <Link href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">
              Solutions
            </Link>
            <Link href="#security" className="text-gray-600 hover:text-gray-900 transition-colors">
              Security
            </Link>
            <Link href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors">
              Docs
            </Link>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white">
              Open App
            </Button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 py-4 flex flex-col gap-4"
          >
            <Link href="#benefits" className="text-gray-600 hover:text-gray-900 transition-colors">
              Benefits
            </Link>
            <Link href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">
              Solutions
            </Link>
            <Link href="#security" className="text-gray-600 hover:text-gray-900 transition-colors">
              Security
            </Link>
            <Link href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors">
              Docs
            </Link>
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-white w-full">
              Open App
            </Button>
          </motion.div>
        )}
      </nav>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Simplifying Crypto & Fiat for{' '}
              <span className="text-emerald-500">India 🇮🇳</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build compliant fintech products with our unified API platform.
              From KYC to crypto-fiat conversions, everything you need in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-6"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-2 border-gray-300 hover:border-emerald-500"
              >
                Book Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-200">
              <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-3xl font-bold">D</span>
                  </div>
                  <p className="text-gray-500 font-medium">Dashboard Preview</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-emerald-400"></div>
              </div>
            </div>

            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-72 h-72 bg-emerald-200 rounded-full blur-3xl opacity-30"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
