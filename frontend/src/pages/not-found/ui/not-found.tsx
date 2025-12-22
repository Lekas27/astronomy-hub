import { Link } from "@tanstack/react-router";
import {
  Telescope,
  Rocket,
  Home,
  Search,
  Sparkles,
  Star,
  Moon,
} from "lucide-react";

import { navItems } from "@/pages/not-found/model/constants/nav-items";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const NotFoundPage = () => {
  return (
    <div className="max-h-screen bg-linear-to-b from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center px-4 pt-6 w-full relative overflow-hidden">
      {/* Animated Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          />
        ))}
      </div>

      <div className="w-screen text-center relative z-10">
        {/* Animated Telescope Icon */}
        <div className="mb-8 flex justify-center">
          <div className="relative flex items-end justify-evenly w-1/2">
            <Telescope className="h-25 w-25 text-purple-400 animate-bounce" />
          </div>
        </div>

        {/* 404 Text */}
        <Title className="text-3xl! md:text-6xl! font-bold bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
          404
        </Title>

        {/* Main Message */}
        <Title className="text-3xl md:text-4xl font-bold text-white mb-4">
          Lost in Space
        </Title>

        <Paragraph className="text-purple-200 text-lg md:text-xl mb-8 max-w-md mx-auto">
          Oops! Looks like you have drifted into the void. The cosmic
          destination you are looking for does not exist in this galaxy.
        </Paragraph>

        {/* Decorative Elements */}
        <div className="flex justify-center gap-4 mb-12">
          <Star
            className="h-8 w-8 text-purple-400/50 animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <Moon
            className="h-8 w-8 text-purple-400/50 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <Sparkles
            className="h-8 w-8 text-purple-400/50 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="group flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white! border-2 border-purple-400 rounded-full hover:bg-purple-400/20 transition-all duration-300 hover:scale-105 font-semibold"
          >
            <Rocket className="w-6 h-6" />
            Go Back
          </Link>

          <Link
            to="/"
            className="group flex items-center gap-2 px-8 py-4 bg-linear-to-r from-purple-600 to-blue-600 text-white! rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 font-semibold shadow-lg hover:shadow-purple-500/50"
          >
            <Home className="h-5 w-5" />
            Return to Hub
          </Link>
        </div>

        {/* Search Suggestion */}
        <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-purple-500/20">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Search className="h-5 w-5 text-purple-400" />
            <Title className="text-lg font-semibold text-white">
              Try These Instead
            </Title>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.link}
                className="px-4 py-2 bg-purple-700/50 rounded-full hover:bg-purple-600/50 transition-all duration-300 hover:scale-105 text-sm font-medium text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Footer Message */}
        <Paragraph className="mt-8 text-purple-300/60 text-sm">
          Error Code: 404 • Page Not Found in This Universe
        </Paragraph>
      </div>
    </div>
  );
};
