import { Metadata } from 'next';

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

export default function LandingPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
