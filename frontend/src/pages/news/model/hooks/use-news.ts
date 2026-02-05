import { useState } from "react";

import type { NewsSection } from "@/widgets/news-navbar/model/types/news-navbar";

export const useNews = () => {
  const [activeSection, setActiveSection] = useState<NewsSection>("apod"); // Static for this page

  return {
    activeSection,
    setActiveSection,
  };
};
