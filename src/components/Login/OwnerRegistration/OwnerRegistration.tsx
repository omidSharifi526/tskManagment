import React from 'react';
import {Grid,Box,Typography,IconButton} from '@mui/material';
import DyTextField from '../../GlobalComponents/DyTextField/DyTextField';
import DyButton from '../../GlobalComponents/DyButton/DyButton';
import DySelect from '../../GlobalComponents/DySelect/DySelect';
import {useState,useEffect} from 'react';
import {countOfEmployees} from './StaticData/index';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const OwnerRegistration = ({setContentState}:any) => {
  const navigate = useNavigate();

  const handleBack=()=>{
    setContentState((prev:any)=>({...prev,content:'typeofMembership'}))
  }
    const initialValues={
        fName:'',
        lName:'',
        companyName:'',
        post:'',
        employeesCounts:1,
        password:'',
        confirmPass:''
    
      }
    const [registerInfo,setRegisterInfo]=useState(initialValues);

    const handleCompletingRegister=()=>{
      navigate('/dashboard',{replace:true})
    }



  return (
    <Grid container >
   
    <Grid item xs={10} md={8}  mx={'auto'} bgcolor={'white'}  borderRadius={4}  >
       <Grid container  rowGap={1} >
       <Grid item xs={12} >
        <Box px={2}>
      <IconButton  onClick={handleBack} >
        <ArrowForwardIcon/>
      </IconButton>
        </Box>
       </Grid>

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
        onchangee={setRegisterInfo}
        name='fName'
        value={registerInfo.fName}
        />
       </Grid>


       <Grid item xs={12} px={3}  >
        <DyTextField 
        label={'نام خانوادگی'}
        onchangee={setRegisterInfo}
        name='lName'
        value={registerInfo.lName}
        />
       </Grid>

       <Grid item xs={12} px={3}  >
        <DyTextField 
        label={'نام شرکت'}
        onchangee={setRegisterInfo}
        name='companyName'
        value={registerInfo.companyName}
        />
       </Grid>

       <Grid item xs={12} px={3}  >
        <DyTextField 
        label={'سمت'}
        onchangee={setRegisterInfo}
        name='post'
        value={registerInfo.post}
        />
       </Grid>

       <Grid item xs={12} px={3}  >
        <DySelect 
        label={'تعداد نفرات'}
        options={countOfEmployees}
        name={'employeesCounts'}
        value={registerInfo.employeesCounts}
        onChangee={setRegisterInfo}
        />
       </Grid>

{/* DySelect */}
       {/* post */}

       <Grid item xs={12} px={3}  >
        <DyTextField 
        label={'کلمه عبور'}
        onchangee={setRegisterInfo}
        name='password'
        value={registerInfo.password}
        type={'password'}
        />
       </Grid>

       
       <Grid item xs={12} px={3}  >
        <DyTextField 
        label={'تکرار کلمه عبور'}
        onchangee={setRegisterInfo}
        name='confirmPass'
        value={registerInfo.confirmPass}
        type={'password'}
        />
       </Grid>


     

       <Grid item xs={12} >
       <Box px={3} py={5} >
        {/* <Link to='dashboard' >test</Link> */}
       <DyButton 
        caption={'ثبت نام '}
        color={'primary'} 
        onClick={handleCompletingRegister}
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

export default OwnerRegistration