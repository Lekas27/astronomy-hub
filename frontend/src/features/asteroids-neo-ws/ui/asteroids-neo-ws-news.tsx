import { Calendar, ExternalLink, AlertCircle, SpaceIcon } from "lucide-react";
import type { FC } from "react";

import { useGetNeoWsFeed } from "@/entities/news/asteroids-neo-ws/model/queries/asteroids-neo-ws";
import type { GetAsteroidNeoWsRequestRecord } from "@/entities/news/asteroids-neo-ws/model/types";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

type Props = {
  startDate: string;
  endDate: string;
};

export const NeoWsNews: FC<Props> = ({ startDate, endDate }) => {
  const params: GetAsteroidNeoWsRequestRecord = {
    start_date: startDate,
    end_date: endDate,
  };
  const { data: neoData, isFetching, error } = useGetNeoWsFeed(params);

  if (isFetching)
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mb-4"></div>
          <p className="text-xl text-slate-300">
            Loading near-Earth asteroids... ☄️
          </p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center max-w-md">
          <AlertCircle className="text-6xl mb-4 text-red-500 mx-auto" />
          <Title className="text-3xl text-white mb-4">
            Failed to load asteroids
          </Title>
          <Paragraph className="text-slate-400">
            Please try again later
          </Paragraph>
        </div>
      </div>
    );

  if (!neoData) return null;

  // Flatten the nested near_earth_objects by date
  const allNeos = Object.values(neoData.near_earth_objects).flat();

  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full w-0.5 h-0.5 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <article className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-3 bg-purple-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-400/30">
              <SpaceIcon className="h-5 w-5 text-purple-300 animate-pulse" />
              <span className="text-purple-200 font-semibold">
                Near-Earth Asteroids
              </span>
            </div>
          </div>

          <Title className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Asteroids from {startDate} to {endDate}
          </Title>

          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Calendar className="h-5 w-5" />
            <time className="text-lg">
              {startDate} → {endDate}
            </time>
          </div>
        </header>

        {/* Asteroids List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-slide-up">
          {allNeos.map((neo) => (
            <div
              key={neo.id}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/20 hover:bg-white/10 transition-all"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">{neo.name}</h3>
                {neo.is_potentially_hazardous_asteroid && (
                  <span className="text-red-400 font-bold">⚠️ Hazardous</span>
                )}
              </div>

              <Paragraph className="text-slate-300 mb-2">
                Magnitude: {neo.absolute_magnitude_h.toFixed(2)}
              </Paragraph>

              <Paragraph className="text-slate-300 mb-2">
                Estimated Diameter (m):{" "}
                {neo.estimated_diameter.meters.estimated_diameter_min.toFixed(
                  1,
                )}{" "}
                –{" "}
                {neo.estimated_diameter.meters.estimated_diameter_max.toFixed(
                  1,
                )}
              </Paragraph>

              {neo.close_approach_data[0] && (
                <Paragraph className="text-slate-300 mb-2">
                  Closest Approach:{" "}
                  {neo.close_approach_data[0].close_approach_date} at{" "}
                  {parseFloat(
                    neo.close_approach_data[0].miss_distance.kilometers,
                  ).toLocaleString()}{" "}
                  km
                </Paragraph>
              )}

              <a
                href={neo.nasa_jpl_url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-purple-300 font-semibold hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                More Info
              </a>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
};
