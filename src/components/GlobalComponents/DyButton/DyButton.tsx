import * as React from 'react';
import {Box} from '@mui/material';
import Button from '@mui/material/Button';

export default function DyButton({caption,onClick,color}:any) {
    const initOnclick=()=>{
        onClick()
    }
  return (
<>
<Button color={color}   onClick={initOnclick} sx={{display:'block',width:'100%'}} variant="contained">{caption}</Button>
</>

  );
}