import React, { useState,useEffect } from 'react';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import { Box, Grid, TextField, Typography } from '@mui/material';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import { Formik, Form } from 'formik';
import { addKrValues } from '../../StaticData/index';
import { useGetAllActivePersonByTenantId,
    useGetAllHorizontalAlignmentByTenantId,
    useGetAllOKRStateByTenantId,
    useGetAllScoreLevelsByTenantId
 } from '../../Hooks';
import AccordionLyt from '../../../../components/Layouts/AccordionLyt/AccordionLyt';
import { useSelector } from 'react-redux';
// import {} from '../../Interfaces/Interfaces'ک
import {pointSystem,keyResultTypeOptions} from '../../StaticData/index'
export const CreateKeyResult = () => {
    const[pointingSystemType,setPointingSystemType]=useState<string>('Regulary');
    const[idsValue,setIdsValue]=useState<any>([])
    const tenantId: any = useSelector((state: any) => state.meetings.profileTenantId);

    const {data:acPersOptions}=useGetAllActivePersonByTenantId(tenantId);
    const{data:HorzinalAlignData}=useGetAllHorizontalAlignmentByTenantId(tenantId);
    const{}=useGetAllOKRStateByTenantId(tenantId);
    const{data:levelIds,isFetched:getLevelsIds}=useGetAllScoreLevelsByTenantId(tenantId)
    // console.log(acPersOptions)
// Regulary
// Tensile
    const initialAddKeyR = (data: any) => {
        data.valuesDetailCommandDtos=idsValue
        // totalData.valuesDetailCommandDtos=idsValue
        console.log(data)
    }

    const[showAdvanceOptions,setShowAdvanceOptions]=useState<Boolean>(false)

    useEffect(() => {
      
    setIdsValue(levelIds?.map((item:any)=>{
      return {...item,tenantId:tenantId}
    }))
    //  console.log(levelIds)
    }, [getLevelsIds])


    // useEffect(() => {
      
    // console.log(idsValue)
    
    // }, [idsValue])

    const initialUpdateIdsValue=(i:number,item:any)=>{
   setIdsValue((prev:any) => 
    prev.map((o:any, index:number) => index ===i
      ? { ...o, value:item }
      : o
    )
  )
    }
    
    

    return (
        <>
            <Box width={'100%'} maxHeight={'50em'}  >
                <Formik enableReinitialize
                    initialValues={addKrValues}
                    onSubmit={(data) => {
                        initialAddKeyR(data)
                    }}
                    validate={(data:any)=>{
                    //  console.log(data)
                     let{pointingSystemType}=data;
                     setPointingSystemType(pointingSystemType)

                    }}


                >
                    {
                        ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }: any) =>
                            <Form>
                                <Grid container  >
                                    <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='textField'
                                            type='text'
                                            label='شرح نتیجه کلیدی'
                                            name='name'
                                            fullWidth
                                            values={values?.name}
                                        />

                                    </Grid>

                                    <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='select'
                                            options={acPersOptions||[]}
                                            label='مسئول'
                                            name='responsibleId'
                                            fullWidth
                                            values={values?.responsibleId}
                                        />

                                    </Grid>

                                    <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='select'
                                            options={pointSystem}
                                            label='سیستم امتیاز دهی '
                                            name='pointingSystemType'
                                            fullWidth
                                            values={values?.pointingSystemType}
                                        />
                                    </Grid>


                                    <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='select'
                                            options={keyResultTypeOptions}
                                            label='نوع نتیجه کلیدی '
                                            name='keyResultType'
                                            fullWidth
                                            values={values?.keyResultType}
                                        />
                                    </Grid>
                                    {/* مقدار شروع */}
                                    <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='textField'
                                            type={'text'}
                                            label='مقدار شروع '
                                            name='startValue'
                                            fullWidth
                                            values={values?.startValue}
                                        />
                                    </Grid>
                                    
                                  {
                                    pointingSystemType==='Regulary'?<Grid item xs={12} md={3}  >
                                    <FormikControl
                                        control='textField'
                                        type={'text'}
                                        label='چه زمانی به 100% میرسد؟ '
                                        name='onValue'
                                        fullWidth
                                        values={values?.onValue}
                                    />
                                </Grid>:<>
                                {
                                    idsValue.map((item:any,i:number)=>{
                                    return <Grid item  key={i} xs={12} md={3} padding={'8px'} >
                                      <TextField 
                                      fullWidth
                                      size='small'
                                     
                                      value={idsValue[i].value}
                                      onChange={({target}:any)=>{
                                        let{value}:any=target;
                                        initialUpdateIdsValue(i,value)
                                      }}
                                      label={i==0?'چه زمانی به 30% میرسد؟':i==1?'چه زمانی به 70% میرسد؟':'چه زمانی به 100% میرسد؟'}   />
                                    </Grid>
                                    })
                                }
                                {/* <Grid item xs={12} md={3}  >
                                    <FormikControl
                                        control='textField'
                                        type={'text'}
                                        label='چه زمانی به 30% میرسد؟ '
                                        name='onValue'
                                        fullWidth
                                        values={values?.onValue}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}  >
                                    <FormikControl
                                        control='textField'
                                        type={'text'}
                                        label='چه زمانی به 70% میرسد؟ '
                                        name='onValue'
                                        fullWidth
                                        values={values?.onValue}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}  >
                                    <FormikControl
                                        control='textField'
                                        type={'text'}
                                        label='چه زمانی به 100% میرسد؟ '
                                        name='onValue'
                                        fullWidth
                                        values={values?.onValue}
                                    />
                                </Grid> */}
                                </>
                                
                                
                            
                                

                                  }



                              <Grid item xs={12} >
                              <AccordionLyt 
                              collapse={setShowAdvanceOptions}
                              title={' تنظیمات پیشرفته ( اختیاری)'} 
                            //   showAdvanceOptions,setShowAdvanceOptions
                              expanded={showAdvanceOptions}  >
                              <Grid container  >
                              <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='textField'
                                            type={'text'}
                                            label='وزن'
                                            name='weight'
                                            fullWidth
                                            values={values?.weight}
                                        />
                            </Grid>
                                 <Grid item xs={12} md={3}  >
                                        <FormikControl
                                            control='select'
                                            options={HorzinalAlignData||[]}
                                            label='همسویی افقی'
                                            name='horizontalAlignment'
                                            fullWidth
                                            values={values?.horizontalAlignment}
                                        />
                                    </Grid>

                                 <Grid item xs={12} md={3}>
                                  <FormikControl
                                       control="date"
                                      label="حداکثر تاریخ انجام"
                                      name="forceEndDate"
                                      value={values.forceEndDate}
                                  />
                                 </Grid> 
                                 <Grid item xs={12} md={3}>
                                    <FormikControl
                                        control="date"
                                        label="تاریخ شروع نتایج کلیدی"
                                        name="startDate"
                                        value={values.startDate}
                                    />
                                    </Grid>

                                    <Grid item xs={12} md={12}  >
                                        <FormikControl
                                            control='textField'
                                            type={'text'}
                                            label='توضیحات'
                                            name='description'
                                            fullWidth
                                            values={values?.description}
                                        />
                                    </Grid>

                              </Grid>
                                    </AccordionLyt>
                              </Grid>


                                    

                                    
                               

                              
                                  

                                    

                                    




                                    <Grid item xs={12} md={3} mt={3} >
                                        <Box width={'100%'}  >
                                            <DyButton
                                                type={'submit'}
                                                variant={'contained'}
                                                bgColor={'info'}
                                                caption={'افزودن نتیجه'}
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
