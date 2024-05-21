import React,{useEffect,useState} from 'react';
import {ReactComponent as AddStaffVector} from '../../StaticData/Vectors/addStaffVector.svg';
import { Grid,Box, Typography,Button} from '@mui/material';
import { Formik,Form } from 'formik';
import { useSelector } from 'react-redux';
import { useInviteUser,useEditPersonStaff } from '../../Hooks';
import { addUserFace } from '../../Interfaces/Interfaces';
import {addUserSchema } from '../../StaticData';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import FormikControl from '../../../../components/FormikControls/FormikControl';
const AddStaff = ({onSuccesss,initialValue,editMode,onClose}:any) => {
  const[editPersonInitialValues,setEditPersonInitialValues]=useState<any>()
    const{mutate:inviteUser,data:inviteUserData,isSuccess}=useInviteUser()
  const tenantId:string=useSelector((state:any)=>state.meetings.profileTenantId);
  const userId:string=useSelector((state:any)=>state.loign.userInfo.userId);
  const[addUserMesaage,setAddUserMessage]=useState<string>('');
  const[successAddUser,setSuccessAddUser]=useState<Boolean>(false);

  const staffInitialValues:addUserFace={
    firstName:'',
    lastName:'',
   //  createById:'',
    jobType:'',
    phoneNumber:'',
    tenantId:''
     }
  const[addStaffInitialValues,setAddStaffInitialValues]=useState<addUserFace>(staffInitialValues)

 



  // console.log(userId)

  useEffect(() => {
    
  // console.log(inviteUserData)

 if (editMode && initialValue) {
  let{firstName,lastName,phoneNumber,jobTypeName,id}=initialValue;
  console.log(initialValue)
  let initVal={
    firstName:firstName,
    lastName:lastName,
    phoneNumber:phoneNumber,
    jobType:jobTypeName,
    tenantId:'',
    id:id

  }
  console.log(initialValue)
  setAddStaffInitialValues(initVal)
 }
   
  }, [initialValue])


  useEffect(() => {
    setAddUserMessage(inviteUserData?.data?.metaData.message)
    setSuccessAddUser(isSuccess)
  
    
  }, [inviteUserData])

  useEffect(() => {
    // setAddUserMessage(editUserData?.data?.metaData.message)
    // setSuccessAddUser(editUserSuccess)
    // setAddStaffInitialValues({
    //   firstName:'',
    //   lastName:'',
    //  //  createById:'',
    //   jobType:'',
    //   phoneNumber:'',
    //   tenantId:''
    //    })
  
    
  }, [])
  

    const initialSubmitForm=(data:any)=>{ 

          console.log({...data,tenantId:tenantId,createById:userId})
          inviteUser({...data,tenantId:tenantId,createById:userId})
        

    }

    const handleClose=()=>{
      console.log('close')
      onClose((prev:any)=>false)

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
    initialValues={addStaffInitialValues}
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
       onSuccesss()
    }}  >
     تایید
    </Button>
   </Box>
   }

   </Grid>
        
    </Grid>
  )
}

export default AddStaff