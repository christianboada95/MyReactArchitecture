import { Layout } from "@presentation/components";
import { useAuth } from "@presentation/hooks";
import { LoginPage } from "@presentation/pages/auth/LoginPage";
import {
  Navigate,
  Route,
  RouteObject,
  createRoutesFromElements,
} from "react-router-dom";

export function AuthRouter() {
  let { loginAction, logoutAction, loginLoader, userLoader } = useAuth();

  const router = createRoutesFromElements(
    <Route loader={userLoader} Component={Layout}>
      <Route index={true} element={<Navigate to="login" />} />
      <Route
        path="login"
        action={loginAction}
        loader={loginLoader}
        Component={LoginPage}
      />
      <Route path="logout" action={logoutAction} />
    </Route>
  );

  const routes: RouteObject[] = [
    {
      Component: Layout,
      children: [
        { index: true, element: <Navigate to="login" /> },
        {
          path: "login",
          action: loginAction,
          loader: loginLoader,
          Component: LoginPage,
        },
        { path: "logout", action: logoutAction },
      ],
    },
  ];

  return router;
}
