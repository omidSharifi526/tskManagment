import React from 'react';
import { Grid,Box } from '@mui/material';
import { Formik,Form } from 'formik';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import { resetFormValues } from '../../StaticData';

const ResetPassword = () => {
  return (
    <Grid container>

    <Grid item xs={12}   >
    
   <Formik enableReinitialize
             initialValues={resetFormValues}
             onSubmit={(data:any) => {
            console.log(data)
             }}
            //  currentPassword:string,
            //  newPassword:string,
            //  repeatPassword:string
 
 
           >
             {
               ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
                 <Form>
                   <Grid container columnSpacing={1} sx={{bgcolor: 'background.paper',mx:'auto',borderRadius:3}}   >
 
               
                     <Grid item xs={7} flexGrow={1} mx={'auto'} >
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
                             disbled={false}
                             variant={'outlined'}
                             onClick={()=>{}}
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