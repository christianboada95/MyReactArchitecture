import * as React from "react";
import { Route, RouteObject, createRoutesFromElements } from "react-router-dom";

const DashboardPage = React.lazy(() => import("./DashboardPage"));

export function DashboardRouter() {
  const router = createRoutesFromElements(
    <Route element={
      <React.Suspense fallback={<>...</>}>
        <DashboardPage />
      </React.Suspense>
    }
    //errorElement={<ErrorBoundary />}
    />
  );
  const routes: RouteObject[] = [
    {
      async lazy() {
        // Multiple routes in lazy file
        let { DashboardLayout } = await import("@presentation/pages/admin/components");
        return { Component: DashboardLayout };
      },
      children: [
        { 
          index: true,
          async lazy() {
            let { DashboardIndex } = await import("@presentation/pages/admin/components");
            return { Component: DashboardIndex };
          }, 
        },
      ],
    },
  ];

  return routes;
}
