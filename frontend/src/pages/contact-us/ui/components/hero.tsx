import { Moon, Sun, Sparkles } from "lucide-react";

import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const HeroSection = () => (
  <section className="relative min-h-[50vh] overflow-hidden min-w-screen">
    <div className="absolute inset-0">
      {[...Array(80)].map((_, i) => (
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

    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-20 animate-float opacity-10">
        <Moon className="h-32 w-32 text-blue-300" />
      </div>
      <div
        className="absolute bottom-20 left-20 animate-float opacity-10"
        style={{ animationDelay: "2s" }}
      >
        <Sun className="h-40 w-40 text-yellow-300" />
      </div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <div className="text-center">
        <div className="inline-block mb-6">
          <div className="flex items-center gap-3 bg-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-400/30">
            <Sparkles className="h-5 w-5 text-purple-300 animate-pulse" />
            <span className="text-purple-200 font-semibold">Get In Touch</span>
          </div>
        </div>

        <Title className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Contact Us
          <span className="block bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mt-2">
            We are Here to Help
          </span>
        </Title>

        <Paragraph className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
          Have questions about our simulations or community? Reach out to our
          team and we will get back to you as soon as possible.
        </Paragraph>
      </div>
    </div>
  </section>
);
