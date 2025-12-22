import { features } from "@/pages/home/model/constants/features";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const FeaturesSection = () => (
  <section className="py-20 bg-linear-to-b from-slate-950 to-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Title className="text-4xl md:text-5xl font-bold text-white mb-4">
          Powerful Features
        </Title>
        <Paragraph className="text-xl text-slate-400 max-w-2xl mx-auto">
          Everything you need to explore, simulate, and discuss the wonders of
          the universe
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20"
            >
              <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-6">
                <Icon className="h-8 w-8" />
              </div>
              <Title className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </Title>
              <Paragraph className="text-slate-400 leading-relaxed">
                {feature.description}
              </Paragraph>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
