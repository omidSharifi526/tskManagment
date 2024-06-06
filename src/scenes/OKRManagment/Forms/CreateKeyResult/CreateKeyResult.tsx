import React, { useState,useEffect } from 'react';
import { useParams,useLocation } from 'react-router-dom';
import { addKeyResultSchema } from '../../StaticData/index';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import { Box, Grid, TextField, Typography,MenuItem,InputLabel,FormControl,Select } from '@mui/material';
// import MultiSelect from '../../../../components/FormikControls/MultiSelect/MultiSelect';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import { Formik, Form } from 'formik';
import MultiSel from '../../../../components/MultiSel/MultiSel';
import { addKrValues } from '../../StaticData/index';
import DYToastMessage from '../../../../components/GlobalComponents/DyToastMessage/DYToastMessage';
import { useGetAllObjectiveDefinitionLevelByTenantId } from '../../Hooks';
// import DySplitButton from '../../../../components/GlobalComponents/DySplitButton/DySplitButton';
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
    addKrSuccess:() => any,
    setShowToastMessage:(show:boolean) => void
    setAddKrState:(show:any) => void,
    setShowCreateKr:(show:boolean)=>void

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
    const{mutate:addKeyResulttt,isSuccess,data,isLoading:AddKrLoading}=useAddKeyResult();
    const[successAddkr,setSuccessAddkr]=useState<boolean|null>(null);
    const[addkrMessage,setAddkrMessage]=useState<string>('');
    const [horizontalAlignments,setHorizontalAlignments]=useState([]);
    const[showLtoastMessage,setShowLtoastMessage]=useState<any>(null);
    const[addKrStatusData,setAddKrStatusData]=useState<any>(null);
    const[validationPIds,setValidationIds]=useState<boolean>(true)

    const[tval,setTval]=useState<any>(null)
    const[hundredValue,setHundredValue]=useState<any>({value:'',scoreLevelId:'',tenantId:tenantId})
    const initialAddKeyR = (data: any) => {
        
        let{pointingSystemType}=data;

        let ids=pointingSystemType==='Regularly'?[{...hundredValue}]:idsValue;
        let totalData={tenantId:tenantId,objectiveId:objectiveId,onValue:'',...data};
        totalData.valuesDetailCommandDtos=ids;
        totalData.horizontalAlignments=horizontalAlignments.map((({value})=>value))      
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
        setTval(finded?.scoreLevelId)
    }, [levelIds])
    


    useEffect(() => {
        if (data) {
      
            if (data?.data.isSuccess) {
                  // setSuccessAddObjective(isSuccess)
                  setShowToastMessage(true)
                  setAddKrState(data?.data)
                  setShowCreateKr(false)
        
            } else {
                setShowLtoastMessage(true);
                setAddKrStatusData(data?.data)
            }
          
      
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
               
         <Formik enableReinitialize
                initialValues={addKrValues}
                validationSchema={addKeyResultSchema}
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
                                pointingSystemType==='Regularly'?<Grid item xs={12} md={3}>
                               <Box  sx={{padding:'8px'}}  >
                               <TextField 
                                  fullWidth
                                  size='small'                  
                                  value={hundredValue?.value}
                                  onChange={({target}:any)=>{
                                    let{value}:any=target;
                                    setValidationIds(false)
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
              
                            </>
                            
                            
                        
                            

                              }



                          <Grid item xs={12} >
                          <AccordionLyt 
                          collapse={setShowAdvanceOptions}
                          title={' تنظیمات پیشرفته ( اختیاری)'} 
                          expanded={showAdvanceOptions}  >
                          <Grid container  >
                          <Grid item xs={12} md={3}  >
                                    <FormikControl
                                        control='textField'
                                        type={'text'}
                                        label='وزن'
                                        name='weight'
                                        fullWidth
                                        value={values?.weight || ''}
                                    />
                        </Grid>


                                       <Grid item xs={12} md={3} >         
                                        <Box sx={{padding:'8px'}}   >
                                        <MultiSel 
                                            data={teamsOptions||[]}
                                            extractTag={setHorizontalAlignments}
                                            label={'همسویی افقی'}
                                           
                                            />
                                        </Box>
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
                                <Box width={'100%'} display={'flex'} 
                                justifyContent={'end'} 
                                flexDirection={'row-reverse'}   
                                columnGap={2}
                                >

                                   
                                 {
                                    submitFormOptions && submitFormOptions?.map((item:any,i:number)=>{
                                        let{label,id}=item;
                                        // console.log(item)
                                        return   <Box width={'20%'}>
                                        <DyButton
                                            key={i}
                                            // || validationPIds
                                             disabled={!dirty || !isValid || AddKrLoading || validationPIds }
                                             type={'submit'}
                                             variant={'contained'}
                                             bgColor={'info'}
                                             caption={label}
                                             onClick={() => {
                                                // console.log(id)
                                                setFieldValue('oKRStateId',id)
                                                // console.log(id)
                                                // setOkrStateId(id)
                                              }}
                                         />
                                        </Box> 
                                    })
                                 }

                              </Box>

                             
                            </Grid>



                            </Grid>














                        </Form>
                }

            </Formik>

            {
            showLtoastMessage && <DYToastMessage
            isSuccess={addKrStatusData?.isSuccess}
            message={addKrStatusData?.metaData.message}
            setShow={setShowLtoastMessage}
            show={showLtoastMessage}
            
            />
            }
          
               
            </Box>
        </>
    )
}
