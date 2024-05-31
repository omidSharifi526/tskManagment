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
import { useExportMeetingDetails } from '../Hooks/index';
import EditMeeting from '../LComponents/Forms/EditMeeting/EditMeeting';

// setMeetId={setMeetId}
// info={data}
// prog={i}  
// accessForReport={accessForReport}



const MeetingCard = ({info,setMeetId,prog,accessForReport,setShowDownlodLink,setPMeetingId,setshowEditMeeting}: any) => {

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

 




  return (
    <Card sx={{ width: '100%', boxShadow: 6, borderRadius: 5 }}>

      <CardContent  >
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
          <Box display={'flex'} justifyContent={'space-between'} >
            <Box >
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
            <Box>
              <Typography sx={{ fontSize: '14px' }}  >
                {info.status}
              </Typography>
            </Box>
          </Box>

          <Box width={'100px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <Typography
              fontWeight={500}
              variant='caption'
              py={1}
              textAlign={'center'}
              width={'100%'}
              color={'info'}
              border={1}
              borderColor={'blueviolet'}
              borderRadius={1} >
              {
                info?.name
              }

            </Typography>

            
          </Box>

        </Box>



        <Box>
          <Typography variant="button" color="gray">
            {
              info.level
            }

          </Typography>
        </Box>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          columnGap={1}
          // p={info?.name.length150 ? 0 : 1}
          py={1}
        >
          <Typography>
            درتاریخ
            {
              info?.meetingDate
            }
          </Typography>
          <Typography>
            از {info?.fromTime} تا {info?.toTime}
          </Typography>
        </Box>
        <Box px={1}    >
          {
            info?.definitionLevel.length > 120 ? <Tooltip sx={{ fontSize: '1.5rem !important' }} title={info?.definitionLevel}>
              <Typography sx={{ fontSize: '12px !important', color: 'gray',cursor:'pointer',textAlign:'left' }}   >{info?.definitionLevel.slice(0, 120)}</Typography>
            </Tooltip> : <Typography sx={{ fontSize: '12px !important', color: 'gray',cursor:'pointer',textAlign:'left' }}    >
              {
                info?.definitionLevel
              }

            </Typography>
          }

        </Box>

        <Box>
            {
              accessForReport && <Box display={'flex'} alignItems={'center'}  flexDirection={'row-reverse'} px={1}  >
                <IconButton color='info'  onClick={()=>{
                  let{id}=info;
                 setMeetingId(id)
                }}   >
                  <Box >
                  <Link target='_blank' to={`https://api.myokr.ir/api/Download/ExportMeetingDetails?meetingId=${meetingId}`}>
                  <img
                    src={Exeloo}
                    style={{ height: 40, width: 43 }}
                    alt="exelLogo"
                  />
                  </Link>
             
                  </Box>
                
                </IconButton>
                </Box>
            }
        </Box>



        <Box display={'flex'} justifyContent={'space-between'} px={1} mt={1}  >
          <Box>
            <ProgressMeeting prog={info?.evaluationPercentage} />
          </Box>


       <Box    >
        <Button variant='text'  onClick={()=>{
              let {id} = info;
              setPMeetingId(id)
              setshowEditMeeting(true)
            //  setMeetingId(id)
        }} >
         ویرایش
        </Button>
       </Box>



          <Box >
            <Button
              variant='text'
              onClick={() => {
                LoginMeeting()
              }}  >
              ورود به جلسه
            </Button>
          </Box>
        </Box>

      </CardContent>

    </Card>
  );
}

export default MeetingCard;