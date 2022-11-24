import { createBrowserRouter } from "react-router-dom";
import CategoryItem from "../../CategoryItem/CategoryItem";
import Home from "../../Home/Home/Home";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Register from "../../Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/categories/:id',
            element:<CategoryItem></CategoryItem>,
            loader : ({params}) => fetch(`http://localhost:5000/collection/${params.id}`)
        },
      ]
    },
  ]);

  export default router;