import React from 'react';
import { Box, Grid, TextField, Typography, Button, OutlinedInput, FormHelperText } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import UserPhoneNum from '../Login/Statics/Icons/UserPhoneNum/UserPhoneNum';
import DyTextField from '../GlobalComponents/DyTextField/DyTextField';
import PassIcon from '../Login/Statics/Icons/PassIcon/PassIcon';
import DyButton from '../GlobalComponents/DyButton/DyButton';
import LyBackdrop from '../Layouts/BackDrop/BackDrop';
import CircularProgress from '@mui/material/CircularProgress';
import KeyIcon from '@mui/icons-material/Key';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../Store/Store';
import { setUserPhoneNumberR } from '../Login/LoginSlice/LoginSlice';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../Store/Store';
import { useSelector } from 'react-redux';
import UserTypeSelection from '../../scenes/Meeting/LComponents/UserTypeSelection/UserTypeSelection';
import { useLogin } from '../Login/Hooks/Index';
import useWindowDimensions from '../DeviceSize/DeviceSize';
import AndroidIcon from '@mui/icons-material/Android';
import './Style.css'
// Link
// userInfo:{
//   userPhoneNumber:''

const LoginForm = ({ setContentState }: any) => {
  const { width } = useWindowDimensions();
  let authDevice = width > 900;

  const loginStatus: any = useSelector((state: any) => state.loign.loginStatus);
  const dispatch: any = useAppDispatch();
  // const userInfo:any=useAppSelector(state=>state.loign.userInfo.userPhoneNumber)
  const loginSuccess = () => {
    // navigate('/dashboard',{replace:true})
    // console.log(logdata)
    // if (loginStatus?.hasOwnProperty('accessToken')) {
    setContentState((prev: any) => ({ ...prev, content: 'userTypeSelection' }));
    // }
  }

  const loginFailed = () => {

  }
  const { data: logdata, mutate: LoginReq, isLoading } = useLogin(loginSuccess, loginFailed)

  const userBody = {
    phoneNumber: "09121223615",
    password: "123456",
    smsCode: "",
    isOTP: false
  }
  const initialValue = {
    phoneNumber: '',
    password: ''
  }
  const [userInfoState, setUserInfoState] = useState<any>(userBody || null);

  // console.log(logdata)


  const initialForgetPass = () => {
    // console.log('runnn')
    setContentState((prev: any) => ({ ...prev, content: 'forgetPassWord' }))
  }

  const loginHandler = () => {
    LoginReq(userInfoState)

    dispatch(setUserPhoneNumberR(userInfoState || ''))
    // console.log(userInfoState)
  }

  const initSetPhoneNum = () => {
    // dispatch(setUserPhoneNumberR(phoneNum))
  }
  // console.log(data)

  const initSetUserInfoState = ({ target }: any) => {
    // console.log(target)
  }

  if (!authDevice) {
    return <Box width={'100%'} py={5} textAlign={'center'}  >
      <Typography fontWeight={900} mt={4} fontSize={'1.1rem'} >
        لطفا از نسخه موبایل استفاده کنید
      </Typography>
      <Typography mt={5} fontSize={'1rem'} fontWeight={600} color={'blue'}  >
        <a target='_blank'
          style={{ textDecoration: 'none', marginTop: '20px' }}
          rel='noopener noreferrer' href="https://mobile.myokr.ir/">نسخه موبایل</a>

      </Typography>
      <AndroidIcon color='secondary' fontSize='large' />
    </Box>
  }



  if (isLoading) {
    return <LyBackdrop visible={true}  >
      <CircularProgress sx={{ color: 'white' }} />
    </LyBackdrop>
  }

  return (
    <Grid container >

      <Grid item xs={10} md={8} mx={'auto'} bgcolor={'white'} borderRadius={4}  >
        <Grid container rowGap={1} >
          <Grid item xs={12} >
            <Typography px={4} fontWeight={900} fontSize={'1.4rem'} color={'blue'} sx={{ p: 4 }} textAlign={'left'} mt={2} >
              خوش آمدید
            </Typography>
          </Grid>

          <Grid item xs={12}  >
            <Grid container px={3} >
              <Grid item xs={12} my={1} display={'flex'} alignItems={'center'}  >
                <Typography px={4} fontWeight={600} >سلام</Typography>
              </Grid>
              <Grid item xs={12} my={1} display={'flex'} alignItems={'center'} >
                <Typography px={4} >برای ورود /ثبت نام شماره موبایل خود را وارد کنید</Typography>
              </Grid>

            </Grid>
          </Grid>

          <Grid item xs={12} px={3}  >
            <form autoComplete="off">
              <Grid container  >
                <Grid item xs={12} px={3}  >
                  <FormControl fullWidth>
                    <DyTextField
                      label={'شماره موبایل'}
                      // Icon={<PhoneIcon/>}
                      onchangee={setUserInfoState}
                      value={userInfoState.phoneNumber || ''}
                      name={'phoneNumber'}
                      type={'text'}
                    />
                  </FormControl>
                </Grid>





                <Grid item xs={12} px={3} py={3} >
                  <FormControl fullWidth  >
                    <DyTextField
                      label={'رمز عبور'}
                      // Icon={<KeyIcon/>}
                      onchangee={setUserInfoState}
                      value={userInfoState.passWord || ''}
                      name={'passWord'}
                      type={'password'}
                    />
                  </FormControl>

                </Grid>

                {/* 00387C */}

                <Grid item xs={12} >
                  <Box px={3} py={5} >
                    <DyButton
                      caption={'ورود'}
                      color={'#00387C'}
                      onClick={loginHandler}
                      disbled={userInfoState.phoneNumber.length < 11}
                      variant={'contained'}
                      bgColor={'#00387C'}
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