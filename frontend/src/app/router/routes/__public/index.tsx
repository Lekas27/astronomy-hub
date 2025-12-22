import { createFileRoute } from "@tanstack/react-router";

import { Homepage } from "@/pages/home/ui/home";
import { Navbar } from "@/widgets/navbar/ui";

export const Route = createFileRoute("/__public/")({
  component: () => <Navbar element={<Homepage />} />,
});
