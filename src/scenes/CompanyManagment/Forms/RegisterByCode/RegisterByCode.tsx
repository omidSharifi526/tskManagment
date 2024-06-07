import React, { useState,useEffect } from 'react';
import { Grid, Box, Typography,TextField, IconButton } from '@mui/material';
import { Formik, Form } from 'formik';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import { resetFormValues } from '../../../OKRManagment/StaticData';
import {phoneNumberSchema,codeNumberSchema,passValidationSchema} from '../../StaticData/index'
import { usePersonByInvitationCode,useCheckForgetCode,useAddNewPassWord } from '../../Hooks';
import CloseIcon from '@mui/icons-material/Close';

import LockResetIcon from '@mui/icons-material/LockReset';

const RegisterByCode = (props: any) => {
  const [StatusCheckCode,setStatusCheckCode]=useState<boolean|null>(false)
const sucessSend=()=>{
          
  // setContent('enterCode')

  if (true) {
    setContent('enterCode')
  }
  // else{
 
  // }
}

// const successCheckForgetCode=()=>{
//   if (StatusCheckCode) {
//     setContent('enterNewPassword')
//   } else {
//        setContentMessage('کد وارد شده اشتباه است')
//        setTimeout(() => {
//         setStatusCheckCode(true)
//        }, 1000);
//   }

// }

const sucessForgetPassword=()=>{
  setContentState({ content: 'login' })
}

  const{mutate:callAddNewPassWord,data:AddNewPassWordData,isLoading:addPassLoad}=useAddNewPassWord(sucessForgetPassword)
  const{mutate:sendSms,isLoading:sendSmsLoading,data:sendSmsData,isSuccess:isSuccess}=usePersonByInvitationCode(sucessSend);
  const{mutate:checkCode,isLoading:checkCodeLoading,data:checkCodeData}=useCheckForgetCode();
  // const{mutata:callAddNewPassWord,isLoading:addPassLoading,data:addPassData}=useForgetPassword(sucessForgetPassword)

  const[userPhoneNumber,setUserPhoneNumber]=useState<string>('')
  const [content, setContent] = useState<string>('getPhoneNumber');
  const [contentMessage, setContentMessage] = useState<string>('لطفا شماره همراه خود را وارد نمایید')

  let { setContentState } = props;

  const initialCancel = () => {
    setContentState({ content: 'login' })
  };

  useEffect(() => {
   switch (content) {
    case 'enterCode':
      setContentMessage('کد دریافتی را وارد کنید')
      break;

      case 'enterNewPassword':
        setContentMessage('رمز جدید خود را وارد کنید')
        break;

   }
  
   
  }, [content])

  useEffect(() => {

    if (isSuccess) {
      // console.log(checkCodeData)

      //let{message}=sendSmsData;
      if (isSuccess) {
        setContent('enterNewPassword')
      }
      else{
        setContentMessage('کد وارد شده اشتباه است')
      }
      
    }
  }, [isSuccess])
  
  useEffect(() => {

    if (checkCodeData) {
      // console.log(checkCodeData)

      let{data}=checkCodeData;
      if (data) {
        setContent('enterNewPassword')
      }
      else{
        setContentMessage('کد وارد شده اشتباه است')
      }
      
    }

    


  }, [checkCodeData])
  

// phoneNumber
  const renderContent = () => {
    switch (content) {
      case 'getPhoneNumber':
        return <Formik 
        enableReinitialize
        validationSchema={phoneNumberSchema}
        initialValues={{ phoneNumber: '',smsType:'Forget' }}
          onSubmit={(data: any) => {
            let{phoneNumber}=data;
            setUserPhoneNumber(phoneNumber);
            sendSms(data)
          }}
        >
          {
            ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
              <Form>
                <Grid container columnSpacing={1}
                  sx={{ bgcolor: 'background.paper', mx: 'auto', borderRadius: 3 }}   >


                  <Grid item xs={7} flexGrow={1} mx={'auto'}  >
                    <FormikControl
                      control='textField'
                      label='شماره تلفن'
                      name='phoneNumber'
                      fullWidth
                      value={values.phoneNumber || ''}
                    />
                  </Grid>
                  <Grid item xs={7} flexGrow={1} mx={'auto'}  >
                    <FormikControl
                      control='textField'
                      label='کد دعوت'
                      name='InvitationCode'
                      fullWidth
                      //value={values.invitationCode || ''}
                    />
                  </Grid>

                  <Grid item xs={6} flexGrow={1} mx={'auto'}>
                    <Box >
                      <DyButton
                        caption={'بررسی کد دعوت'}
                        color={'#00387C'}
                        onClick={() => { }}
                        disabled={!isValid || !dirty || sendSmsLoading}
                        variant={'contained'}
                        bgColor={'#00387C'}
                        type={'submit'}
                      />
                    </Box>
                  </Grid>
                </Grid>


              </Form>
          }

        </Formik>
        break;

        case 'enterCode':
          return <Formik 
          enableReinitialize
          validationSchema={codeNumberSchema}
          initialValues={{phoneNumber:userPhoneNumber,code:'' }}
          onSubmit={(data: any) => {
            checkCode(data)
          console.log(data)
  
          
          
          }}
        >
          {
            ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
              <Form>
                <Grid container columnSpacing={1}
                  sx={{ bgcolor: 'background.paper', mx: 'auto', borderRadius: 3 }}   >


                  <Grid item xs={7} flexGrow={1} mx={'auto'}  >
                      <Box  sx={{padding:'8px'}}  >
                     <TextField 
                        fullWidth
                        size='small'                     
                        value={values.code}
                        onChange={({target}:any)=>{
                          let{value}:any=target;
                          setFieldValue('code',value)
                          // initialSetHunderdvalue(value)
                        }}
                        label={'کد دریافتی'}   />
                     </Box>
                  </Grid>

                  <Grid item xs={6} flexGrow={1} mx={'auto'}>
                    <Box >
                      <DyButton
                        caption={'تایید و ادامه'}
                        color={'#00387C'}
                        onClick={() => { }}
                        disabled={checkCodeLoading || !isValid || !dirty  }
                        variant={'contained'}
                        bgColor={'#00387C'}
                        type={'submit'}
                      />
                    </Box>
                  </Grid>
                </Grid>


              </Form>
          }

        </Formik>

        break;
        
        case 'enterNewPassword':
          return <Formik 
          enableReinitialize
          validationSchema={passValidationSchema}
          initialValues={{phoneNumber:userPhoneNumber,newPassword:'',confirmNewPassword:'' }}
          onSubmit={(data: any) => {
           
            callAddNewPassWord(data)
          // console.log(data)

          
          
          }}
        >
          {
            ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
              <Form>
                <Grid container columnSpacing={1}
                  sx={{ bgcolor: 'background.paper', mx: 'auto', borderRadius: 3 }}   >


                  <Grid item xs={7} flexGrow={1} mx={'auto'}  >
       
                      <Box  sx={{padding:'8px'}}  >
                     <TextField 
                        fullWidth
                        size='small'                     
                        value={values.newPassword}
                        onChange={({target}:any)=>{
                          let{value}:any=target;
                          setFieldValue('newPassword',value)
                          // initialSetHunderdvalue(value)
                        }}
                        label={'رمز عبور جدید'}   />
                     </Box>
                  </Grid>

                  <Grid item xs={7} flexGrow={1} mx={'auto'}  >
       
                    <Box  sx={{padding:'8px'}}  >
                    <TextField 
                      fullWidth
                      size='small'                     
                      value={values.confirmNewPassword}
                      onChange={({target}:any)=>{
                        let{value}:any=target;
                        setFieldValue('confirmNewPassword',value)
                      
                        // initialSetHunderdvalue(value)
                      }}
                      label={'تکرار رمز عبور جدید'}   />
                    </Box>
                </Grid>

                  <Grid item xs={6} flexGrow={1} mx={'auto'}>
                    <Box >
                      <DyButton
                        caption={'تایید'}
                        color={'#00387C'}
                        onClick={() => { }}
                        disabled={addPassLoad  || !isValid || !dirty}
                        variant={'contained'}
                        bgColor={'#00387C'}
                        type={'submit'}
                      />
                    </Box>
                  </Grid>
                </Grid>


              </Form>
          }

        </Formik>

        break;
   
    }
  }





  return (
    <Grid container mt={10} >
      <Grid item xs={9} mx={'auto'}  >
        <Box py={7} display={'flex'} justifyContent={'space-around'} alignItems={'center'} columnGap={2} >
          <Typography variant='body1' fontWeight={600} >
            {
              contentMessage
            }
          </Typography>
          <LockResetIcon fontSize='large' />
          <IconButton onClick={()=>{
             setContentState({ content: 'login' })
          }}   >
         <CloseIcon/>
          </IconButton>
        </Box>
      </Grid>
      <Grid item xs={12}   >

        {
          renderContent()
        }

      </Grid>

    </Grid>
  )
}

export default RegisterByCode