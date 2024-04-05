import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/material';
interface RadioControlFace{
    mainLabel:string,
    options:any[]
}

export default function RadioButtonsGroup({mainLabel,options}:RadioControlFace) {
  return (
   <Box sx={{px:2,pb:1}}  >
     <FormControl sx={{mb:3}}  >
      <FormLabel id="demo-radio-buttons-group-label">{mainLabel}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        row
      >
        {
            options?.map((item:any,i:number)=>{
                return (
                    <FormControlLabel key={i}  value={item.id} control={<Radio />} label={item.label} />
                )
            })
        }
        {/* 
        <FormControlLabel  value="male" control={<Radio />} label="برای اشخاص خاص" /> */}
        
      </RadioGroup>
    </FormControl>
   </Box>
  );
}
