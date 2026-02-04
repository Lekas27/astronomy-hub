import { createFileRoute } from "@tanstack/react-router";

import { ApodNewsPage } from "@/pages/news/ui/apod";
import { Navbar } from "@/widgets/navbar/ui";

export const Route = createFileRoute("/__public/news")({
  component: () => <Navbar element={<ApodNewsPage />} />,
});
