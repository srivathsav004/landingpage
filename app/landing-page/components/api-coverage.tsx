'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const currencies = [
  { code: 'INR', name: 'Indian Rupee', angle: 0, color: 'bg-orange-500' },
  { code: 'PHP', name: 'Philippine Peso', angle: 51.43, color: 'bg-red-500' },
  { code: 'VND', name: 'Vietnamese Dong', angle: 102.86, color: 'bg-yellow-500' },
  { code: 'MYR', name: 'Malaysian Ringgit', angle: 154.29, color: 'bg-blue-500' },
  { code: 'THB', name: 'Thai Baht', angle: 205.72, color: 'bg-purple-500' },
  { code: 'IDR', name: 'Indonesian Rupiah', angle: 257.15, color: 'bg-green-500' },
  { code: 'SGD', name: 'Singapore Dollar', angle: 308.58, color: 'bg-pink-500' },
];

export function ApiCoverage() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Single API.{' '}
              <span className="text-emerald-500">Entire South East Asia</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Access multiple currencies and payment rails across Southeast Asia with
              one unified integration. Expand your reach without the complexity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8"
              >
                View Documentation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-2 border-gray-300 hover:border-emerald-500"
              >
                Book Demo
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <div className="text-3xl font-bold text-emerald-500 mb-2">7+</div>
                <div className="text-gray-600 font-medium">Currencies Supported</div>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-gray-200">
                <div className="text-3xl font-bold text-emerald-500 mb-2">15+</div>
                <div className="text-gray-600 font-medium">Blockchain Networks</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] flex items-center justify-center"
          >
            <div className="relative w-full h-full">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0"
              >
                {currencies.map((currency, index) => {
                  const radius = 180;
                  const x = Math.cos((currency.angle * Math.PI) / 180) * radius;
                  const y = Math.sin((currency.angle * Math.PI) / 180) * radius;

                  return (
                    <motion.div
                      key={currency.code}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                      whileHover={{ scale: 1.2, zIndex: 10 }}
                      className="relative"
                    >
                      <div
                        className={`w-20 h-20 ${currency.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white`}
                      >
                        <span className="text-white font-bold text-sm">
                          {currency.code}
                        </span>
                      </div>

                      <motion.div
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.3 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                        className="absolute top-1/2 left-1/2 pointer-events-none"
                        style={{
                          width: Math.abs(x) + 50,
                          height: Math.abs(y) + 50,
                        }}
                      >
                        <svg
                          width="100%"
                          height="100%"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            transform: `translate(-${x > 0 ? 0 : 100}%, -${
                              y > 0 ? 0 : 100
                            }%)`,
                          }}
                        >
                          <motion.line
                            x1={x > 0 ? 0 : '100%'}
                            y1={y > 0 ? 0 : '100%'}
                            x2={x > 0 ? '100%' : 0}
                            y2={y > 0 ? '100%' : 0}
                            stroke="#10B981"
                            strokeWidth="2"
                            strokeDasharray="5,5"
                            animate={{
                              strokeDashoffset: [0, -10],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'linear',
                            }}
                          />
                        </svg>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className="w-32 h-32 bg-emerald-500 rounded-full flex items-center justify-center shadow-2xl border-8 border-white">
                  <div className="text-center">
                    <div className="text-white font-bold text-2xl">D</div>
                    <div className="text-white text-xs font-semibold">DollarPe</div>
                  </div>
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 bg-emerald-400 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
