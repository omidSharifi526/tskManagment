import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MeetingSlider from '../MeetingSlider/MeetingSlider';
import DySearchAppBar from '../../../../components/GlobalComponents/DySearchBar/DySearchBar';
import LyBackdrop from '../../../../components/Layouts/BackDrop/BackDrop';
import UserTypeSelection from '../UserTypeSelection/UserTypeSelection';
import {useState,useEffect} from 'react';
import AddMeeting from '../Forms/AddMeeting/AddMeeting';

import Meeting from '../..';
import { Grid } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function MeetingTabsContainer(props: TabPanelProps) {


  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const[showBackDrop,setShowBackDrop]=useState(true)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
<Grid container>
    <Grid item xs={12} md={10} mx={'auto'} >
    <Box>
    <MeetingSlider/>
    </Box>
    </Grid>


    
    <Box sx={{ width: '100%' }}>
       

      <Box sx={{ borderBottom: 1, borderColor: 'transparent',display:'flex',justifyContent:'space-between'}}  >
        
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="جلسات همه" {...a11yProps(0)} />
          <Tab label="جلسات من" {...a11yProps(1)} />
          {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
        </Tabs>

       

        <Box>
            <DySearchAppBar/>
        </Box>
        
      </Box>

      <MeetingTabsContainer value={value} index={0}>
      <Box>
      <Meeting/>
      </Box>
      </MeetingTabsContainer>


      <MeetingTabsContainer value={value} index={1}>
      <AddMeeting/>
      </MeetingTabsContainer>

    </Box>
    </Grid>

  );
}


