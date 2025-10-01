'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Minimal Code, Seamless Integration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started in minutes with our intuitive APIs and comprehensive SDKs
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8 h-auto gap-2 bg-gray-100 p-2">
              <TabsTrigger value="kycc" className="text-sm md:text-base py-3">
                KYCC
              </TabsTrigger>
              <TabsTrigger value="bankAccounts" className="text-sm md:text-base py-3">
                Bank Accounts
              </TabsTrigger>
              <TabsTrigger value="cryptoToFiat" className="text-sm md:text-base py-3">
                Crypto to Fiat
              </TabsTrigger>
              <TabsTrigger value="blockchainWallets" className="text-sm md:text-base py-3">
                Wallets
              </TabsTrigger>
              <TabsTrigger value="fiatToCrypto" className="text-sm md:text-base py-3">
                Fiat to Crypto
              </TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="mt-0">
              <div className="relative bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
                <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono">index.js</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    className="text-gray-400 hover:text-white"
                  >
                    {copied ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>

                <div className="p-6 overflow-x-auto">
                  <pre className="text-sm md:text-base">
                    <code className="text-gray-300 font-mono leading-relaxed">
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Button
              size="lg"
              className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8"
            >
              View Full Documentation
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
