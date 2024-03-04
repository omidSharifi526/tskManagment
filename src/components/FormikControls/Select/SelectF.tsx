import React from "react";
import TagFacesIcon from '@mui/icons-material/TagFaces';
import sad from '../../../Asset/Svgs/Emojys/sad.png';
import smile from '../../../Asset/Svgs/Emojys/smil.png';
import meh from '../../../Asset/Svgs/Emojys/meh.png'
// import {ReactComponent as HistoryIcon} from './Icons/HistoryIcon.svg';
// import Box from "@mui/material";

import { Field, ErrorMessage, Form } from "formik";
import {
  FormControl,
  FormControlLabel,
  Box,
  InputLabel,
  OutlinedInput,
  TextareaAutosize,
  TextField,
  Select,
  useTheme,
  Typography,
} from "@mui/material";


import MenuItem from "@mui/material/MenuItem";


// import './style.css'

const SelectF = (props:any) => {
  const { name, label, options, disabled, values,helperText,withIcon, ...rest } = props;
  const theme = useTheme();
//   const colora = tokens(theme.palette.mode);

  const sxStyle = {
    color: "#fff",
    borderRadius: "4px",
    padding: "8px",
    textAlign: "center",
    width: "100%",
    "& .MuiInputLabel-outlined": { color: "gray !important" },
  };



  return (
    <Field name={name}>
      {({ field, form }:any) => {

        return (
          <FormControl
            size="small"
            sx={sxStyle}
            className="custom-filter custom-filter-data font-num "
          >
            <InputLabel
              id={name}
              variant="outlined"
              className="font-num"
              sx={{
                color: form.errors[name] && form.touched[name] ? "red" : "gray",
                fontSize: "9 rem",
                textAlign: "right",
              }}
              htmlFor={name}
            >
              {label}
            </InputLabel>

            {/*   */}

            <Field
              error={form.errors[name] && form.touched[name]}
              as={Select}
              label={label}
              type={'select'}
              variant="outlined"
              defaultValue={values ? values : ""}
              
            
              
              name={name}
              id={name}
              {...rest}
              size="small"
              disabled={disabled}
            >
              {options &&
                options.map((option:any, index:number) => {
                  return (
                   

                    
                    <MenuItem
                      sx={{ fontSize: "0.7rem", bgcolor: "transparent" }}
                      key={index}
                      value={option?.value}
                    >
                      
                      <Box display={'flex'} 
                    flexDirection={'row-reverse'} 
                    justifyContent={'start'} 
                    alignItems={'center'}>

                       {
                        
                        index===0 && withIcon?<img src={smile} style={{margin:'1px 3px'}} width={'20px'} />:
                        index===1 && withIcon?<img src={meh} style={{margin:'1px 3px'}} width={'20px'} />:
                        index===2 && withIcon?<img src={sad} style={{margin:'1px 3px'}} width={'20px'} />:''
                      }
                       <Typography>
                      {option?.key}
                      </Typography>

                      </Box>
                     
                     

                    </MenuItem>
                   
                    
                  );
                })}
             
            </Field>
            {
                true && <Typography mt={'0.3rem'} color={theme.palette.mode==='dark'?'white':'black'} variant='button' px={1} textAlign={'left'}  ><span>{helperText}</span></Typography>
              }
          </FormControl>
        );
      }}
    </Field>
  );
};

export default SelectF;

/**========================================================================
 *                             javadBoroji  1402/10/10
 *
 *    TODO :props pass values
 *      description:  برای زمانی که بخواهیم به اینپونت های سلکتی vlue پاس دهیم یا ست کنیم
 *
 *
 *========================================================================**/
