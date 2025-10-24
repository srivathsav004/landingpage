'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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

export function PartnersSection() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="mx-auto px-4 flex flex-col items-center" style={{ maxWidth: 860 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center gap-4 sm:gap-5 mb-8 sm:mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400 bg-white px-3 sm:px-4 h-8 sm:h-10 text-xs sm:text-sm text-emerald-700 shadow-[0_10px_18px_0_rgba(0,0,0,0.04),0_2px_6px_0_rgba(0,0,0,0.04),0_0_1px_0_rgba(0,0,0,0.04)]">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="font-medium">Scalable Infra</span>
          </div>

          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-black text-center leading-tight">
            Reliable APIs. Built for Scale.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#5D5D5D] text-center opacity-80 w-full px-4 sm:px-10 lg:px-20 max-w-[860px]">
            Purpose-built, reliable infrastructure with deep liquidity
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            to supercharge your ambitious growth journey.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto px-4" style={{ maxWidth: 1200 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.03,
                type: 'spring',
                stiffness: 200,
                damping: 20
              }}
              whileHover={{ 
                y: -4, 
                scale: 1.02,
                transition: { 
                  type: 'spring', 
                  stiffness: 400, 
                  damping: 25 
                }
              }}
              whileTap={{ scale: 0.98 }}
              className="group bg-white border border-[#E8E8E8] rounded-[20px] flex items-center justify-center w-full h-[70px] sm:h-[80px] md:h-[88px] lg:h-[100px] cursor-pointer shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300"
              style={{ maxWidth: 280 }}
            >
              <motion.img
                src={`/partners/${partner.logo}`}
                alt={partner.name}
                className="w-[100px] sm:w-[120px] md:w-[140px] lg:w-[168px] h-[24px] sm:h-[32px] md:h-[40px] lg:h-[54px] object-contain transition-all duration-300 group-hover:scale-105"
                whileHover={{
                  filter: 'brightness(1.1)',
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center gap-3 bg-emerald-50 border border-emerald-200 rounded-full px-6 py-3 text-sm text-emerald-700">
          <span className="font-semibold">Integrated with 15+ blockchain networks</span>
        </div>
      </motion.div> */}
    </section>
  );
}
