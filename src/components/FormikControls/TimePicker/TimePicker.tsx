import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { FormControl } from '@mui/material';
import { Field } from 'formik';
import {TextField} from '@mui/material';


import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

export default function TimePickerF(props:any) {
  const { name, label, ...rest } = props;
  const [value, setValue] = React.useState<string | null>('');
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


  const mStyle={
    "& .muirtl-nxo287-MuiInputBase-input-MuiOutlinedInput-input":{
      // padding:'0px 4px  14px !important'
    }
  }

  return (

<>


<Field name={name}>
      {({ form, field }:any) => {
  
        const { setFieldValue } = form;
        const { value } = field;
        return (
        //   <FormControl sx={sxStyle}>
        //     <DatePicker
        //      defaultValue={dayjs('2022-04-17')}
        //       disabled={props.disable?props.disable:false}
        //  sx={{
        //     color:'red',
        //     "& .muirtl-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
        //         padding:'8.5px  14px !important'
        //     }
        //     ,
        //  }}
        //       disableMaskedInput
        //       label={label}
        //       id={name}
          
        //       {...field}
        //       {...rest}
        //       size="small"
        //       fullwidth
        //       onChange={(newValue:any) => {
        //         console.log(newValue)
        //         setFieldValue(name, JSON.stringify(newValue));
        //       }}
        //     //   renderInput={(params:any) => <TextField size="small" {...params} />}
        //     />
        //   </FormControl>
       
          <FormControl sx={sxStyle}   >
            <TimePicker
            ampm={false}
            slotProps={{ textField: { size: 'small' } }}
            sx={mStyle}
          label={label}
          // renderInput={(params:any) => <TextField size="small" {...params} />}
          // value={value}
          onChange={(newValue:any) => {
            setValue(newValue)
            var hour = newValue.getHours();
            var minute = newValue.getMinutes();
            var time_str = ("0" + hour).slice(-2) + ":" + ("0" + minute).slice(-2);
            // console.log(minute,hour)
           setFieldValue(name,time_str)
        
          }}
        />
          </FormControl>
          
        );
      }}
    </Field>

        
</>

    
  );
}