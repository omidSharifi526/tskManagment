import * as React from 'react';
import {Box} from '@mui/material';
import Button from '@mui/material/Button';

export default function DyButton({caption,onClick,color,disbled,variant,type,bgColor}:any) {
    const initOnclick=()=>{
        onClick()
    }
  return (
<>
<Button 
disabled={disbled}
// color={'#00387C'}   

onClick={initOnclick} 
sx={{display:'block',width:'100%',bgcolor:'#00387C'}} 
variant={variant}
type={type}
>

{caption}

</Button>
</>

  );
}