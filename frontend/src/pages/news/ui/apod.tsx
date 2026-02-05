import { ApodNews } from "@/features/apod/ui/apod-news";
import { useNews } from "@/pages/news/model/hooks/use-news";
import { NewsNavbar } from "@/widgets/news-navbar/ui/news-navbar";

export const ApodNewsPage = () => {
  const { activeSection, setActiveSection } = useNews();

  return (
    <div className="min-h-screen min-w-screen w-full mt-20 bg-slate-950">
      <NewsNavbar
        active={activeSection}
        onChange={(section) => {
          setActiveSection(section);
        }}
      />

      {activeSection === "apod" && <ApodNews />}
    </div>
  );
};
