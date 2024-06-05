import React from 'react';
import { Typography, Box, ListItem, Button, Tooltip } from '@mui/material';
import { HeldIcon, PerformingIcon, ReadyPerformIcon } from './StaticData/index';
import ProgressMeeting from '../LComponents/ProgressMeeting/ProgressMeeting';
import DyStyledBadge from '../../../components/GlobalComponents/DyStyledBadge/DyStyledBadge';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useGetTeamsByTenantId, UseGetWebCheckinMeetingDetailsByMeetingId } from '../Hooks/index';
import { useState,useEffect } from 'react';
import * as moment from 'jalali-moment';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import LyBackdrop from '../../../components/Layouts/BackDrop/BackDrop';
import { useDispatch } from 'react-redux';
import { setMeetingIdR } from '../MeetingsSlice/MeetingsSlice';
import { memo } from 'react'
import {setInitialTreeViewR} from '../../Meeting/MeetingsSlice/MeetingsSlice'
import {IconButton} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import {ReactComponent as Exeloo} from '../MeetingCard/StaticData/Svg/exeloo.svg';
import Exeloo from '../MeetingCard/StaticData/Svg/exeloo.svg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useExportMeetingDetails } from '../Hooks/index';
import EditMeeting from '../LComponents/Forms/EditMeeting/EditMeeting';
import { useDeleteMeeting,useEditMeeting } from '../Hooks/index';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';

// setMeetId={setMeetId}
// info={data}
// prog={i}  
// accessForReport={accessForReport}

// {"deletedId":"d4a6a006-025c-4884-ae6c-c30c2e590c70","userId":"73b54dda-95cf-404e-a641-5abdce6fb8e5","tenantId":"eb781974-3cb0-4c3a-881e-97af686ce7f5"}



