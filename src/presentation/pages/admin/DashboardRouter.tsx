import { RouteObject } from "react-router-dom";

//const DashboardPage = React.lazy(() => import("./DashboardPage"));

export function DashboardRouter() {
  // const router = createRoutesFromElements(
  //   <Route element={
  //     <React.Suspense fallback={<>...</>}>
  //       <DashboardPage />
  //     </React.Suspense>
  //   }
  //   //errorElement={<ErrorBoundary />}
  //   />
  // );
  const routes: RouteObject[] = [
    {
      async lazy() {
        // Multiple routes in lazy file
        const { DashboardLayout } = await import("@presentation/pages/admin/components");
        return { Component: DashboardLayout };
      },
      children: [
        { 
          index: true,
          async lazy() {
            const { DashboardIndex } = await import("@presentation/pages/admin/components");
            return { Component: DashboardIndex };
          }
        },
        {
          path: 'characters/:id',
          async lazy() {
            const { DashboardCharacter } = await import("@presentation/pages/admin/components");
            return { Component: DashboardCharacter };
          }, 
        }
      ],
    },
  ];

  return routes;
}
