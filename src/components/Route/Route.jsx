import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/main";
import Home from "../pages/Home/Home";
import Category from "../pages/Category/Category";
import CategoryLayout from "../layouts/CategoryLayout/CategoryLayout";
import News from "../pages/News/News/News";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import CategoryNews from "../pages/News/CategoryNews/CategoryNews";
import PrivateRoute from "./PrivateRoute";
import Terms from "../pages/SignUp/Terms";

const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='category/0'></Navigate>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <SignUp></SignUp>
            },
            {
                path: 'terms',
                element: <Terms></Terms>

            }

        ]

    },

    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-latest-news-server-hasibulhasan372.vercel.app/categories/${params.id}`)
            }
        ]
    },
    {
        path: '/news',
        element: <CategoryLayout></CategoryLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) => fetch(`https://the-latest-news-server-hasibulhasan372.vercel.app/news/${params.id}`)
            }
        ]
    }


]);

export default router;