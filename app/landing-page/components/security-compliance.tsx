'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const securityFeatures = [
  'Multi-Factor Authentication',
  'Granular Access Controls',
  'End-to-end encryption',
];

const complianceFeatures = [
  'In-built Risk Monitoring',
  'Advanced Fraud Detection',
  'Comprehensive Audit Trails',
];

export function SecurityCompliance() {
  return (
    <section className="py-20 bg-white" id="security">
      <div className="mx-auto px-4 flex flex-col items-center" style={{ maxWidth: 1202 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center gap-5 mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400 bg-white px-4 h-10 text-sm text-emerald-700 shadow">
            <Image src="/star.png" alt="star" width={16} height={16} className="w-4 h-4" />
            <span className="font-medium">Safety First</span>
          </div>

          <h2 className="text-[40px] md:text-[48px] font-bold text-black text-center leading-tight">
            100% Secure & Compliant.
          </h2>
          <p className="text-[16px] md:text-[18px] text-[#5D5D5D] text-center opacity-80 max-w-[720px]">
            Experience institutional grade security to guard your funds.
            <br />
            Robust risk engine to prevent fraudulent activities.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 w-full justify-center">
          {/* Security Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl shadow-lg border border-gray-200 overflow-hidden bg-gradient-to-br from-emerald-50/40 to-indigo-50/40"
            style={{ width: '100%', maxWidth: 593, height: 440 }}
          >
            <div className="p-6 lg:pl-[66px] lg:pt-[83px] lg:pr-[200px] h-full flex flex-col">
              {/* Heading + Subheading */}
              <div>
                <h3 className="text-[22px] md:text-[28px] font-semibold text-black leading-snug whitespace-nowrap">
                  Institutional Grade Security
                </h3>
                <p className="text-[15px] md:text-[16px] text-black/80 whitespace-nowrap mb-6">
                  Highly secure, battle-tested infrastructure.
                </p>
              </div>

              {/* Features list */}
              <ul className="space-y-3 flex-1">
                {securityFeatures.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="flex items-center gap-3 rounded-[12px] w-full max-w-[291px] h-10"
                  >
                    <div className="w-[30px] h-[30px] rounded-[9px] bg-[#24CB71] flex items-center justify-center">
                      <img
                        src={`/security/icons/${index === 0 ? 'mfa' : index === 1 ? 'access' : 'encryption'}.png`}
                        alt="feature-icon"
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <span className="text-[15px] md:text-[16px] text-black">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Illustration */}
            <div className="absolute right-6 bottom-6 lg:right-[36px] lg:top-[185px] w-[160px] h-[160px] lg:w-[186px] lg:h-[186px]">
              <img src="/security/lock.png" alt="security-art" className="w-full h-full object-contain" />
            </div>
          </motion.div>

          {/* Compliance Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl shadow-lg border border-gray-200 overflow-hidden bg-gradient-to-br from-emerald-50/40 to-indigo-50/40"
            style={{ width: '100%', maxWidth: 593, height: 440 }}
          >
            <div className="p-6 lg:pl-[66px] lg:pt-[83px] lg:pr-[200px] h-full flex flex-col">
              {/* Heading + Subheading */}
              <div>
                <h3 className="text-[22px] md:text-[28px] font-semibold text-black leading-snug whitespace-nowrap">
                  Regulatory Compliance
                </h3>
                <p className="text-[15px] md:text-[16px] text-black/80 whitespace-nowrap mb-6">
                  Sophisticated risk architecture, built for scale.
                </p>
              </div>

              {/* Features list */}
              <ul className="space-y-3 flex-1">
                {complianceFeatures.map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.08 }}
                    className="flex items-center gap-3 rounded-[12px] w-full max-w-[291px] h-10"
                  >
                    <div className="w-[30px] h-[30px] rounded-[9px] bg-[#24CB71] flex items-center justify-center">
                      <img
                        src={`/security/icons/${index === 0 ? 'risk' : index === 1 ? 'fraud' : 'audit'}.png`}
                        alt="feature-icon"
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <span className="text-[15px] md:text-[16px] text-black">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right Illustration */}
            <div className="absolute right-6 bottom-6 lg:right-[36px] lg:top-[185px] w-[160px] h-[160px] lg:w-[186px] lg:h-[186px]">
              <img src="/security/compliance.png" alt="compliance-art" className="w-full h-full object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
