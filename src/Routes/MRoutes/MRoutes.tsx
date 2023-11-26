import React from "react";

import {
       createBrowserRouter,
       RouterProvider,
     } from "react-router-dom";
import LoginPage from "../../components/Login/LoginPage";
import DashBoard from '../../components/Dashboard/DashboardPage'
//      const LazyStore=React.lazy(()=>import('../scenes/Store/index'));

   const Mrouter = createBrowserRouter([
       {
         path: "/",
         element: <LoginPage/>,
        
       },
       {
         path:'/dashboard',
         element:<DashBoard/>
       },
       // {
       //   path:'/contact',
       //   element:<Contact/>
       // }
     ]);
     export default Mrouter


