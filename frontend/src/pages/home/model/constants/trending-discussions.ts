import type {
  CategoryType,
  DiscussionType,
} from "@/pages/home/model/types/trending-discussion";

export const trendingDiscussions: DiscussionType[] = [
  {
    topic: "Best telescope for deep sky photography?",
    category: "Equipment",
  },
  {
    topic: "New exoplanet discovery in habitable zone!",
    category: "Discoveries",
  },
  {
    topic: "Lunar eclipse observation tips",
    category: "Observations",
  },
];

export const categoryColors: Record<CategoryType, string> = {
  Equipment: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Discoveries: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  Observations: "bg-pink-500/20 text-pink-300 border-pink-500/30",
};
