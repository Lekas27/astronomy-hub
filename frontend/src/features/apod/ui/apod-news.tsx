import { Calendar, Copyright, ExternalLink, Sparkles } from "lucide-react";

import { useApod } from "@/features/apod/model/hooks/use-apod";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const ApodNews = () => {
  const { apodData, isApodDataFetching, apodError } = useApod();

  if (isApodDataFetching)
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mb-4"></div>
          <p className="text-xl text-slate-300">
            Loading astronomy picture of the day... 🌌
          </p>
        </div>
      </div>
    );

  if (apodError)
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-4">😕</div>
          <Title className="text-3xl text-white mb-4">
            Failed to load APOD
          </Title>
          <Paragraph className="text-slate-400">
            Please try again later
          </Paragraph>
        </div>
      </div>
    );

  if (!apodData) return null;

  const {
    title,
    explanation,
    url,
    hdurl,
    media_type: MediaType,
    date,
    copyright,
  } = apodData;

  return (
    <div className="min-h-screen bg-slate-950 mt-4">
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
              <Sparkles className="h-5 w-5 text-purple-300 animate-pulse" />
              <span className="text-purple-200 font-semibold">
                Astronomy Picture of the Day
              </span>
            </div>
          </div>

          <Title className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            {title}
          </Title>

          <div className="flex items-center justify-center gap-2 text-slate-400">
            <Calendar className="h-5 w-5" />
            <time className="text-lg">{date}</time>
          </div>
        </header>

        {/* Media Content */}
        <div
          className="mb-12 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-purple-500/20">
            {MediaType === "image" ? (
              <img
                src={hdurl ?? url}
                alt={title}
                loading="lazy"
                className="w-full h-auto"
              />
            ) : MediaType === "video" ? (
              <div className="relative" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  src={url}
                  title={title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
            ) : (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 py-32 bg-gradient-to-br from-purple-600/20 to-blue-600/20 hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300"
              >
                <ExternalLink className="h-8 w-8 text-purple-400 group-hover:scale-110 transition-transform" />
                <span className="text-xl font-semibold text-white">
                  View Media
                </span>
              </a>
            )}
          </div>
        </div>

        {/* Explanation */}
        <div
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-purple-400/20 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          <Paragraph className="text-lg md:text-xl text-slate-300 leading-relaxed">
            {explanation}
          </Paragraph>

          {copyright && (
            <footer className="mt-8 pt-6 border-t border-purple-400/20">
              <div className="flex items-center gap-2 text-slate-400">
                <Copyright className="h-5 w-5" />
                <small className="text-sm">{copyright}</small>
              </div>
            </footer>
          )}
        </div>
      </article>
    </div>
  );
};
