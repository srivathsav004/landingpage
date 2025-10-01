'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Twitter, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-2xl font-bold text-white">DollarPe</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Simplifying crypto and fiat infrastructure for next-generation businesses
              across India and Southeast Asia.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-emerald-400 font-medium">
                All Systems Operational
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="hover:text-emerald-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-lg mb-4">Developers</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/docs"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/api"
                  className="hover:text-emerald-400 transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="/sdks"
                  className="hover:text-emerald-400 transition-colors"
                >
                  SDKs
                </Link>
              </li>
              <li>
                <Link
                  href="/status"
                  className="hover:text-emerald-400 transition-colors"
                >
                  API Status
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold text-lg mb-4">Connect</h4>
            <div className="flex gap-4 mb-6">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Join our community for updates, support, and discussions.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} DollarPe. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-emerald-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-emerald-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-500 hover:text-emerald-400 transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
