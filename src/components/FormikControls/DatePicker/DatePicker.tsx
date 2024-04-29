import React, { useState } from "react";
import moment from "jalali-moment";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import "./Dp_style.css";
import { Field, Form, ErrorMessage } from "formik";
import {
  Box,
  TextField,
  InputAdornment,
  FormControl,
  Typography,
  useTheme,
  InputLabel,
} from "@mui/material";

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AdapterJalaali from "@date-io/jalaali";
// import { tokens } from "../../../../theme";
import dayjs from "dayjs";

const DateTimePicker = (props:any) => {
  const { name, label, ...rest } :any= props;
  const theme = useTheme();
//   const colors = tokens(theme.palette.mode);


  const sxStyle = {
    fontFamily: "yekan !important ",
    borderRadius: "4px",
    width: "100%",
    textAlign: "center",
    padding: " 8px",
    "& .muirtl-aqwd4r-MuiFormLabel-root-MuiInputLabel-root": {
      color: 'red',
    },
    
    
  };

  return (
    <Field name={name}>
      {({ form, field }:any) => {
  
        const { setFieldValue } = form;
        const { value } = field;
        return (
          
          <FormControl sx={sxStyle}>
            <DatePicker
            slotProps={{ textField: { size: 'small' } }}
            // value={value}
            //  defaultValue={dayjs('2022-04-17')}
              // disabled={props.disable?props.disable:false}
         sx={{
            color:'red',
            "& .muirtl-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
                // padding:'18px  10px !important'
            }
            ,
         }}
              // disableMaskedInput
              label={label}
              // id={name}
          
              // {...field}
              // {...rest}
             
              
              onChange={(newValue:any) => {
                // console.log(newValue)
                var persianDate = moment(newValue).format('jYYYY/jM/jD');
                // console.log(persianDate)
                // console.log(newValue.toString())
                setFieldValue(name,persianDate);
              }}
            //   renderInput={(params:any) => <TextField size="small" {...params} />}
            />
          </FormControl>
       
        );
      }}
    </Field>
  );
};

export default DateTimePicker;

/**========================================================================
 *                             user:javadBoroji         1402/10/12
 *  
 *        TODO:new props disable   =>  for disabled  input
 *  
 *  
 *========================================================================**/
