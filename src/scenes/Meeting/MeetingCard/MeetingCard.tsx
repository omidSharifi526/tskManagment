import React from 'react';
import { Typography, Box, ListItem, Button, Tooltip } from '@mui/material';
import { HeldIcon, PerformingIcon, ReadyPerformIcon } from './StaticData/index';
import ProgressMeeting from '../LComponents/ProgressMeeting/ProgressMeeting';
import DyStyledBadge from '../../../components/GlobalComponents/DyStyledBadge/DyStyledBadge';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useGetTeamsByTenantId, UseGetWebCheckinMeetingDetailsByMeetingId } from '../Hooks/index';
import { useState } from 'react';
import * as moment from 'jalali-moment';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import LyBackdrop from '../../../components/Layouts/BackDrop/BackDrop';
import { useDispatch } from 'react-redux';
import { setMeetingIdR } from '../MeetingsSlice/MeetingsSlice';
import { memo } from 'react'


const MeetingCard = memo((props: any) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getDetSuccess = () => {
    navigate('/companyTeams', { replace: true })
  }
  const getDetFailed = () => {

  }
  const [tenantId, setTenantId] = useState<any>('')

  // const{data:MeetDetData,isLoading}=UseGetWebCheckinMeetingDetailsByMeetingId(getDetSuccess,getDetFailed,tenantId);
  let { info } = props;
  const LoginMeeting = () => {
    console.log(info)
    let { meetingDate, id } = info;
    //  console.log(meetingDate)
    //  setTenantId(id); 
    props.setMeetId(id)
    console.log(id)
    let meetDetail = {
      id: id,
      meetingDate: meetingDate
    }
    dispatch(setMeetingIdR(meetDetail))
    // console.log(info)
  }


  //  if (isLoading) {
  //    return <LyBackdrop visible={true}  >
  //      <CircularProgress sx={{color:'white'}}  />
  //    </LyBackdrop>
  //  }

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

          <Box width={'80px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
            <Typography
              fontWeight={500}
              px={1}
              py={2}
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



        <Box  >
          {/* <Typography sx={{mb:1}} variant="body2" color="text.secondary">
        کد دعوت:{
          info.invitationCode
        }
      </Typography> */}
          <Typography variant="button" color="gray" py={info?.name.length > 50 ? 0 : 1}>
            {
              info.level
            }

          </Typography>
        </Box>

        {/* 
      <Box width={'100%'}  display={'flex'} alignItems={'center'} justifyContent={'space-between'} py={2} px={2}>
       <ProgressMeeting prog={props.prog}/>
       <Button variant='text' color='secondary' sx={{mr:-2}}>
       {
          info.type==2?'درخواست تکرار':'ورود به جلسه'
       }
       </Button>
       {
      // moment.default(info.createDate).locale('fa').format('YYYY/M/D')
       }
      </Box> */}
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          columnGap={1}
          p={info?.name.length150 ? 0 : 1}
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
        <Box px={1} py={2} minHeight={'90px'}  >
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



        <Box display={'flex'} justifyContent={'space-between'} px={1} mt={1}  >
          <Box>
            <ProgressMeeting prog={info?.evaluationPercentage} />
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
});

export default MeetingCard;