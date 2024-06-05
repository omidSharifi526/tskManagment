import React, { useEffect } from 'react';
import {Grid,Box,Typography, IconButton} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
//import { UserProfileTypeCart } from '../../../../components/GlobalComponents/UserProfileTypeCart/UserProfileTypeCart';
import {useState} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
//import {useGetPriodById} from '../../../../components/Login/Hooks/Index';
//import LyBackdrop from '../../../../components/Layouts/BackDrop/BackDrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
//import { setLoadingR } from '../../MeetingsSlice/MeetingsSlice';
import { useDispatch } from 'react-redux';
import { red } from '@mui/material/colors';



const Index = (props:any) => {
    const navigate=useNavigate();
    // console.log(width)
    const dispatch=useDispatch()
    const[tenantId,setTenantId]=useState<string>();
    // useEffect(() => {
      
    //   setLoadingR(false)
     
    // }, [])
  
    const onSuccesss=():void=>{
    
      navigate('/dashboard/meetings',{replace:true})
    }
    
    const onFailed=():void=>{
    
    }
    
  
   
    const[currenPriod,setCurrentPeriod]=useState<object|null>({});
  
    // console.log(priodData)
  
  const userTenantsData=useSelector((state:any)=>state.loign.userInfo.userTenants);
  
  
  
      const initialClose=()=>{
          props.handleClose()
      }
  
  
    return (
    <Grid container>
    {/* <Grid item xs={12}>
    <Box display={'flex'} flexDirection={'row-reverse'} justifyContent={'space-between'} margin={2}>
    <Box width={'500px'} height={'100px'} bgcolor={'gray'} marginTop={4}>
    </Box>
    <Box width={'500px'} height={'100px'} bgcolor={'gray'} marginTop={4}>
    </Box>
    </Box>
    </Grid>
    <Grid item xs={12} >
    <Box display={'flex'}  flexDirection={'row-reverse'} justifyContent={'space-between'} margin={2}>
    <Box width={'500px'} height={'150px'} bgcolor={'red'} marginTop={4} >
    </Box>
    <Box width={'500px'} height={'150px'} bgcolor={'blue'} marginTop={4}>
    </Box>
    </Box>
    </Grid>
    <Grid item xs={12}>
    <Box display={'flex'} flexDirection={'row-reverse'} justifyContent={'space-between'} margin={2}>
    <Box width={'280px'} height={'150px'} bgcolor={'red'} marginTop={4}>
    </Box>
    <Box width={'280px'} height={'150px'} bgcolor={'blue'} marginTop={4}>
    </Box>
    <Box width={'280px'} height={'150px'} bgcolor={'yellow'} marginTop={4}>
    </Box>
    </Box>
    </Grid> */}
    </Grid>
    )
  }
  
  export default Index