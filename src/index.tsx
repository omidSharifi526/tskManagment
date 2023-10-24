import * as React from "react";
import * as ReactDOM from "react-dom/client";
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

const cacheRtl = createCache({
  key: 'rtl',
  stylisPlugins: [rtlPlugin],
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Loading/>,
   
  },
  {
    path:'/dashboard',
    element:<Home/>
  },
  {
    path:'/contact',
    element:<Contact/>
  }
]);




ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
  <React.StrictMode>
    <CacheProvider value={cacheRtl}> 
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </CacheProvider> 
  </React.StrictMode>

);



{/* <CacheProvider value={cacheRtl}>
<ThemeProvider theme={theme}>
  <CssBaseline />

 
</ThemeProvider>
</CacheProvider> */}