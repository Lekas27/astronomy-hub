import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";
import { router } from "./router";
import { RouteSecurityProvider } from "./router/providers/router-provider";

import { queryClient } from "@/shared/lib/react-query/query";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouteSecurityProvider>
        <RouterProvider router={router} />
      </RouteSecurityProvider>
    </QueryClientProvider>
  </StrictMode>,
);
