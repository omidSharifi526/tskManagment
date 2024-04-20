import React from 'react';
import {ReactComponent as AddTeamVector} from '../../StaticData/Svgs/addTeamVector.svg';
import { Grid,Box } from '@mui/material';
import { Formik,Form } from 'formik';
import { addTeamValues } from '../../StaticData';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import FormikControl from '../../../../components/FormikControls/FormikControl';

const AddTeam = () => {


    const initialSubmitForm=(data:any)=>{
    console.log(data)
    }


  return (
    <Grid container>
    <Grid  item xs={12}  >
    <Box width={'100%'} textAlign={'center'}   >
    <AddTeamVector style={{height:'150px'}}  />
    </Box>
    </Grid>
    <Grid item xs={12}   >
    
   <Formik enableReinitialize
             initialValues={addTeamValues}
             onSubmit={(data:any) => {
               initialSubmitForm(data)
 
             }}
 
 
           >
             {
               ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
                 <Form>
                   <Grid container columnSpacing={1} sx={{bgcolor: 'background.paper',mx:'auto',borderRadius:3}}   >
 
                     <Grid item xs={12}   >
              
                     </Grid>
                     <Grid item xs={4}  >
                       <FormikControl
                         control='textField'
                         type='text'
                         label='عنوان'
                         name='title'
                         fullWidth
                         value={values.title||''}
                       />
                     </Grid>
                     
                    
 
                    <Grid item xs={12} md={4}  >
                    <FormikControl
                        control='select'
                        options={[]}
                        label='مدیر'
                        name='manager'
                        fullWidth
                        values={values?.manager || ''}
                    />
                   </Grid>

                   <Grid item xs={12} md={4}  >
                    <FormikControl
                        control='select'
                        options={[]}
                        label='اعضا'
                        name='members'
                        fullWidth
                        values={values?.members || ''}
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

export default AddTeam