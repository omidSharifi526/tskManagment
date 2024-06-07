import React from 'react';
import { useState,useEffect } from 'react';
import { Typography, Box, ListItem, Button, Tooltip } from '@mui/material';
// import { HeldIcon, PerformingIcon, ReadyPerformIcon } from './StaticData/index';
// import ProgressMeeting from '../LComponents/ProgressMeeting/ProgressMeeting';
// import DyStyledBadge from '../../../components/GlobalComponents/DyStyledBadge/DyStyledBadge';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import { useGetTeamsByTenantId, UseGetWebCheckinMeetingDetailsByMeetingId } from '../Hooks/index';
import * as moment from 'jalali-moment';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
// import LyBackdrop from '../../../components/Layouts/BackDrop/BackDrop';
import { useDispatch } from 'react-redux';
// import { setMeetingIdR } from '../MeetingsSlice/MeetingsSlice';
import { memo } from 'react'
// import {setInitialTreeViewR} from '../../Meeting/MeetingsSlice/MeetingsSlice'
import {IconButton} from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
// import {ReactComponent as Exeloo} from '../MeetingCard/StaticData/Svg/exeloo.svg';
// import Exeloo from '../MeetingCard/StaticData/Svg/exeloo.svg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import { useExportMeetingDetails } from '../Hooks/index';
// import EditMeeting from '../LComponents/Forms/EditMeeting/EditMeeting';

// setMeetId={setMeetId}
// info={data}
// prog={i}  
// accessForReport={accessForReport}


   const MeetCart = (props:any) => {
        const navigate=useNavigate();
        const dispatch = useDispatch();
        let{obj}=props;
        let{name,meetingDate,meetingNumber,status,fromTime,toTime,level,definitionLevel,Id
        }=obj;
        //const tenantId=useSelector((state:any)=>state.meetings.profileTenantId);
    
    //   const goObjectiveDetails=()=>{
    
    //         navigate('/dashboard/okrManagment/objectiveDetails',{replace:true,state:{objectiveId:id}})
          
    //   }
    
    const LoginMeeting = () => {
      //dispatch(setInitialTreeViewR())
      // console.log(info)
      //let { meetingDate, id } = info;
      //  console.log(meetingDate)
      //  setTenantId(id); 
      //setMeetId(Id)
      // console.log(id)
      // let meetDetail = {
      //   id: Id,
      //   meetingDate: meetingDate
      // }
     // dispatch(setMeetingIdR(meetDetail))
    
    }
          
    // const initialEditObject=(perId:string|null)=>{
    //   setShowEditForm(true)
    //   setObjectiveId(id)
    //   }
      
          
    
    
      return (
        <Card sx={{ width: '100%', boxShadow: 6, borderRadius: 5 }} >
    
          <CardContent  >
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
            <Box
              display={'flex'}
            
              justifyContent={'space-between'}
              columnGap={1}
            >
              <Typography fontWeight={900} fontSize={'15px'}> 
                
                {
                  meetingDate
                }
              </Typography>
          
            </Box>
{/*     
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
                    name
                  }
    
                </Typography>
              </Box> */}
              
              
            </Box>
    
            <Box display={'flex'} justifyContent={'space-between'} flexDirection={'row-reverse'} py={1}>
          
            <Box display={'flex'} justifyContent={'space-between'} >
                  <Typography sx={{ fontSize: '12px' }}  >
                    {status}
                  </Typography>
                  <Typography sx={{ fontSize: '12px' }}  >
                    {meetingNumber}
                  </Typography>
                </Box>
    
    
    
                <Box
              display={'flex'}
              justifyContent={'space-between'}
              columnGap={1}
              alignItems={'center'}>
            <Typography color={'black'}>
                زمان:
                از {fromTime} تا {toTime}
              </Typography>
            </Box>
            <Box  display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                  {/* {
                    info.type == 1 && <HeldIcon />
    
                  }
                  {
                    info.type == 2 && <Box px={1} ><DyStyledBadge /></Box>
                  }
                  {
                    info.type == 3 && <ReadyPerformIcon />
                  } */}
                </Box>
    
    
    
    
    
              
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography fontWeight={900} fontSize={'15px'}>
                  {
                    meetingNumber
                  }
                  </Typography>
                   </Box>
    
    
                
              </Box>
            
            
                <Box    minHeight={'45px'}>
          
              {
                definitionLevel.length > 120 ? <Tooltip sx={{ fontSize: '1.5rem !important' }} title={definitionLevel}>
                  <Typography sx={{ fontSize: '12px !important', color: 'black',cursor:'pointer',textAlign:'left' }}   >{definitionLevel.slice(0, 120)}</Typography>
                </Tooltip> : <Typography sx={{ fontSize: '12px !important', color: 'black',cursor:'pointer',textAlign:'left' }}    >
                  {
                    definitionLevel
                  }
    
                </Typography>
              }
              
              </Box>
              {/* {
                definitionLevel.length > 120 ? <Tooltip sx={{ fontSize: '1.5rem !important' }} title={definitionLevel}>
                  <Typography sx={{ fontSize: '12px !important', color: 'black',cursor:'pointer',textAlign:'left' }}   >{definitionLevel.slice(0, 120)}</Typography>
                </Tooltip> : <Typography sx={{ fontSize: '12px !important', color: 'black',cursor:'pointer',textAlign:'left' }}    >
                  {
                    definitionLevel
                  }
    
                </Typography>
              } */}
                <Box   display={'flex'}  flexDirection={'row-reverse'} justifyContent={'space-between'} >
                {/* <Box  marginTop={1} display={'flex'}  justifyContent={'center'}  bgcolor={'#00387C'} borderRadius={2} maxHeight={'29px'} width={'95px'}>
    
        <Button
          variant='text'
          onClick={() => {
            LoginMeeting()
          }}  >
          <Typography color={'white'} fontSize={'12px'}>        
          ورود به جلسه
          </Typography>  
        </Button>
    
        </Box> */}
                
                <Box display={'flex'}  justifyContent={'center'} alignItems={'center'}>
                    {/* <ProgressMeeting prog={info?.evaluationPercentage} /> */}
                  </Box>
                  
                </Box>
    
              </CardContent>
    
            </Card>
          );
    }
    
    export default MeetCart