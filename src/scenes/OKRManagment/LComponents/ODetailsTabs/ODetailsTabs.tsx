import React, { useState,useEffect,lazy,Suspense } from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import {Grid,Box,Typography} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ObjKrs from '../ObjKrs/ObjKrs';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


// ODetailsTabs

const ODetailsTabs=({krs}:any)=>{
  
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
  const[activeKrs,setActiveKrs]=useState<any[]>([]);

  useEffect(() => {
    
    if (krs) {
        let activeKrs=krs.filter((item:any)=>item.okrStateName==='فعال');
        setActiveKrs(activeKrs)
    }
  
   
  }, [krs])
  

  

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
      <Tab label="فعال" {...a11yProps(0)} />
      <Tab label="پیش نویس" {...a11yProps(1)} />
      <Tab label="بسته" {...a11yProps(2)} />
   
    </Tabs>
  </Box>

  
  <CustomTabPanel value={value} index={0}>
    <Suspense fallback={<Box width={'100%'} pt={5} textAlign={'center'} py={5}  ><CircularProgress/></Box>}  >
   <ObjKrs krs={activeKrs}  />
      

    </Suspense>
  </CustomTabPanel>


  <CustomTabPanel value={value} index={1}>
  <Suspense fallback={<Box width={'100%'} pt={5} textAlign={'center'} py={5}  ><CircularProgress/></Box>}  >

<h1>پیش نویس</h1>
    </Suspense>
  </CustomTabPanel>

  <CustomTabPanel value={value} index={2}>
  <Suspense fallback={<Box width={'100%'} pt={5} textAlign={'center'} py={5}  ><CircularProgress/></Box>}  >
  <h1>بسته</h1>

    </Suspense>
  </CustomTabPanel>





</Box>





</Grid>
      </Grid>
    </>
  )
}

export default ODetailsTabs