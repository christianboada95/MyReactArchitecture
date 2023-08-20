import { Link } from "react-router-dom";

export function LandingPage() {
  return <>
    <h3>LandingPage</h3>
    <Link to="/auth">Go to Login Page</Link>
  </>
}