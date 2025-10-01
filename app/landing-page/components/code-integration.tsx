'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Copy, Check, Sparkles } from 'lucide-react';

const codeExamples = {
  kycc: `const dollarpe = require('dollarpe-sdk');

// Initialize KYC verification
const verifyUser = async (userId) => {
  const kyc = await dollarpe.kyc.verify({
    userId: userId,
    documents: ['aadhar', 'pan'],
    liveness: true
  });

  return kyc.status;
};`,

  bankAccounts: `const dollarpe = require('dollarpe-sdk');

// Create virtual bank account
const createAccount = async (customerId) => {
  const account = await dollarpe.accounts.create({
    customerId: customerId,
    currency: 'INR',
    type: 'virtual'
  });

  return account.accountNumber;
};`,

  cryptoToFiat: `const dollarpe = require('dollarpe-sdk');

// Convert crypto to fiat
const convertCrypto = async (amount) => {
  const conversion = await dollarpe.convert.cryptoToFiat({
    amount: amount,
    from: 'USDT',
    to: 'INR',
    network: 'polygon'
  });

  return conversion.amount;
};`,

  blockchainWallets: `const dollarpe = require('dollarpe-sdk');

// Create blockchain wallet
const createWallet = async (userId) => {
  const wallet = await dollarpe.wallets.create({
    userId: userId,
    networks: ['ethereum', 'polygon'],
    type: 'custodial'
  });

  return wallet.addresses;
};`,

  fiatToCrypto: `const dollarpe = require('dollarpe-sdk');

// Convert fiat to crypto
const buyFiat = async (amount) => {
  const purchase = await dollarpe.convert.fiatToCrypto({
    amount: amount,
    from: 'INR',
    to: 'USDT',
    network: 'polygon'
  });

  return purchase.txHash;
};`,
};

export function CodeIntegration() {
  const [activeTab, setActiveTab] = useState('kycc');
  const [displayedCode, setDisplayedCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    setIsTyping(true);
    setDisplayedCode('');
    const code = codeExamples[activeTab as keyof typeof codeExamples];
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < code.length) {
        setDisplayedCode(code.substring(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 10);

    return () => clearInterval(typeInterval);
  }, [activeTab]);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6 mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500 bg-white px-4 py-2 text-sm font-medium text-emerald-600 shadow-sm">
            <span
              className="inline-flex h-6 w-6 items-center justify-center rounded-full"
              style={{
                background:
                  'linear-gradient(199.26deg, rgba(217, 255, 237, 0.6) 38.67%, rgba(210, 225, 255, 0.6) 109.06%)',
              }}
            >
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
            </span>
            Easy Code
          </div>
          <h2 className="max-w-[860px] text-center text-[36px] md:text-[44px] leading-[1.2] font-bold text-black">
            Minimal Code, Seamless Integration.
          </h2>
          <p className="max-w-[820px] px-4 md:px-16 text-center text-[15px] md:text-[18px] leading-[1.6] text-[#5D5D5D]/80">
            Expand to South East Asia effortlessly in just a few days
            <br />
            with our developer-friendly API documentation.
          </p>
        </motion.div>

        {/* Code Editor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-[880px] mx-auto"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsContent value={activeTab} className="mt-0">
              <div
                className="relative mx-auto overflow-hidden border border-[#E8E8E8] rounded-xl bg-white shadow-sm"
                style={{ width: '100%', height: '420px' }} // ✅ smaller height
              >
                {/* Top Bar */}
                <div className="flex items-center justify-between border-b border-[#E8E8E8] bg-[#F2F2F2] px-2 md:px-4 h-[48px]">
                  {/* Tabs inside Top Bar */}
                  <TabsList className="flex flex-wrap gap-2 bg-transparent border-0 shadow-none">
                    {[
                      { value: 'kycc', label: 'KYC/B', icon: 'kyc.png' },
                      { value: 'bankAccounts', label: 'Bank', icon: 'bank.png' },
                      { value: 'cryptoToFiat', label: 'Crypto → Fiat', icon: 'crypto.png' },
                      { value: 'blockchainWallets', label: 'Wallets', icon: 'wallet.png' },
                      { value: 'fiatToCrypto', label: 'Fiat → Crypto', icon: 'fiat.png' },
                    ].map((tab) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="flex items-center justify-center gap-2 rounded-md px-2.5 py-1.5 h-[36px] text-xs md:text-sm font-medium transition"
                        style={{
                          backgroundColor: activeTab === tab.value ? '#24CB71' : '#D9D9D9',
                          color: '#fff',
                        }}
                      >
                        <Image
                          src={`/editor-icons/${tab.icon}`}
                          alt={tab.label}
                          width={16}
                          height={16}
                          className="shrink-0"
                        />
                        <span>{tab.label}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {/* Copy button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    className="text-gray-500 hover:text-gray-900"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  </Button>
                </div>

                {/* Code Viewer */}
                <div className="p-4 md:p-6 overflow-x-auto h-[calc(420px-48px)]">
                  <pre className="text-xs md:text-sm lg:text-base">
                    <code className="text-gray-800 font-mono leading-relaxed">
                      {displayedCode}
                      {isTyping && (
                        <motion.span
                          animate={{ opacity: [1, 0] }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="inline-block w-2 h-5 bg-emerald-500 ml-1"
                        />
                      )}
                    </code>
                  </pre>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
