import React,{useState,useEffect} from 'react';
import { addUserFace } from '../../Interfaces/Interfaces';
import { Grid,Box,Typography,Button} from '@mui/material';
import { Formik,Form } from 'formik';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import {ReactComponent as AddStaffVector} from '../../StaticData/Vectors/addStaffVector.svg';
import { addUserSchema } from '../../StaticData';
import { useGetPersonDetails } from '../../Hooks';
import DyLoadingCircular from '../../../../components/GlobalComponents/DyLoadingCircular/DyLoadingCircular';
import {CircularProgress} from '@mui/material';
import {useEditPersonStaff } from '../../Hooks';
import { useSelector } from 'react-redux';


const EditPerson = (props:any) => {
  const tenantId:string=useSelector((state:any)=>state.meetings.profileTenantId);
  const userId:string=useSelector((state:any)=>state.loign.userInfo.userId);
    
    const staffInitialValues:addUserFace={
        firstName:'',
        lastName:'',
       //  createById:'',
        jobType:'',
        phoneNumber:'',
        tenantId:''
         }
          //  setShowToastMessage={setShowToastMessage}
    // setAddStaffState={setUserAsyncOpState}
    let{personId,onClose,setShowToastMessage,setAddStaffState}=props;
    const editSuccess=()=>{
        onClose()
    }
   
const{data:personDetailsData,isLoading:personDEtLoading}=useGetPersonDetails(personId);
const{mutate:callEditPersonStaff,data:editUserData,isSuccess:editUserSuccess,isLoading:editPersonLoading}=useEditPersonStaff(editSuccess)

    const[editPersonInitialValues,setEditPersonInitialValues]=useState<addUserFace>(staffInitialValues);
    const[successAddUser,setSuccessAddUser]=useState<Boolean>(false);
    const[addUserMesaage,setAddUserMessage]=useState<string>('');

    useEffect(() => {
    
        // console.log(inviteUserData)
      
       if (personDetailsData) {
        let{firstName,lastName,phoneNumber,jobTypeName,id}=personDetailsData;
        // console.log(initialValue)
        let initVal={
          firstName:firstName,
          lastName:lastName,
          phoneNumber:phoneNumber,
          jobType:jobTypeName,
          tenantId:'',
          id:id
      
        }
        console.log(initVal)
        setEditPersonInitialValues(initVal)
       }
         
        }, [personDetailsData])
        
        


const handleClose=()=>{
    onClose(false)
}




const initialSubmitForm=(data:any)=>{
    console.log({...data,tenantId:tenantId,createById:userId})
    callEditPersonStaff({...data,tenantId:tenantId,createById:userId})
console.log(data)
}

useEffect(() => {
  // setShowToastMessage,setAddStaffState
  if (editUserData) {
    console.log(editUserData)
    setShowToastMessage(true);
    setAddStaffState(editUserData?.data)

    if(editUserData?.data?.isSuccess){
      handleClose()
    }




  }

 
}, [editUserData,editUserSuccess])




if (personDEtLoading || editPersonLoading) {
    return <Box py={6}   textAlign={'center'}   >
     <CircularProgress/>
    </Box>
}



  return (
    <Grid container>
    <Grid  item xs={12}  >
    <Box width={'100%'} textAlign={'center'}   >
    <AddStaffVector style={{height:'150px'}}  />
    </Box>
    </Grid>
 
 
    <Grid item xs={12}   >
    {
     !successAddUser?<Formik enableReinitialize
     validationSchema={addUserSchema}
     initialValues={editPersonInitialValues}
     onSubmit={(data:any) => {
       initialSubmitForm(data)
 
     }}
   >
     {
       ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
         <Form>
           <Grid container columnSpacing={1} sx={{bgcolor: 'background.paper',mx:'auto',borderRadius:3}}   >
 
     
             <Grid item xs={12} md={4}  >
               <FormikControl
                 control='textField'
                 type='text'
                 label='نام'
                 name='firstName'
                 fullWidth
                 value={values?.firstName||''}
               />
             </Grid>
             
            
 
             <Grid item xs={4}  >
               <FormikControl
                 control='textField'
                 type='text'
                 label='نام خانوادگی'
                 name='lastName'
                 fullWidth
                 value={values?.lastName ||''}
               
               />
             </Grid>
 
             <Grid item xs={12} md={4} >
               <FormikControl
                 control='textField'
                 type='text'
                 label='شماره تلفن'
                 name='phoneNumber'
                 fullWidth
                 value={values?.phoneNumber||''}
               
               />
             </Grid>
 
 
 
 
             <Grid item xs={12} md={12} >
               <FormikControl
                 control='textField'
                 type='text'
                 label='عنوان شغلی'
                 name='jobType'
                 fullWidth
                 value={values?.jobType ||''}
               />
             </Grid>
 
             {/* <Grid item xs={12}     >
               <FormikControl
                 control='checkBox'
                 label='میخوام این نتیجه کلیدی بسته شود.'
                 name='closedKeyResult'
              
 
 
 
               />
             </Grid> */}
 
 
             {/* obstacles */}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
             <Grid item xs={12} mt={1}  >
               <Box px={1} columnGap={2} display={'flex'} flexDirection={'row-reverse'}  >
                 <Box >
                   <DyButton
                     caption={'ذخیره'}
                     color={'#00387C'}
                     onClick={() => { }}
                     disbled={!dirty || !isValid}
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
                     onClick={handleClose}
                   />
                 </Box>
 
               </Box>
             </Grid>
 
 
           </Grid>
         </Form>
     }
 
   </Formik>:
     <Box width={'100%'} py={6} textAlign={'center'}  >
     <Typography variant='body1' fontWeight={700} color={successAddUser?'green':'red'}   >{addUserMesaage}</Typography>
     <Button variant='outlined' color='info' sx={{my:2}}  onClick={()=>{
        // onSuccesss()
     }}  >
      تایید
     </Button>
    </Box>
    }
 
    </Grid>
         
     </Grid>
  )
}

export default EditPerson