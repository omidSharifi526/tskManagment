import React from 'react';
import {Box,Grid,TextField,Typography,Button} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import UserPhoneNum from '../Login/Statics/Icons/UserPhoneNum/UserPhoneNum';
import DyTextField from '../GlobalComponents/DyTextField/DyTextField';
import PassIcon from '../Login/Statics/Icons/PassIcon/PassIcon';
import DyButton from '../GlobalComponents/DyButton/DyButton';
import DyFingerPrint from '../GlobalComponents/DyFingerPrint/DyFingerPrint';
import { useNavigate } from "react-router-dom";

const LoginForm = ({setContentState}:any) => {
  const navigate = useNavigate();



  const initialForgetPass=()=>{
    console.log('runnn')
    setContentState((prev:any)=>({...prev,content:'forgetPassWord'}))
  }

  const loginHandler=()=>{
    navigate("/dashboard");
  }
  return (
    <Grid container >
   
         <Grid item xs={10} md={4}  mx={'auto'} bgcolor={'white'} boxShadow={4} borderRadius={4}  >
            <Grid container   >
            <Grid item xs={12} >
            <Typography sx={{p:4}} color={'red'} textAlign={'center'} mt={2} >
            ورود به حساب کاربری
            </Typography>
            </Grid>

            <Grid item xs={12} px={3}  >
             <DyTextField 
             label={'شماره موبایل'}
             Icon={<UserPhoneNum/>}

             />

            </Grid>

            <Grid item xs={12} mt={1} px={3} >
             <DyTextField 
             label={'رمز عبور'}
             Icon={<PassIcon/>}
             
             />

            </Grid>
            <Grid item xs={12}  >
            <Box my={1} px={3} >
            <Button onClick={initialForgetPass} >
            فراموشی رمز عبور؟
            </Button>
            </Box>
            </Grid>

            <Grid item xs={12} >
            <Box>
              <DyFingerPrint onClick={loginHandler} /> 
            </Box>
            </Grid>
  
  <Grid item xs={12} mx={'auto'} borderRadius={'0 0 15px 15px'} height={'200px'} bgcolor={'rgba(0, 56, 124, 1)'}   >

  </Grid>


            </Grid>
           
           

        </Grid>

        
    

    </Grid>
  )
}

export default LoginForm