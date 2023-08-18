import { Link, Outlet } from "react-router-dom";
import { AuthStatus } from "./authStatus";

export function Layout() {
  return (
    <div>
      <h1>Auth Example using RouterProvider</h1>

      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/dashboard">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
