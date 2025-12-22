import type { ComponentType } from "react";

export type ValueType = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
};
