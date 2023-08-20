
import { createBrowserRouter } from "react-router-dom";
import { useAuth } from "@presentation/hooks";
import { AuthRouter, DashboardRouter, LandingPage, NotFoundPage } from "@presentation/pages";

export function AppRouter() {
  const { protectedLoader, userLoader } = useAuth();
  const dashboardRouter = DashboardRouter()
  const authRouter = AuthRouter()

  const router = createBrowserRouter([
    { id: "root", path: "/", Component: LandingPage },
    { id: "auth", path: "/auth", loader: userLoader, children: authRouter },
    { id: "admin", path: "/admin", loader: protectedLoader, children: dashboardRouter },
    { path: "*", element: <NotFoundPage />, },
  ]);

  return router;
}

export default AppRouter
