'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Copy, Check, Sparkles, ChevronDown } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

type CodeExampleKey = 'kycc' | 'bankAccounts' | 'cryptoToFiat' | 'blockchainWallets' | 'fiatToCrypto';

const codeExamples: Record<CodeExampleKey, string> = {
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

const tabs = [
  { value: 'kycc', label: 'KYC/B', icon: 'kyc.png' },
  { value: 'bankAccounts', label: 'Bank Accounts', icon: 'bank.png' },
  { value: 'cryptoToFiat', label: 'Crypto to Fiat', icon: 'crypto.png' },
  { value: 'blockchainWallets', label: 'Blockchain Wallets', icon: 'wallet.png' },
  { value: 'fiatToCrypto', label: 'Fiat to Crypto', icon: 'fiat.png' },
];

export function CodeIntegration() {
  const [activeTab, setActiveTab] = useState<CodeExampleKey>('kycc');
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value as CodeExampleKey);
  };

  const activeTabData = tabs.find(tab => tab.value === activeTab);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="flex flex-col items-center gap-4 md:gap-6 mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-2xl border border-emerald-500 bg-white px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium text-emerald-600 shadow-sm">
            <span
              className="inline-flex h-5 w-5 md:h-6 md:w-6 items-center justify-center rounded-full"
              style={{
                background:
                  'linear-gradient(199.26deg, rgba(217, 255, 237, 0.6) 38.67%, rgba(210, 225, 255, 0.6) 109.06%)',
              }}
            >
              <Sparkles className="h-3 w-3 md:h-3.5 md:w-3.5 text-emerald-600" />
            </span>
            Easy Code
          </div>
          <h2 className="max-w-[860px] text-center text-[28px] md:text-[36px] lg:text-[44px] leading-[1.2] font-bold text-black px-4">
            Minimal Code, Seamless Integration.
          </h2>
          <p className="max-w-[820px] px-4 md:px-16 text-center text-[14px] md:text-[16px] lg:text-[18px] leading-[1.6] text-[#5D5D5D]/80">
            Expand to South East Asia effortlessly in just a few days
            <br className="hidden sm:block" />
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
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="relative mx-auto overflow-hidden border-2 border-[#E8E8E8] rounded-xl bg-white shadow-sm">
              {/* Desktop Tabs */}
              <div className="hidden md:flex items-center justify-between border-b border-[#E8E8E8] bg-[#F2F2F2] h-[51px]">
                <div className="flex gap-0 h-full">
                  {tabs.map((tab) => (
                    <button
                      key={tab.value}
                      onClick={() => handleTabChange(tab.value)}
                      className={`flex items-center justify-center gap-2 px-4 h-[51px] min-w-[111px] text-xs transition-all whitespace-nowrap
                        ${activeTab === tab.value
                          ? 'bg-[#24CB71] text-white font-bold'
                          : 'bg-[#FFFFFF1A] text-[#5D5D5D] hover:bg-[#FFFFFF40]'
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
                    </button>
                  ))}
                </div>

                {/* Copy button - Desktop */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopy}
                  className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 mr-2 ml-auto transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              {/* Mobile Dropdown */}
              <div className="md:hidden border-b border-[#E8E8E8] bg-[#F2F2F2]">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-900"
                >
                  <div className="flex items-center gap-2">
                    <Image
                      src={`/editor-icons/${activeTabData?.icon}`}
                      alt={activeTabData?.label || ''}
                      width={20}
                      height={20}
                      className="shrink-0"
                    />
                    <span>{activeTabData?.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCopy();
                      }}
                      className="text-gray-500 hover:text-gray-900 p-2"
                    >
                      {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                    </Button>
                    <ChevronDown className={`w-5 h-5 transition-transform ${mobileMenuOpen ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                
                {/* Mobile Menu */}
                {mobileMenuOpen && (
                  <div className="border-t border-[#E8E8E8] bg-white">
                    {tabs.map((tab) => (
                      <button
                        key={tab.value}
                        onClick={() => {
                          handleTabChange(tab.value);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex items-center gap-3 w-full px-4 py-3 text-sm transition-colors
                          ${activeTab === tab.value
                            ? 'bg-emerald-50 text-emerald-600 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
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
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Code Viewer */}
              <TabsContent value={activeTab} className="p-0 m-0">
                <div className="bg-white font-mono text-xs md:text-sm leading-relaxed h-[400px] md:h-[530px] overflow-auto p-4 md:p-6">
                  <SyntaxHighlighter
                    language="javascript"
                    style={oneLight}
                    showLineNumbers
                    wrapLines
                    customStyle={{
                      background: 'transparent',
                      margin: 0,
                      padding: 0,
                      fontSize: 'inherit',
                      height: '100%',
                    }}
                    codeTagProps={{
                      style: { background: 'transparent' },
                    }}
                  >
                    {codeExamples[activeTab]}
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