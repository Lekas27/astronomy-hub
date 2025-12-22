import type { ComponentType } from "react";

export type FeatureType = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};
