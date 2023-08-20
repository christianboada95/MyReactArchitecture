import { useFetcher, useRouteLoaderData } from "react-router-dom";

export function AuthStatus() {
  // Get our logged in user, if they exist, from the root route loader data
  const { user } = useRouteLoaderData("auth") as { user: string | null };
  const fetcher = useFetcher();

  if (!user) {
    return <p>You are not logged in.</p>;
  }

  const isLoggingOut = fetcher.formData != null;

  return (
    <div>
      <p>Welcome {user}!</p>
      <fetcher.Form method="post" action="/auth/logout">
        <button type="submit" disabled={isLoggingOut}>
          {isLoggingOut ? "Signing out..." : "Sign out"}
        </button>
      </fetcher.Form>
    </div>
  ); 
}

export default AuthStatus
