import * as React from "react";
import * as ReactDOM from "react-dom/client";
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import createCache from '@emotion/cache'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import LoginPage from "./components/Login/LoginPage";
import DashboardPage from './components/Dashboard/DashboardPage';
import theme from './theme'; 

const cacheRtl = createCache({
  key: 'rtl',
  stylisPlugins: [rtlPlugin],
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
   
  },
  {
    path:'/dashboard',
    element:<DashboardPage/>
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