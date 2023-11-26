import * as React from 'react';
import {createContext} from 'react';
import {QueryClientProvider,QueryClient} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import {Provider} from 'react-redux';
import store from './gStore/Store';



import {ColorModeContext,useMode} from './theme'
import {ThemeProvider } from '@mui/material/styles';
import {cacheRtl} from './CustomTheme/CustomTheme'
import { CacheProvider } from '@emotion/react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import './App.css'
import RootRoute from './Routes/RootRoute'
import DashRoutes from './Routes/Routes';
import { CssBaseline } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns/AdapterDateFns'
import AdapterJalaali from '@date-io/jalaali';
import {DndProvider} from 'react-dnd';
import {HTML5Backend} from 'react-dnd-html5-backend'



const queryClient=new QueryClient()

function App() {
const[theme,colorMode,]=useMode();


// anchorOrigin={{horizontal:'bottom',vertical:'bottom'}}

  return (
<QueryClientProvider client={queryClient} >
  <LocalizationProvider dateAdapter={AdapterJalaali}>
    <Provider store={store} >
     <ColorModeContext.Provider value={colorMode}>
      <CacheProvider value={cacheRtl}>
       <ThemeProvider theme={theme}>
        <SnackbarProvider  maxSnack={3} autoHideDuration={5000}  >
          <DndProvider backend={HTML5Backend} >



      
     <CssBaseline  />
         </DndProvider>   
<RootRoute/>   
<DashRoutes/>

       </SnackbarProvider>
      </ThemeProvider>
     </CacheProvider>
    </ColorModeContext.Provider>
   </Provider>
  </LocalizationProvider>
 <ReactQueryDevtools initialIsOpen={false}   />
</QueryClientProvider>
  );
}

export default App;
