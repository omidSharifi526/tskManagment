import React from 'react';
import {ReactComponent as AddStaffVector} from '../../StaticData/Svgs/addStaffVector.svg';
import { Grid,Box } from '@mui/material';
import { Formik,Form } from 'formik';
import { addStaffValues } from '../../StaticData';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import FormikControl from '../../../../components/FormikControls/FormikControl';
const AddStaff = () => {

    const initialSubmitForm=(data:any)=>{ 
        console.log(data)
    }


  return (
    <Grid container>
   <Grid  item xs={12}  >
   <Box width={'100%'} textAlign={'center'}   >
   <AddStaffVector style={{height:'150px'}}  />
   </Box>
   </Grid>
   <Grid item xs={12}   >
   
  <Formik enableReinitialize
            initialValues={addStaffValues}
            onSubmit={(data:any) => {
              initialSubmitForm(data)

            }}


          >
            {
              ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }) =>
                <Form>
                  <Grid container columnSpacing={1} sx={{bgcolor: 'background.paper',mx:'auto',borderRadius:3}}   >

                    <Grid item xs={12}   >
                      {/* <Box>
                        <Typography>
                          تعداد مشترکین به 50,000 نفر افزایش یابد.
                        </Typography>
                        <Typography>
                          مقدار قبلی:  37,000
                        </Typography>
                     
                      </Box> */}
                    </Grid>
                    <Grid item xs={4}  >
                      <FormikControl
                        control='textField'
                        type='text'
                        label='نام'
                        name='fName'
                        fullWidth
                        value={values.fName||''}
                      />
                    </Grid>
                    
                   

                    <Grid item xs={4}  >
                      <FormikControl
                        control='textField'
                        type='text'
                        label='نام خانوادگی'
                        name='lName'
                        fullWidth
                        value={values.lName||''}
                      
                      />
                    </Grid>

                    <Grid item xs={12} md={4} >
                      <FormikControl
                        control='textField'
                        type='text'
                        label='شماره تلفن'
                        name='phoneNumber'
                        fullWidth
                        value={values.phoneNumber||''}
                      
                      />
                    </Grid>




                    <Grid item xs={12} md={12} >
                      <FormikControl
                        control='textField'
                        type='text'
                        label='عنوان شغلی'
                        name='position'
                        fullWidth
                        value={values.position||''}
                        // placeholder={'توضیحات (اختیاری)  0/300'}
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
                            disbled={false}
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
                            onClick={()=>{}}
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
  )
}

export default AddStaff