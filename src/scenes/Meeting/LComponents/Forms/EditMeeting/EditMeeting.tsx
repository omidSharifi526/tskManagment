import React, { useState,useEffect } from 'react';
import { Box, Button, Grid, Typography,TextField } from '@mui/material';
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
import { addMeetingSchema } from '../../../MeetingCard/StaticData';
import { useGetMeetingDetailById } from '../../../Hooks/index';
import { meetingValuesFace } from '../../../interfaces/interfaces';
import { DatePicker } from '@mui/x-date-pickers';
import moment from "jalali-moment";
import { useEditMeeting } from '../../../Hooks/index';
// import TextField from '@mui/material';

// import 










const EditMeeting = ({hideModal,meetingLenght,setReloadMeetingData,meetingId}:any) => {
  const profileTenantId: any = useSelector((state: any) => state.meetings.profileTenantId);
  const licenseType : any = useSelector((state: any) => state.meetings.meetingsList?.licenseType);
  
  // console.log(licenseType)
  const priodId: any = useSelector((state: any) => state.meetings.priodId);

  const meetingData: meetingValuesFace = {
    name: 'Check_in',
    description: '',
    meetingTypeId: "22e56360-33aa-432f-8c50-034e6c2008d1",
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

  const[addMeetingStatus,setAddMeetingStatus]=useState<any>(null)
  const[addMeetingMessage,setAddMeetingMessage]=useState<any|null>(null);
 const[updateMeetingInitialValues,setUpdateMeetingInitialValues]=useState<any>();
 const[meetingLRealDate,setMeetingLRealDate]=useState<any>('');
 const[meetingjLRealDate,setMeetingjLRealDate]=useState<any>('')

  const addMeetingSuccess=()=>{
    setReloadMeetingData((prev:any):any=>!prev)
    hideModal((prev:any):any=>!prev)
  }
// const {mutate:addMeeting,isLoading:AddLoading,data:addMeetData,status,isSuccess}=useAddMeeting(addMeetingSuccess);
const{data:meetingDetails,isLoading:meetingDetLoading,isError,isFetched}=useGetMeetingDetailById(meetingId);
const{mutate:callEditMeeting,isLoading:editMeetLoading,data:meetUpdatedData}=useEditMeeting()
  // const profileTenantId=useSelector((state)=>state.meetings.profileTenantId)
  const { data: allTeamsData, isLoading } = useGetAllTeamsForSelByTenantId(profileTenantId);
  
  const { data: allmeetingTypeData } = useGetAllMeetingsTypeByTenantId(profileTenantId)
  const repeatTypeData = [
    // { key: 'روزانه', value: 'Daily' },
    { key: 'بدون تکرار', value: 'none' },
    { key: 'هفتگی', value: 'OnOneWeekDay' },
    { key: 'ماهانه', value: 'OneOneMonthDay' }]







  useEffect(() => {
    
  console.log(meetingId)
    
  }, [meetingId]);

  useEffect(() => {
    
    console.log(meetingDetails)
    if (meetingDetails) {
      let {
        meetingRepeatType,
        realMeetingDate,
        description,
        id,
        meetingDate,
        tenantId,
        fromTime,
        toTime,
        name,
        persons,
        teams

      }=meetingDetails;
       let initVal={
        meetingRepeatType:meetingRepeatType,
        description:description,
        id:id,
        meetingDate,
        tenantId,
        fromTime:fromTime,
        toTime:toTime,
        name:name,
        personIds:persons,
        teamIds:['ffad00c7-5f27-4ea7-a878-8710c429d427']
       }
       setUpdateMeetingInitialValues(initVal)

    if (realMeetingDate!==null) {
      setMeetingLRealDate(new Date(realMeetingDate));
    }
    }

   

 
  }, [meetingDetails])



  useEffect(() => {
       
    if (meetingLRealDate!=='') {
     setMeetingjLRealDate(moment(meetingLRealDate).format('jYYYY/jM/jD'))
    }
      
      }, [meetingLRealDate])
  



 

  
  

  const initialCancel=()=>{
   hideModal(false)
  }

  const initialUpdateMeeting=(data:any)=>{
    // let{,...rest}=data;
    console.log(data);

    callEditMeeting(data)


    


    // let totalData={

    //   forceEndDate:jlForecDate,
    
    //   ...rest};
 
  

//    console.log(totalData);
//    console.log(krHorizontalAlignments)
//  callEditKR(totalData)
  }



 

  if (meetingDetLoading) {
    return <Box width={'100%'} textAlign={'center'} py={5}   > 
    <CircularProgress/>
    </Box>
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
          {/* {
            renderContent()
          } */}
  
          <Formik enableReinitialize
            initialValues={updateMeetingInitialValues}
            // validationSchema={addMeetingSchema}
            onSubmit={(data) => {
              
              initialUpdateMeeting(data)
              // console.log(data)
            }}


          >
            {
              ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
                <Form>
                  <Grid container   >

                    <Grid item xs={12} md={8} >

                      <MultiSelect
                        options={allTeamsData || []}
                        isLoading={isLoading}
                        onChangee={setFieldValue}
                        propName='teamIds'
                        label={'انتخاب سطح'}
                      />

                    </Grid>

                    <Grid item xs={12} md={4} >
                      <FormikControl
                        control='select'
                        type='select'
                        label='نحوه تکرار جلسه '
                        options={repeatTypeData}
                        name='meetingRepeatType'
                        fullWidth
                        value={values?.meetingRepeatType || ''}
                      />
                    </Grid>

                    {/* <Grid item xs={12} md={4}>
       
                      <FormikControl
                        control="date"
                        label="تاریخ جلسه"
                        name="meetingDate"
                        value={meetingData.meetingDate || ''}
                      />
                    </Grid> */}


                      <Grid item xs={12} md={3}>
                         <FormControl sx={{p:'8px'}} fullWidth  >
                         <DatePicker 
                         
                         slotProps={{ textField: { size: 'small' } }}
                         label={"حداکثر تاریخ انجام"}
                           value={meetingLRealDate || ''}
                           onChange={(newValue:any)=>{
                               var persianDate = moment(newValue).format('jYYYY/jM/jD');
           
                               setMeetingLRealDate(newValue)
                          
                           }}
                           />
                         </FormControl>
                         </Grid> 




                    <Grid item xs={12} md={4}>
                      <FormikControl
                        control="timePicker"
                        name="fromTime"
                        label='ساعت شروع جلسه '
                        value={meetingData.fromTime}
                      />
                    </Grid>
                    <Grid item xs={12} md={4}>
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
                    {/* <Grid item xs={12}  >
                      <FormikControl
                        control='textField'
                        type='text'
                        label='توضیحات'

                        name='description'
                        fullWidth
                      />
                    </Grid> */}

                      <Grid item xs={12} md={12}  >
                            <Box sx={{padding:'8px'}}  >
                            <TextField
                            size='small'
                            fullWidth
                            label={'توضیحات'}
                            value={values?.description || ''}
                            onChange={({target}:any)=>{
                            let{value}=target;
                            setFieldValue('description',value)
                            }}
                            />

                            </Box>
                            </Grid>




                    <Grid item xs={12} mt={1}  >
                      <Box px={1} columnGap={2} display={'flex'} flexDirection={'row-reverse'}  >
                        <Box >
                          <DyButton
                            caption={'ذخیره'}
                            color={'#00387C'}
                            onClick={()=>{}}
                            // disbled={!dirty || !isValid}
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



        

        </Grid>
        


      </Grid>
    </Box>
  )
}

export default EditMeeting