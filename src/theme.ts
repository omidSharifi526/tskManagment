import { createTheme } from '@mui/material/styles';
import { faIR } from '@mui/material/locale';

const theme = createTheme({
  direction: 'rtl',
  
  typography:{
    fontFamily:'yekan !important  ',
    fontSize:12,
    // fontWeightBold:900

  },
  components: {
    MuiTooltip: {
        styleOverrides: {
            tooltip: {
                fontSize: '0.8rem !important',
                
            }
        }
    }
}

  


},faIR);



export default theme;