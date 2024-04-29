import React from 'react';
import {ReactComponent as AddMissionVector} from '../../StaticData/Svgs/AddMissionVector.svg';
import { Grid,Box } from '@mui/material';
import { Formik,Form } from 'formik';
import { addMissionValues } from '../../StaticData';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import FormikControl from '../../../../components/FormikControls/FormikControl';

const AddMession = () => {


    const initialSubmitForm=(data:any)=>{
    // console.log(data)
    }


  return (
    <Grid container>
    <Grid  item xs={12}  >
    <Box width={'100%'} textAlign={'center'}   >
    <AddMissionVector style={{height:'150px'}}  />
    </Box>
    </Grid>
    <Grid item xs={12}   >
    
   <Formik enableReinitialize
             initialValues={addMissionValues}
             onSubmit={(data:any) => {
               initialSubmitForm(data)
 
             }}
 
 
           >
             {
               ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
                 <Form>
                   <Grid container columnSpacing={1} sx={{bgcolor: 'background.paper',mx:'auto',borderRadius:3}}   >
 
               
                     <Grid item xs={12}  >
                       <FormikControl
                         control='textField'
                         type='text'
                         label='تعریف ماموریت'
                         name='mission'
                         fullWidth
                         value={values.mission ||''}
                       />
                     </Grid>

                     <Grid item xs={4}  >
                       <FormikControl
                         control='textField'
                         type='text'
                         label='شماره تلفن'
                         name='phoneNumber'
                         fullWidth
                         value={values.phoneNumber ||''}
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

export default AddMession