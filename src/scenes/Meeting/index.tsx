import React from 'react';
import {Box,Button,Grid, Typography, BottomNavigationAction,} from '@mui/material';
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
import { UseGetWebCheckinMeetingDetailsByMeetingId } from './Hooks';
import{useNavigate} from 'react-router-dom';
import LyBackdrop from '../../components/Layouts/BackDrop/BackDrop';
import ModalLyt from '../../components/Layouts/ModalLyt/ModalLyt';
import AddMeeting from './LComponents/Forms/AddMeeting/AddMeeting';
import { Link } from 'react-router-dom';
import DyButton from '../../components/GlobalComponents/DyButton/DyButton';
import EditMeeting from './LComponents/Forms/EditMeeting/EditMeeting';
import DYToastMessage from '../../components/GlobalComponents/DyToastMessage/DYToastMessage';
const Meeting :React.FC=function(){

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



  return (
    <Grid container  spacing={1} >
      <Grid item xs={12}    >
                     <Box display={'flex'}  flexDirection={'row-reverse'}>
                    <Box  width={'10%'}  marginRight={2} >
                    <DyButton
                            caption={'ایجاد جلسه'}
                            color={'#00l387C'}
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
 existData && existData.map((data:any,i:number):any=>{
        return (<Grid item md={4} xs={12}  key={i}>

  
          <MeetingCard 
          setMeetId={setMeetId}
          info={data}
          prog={i}  
          accessForReport={accessForReport}
          setShowDownlodLink={setShowDownlodLink}
          setPMeetingId={setMeetingId}
          setshowEditMeeting={setshowEditMeeting}
          showEditMeeting={showEditMeeting}
           
           
           />
          
          
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
            height={700}
            width={900}
            showModal={Boolean(createTenantModal)}
            setShowModal={setCreateTenantModal}
          >
            {/* showToastMessage,setShowToastMessage */}
            <AddMeeting  
            meetingLenght={meetingLenght}
            hideModal={setCreateTenantModal}
            setMeetingAsyncState={setMeetingAsyncState}
            setShowToastMessage={setShowToastMessage}

            // setReloadMeetingData={setReloadMeetingData}
            
            />
          </ModalLyt>

        }

        {
          showDownloadLink && <ModalLyt 
          showModal={Boolean(showDownloadLink)}
          setShowModal={setShowDownlodLink}
          >
           
          <Box width={'100%'} alignItems={'center'}   >
          <Link target='_blank' to={`https://api.myokr.ir/api/Download/ExportMeetingDetails?meetingId=${meetId}`}>دریافت فایل</Link>
          </Box>
          </ModalLyt>
        }

        {
          showEditMeeting && <ModalLyt 
          showModal={showEditMeeting}
          setShowModal={setshowEditMeeting}
          >
          <EditMeeting 
          meetingId={meetingId}
          hideModal={setshowEditMeeting}
          setMeetingAsyncState={setMeetingAsyncState}
            setShowToastMessage={setShowToastMessage}
          />
          </ModalLyt>
        }

        {/* meetingAsyncState,setMeetingAsyncState */}
    {
      showToastMessage && <DYToastMessage
      isSuccess={meetingAsyncState?.isSuccess}
      message={meetingAsyncState?.metaData.message}
      setShow={setShowToastMessage}
      show={showToastMessage}
      
      />
      
      
    }
    </Grid>
  )
}

export default Meeting