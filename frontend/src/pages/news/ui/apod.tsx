import { ApodNews } from "@/features/apod/ui/apod-news";
import { NeoWsNews } from "@/features/asteroids-neo-ws/ui/asteroids-neo-ws-news";
import { useNews } from "@/pages/news/model/hooks/use-news";
import { NewsNavbar } from "@/widgets/news-navbar/ui/news-navbar";

export const NewsPage = () => {
  const { activeSection, setActiveSection } = useNews();

  // Example dates for NeoWs
  const startDate = "2026-02-06";
  const endDate = "2026-02-10";

  return (
    <div className="min-h-screen min-w-screen w-full mt-20 bg-slate-950">
      <NewsNavbar
        active={activeSection}
        onChange={(section) => setActiveSection(section)}
      />

      {activeSection === "apod" && <ApodNews />}
      {activeSection === "neows" && (
        <NeoWsNews startDate={startDate} endDate={endDate} />
      )}
    </div>
  );
};
