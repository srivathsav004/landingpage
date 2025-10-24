'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

type FeatureCard = {
  image: string;
  title: string;
  description: string;
};

const features: FeatureCard[] = [
  {
    image: '/developer/easy.png',
    title: 'Easy Integration',
    description:
      'Get started in a few days with our developer‑friendly APIs and SDKs.',
  },
  {
    image: '/developer/instant.png',
    title: 'Instant Payouts',
    description:
      'Real‑time 24×7 payouts at the lowest fees across all countries.',
  },
  {
    image: '/developer/rates.png',
    title: 'Unbeatable Rates',
    description:
      'Our advanced trading engine ensures you always get the best rates.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.1
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 20
    }
  },
};

export function DeveloperFeatures() {
  return (
    <>
    <section className="py-24 bg-white" id="benefits">
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
            For Developers
          </div>
          <h2 className="max-w-[860px] text-center text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.16] font-bold text-black">
            Built for Developers, by Experts.
          </h2>
          <p className="max-w-[860px] px-4 sm:px-10 text-center text-[16px] sm:text-[18px] leading-[1.6] text-[#5D5D5D]/80">
            Power instant settlements to all of South East Asia. 
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            We take care of tech & compliances.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-[1202px] grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item} 
              className="p-2 sm:p-3"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Card
                className="flex h-auto sm:h-[380px] md:h-[410px] flex-col items-center justify-start rounded-2xl border-0 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
                style={{
                  background:
                    'linear-gradient(199.26deg, rgba(217, 255, 237, 0.3) 38.67%, rgba(210, 225, 255, 0.3) 109.06%)',
                }}
              >
                <CardContent className="flex w-full flex-1 flex-col items-center p-6 sm:p-8 text-center">
                  <motion.div
                    className="mb-6 sm:mb-8 mt-2 flex h-32 w-32 sm:h-40 sm:w-40 md:h-44 md:w-44 items-center justify-center rounded-2xl bg-transparent"
                    whileHover={{ 
                      y: -6, 
                      scale: 1.05,
                      rotate: [0, -2, 2, 0]
                    }}
                    transition={{ 
                      type: 'spring', 
                      stiffness: 300, 
                      damping: 15,
                      rotate: { duration: 0.6, ease: "easeInOut" }
                    }}
                  >
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      width={150} 
                      height={150} 
                      priority 
                      className="object-contain"
                    />
                  </motion.div>
                  <h3 className="mb-3 text-xl sm:text-2xl font-semibold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="max-w-[358px] text-sm sm:text-base leading-relaxed text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* For Everyone Section */}
    <section className="py-24 bg-white" id="for-everyone">
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
            For Everyone
          </div>
          <h2 className="max-w-[860px] text-center text-[32px] sm:text-[40px] lg:text-[48px] leading-[1.16] font-bold text-black">
            Built for Everyone.
          </h2>
          <p className="max-w-[860px] px-4 sm:px-10 lg:px-20 text-center text-[16px] sm:text-[18px] leading-[1.6] text-[#5D5D5D]/80">
            Whether you're a start-up or a large financial institution,
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            our system is designed only for your success.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-[1202px] grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2"
        >
          {/* Card 1 */}
          <motion.div 
            variants={item} 
            className="p-2 sm:p-3"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card
              className="flex h-auto sm:h-[300px] md:h-[326px] flex-col md:flex-row items-center justify-between rounded-2xl border-0 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
              style={{
                background:
                  'linear-gradient(199.26deg, rgba(217, 255, 237, 0.3) 38.67%, rgba(210, 225, 255, 0.3) 109.06%)',
              }}
            >
              <CardContent className="flex w-full flex-1 flex-col md:flex-row items-center gap-4 md:gap-6 p-6 md:p-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-3 text-[20px] sm:text-[24px] md:text-[28px] leading-[1.2] font-semibold tracking-[-0.02em] text-black">
                    No Monthly
                    <br />
                    Commitments
                  </h3>
                  <p className="text-[14px] sm:text-[16px] leading-[1.5] text-black/80">
                    Simply start building without worrying about any fixed monthly
                    commitments, ever.
                  </p>
                </div>
                <motion.div
                  className="flex h-[100px] w-[120px] sm:h-[120px] sm:w-[140px] md:h-[150px] md:w-[170px] lg:h-[189px] lg:w-[206px] shrink-0 items-center justify-center rounded-2xl bg-transparent"
                  whileHover={{ 
                    y: -6, 
                    scale: 1.05,
                    rotate: [0, -1, 1, 0]
                  }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 15,
                    rotate: { duration: 0.5, ease: "easeInOut" }
                  }}
                >
                  <Image 
                    src="/developer/calendar.png" 
                    alt="No Monthly Commitments" 
                    width={206} 
                    height={189}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            variants={item} 
            className="p-2 sm:p-3"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card
              className="flex h-auto sm:h-[300px] md:h-[326px] flex-col md:flex-row items-center justify-between rounded-2xl border-0 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300"
              style={{
                background:
                  'linear-gradient(199.26deg, rgba(217, 255, 237, 0.3) 38.67%, rgba(210, 225, 255, 0.3) 109.06%)',
              }}
            >
              <CardContent className="flex w-full flex-1 flex-col md:flex-row items-center gap-4 md:gap-6 p-6 md:p-8">
                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-3 text-[20px] sm:text-[24px] md:text-[28px] leading-[1.2] font-semibold tracking-[-0.02em] text-black">
                    Pay As
                    <br />
                    You Scale
                  </h3>
                  <p className="text-[14px] sm:text-[16px] leading-[1.5] text-black/80">
                    Enjoy our affordable volume-based fee model, inherently designed to
                    help you scale.
                  </p>
                </div>
                <motion.div
                  className="flex h-[100px] w-[120px] sm:h-[120px] sm:w-[140px] md:h-[150px] md:w-[170px] lg:h-[189px] lg:w-[206px] shrink-0 items-center justify-center rounded-2xl bg-transparent"
                  whileHover={{ 
                    y: -6, 
                    scale: 1.05,
                    rotate: [0, -1, 1, 0]
                  }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 15,
                    rotate: { duration: 0.5, ease: "easeInOut" }
                  }}
                >
                  <Image 
                    src="/developer/scale.png" 
                    alt="Pay As You Scale" 
                    width={206} 
                    height={189}
                    className="w-full h-full object-contain"
                  />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  );
}
