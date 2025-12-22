import { CTASection } from "./components/cta";
import { FeatureSimulationSection } from "./components/feature-simulations";
import { FeaturesSection } from "./components/features";
import { HeroSection } from "./components/hero";
import { TrendingDiscussionsSection } from "./components/trending-discussions";

export const Homepage = () => (
  <div className="min-h-screen bg-slate-950">
    {/* Hero Section */}
    <HeroSection />

    {/* Features Section */}
    <FeaturesSection />

    {/* Featured Simulations Section */}
    <FeatureSimulationSection />

    {/* Trending Discussions Section */}
    <TrendingDiscussionsSection />

    {/* CTA Section */}
    <CTASection />
  </div>
);
