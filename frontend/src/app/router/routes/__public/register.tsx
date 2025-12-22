import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/widgets/navbar/ui";

export const Route = createFileRoute("/__public/register")({
  component: () => (
    <Navbar element={<div>📝 Register Page - Public Access</div>} />
  ),
});
