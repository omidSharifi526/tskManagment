import * as React from 'react';
import {Box} from '@mui/material';
import Button from '@mui/material/Button';

export default function DyButton({caption,disabled,onClick,color,variant,type,bgColor}:any) {
    const initOnclick=()=>{
        onClick()
    }
  return (
<>
<Button 
disabled={disabled}
// color={'#00387C'}   

onClick={initOnclick} 
sx={{display:'block',width:'100%',bgcolor:bgColor,px:3,py:0.5}} 
variant={variant}
type={type}
>

{caption}

</Button>
</>

  );
}