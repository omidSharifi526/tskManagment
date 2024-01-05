import React, { useState } from 'react';
import { Tabs, Tab, Typography, Box, Grid } from '@mui/material';


const DyTabs = ({ tabs,tabIndex }:any) => {
  const [value, setValue] = useState(0);

  const handleChange = (event:any, newValue:any) => {
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <Grid bgcolor={'#F9F9F9'} px={1} minHeight={'100vh'}   >
      <Tabs value={value} onChange={handleChange} sx={{padding:'0px !important'}}>
        {tabs.map((tab:any, index:number) => (
          <Tab key={index} label={tab.label} />
        ))}
      </Tabs>
      {tabs.map((tab:any, index:number) => (
        <Grid width={'100%'} item md={12} xs={12} key={index} hidden={value !== index} >
          {tab.content}
        </Grid>
     
      ))}
    </Grid>
  );
};
export default DyTabs