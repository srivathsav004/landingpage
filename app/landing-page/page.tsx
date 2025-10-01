import { HeroSection } from './components/hero-section';
import { DeveloperFeatures } from './components/developer-features';
import { UseCases } from './components/use-cases';
import { CodeIntegration } from './components/code-integration';
import { SecurityCompliance } from './components/security-compliance';
import { PartnersSection } from './components/partners-section';
import { ApiCoverage } from './components/api-coverage';
import { Footer } from './components/footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
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
