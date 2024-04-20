import React from 'react';
import { Grid,Box } from '@mui/material';
import { Formik,Form } from 'formik';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import { addCompanyValues } from '../../StaticData';

const AddCompany = () => {
  return (
    <Grid container>

    <Grid item xs={12}   >
    
   <Formik enableReinitialize
             initialValues={addCompanyValues}
             onSubmit={(data:any) => {
            console.log(data)
             }}
 
 
           >
             {
               ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
                 <Form>
                   <Grid container columnSpacing={1} sx={{bgcolor: 'background.paper',mx:'auto',borderRadius:3}}   >
 
               
                     <Grid item xs={6}  >
                       <FormikControl
                         control='textField'
                         label='نام'
                         name='fName'
                         fullWidth
                         value={values.fName ||''}
                       />
                     </Grid>




                     <Grid item xs={6}  >
                       <FormikControl
                         control='textField'
                         type='text'
                         label='نام خانوادگی'
                         name='lName'
                         fullWidth
                         value={values.lName || ''}
                       />
                     </Grid>

                     <Grid item xs={6}  >
                       <FormikControl
                         control='textField'
                         type='text'
                         label='نام شرکت'
                         name='companyName'
                         fullWidth
                         value={values.companyName || 0}
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

export default AddCompany