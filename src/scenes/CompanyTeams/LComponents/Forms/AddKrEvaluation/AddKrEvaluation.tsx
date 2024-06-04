import React, { FC, useState, useEffect } from 'react';
import { Grid, Box, FormControl, InputLabel, Select, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { ReactComponent as RateStar } from '../../../StataicData/Icons/RateStar.svg';
import FormikControl from '../../../../../components/FormikControls/FormikControl';
import { AddEvalFace } from '../../../Interfaces/interfaces';
import DyButton from '../../../../../components/GlobalComponents/DyButton/DyButton';
import { currentStateOptions, nextStateOptions } from '../../../StataicData';
import { useAddCheckinMeeting } from '../../../Hooks/index';
import { useSelector } from 'react-redux';
import AddMeetingSuccess from '../../../../Meeting/LComponents/AddMeetingSuccess/AddMeetingSuccess';
import { useNavigate } from 'react-router-dom';
import { intaddKrSchema,straddKrSchema } from '../../../StataicData';
// useGetMeetingKeyResultValueById
import { useGetMeetingKeyResultValueById } from '../../../../Meeting/Hooks';













const AddKrEvaluation = ({ cancelo, objectiveId, kresultId,onsucces,pointingSystem,afterAddKr,rowSelectedData }: any) => {
  const meetingId: any = useSelector((state: any) => state.meetings.meetingId);
  const profileTenantId: any = useSelector((state: any) => state.meetings.profileTenantId);
  const priodId: any = useSelector((state: any) => state.meetings.priodId);
  const teamId: any = useSelector((state: any) => state.meetings.teamInfo?.id);
  const[initialValuesForm,setInitialValuesForm]=useState<any>({description:''})
const [pointSystemsL,setPointSystemL]=useState<string>('')
  useEffect(() => {
    if(pointingSystem==='مرحله ای'){
      setPointSystemL('req')
    }
   
  }, [pointingSystem]);

  

  const evaluationData: AddEvalFace = {
    newValue: '',
    problems: '',
    nextState: '',
    meetingId: meetingId,
    teamId: teamId,
    periodId: priodId,
    tenantId: profileTenantId,
    keyResultId: kresultId,
    objectiveId: objectiveId,
    // tensileScore: '',
    currentState: '',
    description: '',
    closedKeyResult: false
   

  }
  const addCheckinSuccess = () => {
    afterAddKr()
    cancelo()
    onsucces(true)

  }
  const { mutate: addCheck, isSuccess,isLoading } = useAddCheckinMeeting();
  const {data:initialNewValue,isLoading:iniValLoading}=useGetMeetingKeyResultValueById({meetingId:meetingId,krId:kresultId})

  const [renderState, setRenderState] = useState<string>('add');

  const initialCancel = (): void => {
    cancelo()
  }

  const initialSubmitForm: any = (data: any): any => {
    // console.log(data)
    addCheck(data)
 
  }

  useEffect(() => {
    // console.log(rowSelectedData)
  if (rowSelectedData) {
    let{description,problems,predict,currentStateValue}=rowSelectedData;
    setInitialValuesForm((prev:any)=>({description:description,problems:problems,nextState:predict,currentState:currentStateValue}))
  }
  }, [rowSelectedData])
  




  
// intaddKrSchema,straddKrSchema

  const renderContent = () => {
    switch (renderState) {
      case 'add':
        return (
          <Formik
           validationSchema={pointSystemsL==='req'?straddKrSchema:intaddKrSchema}
           enableReinitialize
            initialValues={{...evaluationData,newValue:initialNewValue,...initialValuesForm}}
            onSubmit={(data: AddEvalFace) => {
              initialSubmitForm(data)

            }}


          >
            {
              ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }:any) =>
                <Form>
                  {
                    true && 

                    <Grid container columnSpacing={1} sx={{bgcolor: 'background.paper',mx:'auto',borderRadius:3}}   >

                    <Grid item xs={12}   >
      
                    </Grid>
                   { !iniValLoading && <Grid item xs={6}  >
                      <FormikControl
                        control='textField'
                        type='text'
                        label='مقدار جدید'
                        name='newValue'
                        fullWidth
                        value={values?.newValue || ''}
                      />
                    </Grid>
                    
                    }
                    
                      {
                        pointSystemsL==='req'?
                        <Grid item xs={5}  > 
                        <FormikControl
                        control='textField'
                        type='text'
                        label='امتیاز'
                        name='tensileScore'
                        fullWidth
                        // helperText={'موانعی که با آن مواجه هستید؟'}
                      />
                    </Grid>:''

                      }

                    <Grid item xs={11}  >
                      <FormikControl
                        control='textField'
                        type='text'
                        label='موانعی که با آن مواجه هستید؟'
                        name='problems'
                        fullWidth
                        value={values?.problems || ''}
                        // helperText={'موانعی که با آن مواجه هستید؟'}
                      />
                    </Grid>

                    <Grid item xs={12} md={5.5} >
                      <FormikControl
                        control='select'
                        type='select'
                        label='وضعیت آتی این نتیجه کلیدی را چگونه پیش بینی می کنید؟'
                        withIcon={true}
                        options={nextStateOptions}
                        name='nextState'
                        fullWidth
                        value={values?.nextState || ''}
                        // helperText={'وضعیت آتی این نتیجه کلیدی را چگونه پیش بینی می کنید؟'}
                      />
                    </Grid>


                    <Grid item xs={12} md={5.5} >
                      <FormikControl
                        control='select'
                        type='select'
                        label='وضعیت فعلی  نتیجه کلیدی را چگونه ارزیابی می کنید؟'
                        // withIcon={true}
                        options={currentStateOptions}
                        name='currentState'
                        fullWidth
                        value={values?.currentState || ''}
                        // helperText={}
                      />
                    </Grid>

                    <Grid item xs={12} md={11} >
                      <FormikControl
                        control='textField'
                        type='text'
                        label='توضیحات'
                        name='description'
                        fullWidth
                        value={values?.description || ''}
                        placeholder={'توضیحات (اختیاری)  0/300'}
                      />
                    </Grid>

               


                


























                    <Grid item xs={12} mt={1}  >
                      <Box px={1} columnGap={2} display={'flex'} flexDirection={'row-reverse'}  >
                        <Box >
                          <DyButton
                            caption={'ذخیره'}
                            color={'#00387C'}
                            onClick={() => { }}
                            disbled={!dirty || !isValid}
                            // !isValid || !dirty 
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
                  }


          
                </Form>
            }

          </Formik>

        )
        break;



      case 'success':
        return <Box width={'100%'} textAlign={'center'} py={5}  >
          <AddMeetingSuccess
            formName={'ارزیابی'}
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