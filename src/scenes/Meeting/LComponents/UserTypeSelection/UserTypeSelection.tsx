import React, { useEffect } from 'react';
import {Grid,Box,Typography, IconButton} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { UserProfileTypeCart } from '../../../../components/GlobalComponents/UserProfileTypeCart/UserProfileTypeCart';
import {useState} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import {useGetPriodById} from '../../../../components/Login/Hooks/Index';
import LyBackdrop from '../../../../components/Layouts/BackDrop/BackDrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
// useNavigate
// useEffect

const UserTypeSelection = (props:any) => {
  
  const[tenantId,setTenantId]=useState<string>();

 
  const {data:priodData,isLoading}=useGetPriodById(tenantId||null);
  const[currenPriod,setCurrentPeriod]=useState<object|null>({});
  // console.log(currenPriod)
  // console.log(currenPriod)
  // console.log(priodData)

const userTenantsData=useSelector((state:any)=>state.loign.userInfo.userTenants);

useEffect(() => {
  let current:any=priodData?.find(prd=>prd.isCurrent)
  // console.log(current)
   setCurrentPeriod({priodId:current?.id,tenantId:current?.tenantId})
}, [priodData])


    const initialClose=()=>{
        props.handleClose()
    }


    if (isLoading) {
      return <LyBackdrop visible={true}  >
        <CircularProgress sx={{color:'white'}}  />
      </LyBackdrop>
    }
  return (
   
    <Grid item xs={11} md={12} mx={'auto'}  bgcolor={'whitesmoke'} borderRadius={2}  >
   <Grid container  >
   <Grid item xs={12}  >
   <Box width={'100%'}  py={2}  display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
  <Box>
  <Typography color={'blue'} variant='h5'  >
  انتخاب اکانت
  </Typography>
  </Box>

   </Box>
   </Grid>
   
   <Grid item xs={12}  >
   <Box mx={'auto'}   >
    <Typography color={'black'} variant='h6' textAlign={'center'}  >لطفا اکانت مورد نظر خود را انتخاب کنید.</Typography>
   </Box>
   </Grid>


   <Grid item xs={12}  >
   <Box   textAlign={'center'} py={2}  >
    <Typography 
    color={'black'}
    variant='button'>در صورت تمایل بعدا هم میتوانید از طریق پروفایل کاربری،  اکانت خود را تغییر دهید.
    </Typography>
   </Box>
   </Grid>

 
    <Grid container mx={'auto'} display={'flex'} gap={1} py={1} flexWrap={'wrap'}  >
<Grid item xs={12} md={6} mx={'auto'}  >
<Grid container spacing={2}  >
{
userTenantsData && userTenantsData?.map((item:any,i:number)=>{
        return(
          <UserProfileTypeCart 
          priodsIds={currenPriod}
          setTenantId={setTenantId}  
          key={i} 
          item={item}  
          />
        )
    })
}
</Grid>
<Grid item xs={9} px={2} mx={'auto'} md={3} borderRadius={3} sx={{cursor:'pointer'}}  border={1} borderColor={'gray'} bgcolor={'#C8CCD0'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}  >

    <Typography py={1} color={'black'} fontWeight={600} variant='caption'  >
    افزودن اکانت
    </Typography>

    <IconButton size='medium' sx={{boxShadow:'0px 3px 5px  black'}}  >
     <AddIcon/>
    </IconButton>
</Grid>
</Grid>






  </Grid>

  <Grid item xs={12}  >
    <Box px={4} py={3} >
    <FormControlLabel control={<Checkbox  />}  sx={{color:'black'}} label="این پیام دیگر به من نمایش داده نشود." />
    </Box>
  </Grid>


   </Grid>
    </Grid>

  )
}

export default UserTypeSelection