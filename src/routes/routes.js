import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from "../components/Home/Home";
import Login from '../components/LoginAsset/Login/Login';
import Sideber from "../components/Sideber/Sideber";
import Register from "../components/LoginAsset/Register/Register";
import Banner from "../components/Banner/Banner";
export const router = createBrowserRouter([

    {
        path: '/',

        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/home',
                element: <Home></Home>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            //  {

            //            path:'/all-topices' ,
            //            element:<Sideber></Sideber>,



            //  },
            //  {

            //            path:'/all-topices/login' ,
            //            element:<Login></Login>,



            //  },
            {
                path: '/register',
                element: <Register></Register>,
            },

        ]

    },

    {
        path: '/all-topices',

        element: <Sideber></Sideber>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

            {
                path: '/all-topices/login',
                element: <Login></Login>,

            },
            {
                path: '/all-topices/register',
                element: <Register></Register>,

            }
        ]
    }


])