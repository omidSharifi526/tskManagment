import React,{useEffect,useState} from 'react';
import PeriodSlider from '../../../../components/GlobalComponents/PeriodSlider/PeriodSlider';
// import { useSelector } from 'react-redux';
import { useGetPriodById } from '../../../../components/Login/Hooks/Index';
import {Box,Button,Grid, Typography, BottomNavigationAction,} from '@mui/material';
import { useSelector } from 'react-redux';
//import {LoginState} from '../../components/Login/Types/index'
import MeetingCard from '../../MeetingCard/MeetingCard';
import { useGetAllMeetings } from '../../Hooks';
import CircularProgress from '@mui/material/CircularProgress';
//import Loading from '../../components/Loading/Loading';
import Skeleton from '@mui/material/Skeleton';
// import { useGetAllMeetings } from '../../Hooks';
import { useDispatch } from 'react-redux';
import { setLoadingR } from '../../MeetingsSlice/MeetingsSlice';
import { UseGetWebCheckinMeetingDetailsByMeetingId } from '../../Hooks';
import{useNavigate} from 'react-router-dom';
//import LyBackdrop from '../../components/Layouts/BackDrop/BackDrop';
//import ModalLyt from ' ../../components/Layouts/ModalLyt/ModalLyt';
//import AddMeeting from './LComponents/Forms/AddMeeting/AddMeeting';
import { Link } from 'react-router-dom';
///import DyButton from '../../components/GlobalComponents/DyButton/DyButton';
//import EditMeeting from './LComponents/Forms/EditMeeting/EditMeeting';
//import DYToastMessage from '../../components/GlobalComponents/DyToastMessage/DYToastMessage';
export const AllMeetings = () => {
  //const AllMeetings :React.FC=function(){

    const[showDownloadLink,setShowDownlodLink]=useState<boolean>(false)
    const[meetId,setMeetId]=useState<any>('');
    const[showToastMessage,setShowToastMessage]=useState<boolean>(false);
    const[meetingAsyncState,setMeetingAsyncState]=useState<any|null>(null)
    const [createTenantModal,setCreateTenantModal]=useState<boolean>(false)
    const navigate=useNavigate();
    const getDetSuccess=()=>{
    navigate('/companyTeams',{replace:true})
    }
    const getDetFailed=()=>{
  
    }
    // userPhoneNumber(pin):"09121223615"
  
    const{data:MeetDetData,isLoading:meetLoading,refetch:getAgain}=UseGetWebCheckinMeetingDetailsByMeetingId(getDetSuccess,getDetFailed,meetId);
    const profileTenantId=useSelector((state:any)=>state.meetings.profileTenantId);
    const priodId=useSelector((state:any)=>state.meetings.priodId);
    const userPhoneNumber:string=useSelector((state:any)=>state.loign.userPhoneNumber);
    const{isLoading:meetLoadin,data:meetdata,isFetched}=useGetAllMeetings({tenantId:profileTenantId,priodId:priodId,userPhoneNumber:userPhoneNumber})
    const meetingsDataa=useSelector((state:any)=>state?.meetings?.meetingsList?.meetingsList);
    const periodList=useSelector((state:any)=>state.meetings.periodList);
    const meetingLoadState=useSelector((state:any)=>state?.meetings?.meetingsList);
    const [existData,setExistData]=useState<any>(null);
    const [accessForReport,setAccessForReport]=useState<boolean>(false);
    const[meetingLenght,setMeetingLenght]=useState<Number>(0);
    const[reloadMeetingData,setReloadMeetingData]=useState<boolean>(false);
  
  
    const [showEditMeeting,setshowEditMeeting]=useState<boolean>(false);
    const [meetingId,setMeetingId]=useState<string|null>(null);
    
  
   
  
  
    useEffect(() => {
    
      if (meetdata) {
        let{accessibleForReport}=meetdata;
        setAccessForReport(accessibleForReport)
      }
    // console.log(meetdata)
       },[meetdata]);
  
  
       useEffect(() => {
         if (meetingLoadState!==null) {
         let {meetingsList}=meetingLoadState;
        setExistData(meetingsList)
        setMeetingLenght(meetingsList.length)
        //  console.log(meetingsList.length)
  
         }
       }, [meetingLoadState]);
  
  
       useEffect(() => {
         
       console.log(meetingId)
    
       }, [meetingId])
       
  
  
       
  
  
       
       
  
  
    
  
       const initialCreateMeeting=()=>{
        setCreateTenantModal(!createTenantModal)
       }
  
  
  
  
  
  
  
  
  
   
  
  
    
  
   
  
  
    if (meetLoadin || existData===null || isFetched!==true) {
      return <Box display={'flex'} 
      alignItems={'center'} 
      justifyContent={'center'} 
      width={'100%'} 
      height={'500px'} 
      boxShadow={4} borderRadius={3}>
        <CircularProgress  />
       </Box>
    }

// }
 
// }, [perData])











  return (
<Grid container   >
<Grid item xs={12}   >

  {/* <ImageSelector/> */}
    {/* <PeriodSlider 
    setActiveIndex={setActiveIndex}
    
    activeIndex={perData?.findIndex(item=>item.isCurrent)}
     slideData={perData || []}
     dataLoading={false}
     setPriodId={setPriodId}

    
    /> */}
</Grid>
</Grid>
  )
}
