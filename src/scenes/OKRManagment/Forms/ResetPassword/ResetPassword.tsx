import React from 'react';
import { Grid,Box, Typography } from '@mui/material';
import { Formik,Form } from 'formik';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import { resetFormValues } from '../../StaticData';
import LockResetIcon from '@mui/icons-material/LockReset';
// setContentState={setContentState}
const ResetPassword = (props:any) => {
  let{setContentState}=props;

  const initialCancel=()=>{
    setContentState({content:'login'})
  }
  return (
    <Grid container mt={10} >
    <Grid item xs={9} mx={'auto'}  >
    <Box py={7} display={'flex'} justifyContent={'space-around'} alignItems={'center'} columnGap={2} >
      <Typography variant='body1' fontWeight={600} >
        رمز عبور جدید خود را وارد کنید
      </Typography>
      <LockResetIcon fontSize='large'  />
    </Box>
    </Grid>
    <Grid item xs={12}   >
    
   <Formik enableReinitialize
             initialValues={resetFormValues}
             onSubmit={(data:any) => {
            console.log(data)
             }}

 
 
           >
             {
               ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
                 <Form>
                   <Grid container columnSpacing={1} 
                   sx={{bgcolor: 'background.paper',mx:'auto',borderRadius:3}}   >
 
               
                     <Grid item xs={7} flexGrow={1} mx={'auto'}  >
                       <FormikControl
                         control='textField'
                         label='رمز عبور'
                         name='currentPassword'
                         fullWidth
                         value={values.currentPassword ||''}
                       />
                     </Grid>




                     <Grid item xs={7} mx={'auto'} >
                       <FormikControl
                         control='textField'
                         type='text'
                         label='رمزعبور جدید'
                         name='newPassword'
                         fullWidth
                         value={values.newPassword || ''}
                       />
                     </Grid>

                     <Grid item xs={7}  mx={'auto'}  >
                       <FormikControl
                         control='textField'
                         type='text'
                         label='تکرار رمز عبور'
                         name='repeatPassword'
                         fullWidth
                         value={values.repeatPassword || ''}
                       />
                     </Grid>
                     
                    
 
                  
          
                     <Grid item xs={10} mt={1} mx={'auto'}  >
                       <Box  width={'80%'}  
                       display={'flex'} 
                       flexDirection={'row-reverse'} 
                       columnGap={3}
                       p={2}
                       >

                         <Box>
                           <DyButton
                             caption={'انصراف'}
                             disbled={false}
                             variant={'outlined'}
                             onClick={initialCancel}
                           />
                         </Box>
                        
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
                       
 
               
                       
                   
 
                       </Box>
                     </Grid>
 
 
                   </Grid>
 
 
                 </Form>
             }
 
           </Formik>
 
    </Grid>
         
     </Grid>
  )
}

export default ResetPassword