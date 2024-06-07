import * as React from 'react';


import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Box, ListItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
// import { setSepcialUnitR } from '../../OrderSlice/OrderSlice';
import { useState, useEffect } from 'react';



export default function MultiSel({ data:pData, extractTag, tagSelected, editMode,length,label }:any) {
  const [selected, setSelected] = useState<any>(tagSelected || []);
  const[data,setData]=useState<any[]>(pData)
  // console.log(data)

  const menuItemStyle = {
    fontSize: '0.7rem',
    backgroundColor: 'transparent',
    fontFamily: 'yekan !important'
  }
  useEffect(() => {
    extractTag(selected)

  }, [selected]);

  useEffect(() => {

    


    if (editMode) {
      // console.log(data, tagSelected)
      // console.log(tagSelected)
      setSelected(tagSelected)
      // const filteredList: string[] = data.filter(uuid => !tagSelected.has(uuid));
      // setData(filteredList)
    }

  }, [editMode,tagSelected]);


  
  

  

  const sxStyle = {
    fontSize: '15rem !important',
    fontFamily: 'yekan !important ',
    '& .muirtl-6od3lo-MuiChip-label': { fontFamily: 'yekan !important' }


  }

//   const[multiValue,setMultiValue]=useState([])





  const dispatch = useDispatch()

  return (

    <Autocomplete
    fullWidth
      size='small'
      multiple={true}
      sx={{ fontFamily: 'yekan !important', '& .muirtl-6od3lo-MuiChip-label': { fontFamily: 'yekan', fontSize: '0.7rem' }, '& .MuiAutocomplete-hasPopupIcon.MuiAutocomplete-hasClearIcon.muirtl-15rklqy-MuiAutocomplete-root .MuiOutlinedInput-root': { padding: '0px !important' } }}
      id="tags-outlined"

      value={selected}
     


      options={data || []}
      getOptionLabel={(option:any) => option.key}
      isOptionEqualToValue={(option:any, value:any) => option.value === value.value}
      // defaultValue={unitData[1]}

      filterSelectedOptions
      onChange={(_, data) => {
        // setMultiValue(data)
        // console.log(data)
        setSelected(data)
      }}
      renderOption={(props, option) => (
        <ListItem sx={menuItemStyle} {...props}>{option.key}&nbsp;&nbsp;&nbsp;</ListItem>
      )}






      renderInput={(params:any) => (
        <TextField
          InputProps={{ style: { fontSize: 50 } }}
          {...params}
          label={label}
          size='small'
        />
      )}

      // clearOnBlur={true}



    />




  );
}
