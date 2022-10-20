import { createBrowserRouter } from "react-router-dom";
import Admin from "../components/Admin/Admin";
import Layout from "../components/Layout/Layout";
import NotFound from "../components/NotFound/NotFound";
import Home from "../components/Pages/Home";
import Login from "../components/Pages/Login";
import Signup from "../components/Pages/Signup";
import SingleArticle from "../components/SingleArticle/SingleArticle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/search/:keyword", element: <Home /> },
      { path: "/category/:category", element: <Home /> },
      { path: "/article/:id", element: <SingleArticle /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { path: "/admin", element: <Admin /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
