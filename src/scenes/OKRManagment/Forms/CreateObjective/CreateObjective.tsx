import React,{useEffect, useState} from 'react';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import {Box,Grid,Typography,FormControl,InputLabel,Select,MenuItem, Button} from '@mui/material';
import { Formik,Form } from 'formik';
import { addObjectiveSchema } from '../../StaticData';
import MultiSelect from '../../../../components/FormikControls/MultiSelect/MultiSelect';
import { useSelector } from 'react-redux';
import DySplitButton from '../../../../components/GlobalComponents/DySplitButton/DySplitButton';
import AccordionLyt from '../../../../components/Layouts/AccordionLyt/AccordionLyt';
import { addObjectiveFace } from '../../Interfaces/Interfaces';
import GroupedMultiSel from '../../../../components/FormikControls/GroupedMultiSel/GroupedMultiSel';
import { useGetAllHorizontalAlignmentByTenantId,
     useGetAllObjectiveDefinitionLevelByTenantId,
     useGetAllObjectiveOKRStateByTenantId,
    useAddObjective,
    useGetAllObjectiveNameWithKeyResultsByTenantId,
    useGetAllTeamAndPersonNameByTenantId
    } from '../../Hooks';
import { useGetAllActivePersonByTenantId } from '../../Hooks';
import {CircularProgress} from '@mui/material';
import DyLoadingCircular from '../../../../components/GlobalComponents/DyLoadingCircular/DyLoadingCircular';
import { useGetPriodById } from '../../../../components/Login/Hooks/Index';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import MultiSel from '../../../../components/MultiSel/MultiSel';

interface teamIdsFace{
  teamId:string,
  personIds:string[]
}
// allIds

