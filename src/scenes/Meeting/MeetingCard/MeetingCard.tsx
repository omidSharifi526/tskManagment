import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {Typography,Box,ListItem} from '@mui/material';
import {HeldIcon,PerformingIcon,ReadyPerformIcon} from './StaticData/index';
import ProgressMeeting from '../LComponents/ProgressMeeting/ProgressMeeting';
import DyStyledBadge from '../../../components/GlobalComponents/DyStyledBadge/DyStyledBadge';
import {useGetTeamsByTenantId,UseGetWebCheckinMeetingDetailsByMeetingId} from '../Hooks/index';
import { useState } from 'react';
import * as moment from 'jalali-moment';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import LyBackdrop from '../../../components/Layouts/BackDrop/BackDrop';




export default function MeetingCard(props:any) {
  
const getDetSuccess=()=>{
navigate('/companyTeams',{replace:true})
}

const getDetFailed=()=>{

}

const[tenantId,setTenantId]=useState<any>(null)
const navigate=useNavigate();
// const{isError,isLoading,refetch:getTeams}=useGetTeamsByTenantId(getTeamsSuccess,getTeamsFailed,tenantId);
// getDetSuccess:any,getDetFailed:any,id:string
const{data:MeetDetData,isLoading}=UseGetWebCheckinMeetingDetailsByMeetingId(getDetSuccess,getDetFailed,tenantId)
  
    let {info}=props;
    // console.log(info)
    let todayJalali = moment.default("2023-12-03T07:19:38.4563725Z").locale('fa').format('YYYY/M/D');
    


    const LoginMeeting=()=>{   
      setTenantId(info.id); 
      console.log(info.tenantId) // info.id
      // console.log(info)
    }


    if (isLoading) {
      return <LyBackdrop visible={true}  >
        <CircularProgress sx={{color:'white'}}  />
      </LyBackdrop>
    }




  return (
    <Card sx={{ width:'100%',boxShadow:6,borderRadius:5}}>
    
      <CardContent>
        <Box mb={1}  display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
        <Box display={'flex'} justifyContent={'space-between'} >
        <Box >
           {
                info.type==1 && <HeldIcon/>
               
            }
            {
                 info.type==2 && <Box px={1} ><DyStyledBadge/></Box>
            }
            {
                 info.type==3 && <ReadyPerformIcon/>
            }
           </Box>
           <Box>
          <Typography sx={{fontSize:'14px'}}  >
            {info.status}
            </Typography>
          </Box>
        </Box>

        <Box width={'80px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
       <Typography 
       fontWeight={500}
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
      
      
      
       <Box  >
       {/* <Typography sx={{mb:1}} variant="body2" color="text.secondary">
          کد دعوت:{
            info.invitationCode
          }
        </Typography> */}
        <Typography variant="button"  color="gray">
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
          p={1}
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
        <Box px={1} py={1}  >
          <Typography sx={{fontSize:'12px'}} color={'gray'}  >
            {
              info?.definitionLevel
            }
          </Typography>
        </Box>
        
       {/* to={"/companyTeams"}  */}
       {/* <ListItem onClick={()=>{
        console.log('hihi')
       }}  sx={{fontSize:'0.7 rem'}} component={Link}  >
        <Typography color={'GrayText'} variant='body2' sx={{fontWeight:600}} >ورود به جلسه</Typography>
      </ListItem> */}

    <Box display={'flex'} justifyContent={'space-between'} px={3}  mt={1}  >
   <Box>
    <ProgressMeeting prog={info?.evaluationPercentage} />
   </Box>

  <Box>
  <Button onClick={()=>{
        LoginMeeting()
      }}  >
      ورود به جلسه
  </Button>
  </Box>
    </Box>
           {/*  */}
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}