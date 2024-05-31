import * as React from 'react';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';

const icon = (
  <Box sx={{width:'100%',height:'50px'}}  >

  </Box>
);

export default function TransitionAccordionLty(props:any) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box sx={{ px:'10px',my:1}}>
      {/* <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      /> */}
   
        <div>
          <Collapse in={props.expanded}>
          {
            props.children
          }
          </Collapse>
         
        </div>
     
   
    </Box>
  );
}
