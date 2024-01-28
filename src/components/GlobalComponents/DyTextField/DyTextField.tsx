import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import UserPhoneNum from '../../Login/Statics/Icons/UserPhoneNum/UserPhoneNum';


export default function DyTextField(props:any) {

  const initialOnchange=(target:any)=>{
    let{name,value}=target;
    props.onchangee((prev:any)=>({...prev,[name]:value}))

// console.log(name,value)
  }
  return (
    <Box>
      <FormControl variant="standard" fullWidth >
        {/* <InputLabel htmlFor="input-with-icon-adornment">
        {label}
        </InputLabel> */}
        <TextField 
        // InputLabelProps={{ shrink: true }}
        size='small'
        value={props.value}
        type={props.type}
        name={props.name}
        variant='outlined'

        label={props.label}
        sx={{borderRadius:'10px'}}
        InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                {
                    props.Icon
                }
              </InputAdornment>
            ),
          }}

          onChange={({target}:any)=>{
            initialOnchange(target)
          }}
        
        />
      </FormControl>
      
     
    </Box>
  );
}