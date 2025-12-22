import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "@/pages/about-us/ui/about-us";
import { Navbar } from "@/widgets/navbar/ui";

export const Route = createFileRoute("/__public/about-us")({
  component: () => <Navbar element={<AboutPage />} />,
});
