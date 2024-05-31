import React, { useState,useEffect } from 'react';
import { useParams,useLocation } from 'react-router-dom';
import { addKeyResultSchema } from '../../StaticData/index';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import { Box, Grid, TextField, Typography,MenuItem,InputLabel,FormControl,Select } from '@mui/material';
import MultiSelect from '../../../../components/FormikControls/MultiSelect/MultiSelect';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import { Formik, Form } from 'formik';
import { addKrValues } from '../../StaticData/index';
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

interface createKrFace{
    // addKrSuccess
    addKrSuccess:() => any,
    setShowToastMessage:(show:boolean) => void
    setAddKrState:(show:any) => void,
    setShowCreateKr:(show:boolean)=>void
    // message:string|null,
    // isSuccess:boolean|null,
    // setShow:(show:boolean) => void
    // setShowToastMessage={setShowToastMessage}
    // setAddKrState={setAddKrState}
  }



export const CreateKeyResult = ({addKrSuccess,setShowToastMessage,setAddKrState,setShowCreateKr}:createKrFace) => {
    const location:any=useLocation();
    let{state:{objectiveId}}:any=location;
    const[pointingSystemType,setPointingSystemType]=useState<string>('Regularly');
    const[idsValue,setIdsValue]=useState<any>([]);
    const tenantId: any = useSelector((state: any) => state.meetings.profileTenantId);
    const{data:teamsOptions,isLoading:teamOPloading}=useGetAllObjectiveDefinitionLevelByTenantId(tenantId);
    const {data:acPersOptions}=useGetAllActivePersonByTenantId(tenantId);
    const{data:HorzinalAlignData}=useGetAllHorizontalAlignmentByTenantId(tenantId);
    const{data:submitFormOptions}=useGetAllOKRStateByTenantId(tenantId);
    const{data:levelIds,isFetched:getLevelsIds}:any=useGetAllScoreLevelsByTenantId(tenantId);
    const{mutate:addKeyResulttt,isSuccess,data}=useAddKeyResult();
    const[successAddkr,setSuccessAddkr]=useState<boolean|null>(null);
    const[addkrMessage,setAddkrMessage]=useState<string>('');

    const[tval,setTval]=useState<any>(null)
    const[hundredValue,setHundredValue]=useState<any>({value:'',scoreLevelId:'',tenantId:tenantId})
    const initialAddKeyR = (data: any) => {
        
        let{pointingSystemType}=data;

        let ids=pointingSystemType==='Regularly'?[{...hundredValue}]:idsValue;
        // console.log(ids)
        // console.log(pointingSystemType)
        // pointingSystemType==="Tensile"?idsValue:[]
        let totalData={tenantId:tenantId,objectiveId:objectiveId,onValue:'',...data};
        totalData.valuesDetailCommandDtos=ids;      
        // pointingSystemType

        console.log(totalData);


        addKeyResulttt(totalData)
     
    }

    const[showAdvanceOptions,setShowAdvanceOptions]=useState<Boolean>(false)

    useEffect(() => {
    let idsValues=levelIds?.map((item:any)=>{
        return {...item,tenantId:tenantId}
      })

      console.log(levelIds)
    setIdsValue(idsValues)


    
    }, [getLevelsIds]);


    useEffect(() => {
        let finded:any = levelIds?.find((o:any) => o.name === "1");
        // console.log(scoreLevelId)
        // console.log(levelIds)
        setTval(finded?.scoreLevelId)
    // console.log(tval)
    
    }, [levelIds])
    



    useEffect(() => {
        if (data) {
            // console.log(data)
          setShowCreateKr(false)
          setAddKrState(data?.data)
          setSuccessAddkr(isSuccess)
          addKrSuccess()
          setShowToastMessage(true)
        }
            }, [data,isSuccess]);

         
            


  

    const initialUpdateIdsValue=(i:number,item:any)=>{
   setIdsValue((prev:any) => 
    prev.map((o:any, index:number) => index ===i
      ? { ...o, value:item }
      : o
    )
  )
    }

    const initialSetHunderdvalue=(value:any)=>{
      let iniVal={
        scoreLevelId:tval,
        value:value,
        tenantId:tenantId
      }
        // console.log(iniVal)
        setHundredValue(iniVal)
    }
   

    
    
    

    return (
        <>
            <Box width={'100%'} maxHeight={'50em'}  >
               {
                !isSuccess? <Formik enableReinitialize
                initialValues={addKrValues}
                validationSchema={addKeyResultSchema}
                onSubmit={(data) => {
                    initialAddKeyR(data)
                }}
                validate={(data:any)=>{
                 console.log(data)
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
                                        value={values?.name}
                                    />

                                </Grid>

                                <Grid item xs={12} md={3}  >
                                    <FormikControl
                                        control='select'
                                        options={acPersOptions||[]}
                                        label='مسئول'
                                        name='responsibleId'
                                        fullWidth
                                        value={values?.responsibleId}
                                    />

                                </Grid>

                                <Grid item xs={12} md={3}  >
                                      <Box sx={{padding:'8px'}}>
                                   <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">سیستم امتیاز دهی </InputLabel>
                                    <Select
                                    sx={{'& .muirtl-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select' :{py:'1px'}}}
                                    size='small'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values?.pointingSystemType || ''}
                                    label="سیستم امتیاز دهی "
                                    onChange={({target}:any)=>{
                                       let{value}=target;
                                        setFieldValue('pointingSystemType',value)
                                    }}
                                    >
                                        {
                                            pointSystem.map((item:any,i:number)=>{
                                                let{key,value,desc}=item
                                                return <MenuItem 
                                                key={i}
                                                sx={{ fontSize: "0.7rem", bgcolor: "transparent" }}
                                                value={value}>
                                                    {key}
                                                    {'\u00A0'}
                                                     <Typography fontSize={'0.5rem'}   >{desc}</Typography>
                                                  
                                                       </MenuItem>
                                            })
                                        }
                     
                                    </Select>
                                </FormControl>
                                </Box>



                                </Grid>


                                <Grid item xs={12} md={3}  >
                                    <FormikControl
                                        control='select'
                                        options={keyResultTypeOptions}
                                        label='نوع نتیجه کلیدی '
                                        name='keyResultType'
                                        fullWidth
                                        value={values?.keyResultType}
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
                                        value={values?.startValue}
                                    />
                                </Grid>
                                
                              {
                                pointingSystemType==='Regularly'?<Grid item xs={12} md={3}  >
                                {/* <FormikControl
                                    control='textField'
                                    type={'text'}
                                    label='چه زمانی به 100% میرسد؟ '
                                    name='onValue'
                                    fullWidth
                                    values={values?.onValue}
                                /> */}

                               <Box  sx={{padding:'8px'}}  >
                               <TextField 
                                  fullWidth
                                  size='small'
                                 
                                  value={hundredValue?.value}
                                  onChange={({target}:any)=>{
                                    let{value}:any=target;
                                    initialSetHunderdvalue(value)
                                  }}
                                  label={'چه زمانی به 100% میرسد؟ '}   />
                               </Box>




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
                                        value={values?.weight}
                                    />
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

                                       <Grid item xs={12} md={3} >
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
                                            </Grid>

                                <Grid item xs={12} md={3}>
                                <FormikControl
                                    control="date"
                                    label="تاریخ شروع نتایج کلیدی"
                                    name="startDate"
                                    value={values.startDate}
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
                          

                                <Grid item xs={12} md={12}  >
                                    <FormikControl
                                        control='textField'
                                        type={'text'}
                                        label='توضیحات'
                                        name='description'
                                        fullWidth
                                        value={values?.description}
                                    />
                                </Grid>

                          </Grid>
                                </AccordionLyt>
                          </Grid>


                                

                                
                           

                          
                              

                                

                                




                                <Grid item xs={12} md={12} mt={3} >
                                    <Box width={'100%'} display={'flex'} flexDirection={'row-reverse'} >
                                        <DySplitButton 
                                        disbled={!dirty || !isValid}
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

            </Formik>:<Box py={5} textAlign={'center'} >
            <Typography fontWeight={700}  color={'green'} >
                
                   {addkrMessage}
                
            </Typography>
            </Box>
               }
            </Box>
        </>
    )
}
