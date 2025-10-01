import { HeroSection } from './landing-page/components/hero-section';
import { DeveloperFeatures } from './landing-page/components/developer-features';
import { UseCases } from './landing-page/components/use-cases';
import { CodeIntegration } from './landing-page/components/code-integration';
import { SecurityCompliance } from './landing-page/components/security-compliance';
import { PartnersSection } from './landing-page/components/partners-section';
import { ApiCoverage } from './landing-page/components/api-coverage';
import { Footer } from './landing-page/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <DeveloperFeatures />
      <UseCases />
      <CodeIntegration />
      <SecurityCompliance />
      <PartnersSection />
      <ApiCoverage />
      <Footer />
    </main>
  );
}
