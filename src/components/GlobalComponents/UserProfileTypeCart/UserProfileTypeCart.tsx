import React, { useEffect,useState } from 'react';
import {Box, Typography,Grid} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import {useGetAllMeetings} from '../../../scenes/Meeting/Hooks/index';
import{setProfileTenantIdR,setProfileNameR} from '../../../scenes/Meeting/MeetingsSlice/MeetingsSlice'
import { useDispatch } from 'react-redux';


export const UserProfileTypeCart = (props:any) => {
  
  const dispatch=useDispatch();
  const [meetinsIds,setMeetingsIds]=useState<any>(null)
  // const{data:meetingData}=useGetAllMeetings(meetinsIds);
  let{setTenantId}=props
  const navigate=useNavigate();
  let{item,tenantName}=props;
  // console.log(item)

const handleClickCart=()=>{
  // console.log(item.tenantId)
  setTenantId(item.tenantId);
// console.log(item)


  dispatch(setProfileTenantIdR(item))

}
const initialComponentRendred=():void=>{
// console.log('priodsData',props.priodsData)
// console.log(props?.priodsIds)
}

useEffect(() => {

initialComponentRendred()

},[props.priodsIds])

useEffect(() => {
  // console.log(meetinsIds)
//  console.log(meetingData)
}, [meetinsIds])






  return (
    <Grid item xs={3} mx={'auto'}  md={6} py={2} onClick={()=>{
      handleClickCart()
    }}    >
    
    <Box  borderRadius={2} boxShadow={3} sx={{cursor:'pointer'}}  border={2} borderColor={'black'} bgcolor={'#a4a5a6'} >
   
    <Box py={4}  display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
    <AccountCircleIcon fontSize='large' />
    <Box bgcolor={' #cccdcf'} borderRadius={1} width={'100%'} margin={1}  textAlign={'center'} minHeight={'40px'} >
 <Typography fontSize={'20px'} fontWeight={900} variant='caption'  >
    {item.tenantName}
 </Typography>
 </Box>
    </Box>
    </Box>
 
    </Grid>
  )
}


      