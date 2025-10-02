'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="relative w-full">
      {/* Main Footer Container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-[1402px] bg-[#F2F2F24D] rounded-[32px] px-6 lg:px-12 py-8 lg:py-12"
      >
        {/* Main Content Container */}
        <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16">
          
          {/* Left Section - Logo, Social Icons, and Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-6 flex-1 max-w-[874px]"
          >
            {/* Logo and Social Icons Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Logo */}
              <div className="w-[175px] h-[38px]">
                <Image
                  src="/footer/dollarpe-logo.png"
                  alt="DollarPe Logo"
                  width={175}
                  height={38}
                  className="object-contain"
                />
              </div>

              {/* Social Media Icons */}
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="flex gap-3"
>
  {[
    { href: "https://linkedin.com", src: "/footer/linkedin-icon.png", alt: "LinkedIn" },
    { href: "https://twitter.com", src: "/footer/twitter-icon.png", alt: "Twitter" },
    { href: "https://github.com", src: "/footer/github-icon.png", alt: "GitHub" },
    { href: "https://hashnode.com", src: "/footer/hashnode-icon.png", alt: "Hashnode" },
  ].map((icon, i) => (
    <Link
      key={i}
      href={icon.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 hover:shadow-md"
    >
      <Image
        src={icon.src}
        alt={icon.alt}
        width={44}  // match your provided icon size (circle already included in asset)
        height={44}
        className="object-contain"
      />
    </Link>
  ))}
</motion.div>

            </div>

            {/* Description Text */}
            <div className="w-full">
              <p className="text-[#5D5D5D] text-sm lg:text-base font-normal leading-[160%] text-justify">
                DollarPe Technologies Private Limited and its subsidiary DollarPe LLC (collectively "DollarPe"), is a financial technology that offers its infrastructure solutions in partnership with regulated financial institutions in each jurisdictions. DollarPe does not endorse or make any recommendations for the purchase or sale of virtual digital assets. Our products are offered in limited jurisdictions so please contact our partnership team to know more about our offerings in each jurisdictions.
              </p>
            </div>
          </motion.div>

          {/* Right Section - Company and Developers */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex gap-12 lg:gap-16 flex-wrap"
          >
            {/* Company Section */}
            <div className="flex flex-col gap-5">
              <h4 className="text-black text-lg font-semibold leading-[145%]">
                Company
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="/about" className="text-[#5D5D5D] text-base hover:text-black transition-colors">About Us</Link>
                <Link href="/use-cases" className="text-[#5D5D5D] text-base hover:text-black transition-colors">Use Cases</Link>
                <Link href="/terms" className="text-[#5D5D5D] text-base hover:text-black transition-colors">Terms of Use</Link>
                <Link href="/privacy" className="text-[#5D5D5D] text-base hover:text-black transition-colors">Privacy Policy</Link>
              </div>
            </div>

            {/* Developers Section */}
            <div className="flex flex-col gap-5">
              <h4 className="text-black text-lg font-semibold leading-[145%]">
                Developers
              </h4>
              <div className="flex flex-col gap-3">
                <Link href="/docs" className="text-[#5D5D5D] text-base hover:text-black transition-colors">API Documentation</Link>
                <Link href="/support" className="text-[#5D5D5D] text-base hover:text-black transition-colors">Technical Support</Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-10"
        >
          {/* Copyright */}
          <p className="text-black text-sm lg:text-base opacity-80 text-center lg:text-left">
            © 2025 DollarPe. All Rights Reserved.
          </p>

          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-3 bg-white rounded-full border border-[#E8E8E8] px-5 py-2 shadow-sm"
          >
            <Image
              src="/footer/status-icon.png"
              alt="Status"
              width={20}
              height={20}
              className="object-contain"
            />
            <span className="text-black text-sm lg:text-base font-medium">
              All System Operational
            </span>
          </motion.div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
