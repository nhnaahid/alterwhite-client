import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyQueries from "../pages/MyQueries/MyQueries";
import PrivateRoute from "./PrivateRoute";
import AddQueries from "../pages/AddQueries/AddQueries";
import AllQueries from "../pages/AllQueries/AllQueries";
import QueryDetails from "../pages/QueryDetails/QueryDetails";
import UpdateQuery from "../pages/UpdateQuery/UpdateQuery";
import MyRecommend from "../pages/MyRecommend/MyRecommend";

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
                path: '/all-queries',
                element: <AllQueries></AllQueries>
            },
            {
                path: '/my-queries',
                element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>
            },
            {
                path: '/query/:id',
                element: <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>
            },
            {
                path: '/query/update/:id',
                element: <PrivateRoute><UpdateQuery></UpdateQuery></PrivateRoute>
            },
            {
                path: "/add-queries",
                element: <PrivateRoute><AddQueries></AddQueries></PrivateRoute>
            },
            {
                path: '/my-recommendations',
                element: <PrivateRoute><MyRecommend></MyRecommend></PrivateRoute>
            }

        ]
    },
]);

export default router;