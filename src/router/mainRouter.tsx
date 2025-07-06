import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { StaticPage } from "../ui/pages/StaticPages/StaticPage";

export const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <StaticPage />,
    },

    {
      path: "*",
      element: <Navigate to={"/"} />,
    },
  ]);

  return <RouterProvider router={router} />;
};
