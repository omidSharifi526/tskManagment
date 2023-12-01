import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import UserPhoneNum from '../../Login/Statics/Icons/UserPhoneNum/UserPhoneNum';


export default function DyTextField(props:any):any {
  return (
    <Box>
      <FormControl variant="standard" fullWidth >
        {/* <InputLabel htmlFor="input-with-icon-adornment">
        {label}
        </InputLabel> */}
        <TextField 
        value={props.value}
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
            props.onchangee(target.value)
          }}
        
        />
      </FormControl>
      
     
    </Box>
  );
}