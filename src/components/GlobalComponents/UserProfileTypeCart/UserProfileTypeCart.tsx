import React, { useEffect,useState } from 'react';
import {Box, Typography} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import {useGetAllMeetings} from '../../../scenes/Meeting/Hooks/index';
import{setProfileTenantIdR} from '../../../scenes/Meeting/MeetingsSlice/MeetingsSlice'
import { useDispatch } from 'react-redux';

export const UserProfileTypeCart = (props:any) => {
  const dispatch=useDispatch();
  const [meetinsIds,setMeetingsIds]=useState<any>(null)
  // const{data:meetingData}=useGetAllMeetings(meetinsIds);
  let{setTenantId}=props
  const navigate=useNavigate();
  let{item}=props;

const handleClickCart=()=>{
  console.log(item.tenantId)
  setTenantId(item.tenantId);
  dispatch(setProfileTenantIdR(item.tenantId))

  // setMeetingsIds({tenantId:item.tenantId,priodId:props.priodsIds.priodId})


  // navigate('/dashboard',{replace:true})
}
const initialComponentRendred=():void=>{
// console.log('priodsData',props.priodsData)
// console.log(props?.priodsIds)
}

useEffect(() => {

initialComponentRendred()

},[props.priodsIds])

useEffect(() => {
  console.log(meetinsIds)
//  console.log(meetingData)
}, [meetinsIds])






  return (
    <Box onClick={handleClickCart} width={'150px'} height={'120px'} borderRadius={3} sx={{cursor:'pointer'}}  border={1} borderColor={'gray'} bgcolor={'#C8CCD0'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}  >
    <Box>
    <AccountCircleIcon fontSize='large' />
    </Box>
    <Typography color={'black'} fontWeight={600} variant='caption'  >
    {item.tenantName}
    </Typography>
    </Box>
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