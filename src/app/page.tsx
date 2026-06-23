import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { LogoCloud } from "@/components/LogoCloud";
import { ProductsSection } from "@/components/ProductsSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProcessSection } from "@/components/ProcessSection";
import { UseCasesSection } from "@/components/UseCasesSection";
import { ResultsSection } from "@/components/ResultsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection, Footer } from "@/components/CTAFooter";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LogoCloud />
      <ProductsSection />
      <FeaturesSection />
      <ServicesSection />
      <ProcessSection />
      <UseCasesSection />
      <ResultsSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
