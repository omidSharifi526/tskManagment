import * as React from 'react';
import Popover from '@mui/material/Popover';
import {Typography,Box,Button} from '@mui/material';
import {useState} from 'react'

import { useEffect } from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { useNavigate } from 'react-router-dom';
import{setLoadingR} from '../../../../scenes/Meeting/MeetingsSlice/MeetingsSlice'
import { useDispatch,useSelector } from 'react-redux';
import { setProfileTenantIdR,setProfileNameR,setChangeTenantModeR } from '../../../../scenes/Meeting/MeetingsSlice/MeetingsSlice';
// import { useDispatch } from 'react-redux';
import { useGetAllMeetings } from '../../../../scenes/Meeting/Hooks';
export default function TenantsList({ButtonCaption,tenantList,setShowTenantItem}:any) {
    const priodId=useSelector((state:any)=>state.meetings.priodId);
    // const [tenantId,setTenantId]=useState(null)
    const [Ids,setIds]=useState<any>(null);

    const{isFetched,isLoading}=useGetAllMeetings(Ids);
    const navigate=useNavigate();
    const dispatch=useDispatch()
    // console.log(tenantList)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
   const[ltenantList,setLTenantList]=React.useState(tenantList)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  useEffect(() => {
   
 
  console.log(isFetched,'fromTList')
    
    }, [isFetched]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const initialChangTenents=()=>{
    setShowTenantItem(true)
    
  }

  const initialSelectTenant=(tenant:any)=>{
    let{tenantId,tenantName}=tenant;
    console.log(tenantId)
    let ids={
      tenantId:tenantId,
      priodId:priodId
    }
    // getMeertAgin({tenantId:tenantId,priodId:priodId})
    setIds(ids)
    dispatch(setProfileTenantIdR(ids))
    dispatch(setProfileNameR(tenantName))
    dispatch(setLoadingR(true));
    dispatch(setChangeTenantModeR(true))
    // setShowTenantItem(false)
    // handleClose()
    setAnchorEl(null);
  console.log(ids)
  }

  return (
    <div>
      <Button variant='text' color='info' onClick={handleClick}>
       <Typography fontWeight={700} fontSize={'12px'}  >
       {ButtonCaption}
       </Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
       <Box width={'200px'} 
       display={'flex'} 
       flexDirection={'column'} 
       alignItems={'start'}
       justifyContent={'center'}
       p={2}
       >
     {
        ltenantList && ltenantList.map((tenant:any,i:number)=>{
            let {tenantName}=tenant
            return  (
                <Box key={i} py={0.5}  >
                 <Button onClick={()=>{
                  initialSelectTenant(tenant)
                 }}   >
                 <Typography  
                
                fontWeight={tenantName===ButtonCaption?700:500}
                fontSize={'0.75rem'}
                color={tenantName===ButtonCaption?'blue':'gray'}
                
                >
                {tenantName}
                </Typography>
                 </Button>
                </Box>
            )
      
            
        })
     }
       </Box>
       <Box  width={'100%'} py={1}  display={'flex'} justifyContent={'start'} pr={2}  >
         <Button  onClick={initialChangTenents}   startIcon={<SyncAltIcon />}   >
         تغییر تننت
         </Button>
       </Box>
      </Popover>
    </div>
  );
}