'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

 type Chip = {
   code: string;
   img: string;
   // Absolute placement around the globe container (percentages allow responsive positioning)
   leftPercent: number; // can exceed 100 to place outside
   topPercent: number;
 };

 const chips: Chip[] = [
   { code: 'INR', img: '/api-coverage/globe/chip-inr.png', leftPercent: 102, topPercent: 8 },
   { code: 'PHP', img: '/api-coverage/globe/chip-php.png', leftPercent: 118, topPercent: 20 },
   { code: 'VND', img: '/api-coverage/globe/chip-vnd.png', leftPercent: 118, topPercent: 34 },
   { code: 'MYR', img: '/api-coverage/globe/chip-myr.png', leftPercent: 118, topPercent: 50 },
   { code: 'THB', img: '/api-coverage/globe/chip-thb.png', leftPercent: 116, topPercent: 66 },
   { code: 'IDR', img: '/api-coverage/globe/chip-idr.png', leftPercent: 102, topPercent: 58 },
   { code: 'SGD', img: '/api-coverage/globe/chip-sgd.png', leftPercent: 90, topPercent: 102 },
 ];

export function ApiCoverage() {
  return (
    <section
       className="py-10 md:py-12"
      style={{
        background:
          'linear-gradient(90deg, rgba(210,225,255,0.2) 7.77%, rgba(217,255,237,0.1) 96.99%)',
        borderRadius: 24,
      }}
    >
       <div className="relative rounded-[24px] overflow-hidden">
        {/* subtle dots overlay */}
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

         <div className="relative container mx-auto px-4">
           <div className="grid lg:grid-cols-[1.05fr_0.9fr_1.05fr] gap-8 lg:gap-10 items-center max-w-[1402px] lg:h-[539px] mx-auto">
            {/* Left: text + CTAs */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                 Single API. <span className="text-emerald-500">Entire South East Asia.</span>
               </h2>

               <div className="flex flex-col sm:flex-row gap-4 mb-2">
                <Button
                   size="lg"
                   className="bg-emerald-500 hover:bg-emerald-600 text-white text-base px-6 py-5 rounded-xl"
                  asChild
                >
                  <a href="#docs" aria-label="View documentation for DollarPe API">
                    View Docs
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                   className="text-base px-6 py-5 rounded-xl border-2 border-gray-200 hover:border-emerald-500"
                  asChild
                >
                  <a href="#demo" aria-label="Book a demo of DollarPe">
                    Book Demo
                  </a>
                </Button>
              </div>

               {/* accent dashed line to match design */}
               <div className="hidden md:block mt-10">
                 <div className="h-1 w-24 rounded-full border-b-2 border-dashed border-emerald-400" />
               </div>
            </motion.div>

            {/* Middle: token icons -> connectors -> DollarPe pill */}
             <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
               className="relative h-[280px] md:h-[320px]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                   className="relative w-full max-w-[420px]"
                >
                  {/* top connector */}
                   <Image
                     src="/api-coverage/middle/connector-top.png"
                    alt="connector"
                     width={420}
                     height={40}
                     className="mx-auto w-[78%] md:w-[84%] select-none"
                  />

                  {/* DollarPe pill */}
                  <motion.div
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                     <Image
                      src="/api-coverage/middle/dollarpe-pill.png"
                      alt="DollarPe"
                       width={228}
                       height={62}
                      className="drop-shadow-xl select-none"
                      priority
                    />
                  </motion.div>

                  {/* bottom connector */}
                   <Image
                    src="/api-coverage/middle/connector-bottom.png"
                    alt="connector"
                     width={420}
                     height={40}
                     className="mx-auto w-[78%] md:w-[84%] select-none"
                  />

                  {/* token icons */}
                   <motion.div
                    className="absolute left-1/2 -translate-x-1/2 top-3 md:top-2"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Image
                      src="/api-coverage/middle/tether.png"
                      alt="Tether USDT"
                       width={64}
                       height={64}
                      className="select-none"
                    />
                  </motion.div>
                   <motion.div
                    className="absolute left-1/2 -translate-x-1/2 bottom-3 md:bottom-2"
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Image
                      src="/api-coverage/middle/usdc.png"
                      alt="USD Coin"
                       width={64}
                       height={64}
                      className="select-none"
                    />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right: globe + diamond + chips */}
             <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
               className="relative h-[300px] md:h-[360px] flex items-center justify-center"
            >
               <div className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px]">
                {/* rotating globe wireframe */}
                 <div className="absolute inset-0">
                  <Image
                    src="/api-coverage/globe/globe-base.png"
                    alt="Globe"
                    fill
                     sizes="(max-width: 768px) 300px, 380px"
                    className="object-contain select-none"
                  />
                 </div>

                {/* diamond pulse */}
                 <motion.div
                   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                   animate={{ scale: [1, 1.06, 1], opacity: [1, 0.95, 1] }}
                   transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                 >
                  <Image
                    src="/api-coverage/globe/globe-diamond.png"
                    alt="Diamond"
                    width={132}
                    height={132}
                    className="select-none"
                  />
                </motion.div>
                 <div
                   className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                 >
                  <Image
                    src="/api-coverage/globe/dollarpe-mark.png"
                    alt="DollarPe"
                    width={48}
                    height={48}
                    className="select-none"
                  />
                 </div>

                {/* chips around globe + animated dashed links from nodes */}
                 {chips.map((chip, idx) => {
                   return (
                   <motion.div
                      key={chip.code}
                     className="absolute z-10"
                       style={{ left: `${chip.leftPercent}%`, top: `${chip.topPercent}%` }}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.06 }}
                    >
                     <Image
                        src={chip.img}
                        alt={`${chip.code} chip`}
                        width={112}
                        height={38}
                         className="translate-x-2 -translate-y-1 select-none drop-shadow-sm"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
