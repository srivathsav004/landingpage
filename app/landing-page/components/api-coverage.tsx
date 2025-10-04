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
          opacity: 0.25,
          borderRadius: '1.5rem',
        }}
      />

      <div className="relative mx-auto w-full" style={{ maxWidth: '1400px' }}>
        {/* Grid with Figma ratios: Equal spacing for all 3 sections */}
        <div 
          className="grid lg:grid-cols-3 items-center" 
          style={{ gap: 'clamp(3rem, 5vw, 6rem)' }}
        >
          {/* LEFT: Heading + Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.5rem, 2.5vw, 2rem)' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 
                className="font-bold text-gray-900 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Single API.
              </h2>
              <h2 
                className="font-bold text-gray-900 leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginTop: '0.4rem' }}
              >
                Entire South East Asia.
              </h2>
            </motion.div>
            <motion.div 
              className="inline-flex bg-white rounded-xl shadow-md"
              style={{ 
                padding: 'clamp(0.4rem, 0.8vw, 0.6rem)',
                gap: 'clamp(0.6rem, 1.5vw, 0.9rem)',
                width: 'fit-content'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl whitespace-nowrap transition-all"
                style={{
                  padding: 'clamp(0.7rem, 1.3vw, 1.3rem) clamp(1.4rem, 2.5vw, 1.8rem)',
                  fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)',
                }}
                asChild
              >
                <a href="#docs">View Docs</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-emerald-500 hover:bg-emerald-50 whitespace-nowrap transition-all"
                style={{
                  padding: 'clamp(0.7rem, 1.3vw, 1.3rem) clamp(1.4rem, 2.5vw, 1.8rem)',
                  fontSize: 'clamp(0.85rem, 1.3vw, 0.95rem)',
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
          <div className="relative flex justify-center lg:justify-start" style={{ paddingLeft: '0', position: 'relative' }}>
            <div 
              className="relative w-full" 
              style={{ 
                maxWidth: 'clamp(280px, 32vw, 380px)', 
                aspectRatio: '1',
                marginRight: 'clamp(3rem, 8vw, 8rem)', // Extra space for right-side labels
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
                
                // Calculate label position relative to dot
                const getLabelStyle = () => {
                  const baseStyle: React.CSSProperties = {
                    position: 'absolute',
                    width: 'clamp(70px, 8.5vw, 100px)',
                    height: 'auto',
                    whiteSpace: 'nowrap',
                  };
                  
                  switch (chip.labelPosition) {
                    case 'top':
                      return { ...baseStyle, bottom: '100%', left: '50%', transform: 'translate(-50%, -8px)' };
                    case 'bottom':
                      return { ...baseStyle, top: '100%', left: '50%', transform: 'translate(-50%, 8px)' };
                    case 'right':
                      return { ...baseStyle, left: '100%', top: '50%', transform: 'translate(10px, -50%)' };
                    case 'left':
                      return { ...baseStyle, right: '100%', top: '50%', transform: 'translate(-10px, -50%)' };
                    default:
                      return baseStyle;
                  }
                };
                
                return (
                  <motion.div
                    key={chip.code}
                    className="absolute z-30"
                    style={{ 
                      top: `${topPercent}%`, 
                      left: `${leftPercent}%`,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      delay: 0.9 + idx * 0.08, 
                      duration: 0.5,
                      type: 'spring',
                      stiffness: 250,
                      damping: 20
                    }}
                  >
                    {/* Green dot with pulse animation */}
                    <motion.div 
                      className="rounded-full bg-emerald-500 shadow-lg relative z-10" 
                      style={{ 
                        width: 'clamp(10px, 1.2vw, 13px)', 
                        height: 'clamp(10px, 1.2vw, 13px)' 
                      }}
                      animate={{ 
                        boxShadow: [
                          '0 0 0 0 rgba(16, 185, 129, 0.4)',
                          '0 0 0 8px rgba(16, 185, 129, 0)',
                          '0 0 0 0 rgba(16, 185, 129, 0)'
                        ]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        delay: idx * 0.2
                      }}
                      whileHover={{ scale: 1.4 }}
                    />
                    
                    {/* Currency chip label */}
                    <motion.div
                      style={getLabelStyle()}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 + idx * 0.08, duration: 0.4 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                    >
                      <Image
                        src={chip.img}
                        alt={chip.code}
                        width={100}
                        height={32}
                        className="drop-shadow-lg object-contain"
                      />
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