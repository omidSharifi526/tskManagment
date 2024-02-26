import React from "react";

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
  const { name, label, options, disabled, values, ...rest } = props;
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
                      {option?.key}
                    </MenuItem>
                  );
                })}
            </Field>
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
