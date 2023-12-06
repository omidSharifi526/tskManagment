import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function DySelect(props:any) {
//   const [age, setAge] = React.useState('');
// props.onchangee((prev:any)=>({...prev,[name]:value}))
  const handleChange = (event: SelectChangeEvent) => {
    let{target}=event;
    // setAge(event.target.value as string);
    props.onChangee((prev:any)=>({...prev,[target.name]:target.value}))
  };

  return (
   
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
        size='small'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label="Age"
          onChange={handleChange}
          name={props.name}
        >
         {
            props.options.map((item:any,i:any)=>{
             return (
                <MenuItem value={item.value}>{item.key}</MenuItem>
             )
            })
         }
        </Select>
      </FormControl>
   
  );
}
