import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import { useAuth } from "../pages/auth/hooks/useAuth";

import { Layout } from "../components/layout";
import LoginPage from "../pages/auth/loginPage";
import DashboardPage from "../pages/admin/dashboardPage";
import LandingPage from "../pages/landing/landingPage";
import NotFoundPage from "../pages/notFoundPage";

//const LandingPage = React.lazy(() =>import("../pages/landing/ladingPage"));
//const DashboardPage = React.lazy(() => import("../pages/admin/dashboardPage"));
//const LoginPage = React.lazy(() => import("../pages/auth/loginPage"));

export function appRouter() {
  let { loginAction, logoutAction, loginLoader, protectedLoader, userLoader } = useAuth();
  
  const router = createBrowserRouter([
    {
      id: "root",
      path: "/",
      loader: userLoader,
      Component: Layout,
      children: [
        {
          index: true,
          Component: LandingPage,
          //lazy: () => import("../pages/landing/LandingPage"),
        },
        {
          path: "login",
          action: loginAction,
          loader: loginLoader,
          Component: LoginPage
        },
        {
          path: "dashboard",
          loader: protectedLoader,
          Component: DashboardPage,
          // async lazy() {
          //   // Multiple routes in lazy file
          //   let DashboardPage  = await import("../pages/admin/dashboardPage");
          //   return { Component: DashboardPage };
          // }
        },
      ],
    },
    {
      path: "/logout",
      action: logoutAction
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return router;
}