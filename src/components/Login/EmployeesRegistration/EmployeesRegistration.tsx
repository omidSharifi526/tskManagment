import React from 'react';
import{Grid,Typography,Box} from '@mui/material';
import DyTextField from '../../GlobalComponents/DyTextField/DyTextField';
import DyButton from '../../GlobalComponents/DyButton/DyButton';

const EmployeesRegistration = () => {
  return (
    <Grid container >
   
    <Grid item xs={10} md={8}  mx={'auto'} bgcolor={'white'} boxShadow={8} borderRadius={4}  >
       <Grid container  rowGap={2} >
       <Grid item xs={12} >
       <Typography fontWeight={900} fontSize={'1.2rem'} sx={{p:1}} color={'red'} textAlign={'center'} mt={2} >
       تکمیل ثبت نام
       </Typography>
       </Grid>

       <Grid item xs={12}  >
       <Box textAlign={'center'} py={1}>
        <Typography fontWeight={800} fontSize={'1.05rem'} color={'primary'} variant='caption'  >برای تکمیل ثبت نام لطفا فرم زیر را تکمیل نمایید.</Typography>
       </Box>
      </Grid>

       <Grid item xs={12} px={3}  >
        <DyTextField 
        label={'نام'}
        // onchangee={setRegisterInfo}
        name='fName'
        // value={registerInfo.fName}
        />
       </Grid>


       <Grid item xs={12} px={3}  >
        <DyTextField 
        label={'نام خانوادگی'}
        // onchangee={setRegisterInfo}
        name='lName'
        // value={registerInfo.lName}
        />
       </Grid>

       <Grid item xs={12} px={3}  >
        <DyTextField 
        label={'سمت'}
        // onchangee={setRegisterInfo}
        name='profileName'
        // value={registerInfo.profileName}
        />
       </Grid>

       <Grid item xs={12} >
       <Box px={3} py={5} >
       <DyButton 
        caption={'ثبت نام '}
        color={'primary'} 
        // onClick={handleRegister}
        // disbled={phoneNum.length<11}
        variant={'contained'}
        />
       </Box>
       </Grid>

       

       
      

     

     



       </Grid>
      
      

   </Grid>

   


</Grid>
  )
}

export default EmployeesRegistration