import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import ChefDetails from "../Pages/ChefDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: '/',
                element:<Home></Home>,
                loader: () => fetch('https://awesome-chef-server-three.vercel.app/data')
            },
            {
                path: ':id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`https://awesome-chef-server-three.vercel.app/data/${params.id}`)
            }
        ]
    }
])

export default router;