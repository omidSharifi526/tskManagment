import React from 'react';
import {Box,Grid, Typography,} from '@mui/material';
import { useSelector } from 'react-redux';
import {LoginState} from '../../components/Login/Types/index'
import MeetingCard from './MeetingCard/MeetingCard';
import { useState,useEffect } from 'react';
import { useGetAllMeetings } from './Hooks';
import CircularProgress from '@mui/material/CircularProgress';
import Loading from '../../components/Loading/Loading';
import Skeleton from '@mui/material/Skeleton';


const Meeting :React.FC=function(){
  let scletList=['1','2','3','4','5','6','7','8','9','10']
  const profileTenantId=useSelector((state:any)=>state.meetings.profileTenantId);
  const{data:meetingData,isLoading,isError}=useGetAllMeetings({});
  const[userTenants,setUserTenants]=useState<any[]>()
  const meetingsDataa=useSelector((state:any)=>state?.meetings?.meetingsList?.meetingsList);
  const[LoadingFlag,setLoadinFlag]=useState<boolean>(false);

  const loading=useSelector((state:any)=>state.meetings.loading);

// console.log(meetingData)

  useEffect(() => {
  //  console.log(isLoading)
  //   // setUserTenants(meetingData)
  //  setLoadinFlag(true)
  //  setTimeout(() => {
  //   setLoadinFlag(false)
  //  }, 2);
  // console.log(meetingsDataa)
  setLoadinFlag(true)
  }, [meetingsDataa])
  
  setTimeout(() => {
    setLoadinFlag(false)
  }, 2000);

  // if (loading) {
  //   return (
  //     <Box sx={{ display: 'flex',alignItems:'center',justifyContent:'center',height:'100%',width:'100%' }}>
  //       <CircularProgress />
  //     </Box>
  //   );
  // }

  if (meetingsDataa?.length==0) {
  return (
    <Box sx={{ display: 'flex',alignItems:'center',justifyContent:'center',height:'100%',width:'100%' }}>
    <Typography>
      در این دوره جلسه ایی وجود ندارد
    </Typography>
    </Box>
  )
  }
  if (loading) {
    return <Box display={'flex'} 
    alignItems={'center'} 
    justifyContent={'center'} 
    width={'100%'} 
    height={'500px'} 
    boxShadow={4} borderRadius={3}>
      <CircularProgress  />
     </Box>
  }



  return (
    <Grid container  spacing={1} >
    
   {
       meetingsDataa && meetingsDataa?.map((data:any,i:number):any=>{
        return (<Grid item md={3}  key={i}>

  
          <MeetingCard info={data} prog={i}   />
          
          
          </Grid>)
      })
    }
   
    </Grid>
  )
}

export default Meeting