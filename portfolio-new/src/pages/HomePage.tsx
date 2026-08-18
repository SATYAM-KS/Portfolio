import React from "react";
import { Hero } from "../components/Hero";
import { ClientMarquee } from "../components/ClientMarquee";
import { WorkShowcase } from "../components/WorkShowcase";
import { AboutSection } from "../components/AboutSection";
import { ServicesSection } from "../components/ServicesSection";
import { TimelineSection } from "../components/TimelineSection";
import { AwardsSection } from "../components/AwardsSection";
import { DemoSection } from "../components/DemoSection";
import { ReviewsSection } from "../components/ReviewsSection";
import { PricingSection } from "../components/PricingSection";
import { BlogPreviewSection } from "../components/BlogPreviewSection";
import { SocialsSection } from "../components/SocialsSection";

export const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <ClientMarquee />
      <WorkShowcase />
      <AboutSection />
      <ServicesSection />
      <TimelineSection />
      <AwardsSection />
      <DemoSection />
      <ReviewsSection />
      <PricingSection />
      <BlogPreviewSection />
      <SocialsSection />
    </main>
  );
};
