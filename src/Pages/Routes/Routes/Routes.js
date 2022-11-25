import { createBrowserRouter } from "react-router-dom";
import CategoryItem from "../../CategoryItem/CategoryItem";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import ErrorPage from "../../ErrorPage/ErrorPage";
import Home from "../../Home/Home/Home";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,

      },
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/categories/:id',
        element: <PrivetRouter><CategoryItem></CategoryItem></PrivetRouter>,
        loader: ({ params }) => fetch(`http://localhost:5000/collection/${params.id}`)
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivetRouter><DashboardLayout></DashboardLayout></PrivetRouter>,
    children: [
      {
        path: '/dashboard',
        element: <MyOrders></MyOrders>
      }

    ]
  }
]);

export default router;