const CreateObjective = ({periodsData,onSuccess,setShowToastMessage,setAddObjectiveStatus,afterSuccess}:any) => {
  const[teamIdObject,setTeameIdObjects]=useState<teamIdsFace>({teamId:'',personIds:[]})
    const tenantId:string=useSelector((state:any)=>state.meetings.profileTenantId);
    const[HorzIds,setHorzIds]=useState<any>({tenantId:tenantId,definitionId:null})
    const[definitionLevel,setDefinitionLevel]=useState<string | null>(null);
    const[showAdvanceOptions,setShowAdvanceOptions]=useState<boolean>(false)
   const[successAddObjective,setSuccessAddObjective]=useState<boolean|null>(null);
   const[addObectiveMessage,setAddObjectiveMessage]=useState<string>('')
    const{data:teamsOptions,isLoading:teamOPloading}=useGetAllObjectiveDefinitionLevelByTenantId(tenantId);
    const{data:personsOptionds}=useGetAllActivePersonByTenantId(tenantId);
    const{data:submitOptions}=useGetAllObjectiveOKRStateByTenantId(tenantId);
    const{data:HorzinalAlignData, isLoading:HorzDataLoading}=useGetAllHorizontalAlignmentByTenantId(HorzIds);
    const periodId=useSelector((state:any)=>state.meetings.priodId);
const[periodOptions,setPeriodOptions]=useState<any>([]);
const[horzinalAliIds,setHorzinalAliIds]=useState<any[]>([]);
const[allIds,setAllIds]=useState<any>([]);
const[okrStateId,setOkrStateId]=useState<string>('')
const[objNameIds,setObjNameIds]=useState<any>({
  tenantId:tenantId,
  periodId:periodId,
  definitionLevelId:null

})
const{data:allTeamAndPersonData}:any=useGetAllTeamAndPersonNameByTenantId(tenantId)
    const {data:ObjectiveNameOptions}=useGetAllObjectiveNameWithKeyResultsByTenantId(objNameIds)

    const onSuccesss=()=>{
        onSuccess((prev:any)=>!prev)
    }

    const onFailed=()=>{

      }
      const{mutate:addObjective,data:addObjectiveData,isSuccess,isLoading}=useAddObjective(onSuccesss)

      useEffect(() => {
  if (addObjectiveData) {
    setAddObjectiveMessage(addObjectiveData?.data?.metaData.message)
    setSuccessAddObjective(isSuccess)
    setShowToastMessage(true)
    setAddObjectiveStatus(addObjectiveData?.data)


    // if (addObjectiveData?.data?.isSuccess) {
      // onSuccesss()
      afterSuccess()
    // }

  }
  


      }, [addObjectiveData,isSuccess]);

      const addObjectiveInitialValues:addObjectiveFace={
        name:'',
        periodId:periodId,
        calculateProgressType:'BasedOnKR',
        // createById:'',
        definitionLevelId:'',
        description:'',
        isPublic:false,
        keyResultParentIds:[],
        // :'',
        responsibleId:'',
        allIds:[],
        tenantId:'',
        weight:null,
        answerRequest:'',
  
      
      
      
      }


     
      
      

      


// const{data:perData,isLoading:perLoading,isError:periodError,isFetched}=useGetPriodById(tenantId,onSuccesss,onFailed);

  const initialAddObjective=(data:any)=>{
    let{isPublic}=data;
    // 
    let resIsPublic={isPublic:isPublic==='برای همه'?true:false};
    let total={...data,...resIsPublic,tenantId:tenantId,keyResultParentIds:[...horzinalAliIds],allIds:allIds.map(({value}:any)=>value)};
    // console.log(total)
    total.okRStateId=okrStateId;
    console.log(total)
    addObjective(total)

  }

  useEffect(() => {
  let transformed=periodsData?.map((item:any)=>{
    let{name:key,id:value}=item;
  return {key,value}
  })
  setPeriodOptions(transformed)
  }, [])

  // useEffect(() => {
    
  // console.log(allIds)
   
  // }, [allIds])
  
  

 

  if (isLoading) {
    return <Box width={'100%'} py={6} textAlign={'center'}   >
        <CircularProgress/>
    </Box>
  }
  


  return (
    <>
    <Box width={'100%'} maxHeight={'50em'}  >
        <Formik enableReinitialize
        validationSchema={addObjectiveSchema}
             validate={(data)=>{
                let{definitionLevelId,responsibleId}=data;
                setTeameIdObjects((prev:teamIdsFace)=>({...prev,personIds:[responsibleId]}))
                setHorzIds((prev:any)=>({...prev,definitionId:definitionLevelId}))
            // console.log(data)
             }}
            initialValues={{...addObjectiveInitialValues}}
            onSubmit={(data) => {
              initialAddObjective(data)
            }}


        >
            {
                ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }: any) =>
                    <Form>
                        <Grid container  >
                            <Grid item xs={12} md={10}  >
                                <FormikControl
                                    control='textField'
                                    type='text'
                                    label='شرح هدف'
                                    name='name'
                                    fullWidth
                                    values={values?.name || ''}
                                />

                            </Grid>
                          

                      

                                <Grid item xs={12} md={2}  >
                                      <Box sx={{padding:'8px'}}>
                                   <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">دوره زمانی</InputLabel>
                                    <Select
                                    defaultValue={periodId}
                                    // sx={{'& .muirtl-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.MuiSelect-select' :{py:'1px'}}}
                                    size='small'
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values?.periodId || ''}
                                    label='دوره زمانی'
                                    onChange={({target}:any)=>{
                                       let{value}=target;
                                        setFieldValue('periodId',value)
                                    }}
                                    >
                                        {
                                            periodOptions.map((item:any,i:number)=>{
                                                let{key,value,desc}=item
                                                return <MenuItem 
                                                key={i}
                                                sx={{ fontSize: "0.7rem", bgcolor: "transparent" }}
                                                value={value}>
                                                    {key}
                                                 
                                                  
                                            </MenuItem>
                                            })
                                        }
                     
                                    </Select>
                                </FormControl>
                                </Box>



                                </Grid>






                            <Grid item xs={12} md={3}  >

                            <Box padding={'8px'} >
                                <FormControl fullWidth size='small'  >
                                <InputLabel id="demo-simple-select-label">تیم</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-selectd"
                                    value={values?.definitionLevelId || ''}
                                 
                                    label="تیم"
                                    onChange={(e: any,other:any) => {
                                        let{props}=other;

                                        let{children:keyName,content}=props;
                                        if (!content) {
                                          setObjNameIds((prev:any)=>({...prev,definitionLevelId:value}))
                                        }
                                       
                                        setDefinitionLevel(keyName)
                                        let {target}=e
                                        let{value}=target;
                                        setTeameIdObjects((prev:teamIdsFace)=>({...prev,teamId:value}))
                                        setFieldValue('definitionLevelId',value)
                                    
                                    }}


                                >
                                 {
                                    teamOPloading && <Box  width={'100%'} textAlign={'center'}  ><DyLoadingCircular /></Box>
                                 }

                                    { teamsOptions && teamsOptions.map((item:any) => {
                                        let{key,value,isCompany}=item
                                    return (
                                      
                                        <MenuItem key={key} value={value} content={isCompany} >
                                        {key}
                                        </MenuItem>
                                    );
                                    })}
                                </Select>
                                </FormControl>
                            </Box>
                              
                            </Grid>



                            {
                              objNameIds?.definitionLevelId!==null?
                              <Grid xs={6}  >
                              <GroupedMultiSel 
                              data={ObjectiveNameOptions||[]}
                              setSpecialIds={setHorzinalAliIds}
                              // extraTag={()=>{}}
                              />

                              </Grid>:
                              
                              <></>
                            }


                            <Grid item xs={12} md={3}  >
                                <FormikControl
                                    control='select'
                                    options={personsOptionds || []}
                                    label='مسئول هدف'
                                    name='responsibleId'
                                    fullWidth
                                    values={values?.responsibleId || ''}
                                />
                            </Grid>


                         

      

                           




                   <Grid item xs={12}  >
                   <AccordionLyt 
                      collapse={setShowAdvanceOptions}
                      title={' تنظیمات پیشرفته ( اختیاری)'}
                      expanded={showAdvanceOptions}  >
                     <Grid container  >
                        
                         <Grid item xs={12} md={3}  >
                           <FormikControl 
                           control={'radio'}
                           mainLabel={'قابلیت نمایش'}
                           value={values?.isPublic}
                           setFieldValue={setFieldValue}
                           propName={'isPublic'}
                           options={[{label:'برای همه',value:'برای همه'},{label:'برای اشخاص خاص',value:'برای اشخاص خاص'}]}
                             />
                            </Grid>


                            <Grid item xs={12} md={6} >
                        {/* <MultiSelect
                          options={[]}
                          isLoading={HorzDataLoading}
                          onChangee={setFieldValue}
                          propName='TeamIds'
                          disabled={values?.isPublic==='برای همه' }
                          label={'انتخاب تیم ها'}
                          
                          
                        /> */}

                        <MultiSel 
                        data={allTeamAndPersonData||[]}
                        extractTag={setAllIds}
                        label={'یا اشخاص انتخاب تیم ها'}
                        />
  
                      </Grid>

                    


                            <Grid item xs={12} md={12}  >
                                <FormikControl 
                                setFieldValue={setFieldValue}
                                control={'radio'}
                                propName={'CalculateProgressType'}
                                mainLabel={'نحوه محاسبه پیشرفت:'}
                                options={[{label:'بر اساس okr های همسو',value:'ForSpecialPeople'},{label:'بر اساس تحقق نتایج کلیدی',value:'BasedOnKR'}]}
                             />
                            </Grid>
                     </Grid>

                     <Grid container >
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
                                    name='answerRequest'
                                    fullWidth
                                    values={values?.answerRequest}
                                />
                                {/* TheReasonImportant */}

                            </Grid>


                               
                            <Grid item xs={12} md={12}  >
                                <FormikControl
                                    control='textField'
                                    type='text'
                                    label='توضیحات'
                                    name='description'
                                    fullWidth
                                    values={values?.description}
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
                                    submitOptions && submitOptions?.map((item:any,i:number)=>{
                                        let{label,id}=item;
                                        // console.log(item)
                                        return   <Box width={'20%'}>
                                        <DyButton
                                        disabled={!dirty|| !isValid}
                                        key={i}
                                             type={'submit'}
                                             variant={'contained'}
                                             bgColor={'info'}
                                             caption={label}
                                             onClick={() => {
                                              
                                                setOkrStateId(id)
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
    </Box>
    
            </>
  )
}

export default CreateObjective