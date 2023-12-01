import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function DySingleCharTextField({codeValuesState,name,value,onChangee,index}:any) {
  const StyleinputComponent= {
    height: '30px',
    width:  '71px',
    border: '1px solid #D3D4D0',
    borderRadius: '5px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0 1px 0 0 rgba(170,170,170,0.01)'
}
const StyleinputText= {
  color: 'rgba(0,0,0,0.87)',
  fontSize: '16px',
  letterSpacing: '0.5px',
  lineHeight: '28px',
  textAlign: 'center',
}

const customeStyle={
  textAlign:'center !important',
  '& .rtl-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{
    textAlign:'center',
    fontSize:'20px'
  }

}


  const handleChange=({target}:any)=>{
    let{value}=target;
    const updatedValue = [...codeValuesState]; // Create a copy of the array
    updatedValue[index] = value
    onChangee(updatedValue);
  }

  const initialValidation=()=>[
    console.log(codeValuesState)
  ]
  return (
    <Box
      component="form"
      sx={{ 
        '& > :not(style)': { m: 1, width: '70px' },       
      }}
      noValidate
    
    >
      <TextField 
        autoComplete="off"
      // defaultValue=''
      
      inputProps={{maxLength:1}}
      id="outlined-basic" 
      variant="outlined" 
      name={name}
      value={value}
      // tabIndex={index}
      onChange={handleChange}
      // autoComplete="nope"
      sx={customeStyle}
      // InputProps={}  
      // sx={StyleinputComponent} 
      onBlur={({target}:any)=>{
      if (index===4) {
        initialValidation()
      }
      }}
      />

    </Box>
  );
}