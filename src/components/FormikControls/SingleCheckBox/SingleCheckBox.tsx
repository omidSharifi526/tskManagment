import React from "react";
import {
  Checkbox,
  Box,
  FormControl,
  FormLabel,
  useTheme,
  FormControlLabel,
  Badge,
  Typography,
} from "@mui/material";
import { Field, Form, ErrorMessage } from "formik";
// import { tokens } from "../../../../theme";
const SingleCheckBox = (props:any) => {
  const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
  const { name, label, value, ...rest } = props;
  const sxStyle = {
    // backgroundColor: '#121212',
    color: "#fff",
    borderRadius: "4px",
    padding: "8px 8px",
    textAlign: "center",
    width: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
  };

  return (
    <Field name={name} {...rest}>
      {({ field }:any) => {
        return (
          <Box sx={sxStyle}>
            {label === "پیش فاکتور" ? (
              <FormLabel sx={{ ml: 1 }} component={Badge} htmlFor={name}>
                <Typography variant="caption">{/* نوع پرداخت : */}</Typography>
              </FormLabel>
            ) : (
              ""
            )}
            <FormControl>
              <Checkbox
                size="small"
                id={name}
                name={name}
                type="checkbox"
                {...field}
                checked={value}
                
                {...(props.changeHandler && {
                  onChange: (e) => props.changeHandler(e.target.checked),
                })}
                sx={{
                  color: 'blue',
                  "&.Mui-checked": {
                    color:'#00387C',
                  },
                }}
              />
            </FormControl>
            <FormLabel component={Badge} htmlFor={name}>
              <Typography variant="caption">{label}</Typography>
            </FormLabel>
          </Box>
        );
      }}
    </Field>
  );
};

export default SingleCheckBox;

/**========================================================================
 *                             user:javadBoroji         1402/10/12
 *
 *        TODO:new props changeHandler   =>  برای دسترسی داشتن به مقدار onchange
 *
 *
 *========================================================================**/
