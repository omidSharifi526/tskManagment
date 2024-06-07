import React, { useEffect } from 'react';
import {Grid,Box,Typography, IconButton} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useGetMyKeyResultByTenantId,
  useGetMyMeetingByTenantId,
  useGetMyObjectiveByTenantId
 } from '../../Hooks/index';
import {useState} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { red } from '@mui/material/colors';
import OCart from '../OCart/OCart';
import KrCart from '../KrCart/KrCart';
import {ReactComponent as PersonIcon} from '../../../../components/Dashboard/StaticsData/Icons/Person1.svg';
import MeetCart from '../MeetCart/MeetCart';
import DYToastMessage from '../../../../components/GlobalComponents/DyToastMessage/DYToastMessage';


const AllTenantDash = (props:any) => {
  let{obj,periodId,data,setShowEditForm}=props;
    //let{name,jobName,tenantName,score,evaluation}=data;
    const navigate=useNavigate();
    const[allObjective,setAllObjective]=useState<any[]>()
    const[allKeyResult,setAllKeyresult]=useState<any[]>()
    const[allMeeting,setAllMeeting]=useState<any[]>()
    const[showToastMessage,setShowToastMessage]=useState<boolean>(false);
    const [showAddObjective, setShowAddObjective] = useState<boolean>(false);
    const tenantId:string=useSelector((state:any)=>state.meetings.profileTenantId);
    const{data:objetcideData,isLoading:getObjectiveLoading,isError,isFetched,refetch:getObjectivesAgain}
    =useGetMyObjectiveByTenantId(periodId,tenantId)
    const{data:keyresultData,isLoading:getKeyresultLoading}
    =useGetMyKeyResultByTenantId(periodId,tenantId)
    const{data:meetingData,isLoading:getMeetingLoading}
    =useGetMyMeetingByTenantId(periodId,tenantId)
    const[showEditObjective,setShowEditObjective]=useState<Boolean|null>(false);
    const[objectiveAsynOpcState,setObjectiveAsyncOpState]=useState<any>(null);
    const dispatch=useDispatch()
    const [objectiveId,setObjectiveId]=useState<string|null>(null);
    const onSuccesss=():void=>{
      navigate('/dashboard/meetings',{replace:true})
    }
    
    const onFailed=():void=>{
    
    }
    
  
   
    const[currenPriod,setCurrentPeriod]=useState<object|null>({});
  

  
  const userTenantsData=useSelector((state:any)=>state.loign.userInfo.userTenants);
  
  const initialAddObjective = (): void => {
    setShowAddObjective(prev => !prev)
  }

  useEffect(() => {

    setAllObjective(objetcideData)

  }, [objetcideData])


  useEffect(() => {

    setAllKeyresult(keyresultData)

  }, [keyresultData])

  
  useEffect(() => {

    setAllMeeting(meetingData)

  }, [meetingData])

      const initialClose=()=>{
          props.handleClose()
      }
  
  
    return (
    <Grid container>

    <Grid item xs={12} >
    <Box display={'flex'} marginTop={2} flexDirection={'row-reverse'} justifyContent={'space-around'}>
    <Box>
    <PersonIcon width={'35px'} height={'35px'}  />
     <Typography   variant='body1' fontSize={'15px'} fontWeight={900} >
      {data?.name}
     <Typography variant='body1' fontSize={'15px'} fontWeight={900} >
    {data?.jobName}

    </Typography>
    </Typography>
    </Box>
    <Box display={'flex'}  marginTop={2} flexDirection={'row-reverse'}   justifyContent={'center'} >

    <Box width={'180px'}  margin={2}  height={'60px'} boxShadow={5} borderRadius={5} >
    <Typography variant='body1'  textAlign={'center'} fontSize={'14px'} fontWeight={900}>
     درصد امتیاز من در دوره: <Typography>{data?.score}</Typography>
    </Typography>
    </Box>
    <Box width={'180px'}  margin={2} height={'60px'}  boxShadow={5} borderRadius={5}  >
    <Typography variant='body1' textAlign={'center'} fontSize={'14px'} fontWeight={900}>
     درصد ارزیابی من در دوره:<Typography>{data?.evaluation}</Typography>
    </Typography>
    </Box>
    </Box>
    <Box>
      
    <PersonIcon width={'35px'} height={'35px'}  />
    <Typography    variant='body1'fontSize={'15px'} fontWeight={900} >
      {data?.tenantName}
    </Typography> 
    
    </Box>
    </Box>
    </Grid>
    

    <Grid item xs={12} >
    <Box width={'110px'}  height={'28px'} margin={2}  justifyContent={'center'} bgcolor={'#00387C'} borderRadius={5}>
    <Typography fontSize={'20px'} color={'white'}  marginTop={3} marginLeft={1} fontWeight={900}>
      جلسات من
    </Typography>
   </Box>
    <Grid item xs={12}>
        {
       meetingData?.length===0 && <Grid item xs={12}>
         <Box width={'100%'} textAlign={'center'} p={2}   >
           <Box>
             <Typography textAlign={'center'} fontWeight={500} fontSize={'18px'} variant='body2'   >
               جلسه ای در این دوره‌‌زمانی تعریف نشده است.
             </Typography>
           </Box>
         </Box>
       </Grid>
       }
       </Grid>
   <Grid item xs={12}  >
         
         <Grid container spacing={1}  px={1} >

        {
         meetingData && meetingData.map((o:any,i:number)=>{
           return <Grid  item xs={12} sm={4}  >
             <Box width={'100%'} key={i}  >
             <MeetCart obj={o}   
             setShowToastMessage={setShowToastMessage}
             afterSuccess={getObjectivesAgain}
             item={o}
             setShowEditForm={setShowEditObjective}
             setObjectiveAsyncOpState={setObjectiveAsyncOpState}
             />
           </Box>
           </Grid>
         })
       }
        </Grid> 
       </Grid>
    </Grid>


    <Grid item xs={12} >
    <Box width={'110px'} height={'28px'} margin={2} bgcolor={'#00387C'} borderRadius={5}>
    <Typography fontSize={'20px'} color={'white'} marginTop={5} marginLeft={1} fontWeight={900}>
      اهداف من
    </Typography>
    </Box>
    <Grid item xs={12}>
        {
       allObjective?.length===0 && <Grid item xs={12}>
         <Box width={'100%'} textAlign={'center'} p={2}   >
           <Box>
             <Typography textAlign={'center'} fontWeight={500} fontSize={'18px'} variant='body2'   >
               هدفی در این دوره‌‌زمانی تعریف نشده است.
             </Typography>
           </Box>
         </Box>
       </Grid>
       }

        </Grid>
     <Grid item  xs={12}   >
         
         <Grid container spacing={1} px={1} >

        {
         allObjective && allObjective.map((o:any,i:number)=>{
           return <Grid  item xs={12} sm={4}  >
             <Box width={'100%'} key={i}   >
             <OCart obj={o}   
             setShowToastMessage={setShowToastMessage}
             afterSuccess={getObjectivesAgain}
             setObjectiveId ={setObjectiveId}
             item={o}
             setShowEditForm={setShowEditObjective}
             setObjectiveAsyncOpState={setObjectiveAsyncOpState}
             />
           </Box>
           </Grid>
         })
       }
        </Grid> 
       </Grid>
    </Grid>


    <Grid item xs={12} >
    <Box width={'145px'} margin={2} justifyContent={'center'}  height={'28px'}  bgcolor={'#00387C'} borderRadius={5}>
    <Typography fontSize={'20px'}  color={'white'} marginTop={5} marginLeft={1} fontWeight={900}>
      نتایج کلیدی من
    </Typography>
    </Box>
    <Grid item xs={12}>
        {
       keyresultData?.length===0 && <Grid item xs={12}>
         <Box width={'100%'} textAlign={'center'} p={2}   >
           <Box>
             <Typography textAlign={'center'} fontWeight={500} fontSize={'18px'} variant='body2'   >
               نتیجه کلیدی در این دوره‌‌زمانی تعریف نشده است.
             </Typography>
           </Box>
         </Box>
       </Grid>
       }

        </Grid>
     <Grid item xs={12}  >
         
         <Grid container spacing={1} px={1} >

        {
         keyresultData && keyresultData.map((o:any,i:number)=>{
           return <Grid  item xs={12} sm={4}  >
             <Box width={'100%'} key={i}   >
             <KrCart obj={o}   
             setShowToastMessage={setShowToastMessage}
             afterSuccess={getObjectivesAgain}
             item={o}
             setShowEditForm={setShowEditObjective}
             setObjectiveAsyncOpState={setObjectiveAsyncOpState}
             />
           </Box>
           </Grid>
         })
       }
        </Grid> 
       </Grid>
    </Grid>
    {
            showToastMessage && <DYToastMessage
            //isSuccess={objectiveAsynOpcState?.isSuccess}
            //message={objectiveAsynOpcState?.metaData.message}
            setShow={setShowToastMessage}
            show={showToastMessage}
              />
          }
    </Grid>
    )
  }
  
  export default AllTenantDash





