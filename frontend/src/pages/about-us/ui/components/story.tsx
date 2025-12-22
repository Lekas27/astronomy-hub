import { milestones } from "@/pages/about-us/model/constants/milestones";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const OurStorySection = () => (
  <section className="py-20 bg-linear-to-b from-slate-900 to-slate-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Title className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our Journey
        </Title>
        <Paragraph className="text-xl text-slate-400 max-w-2xl mx-auto">
          From a small idea to a global community of space enthusiasts
        </Paragraph>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-purple-500 to-blue-500 hidden lg:block"></div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex-1">
                <div
                  className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-bold mb-4">
                    {milestone.year}
                  </div>
                  <Title
                    className="text-2xl font-bold text-white mb-3"
                    level={3}
                  >
                    {milestone.title}
                  </Title>
                  <Paragraph className="text-slate-400">
                    {milestone.description}
                  </Paragraph>
                </div>
              </div>

              {/* Center Circle */}
              <div className="hidden lg:block relative z-10">
                <div className="w-6 h-6 bg-linear-to-br from-purple-500 to-blue-500 rounded-full border-4 border-slate-950"></div>
              </div>

              <div className="flex-1"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
