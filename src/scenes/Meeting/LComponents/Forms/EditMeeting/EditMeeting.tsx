import React, { useState,useEffect } from 'react';
import { TimePicker } from '@mui/x-date-pickers';
import { Box, Button, Grid, Typography,TextField } from '@mui/material';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import NewMultiSelect from '../../../../../components/FormikControls/NewMultiSelect/NewMultiSelect';
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
import DYToastMessage from '../../../../../components/GlobalComponents/DyToastMessage/DYToastMessage';
import MultiSel from '../../../../../components/MultiSel/MultiSel';





const EditMeeting = ({hideModal,meetingLenght,setReloadMeetingData,meetingId,setMeetingAsyncState,setShowToastMessage}:any) => {
  const profileTenantId: any = useSelector((state: any) => state.meetings.profileTenantId);
  const licenseType : any = useSelector((state: any) => state.meetings.meetingsList?.licenseType);
  const[showLtoastMessage,setLToastMessage]=useState<boolean>(false);
  const[updateErrorData,setUpdateErrorDate]=useState<any>(null)
  const periodId: any = useSelector((state: any) => state.meetings.priodId);



  const[addMeetingStatus,setAddMeetingStatus]=useState<any>(null)
  const[addMeetingMessage,setAddMeetingMessage]=useState<any|null>(null);
 const[updateMeetingInitialValues,setUpdateMeetingInitialValues]=useState<any>();
 const[meetingLRealDate,setMeetingLRealDate]=useState<any>('');
 const[meetingjLRealDate,setMeetingjLRealDate]=useState<any>('');
 const[lFromTime,setLfromTime]=useState<any>('');
 const[lToTime,setLtoTime]=useState<any>('');
 const[okTotime,setOkTotime]=useState<any>('');
 const[okFromTime,setOkFromTime]=useState<any>('');
 const[TeamIds,setTeamIds]=useState<any>([]);
 

  const addMeetingSuccess=()=>{
    setReloadMeetingData((prev:any):any=>!prev)
    hideModal((prev:any):any=>!prev)
  }
// const {mutate:addMeeting,isLoading:AddLoading,data:addMeetData,status,isSuccess}=useAddMeeting(addMeetingSuccess);
const{data:meetingDetails,isLoading:meetingDetLoading,isError,isFetched}=useGetMeetingDetailById(meetingId);
const{mutate:callEditMeeting,isLoading:editMeetLoading,data:meetUpdatedData,isSuccess:updateSuccess}:any=useEditMeeting()
  const { data: allTeamsData, isLoading:getAllTeamLoading } = useGetAllTeamsForSelByTenantId(profileTenantId);
  
  const { data: allmeetingTypeData } = useGetAllMeetingsTypeByTenantId(profileTenantId)
  const repeatTypeData = [
    // { key: 'روزانه', value: 'Daily' },
    { key: 'بدون تکرار', value: 'none' },
    { key: 'هفتگی', value: 'OnOneWeekDay' },
    { key: 'ماهانه', value: 'OneOneMonthDay' }]









  useEffect(() => {
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
        teams,
        realFromTime,
        realToTime,
        teamss

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
        periodId:periodId,
        teamIds:[]
       }
       setUpdateMeetingInitialValues(initVal)

      if (teams) {
        setTeamIds(teamss)
      }

      

    if (realMeetingDate!==null) {
      setMeetingLRealDate(new Date(realMeetingDate));
    }
    if (realFromTime!==null) {
      console.log(new Date(realFromTime))
      setLfromTime(new Date(realFromTime))
  
    }
    if (realToTime!==null) {
      setLtoTime(new Date(realToTime))
  
    }
    if (toTime) {
      setOkTotime(toTime)
    }
    if (fromTime) {
      setOkFromTime(fromTime)
    }

    }

   

 
  }, [meetingDetails])



  useEffect(() => {
       
    if (meetingLRealDate!=='') {
     setMeetingjLRealDate(moment(meetingLRealDate).format('jYYYY/jM/jD'))
    }
      
      }, [meetingLRealDate])

    useEffect(() => {
      if (lToTime) {
        var hour = lToTime.getHours();
        var minute = lToTime.getMinutes();
        var time_str = ("0" + hour).slice(-2) + ":" + ("0" + minute).slice(-2);
setOkTotime(time_str)
      }
    }, [lToTime])


    useEffect(() => {
   if (lFromTime) {
    var hour = lFromTime.getHours();
    var minute = lFromTime.getMinutes();
    var time_str = ("0" + hour).slice(-2) + ":" + ("0" + minute).slice(-2);
     setOkFromTime(time_str)  
   }
    }, [lFromTime])
    
    
  



 

  
  

  const initialCancel=()=>{
   hideModal(false)
  }

  const initialUpdateMeeting=(data:any)=>{
    // let{,...rest}=data;
    console.log(data);
    data.fromTime=okFromTime;
    data.toTime=okTotime;
    data.meetingDate=meetingjLRealDate;
    data.teamIds=TeamIds?.map(({value}:any)=>{
      return value
    })

  console.log(data)
    callEditMeeting(data)

  }


  useEffect(() => {
      

    if (meetUpdatedData) {
       

        if (meetUpdatedData?.data.isSuccess) {
          hideModal((prev:any):any=>!prev)
          setMeetingAsyncState(meetUpdatedData?.data)
          setShowToastMessage(true)
 
        } else {
            setLToastMessage(true);
            setUpdateErrorDate(meetUpdatedData?.data)
        }
     
    }
        }, [meetUpdatedData,updateSuccess]);


        
  



 

  if (meetingDetLoading ) {
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

                  {
                    editMeetLoading?<Box width={'100%'} textAlign={'center'} py={5}   > 
                    <CircularProgress/>
                    </Box>:<>
                    <Grid item xs={12} md={8} >

                   

<FormControl sx={{padding:'8px'}} fullWidth  >
<MultiSel
   editMode={true} 
   tagSelected={TeamIds}   
   extractTag={setTeamIds} 
   data={allTeamsData||[]}
   label={'انتخاب سطح'}
   // length={orderDescriptions.length}


/>
</FormControl>
 
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


 <Grid item xs={12} md={4}>
    <FormControl sx={{p:'8px'}} fullWidth  >
    <DatePicker 
    
    slotProps={{ textField: { size: 'small' } }}
    label={'تاریخ جلسه'}
      value={meetingLRealDate || ''}
      onChange={(newValue:any)=>{
          setMeetingLRealDate(newValue)     
      }}
      />
    </FormControl>
    </Grid> 




<Grid item xs={12} md={4}>
<FormControl fullWidth sx={{padding:'8px'}}   >
<TimePicker
disableOpenPicker
ampm={false}
slotProps={{ textField: { size: 'small' } }}
// sx={mStyle}
label={'ساعت شروع جلسه '}
value={lFromTime}
onChange={(newValue:any) => {
setLfromTime(newValue)
}}
/>
</FormControl>

{/* lToTime */}
</Grid>
<Grid item xs={12} md={4}>

<FormControl fullWidth sx={{padding:'8px'}}   >
<TimePicker
disableOpenPicker
ampm={false}
slotProps={{ textField: { size: 'small' } }}
// sx={mStyle}
label={'ساعت پایان جلسه '}
value={lToTime}
onChange={(newValue:any) => {
setLtoTime(newValue)          
}}
/>
</FormControl>
</Grid>


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
                    </>
                  }




                    <Grid item xs={12} mt={1}  >
                      <Box px={1} columnGap={2} display={'flex'} flexDirection={'row-reverse'}  >
                        <Box >
                          <DyButton
                            caption={'ذخیره'}
                            
                            color={'#00387C'}
                            onClick={()=>{}}
                            disbled={editMeetLoading}
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
        {
      showLtoastMessage && <DYToastMessage
      isSuccess={updateErrorData?.isSuccess}
      message={updateErrorData?.metaData.message}
      setShow={setLToastMessage}
      show={showLtoastMessage}
      
      />
      
      
    }
        


      </Grid>
      
    </Box>
  )
}

export default EditMeeting