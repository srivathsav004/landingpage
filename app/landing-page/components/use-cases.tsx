'use client';

import { motion } from 'framer-motion';
import { Building2, ShoppingCart, Users, Smartphone, TrendingUp, Repeat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const useCases = [
  {
    icon: Building2,
    title: 'Fintech Platforms',
    description: 'Build compliant neo-banking and digital wallet solutions with integrated KYC and payment processing.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Accept crypto and fiat payments seamlessly with automatic currency conversion and settlement.',
  },
  {
    icon: Users,
    title: 'P2P Platforms',
    description: 'Enable peer-to-peer transactions with built-in escrow, verification, and dispute resolution.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Integrate financial services into your mobile app with our SDK and simple API endpoints.',
  },
  {
    icon: TrendingUp,
    title: 'Investment Apps',
    description: 'Offer crypto investment options with real-time pricing, portfolio tracking, and trading APIs.',
  },
  {
    icon: Repeat,
    title: 'Remittance Services',
    description: 'Build cross-border payment solutions with competitive rates and fast settlement times.',
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
    <section className="py-20 bg-gray-50" id="solutions">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Empowering Next-Gen Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startups to enterprises, DollarPe powers innovative financial solutions
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-emerald-500 transition-all duration-300 hover:shadow-xl bg-white">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
