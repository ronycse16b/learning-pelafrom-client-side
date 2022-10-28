import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from "../components/Home/Home";
import Login from '../components/LoginAsset/Login/Login';
import Sideber from "../components/Sideber/Sideber";
import Register from "../components/LoginAsset/Register/Register";
import CourseCategory from "../components/Course-Category/CourseCategory"

import ProtectRoutes from "./ProtectRoutes";
import Pricing from "../components/Pricing/Pricing";

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
           
            {
                path: '/register',
                element: <Register></Register>,
            },

        ]

    },

    {
        path: '/course-category',

        element: <ProtectRoutes><Sideber></Sideber></ProtectRoutes>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

        
            {
                path: '/course-category/:id',
                element:  <CourseCategory></CourseCategory>,
                loader: ({params})=> fetch(`http://localhost:5000/cousre-categories/${params.id}`)

            },
            // {
            //     path: '/course-category/',
            //     element: <Pricing></Pricing>,
            //     loader: ({params})=> fetch(`http://localhost:5000/course/${params.id}`)

            // },
          
         
          
        ]
    }


])