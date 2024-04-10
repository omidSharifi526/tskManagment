import React from 'react';
import {Box,Button,Grid, Typography,} from '@mui/material';
import { useSelector } from 'react-redux';
import {LoginState} from '../../components/Login/Types/index'
import MeetingCard from './MeetingCard/MeetingCard';
import { useState,useEffect } from 'react';
import { useGetAllMeetings } from './Hooks';
import CircularProgress from '@mui/material/CircularProgress';
import Loading from '../../components/Loading/Loading';
import Skeleton from '@mui/material/Skeleton';
import { useDispatch } from 'react-redux';
import { setLoadingR } from './MeetingsSlice/MeetingsSlice';
// import { useGetAllMeetings } from './Hooks';
import { UseGetWebCheckinMeetingDetailsByMeetingId } from './Hooks';
import{useNavigate} from 'react-router-dom';
import LyBackdrop from '../../components/Layouts/BackDrop/BackDrop';
import ModalLyt from '../../components/Layouts/ModalLyt/ModalLyt';
import AddMeeting from './LComponents/Forms/AddMeeting/AddMeeting';
import DyButton from '../../components/GlobalComponents/DyButton/DyButton';

// import 



const Meeting :React.FC=function(){
  const[meetId,setMeetId]=useState<any>('');
  const [createTenantModal,setCreateTenantModal]=useState<boolean>(false)
  const navigate=useNavigate();
  const getDetSuccess=()=>{
  navigate('/companyTeams',{replace:true})
  }
  const getDetFailed=()=>{

  }

  const{data:MeetDetData,isLoading:meetLoading}=UseGetWebCheckinMeetingDetailsByMeetingId(getDetSuccess,getDetFailed,meetId);
//  const{isLoading:meetLoadin,data:meetdata}=useGetAllMeetings(null)
  const profileTenantId=useSelector((state:any)=>state.meetings.profileTenantId);
  const changeTenant=useSelector((state:any)=>state.meetings.profileTenantId);
  // const{data:meetingData,isLoading,isError}=useGetAllMeetings({});
  const[userTenants,setUserTenants]=useState<any[]>()
  const meetingsDataa=useSelector((state:any)=>state?.meetings?.meetingsList?.meetingsList);
  const[meetingCardData,setMeetingCardData]=useState(meetingsDataa)
  const[LoadingFlag,setLoadinFlag]=useState<boolean>(false);
  // const{data:meetData,isLoading:meetLoad,refetch:getMeetingAgain}=useGetAllMeetings(profileTenantId)
  

  const loading=useSelector((state:any)=>state.meetings.loading);
  const dispatch=useDispatch();

  useEffect(() => {
  
    setTimeout(() => {
     dispatch(setLoadingR(false))
    }, 5000);
     },[loading,meetingsDataa]);
  

     const initialCreateMeeting=()=>{
      setCreateTenantModal(!createTenantModal)
     }


 if (meetLoading) {
   return <LyBackdrop visible={true}  >
     <CircularProgress sx={{color:'white'}}  />
   </LyBackdrop>
 }

 


  

  // if (meetingsDataa?.length==0) {
  // return (
  //   <Box sx={{ display: 'flex',alignItems:'center',justifyContent:'center',height:'100%',width:'100%' }}>
  //   <Typography>
  //     در این دوره جلسه ایی وجود ندارد
  //   </Typography>
  //   </Box>
  // )
  // }


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
      <Grid item xs={12}    >
                     <Box display={'flex'}  flexDirection={'row-reverse'}>
                    <Box width={'150px'}   >
                    <DyButton
                            caption={'ایجاد جلسه'}
                            color={'#00387C'}
                            // onClick={loginHandler}
                            disbled={false}
                            variant={'contained'}
                            bgColor={'#00387C'}
                            onClick={initialCreateMeeting}
                            // type={'submit'}
                          />
                    </Box>
                     </Box>
      </Grid>
    
   {
 meetingsDataa && meetingsDataa.map((data:any,i:number):any=>{
        return (<Grid item md={3} xs={12}  key={i}>

  
          <MeetingCard 
          setMeetId={setMeetId}
          info={data}
           prog={i}   />
          
          
          </Grid>)
      })
    }

    {/* {
      meetingsDataa?.length==0 && <Box sx={{ display: 'flex',alignItems:'center',justifyContent:'center',height:'100%',width:'100%' }}>
      <Typography>
        در این دوره جلسه ایی وجود ندارد
      </Typography>
      </Box>
    } */}

       {
          createTenantModal &&
          <ModalLyt title={'ایجاد جلسه'}
            showModal={Boolean(createTenantModal)}
            setShowModal={setCreateTenantModal}
          >
            <AddMeeting  
            hideModal={setCreateTenantModal}
            
            />
          </ModalLyt>

        }

        {/* {
          loading && <Box display={'flex'} 
          alignItems={'center'} 
          justifyContent={'center'} 
          width={'100%'} 
          height={'500px'} 
          boxShadow={4} borderRadius={3}>
            <CircularProgress  />
           </Box>
        } */}
   
    </Grid>
  )
}

export default Meeting