import { stats } from "@/pages/about-us/model/constants/stats";

export const StatsSection = () => (
  <section className="py-16 bg-linear-to-b from-slate-950 to-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
              {stat.number}
            </div>
            <div className="text-slate-400 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
