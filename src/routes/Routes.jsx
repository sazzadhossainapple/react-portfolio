import { createBrowserRouter } from "react-router-dom";
import ProjectDetails1 from "../components/projectDetails1/ProjectDetails1";
import ProjectDetails2 from "../components/projectDetails2/ProjectDetails2";
import ProtfolioDetails from "../components/protfolioDetails/ProtfolioDetails";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/project1",
        element: <ProtfolioDetails></ProtfolioDetails>,
      },
      {
        path: "/project2",
        element: <ProjectDetails1></ProjectDetails1>,
      },
      {
        path: "/project3",
        element: <ProjectDetails2></ProjectDetails2>,
      },
    ],
  },
]);
