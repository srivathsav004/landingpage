import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DollarPe - Simplifying Crypto & Fiat for India',
  description: 'Build compliant fintech products with our unified API platform. From KYC to crypto-fiat conversions, everything you need in one place.',
  keywords: 'fintech, crypto, fiat, API, KYC, India, Southeast Asia, payment gateway, blockchain',
  openGraph: {
    title: 'DollarPe - Simplifying Crypto & Fiat for India',
    description: 'Build compliant fintech products with our unified API platform.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
