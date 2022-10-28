import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from "../components/Home/Home";
import Login from '../components/LoginAsset/Login/Login';
import Sideber from "../components/Sideber/Sideber";
import Register from "../components/LoginAsset/Register/Register";
import CourseCategory from "../components/Course-Category/CourseCategory"
import ProtectRoutes from "./ProtectRoutes";
import Details from "../components/CourseDetails/Details";
import Blog from "../components/Blog/Blog";
import Faq from "../components/FAQ/Faq";

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
                path: '/blog',
                element: <Blog></Blog>,
            },

            {
                path: '/fq',
                element: <Faq></Faq>,
            },

            {
                path: '/register',
                element: <Register></Register>,
            },

        ]

    },

    // Course route sapareted 

    {
        path: '/course-category',

        element: <Sideber></Sideber>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [


            {
                path: '/course-category/:id',
                element: <CourseCategory></CourseCategory>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-ronycse16b.vercel.app/cousre-categories/${params.id}`)

            },
            {
                path: '/course-category/course/:id',
                element: <ProtectRoutes><Details></Details></ProtectRoutes>,
                loader: ({ params }) => fetch(`https://b610-lerning-platform-server-side-ronycse16b.vercel.app/course/${params.id}`)

            },





        ]
    }


])