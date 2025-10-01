'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const securityFeatures = [
  'End-to-end encryption',
  'Multi-factor authentication',
  'Real-time fraud detection',
  'Secure key management',
  'PCI DSS Level 1 certified',
  'Regular security audits',
];

const complianceFeatures = [
  'RBI guidelines compliant',
  'KYC/AML verification',
  'GDPR data protection',
  'ISO 27001 certified',
  'SOC 2 Type II compliant',
  'Regular compliance updates',
];

export function SecurityCompliance() {
  return (
    <section className="py-20 bg-gray-50" id="security">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            100% Secure & Compliant
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bank-grade security and regulatory compliance built into every API call
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">Security First</h3>

            <ul className="space-y-4">
              {securityFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center justify-center gap-2 text-emerald-700">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">99.9% Uptime Guaranteed</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 mb-6">Compliance Ready</h3>

            <ul className="space-y-4">
              {complianceFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-700 text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
              <div className="flex items-center justify-center gap-2 text-emerald-700">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">Fully Regulated Entity</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
