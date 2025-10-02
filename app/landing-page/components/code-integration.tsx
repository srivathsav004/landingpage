'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Copy, Check, Sparkles } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const codeExamples = {
  kycc: `// Imports
import dollarpe, { Schema } from 'dollarpe'

// Collection name
export const collection = 'API Infra'

// Schema
const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  }
}, {timestamps: true})

// Model
export default dollarpe.model(collection, schema, collection)`,
  bankAccounts: `// Bank Account Example
const account = await dollarpe.bank.create({
  customerId: "1234",
  type: "virtual",
  currency: "INR"
});`,
  cryptoToFiat: `// Crypto → Fiat Example
const conversion = await dollarpe.convert.cryptoToFiat({
  amount: 100,
  from: "USDT",
  to: "INR",
  network: "polygon"
});`,
  blockchainWallets: `// Blockchain Wallet Example
const wallet = await dollarpe.wallets.create({
  userId: "123",
  networks: ["ethereum", "polygon"],
  type: "custodial"
});`,
  fiatToCrypto: `// Fiat → Crypto Example
const tx = await dollarpe.convert.fiatToCrypto({
  amount: 5000,
  from: "INR",
  to: "USDT",
  network: "polygon"
});`,
};

export function CodeIntegration() {
  const [activeTab, setActiveTab] = useState('kycc'); // default active: KYC/B
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab as keyof typeof codeExamples]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const tabs = [
    { value: 'kycc', label: 'KYC/B', icon: 'kyc.png', width: 'w-[111px]' },
    { value: 'bankAccounts', label: 'Bank Accounts', icon: 'bank.png', width: 'w-[165px]' },
    { value: 'cryptoToFiat', label: 'Crypto to Fiat', icon: 'crypto.png', width: 'w-[157px]' },
    { value: 'blockchainWallets', label: 'Blockchain Wallets', icon: 'wallet.png', width: 'w-[191px]' },
    { value: 'fiatToCrypto', label: 'Fiat to Crypto', icon: 'fiat.png', width: 'w-[157px]' },
  ];

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
          className="w-full max-w-[1046px] mx-auto"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div
              className="relative mx-auto overflow-hidden border-2 border-[#E8E8E8] rounded-xl bg-white shadow-sm"
              style={{ height: 581 }}
            >
              {/* File Tabs Row */}
              <div className="flex items-center border-b border-[#E8E8E8] bg-[#F2F2F2] h-[51px]">
                <TabsList className="flex w-full gap-0 bg-transparent border-0 shadow-none p-0">
                  {tabs.map((tab) => (
                    <TabsTrigger
                      key={tab.value}
                      value={tab.value}
                      className={`flex items-center justify-center gap-2 px-4 h-[51px] ${tab.width} text-xs transition-all
                        ${activeTab === tab.value
                          ? '!bg-[#24CB71] !text-white !font-bold'
                          : '!bg-[#FFFFFF1A] !text-[#5D5D5D]'
                        }`}
                    >
                      <Image
                        src={`/editor-icons/${tab.icon}`}
                        alt={tab.label}
                        width={20}
                        height={20}
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
                  className="text-gray-500 hover:text-gray-900 mr-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              {/* Code Viewer */}
              <TabsContent value={activeTab} className="p-0 h-[530px]">
                <div className="bg-white font-mono text-sm leading-relaxed h-full overflow-auto p-6">
                  <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    showLineNumbers
                    wrapLines
                    customStyle={{
                      background: 'transparent',
                      margin: 0,
                      padding: 0,
                      fontSize: '14px',
                      height: '100%',
                    }}
                    codeTagProps={{
                      style: { background: 'transparent' },
                    }}
                  >
                    {codeExamples[activeTab as keyof typeof codeExamples]}
                  </SyntaxHighlighter>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}

export default CodeIntegration;