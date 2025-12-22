import { Link, ArrowRight, Flame, TrendingUp } from "lucide-react";

import {
  categoryColors,
  trendingDiscussions,
} from "@/pages/home/model/constants/trending-discussions";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Span } from "@/shared/components/ui/typography/span";
import { Title } from "@/shared/components/ui/typography/title";

export const TrendingDiscussionsSection = () => (
  <section className="py-20 bg-linear-to-b from-slate-900 to-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center mb-12">
        <div>
          <Title className="text-4xl font-bold text-white mb-4">
            Trending Discussions
          </Title>
          <Paragraph className="text-lg text-slate-400">
            Popular topics being discussed in the community
          </Paragraph>
        </div>
        <Link
          to="/discussions"
          className="hidden md:flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors"
        >
          View All
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>

      <div className="space-y-4">
        {trendingDiscussions.map((discussion, index) => (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 cursor-pointer group"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <Span
                    className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                      categoryColors[discussion.category]
                    }`}
                  >
                    {discussion.category}
                  </Span>
                </div>

                <Paragraph className="text-white text-lg font-medium mb-4 group-hover:text-purple-300 transition-colors">
                  {discussion.topic}
                </Paragraph>

                <div className="flex items-center gap-3">
                  <Span className="flex items-center gap-2 text-orange-400">
                    <Flame className="h-4 w-4" />
                    Trending
                  </Span>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
