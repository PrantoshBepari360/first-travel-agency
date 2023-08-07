import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import PackagesDetails from "../Pages/TravelPackages/PackagesDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/package",
          element:<PackagesDetails></PackagesDetails>
        }
      ]
    },
  ]);
  export default router