import React from 'react';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import {Box,Grid,Typography} from '@mui/material';
import { Formik,Form } from 'formik';
import { addObjectiveValues } from '../../StaticData';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';

const CreateObjective = () => {


  const initialAddObjective=(data:any)=>{
   console.log(data)
  }


  return (
    <>
     <Box width={'100%'} maxHeight={'50em'}  >
                <Formik enableReinitialize
                    initialValues={addObjectiveValues}
                    onSubmit={(data) => {
                      initialAddObjective(data)
                    }}


                >
                    {
                        ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }: any) =>
                            <Form>
                                <Grid container  >
                                    <Grid item xs={12} md={12}  >
                                        <FormikControl
                                            control='textField'
                                            type='text'
                                            label='شرح هدف'
                                            name='objectiveDescription'
                                            fullWidth
                                            values={values?.objectiveDescription}
                                        />

                                    </Grid>
                                    {/**/}

                                    <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='select'
                                            options={[{ key: '1', value: 'یک' }, { key: '2', value: 'دو' }]}
                                            label='دوره زمانی'
                                            name='periodId'
                                            fullWidth
                                            values={values?.periodId}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='select'
                                            options={[{ key: '1', value: 'یک' }, { key: '2', value: 'دو' }]}
                                            label='تیم'
                                            name='teamID'
                                            fullWidth
                                            values={values?.teamID}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='select'
                                            options={[{ key: '1', value: 'یک' }, { key: '2', value: 'دو' }]}
                                            label='سطح اجرا'
                                            name='levelId'
                                            fullWidth
                                            values={values?.levelId}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='select'
                                            options={[{ key: '1', value: 'یک' }, { key: '2', value: 'دو' }]}
                                            label='مسئول هدف'
                                            name='responsibleId'
                                            fullWidth
                                            values={values?.responsibleId}
                                        />
                                    </Grid>

                                    {/* <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='textField'
                                            type='text'
                                            label='مسئول'
                                            name='responsible'
                                            fullWidth
                                            values={values?.responsible}
                                        />

                                    </Grid> */}

                                   


                                    {/* <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='select'
                                            options={[{ key: '1', value: 'یک' }, { key: '2', value: 'دو' }]}
                                            label='نوع نتیجه کلیدی '
                                            name='KeyResultType'
                                            fullWidth
                                            values={values?.KeyResultType}
                                        />
                                    </Grid> */}
                                    {/* مقدار شروع */}
                                    {/* <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='textField'
                                            type={'text'}
                                            label='مقدار شروع '
                                            name='startingValue'
                                            fullWidth
                                            values={values?.startingValue}
                                        />
                                    </Grid> */}
                                    
                                    {/* <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='textField'
                                            type={'text'}
                                            label='چه زمانی به 100% میرسد؟ '
                                            name='whenCompletedValue'
                                            fullWidth
                                            values={values?.whenCompletedValue}
                                        />
                                    </Grid> */}
                                    <Grid item xs={12} >
                                        <Box px={2} my={3} >
                                            <Typography variant='body1'  >
                                                تنظیمات پیشرفته ( اختیاری)
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={3}  >
                                   <FormikControl 
                                   control={'radio'}
                                   mainLabel={'قابلیت نمایش'}
                                   options={[{id:'1',label:'برای همه'},{id:'2',label:'برای اشخاص خاص'}]}
                                     />
                                    </Grid>

                                    <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='select'
                                            options={[{ key: '1', value: 'یک' }, { key: '2', value: 'دو' }]}
                                            label='اشخاص یا تیم ها'
                                            name='teamsOrPersonsId'
                                            fullWidth
                                            values={values?.teamsOrPersonsId}
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={6}  >
                                   <FormikControl 
                                   control={'radio'}
                                   mainLabel={'نحوه محاسبه پیشرفت:'}
                                   options={[{id:'1',label:'براساس تحقق نتایج کلیدی'},{id:'2',label:'براساسOKR های همسو شده'}]}
                                     />
                                    </Grid>

                                    <Grid item xs={12} md={4}  >
                                        <FormikControl
                                            control='textField'
                                            type='text'
                                            label='وزن'
                                            name='weight'
                                            fullWidth
                                            values={values?.weight}
                                        />

                                    </Grid>
                                    <Grid item xs={12} md={8}  >
                                        <FormikControl
                                            control='textField'
                                            type='text'
                                            label='دلیل اهمیت'
                                            name='TheReasonImportant'
                                            fullWidth
                                            values={values?.TheReasonImportant}
                                        />

                                    </Grid>
                                    <Grid item xs={12} md={12}  >
                                        <FormikControl
                                            control='textField'
                                            type='text'
                                            label='دلیل اهمیت'
                                            name='descriptions'
                                            fullWidth
                                            values={values?.descriptions}
                                        />

                                    </Grid>
                                


                                    {/* <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='textField'
                                            type={'text'}
                                            label='وزن'
                                            name='weight'
                                            fullWidth
                                            values={values?.weight}
                                        />
                                    </Grid> */}

                                    
                                    {/* <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='select'
                                            options={[{ key: '1', value: 'یک' }, { key: '2', value: 'دو' }]}
                                            label='همسویی افقی'
                                            name='horizontalAlignment'
                                            fullWidth
                                            values={values?.horizontalAlignment}
                                        />
                                    </Grid> */}

                                    {/* <Grid item xs={12} md={3}>
                                    <FormikControl
                                        control="date"
                                        label="حداکثر تاریخ انجام"
                                        name="maximumComplationDate"
                                        value={values.maximumComplationDate}
                                    />
                                    </Grid> */}
                                    {/* */}

                                    {/* <Grid item xs={12} md={3}>
                                    <FormikControl
                                        control="date"
                                        label="تاریخ شروع نتایج کلیدی"
                                        name="startDateOfKeyResults"
                                        value={values.startDateOfKeyResults}
                                    />
                                    </Grid> */}

                                    {/* <Grid item xs={12} md={12}  >
                                        <FormikControl
                                            control='textField'
                                            type={'text'}
                                            label='توضیحات'
                                            name='description'
                                            fullWidth
                                            values={values?.description}
                                        />
                                    </Grid> */}




                                    <Grid item xs={12}  >
                                        <Box width={'100%'}  >
                                            <DyButton
                                                type={'submit'}
                                                variant={'contained'}
                                                bgColor={'info'}
                                                caption={'ذخیره'}
                                                onClick={() => { }}
                                            />
                                        </Box>
                                    </Grid>
                                </Grid>














                            </Form>
                    }

                </Formik>
            </Box>
            </>
  )
}

export default CreateObjective