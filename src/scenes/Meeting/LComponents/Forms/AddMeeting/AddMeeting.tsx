import React, { useState,useEffect } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import DyButton from '../../../../../components/GlobalComponents/DyButton/DyButton';
import { ReactComponent as AddMeetingVector } from '../../../Statics/Svg/CreateMeeting.svg';
import { useGetAllTeamsForSelByTenantId, useGetAllMeetingsTypeByTenantId,useAddMeeting } from '../../../Hooks/index'
import FormikControl from '../../../../../components/FormikControls/FormikControl';
import MultiSelect from '../../../../../components/FormikControls/MultiSelect/MultiSelect';
import DateFieldValue from '../../../../../components/FormikControls/DateField/DateField';
import { useSelector } from 'react-redux';
import{FormControl,InputLabel,Select,MenuItem} from '@mui/material';
import AddMeetingSuccess from '../../AddMeetingSuccess/AddMeetingSuccess';
import {CircularProgress} from '@mui/material';
// import 

interface Values {
  name: string,
  periodId: string,
  meetingTypeId: string,
  tenantId: string,
  meetingDate: string | any,
  fromTime: any,
  toTime: any,
  meetingRepeatType: string,
  description: string,
  teamIds: any,
  personIds: any
  // email: string;
}








const AddMeeting: React.FC = () => {
  const profileTenantId: any = useSelector((state: any) => state.meetings.profileTenantId);
  const priodId: any = useSelector((state: any) => state.meetings.priodId);

  const meetingData: Values = {
    name: '',
    description: '',
    meetingTypeId: '',
    periodId: priodId,
    tenantId: profileTenantId,
    meetingDate: '',
    fromTime: '',
    toTime: '',
    meetingRepeatType: '',

    teamIds: [],
    personIds: []
    //  email:''

  }
  const [confrimForm, setConfrimForm] = useState<string>('confirm');
  const addMeetingSuccess=()=>{
    setConfrimForm('success')
  }
const {mutate:addMeeting,isLoading:AddLoading}=useAddMeeting(addMeetingSuccess)
  // const profileTenantId=useSelector((state)=>state.meetings.profileTenantId)
  const { data: allTeamsData, isLoading } = useGetAllTeamsForSelByTenantId(profileTenantId);
  
  const { data: allmeetingTypeData } = useGetAllMeetingsTypeByTenantId(profileTenantId)
  const repeatTypeData = [
    { key: 'روزانه', value: 'Daily' },
    { key: 'بدون تکرار', value: 'none' },
    { key: 'هفتگی', value: 'OneOneWeekDay' },
    { key: 'ماهانه', value: 'OneOneMonthDay' }]

  const initialCreateMeeting = () => {
    setConfrimForm('add')
  }

  useEffect(() => {
    
 if (AddLoading) {
  setConfrimForm('loading')
 }
    
  }, [AddLoading])
  

  const renderContent = () => {
    switch (confrimForm) {
      case 'confirm':
        return (
          // <AddMeetingSuccess/>
          <Box width={'100%'} display={'flex'} flexDirection={'column'}>
            <Box p={2}  >
              <Typography fontWeight={800} variant='h6'   >
                توجه در مورد تعداد جلسات:
              </Typography>
            </Box>
            <Box px={2}>
              <Typography variant='body1'   >
                شما اکانت رایگان در اختیار دارید و تنها یک جلسه در هر دوره زمانی میتوانید ایجاد کنید. با ورود به سایت میتوانید برای ارتقا اکانت خود اقدام نمایید.
              </Typography>
            </Box>
            <Box py={3} mx={'auto'} columnGap={3} width={'40%'}  display={'flex'} justifyContent={'center'} textAlign={'center'}  >
              {/* <Button sx={{ p: 1 }} variant='contained' color={'info'} onClick={initialCreateMeeting} >
                جلسه جدید
              </Button> */}
                 <DyButton
                            caption={'جلسه جدید'}
                            color={'#00387C'}
                            onClick={initialCreateMeeting}
                            disbled={false}
                            variant={'contained'}
                            bgColor={'#00387C'}
                            type={'submit'}
                            sx={{ p: 1 }}
                          />
                             <DyButton
                            caption={'ورود به سایت'}
                            color={'#00387C'}
                            onClick={()=>{}}
                            disbled={false}
                            variant={'contained'}
                            bgColor={'#00387C'}
                            type={'submit'}
                            sx={{ p: 1 }}
                          />
           
            </Box>

          </Box>
        )


      case 'add':
        return (
          <Formik enableReinitialize
            initialValues={meetingData}
            onSubmit={(data) => {
              addMeeting(data)
              console.log(data)
            }}


          >
            {
              ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
                <Form>
                  <Grid container   >
                    {/* <Grid item xs={12} md={4}   >
                      <FormikControl
                        control='select'
                        label='نوع جلسه'
                        name='meetingTypeId'
                        options={allmeetingTypeData || []}
                      />
                    </Grid> */}


                    <Grid item xs={12} md={4}   position={'relative'}>
                      <Box display={'flex'}  >
                      {/* {
                          !values.meetingTypeId ? '*' : ''
                      } */}
                        <FormControl fullWidth sx={{ padding: '8px' }} >
                          <InputLabel id="meetingTypeId">نوع جلسه</InputLabel>
                          <Select
                            error={touched.meetingTypeId && !values.meetingTypeId }
                            
                            id="meetingTypeId"
                            label='نوع جلسه'
                            fullWidth
                            size='small'
                            name='meetingTypeId'
                            type='text'
                            value={values.meetingTypeId}
                            onChange={({ target }, { props }:any) => {
                              let { content } = props;
                              let { value } = target;
                            console.log(content,value)
                              // setOrderType(content)
                              setFieldValue('meetingTypeId',value)
                              setFieldValue('name',content)
                            }}
                            onBlur={()=>{
                              // setFieldTouched('klischeThicknessId', true, false); // Set the field as touched
                            }}
                          >
                            {/* {
                              allmeetingTypeData?.map(()=>{
                            return <></>
                              })
                            } */}

                            {
                              allmeetingTypeData && allmeetingTypeData?.map((klische:any, i:number) => {
                                return <MenuItem className='font-num' sx={{ fontSize: '0.7rem' }} key={i} content={klische.key} id={i.toString()} value={klische.value} >{klische.key}</MenuItem>
                              })
                            }
                          </Select>
                        </FormControl>
                      </Box>
                      <Box sx={{position:'absolute',bottom:'-13px'}}>
                          {errors.meetingTypeId || touched.meetingTypeId ? (
                            <span className="fm-error-text"> {errors.meetingTypeId}</span>
                          ) : (
                            ""
                          )}
                        </Box>
  
                  </Grid>






                    <Grid item xs={12} md={8} >

                      <MultiSelect
                        options={allTeamsData || []}
                        isLoading={isLoading}
                        onChangee={setFieldValue}
                        propName='teamIds'
                      />

                    </Grid>

                    <Grid item xs={12} md={3} >
                      <FormikControl
                        control='select'
                        type='select'
                        label='نحوه تکرار جلسه '
                        options={repeatTypeData}
                        name='meetingRepeatType'
                        fullWidth
                      />
                    </Grid>

                    <Grid item xs={12} md={3}>
                      {/* <DateFieldValue/> */}
                      <FormikControl
                        control="date"
                        label="تاریخ جلسه"
                        name="meetingDate"
                        value={meetingData.meetingDate}
                      />
                    </Grid>


                    <Grid item xs={12} md={3}>
                      <FormikControl
                        control="timePicker"
                        name="fromTime"
                        label='ساعت شروع جلسه '
                        value={meetingData.fromTime}
                      />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <FormikControl
                        control="timePicker"
                        name="toTime"
                        label='ساعت پایان جلسه '
                        value={meetingData.toTime}
                      />
                    </Grid>

                    {/* <Grid item xs={12} md={4}>
                      <FormikControl
                        control="timePicker"
                      
                        name="toTime"
                        label='ساعت پایان جلسه '
                        value={meetingData.toTime}
                      />
                    </Grid> */}




                    {/* multiSelect */}
                    <Grid item xs={12}  >
                      <FormikControl
                        control='textField'
                        type='text'
                        label='توضیحات'

                        name='description'
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={12} mt={1}  >
                      <Box px={1} columnGap={2} display={'flex'} flexDirection={'row-reverse'}  >
                        <Box >
                          <DyButton
                            caption={'ذخیره'}
                            color={'#00387C'}
                            onClick={()=>{}}
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
                            onClick={()=>{
                              setConfrimForm('confirm')
                            }}
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

      

        case 'loading':
          return <Box textAlign={'center'}  py={4}  >
           <CircularProgress  color='info'  />
          </Box>
      
      
      
        default:
        return <AddMeetingSuccess   
        formName={'جلسه'}
        resetButton={true}
        resetForm={setConfrimForm}   />
        break;
    }
  }

  return (
    <Box minHeight={'30rem'}>
      <Grid container  >
        <Grid item xs={12}   >
          <Box alignSelf={'center'} textAlign={'center'}   >
            <AddMeetingVector style={{ width: '400px', height: '100%', alignSelf: 'center', textAlign: 'center' }} />
          </Box>
        </Grid>

        <Grid item xs={12}   >
          {
            renderContent()
          }

        </Grid>




      </Grid>
    </Box>
  )
}

export default AddMeeting