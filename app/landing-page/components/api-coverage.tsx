'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Chip = {
  code: string;
  img: string;
  dot: { top: string; left: string }; // dot on globe
  labelPos: string; // where chip text goes
};

const chips: Chip[] = [
  {
    code: 'INR',
    img: '/api-coverage/globe/chip-inr.png',
    dot: { top: '8%', left: '97%' },
    labelPos: 'left-full ml-3 -translate-y-1/2',
  },
  {
    code: 'PHP',
    img: '/api-coverage/globe/chip-php.png',
    dot: { top: '20%', left: '97%' },
    labelPos: 'left-full ml-3 -translate-y-1/2',
  },
  {
    code: 'VND',
    img: '/api-coverage/globe/chip-vnd.png',
    dot: { top: '38%', left: '97%' },
    labelPos: 'left-full ml-3 -translate-y-1/2',
  },
  {
    code: 'MYR',
    img: '/api-coverage/globe/chip-myr.png',
    dot: { top: '55%', left: '97%' },
    labelPos: 'left-full ml-3 -translate-y-1/2',
  },
  {
    code: 'THB',
    img: '/api-coverage/globe/chip-thb.png',
    dot: { top: '72%', left: '97%' },
    labelPos: 'left-full ml-3 -translate-y-1/2',
  },
  {
    code: 'IDR',
    img: '/api-coverage/globe/chip-idr.png',
    dot: { top: '85%', left: '97%' },
    labelPos: 'left-full ml-3 -translate-y-1/2',
  },
  {
    code: 'SGD',
    img: '/api-coverage/globe/chip-sgd.png',
    dot: { top: '55%', left: '3%' },
    labelPos: 'right-full mr-3 -translate-y-1/2',
  },
];

export function ApiCoverage() {
  return (
    <section
      className="py-16 md:py-20 lg:py-24 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(90deg, rgba(210,225,255,0.2) 7.77%, rgba(217,255,237,0.1) 96.99%)',
        borderRadius: 24,
      }}
    >
      {/* Background dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'url(/api-coverage/bg/dots-pattern.png)',
          backgroundRepeat: 'repeat',
          opacity: 0.25,
          borderRadius: 24,
        }}
      />

      <div className="relative container mx-auto px-6 md:px-8 lg:px-12 max-w-[1400px]">
        <div className="grid lg:grid-cols-3 items-center gap-12">
          {/* LEFT: Heading + Buttons */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Single API.
              </h2>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mt-2">
                Entire South East Asia.
              </h2>
            </div>
            <div className="inline-flex bg-white rounded-xl p-2 shadow-md gap-4">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-base font-semibold px-8 py-6 rounded-xl shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="#docs">View Docs</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-gray-900 text-base font-semibold px-8 py-6 rounded-xl border-2 border-gray-200 hover:border-emerald-500 hover:bg-emerald-50"
                asChild
              >
                <a href="#demo">Book Demo</a>
              </Button>
            </div>
          </div>

          {/* MIDDLE: Tokens + DollarPe with perfect dotted connectors */}
<div className="relative flex flex-col items-center justify-center h-[300px]">
  {/* Container for precise positioning */}
  <div className="relative w-full max-w-[320px] h-[240px]">
    {/* USDT Icon - raw PNG, positioned top-left */}
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="absolute left-0 top-[20px]"
    >
      <Image src="/api-coverage/middle/tether.png" alt="Tether USDT" width={80} height={80} />
    </motion.div>

    {/* USDC Icon - raw PNG, positioned bottom-left */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="absolute left-0 bottom-[20px]"
    >
      <Image src="/api-coverage/middle/usdc.png" alt="USD Coin" width={80} height={80} />
    </motion.div>

    {/* DollarPe Pill - raw PNG, scaled down and positioned to FIT connector end AND VERTICALLY CENTERED */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="absolute top-[80px] transform -translate-y-[50%]"
      style={{
        right: '5px',
        transform: 'translateX(-40px) translateY(-50%)',
      }}
    >
      <Image
        src="/api-coverage/middle/dollarpe-pill.png"
        alt="DollarPe"
        width={120}
        height={30}
        priority
      />
    </motion.div>

    {/* Connectors - using PNG images, repositioned to START from token's RIGHT-CENTER */}
    {/* USDT to DollarPe Connector - using connector-top.png */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      className="absolute left-[80px] top-[60px] z-10"
    >
      <Image 
        src="/api-coverage/middle/connector-top.png" 
        alt="Connector from USDT to DollarPe" 
        width={160} 
        height={50}
        className="object-contain"
      />
    </motion.div>

    {/* USDC to DollarPe Connector - using connector-bottom.png */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.0, duration: 0.6 }}
      className="absolute left-[80px] bottom-[60px] z-10"
    >
      <Image 
        src="/api-coverage/middle/connector-bottom.png" 
        alt="Connector from USDC to DollarPe" 
        width={160} 
        height={50}
        className="object-contain"
      />
    </motion.div>
  </div>
</div>


          {/* RIGHT: Globe + Chips */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[380px] aspect-square">
              {/* Globe */}
              <Image src="/api-coverage/globe/globe-base.png" alt="Globe" fill className="object-contain" />

              {/* Diamond center - increased size */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Image src="/api-coverage/globe/globe-diamond.png" alt="Diamond" width={120} height={120} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image src="/api-coverage/globe/dollarpe-mark.png" alt="DollarPe" width={40} height={40} />
                  </div>
                </motion.div>
              </div>

              {/* Chips mapped around globe */}
              {chips.map((chip, idx) => (
                <motion.div
                  key={chip.code}
                  className="absolute z-30 flex items-center"
                  style={{ top: chip.dot.top, left: chip.dot.left }}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Green dot */}
                  <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-md" />
                  {/* Label */}
                  <div className={`absolute ${chip.labelPos}`}>
                    <Image src={chip.img} alt={chip.code} width={90} height={32} className="drop-shadow" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}