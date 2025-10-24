'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Chip = {
  code: string;
  img: string;
  dot: { top: string; left: string };
  labelPosition: 'top' | 'right' | 'bottom' | 'left';
};

const chips: Chip[] = [
  {
    code: 'INR',
    img: '/api-coverage/globe/chip-inr.png',
    dot: { top: '-4px', left: '180.5px' },
    labelPosition: 'top',
  },
  {
    code: 'PHP',
    img: '/api-coverage/globe/chip-php.png',
    dot: { top: '27.2px', left: '290.4px' },
    labelPosition: 'right',
  },
  {
    code: 'VND',
    img: '/api-coverage/globe/chip-vnd.png',
    dot: { top: '103.6px', left: '356.2px' },
    labelPosition: 'right',
  },
  {
    code: 'MYR',
    img: '/api-coverage/globe/chip-myr.png',
    dot: { top: '180.2px', left: '372px' },
    labelPosition: 'right',
  },
  {
    code: 'THB',
    img: '/api-coverage/globe/chip-thb.png',
    dot: { top: '263.8px', left: '352.2px' },
    labelPosition: 'right',
  },
  {
    code: 'IDR',
    img: '/api-coverage/globe/chip-idr.png',
    dot: { top: '335.2px', left: '288.4px' },
    labelPosition: 'right',
  },
  {
    code: 'SGD',
    img: '/api-coverage/globe/chip-sgd.png',
    dot: { top: '370px', left: '180.5px' },
    labelPosition: 'bottom',
  },
];

export function ApiCoverage() {
  return (
    <section className="relative w-full bg-white py-20">
      <div className="relative mx-auto w-full" style={{ maxWidth: '1400px' }}>
        <div
          className="relative w-full"
          style={{
            background:
              'linear-gradient(90deg, rgba(210,225,255,0.2) 7.77%, rgba(217,255,237,0.1) 96.99%)',
            borderRadius: '1.5rem',
            padding: 'clamp(3rem, 5vw, 6rem) clamp(1.5rem, 3vw, 3rem)',
            overflow: 'visible',
          }}
        >
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
          <div 
            className="grid grid-cols-1 lg:grid-cols-3 items-center" 
            style={{ gap: 'clamp(2rem, 5vw, 6rem)' }}
          >
            {/* LEFT: Heading + Buttons */}
            <div className="flex flex-col items-center lg:items-start gap-6 lg:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-center lg:text-left"
              >
                <h2 
                  className="font-bold text-gray-900"
                  style={{ 
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                    lineHeight: '1.2',
                  }}
                >
                  Single API.
                </h2>
                <h2 
                  className="font-bold text-gray-900 whitespace-nowrap"
                  style={{ 
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                    lineHeight: '1.2',
                  }}
                >
                  Entire South East Asia.
                </h2>
              </motion.div>
              <motion.div 
                className="inline-flex bg-white rounded-xl shadow-md mx-auto lg:mx-0"
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
                    padding: 'clamp(0.75rem, 1.5vw, 0.875rem) clamp(1.25rem, 2.5vw, 1.5rem)',
                    fontSize: 'clamp(0.875rem, 1.2vw, 0.9rem)',
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
                    padding: 'clamp(0.75rem, 1.5vw, 0.875rem) clamp(1.25rem, 2.5vw, 1.5rem)',
                    fontSize: 'clamp(0.875rem, 1.2vw, 0.9rem)',
                  }}
                  asChild
                >
                  <a href="#demo">Book Demo</a>
                </Button>
              </motion.div>
            </div>

            {/* MIDDLE: Tokens + DollarPe */}
            <div className="relative flex items-center justify-center" style={{ minHeight: 'clamp(200px, 25vw, 280px)' }}>
              <div className="relative" style={{ width: '100%', maxWidth: 'clamp(240px, 30vw, 340px)', aspectRatio: '1.1/1' }}>
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

            {/* RIGHT: Globe + Chips - PROPERLY SIZED */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Outer wrapper with padding for labels */}
              <div 
                className="relative" 
                style={{ 
                  width: '100%',
                  maxWidth: 'clamp(320px, 35vw, 420px)',
                  paddingTop: 'clamp(3.5rem, 7vw, 3.8rem)',
                  paddingBottom: 'clamp(3.5rem, 7vw, 3.8rem)',
                  paddingLeft: 'clamp(1.2rem, 2vw, 1.2rem)',
                  paddingRight: 'clamp(6rem, 14vw, 7.5rem)',
                }}
              >
                {/* Inner container - this is the actual globe size */}
                <div
                  className="relative w-full"
                  style={{ aspectRatio: '1' }}
                >
                  {/* Globe base */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
                    className="relative w-full h-full"
                  >
                    <Image 
                      src="/api-coverage/globe/globe-base.png" 
                      alt="Globe" 
                      fill 
                      className="object-contain" 
                      priority 
                    />
                  </motion.div>

                  {/* Diamond center */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
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
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative" style={{ width: '25%', aspectRatio: '13/8' }}>
                            <Image 
                              src="/api-coverage/globe/dollarpe-mark.png" 
                              alt="DollarPe" 
                              fill 
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>

                  {/* Chips */}
                  {chips.map((chip, idx) => {
                    const topPercent = (parseFloat(chip.dot.top) / 380) * 100;
                    const leftPercent = (parseFloat(chip.dot.left) / 380) * 100;

                    const labelPositions = {
                      INR: { top: '-50px', left: '-20px' },
                      PHP: { top: '-20px', left: '30px' },
                      VND: { top: '-10px', left: '30px' },
                      MYR: { top: '-5px', left: '40px' },
                      THB: { top: '-2px', left: '30px' },
                      IDR: { top: '10px', left: '30px' },
                      SGD: { top: '40px', left: '-20px' },
                    };

                    const labelPos = labelPositions[chip.code] || { top: '0', left: '0' };

                    return (
                      <motion.div
                        key={chip.code}
                        className="absolute z-30"
                        style={{
                          top: `${topPercent}%`,
                          left: `${leftPercent}%`,
                          transform: 'translate(-50%, -50%)',
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

                        <motion.div
                          style={{
                            position: 'absolute',
                            top: labelPos.top,
                            left: labelPos.left,
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
        </div>
      </div>
    </section>
  );
}