import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ChevronRight,
  MessagesSquare,
  Moon,
  Orbit,
  Rocket,
  Sparkles,
  Sun,
} from "lucide-react";

import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Span } from "@/shared/components/ui/typography/span";
import { Title } from "@/shared/components/ui/typography/title";

export const HeroSection = () => (
  <section className="relative min-h-screen min-w-screen overflow-hidden">
    {/* Animated Starfield Background */}
    <div className="absolute inset-0">
      {[...Array(100)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full w-0.5 h-0.5"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
      <div
        className="absolute bg-white/50 w-20 h-1 rounded-full"
        style={{ transform: "translateX(-100%)" }}
      />
    </div>

    {/* Floating Celestial Objects */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 animate-float opacity-10">
        <Moon className="h-32 w-32 text-blue-300" />
      </div>
      <div
        className="absolute bottom-20 right-20 animate-float opacity-10"
        style={{ animationDelay: "2s" }}
      >
        <Sun className="h-40 w-40 text-yellow-300" />
      </div>
      <div className="absolute top-1/2 left-1/4 animate-orbit opacity-20">
        <Orbit className="h-16 w-16 text-purple-400" />
      </div>
    </div>

    {/* Hero Content */}
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 flex items-center min-h-screen">
      <div className="text-center w-full">
        {/* Badge */}
        <div className="animate-fade-in mb-8">
          <div className="inline-block">
            <div className="flex items-center gap-3 bg-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-400/30">
              <Sparkles className="h-5 w-5 text-purple-300 animate-pulse" />
              <span className="text-purple-200 font-semibold">
                Explore the Cosmos Digitally
              </span>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <Title className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in">
          Astronomy Panel
          <span className="block bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mt-2 animate-slide-up">
            Simulate • Discuss • Discover
          </span>
        </Title>

        <Paragraph
          className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          Create stunning astronomical simulations and join a vibrant community
          of space enthusiasts. Experience the universe like never before.
        </Paragraph>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Link
            to="/simulator"
            className="group px-10 py-5 bg-linear-to-r from-purple-600 to-blue-600 text-white! font-bold text-lg rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-110 shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-3"
          >
            <Rocket className="h-6 w-6 group-hover:-rotate-45 transition-transform duration-500" />
            Launch Simulator
            <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            to="/discussions"
            className="group px-10 py-5 bg-white/10 backdrop-blur-sm text-white! border-2 border-purple-400 font-bold text-lg rounded-full hover:bg-purple-400/20 transition-all duration-300 hover:scale-110 flex items-center justify-center gap-3"
          >
            <MessagesSquare className="h-6 w-6 group-hover:scale-110 transition-transform" />
            Join Discussions
          </Link>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-1">10K+</div>
            <div className="text-slate-400">Simulations Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-1">25K+</div>
            <div className="text-slate-400">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pink-400 mb-1">50K+</div>
            <div className="text-slate-400">Discussions</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <div className="inline-flex flex-col items-center gap-2 text-purple-400">
            <Span className="text-sm font-medium">Explore Features</Span>
            <ChevronRight className="h-6 w-6 rotate-90" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
