import React from "react";
import OverView from "../../scenes/OverView/OverView";

import {
       createBrowserRouter,
       RouterProvider,
     } from "react-router-dom";
import LoginPage from "../../components/Login/LoginPage";
import DashBoard from '../../components/Dashboard/DashboardPage';
//      const LazyStore=React.lazy(()=>import('../scenes/Store/index'));

   const Mrouter = createBrowserRouter([
       {
         path: "/",
         element: <LoginPage/>,
        //  children: [
        //   {
        //     path: "dashboard",
        //     element: <DashBoard />,
           
        //   },
        // ],
        
       },
       {
         path:'/dashboard',
         element:<DashBoard/>
       },
       {
        path:'/overview',
        element:<OverView/>
      },
       // {
       //   path:'/contact',
       //   element:<Contact/>
       // }
     ]);
     export default Mrouter


