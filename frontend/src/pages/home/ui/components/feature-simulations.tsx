import { ArrowRight, Users, Play } from "lucide-react";

import { featuredSimulations } from "@/pages/home/model/constants/featured-simulations";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const FeatureSimulationSection = () => (
  <section className="py-20 bg-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-12">
        <div>
          <Title className="text-4xl font-bold text-white mb-4">
            Featured Simulations
          </Title>
          <Paragraph className="text-lg text-slate-400">
            Explore popular astronomical simulations created by our community
          </Paragraph>
        </div>
        <a
          href="/simulator"
          className="hidden md:flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors"
        >
          View All
          <ArrowRight className="h-5 w-5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredSimulations.map((sim, index) => (
          <div
            key={index}
            className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer"
          >
            <div className="h-48 bg-linear-to-br from-purple-900 to-blue-900 flex items-center justify-center text-7xl relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
              <span className="relative z-10">{sim.emoji}</span>
              <div className="absolute inset-0 bg-linear-to-t from-slate-800 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            <div className="p-5">
              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full mb-3">
                {sim.category}
              </span>
              <Title className="font-bold text-lg text-white mb-2 group-hover:text-purple-400 transition-colors">
                {sim.title}
              </Title>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <span className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {sim.creator}
                </span>
                <span className="flex items-center gap-1">
                  <Play className="h-4 w-4" />
                  {sim.views}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
