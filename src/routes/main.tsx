import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "./error-page";
import App from "../App";
import Favorites from "../pages/Favorites";
import Home from "../pages/Home";
import Root from "./root";

export const router = createBrowserRouter([
  {
    path: "*",
    Component: Root,
  },
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/favorites",
    Component: Favorites,
  },
]);
