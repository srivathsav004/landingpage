'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Chip = {
  code: string;
  img: string;
  dot: { top: string; left: string }; // dot on globe (in px based on 380px globe)
  labelPosition: 'top' | 'right' | 'bottom' | 'left';
};

// Globe is 380px wide × 380px tall
const chips: Chip[] = [
  {
    code: 'INR',
    img: '/api-coverage/globe/chip-inr.png',
    dot: { top: '-4px', left: '180.5px' }, // -1.05263%, 47.5%
    labelPosition: 'top',
  },
  {
    code: 'PHP',
    img: '/api-coverage/globe/chip-php.png',
    dot: { top: '27.2px', left: '290.4px' }, // 7.1579%, 76.4211%
    labelPosition: 'right',
  },
  {
    code: 'VND',
    img: '/api-coverage/globe/chip-vnd.png',
    dot: { top: '103.6px', left: '356.2px' }, // 27.2632%, 93.7368%
    labelPosition: 'right',
  },
  {
    code: 'MYR',
    img: '/api-coverage/globe/chip-myr.png',
    dot: { top: '180.2px', left: '372px' }, // 47.4211%, 97.8947%
    labelPosition: 'right',
  },
  {
    code: 'THB',
    img: '/api-coverage/globe/chip-thb.png',
    dot: { top: '263.8px', left: '352.2px' }, // 69.4211%, 92.6842%
    labelPosition: 'right',
  },
  {
    code: 'IDR',
    img: '/api-coverage/globe/chip-idr.png',
    dot: { top: '335.2px', left: '288.4px' }, // 88.2105%, 75.8947%
    labelPosition: 'right',
  },
  {
    code: 'SGD',
    img: '/api-coverage/globe/chip-sgd.png',
    dot: { top: '370px', left: '180.5px' }, // 97.3684%, 47.5%
    labelPosition: 'bottom',
  },
];

