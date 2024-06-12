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
  const[imgSrc,setImgSrc]=useState<any>(null);
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



useEffect(() => {
    
  if (item) {
    setImgSrc(item?.pictureBase64String)
  }
    }, [item])


  return (
    <Grid item xs={3} mx={'auto'}  md={6} p={2} onClick={()=>{
      handleClickCart()
    }}    >
    
    <Box  borderRadius={18} bgcolor={'rgba(0, 0, 0, 0.10)'}  boxShadow={3} sx={{cursor:'pointer'}} >
   
    <Box py={3} display={'flex'} flexDirection={'column'} justifyContent={'center'}    >
    <Box  display={'flex'} alignItems={'center'}width={'100%'} height={'120px'} justifyContent={'center'} 
  textAlign={'center'}  >
 <img src={imgSrc} width={'25%'} 
        // style={{borderRadius:'10%',boxShadow:'20px'}}
         />
 </Box>
    <Box  display={'flex'} flexDirection={'column'}  
       textAlign={'center'}  >
 <Typography fontSize={'18px'} fontWeight={600} variant='caption'  >
  
    {item.tenantName}
 </Typography>
 </Box>

    </Box>
    </Box>
 
    </Grid>
  )
}


      