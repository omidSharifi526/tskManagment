import React, { useState,useEffect,lazy,Suspense } from 'react';
import PeriodSlider from '../../components/GlobalComponents/PeriodSlider/PeriodSlider';
import { useSelector } from 'react-redux';
import { useGetPriodById } from '../../components/Login/Hooks/Index';
import InviteUser from './Copmonents/InviteUser/InviteUser';
import CircularProgress from '@mui/material/CircularProgress';
import {Grid,Box,Typography} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TenantInfo from './Copmonents/TenantInfo/TenantInfo';
import Teams from './Copmonents/Teams/Teams';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}




const Index :React.FC=function(){
 
  const [value, setValue] = React.useState(0);
  function CustomTabPanel(props: TabPanelProps) {
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
          <Box >
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



  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  
  
  
  
  return (
    <>
      <Grid container   >
      <Grid item xs={12} md={12}  >

<Box sx={{ width: '100%' }}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
      <Tab label="پرسنل" {...a11yProps(0)} style={{color:'black', fontWeight:'700'}}/>
      <Tab label="تیم" {...a11yProps(1)}  style={{color:'black', fontWeight:'700'}} />
      <Tab label="اطلاعات شرکت" {...a11yProps(2)}  style={{color:'black', fontWeight:'700'}} />
   {/* */}
    </Tabs>
  </Box>

  
  <CustomTabPanel value={value} index={0}>
    <Suspense fallback={<Box width={'100%'} pt={5} textAlign={'center'} py={5}  ><CircularProgress/></Box>}  >
  <InviteUser/>
    </Suspense>
  </CustomTabPanel>
  

  <CustomTabPanel value={value} index={1}>
  <Suspense fallback={<Box width={'100%'} pt={5} textAlign={'center'} py={5}  ><CircularProgress/></Box>}  >
   <Teams/>
    </Suspense>
  </CustomTabPanel>

  <CustomTabPanel value={value} index={2}>
  <Suspense fallback={<Box width={'100%'} pt={5} textAlign={'center'} py={5}  ><CircularProgress/></Box>}  >
   <TenantInfo/>
    </Suspense>
  </CustomTabPanel>





</Box>





</Grid>
      </Grid>
    </>
  )
}

export default Index