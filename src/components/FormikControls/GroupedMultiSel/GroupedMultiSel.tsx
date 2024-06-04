import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FormControl } from '@mui/material';
import {useEffect,useState} from 'react'

export default function Grouped({data,setSpecialIds}:any) {
    const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
    const options = data.reduce((acc: any, group: any) => {
        const groupOptions = group.items.map((item: any) => ({
          ...item,
          gName: group.gName,
          id: `${item.id}`,
        }));
        return [...acc, ...groupOptions];
      }, []);

      const handleChange = (event: any, value: any) => {
        setSelectedOptions(value);
      };

      useEffect(() => {
        
        setSpecialIds(selectedOptions.map(({id})=>id))
    //    console.log(selectedOptions)
      }, [selectedOptions])

      const filteredOptions = options.filter(
        (option: any) => !selectedOptions.find((selected: any) => selected.id === option.id)
      );
      


  return (
<FormControl fullWidth sx={{padding:'8px'}}  >
<Autocomplete
    fullWidth
    size='small'
      id="grouped-demo"
      multiple
      options={filteredOptions}
      groupBy={(option:any) => option.gName}
      getOptionLabel={(option: any) => option.name}
      onChange={handleChange}
    
      renderInput={(params) => <TextField {...params} label="همسویی عمودی" />}
    />
</FormControl>
  );
}



