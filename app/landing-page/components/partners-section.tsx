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
    <section className="py-20 bg-white">
      <div className="mx-auto px-4 flex flex-col items-center" style={{ maxWidth: 860 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center gap-5 mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400 bg-white px-4 h-10 text-sm text-emerald-700 shadow-[0_10px_18px_0_rgba(0,0,0,0.04),0_2px_6px_0_rgba(0,0,0,0.04),0_0_1px_0_rgba(0,0,0,0.04)]">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Scalable Infra</span>
          </div>

          <h2 className="text-[40px] md:text-[48px] font-bold text-black text-center leading-tight">
            Reliable APIs. Built for Scale.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#5D5D5D] text-center opacity-80 w-full px-20 max-w-[860px]">
            Purpose-built, reliable infrastructure with deep liquidity
            <br />
            to supercharge your ambitious growth journey.
          </p>
        </motion.div>
      </div>

      <div className="mx-auto" style={{ maxWidth: 1160 }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-4 px-4"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="bg-white border border-[#E8E8E8] rounded-[20px] flex items-center justify-center w-full h-[88px] sm:h-[96px]"
              style={{ maxWidth: 278 }}
            >
              <img
                src={`/partners/${partner.logo}`}
                alt={partner.name}
                className="w-[140px] sm:w-[168px] h-[40px] sm:h-[54px] object-contain"
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
