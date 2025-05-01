import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import Home from "../pages/Home";
import Signup from "../pages/Signup/Signup";
import Login from "../pages/Login/Login";
import NewsDetails from "../pages/NewsDetails/NewsDetails";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";
import Career from "../components/career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
        hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },{
    path:'/details/:id',
    element: <PrivateRoute> <NewsDetails></NewsDetails> </PrivateRoute> ,
    loader: () => fetch("/news.json"),
    hydrateFallbackElement:<span className="loading loading-bars loading-xl"></span>
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },{
    path:'/career',
    element:<PrivateRoute>  <Career></Career> </PrivateRoute> ,
    
   
  }
]);

export default router;
