import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Pages/ChefDetails";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import Blog from "../Pages/Blog";
import PrivateRout from "./PrivateRout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://awesome-chef-server-three.vercel.app/data')
            },
            {
                path: ':id',
                element: <PrivateRout>
                    <ChefDetails></ChefDetails>
                </PrivateRout>,
                loader: ({ params }) => fetch(`https://awesome-chef-server-three.vercel.app/data/${params.id}`)
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
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;