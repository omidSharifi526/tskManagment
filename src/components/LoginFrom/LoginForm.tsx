import React from 'react';
import {Box,Grid,TextField,Typography,Button, OutlinedInput,FormHelperText} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import UserPhoneNum from '../Login/Statics/Icons/UserPhoneNum/UserPhoneNum';
import DyTextField from '../GlobalComponents/DyTextField/DyTextField';
import PassIcon from '../Login/Statics/Icons/PassIcon/PassIcon';
import DyButton from '../GlobalComponents/DyButton/DyButton';
import LyBackdrop from '../Layouts/BackDrop/BackDrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../Store/Store';
import {setUserPhoneNumberR} from '../Login/LoginSlice/LoginSlice';
import{useState,useEffect} from 'react';
import { useAppSelector } from '../../Store/Store';

import UserTypeSelection from '../../scenes/Meeting/LComponents/UserTypeSelection/UserTypeSelection';
import {useLogin} from '../Login/Hooks/Index';
// userInfo:{
//   userPhoneNumber:''

const LoginForm = ({setContentState}:any) => {
  const dispatch:any=useAppDispatch();
  // const userInfo:any=useAppSelector(state=>state.loign.userInfo.userPhoneNumber)
  const loginSuccess=()=>{
        // navigate('/dashboard',{replace:true})
        setContentState((prev:any)=>({...prev,content:'userTypeSelection'}));
  }

  const loginFailed=()=>{

  }
  const{mutate:LoginReq,isLoading}=useLogin(loginSuccess,loginFailed)
  const navigate = useNavigate();
  const userBody = {
    phoneNumber: "",
    password: "",
    smsCode: "",
    isOTP: false
  }
  const initialValue={
    phoneNumber:'',
    password:''
  }
  const [userInfoState,setUserInfoState]=useState<any>(userBody  || null);




  const initialForgetPass=()=>{
    console.log('runnn')
    setContentState((prev:any)=>({...prev,content:'forgetPassWord'}))
  }

  const loginHandler=()=>{
    LoginReq(userInfoState)

    dispatch(setUserPhoneNumberR(userInfoState ||''))
    console.log(userInfoState)
  }

  const initSetPhoneNum=()=>{
    // dispatch(setUserPhoneNumberR(phoneNum))
  }
  // console.log(data)

  const initSetUserInfoState=({target}:any)=>{
  console.log(target)
  }

  
  if (isLoading) {
    return <LyBackdrop visible={true}  >
      <CircularProgress sx={{color:'white'}}  />
    </LyBackdrop>
  }

  return (
    <Grid container >
   
         <Grid item xs={10} md={8}  mx={'auto'} bgcolor={'white'}  borderRadius={4}  >
            <Grid container  rowGap={2} >
            <Grid item xs={12} >
            <Typography fontWeight={900} fontSize={'1.2rem'} sx={{p:4}} color={'red'} textAlign={'center'} mt={2} >
            خوش آمدید
            </Typography>
            </Grid>

            <Grid item xs={12}  >
           <Grid container  px={3} >
           <Grid item xs={12} my={1} display={'flex'} alignItems={'center'}  >
          <Typography fontWeight={800} color={'primary'} >سلام</Typography>
           </Grid>
           <Grid item xs={12} my={1}  display={'flex'} alignItems={'center'} >
           <Typography color={'primary'} >برای ورود /ثبت نام شماره موبایل خود را وارد کنید</Typography>
            </Grid>
           
           </Grid>
           </Grid>

            <Grid item xs={12} px={3}  >
            <form autoComplete="off">
              <Grid container  >
              <Grid item xs={12} px={3}  >
              <FormControl  fullWidth>
              <DyTextField 
              label={'شماره موبایل'}
              Icon={<UserPhoneNum/>}
              onchangee={setUserInfoState}
              value={userInfoState.phoneNumber || ''}
              name={'phoneNumber'}
              />
            </FormControl>
            </Grid>

           



              <Grid item xs={12} px={3} py={3} >
              <FormControl fullWidth  >
                <DyTextField 
                label={'رمز عبور'}
                Icon={<UserPhoneNum/>}
                onchangee={setUserInfoState}
                value={userInfoState.passWord || ''}
                name={'passWord'}
                type={'password'}
                />
                </FormControl>

                </Grid> 

          
              
             <Grid item xs={12} >
            <Box px={3} py={5} >
            <DyButton 
             caption={'ورود'}
             color={'primary'} 
             onClick={loginHandler}
             disbled={userInfoState.phoneNumber.length<11}
             variant={'contained'}
            //  type={'submit'}
             />
            </Box>
            </Grid> 



              </Grid>
              {/* <FormControl sx={{ width: '25ch' }}>
                <OutlinedInput placeholder="Please enter text" />
                <FormHelperText  />
              </FormControl> */}
            </form>

            </Grid>

        

           

          

        



            </Grid>
           
           

        </Grid>

        
    

    </Grid>
  )
}

export default LoginForm