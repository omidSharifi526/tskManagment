import * as React from 'react';
import {Box} from '@mui/material';
import Button from '@mui/material/Button';

export default function DyButton({caption,onClick,color,disbled,variant}:any) {
    const initOnclick=()=>{
        onClick()
    }
  return (
<>
<Button 
disabled={disbled}
color={color}   
onClick={initOnclick} 
sx={{display:'block',width:'100%'}} 
variant={variant}>

{caption}

</Button>
</>

  );
}