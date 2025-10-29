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
    {/* For Developers Section */}
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="benefits">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-emerald-600 shadow-[0_10px_18px_0_rgba(0,0,0,0.04),0_2px_6px_0_rgba(0,0,0,0.04),0_0_1px_0_rgba(0,0,0,0.04)]"
          >
            <Image src="/star.png" alt="star" width={14} height={14} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            For Developers
          </div>
          <h2 className="max-w-[90%] sm:max-w-[860px] text-center text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight sm:leading-[1.2] lg:leading-[1.16] font-bold text-black px-4">
            Built for Developers, by Experts.
          </h2>
          <p className="max-w-[95%] sm:max-w-[720px] lg:max-w-[860px] text-center text-sm sm:text-base lg:text-lg leading-relaxed text-[#5D5D5D]/80 px-4">
            Power instant settlements to all of South East Asia. We take care of tech & compliances.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-[1202px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={item} 
              className="w-full"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Card
                className="flex flex-col items-center justify-start rounded-2xl border-0 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 h-full min-h-[320px] sm:min-h-[360px] md:min-h-[380px]"
                style={{
                  background:
                    'linear-gradient(199.26deg, rgba(217, 255, 237, 0.3) 38.67%, rgba(210, 225, 255, 0.3) 109.06%)',
                }}
              >
                <CardContent className="flex w-full flex-1 flex-col items-center p-5 sm:p-6 md:p-8 text-center">
                  <motion.div
                    className="mb-4 sm:mb-6 md:mb-8 mt-2 flex items-center justify-center rounded-2xl bg-transparent"
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
                      className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain"
                    />
                  </motion.div>
                  <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-gray-600">
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white" id="for-everyone">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16"
        >
          <div
            className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500 bg-white px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-emerald-600 shadow-[0_10px_18px_0_rgba(0,0,0,0.04),0_2px_6px_0_rgba(0,0,0,0.04),0_0_1px_0_rgba(0,0,0,0.04)]"
          >
            <Image src="/star.png" alt="star" width={14} height={14} className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            For Everyone
          </div>
          <h2 className="max-w-[90%] sm:max-w-[860px] text-center text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight sm:leading-[1.2] lg:leading-[1.16] font-bold text-black px-4">
            Built for Everyone.
          </h2>
          <p className="max-w-[95%] sm:max-w-[720px] lg:max-w-[860px] text-center text-sm sm:text-base lg:text-lg leading-relaxed text-[#5D5D5D]/80 px-4">
            Whether you're a start-up or a large financial institution, our system is designed only for your success.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-[1202px] grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8"
        >
          {/* Card 1 - No Monthly Commitments */}
          <motion.div 
            variants={item} 
            className="w-full"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card
              className="flex flex-col items-center rounded-2xl border-0 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 h-full min-h-[280px] sm:min-h-[300px]"
              style={{
                background:
                  'linear-gradient(199.26deg, rgba(217, 255, 237, 0.3) 38.67%, rgba(210, 225, 255, 0.3) 109.06%)',
              }}
            >
              <CardContent className="flex w-full flex-1 flex-col items-center justify-between gap-6 p-5 sm:p-6 md:p-8">
                <div className="flex-1 text-center w-full">
                  <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-[28px] leading-tight font-semibold tracking-tight text-black">
                    No Monthly Commitments
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-black/80 max-w-md mx-auto">
                    Simply start building without worrying about any fixed monthly
                    commitments, ever.
                  </p>
                </div>
                <motion.div
                  className="flex items-center justify-center rounded-2xl bg-transparent"
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
                    className="w-28 h-24 sm:w-32 sm:h-28 md:w-40 md:h-32 lg:w-52 lg:h-40 object-contain"
                  />
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2 - Pay As You Scale */}
          <motion.div 
            variants={item} 
            className="w-full"
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Card
              className="flex flex-col items-center rounded-2xl border-0 shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 h-full min-h-[280px] sm:min-h-[300px]"
              style={{
                background:
                  'linear-gradient(199.26deg, rgba(217, 255, 237, 0.3) 38.67%, rgba(210, 225, 255, 0.3) 109.06%)',
              }}
            >
              <CardContent className="flex w-full flex-1 flex-col items-center justify-between gap-6 p-5 sm:p-6 md:p-8">
                <div className="flex-1 text-center w-full">
                  <h3 className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-[28px] leading-tight font-semibold tracking-tight text-black">
                    Pay As You Scale
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed text-black/80 max-w-md mx-auto">
                    Enjoy our affordable volume-based fee model, inherently designed to
                    help you scale.
                  </p>
                </div>
                <motion.div
                  className="flex items-center justify-center rounded-2xl bg-transparent"
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
                    className="w-28 h-24 sm:w-32 sm:h-28 md:w-40 md:h-32 lg:w-52 lg:h-40 object-contain"
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