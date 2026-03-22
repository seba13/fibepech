import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { HomePage } from "../ui/pages/Home/HomePage";

export const MainRouter = () => {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <Navigate to="/" /> },
  ]);
  return <RouterProvider router={router} />;
};
