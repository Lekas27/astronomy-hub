import { CTASection } from "./components/cta";
import { HeroSection } from "./components/hero";
import { StatsSection } from "./components/stats";
import { OurStorySection } from "./components/story";
import { ValuesSection } from "./components/values";

export const AboutPage = () => (
  <div className="min-h-screen bg-slate-950">
    {/* Hero Section */}
    <HeroSection />

    {/* Stats Section */}
    <StatsSection />

    {/* Mission, Vision, Values */}
    <ValuesSection />

    {/* Our Story / Timeline */}
    <OurStorySection />

    {/* CTA Section */}
    <CTASection />
  </div>
);
