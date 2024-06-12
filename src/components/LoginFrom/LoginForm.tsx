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
import DYToastMessage from '../GlobalComponents/DyToastMessage/DYToastMessage';
import './Style.css';
import SchoolIcon from '@mui/icons-material/School';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SportsIcon from '@mui/icons-material/Sports';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import Divider from '@mui/material/Divider';
import { useDispatch } from 'react-redux';
import {resetMeetingSliceR} from '../../scenes/Meeting/MeetingsSlice/MeetingsSlice'


const LoginForm = ({ setContentState }: any) => {

  
  const { width } = useWindowDimensions();
  const [loginStatusLocal, setLoginStatusLocal] = useState<boolean | null>(null);
  const [loginMessage, setLoginMessage] = useState<string | null>(null)
  let authDevice = width > 900;

  const loginStatus: any = useSelector((state: any) => state.loign.loginStatus);
  const dispatch=useDispatch();
  // const userInfo:any=useAppSelector(state=>state.loign.userInfo.userPhoneNumber)
  const loginSuccess = () => {
    // navigate('/dashboard',{replace:true})
    // console.log(logdata)
    // if (loginStatus?.hasOwnProperty('accessToken')) {
    setContentState((prev: any) => ({ ...prev, content: 'userTypeSelection' }));
    // }
  }



  useEffect(() => {
  
    
    let initialValues={
      priodId:'',
      periodName:'',
      meetingId:'',
      profileTenantId:'',
      teamId:'',
      profileName:'',
      periodList:[],
      meetingsList:null,
      teamsData:[],
      teamInfo:{},
      companyList:[],
      teamList:[],
      objectivie:[],
      keyResults:[],
      loading:false,
      objUpdated:false,
      changeTenantMode:false,
      meetSelectedDate:'',
      
      treeViewState:{
      treeView:true
      }
      ,
      counter:0
    
    }
    dispatch(resetMeetingSliceR(initialValues))
  
    
  }, )
  

  const loginFailed = () => {

  }
  const { data: logdata, mutate: LoginReq, isLoading } = useLogin(loginSuccess, loginFailed)

  const userBody = {
    phoneNumber: "",
    password: "",
    smsCode: "",
    isOTP: false
  }
 

  const initialValue = {
    phoneNumber: '09198390527',
    password: 'AriaBarbod'
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

  useEffect(() => {
    if (logdata) {
      // console.log(logdata)
      let { data: { isSuccess, data, metaData } }: any = logdata;
      let { message }: any = metaData;
      let logStatus = { success: isSuccess };
      // console.log(message)
      setLoginMessage(message);
      // loginMessage,setLoginMessage
      setLoginStatusLocal(!loginStatus)
      // console.log(isSuccess, data)
    }

  }, [logdata])

  const linkStyle = {
    fontSize: '0.6rem'
  }


  if (!authDevice) {
    return <Box width={'100%'} py={1} textAlign={'center'}  >

      <Grid xs={12}   >
        <Box width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          textAlign={'center'}
          flexDirection={'column'}
          rowGap={2}
        >
          <Box>
            <Typography color={'red'} fontWeight={900} fontSize={'1.1rem'} >
              لطفا از نسخه موبایل استفاده کنید
            </Typography>
          </Box>
          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            columnGap={1}
            alignItems={'center'}
          >
            <Box mt={0.5}>
              <a target='_blank'
                style={{ textDecoration: 'none', }}
                rel='noopener noreferrer' href="https://mobile.myokr.ir/">
                <Typography color='primary' fontWeight={900} variant='h6'   >نسخه موبایل
                  {/* <SchoolIcon   /> */}

                </Typography>
              </a>
            </Box>
            <Box>
              <AndroidIcon color='primary' />
            </Box>
          </Box>

          <Divider variant="middle" />

          {/* <Typography  fontSize={'0.7rem'} fontWeight={600} color={'blue'}  > */}
          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            columnGap={1}
            alignItems={'center'}
          >
            <Box mt={0.5}>
              <a target='_blank'
                style={{ textDecoration: 'none', }}
                rel='noopener noreferrer' href=" https://okrcoach.ir/okrcoach-software-online/installation/">
                <Typography color='primary'   > آموزش نرم افزار
                  {/* <SchoolIcon   /> */}

                </Typography>
              </a>
            </Box>
            <Box>
              <SchoolIcon color='primary' />
            </Box>
          </Box>

          <Divider variant="middle" />

          {/* ////////////////////// */}


          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            columnGap={1}
            alignItems={'center'}
          >
            <Box mt={0.5}>
              <a target='_blank'
                style={{ textDecoration: 'none', }}
                rel='noopener noreferrer' href="https://okrcoach.ir/okrcoach-software-online/">
                <Typography color='primary'   > خرید اشتراک نرم افزار
                  {/* <SchoolIcon   /> */}

                </Typography>
              </a>
            </Box>
            <Box>
              <CreditCardIcon color='primary' />
            </Box>
          </Box>
          <Divider variant="middle" />


          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            columnGap={1}
            alignItems={'center'}
          >
            <Box mt={0.5}>
              <a target='_blank'
                style={{ textDecoration: 'none', }}
                rel='noopener noreferrer' href="https://okrcoach.ir/okr-coach/">
                <Typography color='primary'   > درخواست مربی
                  {/* <SchoolIcon   /> */}

                </Typography>
              </a>
            </Box>
            <Box>
              <SportsIcon color='primary' />
            </Box>
          </Box>

          <Divider variant="middle" />

          {/* ////////////////////// */}


          {/* <a target='_blank'
            style={{ textDecoration: 'none', }}
            rel='noopener noreferrer' href="https://okrcoach.ir/customers/ "><Typography   >مشتریان ما<Box mt={'5px'}    >
              <HandshakeIcon />
            </Box>
            </Typography>
          </a> */}


          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            columnGap={1}
            alignItems={'center'}
          >
            <Box mt={0.5}>
              <a target='_blank'
                style={{ textDecoration: 'none', }}
                rel='noopener noreferrer' href="https://okrcoach.ir/customers/">
                <Typography color='primary'   > مشتریان ما


                </Typography>
              </a>
            </Box>
            <Box>
              <HandshakeIcon color='primary' />
            </Box>
          </Box>

          <Divider variant="middle" />



          {/* <a target='_blank'
            style={{ textDecoration: 'none', }}
            rel='noopener noreferrer' href=" https://okrcoach.ir/amir-imenpour/ "><Typography   >معرفی ما<Box mt={'5px'}    >
              <CoPresentIcon />
            </Box>
            </Typography>
          </a> */}


          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            columnGap={1}
            alignItems={'center'}
          >
            <Box mt={0.5}>
              <a target='_blank'
                style={{ textDecoration: 'none' }}
                rel='noopener noreferrer' href="https://okrcoach.ir/amir-imenpour/">
                <Typography color='primary'   >معرفی ما


                </Typography>
              </a>
            </Box>
            <Box>
              <CoPresentIcon color='primary' />
            </Box>
          </Box>

          <Divider variant="middle" />

          {/* <a target='_blank'
            style={{ textDecoration: 'none', }}
            rel='noopener noreferrer' href="https://okrcoach.ir/services/course/"><Typography   ><Box mt={'5px'}    >
              <SchoolIcon />
            </Box>
            </Typography>
          </a> */}


          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            columnGap={1}
            alignItems={'center'}
          >
            <Box mt={0.5}>
              <a target='_blank'
                style={{ textDecoration: 'none' }}
                rel='noopener noreferrer' href="https://okrcoach.ir/services/course/">
                <Typography color='primary'   >آموزش OKR
                </Typography>
              </a>
            </Box>
            <Box>
              <SchoolIcon color='primary' />
            </Box>
          </Box>

          <Divider variant="middle" />





          {/* <Box display={'flex'} alignItems={'center'}  >
            <a target='_blank'
              style={{ textDecoration: 'none', }}
              rel='noopener noreferrer' href=" https://okrcoach.ir/okr-blog/">
              <Typography>

              </Typography>

            </a>
            <NewspaperIcon />
          </Box> */}


          <Box
            width={'100%'}
            display={'flex'}
            justifyContent={'center'}
            columnGap={1}
            alignItems={'center'}
          >
            <Box mt={0.5}>
              <a target='_blank'
                style={{ textDecoration: 'none' }}
                rel='noopener noreferrer' href="https://okrcoach.ir/okr-blog/">
                <Typography color='primary'   >مجله OKR
                </Typography>
              </a>
            </Box>
            <Box>
              <NewspaperIcon color='primary' />
            </Box>
          </Box>

          <Divider variant="middle" />






          {/* </Typography> */}

        </Box>
      </Grid>


    </Box>
  }

  const initialChangePass=()=>{
    setContentState((prev: any) => ({ ...prev, content: 'resetPassword' }))
    console.log('initialChangePass')
  }

  const initialRegisterByCode=()=>{
    setContentState((prev: any) => ({ ...prev, content: 'registerByCode' }))
    console.log('registerByCode')
  }



  if (isLoading) {
    return <LyBackdrop visible={true}  >
      <CircularProgress sx={{ color: 'white' }} />
    </LyBackdrop>
  }





  return (
    <Grid container  >

      <Grid item xs={12} md={8} mx={'auto'} bgcolor={'white'} borderRadius={4}  >
        <Grid container rowGap={1} >
          <Grid item xs={12} >
            <Typography px={4}  fontWeight={900} fontSize={'1.5rem'} color={'blue'} sx={{ p: 4 }} textAlign={'left'}  >
              {/* خوش آمدید */}
            </Typography>
            <Typography fontSize={'18px'} fontWeight={600}>برای ورود شماره موبایل خود را وارد کنید</Typography>
          </Grid>

          <Grid item xs={12}  >
            <Grid container px={3} >
              {/* <Grid item xs={12} display={'flex'} alignItems={'center'}  >
                <Typography px={4} fontWeight={600} >سلام</Typography>
              </Grid> */}
              <Grid item xs={12} my={1} display={'flex'} alignItems={'center'} >
                {/* <Typography fontSize={'18px'} fontWeight={600}>برای ورود /ثبت نام شماره موبایل خود را وارد کنید</Typography> */}
              </Grid>

            </Grid>
          </Grid>

          <Grid item xs={12} px={3}  >
            <form autoComplete="off">
              <Grid container  >
                <Grid item xs={12}   >
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





                <Grid item xs={12}  py={3} >
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
           
               
                {/* <Grid item xs={8} mx={'auto'} >
                  <Box  >
                    <DyButton
                      caption={'ثبت نام با کد دعوت'}
                      color={'#003287C'}
                      onClick={initialRegisterByCode}
                      variant={'text'}
                      // bgColor={'#00347C'}
                      // type={'submit'}
                    />
                  </Box>
                </Grid> */}
                {/* 00387C */}
                <Grid item xs={12} mx={'auto'} >
                  <Box display={'flex'} flexDirection={'row-reverse'} justifyContent={'space-between'}>
                  <Box py={1} px={2} display={'flex'} flexDirection={'row-reverse'} justifyContent={'space-between'}>
                    <DyButton
                      caption={'ثبت نام با کد دعوت'}
                      onClick={initialRegisterByCode}
                      variant={'text'}
                      
                    
                      // bgColor={'#00347C'}
                      // type={'submit'}
                    />
                  </Box>
                  <Box   py={1} px={2} display={'flex'} flexDirection={'row-reverse'} justifyContent={'space-between'}>
                    <DyButton
                      caption={'فراموشی رمز عبور'}
                    
                      onClick={initialChangePass}
                      variant={'text'}
                      type={'submit'}
                      // bgColor={'#00347C'}
                      // type={'submit'}
                    />
                  </Box>
                 </Box>
                </Grid>




                <Grid item xs={8}  mx={'auto'} >
                  <Box  py={1} px={2} >
                    <DyButton
                      caption={'ورود'}
                   
                      onClick={loginHandler}
                      disbled={userInfoState.phoneNumber.length < 11}
                      variant={'contained'}
                      bgColor={'#00387C'}
                      type={'submit'}
                    />
                  </Box>
                </Grid>
            

            

                <Grid item xs={12} mt={5} mx={'auto'} >
                  <Box width={'100%'}
                    display={'flex'}
                    justifyContent={'center'}
                    textAlign={'center'}
                    flexDirection={'column'}
                    rowGap={1}
                  >


                    <Box display={'flex'} flexDirection={'column'} justifyContent={'space-between'}>

                    {/* <Typography  fontSize={'0.7rem'} fontWeight={600} color={'blue'}  > */}
                    <Box
                      width={'100%'}
                      display={'flex'}
                      justifyContent={'center'}
                      columnGap={1}
                      alignItems={'center'}

                    >
                      <Box mt={0.5}>
                      
                        <a target='_blank'
                          style={{ textDecoration: 'none', }}
                          rel='noopener noreferrer' href=" https://okrcoach.ir/okrcoach-software-online/installation/">
                          <Typography sx={linkStyle} color='primary'   > آموزش نرم افزار
                            {/* <SchoolIcon   /> */}

                          </Typography>
                        </a>
                      </Box>
                      <Box>
                        <SchoolIcon color='primary' />
                      </Box>
                    </Box>

                    <Divider variant="middle" />

                    {/* ////////////////////// */}
                    
                    <Box
                      width={'100%'}
                      display={'flex'}
                      justifyContent={'center'}
                      columnGap={1}
                      alignItems={'center'}
                    >
                      <Box mt={0.5}>
                        <a target='_blank'
                          style={{ textDecoration: 'none' }}
                          rel='noopener noreferrer' href="https://okrcoach.ir/okr-blog/">
                          <Typography sx={linkStyle} color='primary'   >مجله OKR
                          </Typography>
                        </a>
                      </Box>
                      <Box>
                        <NewspaperIcon color='primary' />
                      </Box>
                    </Box>
                    




                    {/* <Box
                      width={'100%'}
                      display={'flex'}
                      justifyContent={'center'}
                      columnGap={1}
                      alignItems={'center'}
                    >
                      <Box mt={0.5}>
                        <a target='_blank'
                          style={{ textDecoration: 'none', }}
                          rel='noopener noreferrer' href="https://okrcoach.ir/okrcoach-software-online/">
                          <Typography sx={linkStyle} color='primary'   > خرید اشتراک نرم افزار
                            {/* <SchoolIcon   /> */}
{/* 
                          </Typography>
                        </a>
                      </Box>
                      <Box>
                        <CreditCardIcon color='primary' />
                      </Box>
                    </Box> */} 
                    </Box>
                    <Divider variant="middle" />

                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                    <Box
                      width={'100%'}
                      display={'flex'}
                      justifyContent={'center'}
                      columnGap={1}
                      alignItems={'center'}
                    >
                      <Box mt={0.5}>
                        <a target='_blank'
                          style={{ textDecoration: 'none' }}
                          rel='noopener noreferrer' href="https://okrcoach.ir/services/course/">
                          <Typography sx={linkStyle} color='primary'   >آموزش OKR
                          </Typography>
                        </a>
                      </Box>
                      <Box>
                        <SchoolIcon color='primary' />
                      </Box>
                    </Box>
                    </Box>
                    



                    {/* <Box
                      width={'100%'}
                      display={'flex'}
                      justifyContent={'center'}
                      columnGap={1}
                      alignItems={'center'}
                    >
                      <Box mt={0.5}>
                        <a target='_blank'
                          style={{ textDecoration: 'none', }}
                          rel='noopener noreferrer' href="https://okrcoach.ir/okr-coach/">
                          <Typography sx={linkStyle} color='primary'   > درخواست مربی
                            {/* <SchoolIcon   /> */}

                          {/* </Typography>
                        </a>
                      </Box>
                      <Box>
                        <SportsIcon color='primary' />
                      </Box> 
                    </Box> */}

                    <Divider variant="middle" />
{/* 
                    <Box
                      width={'100%'}
                      display={'flex'}
                      justifyContent={'center'}
                      columnGap={1}
                      alignItems={'center'}
                    >
                      <Box mt={0.5}>
                        <a target='_blank'
                          style={{ textDecoration: 'none', }}
                          rel='noopener noreferrer' href="https://okrcoach.ir/customers/">
                          <Typography sx={linkStyle} color='primary'   > مشتریان ما


                          </Typography>
                        </a>
                      </Box>
                      <Box>
                        <HandshakeIcon color='primary' />
                      </Box>
                    </Box> */}
                  
                    {/* <Divider variant="middle" /> */}
                    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                    <Box
                      width={'100%'}
                      display={'flex'}
                      justifyContent={'center'}
                      columnGap={1}
                      alignItems={'center'}
                    >
                      <Box mt={0.5}>
                        <a target='_blank'
                          style={{ textDecoration: 'none' }}
                          rel='noopener noreferrer' href="https://okrcoach.ir/amir-imenpour/">
                          <Typography sx={linkStyle} color='primary'   >معرفی ما


                          </Typography>
                        </a>
                      </Box>
                      <Box>
                        <CoPresentIcon color='primary' />
                      </Box>
                    </Box>

                    <Divider variant="middle" />

                    {/* <Box
                      width={'100%'}
                      display={'flex'}
                      justifyContent={'center'}
                      columnGap={1}
                      alignItems={'center'}
                    >
                      <Box mt={0.5}>
                        <a target='_blank'
                          style={{ textDecoration: 'none' }}
                          rel='noopener noreferrer' href="https://okrcoach.ir/services/course/">
                          <Typography sx={linkStyle} color='primary'   >آموزش OKR
                          </Typography>
                        </a>
                      </Box>
                      <Box>
                        <SchoolIcon color='primary' />
                      </Box>
                    </Box>
                    </Box> */}
                    {/* <Divider variant="middle" /> */}

{/* 
                    <Box
                      width={'100%'}
                      display={'flex'}
                      justifyContent={'center'}
                      columnGap={1}
                      alignItems={'center'}
                    >
                      <Box mt={0.5}>
                        <a target='_blank'
                          style={{ textDecoration: 'none' }}
                          rel='noopener noreferrer' href="https://okrcoach.ir/okr-blog/">
                          <Typography sx={linkStyle} color='primary'   >مجله OKR
                          </Typography>
                        </a>
                      </Box>
                      <Box>
                        <NewspaperIcon color='primary' />
                      </Box>
                    </Box> */}

                    {/* <Divider variant="middle" /> */}
                    </Box>
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


        {/* show,setShow} */}
      </Grid>
      {
        loginStatusLocal && loginMessage &&
        <DYToastMessage
          show={!loginStatus}
          setShow={setLoginStatusLocal}
          message={loginMessage}
        />
      }






    </Grid>
  )
}

export default LoginForm