import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';


export default function LyBackdrop({visible,children}:any) {


 

  return (
    <div>
    
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={visible}
   
      >
       {
        children
       }
      </Backdrop>
    </div>
  );
}
