import React, { useState,useEffect } from 'react';
import {CircularProgress} from '@mui/material';
import {InputLabel,Select,MenuItem} from '@mui/material';
import moment from "jalali-moment";
import { useParams,useLocation } from 'react-router-dom';
import NewMultiSelect from '../../../../components/FormikControls/NewMultiSelect/NewMultiSelect';
import { addKeyResultSchema } from '../../StaticData/index';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import { Box, Grid, TextField, Typography,FormControl } from '@mui/material';
import MultiSelect from '../../../../components/FormikControls/MultiSelect/MultiSelect';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import { Formik, Form } from 'formik';
import { addKrValues } from '../../StaticData/index';
import { DatePicker } from '@mui/x-date-pickers';
import { useGetAllObjectiveDefinitionLevelByTenantId } from '../../Hooks';
import DySplitButton from '../../../../components/GlobalComponents/DySplitButton/DySplitButton';
import { useGetAllActivePersonByTenantId,
    useGetAllHorizontalAlignmentByTenantId,
    useGetAllOKRStateByTenantId,
    useGetAllScoreLevelsByTenantId,
    useAddKeyResult
 } from '../../Hooks';
import AccordionLyt from '../../../../components/Layouts/AccordionLyt/AccordionLyt';
import { useSelector } from 'react-redux';
import {pointSystem,keyResultTypeOptions} from '../../StaticData/index';
import { useGetKeyResultDetailsById,useEditKeyResult} from '../../Hooks';

interface createKrFace{
    // addKrSuccess
    editKrSuccess:() => any,
    setShowToastMessage:(show:boolean) => void
    setAddKrState:(show:any) => void,
    setShowEditKeyResult:(show:boolean)=>void,
    krId:string|null
  
    // message:string|null,
    // isSuccess:boolean|null,
    // setShow:(show:boolean) => void
    // setShowToastMessage={setShowToastMessage}
    // setAddKrState={setAddKrState}
  }



