import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { StrictMode } from "react";

import "@/app/styles/index.css";
import { router } from "@/app/router";
import { RouteSecurityProvider } from "@/app/router/providers/router-provider";
import { queryClient } from "@/shared/lib/react-query/query";

export const MainProvider = () => {
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouteSecurityProvider>
          <RouterProvider router={router} />
        </RouteSecurityProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};
