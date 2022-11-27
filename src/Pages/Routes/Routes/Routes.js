import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Blogs/Blogs";
import CategoryItem from "../../CategoryItem/CategoryItem";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import AllBuyers from "../../Dashboard/AllBuyers/AllBuyers";
import Allreport from "../../Dashboard/AllReport/Allreport";
import AllSellers from "../../Dashboard/AllSellers/AllSellers";
import MyOrders from "../../Dashboard/MyOrders/MyOrders";
import MyProducts from "../../Dashboard/MyProducts/MyProducts";
import Payment from "../../Dashboard/Payment/Payment";
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
        path: '/blogs',
        element: <Blogs></Blogs>
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
      },
      {
        path: '/dashboard/myproducts',
        element: <MyProducts></MyProducts>
      },
      {
        path: '/dashboard/addproducts',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/dashboard/allsellers',
        element: <AllSellers></AllSellers>
      },
      {
        path: '/dashboard/allbuyers',
        element: <AllBuyers></AllBuyers>
      },
      {
        path: '/dashboard/report',
        element: <Allreport></Allreport>
      },
      {
        path: '/dashboard/payment/:id',
        element: <Payment></Payment>,
        loader: ({params}) => fetch(`http://localhost:5000/bookingpay/${params.id}`)
      },

    ]
  }
]);

export default router;