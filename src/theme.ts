import { createTheme } from '@mui/material/styles';

// Create a custom theme
// const theme = createTheme({
//   direction: 'rtl',
//   typography: {
//     "fontFamily": `"yekan", "Helvetica", "Arial", sans-serif`,
//     "fontSize": 14,
//     "fontWeightLight": 300,
//     "fontWeightRegular": 400,
//     "fontWeightMedium": 500
//    }
//   // Additional theme customizations...
// });
const theme = createTheme({
  direction: 'rtl',
  typography:{
    fontFamily:'yekan !important  '
  }
 
  // Add other theme configurations as needed
});



export default theme;