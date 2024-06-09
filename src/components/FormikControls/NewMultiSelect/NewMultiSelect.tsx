import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { CircularProgress, FormControl } from '@mui/material';
import { useEffect, useState } from 'react';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


export default function NewMultiSelect(props: any) {
  let { propName,disabled,label,options,selectedItems,setHorizontalAlignments}:any = props;
  // console.log(propName,props.propName)
  const [selected, setSelected] = React.useState<any>([])
  const [loading, setLoading] = React.useState<any>()
  const [top100Films, setTop100Films] = React.useState<any>([])
  React.useEffect(() => {
    setTop100Films(options)
    setLoading(props.isLoading)
  }, [props])

  useEffect(() => {
    if (selectedItems) {
      setSelected(selectedItems)

    }
  
   
  }, [selectedItems])

  useEffect(() => {
    // console.log(selectedItems)
    setHorizontalAlignments(selectedItems)
  }, [selectedItems])
  

  useEffect(() => {
    
  // console.log(selected,selectedItems)
  
  }, [selected])
  

  
  



  const initialSelectItem = (value: any) => {
    // let { onChangee } = props;
    // setHorizontalAlignments(value)
    setSelected(value);
    // console.log(value)





  }

  return (
    <FormControl fullWidth sx={{ padding: '8px' }}   >
      <Autocomplete
        multiple
        size='small'
        id="checkboxes-tags-demo"
        options={options}
        disableCloseOnSelect
        value={selected}
        disabled={disabled}

        onChange={(e: any, value: any) => {
          // console.log(value)
          initialSelectItem(value)
          
        }}
        getOptionLabel={(option) => option.key}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 2 }}
              checked={selected}
            />
            {option?.key}
          </li>
        )}


        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? <CircularProgress color="info" size={20} /> : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}

      />
    </FormControl>
  );
}


