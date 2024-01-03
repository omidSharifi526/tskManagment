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
import {useGetTeamsByTenantId} from '../Hooks/index';
import { useState } from 'react';
import * as moment from 'jalali-moment';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import LyBackdrop from '../../../components/Layouts/BackDrop/BackDrop';




export default function MeetingCard(props:any) {
  
const getTeamsSuccess=()=>{
navigate('/companyTeams',{replace:true})
}

const getTeamsFailed=()=>{

}

const[tenantId,setTenantId]=useState<any>(null)

     const navigate=useNavigate();
       const{isError,isLoading,refetch:getTeams}=useGetTeamsByTenantId(getTeamsSuccess,getTeamsFailed,tenantId);

    let {info}=props;
    // console.log(info)
    let todayJalali = moment.default("2023-12-03T07:19:38.4563725Z").locale('fa').format('YYYY/M/D');
    


    const LoginMeeting=()=>{   
      setTenantId(info.tenantId); 
      console.log(info.tenantId) // info.id
      // console.log(info)
    }


    if (isLoading) {
      return <LyBackdrop visible={true}  >
        <CircularProgress sx={{color:'white'}}  />
      </LyBackdrop>
    }




  return (
    <Card sx={{ width: '100%' }}>
    
      <CardContent>
        <Box mb={2}  display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
        <Box display={'flex'} justifyContent={'space-between'} >
        <Box px={1}>
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
          <Typography>
            {info.status}
            </Typography>
          </Box>
        </Box>

        <Box width={'100px'} display={'flex'} alignItems={'center'} justifyContent={'center'} >
       <Typography textAlign={'center'} width={'100%'} color={'info'} border={1}  borderColor={'blueviolet'} p={1} borderRadius={1} >
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
        <Box>
          <Typography>
            از {info?.fromTime} تا {info?.toTime}
          </Typography>
        </Box>
        {/* <Box px={2} py={1}  >
          <Typography>
            {
              info?.definitionLevel
            }
          </Typography>
        </Box> */}
        <Box py={2}  >
       {/* to={"/companyTeams"}  */}
       {/* <ListItem onClick={()=>{
        console.log('hihi')
       }}  sx={{fontSize:'0.7 rem'}} component={Link}  >
        <Typography color={'GrayText'} variant='body2' sx={{fontWeight:600}} >ورود به جلسه</Typography>
      </ListItem> */}

      <Button onClick={()=>{
        LoginMeeting()
      }}  >
      ورود به جلسه
      </Button>
           </Box>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}