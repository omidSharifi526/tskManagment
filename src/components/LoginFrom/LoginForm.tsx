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
import { useAppDispatch } from '../../Store/Store';
import {setUserPhoneNumberR} from '../Login/LoginSlice/LoginSlice';
import{useState,useEffect} from 'react';
import { useAppSelector } from '../../Store/Store';

import {useLogin} from '../Login/Hooks/Index'

const LoginForm = ({setContentState}:any) => {
  const dispatch=useAppDispatch();
  const userPhoneNumber=useAppSelector(state=>state.loign.userPhoneNumber)
  // const{mutate:LoginReq,data}=useLogin()
  const navigate = useNavigate();
  const [phoneNum,setPhoneNum]=useState<string>(userPhoneNumber||'');




  const initialForgetPass=()=>{
    console.log('runnn')
    setContentState((prev:any)=>({...prev,content:'forgetPassWord'}))
  }

  const loginHandler=()=>{
    // LoginReq()
    setContentState((prev:any)=>({...prev,content:'confirmCode'}));
    dispatch(setUserPhoneNumberR(phoneNum ||''))
    console.log(phoneNum)
  }

  const initSetPhoneNum=()=>{
    // dispatch(setUserPhoneNumberR(phoneNum))
  }
  // console.log(data)
  return (
    <Grid container >
   
         <Grid item xs={10} md={8}  mx={'auto'} bgcolor={'white'} boxShadow={8} borderRadius={4}  >
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
             <DyTextField 
             label={'شماره موبایل'}
             Icon={<UserPhoneNum/>}
             onchangee={setPhoneNum}
             value={phoneNum}
             />

            </Grid>

           

          

            <Grid item xs={12} >
            <Box px={3} py={5} >
            <DyButton 
             caption={'ارسال کد'}
             color={'primary'} 
             onClick={loginHandler}
            //  disbled={phoneNum.length<11}
             variant={'contained'}
             />
            </Box>
            </Grid>



            </Grid>
           
           

        </Grid>

        
    

    </Grid>
  )
}

export default LoginForm