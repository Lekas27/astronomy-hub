import { createRouter, RouteApi } from "@tanstack/react-router";

import { routeTree } from "./route-tree.gen";

import { NotFoundPage } from "@/pages/not-found/ui/not-found";

export const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => <NotFoundPage />,
  context: {
    isAuthenticated: false, // This will be updated by the provider
  },
});

declare module "@tanstack/react-router" {
  type CustomRegister = {
    router: typeof router;
  };
}

export type Router = RouteApi<typeof router>;
