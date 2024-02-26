import React from 'react';
import {Field,ErrorMessage} from 'formik';
// import TextError from '../TextError/TextError';
import {FormControl,FormControlLabel,InputLabel,OutlinedInput,TextField,Typography,useTheme, ButtonGroup, Button} from '@mui/material'
// import {tokens} from '../../../../theme';





function TextFieldF(props:any) {


 
    const{label,name,type,value,errors, ...rest}=props;
  
    const theme=useTheme();
    // const colora=tokens(theme.palette.mode)

    const sxStyle={
      color: '#fff',
      borderRadius: '4px',
      padding:'8px',
      textAlign: 'center',
      width:'100%',
      margin:'auto',
      '& .muirtl-1pnpjpf-MuiInputBase-input-MuiOutlinedInput-input:-webkit-autofill': {
        boxShadow: '80px 80px 20px  rgb(22,27,37) inset !important', // Change the box shadow on focus
      },
  
      
    }



  


  return (

<Field name={name} >
   
{
  ({field,form,values}:any)=>{
  return(
  <FormControl size='small' sx={sxStyle}   >
               <Field
               error={form.errors[name]&&form.touched[name]}
               as={TextField}
               label={label}
               variant='outlined'
               name={name}
               id={name}
               {...rest}
               type={type}
               size="small"
               InputLabelProps={{
                htmlFor: name,
                style: {
                    color: "gray",
                    fontSize:'5px !important',
                   
                }
            }}
                >
                 
   
              </Field> 
              {errors&&
                <span style={{color:'red',fontSize:'12px'}}> {errors}</span>
                }
  </FormControl>
  )
  }
}
  </Field>

  )
  
}

export default TextFieldF


/**========================================================================
 *                            user:javad  1402/10/12
 *  
 *            TODO: add new props:erros
 *            description:    برای ارسال پیام ارور
 *  
 *  
 *========================================================================**/