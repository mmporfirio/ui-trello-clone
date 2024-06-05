import {
  createBrowserRouter,
  Navigate,
  RouterProvider as ReactRouterDOM,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import { Dashboard } from "../../views/Dashboard/Dashboard";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "board",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={"/board"} />,
  },
]);

function RouterProvider() {
  return <ReactRouterDOM router={routes} />;
}

export default RouterProvider;
