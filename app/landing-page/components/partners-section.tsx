'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  { name: 'Tether', logo: 'tether.png' },
  { name: 'Circle', logo: 'circle.png' },
  { name: 'Hyperverge', logo: 'hyperverge.png' },
  { name: 'Sumsub', logo: 'sumsub.png' },
  { name: 'Chainalysis', logo: 'chainalysis.png' },
  { name: 'Nota Bene', logo: 'notabene.png' },
  { name: 'Ethereum', logo: 'ethereum.png' },
  { name: 'Polygon', logo: 'polygon.png' },
  { name: 'Binance Smart Chain', logo: 'binance.png' },
  { name: 'Arbitrum', logo: 'arbitrum.png' },
  { name: 'Tron', logo: 'tron.png' },
  { name: 'Near', logo: 'near.png' },
  { name: 'Solana', logo: 'solana.png' },
  { name: 'Celo', logo: 'celo.png' },
  { name: 'Optimism', logo: 'optimism.png' },
  { name: 'Deepvue', logo: 'deepvue.png' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 15
    }
  }
};

export function PartnersSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center max-w-[860px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="w-full flex flex-col items-center gap-4 sm:gap-5 lg:gap-6 mb-10 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-emerald-600 shadow-[0_10px_18px_0_rgba(0,0,0,0.04),0_2px_6px_0_rgba(0,0,0,0.04),0_0_1px_0_rgba(0,0,0,0.04)]">
            <Image src="/star.png" alt="star" width={14} height={14} className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Scalable Infra</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-black text-center leading-tight sm:leading-[1.2] lg:leading-[1.16] px-4">
            Reliable APIs. Built for Scale.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#5D5D5D]/80 text-center leading-relaxed w-full px-4 sm:px-10 lg:px-20">
            Purpose-built, reliable infrastructure with deep liquidity to supercharge your ambitious growth journey.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              variants={item}
              whileHover={{ 
                y: -6,
                transition: { 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 20
                }
              }}
              className="bg-white border border-gray-200 rounded-2xl flex items-center justify-center w-full h-[80px] sm:h-[90px] md:h-[100px] hover:shadow-lg hover:border-emerald-200 transition-all duration-300"
            >
              <div className="relative w-[100px] sm:w-[120px] md:w-[140px] lg:w-[168px] h-[28px] sm:h-[36px] md:h-[44px] lg:h-[54px]">
                <Image
                  src={`/partners/${partner.logo}`}
                  alt={partner.name}
                  fill
                  sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 140px, 168px"
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}