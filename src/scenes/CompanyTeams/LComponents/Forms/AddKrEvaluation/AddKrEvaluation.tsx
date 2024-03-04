import React, { FC, useState, useEffect } from 'react';
import { Grid, Box, FormControl, InputLabel, Select, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { ReactComponent as RateStar } from '../../../StataicData/Icons/RateStar.svg';
import FormikControl from '../../../../../components/FormikControls/FormikControl';
import { AddEvalFace } from '../../../Interfaces/interfaces';
import DyButton from '../../../../../components/GlobalComponents/DyButton/DyButton';
import { currentStateOptions,nextStateOptions } from '../../../StataicData';
import {useAddCheckinMeeting} from '../../../Hooks/index';
import { useSelector } from 'react-redux';
import AddMeetingSuccess from '../../../../Meeting/LComponents/AddMeetingSuccess/AddMeetingSuccess';
// {
//   "meetingId": "78667f0e-f023-454b-b7d4-261a38760a22",
//   "teamId": "fb7cc4ea-7162-4916-9aa8-834b14308e10",
//   "periodId": "9fc71f3a-3235-492d-927f-38eed39e6550",
//   "tenantId": "eb781974-3cb0-4c3a-881e-97af686ce7f5",
//   "keyResultId": "7d1efc88-7e55-49bc-b960-7fbec97afd36",
//   "objectiveId": "714820bb-0642-4159-8ac7-7fe54d9078f1",
//   "newValue": "20",
//   "tensileScore": "40",
//   "currentState": "OnTheRightTrack",
//   "nextState": "WeExpectToGetTheRightResult",
//   "problems": "test",
//   "description": "test",
//   "closedKeyResult": false,
// }













const AddKrEvaluation = ({cancelo,objectiveId,kresultId}:any) => {
  const meetingId: any = useSelector((state: any) => state.meetings.meetingId);
  const profileTenantId: any = useSelector((state: any) => state.meetings.profileTenantId);
  const priodId: any = useSelector((state: any) => state.meetings.priodId);
  const teamId: any = useSelector((state: any) => state.meetings.teamInfo?.id);
  console.log(teamId)
  const meetingData: AddEvalFace = {
    newValue: '',
    problems: '',
    nextState: '',
    meetingId:meetingId,
    teamId:teamId,
    periodId:priodId,
    tenantId:profileTenantId,
    keyResultId:kresultId,
    objectiveId:objectiveId,
    tensileScore:'100',
    currentState:'',
    description:'',
    closedKeyResult:false
  
  }
  const addCheckinSuccess=()=>{
    // cancelo()
    setRenderState('success')
  }
  const{mutate:addCheck,isSuccess}=useAddCheckinMeeting(addCheckinSuccess);

  const [renderState, setRenderState] = useState<string>('add');

  const initialCancel=():void=>{
    cancelo()
  }

  const initialSubmitForm:any=(data:any):any=>{
  console.log(data)
  addCheck(data)
  }


  const renderContent = () => {
    switch (renderState) {
      case 'add':
        return (
          <Formik enableReinitialize
            initialValues={meetingData}
            onSubmit={(data: AddEvalFace) => {
              // addCheckinMeeting(data)
              initialSubmitForm(data)

            }}


          >
            {
              ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
                <Form>
                  <Grid container columnSpacing={1}   >

                    <Grid item xs={12}   >
                      <Box>
                        <Typography>
                          تعداد مشترکین به 50,000 نفر افزایش یابد.
                        </Typography>
                        <Typography>
                          مقدار قبلی:  37,000
                        </Typography>
                        {/*  */}
                      </Box>
                    </Grid>
                    <Grid item xs={6}  >
                      <FormikControl
                        control='textField'
                        type='text'
                        label='مقدار جدید'
                        name='newValue'
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}  >
                      <Box columnGap={1} sx={{ width: '50%', display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'start', p: 2 }}  >

                        <Typography>امتیاز:</Typography>
                        <RateStar />
                      </Box>
                    </Grid>

                    <Grid item xs={11}  >
                      <FormikControl
                        control='textField'
                        type='text'
                        label=''
                        name='problems'
                        fullWidth
                        helperText={'موانعی که با آن مواجه هستید؟'}
                      />
                    </Grid>

                    <Grid item xs={12} md={6} >
                      <FormikControl
                        control='select'
                        type='select'
                        label=''
                        withIcon={true}
                        options={nextStateOptions}
                        name='nextState'
                        fullWidth
                        helperText={'وضعیت آتی این نتیجه کلیدی را چگونه پیش بینی می کنید؟'}
                      />
                    </Grid>


                    <Grid item xs={12} md={6} >
                      <FormikControl
                        control='select'
                        type='select'
                        label=''
                        // withIcon={true}
                        options={currentStateOptions}
                        name='currentState'
                        fullWidth
                        helperText={'وضعیت فعلی  نتیجه کلیدی را چگونه ارزیابی می کنید؟'}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} >
                      <FormikControl
                        control='textField'
                        type='text'
                        label=''
                        name='description'
                        fullWidth
                        placeholder={'توضیحات (اختیاری)  0/300'}
                      />
                    </Grid>

                    <Grid item xs={12}     >
                      <FormikControl
                        control='checkBox'
                        label='میخوام این نتیجه کلیدی بسته شود.'
                        name='closedKeyResult'
                      //  placeholder={"توضیحات  0/300"}



                      />
                    </Grid>


                    {/* obstacles */}


























                    <Grid item xs={12} mt={1}  >
                      <Box px={1} columnGap={2} display={'flex'} flexDirection={'row-reverse'}  >
                        <Box >
                          <DyButton
                            caption={'ذخیره'}
                            color={'#00387C'}
                            onClick={() => { }}
                            disbled={false}
                            variant={'contained'}
                            bgColor={'#00387C'}
                            type={'submit'}
                          />
                        </Box>

                        <Box>
                          <DyButton
                            caption={'انصراف'}
                            // color={'#00387C'}
                            // onClick={loginHandler}
                            disbled={false}
                            variant={'outlined'}
                            onClick={initialCancel}
                          />
                        </Box>

                      </Box>
                    </Grid>


                  </Grid>


                  {/* <Button color='info' type='submit'  >
                test
              </Button> */}
                </Form>
            }

          </Formik>

        )
        break;



        case 'success':
          return <Box width={'100%'} textAlign={'center'} py={5}  >
                 <AddMeetingSuccess 
                 formName={'ارزیابی' }
                 resetButton={false}
                 resetForm={setRenderState}
                 />
                 </Box>
      default:
        break;
    }
  }

  return (
    <>
      {
        renderContent()
      }

    </>
  )
}

export default AddKrEvaluation