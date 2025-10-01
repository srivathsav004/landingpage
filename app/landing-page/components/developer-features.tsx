'use client';

import { motion } from 'framer-motion';
import { Code as Code2, Zap, Shield, Boxes, Wallet, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const developerFeatures = [
  {
    icon: Code2,
    title: 'Developer-First APIs',
    description: 'Clean, well-documented RESTful APIs with comprehensive SDKs for all major languages.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Sub-second response times with 99.9% uptime SLA for mission-critical operations.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, compliance certifications, and robust security protocols.',
  },
];

const everyoneFeatures = [
  {
    icon: Boxes,
    title: 'Unified Platform',
    description: 'One API for KYC, bank accounts, crypto wallets, and fiat-crypto conversions.',
  },
  {
    icon: Wallet,
    title: 'Multi-Currency',
    description: 'Support for INR and major Southeast Asian currencies with real-time exchange rates.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Seamless operations across India and Southeast Asia with local payment rails.',
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

export function DeveloperFeatures() {
  return (
    <section className="py-20 bg-white" id="benefits">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Built for Developers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools and APIs that make integration simple and scalable
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {developerFeatures.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full border-2 border-gray-100 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            For Everyone
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, reliable financial infrastructure for any business size
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {everyoneFeatures.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full bg-emerald-50 border-2 border-emerald-100 hover:border-emerald-500 transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <feature.icon className="w-7 h-7 text-emerald-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
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
