import * as React from 'react';
import {Box,Grid,Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';

export default function DyFingerPrint({onClick}:any) {

  const handleOnclick=()=>{
    onClick()
  }
  return (
    <Box sx={{width:'100%',textAlign:'center'}} >
     <Typography color='black' >
        ورود
     </Typography>
      <IconButton onClick={handleOnclick} sx={{mx:'auto'}} aria-label="fingerprint" color="success">
        <Fingerprint sx={{fontSize:'70px'}} />
      </IconButton>
      
    </Box>
  );
}
