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
     
      <Grid py={'1rem'}  item  xs={12} md={12} minHeight={'100vh'} mx={'auto'}  borderRadius={2}  >
     <Grid container  >
    
     
     <Grid item xs={12} >
     <Box mx={'auto'}  >
      <Typography fontSize={'25px'} color={'black'} variant='h6' textAlign={'center'}  >لطفا اکانت مورد نظر خود را انتخاب کنید.</Typography>
     </Box>
     </Grid>
  
  
     <Grid item xs={12}  >
     <Box textAlign={'center'} py={2}  >
      <Typography  fontSize={'20px'}
      color={'black'}
      variant='button'>در صورت تمایل بعدا هم میتوانید از طریق پروفایل کاربری،  اکانت خود را تغییر دهید.
      </Typography>
     </Box>
     </Grid>
  
     </Grid>
      </Grid>
  
    )
  }
  
  export default Index