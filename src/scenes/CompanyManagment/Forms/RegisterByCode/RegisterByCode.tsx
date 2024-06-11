import React, { useState,useEffect } from 'react';
import { Grid, Box, Typography,TextField, IconButton } from '@mui/material';
import { Formik, Form } from 'formik';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import { resetFormValues } from '../../../OKRManagment/StaticData';
import {phoneNumberSchema,passValidationSchema} from '../../StaticData/index'
import { usePersonByInvitationCode,useAddNewPassWord } from '../../Hooks';
import CloseIcon from '@mui/icons-material/Close';

import LockResetIcon from '@mui/icons-material/Person';

const RegisterByCode = (props: any) => {
const sucessSend=()=>{
}

const sucessForgetPassword=()=>{
  setContentState({ content: 'login' })
}

  const{mutate:callAddNewPassWord,data:AddNewPassWordData,isLoading:addPassLoad}=useAddNewPassWord(sucessForgetPassword)
  const{mutate:sendSms,isLoading:sendSmsLoading,data:sendPersonByInvitationCode,isSuccess:isSuccess}=usePersonByInvitationCode(sucessSend);

  const[userPhoneNumber,setUserPhoneNumber]=useState<string>('')
  const[userInvitationCode,setUserInvitationCode]=useState<string>('')
  const [content, setContent] = useState<string>('getPhoneNumber');
  const [contentMessage, setContentMessage] = useState<string>('لطفا شماره همراه خود را وارد نمایید')

  let { setContentState } = props;

  const initialCancel = () => {
    setContentState({ content: 'login' })
  };

  useEffect(() => {
   switch (content) {
      case 'register':
        setContentMessage('لطفا اطلاعات شخصی را کامل کنید')
        break;
   }
  }, [content])

  useEffect(() => {

    if (sendPersonByInvitationCode) {
      let{data}=sendPersonByInvitationCode;
      let{isSuccess, metaData}=data;
      if (isSuccess) {
        setContent('register')
      }
      else{
        setContentMessage(metaData.message)
      }
    }
  }, [sendPersonByInvitationCode])


  const renderContent = () => {
    switch (content) {
      case 'getPhoneNumber':
        return <Formik 
        enableReinitialize
        validationSchema={phoneNumberSchema}
        initialValues={{ phoneNumber: '',invitationCode:'' }}
          onSubmit={(data: any) => {
            let{phoneNumber, invitationCode}=data;
            setUserPhoneNumber(phoneNumber);
            setUserInvitationCode(invitationCode);
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
                      name='invitationCode'
                      fullWidth
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

       
        case 'register':
          return <Formik 
          enableReinitialize
          validationSchema={passValidationSchema}
          initialValues={{phoneNumber:userPhoneNumber,invitationCode :userInvitationCode,
            firstName : '', lastName : '', jobType : '',
             newPassword:'',confirmNewPassword:'' }}
          onSubmit={(data: any) => {
           
            callAddNewPassWord(data)
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
                        value={values.firstName}
                        onChange={({target}:any)=>{
                          let{value}:any=target;
                          setFieldValue('firstName',value)
                        }}
                        label={'نام'}   />
                     </Box>
                  </Grid>
                  <Grid item xs={7} flexGrow={1} mx={'auto'}  >
       
                    <Box  sx={{padding:'8px'}}  >
                    <TextField 
                      fullWidth
                      size='small'                     
                      value={values.lastName}
                      onChange={({target}:any)=>{
                        let{value}:any=target;
                        setFieldValue('lastName',value)
                      }}
                      label={'نام خانوادگی'}   />
                    </Box>
                </Grid>

                <Grid item xs={7} flexGrow={1} mx={'auto'}  >
       
                  <Box  sx={{padding:'8px'}}  >
                  <TextField 
                    fullWidth
                    size='small'                     
                    value={values.jobType}
                    onChange={({target}:any)=>{
                      let{value}:any=target;
                      setFieldValue('jobType',value)
                    }}
                    label={'عنوان شغلی'}   />
                  </Box>
              </Grid>

                  <Grid item xs={7} flexGrow={1} mx={'auto'}  >
       
                  <Box  sx={{padding:'8px'}}  >
                  <TextField 
                    fullWidth
                    size='small'                     
                    value={values.newPassword}
                    onChange={({target}:any)=>{
                      let{value}:any=target;
                      setFieldValue('newPassword',value)
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