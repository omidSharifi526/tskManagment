import * as React from "react";
import * as ReactDOM from "react-dom/client";
import moment from 'moment-jalaali';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Context/AuthProvider';
import Mrouter from "./Routes/MRoutes/MRoutes";
import { store } from './Store/Store';
import { Provider } from 'react-redux'
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


import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';





const cacheRtl = createCache({
  key: 'rtl',
  stylisPlugins: [rtlPlugin],
});


const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById("root")as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
     <QueryClientProvider client={queryClient}>
      <AuthProvider>
       <CacheProvider value={cacheRtl}> 
         <ThemeProvider theme={theme}>
            <RouterProvider router={Mrouter} />
        
         </ThemeProvider>
      </CacheProvider> 
      </AuthProvider>
      </QueryClientProvider>
      </Provider>
  </React.StrictMode>

);



{/* <CacheProvider value={cacheRtl}>
<ThemeProvider theme={theme}>
  <CssBaseline />

 
</ThemeProvider>
</CacheProvider> */}