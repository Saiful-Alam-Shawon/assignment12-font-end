import { createBrowserRouter } from "react-router-dom";
import Home from "../../Components/Home/Home/Home";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import Login from "../../Pages/Login/Login";
import Phones from "../../Pages/Phones/Phones";
import Phones1 from "../../Pages/Phones/Phones1";
import Phones2 from "../../Pages/Phones/Phones2";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";
import Buyer from './../../Components/DashBoard/Buyer/Buyer';
import Seller from "../../Components/DashBoard/Seller/Seller";
import Admin from "../../Components/DashBoard/Admin/Admin";
import AdminRoute from "../../Components/DashBoard/Admin Route/AdminRoute";
import BuyerRoute from "../../Components/DashBoard/Buyer Route/BuyerRoute";
import SellerRoute from "../../Components/DashBoard/SellerRoute/SellerRoute";
import MyProduct from "../../Components/DashBoard/Seller/MyProduct";
import Blogs from "../../Pages/Blog/Blogs";
import Error from "../../Shared/Error/Error";
import DashBoardLayout from "../../Layouts/HomeLayout/New Dashboard/DashBoardLayout/DashBoardLayout";
import AdminSeller from "../../Layouts/HomeLayout/New Dashboard/seller/AdminSeller";
import AdminBuyer from "../../Layouts/HomeLayout/New Dashboard/Buyer/AdminBuyer";
import DashBoardHome from "../../Layouts/HomeLayout/New Dashboard/DashBoardHome/DashBoardHome";
// import BannerCategory from "../../Components/Home/Banner/BannerCategory";



const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: '/',
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
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/iPhone',
                element: <Phones></Phones>,
            },
            {
                path: '/Samsung',
                element: <Phones1></Phones1>,
            },
            {
                path: '/Huawei',
                element: <Phones2></Phones2>,
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>,
                loader: () => fetch('https://assignment12-server-one.vercel.app/blog'),
            },

        ]
    },


    // New DashBoardLayouts Started here

    {
        path: '/dashboard',
        element: <PrivateRoutes> <DashBoardLayout></DashBoardLayout> </PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                // element: <AdminRoute><Admin></Admin></AdminRoute>
                element: <DashBoardHome></DashBoardHome>
            },
            {
                path: '/dashboard/allUsers',
                // element: <AdminRoute><Admin></Admin></AdminRoute>
                element: <AdminRoute><Admin></Admin></AdminRoute>
            },
            {
                path: '/dashboard/seller',
                element: <AdminRoute><AdminSeller></AdminSeller></AdminRoute>
            },
            {
                path: '/dashboard/buyer',
                element: <AdminRoute><AdminBuyer></AdminBuyer></AdminRoute>
            },

            // for buyer nav button
            {
                path: '/dashboard/dash1boar1db1',
                element: <BuyerRoute><Buyer></Buyer></BuyerRoute>
            },

            // for Seller
            {
                path: '/dashboard/dashboards',
                element: <SellerRoute><Seller></Seller></SellerRoute>
            },
            {
                path: '/dashboard/product',
                element: <SellerRoute><MyProduct></MyProduct></SellerRoute>
            },
        ]
    },
    {
        path: '/*',
        element: <Error></Error>
    }





])

export default router;