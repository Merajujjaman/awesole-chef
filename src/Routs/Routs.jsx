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
                loader: () => fetch('http://localhost:5000/data')
            },
            {
                path: ':id',
                element: <ChefDetails></ChefDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/data/${params.id}`)
            }
        ]
    }
])

export default router;