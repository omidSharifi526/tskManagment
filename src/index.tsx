import * as React from "react";
import * as ReactDOM from "react-dom/client";
import moment from 'moment-jalaali';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Context/AuthProvider';
import Mrouter from "./Routes/MRoutes/MRoutes";
// import MainRoutes from "./Routes/MRoutes/MRoutes";



import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import createCache from '@emotion/cache';
import Loading from "./components/Loading/Loading";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./components/Login/LoginPage";
import DashboardPage from './components/Dashboard/DashboardPage';
import theme from './theme'; 
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import User from './components/User/User';





const cacheRtl = createCache({
  key: 'rtl',
  stylisPlugins: [rtlPlugin],
});






ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
  <React.StrictMode>
      <AuthProvider>
       <CacheProvider value={cacheRtl}> 
         <ThemeProvider theme={theme}>
            <RouterProvider router={Mrouter} />
        
         </ThemeProvider>
      </CacheProvider> 
      </AuthProvider>
  </React.StrictMode>

);



{/* <CacheProvider value={cacheRtl}>
<ThemeProvider theme={theme}>
  <CssBaseline />

 
</ThemeProvider>
</CacheProvider> */}