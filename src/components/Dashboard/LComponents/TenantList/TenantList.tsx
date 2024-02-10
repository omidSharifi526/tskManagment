import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Typography, Box, Button, IconButton } from '@mui/material';
import { useState } from 'react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';


import { useEffect } from 'react';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import { useNavigate } from 'react-router-dom';
import { setLoadingR } from '../../../../scenes/Meeting/MeetingsSlice/MeetingsSlice'
import { useDispatch, useSelector } from 'react-redux';
import { setProfileTenantIdR, setProfileNameR, setChangeTenantModeR } from '../../../../scenes/Meeting/MeetingsSlice/MeetingsSlice';
// import { useDispatch } from 'react-redux';
import { useGetPriodById } from '../../../Login/Hooks/Index';
import { useGetAllMeetings } from '../../../../scenes/Meeting/Hooks';
export default function TenantsList({ ButtonCaption, tenantList, setShowTenantItem }: any) {

  const [Ids, setIds] = useState<any>(null);
  const { data: perData, } = useGetPriodById(Ids?.tenantId || null);
  const { isFetched, isLoading } = useGetAllMeetings(null);









  const navigate = useNavigate();
  const dispatch = useDispatch()
  // console.log(tenantList)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const [ltenantList, setLTenantList] = React.useState(tenantList)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };



  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const initialChangTenents = () => {
    setShowTenantItem(true)

  }

  const initialSelectTenant = (tenant: any) => {
    let { tenantId, tenantName } = tenant;
    console.log(tenantId)
    let ids = {
      tenantId: tenantId,
      priodId: 'rrr'
    }
    // getMeertAgin({tenantId:tenantId,priodId:priodId})
    setIds(ids)
    dispatch(setProfileTenantIdR(ids))
    dispatch(setProfileNameR(tenantName))
    // dispatch(setLoadingR(true));
    // dispatch(setChangeTenantModeR(true))
    // dispatch(setLoadingR(true))
    // setShowTenantItem(false)
    // handleClose()
    setAnchorEl(null);
    console.log(ids)
  }




  return (
    <div>
      <Button variant='text' sx={{ color: '#00387C !important' }} onClick={handleClick}>
        <Typography fontWeight={900} fontSize={'12px'}  >
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
        <Box width={'250px'}
          display={'flex'}
          flexDirection={'column'}
          alignItems={'start'}
          justifyContent={'center'}
          p={1}
        >
          <Box width={'100%'}  
          display={'flex'} justifyContent={'space-between'} 
          sx={{borderRadius:'5px',bgcolor:'#F5F5F5 !important',px:1}} >
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}   >
              <Typography  px={1} >شرکت ها </Typography>
              <MultipleStopIcon />
            </Box>
            <Box    >
              <IconButton size='small' onClick={handleClose}  >
                <HighlightOffIcon />
              </IconButton>
            </Box>

          </Box>
          {
            ltenantList && ltenantList.map((tenant: any, i: number) => {
              let { tenantName } = tenant
              return (
                <Box key={i} px={1} 
                sx={{backgroundColor:tenantName === ButtonCaption ? '#F5F5F5' : '',width:'100%',
                borderRadius:'5px'

                }} >
              
                  <Typography
                    py={0.85}
                    onClick={() => {
                      initialSelectTenant(tenant)
                    }}
                    // #00387C !important

                    sx={{ 
                      width:'100%',
                      cursor: 'pointer',
                    borderRadius:'5px',
                    

                   }}
                    fontWeight={tenantName === ButtonCaption ? 700 : 500}
                    fontSize={'0.75rem'}
                    color={tenantName === ButtonCaption ? '#00387C ' : 'gray'}
                     

                  >
                    {tenantName}
                  </Typography>

                </Box>
              )


            })
          }
        </Box>

      </Popover>
    </div>
  );
}