import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import LandingPage from "../pages/landing/ladingPage";
import LoginPage from "../pages/auth/loginPage";
import ProtectedPage from "../pages/admin/dashboardPage";
import { RequireAuth } from "../pages/auth/authProvider";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/protected"
          element={
            <RequireAuth>
              <ProtectedPage />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>
  )
}