const MeetingCard = ({info,setMeetId,prog,accessForReport,setShowDownlodLink,setPMeetingId,setshowEditMeeting}: any) => {
  const userId=useSelector((state:any)=>state.loign.userInfo.userId);
  const tenantId: any = useSelector((state: any) => state.meetings.profileTenantId);
  const[deleteIds,setDeleteIds]=useState<any>()
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const[meetingId,setMeetingId]=useState<string>('');
  const getDetSuccess = () => {
    navigate('/companyTeams', { replace: true })
  }
  const getDetFailed = () => {

  }
 

  

  // const{data:MeetDetData,isLoading}=UseGetWebCheckinMeetingDetailsByMeetingId(getDetSuccess,getDetFailed,tenantId);
  
  const LoginMeeting = () => {
    dispatch(setInitialTreeViewR())
    // console.log(info)
    let { meetingDate, id } = info;
    //  console.log(meetingDate)
    //  setTenantId(id); 
    setMeetId(id)
    // console.log(id)
    let meetDetail = {
      id: id,
      meetingDate: meetingDate
    }
    dispatch(setMeetingIdR(meetDetail))
  
  }
  const{mutate:deleteMeeting}=useDeleteMeeting();
  // const{mutate:EditMeet}=useEditMeeting()
  const initialDeleteMeeting=()=>{
    let{id}=info;
  let ids={
      tenantId:tenantId,
      userId:userId,
      deletedId:id
    }
    // setDeleteIds((prev:any)=>({...prev,deletedId:id}))
    deleteMeeting(ids)
    
  }

  // useEffect(() => {
    
  // console.log(deleteMeetingData)
   
  // }, [deleteMeetingData])
  

 




  return (
    <Card sx={{ width: '100%', boxShadow: 6, borderRadius: 5 }} >

      <CardContent  >
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
        <Box
          display={'flex'}
        
          justifyContent={'space-between'}
          columnGap={1}
          // p={info?.name.length150 ? 0 : 1}
          
        >
          <Typography fontWeight={900} fontSize={'18px'}> 
            
            {
              info?.meetingDate
            }
          </Typography>
      
        </Box>
          
          {/* <Box
          display={'flex'}
          justifyContent={'space-between'}
          columnGap={1}
          // p={info?.name.length150 ? 0 : 1}
          py={1}
        >
          <Typography fontWeight={900}> 
            
            {
              info?.meetingDate
            }
          </Typography>
      
        </Box> */}

          <Box width={'100px'}  display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <Typography
              fontWeight={900}
              variant='caption'
              py={1}
              textAlign={'center'}
              width={'80px'}
              color={'primary'}
              border={2}
              borderColor={'00387C'}
              borderRadius={1} >
              {
                info?.name
              }

            </Typography>
            

            
          </Box>
          
          <Box display={'flex'} flexDirection={'row-reverse'} justifyContent={'left'}>
       
       <IconButton onClick={()=>{
            
        }}   >
        <DeleteIcon color='error'   />
       </IconButton>
       <IconButton onClick={()=>{
           let {id} = info;
           setPMeetingId(id)
           setshowEditMeeting(true)
        }}   >
        <EditIcon color='primary'   />
       </IconButton>
       </Box>

        </Box>

        <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row-reverse'} py={1}>
      
        <Box display={'flex'} justifyContent={'space-between'} >
              <Typography sx={{ fontSize: '15px' }}  >
                {info.status}
              </Typography>
              <Typography sx={{ fontSize: '15px' }}  >
                {info.MeetingNumber}
              </Typography>
            </Box>



            <Box
          display={'flex'}
          justifyContent={'space-between'}
          columnGap={1}
          alignItems={'center'}>
        <Typography color={'black'}>
            از {info?.fromTime} تا {info?.toTime}
          </Typography>
        </Box>
        <Box  display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              {
                info.type == 1 && <HeldIcon />

              }
              {
                info.type == 2 && <Box px={1} ><DyStyledBadge /></Box>
              }
              {
                info.type == 3 && <ReadyPerformIcon />
              }
            </Box>





          
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Typography fontWeight={900} fontSize={'18px'}>
              {
                info?.meetingNumber
              }
              </Typography>
               </Box>


            
          </Box>
        <Box  display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
          <Typography variant="button" color="gray">
            {
              info.level
            }

          </Typography>
          
          </Box>
        {/* </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          columnGap={1} */}
          {/* // p={info?.name.length150 ? 0 : 1}
          py={2}
        >
          {/* <Typography fontWeight={900} color={'green'}>  */}
            
            {/* {
              info?.meetingDate
            }
          </Typography> */} 
          {/* <Typography color={'green'}>
            از {info?.fromTime} تا {info?.toTime}
          </Typography>
        </Box> */}
        <Box minHeight={'50px'}  >
          {
            info?.definitionLevel.length > 120 ? <Tooltip sx={{ fontSize: '1.5rem !important' }} title={info?.definitionLevel}>
              <Typography sx={{ fontSize: '12px !important', color: 'black',cursor:'pointer',textAlign:'left' }}   >{info?.definitionLevel.slice(0, 120)}</Typography>
            </Tooltip> : <Typography sx={{ fontSize: '12px !important', color: 'black',cursor:'pointer',textAlign:'left' }}    >
              {
                info?.definitionLevel
              }

            </Typography>
          }

        </Box>

        {/* <Box>
            {
              accessForReport && <Box display={'flex'} alignItems={'center'}  flexDirection={'row-reverse'} px={1} >
                <IconButton color='info'  onClick={()=>{
                  let{id}=info;
                 setMeetingId(id)
                }}   >
                  <Box>
                  <Link target='_blank' to={`https://api.myokr.ir/api/Download/ExportMeetingDetails?meetingId=${meetingId}`}>
                  <img
                    src={Exeloo}
                    style={{ height: 35, width: 38}}
                    alt="exelLogo"
                  />
                  </Link>
             
                  </Box>
                
                </IconButton>
                </Box>
            }
        </Box> */}

         
            
            <Box   display={'flex'}  flexDirection={'row-reverse'} justifyContent={'space-between'} >
            <Box  marginTop={1} display={'flex'}  justifyContent={'center'}  bgcolor={'#00387C'} borderRadius={2} maxHeight={'29px'} width={'95px'}>

    <Button
      variant='text'
      onClick={() => {
        LoginMeeting()
      }}  >
      <Typography color={'white'} fontSize={'12px'}>        
      ورود به جلسه
      </Typography>  
    </Button>

    </Box>
            
            
              <Box display={'flex'} justifyContent={'center'}  >
                {
                  accessForReport && <Box  display={'flex'} justifyContent={'center'} >
                    <IconButton color='info'  onClick={()=>{
                      let{id}=info;
                    setMeetingId(id)
                    }}   >
                      <Box  >
                      <Link target='_blank' to={`https://api.myokr.ir/api/Download/ExportMeetingDetails?meetingId=${meetingId}`}>
                      <img
                        src={Exeloo}
                        style={{ height: 25, width: 30}}
                        alt="exelLogo"
                      />
                      </Link>
                      </Box>
                      </IconButton>
                      </Box>
                }
            </Box>
            <Box display={'flex'}  justifyContent={'center'} alignItems={'center'}>
                <ProgressMeeting prog={info?.evaluationPercentage} />
              </Box>
              
            </Box>

          </CardContent>

        </Card>
      );
    }

<<<<<<< HEAD


          <Box >
            <Button
              variant='text'
              onClick={() => {
                LoginMeeting()
              }}  >
              ورود به جلسه
            </Button>
          </Box>

          <Box>
            <IconButton onClick={initialDeleteMeeting}   >
             <DeleteIcon/>
            </IconButton>
          </Box>
        </Box>

      </CardContent>

    </Card>
  );
}

export default MeetingCard;
=======
    export default MeetingCard;
>>>>>>> 2d1341de30cc1e5fa56fd827e68a6d42b629019c
