import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import MUIWrapper from './ThemeWrapper/ThemeWrapper';
import Mrouter from './Routes/MRoutes/MRoutes';
import './index.css';
import theme from './theme'; 



// import theme from './theme';


const cacheRtl = createCache({
  key: 'rtl',
  stylisPlugins: [rtlPlugin],
});


const App = () => {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
     
        <CssBaseline />
      
    {/* <MainRoutes/> */}
    {/* <RouterProvider router={Mrouter} /> */}
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;


