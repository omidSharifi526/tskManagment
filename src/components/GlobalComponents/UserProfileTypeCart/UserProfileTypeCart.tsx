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
    <Grid item xs={9} mx={'auto'}  md={3} py={2}  onClick={()=>{
      handleClickCart()
    }}    >
    <Box  borderRadius={3} sx={{cursor:'pointer'}}  border={1} borderColor={'gray'} bgcolor={'#C8CCD0'} >
    <Box py={3}  display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
    <AccountCircleIcon fontSize='large' />
    <Box  width={'100%'} textAlign={'center'} minHeight={'50px'} >
 <Typography  fontWeight={600} variant='caption'  >
    {item.tenantName}
 </Typography>
 </Box>
    </Box>
    </Box>
 
    </Grid>
  )
}



// import{login} from '../Api/index';
// import {setUserDataR} from '../LoginSlice/LoginSlice';
// import { useDispatch } from 'react-redux';
// const useLogin = () => {
//     const dispatch=useDispatch();
//     
//     const queryClient = useQueryClient();
//     queryClient.setMutationDefaults(["Login-user"], 
//     {
//       mutationFn: (data:any) => login(),
//       onSuccess: (data) => {
//         // console.log(data.data.data);
//         let userData=data?.data.data
//         dispatch(setUserDataR(userData))
//         