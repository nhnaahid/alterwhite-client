import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyQueries from "../pages/MyQueries/MyQueries";
import PrivateRoute from "./PrivateRoute";
import AddQueries from "../pages/AddQueries/AddQueries";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
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
                path: '/my-queries',
                element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
            },
            {
                path: "/add-queries",
                element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
            }
        ]
    },
]);

export default router;