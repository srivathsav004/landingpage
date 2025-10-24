'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const useCases = [
  {
    image: '/usecases/neobank.png',
    title: 'Global Neobanks',
    description: 'Embed stablecoin payments in your product stack.',
  },
  {
    image: '/usecases/wallets.png',
    title: 'Digital Wallets',
    description: 'Enable stablecoin off-ramping to all local currencies.',
  },
  {
    image: '/usecases/remittance.png',
    title: 'Remittances',
    description: 'Move money 24×7 across borders with speed.',
  },
  {
    image: '/usecases/cards.png',
    title: 'Card Issuers',
    description: 'Instant off-ramping for funding any crypto-backed cards.',
  },
  {
    image: '/usecases/payroll.png',
    title: 'Global Payrolls',
    description: 'Pay contractors with ease, no matter where they are.',
  },
  {
    image: '/usecases/treasury.png',
    title: 'Modern Treasuries',
    description: 'Manage stablecoin reserves, and conversions efficiently.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function UseCases() {
  return (
    <section className="py-24 bg-white" id="solutions">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <div
            className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500 bg-white px-4 py-2 text-sm font-medium text-emerald-600 shadow-[0_10px_18px_0_rgba(0,0,0,0.04),0_2px_6px_0_rgba(0,0,0,0.04),0_0_1px_0_rgba(0,0,0,0.04)]"
          >
            <Image src="/star.png" alt="star" width={14} height={14} className="h-3.5 w-3.5" />
            Use Cases
          </div>
          <h2 className="max-w-[860px] text-center text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.16] font-bold text-black">
            Empowering Next-Gen Businesses.
          </h2>
          <p className="max-w-[860px] px-4 sm:px-10 lg:px-20 text-center text-[16px] sm:text-[18px] leading-[1.6] text-[#5D5D5D]/80">
            Scale your business with low cost & instant stablecoin rails.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Build modern neobanks, payroll solutions and more.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1202px] mx-auto"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ type: 'spring', stiffness: 240, damping: 20 }}
              className="p-1"
            >
              <Card
                className="relative h-[393px] rounded-[17.23px] border-0 shadow-[0_6px_24px_rgba(0,0,0,0.06)] overflow-hidden ring-1 ring-white/60"
                style={{
                  background:
                    'linear-gradient(360deg, rgba(210, 225, 255, 0.14) -9.34%, rgba(242, 242, 242, 0.30) 98.63%)',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%'
                }}
              >
                {/* soft spotlight accents */}
                <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full opacity-40"
                  style={{ background: 'radial-gradient(closest-side, rgba(210,225,255,0.35), rgba(210,225,255,0) 70%)' }}
                />
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full opacity-30"
                  style={{ background: 'radial-gradient(closest-side, rgba(242,242,242,0.45), rgba(242,242,242,0) 70%)' }}
                />
                <CardContent className="h-full flex flex-col items-center justify-center gap-6 pt-[65.47px] pb-[65.47px] px-4 text-center">
                  <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center">
                    <Image src={useCase.image} alt={useCase.title} width={120} height={120} />
                  </div>

                  </div>
                  <div>
                    <h3 className="mb-2 text-[20px] sm:text-[24px] leading-[1.1] font-bold tracking-[0] text-[#2F2F2F]">
                      {useCase.title}
                    </h3>
                    <p className="mx-auto max-w-[302px] text-[14px] sm:text-[16px] leading-[1.5] text-black/80">
                      {useCase.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
