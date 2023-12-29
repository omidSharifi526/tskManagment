import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';


export default function LyBackdrop(props:any) {


 

  return (
    <div>
    
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={props?.visible}
   
      >
       {
        props?.children
       }
      </Backdrop>
    </div>
  );
}
