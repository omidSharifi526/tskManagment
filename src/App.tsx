import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import Mrouter from './Routes/MRoutes/MRoutes';
import createCache from '@emotion/cache';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import theme from './theme'; 



// import theme from './theme';





const App = () => {
  return (
 <>
  <RouterProvider router={Mrouter} />
 </>
  );
};

export default App;


