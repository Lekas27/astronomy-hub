import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/widgets/navbar/ui";

export const Route = createFileRoute("/__public/login")({
  component: () => (
    <Navbar element={<div>🔐 Login Page - Public Access</div>} />
  ),
});
