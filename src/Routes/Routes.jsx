import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import NotFound from "../Components/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index:true,
        element: <Home></Home>,
        loader:()=>fetch("./AppData.json")
      },
      {
        path: "/apps",
        element: <Apps></Apps>,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path:'/apps/:id',
        element:<AppDetails></AppDetails>
      },
      {
        path:'*',
        element:<NotFound></NotFound>
      }
    ],
  },
]);

export default router;
