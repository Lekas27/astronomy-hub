import { Rocket, Telescope, Globe } from "lucide-react";

import { Button } from "@/shared/components/ui/button";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const CTASection = () => (
  <section className="py-20 bg-linear-to-r from-purple-900 via-blue-900 to-purple-900 relative overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="star animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>

    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <Rocket className="h-16 w-16 text-purple-300 mx-auto mb-6 animate-float" />
      <Title className="text-4xl md:text-5xl font-bold text-white mb-6">
        Join Our Cosmic Community
      </Title>
      <Paragraph className="text-xl text-purple-100 mb-10">
        Be part of something bigger. Explore the universe with thousands of
        astronomy enthusiasts worldwide.
      </Paragraph>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          className="px-10 py-5 bg-white! text-purple-900! font-bold text-lg rounded-full hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center gap-3"
          icon={Telescope}
        >
          Get Started Free
        </Button>
        <Button
          className="px-10 py-5 bg-purple-500/20! backdrop-blur-sm text-white! border-2 border-purple-300 font-bold text-lg rounded-full hover:bg-purple-500/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
          icon={Globe}
        >
          Contact Us
        </Button>
      </div>
    </div>
  </section>
);
