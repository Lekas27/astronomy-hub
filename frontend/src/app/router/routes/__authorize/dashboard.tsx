import { createFileRoute, redirect } from "@tanstack/react-router";

import { Navbar } from "@/widgets/navbar/ui";

export const Route = createFileRoute("/__authorize/dashboard")({
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({ to: "/login" });
    }
  },
  component: () => (
    <Navbar element={<div>📊 Dashboard - Authorized Only</div>} />
  ),
});
