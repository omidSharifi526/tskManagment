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


export default function MultiSelect(props: any) {
  let { propName } = props;
  // console.log(propName,props.propName)
  const [selected, setSelected] = React.useState([])
  const [loading, setLoading] = React.useState<any>()
  const [top100Films, setTop100Films] = React.useState([{ title: '', year: 0 }])
  React.useEffect(() => {
    setTop100Films(props.options)
    setLoading(props.isLoading)
  }, [props])



  const initialSelectItem = (value: any) => {
    let { onChangee } = props;

    setSelected(value);



    let teamIds = value.map(({ year, title }: any) => {
      return year
    })

    onChangee(propName, teamIds)

  }

  return (
    <FormControl fullWidth sx={{ padding: '8px' }}   >
      <Autocomplete
        multiple
        size='small'
        id="checkboxes-tags-demo"
        options={top100Films}
        disableCloseOnSelect
        value={selected}

        onChange={(e: any, value: any) => {
          initialSelectItem(value)
          
        }}
        getOptionLabel={(option) => option?.title}
        renderOption={(props, option, { selected }) => (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 2 }}
              checked={selected}
            />
            {option?.title}
          </li>
        )}


        renderInput={(params) => (
          <TextField
            {...params}
            label="سطح برگزاری"
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

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

