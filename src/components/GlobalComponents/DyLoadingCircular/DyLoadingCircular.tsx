import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

 const DyLoadingCircular:React.FC= function () {
  return (
    <Box sx={{ display: 'flex' }} px={3} py={1}>
      <CircularProgress size={20} />
    </Box>
  );
}
export default DyLoadingCircular