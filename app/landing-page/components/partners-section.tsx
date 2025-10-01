'use client';

import { motion } from 'framer-motion';

const partners = [
  { name: 'Tether', color: 'text-emerald-600' },
  { name: 'Circle', color: 'text-blue-600' },
  { name: 'Hyperverge', color: 'text-purple-600' },
  { name: 'Sumsub', color: 'text-orange-600' },
  { name: 'Chainalysis', color: 'text-indigo-600' },
  { name: 'Nota Bene', color: 'text-red-600' },
  { name: 'Ethereum', color: 'text-gray-700' },
  { name: 'Polygon', color: 'text-purple-700' },
  { name: 'Binance Chain', color: 'text-yellow-600' },
  { name: 'Arbitrum', color: 'text-blue-700' },
  { name: 'Tron', color: 'text-red-700' },
  { name: 'Near', color: 'text-green-600' },
  { name: 'Solana', color: 'text-purple-500' },
  { name: 'CBLO', color: 'text-gray-600' },
  { name: 'Optimism', color: 'text-red-500' },
  { name: 'Deepvue', color: 'text-blue-800' },
];

export function PartnersSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Reliable APIs. Built for Scale.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading blockchain networks and compliance providers
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 flex items-center justify-center hover:border-emerald-500 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-center">
                <div className={`text-2xl font-bold ${partner.color} mb-2`}>
                  {partner.name.charAt(0)}
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {partner.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-emerald-50 border border-emerald-200 rounded-full px-8 py-4">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold border-2 border-white">
                15
              </div>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold border-2 border-white">
                +
              </div>
            </div>
            <span className="text-gray-700 font-semibold">
              Integrated with 15+ blockchain networks
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
