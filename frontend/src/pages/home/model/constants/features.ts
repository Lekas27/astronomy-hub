import { Telescope, MessagesSquare, Users, Sparkles } from "lucide-react";

import type { FeatureType } from "@/pages/home/model/types/feature";

export const features: FeatureType[] = [
  {
    icon: Telescope,
    title: "Astronomy Simulator",
    description:
      "Create and explore realistic simulations of astronomical events, from eclipses to galaxy collisions.",
  },
  {
    icon: MessagesSquare,
    title: "Discussion Hub",
    description:
      "Join conversations with astronomy enthusiasts worldwide. Share observations, theories, and discoveries.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Learn from experts, share your simulations, and collaborate on astronomical research projects.",
  },
  {
    icon: Sparkles,
    title: "Real-Time Data",
    description:
      "Access up-to-date astronomical data and simulate events based on actual celestial mechanics.",
  },
];
