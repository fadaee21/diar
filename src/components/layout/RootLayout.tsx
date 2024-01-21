import Sidebar from "@components/appbar/Sidebar";
import { Outlet } from "react-router-dom";
// import { Link, Outlet, useFetcher, useRouteLoaderData } from "react-router-dom";

function RootLayout() {
  return (
    <>
      {/* <AuthStatus /> */}

      <Sidebar>
        <Outlet />
      </Sidebar>
    </>
  );
}

export default RootLayout;

// function AuthStatus() {
//   // Get our logged in user, if they exist, from the root route loader data
//   const { user } = useRouteLoaderData("root") as { user: string | null };
//   const fetcher = useFetcher();

//   if (!user) {
//     return <p>You are not logged in.</p>;
//   }

//   const isLoggingOut = fetcher.formData != null;

//   return (
//     <div>
//       <p>Welcome {user}!</p>
//       <fetcher.Form method="post" action="/logout">
//         <button type="submit" disabled={isLoggingOut}>
//           {isLoggingOut ? "Signing out..." : "Sign out"}
//         </button>
//       </fetcher.Form>
//     </div>
//   );
// }