export const EditKeyResult = ({editKrSuccess,setShowToastMessage,setAddKrState,setShowEditKeyResult,krId}:createKrFace) => {
    const location:any=useLocation();
   const[krDetailInitValues,setKrDetailInitValues]=useState<any>();
   const[krGradeDetails,setKrGradeDetails]=useState<any[]>([]);
   const[krHorizontalAlignments,setHorizontalAlignments]=useState<any[]>([])
    let{state:{objectiveId}}:any=location;
    const[pointingSystemType,setPointingSystemType]=useState<string>('Regularly');
    const[idsValue,setIdsValue]=useState<any>([]);
    const tenantId: any = useSelector((state: any) => state.meetings.profileTenantId);
    const{data:teamsOptions,isLoading:teamOPloading}=useGetAllObjectiveDefinitionLevelByTenantId(tenantId);
    const {data:acPersOptions}=useGetAllActivePersonByTenantId(tenantId);
    const{data:HorzinalAlignData}=useGetAllHorizontalAlignmentByTenantId(tenantId);
    const{data:submitFormOptions}=useGetAllOKRStateByTenantId(tenantId);
    const{data:levelIds,isFetched:getLevelsIds}:any=useGetAllScoreLevelsByTenantId(tenantId);

    const{data:krDetailsData,isLoading:krDetLoading,isFetched:kerDetFetched}:any=useGetKeyResultDetailsById(krId)
    const{data:editKrData,mutate:callEditKR,isSuccess}=useEditKeyResult()

    const initialEditKr = (data: any) => {
        let ids=pointingSystemType==='Regularly'?[]:krGradeDetails;
    console.log(levelIds)

        let{forceEndDate,startDate,...rest}=data;
        let fjalDate=moment(forceEndDate).format('jYYYY/jM/jD');
        let sjalDate=moment(startDate).format('jYYYY/jM/jD');
        // let{pointingSystemType}=data;
      
        let totalData={tenantId:tenantId,objectiveId:objectiveId,horizontalAlignments:[],valuesDetailCommandDtos:[] ,forceEndDate:fjalDate,startDate:sjalDate,...rest};
        totalData.valuesDetailCommandDtos=ids;      
     
       console.log(totalData)
       callEditKR(totalData)
 
     
    }

    const[showAdvanceOptions,setShowAdvanceOptions]=useState<Boolean>(false);



    useEffect(() => {
      
    setIdsValue(levelIds?.map((item:any)=>{
      return {...item,tenantId:tenantId}
    }))
    
    }, [getLevelsIds]);



    useEffect(() => {
      
    console.log(krGradeDetails)
     
    }, [krGradeDetails])
    



    useEffect(() => {
        if (editKrData) {
            // console.log(data)
          setShowEditKeyResult(false)
          setAddKrState(editKrData?.data)
        //   setSuccessAddkr(isSuccess)
          editKrSuccess()
          setShowToastMessage(true)
        }
            }, [editKrData,isSuccess]);


    useEffect(() => {
      
    console.log(krDetailsData)
    if (krDetailsData) {
        console.log(krDetailsData)
        let{name,
            responsibleId,
            startValue,
            // pointingSystemTypeValue,
            okR_KeyResultTypeValue,
            oneValue,
            weight,forceEndDateRealDate,
            id,description,
            startDateRealDate,
            okR_GradeDetails,
            pointingSystemTypeValue,
            horizontalAlignments
            // startDateRealDate
// managerId
             }=krDetailsData;

             setPointingSystemType(pointingSystemTypeValue);
             setHorizontalAlignments(horizontalAlignments?.map(({managerId,name}:any)=>{
            return{value:managerId,key:name}
             }))
             console.log(okR_GradeDetails)
           if (!okR_GradeDetails?.includes(null)) {
            setKrGradeDetails(okR_GradeDetails?.map(({scoreLevelId,value,tenantId,...rest}:any)=>{
                return {tenantId,value,scoreLevelId}
                 }))
           }
        
        let initValue={
            name:name,
            responsibleId:responsibleId,
            startValue:startValue,
            pointingSystemType:pointingSystemTypeValue,
            keyResultType:okR_KeyResultTypeValue,
            onValue:oneValue,
            weight:null,
            forceEndDate:forceEndDateRealDate?new Date(forceEndDateRealDate):'',
            startDate:startDateRealDate?new Date(startDateRealDate):'',
            id:id,
            description:description
            
        }
       
        console.log(initValue)

        setKrDetailInitValues(initValue)
    }
     
    }, [krDetailsData])

    
         
            


  

    const initialUpdateIdsValue=(i:number,item:any)=>{
   setKrGradeDetails((prev:any) => 
    prev.map((o:any, index:number) => index ===i
      ? { ...o, value:item }
      : o
    )
  )
    }

    useEffect(() => {
      
    console.log(krDetailInitValues)
    
    }, [krDetailInitValues])


    if (krDetLoading) {
        return <Box py={6} textAlign={'center'}   >
          <CircularProgress/>
        </Box>
    }
    
    
    

    return (
        <>
            <Box width={'100%'} maxHeight={'50em'}  >
               
           {
            false?<Box py={6} textAlign={'center'} >
                <CircularProgress/>
            </Box>: <Formik enableReinitialize
            initialValues={krDetailInitValues}
            // validationSchema={addKeyResultSchema}
            onSubmit={(data) => {
                initialEditKr(data)
            }}
            validate={(data:any)=>{
             console.log(data)
            //  let{pointingSystemType}=data;
            //  setPointingSystemType(pointingSystemType)

            }}


        >
            {
                ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }: any) =>
                    <Form>
                        <Grid container  >
                            {/* <Grid item xs={12} md={3}  >
                                <FormikControl
                                    control='textField'
                                    type='text'
                                    label='شرح نتیجه کلیدی'
                                    name='name'
                                    fullWidth
                                    value={values?.name || ''}
                                />

                            </Grid> */}

                            <Grid item xs={12} md={3}  >

                            <Box sx={{padding:'8px'}}  >
                            <TextField
                            size='small'
                            fullWidth
                            label={'نام'}
                            value={values?.name || ''}
                            onChange={({target}:any)=>{
                            let{value}=target;
                            setFieldValue('name',value)
                            }}
                            />

                            </Box>
                            </Grid>

                            <Grid item xs={12} md={3}  >
                                <FormikControl
                                    control='select'
                                    options={acPersOptions||[]}
                                    label='مسئول'
                                    name='responsibleId'
                                    fullWidth
                                    value={values?.responsibleId || ''}
                                />

                            </Grid>

                            {/* <Grid item xs={12} md={3}  >
                                <FormikControl
                                    control='select'
                                    options={pointSystem}
                                    label='سیستم امتیاز دهی '
                                    name='pointingSystemType'
                                    fullWidth
                                    value={values?.pointingSystemType || ''}
                                />
                            </Grid> */}


                            <Grid item xs={12} md={3} >
                            <FormControl fullWidth sx={{ padding: '8px' }} >
                            <InputLabel id="pointingSystemType">سیستم امتیاز دهی </InputLabel>
                            <Select
                                // error={touched.meetingTypeId && !values.meetingTypeId }
                            
                                id="pointingSystemType"
                                label='سیستم امتیاز دهی '
                                fullWidth
                                size='small'
                                name='pointingSystemType'
                                type='text'
                                value={values?.pointingSystemType || ''}
                                onChange={({ target }, { props }:any) => {
                                let { content } = props;
                                let { value } = target;
                                console.log(value)
                                setFieldValue('pointingSystemType',value)
                                setPointingSystemType(value)
                                }}
                            >
                                {
                                pointSystem && pointSystem.map((item:any, i:number) => {
                                    return <MenuItem className='font-num' sx={{ fontSize: '0.7rem' }} key={i}  value={item.value} >{item.key}</MenuItem>
                                })
                                }
                            </Select>
                            </FormControl>
                            </Grid>






                            <Grid item xs={12} md={3}  >
                                <FormikControl
                                    control='select'
                                    options={keyResultTypeOptions}
                                    label='نوع نتیجه کلیدی '
                                    name='keyResultType'
                                    fullWidth
                                    value={values?.keyResultType || ''}
                                />
                            </Grid>



           





                            {/* مقدار شروع */}
                      
                               <Grid item xs={12} md={3}  >

                                <Box sx={{padding:'8px'}}  >
                                <TextField
                                size='small'
                                fullWidth
                                label={'مقدار شروع '}
                                value={values?.startValue || ''}
                                onChange={({target}:any)=>{
                                let{value}=target;
                                setFieldValue('startValue',value)
                                }}
                                />

                                </Box>
                                </Grid>
                            
                          {
                            pointingSystemType==='Regularly'?
                
                        <Grid item xs={12} md={3}  >

                        <Box sx={{padding:'8px'}}  >
                        <TextField
                        size='small'
                        fullWidth
                        type='text'
                        label={'چه زمانی به 100% میرسد؟ '}
                        value={values?.onValue || ''}
                        onChange={({target}:any)=>{
                        let{value}=target;
                        setFieldValue('onValue',value)
                        }}
                        />

                        </Box>
                        </Grid>
                        
                        :<>
                        {
                            krGradeDetails?.map((item:any,i:number)=>{
                            return <Grid item  key={i} xs={12} md={3} padding={'8px'} >
                              <TextField 
                              fullWidth
                              size='small'
                             
                              value={krGradeDetails[i]?.value || ''}
                              onChange={({target}:any)=>{
                                let{value}:any=target;
                                console.log(value)
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

                            <Grid item xs={12} md={3}  >

                            <Box sx={{padding:'8px'}}  >
                            <TextField
                            size='small'
                            fullWidth
                            label={'وزن'}
                            value={values?.weight || 0}
                            onChange={({target}:any)=>{
                            let{value}=target;
                            setFieldValue('weight',value)
                            }}
                            />

                            </Box>
                            </Grid>




                         {/* <Grid item xs={12} md={3}  >
                                <FormikControl
                                    control='select'
                                    options={HorzinalAlignData||[]}
                                    label='همسویی افقی'
                                    name='horizontalAlignment'
                                    fullWidth
                                    values={values?.horizontalAlignment}
                                />
                            </Grid> */}

                                   {/* <Grid item xs={12} md={3} >
                                        <MultiSelect
                                        options={teamsOptions?.map((item:any)=>{
                                         let{key,value}=item;
                                         return{year:value,title:key}
                                        }) || []}
                                        isLoading={teamOPloading}
                                        onChangee={setFieldValue}
                                        propName='horizontalAlignments'
                                        label={'همسویی افقی'}
                                        />
                                        </Grid> */}

                                        <Grid item xs={12} md={3}   >
                                            <NewMultiSelect 
                                            selectedItems={krHorizontalAlignments}
                                            label={'همسویی افقی'}
                                            propName='horizontalAlignments'
                                            onChangee={setFieldValue}
                                            isLoading={teamOPloading}
                                            options={teamsOptions || []}
                                            />
                                        </Grid>




                         <Grid item xs={12} md={3}>
                         <FormControl sx={{p:'8px'}} fullWidth  >
                         <DatePicker 
                         
                         slotProps={{ textField: { size: 'small' } }}
                         label={"حداکثر تاریخ انجام"}
                           value={values?.forceEndDate}
                           onChange={(newValue)=>{
                               var persianDate = moment(newValue).format('jYYYY/jM/jD');
                               console.log(persianDate)
                               setFieldValue('forceEndDate',newValue);
                           }}
                           />
                         </FormControl>
                         </Grid> 
                         <Grid item xs={12} md={3}>

                         <FormControl sx={{p:'8px'}} fullWidth  >
                         <DatePicker 
                         
                         slotProps={{ textField: { size: 'small' } }}
                         label={"تاریخ شروع نتایج کلیدی"}
                        //    value={values?.forceEndDate }
                           value={values?.startDate || ''}
                           onChange={(newValue)=>{
                               var persianDate = moment(newValue).format('jYYYY/jM/jD');
                               console.log(persianDate)
                               setFieldValue('startDate',newValue);
                           }}
                           />
                         </FormControl>




                            {/* <DatePicker 
                            value={}
                            /> */}
                            {/* <FormikControl
                                control="date"
                                label=
                                name="startDate"
                                value={values?.startDate}
                            /> */}
                            </Grid>

                            <Grid item xs={12} md={12}  >
                                {/* <FormikControl
                                    control='textField'
                                    type={'text'}
                                    label='توضیحات'
                                    name='c'
                                    fullWidth
                                    value={values?.description || ''}
                                /> */}
                                
                            <Box sx={{padding:'8px'}}  >
                            <TextField
                            size='small'
                            fullWidth
                            label={'توضیحات'}
                            value={values?.description || ''}
                            onChange={({target}:any)=>{
                            let{value}=target;
                            setFieldValue('description',value)
                            }}
                            />

                            </Box>
                            </Grid>

                      </Grid>
                            </AccordionLyt>
                      </Grid>


                            

                            
                       

                      
                          

                            

                            




                            <Grid item xs={12} md={12} mt={3} >
                                <Box width={'100%'} display={'flex'} flexDirection={'row-reverse'} >
                                    <DySplitButton 
                                    // disbled={!dirty || !isValid}
                                    onclick={setFieldValue}
                                    options={submitFormOptions || []}

                                    />
                                    {/* <DyButton
                                        type={'submit'}
                                        variant={'contained'}
                                        bgColor={'info'}
                                        caption={'افزودن نتیجه'}
                                        onClick={() => { }}
                                    /> */}
                                </Box>
                            </Grid>
                        </Grid>














                    </Form>
            }

        </Formik>
           }
               
            </Box>
        </>
    )
}
