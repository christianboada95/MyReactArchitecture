import { Link, Outlet, useFetcher, useRouteLoaderData } from "react-router-dom";
import { AuthStatus } from "./authStatus";

export default function Layout() {
  return (
    <div>
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
