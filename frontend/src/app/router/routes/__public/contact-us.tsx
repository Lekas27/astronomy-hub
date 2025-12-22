import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "@/pages/contact-us/ui/contact-us";
import { Navbar } from "@/widgets/navbar/ui";

export const Route = createFileRoute("/__public/contact-us")({
  component: () => <Navbar element={<ContactPage />} />,
});
