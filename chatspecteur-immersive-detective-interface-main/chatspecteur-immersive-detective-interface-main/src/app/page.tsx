import { CTASection } from "@/components/CTASection";
import Features from "@/components/FeaturesSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroHeader } from "@/components/header";
import { HeroSection } from "@/components/HeroSection";
import { IntegrationsSection } from "@/components/IntegrationSection";
import { LogoSection } from "@/components/LogosSection";
import MainFeatureSection from "@/components/MainFeatureSection";
import Pricing from "@/components/PricingSection";
import { TestimonialSection } from "@/components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full ">
      <HeroHeader />
      <div className="flex flex-col pt-16  items-center justify-center min-h-screen bg-gradient-to-br from-indigo-200 via-white to-orange-200  ">
        <HeroSection />
        <LogoSection />
        <MainFeatureSection />
        <Features />
        <IntegrationsSection />
        <Pricing />
        <TestimonialSection />
        <CTASection />
        <FooterSection />
      </div>
    </main>
  );
}
