import React from 'react';
import { Grid,Box } from '@mui/material';
import { Formik,Form } from 'formik';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import { addContractValues } from '../../StaticData';

const AddContract = () => {
  return (
    <Grid container>

    <Grid item xs={12}   >
    
   <Formik enableReinitialize
             initialValues={addContractValues}
             onSubmit={(data:any) => {
            // console.log(data)
             }}
 
 
           >
             {
               ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
                 <Form>
                   <Grid container columnSpacing={1} sx={{bgcolor: 'background.paper',mx:'auto',borderRadius:3}}   >
 
               
                     <Grid item xs={6}  >
                       <FormikControl
                         control='date'
                         label='تاریخ شروع'
                         name='startDate'
                         fullWidth
                         value={values.startDate ||''}
                       />
                     </Grid>




                     <Grid item xs={6}  >
                       <FormikControl
                         control='textField'
                         type='number'
                         label='تعداد روزهای خریداری شده'
                         name='countOfSaledDay'
                         fullWidth
                         value={values.countOfSaledDay || 0}
                       />
                     </Grid>

                     <Grid item xs={6}  >
                       <FormikControl
                         control='textField'
                         type='number'
                         label='تعداد کاربران'
                         name='countOfUser'
                         fullWidth
                         value={values.countOfUser || 0}
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

export default AddContract