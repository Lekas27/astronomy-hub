import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/index.css";
import { router } from "./router";
import { RouteSecurityProvider } from "./router/providers/router-provider";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouteSecurityProvider>
      <RouterProvider router={router} />
    </RouteSecurityProvider>
  </StrictMode>
);
