import React from 'react';
import LoginLyt from '../Layouts/LoginLyt/LoginLyt';
import{Box,Grid,Typography,Button} from '@mui/material';
import DyTextField from '../GlobalComponents/DyTextField/DyTextField';
import UserPhoneNum from '../Login/Statics/Icons/UserPhoneNum/UserPhoneNum';
import DyButton from '../GlobalComponents/DyButton/DyButton';

const ForgetPassword = ({setContentState}:any) => {

    const initialBack=()=>{
        setContentState((prev:any):any=>({...prev,content:'login'}))
    }
  return (
    <Grid  container >
    <Grid item md={8} xs={10} mx={'auto'} bgcolor={'white'} height={'400px'} >
     <Grid container  >
     <Grid>
     <Button onClick={initialBack} >بازگشت</Button>
     </Grid>
     <Grid item xs={12}  >
    <Box py={5}  ><Typography textAlign={'center'} color={'red'}  >بازیابی رمز عبور</Typography></Box>
     </Grid>
     <Grid item xs={12}  >
    <Box textAlign={'center'} py={4}>
        <Typography  variant='caption'  >برای بازیابی رمز عبور حساب کاربری خود، از فرم زیر اقدام نمایید.</Typography>
    </Box>
     </Grid>

     <Grid item xs={12}  >
   <Box px={4} >
   <DyTextField label={'شماره موبایل'} Icon={<UserPhoneNum/>} />
   </Box>
     </Grid>

     <Grid  item xs={12} >
        <Box px={5} py={3} >
        <DyButton 
        onClick={()=>{console.log('sendCode')}} color={'primary'} caption={'ارسال کد'} />
        </Box>
     </Grid>

     </Grid>
    </Grid>
    </Grid>
  )
}

export default ForgetPassword