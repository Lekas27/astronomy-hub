import { Target, Heart, Zap } from "lucide-react";

import type { ValueType } from "@/pages/about-us/model/types/value";

export const values: ValueType[] = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To democratize astronomy education by providing powerful simulation tools and fostering a global community of space enthusiasts.",
  },
  {
    icon: Heart,
    title: "Our Vision",
    description:
      "A world where anyone can explore the universe, share discoveries, and inspire the next generation of astronomers and scientists.",
  },
  {
    icon: Zap,
    title: "Our Values",
    description:
      "Innovation, accessibility, collaboration, and scientific accuracy drive everything we do at Astronomy Hub.",
  },
];
