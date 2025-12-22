import type { ComponentType } from "react";

export type ContactInfoType = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  detail: string;
  description: string;
};
