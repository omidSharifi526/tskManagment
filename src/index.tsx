import * as React from "react";
import * as ReactDOM from "react-dom/client";
import moment from 'moment-jalaali';
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from './Context/AuthProvider';
import Mrouter from "./Routes/MRoutes/MRoutes";
import { store } from './Store/Store';
import { Provider } from 'react-redux'
// import MainRoutes from "./Routes/MRoutes/MRoutes";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import AdapterJalaali from '@date-io/jalaali';
import { faIR, LocalizationProvider } from '@mui/x-date-pickers';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
// import DateFnsUtils from '@date-io/date-fns';
// import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali/AdapterDateFnsJalali'
// AdapterMomentJalaali
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import AdapterDateFnsJalali from '@mui/lab/AdapterDateFnsJalali';
import { AdapterDateFnsJalali } from '@mui/x-date-pickers/AdapterDateFnsJalali';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import createCache from '@emotion/cache';
import Loading from "./components/Loading/Loading";
import MUIWrapper from "./ThemeWrapper/ThemeWrapper";
import App from "./App";




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

      <AuthProvider>
    <Provider store={store}>
     <QueryClientProvider client={queryClient}>


    
    <MUIWrapper>

   
    <LocalizationProvider dateAdapter={AdapterDateFnsJalali}  >

       {/* <CacheProvider value={cacheRtl}> 
         <ThemeProvider theme={theme}> */}



           <App/>


        
         {/* </ThemeProvider>
      </CacheProvider>  */}


      </LocalizationProvider>

      </MUIWrapper>
      




      </QueryClientProvider>
      </Provider>
      </AuthProvider>
 

);



