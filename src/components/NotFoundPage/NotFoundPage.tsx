import React from 'react';
import { Box,Grid,Typography } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Grid container  >
   <Box width={'100%'} textAlign={'center'}   >
       <Typography fontWeight={800} py={8} fontSize={'1.3rem'} > 
        متاسفانه صفحه ایی پیدا نشد :(
       </Typography>
   </Box>
    </Grid>
  )
}

export default NotFoundPage