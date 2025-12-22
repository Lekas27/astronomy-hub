import { createFileRoute } from "@tanstack/react-router";

import { SimulatorPage } from "@/pages/simulator/ui/simulator";

export const Route = createFileRoute("/__public/simulator")({
  component: () => <SimulatorPage />,
});
