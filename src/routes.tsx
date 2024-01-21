import {
  LoaderFunctionArgs,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import DashboardPage from "./page/dashboard/DashboardPage";
import Cookies from "js-cookie";
import UsersPage from "./page/UsersPage/UsersPage";
import InstitutesPage from "./page/institutes/InstitutesPage";
import RegisterInstitutePage from "./page/register-institute/RegisterInstitutePage";
import LoginPage from "./page/log/loginPage";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",

    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
        loader: protectedLoader,
      },

      {
        loader: protectedLoader,
        children: [
          {
            path: "users",
            element: <UsersPage />,
            loader: logger,
          },
          {
            path: "institutes",
            element: <InstitutesPage />,
          },
        ],
      },

      {
        path: "register-institute",
        element: <RegisterInstitutePage />,
        loader: protectedLoader,
      },
    ],
  },
  {
    path: "login",
    loader: loginLoader,
    element: <LoginPage />,
  },
]);

export default router;

function protectedLoader({ request }: LoaderFunctionArgs) {
  const token = Cookies.get("token");
  if (!token) {
    const params = new URLSearchParams();
    params.set("from", new URL(request.url).pathname);
    return redirect("/login?" + params.toString());
  }
  return null;
}
async function loginLoader() {
  const token = Cookies.get("token");
  if (token) {
    return redirect("/");
  }
  return null;
}

function logger({ request }: LoaderFunctionArgs) {
  console.log({ logger: request });
  return null;
}