export function ApiCoverage() {
  return (
    <section
      className="relative w-full"
      style={{
        background:
          'linear-gradient(90deg, rgba(210,225,255,0.2) 7.77%, rgba(217,255,237,0.1) 96.99%)',
        borderRadius: '1.5rem',
        padding: 'clamp(3rem, 5vw, 6rem) clamp(1.5rem, 3vw, 3rem)',
        overflow: 'visible',
      }}
    >
      {/* Background dots */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'url(/api-coverage/bg/dots-pattern.png)',
          backgroundRepeat: 'repeat',
          opacity: 0.5,
          borderRadius: '1.5rem',
        }}
      />

      <div className="relative mx-auto w-full" style={{ maxWidth: '1400px' }}>
        {/* Grid with Figma ratios: Equal spacing for all 3 sections */}
        <div 
          className="grid grid-cols-1 lg:grid-cols-3 items-center" 
          style={{ gap: 'clamp(2rem, 5vw, 6rem)' }}
        >
          {/* LEFT: Heading + Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 2.5vw, 2rem)', minWidth: '0' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', minWidth: '0' }}
            >
              <h2 
                className="font-bold text-gray-900"
                style={{ 
                  fontSize: 'clamp(1.1rem, 2.5vw, 2.75rem)',
                  lineHeight: '1.2',
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                }}
              >
                Single API.
              </h2>
              <h2 
                className="font-bold text-gray-900"
                style={{ 
                  fontSize: 'clamp(1.1rem, 2.5vw, 2.75rem)',
                  lineHeight: '1.2',
                  whiteSpace: 'nowrap',
                  overflow: 'visible',
                }}
              >
                Entire South East Asia.
              </h2>
            </motion.div>
            <motion.div 
              className="inline-flex bg-white rounded-xl shadow-md"
              style={{ 
                padding: 'clamp(0.3rem, 0.6vw, 0.5rem)',
                gap: 'clamp(0.4rem, 0.8vw, 0.75rem)',
                width: 'fit-content'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl whitespace-nowrap transition-all"
                style={{
                  padding: 'clamp(0.5rem, 1vw, 0.875rem) clamp(1rem, 2vw, 1.5rem)',
                  fontSize: 'clamp(0.75rem, 1vw, 0.9rem)',
                }}
                asChild
              >
                <a href="#docs">View Docs</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 whitespace-nowrap transition-all"
                style={{
                  padding: 'clamp(0.5rem, 1vw, 0.875rem) clamp(1rem, 2vw, 1.5rem)',
                  fontSize: 'clamp(0.75rem, 1vw, 0.9rem)',
                }}
                asChild
              >
                <a href="#demo">Book Demo</a>
              </Button>
            </motion.div>
          </div>

          {/* MIDDLE: Tokens + DollarPe */}
          <div className="relative flex items-center justify-center" style={{ minHeight: 'clamp(200px, 25vw, 280px)' }}>
            <div className="relative" style={{ width: '100%', maxWidth: 'clamp(260px, 30vw, 340px)', aspectRatio: '1.1/1' }}>
              {/* USDT Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6, type: 'spring', stiffness: 120 }}
                className="absolute"
                style={{ left: '0%', top: '15%', width: '24%', aspectRatio: '1' }}
              >
                <Image 
                  src="/api-coverage/middle/tether.png" 
                  alt="Tether USDT" 
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>

              {/* USDC Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7, x: -20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6, type: 'spring', stiffness: 120 }}
                className="absolute"
                style={{ left: '0%', bottom: '15%', width: '24%', aspectRatio: '1' }}
              >
                <Image 
                  src="/api-coverage/middle/usdc.png" 
                  alt="USD Coin" 
                  fill
                  className="object-contain drop-shadow-lg"
                />
              </motion.div>

              {/* DollarPe Pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6, type: 'spring', stiffness: 120 }}
                className="absolute"
                style={{ 
                  right: '5%', 
                  top: '41%', 
                  transform: 'translateY(-50%)',
                  width: '40%',
                  height: 'auto',
                }}
              >
                <Image
                  src="/api-coverage/middle/dollarpe-pill.png"
                  alt="DollarPe"
                  width={160}
                  height={48}
                  className="object-contain drop-shadow-xl"
                  priority
                />
              </motion.div>

              {/* Top Connector */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7, duration: 0.7, ease: 'easeInOut' }}
                className="absolute"
                style={{ 
                  left: '24%', 
                  top: '24%',
                  width: '52%',
                  height: '20%'
                }}
              >
                <Image 
                  src="/api-coverage/middle/connector-top.png" 
                  alt="" 
                  fill
                  className="object-contain"
                />
              </motion.div>

              {/* Bottom Connector */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.7, ease: 'easeInOut' }}
                className="absolute"
                style={{ 
                  left: '24%', 
                  bottom: '24%',
                  width: '52%',
                  height: '20%'
                }}
              >
                <Image 
                  src="/api-coverage/middle/connector-bottom.png" 
                  alt="" 
                  fill
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>

          {/* RIGHT: Globe + Chips with extra padding for labels */}
          <div className="relative flex justify-center lg:justify-start" style={{ position: 'relative', overflow: 'visible' }}>
            <div 
              className="relative w-full" 
              style={{ 
                maxWidth: 'clamp(260px, 32vw, 380px)', 
                aspectRatio: '1',
                marginLeft: 'clamp(-3rem, -8vw, 0)',
                marginRight: 'clamp(3rem, 8vw, 8rem)',
              }}
            >
              {/* Globe */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                className="relative w-full h-full"
              >
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src="/api-coverage/globe/globe-base.png" alt="Globe" fill className="object-contain" priority />
                </div>
              </motion.div>

              {/* Diamond center */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                  }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  style={{ 
                    position: 'relative',
                    width: '100%', 
                    aspectRatio: '11/6',
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 3, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ position: 'relative', width: '100%', height: '100%' }}
                  >
                    <Image 
                      src="/api-coverage/globe/globe-diamond.png" 
                      alt="Diamond" 
                      fill 
                      className="object-contain"
                      style={{ position: 'absolute' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative" style={{ width: '25%', aspectRatio: '13/8' }}>
                        <Image 
                          src="/api-coverage/globe/dollarpe-mark.png" 
                          alt="DollarPe" 
                          fill 
                          className="object-contain"
                          style={{ position: 'absolute' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Chips mapped around globe */}
              {chips.map((chip, idx) => {
                const topPercent = (parseFloat(chip.dot.top) / 380) * 100;
                const leftPercent = (parseFloat(chip.dot.left) / 380) * 100;

                // Define fixed pixel offsets from dot center (for 380px globe)
                const getLabelOffset = () => {
                  switch (chip.labelPosition) {
                    case 'top':
                      return { top: '-50px', left: '50%', transform: 'translateX(-50%)' };
                    case 'bottom':
                      return { top: '25px', left: '50%', transform: 'translateX(-50%)' };
                    case 'right':
                      return { left: 'clamp(20px, 6vw, 25px)', top: '50%', transform: 'translateY(-50%)' };
                    case 'left':
                      return { right: 'clamp(20px, 6vw, 25px)', top: '50%', transform: 'translateY(-50%)' };
                    default:
                      return { top: '0', left: '0' };
                  }
                };

                const labelStyle = getLabelOffset();

                return (
                  <motion.div
                    key={chip.code}
                    className="absolute z-30"
                    style={{
                      top: `${topPercent}%`,
                      left: `${leftPercent}%`,
                      transform: 'translate(-50%, -50%)', // Center the dot
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.9 + idx * 0.08,
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 250,
                      damping: 20,
                    }}
                  >
                    {/* Green dot with pulse animation */}
                    <motion.div
                      className="rounded-full bg-emerald-500 shadow-lg"
                      style={{
                        width: 'clamp(10px, 1.2vw, 13px)',
                        height: 'clamp(10px, 1.2vw, 13px)',
                      }}
                      animate={{
                        boxShadow: [
                          '0 0 0 0 rgba(16, 185, 129, 0.4)',
                          '0 0 0 8px rgba(16, 185, 129, 0)',
                          '0 0 0 0 rgba(16, 185, 129, 0)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: idx * 0.2,
                      }}
                    />

                    {/* Currency chip label */}
                    <motion.div
                      style={{
                        position: 'absolute',
                        ...labelStyle,
                        width: 'clamp(55px, 7vw, 100px)',
                        height: 'auto',
                        whiteSpace: 'nowrap',
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 + idx * 0.08, duration: 0.4 }}
                    >
                      <motion.div
                        whileHover={{
                          y: -3,
                          scale: 1.05,
                          boxShadow: 'none',
                        }}
                        whileTap={{ scale: 0.98 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 25,
                        }}
                        style={{
                          display: 'inline-block',
                          background: 'transparent',
                          borderRadius: '0.5rem',
                        }}
                      >
                        <Image
                          src={chip.img}
                          alt={chip.code}
                          width={100}
                          height={32}
                          className="drop-shadow-lg object-contain w-full h-auto"
                        />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}