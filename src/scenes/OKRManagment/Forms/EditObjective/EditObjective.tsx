import React,{useEffect, useState} from 'react';
import FormikControl from '../../../../components/FormikControls/FormikControl';
import {Box,Grid,Typography,FormControl,InputLabel,Select,MenuItem, Button, TextField} from '@mui/material';
import { Formik,Form } from 'formik';
import { editObjectiveSchema } from '../../StaticData';
import MultiSelect from '../../../../components/FormikControls/MultiSelect/MultiSelect';
import { useSelector } from 'react-redux';
import DySplitButton from '../../../../components/GlobalComponents/DySplitButton/DySplitButton';
import AccordionLyt from '../../../../components/Layouts/AccordionLyt/AccordionLyt';
import { addObjectiveFace } from '../../Interfaces/Interfaces';
import DYToastMessage from '../../../../components/GlobalComponents/DyToastMessage/DYToastMessage';
import GroupedMultiSel from '../../../../components/FormikControls/GroupedMultiSel/GroupedMultiSel';
import { useGetAllHorizontalAlignmentByTenantId,
     useGetAllObjectiveDefinitionLevelByTenantId,
     useGetAllObjectiveOKRStateByTenantId,
     useEditObjective,
     useGetObjectiveDetailsById,
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

const EditObjective = ({objectiveId,periodsData,onSuccess,setShowToastMessage,setObjectiveAsyncOpState,afterSuccess}:any) => {

    const tenantId:string=useSelector((state:any)=>state.meetings.profileTenantId);
    const[showAdvanceOptions,setShowAdvanceOptions]=useState<boolean>(false)
    const{data:objectiveDetailData,isLoading:getObjectiveDetailLoading}=useGetObjectiveDetailsById(objectiveId);
    const{data:teamsOptions,isLoading:teamOPloading}=useGetAllObjectiveDefinitionLevelByTenantId(tenantId);
    const{data:personsOptionds}=useGetAllActivePersonByTenantId(tenantId);
    const{data:submitOptions}=useGetAllObjectiveOKRStateByTenantId(tenantId);
   
    const periodId=useSelector((state:any)=>state.meetings.priodId);
const[periodOptions,setPeriodOptions]=useState<any>([]);
const[horzinalAliIds,setHorzinalAliIds]=useState<any[]>([]);
const[allIds,setAllIds]=useState<any>([]);
const[okrStateId,setOkrStateId]=useState<string>('');
const[lIsPublic,setlIsPublic]=useState<any>(false);
const[editObjectiveinintialValues,setEditObjectiveInitialValues]=useState<any>(null);
const[showLtoastMessage,setShowLtoastMessage]=useState<any>(null);
const[editObjError,setEditObjError]=useState<any>(null)
const[objNameIds,setObjNameIds]=useState<any>({
  tenantId:tenantId,
  periodId:periodId,
  definitionLevelId:null

})
const{data:allTeamAndPersonData}:any=useGetAllTeamAndPersonNameByTenantId(tenantId)
    const {data:ObjectiveNameOptions}=useGetAllObjectiveNameWithKeyResultsByTenantId(objNameIds)

    const onSuccesss=()=>{
        // onSuccess((prev:any)=>!prev)
    }

    const onFailed=()=>{

      }
      const{mutate:editObjective,data:editObjectiveData,isSuccess,isLoading}=useEditObjective()

      useEffect(() => {
  if (editObjectiveData) {

      if (editObjectiveData?.data.isSuccess) {
            setShowToastMessage(true)
            setObjectiveAsyncOpState(editObjectiveData?.data)
            onSuccess()
  
      } else {
          setShowLtoastMessage(true);
          setEditObjError(editObjectiveData?.data)
      }
  }
      }, [editObjectiveData]);

 
      useEffect(() => {
        if (objectiveDetailData) {
          let{name,periodId,description,definitionLevelId,calculateProgressType,weight
            ,isPublic,keyResultParentIds,responsibleId,allIds,tenantId,answerRequest
            ,personQueryResultDtos,id}:any=objectiveDetailData;
          let initValue={
            id:id,
            name:name,
            periodId:periodId,
            calculateProgressType:calculateProgressType,
            definitionLevelId:definitionLevelId,
            description:description,
            isPublic:isPublic,
            keyResultParentIds:keyResultParentIds,
            responsibleId:responsibleId,
            allIds:allIds,
            tenantId:tenantId,
            Sweight:weight,
            answerRequest:answerRequest,
            //PersonIds:personQueryResultDtos?.map(({id}:any)=>id)
          }
          
        //   setHorzinalAliIds(keyResultParentIds?.map((item:any)=>{
        //    let{id:year,name:title}=item;
        //    return{year,title}
        //   }))
         setEditObjectiveInitialValues(initValue)
        }
      }, [objectiveDetailData])
 

  const initialEditObjective=(data:any)=>{
    let{isPublic}=data;
    // 
    let resIsPublic={isPublic:isPublic==='برای همه'?true:false};
    let total={...data,...resIsPublic,tenantId:tenantId,keyResultParentIds:[...horzinalAliIds],allIds:allIds.map(({value}:any)=>value)};
    // console.log(total)
    total.okRStateId=okrStateId;
    // console.log(total)
    editObjective(total)

  }

  useEffect(() => {
  let transformed=periodsData?.map((item:any)=>{
    let{name:key,id:value}=item;
  return {key,value}
  })
  setPeriodOptions(transformed)
  }, [])


  if (getObjectiveDetailLoading) {
    return <Box width={'100%'} py={6} textAlign={'center'}   >
        <CircularProgress/>
    </Box>
  }
  
  return (
    <>
    <Box width={'100%'} maxHeight={'50em'}  >
        {

            !getObjectiveDetailLoading ==true ? <Formik 
        //validationSchema={editObjectiveSchema}
             enableReinitialize
             validate={(data)=>{
                let{definitionLevelId,responsibleId,isPublic}:any=data;
                setlIsPublic(isPublic)
                if (isPublic==='برای همه') {
                  setAllIds([])
                }
                // setTeameIdObjects((prev:teamIdsFace)=>({...prev,personIds:[responsibleId]}))
                // setHorzIds((prev:any)=>({...prev,definitionId:definitionLevelId}))
            // console.log(data)
             }}
             initialValues={editObjectiveinintialValues}
            onSubmit={(data) => {
              initialEditObjective(data)
            }}


        >
            {
                ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }: any) =>
                    <Form>
                        <Grid container  >
                            <Grid item xs={12} md={12}  >
                             <Box sx={{padding:'8px'} }>
                                <TextField
                                  size='small'
                                    label={'شرح هدف'}
                                    name='name'
                                    fullWidth
                                    value={values?.name || ''}
                                    onChange={({target}:any)=>{
                                      let{value}=target;
                                      setFieldValue('name',value)
                                       }}
                                />
                             </Box>
                            </Grid>
                                <Grid item xs={12} md={4}  >
                                      <Box sx={{padding:'16px'}}>
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






                            <Grid item xs={12} md={4}  >

                            
                            <Box sx={{padding:'16px'}}  >
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
                                       
                                        // setDefinitionLevel(keyName)
                                        let {target}=e
                                        let{value}=target;
                                        // setTeameIdObjects((prev:teamIdsFace)=>({...prev,teamId:value}))
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


                            <Grid item xs={12} md={4}  >
                            <Box sx={{padding:'8px'}}  >
                                <FormikControl
                                
                                    control='select'
                                    options={personsOptionds || []}
                                    label='مسئول هدف'
                                    name='responsibleId'
                                    fullWidth
                                    value ={values?.responsibleId || ''}
                                />
                                </Box>
                            </Grid>


                   <Grid item xs={12}  >
                   <AccordionLyt 
                      collapse={setShowAdvanceOptions}
                      title={' تنظیمات پیشرفته ( اختیاری)'}
                      expanded={showAdvanceOptions}  >
                     <Grid container  >
                        
                         <Grid item xs={12} md={6}  >
                           <FormikControl 
                           control={'radio'}
                           mainLabel={'قابلیت نمایش'}
                           value={values?.isPublic}
                           setFieldValue={setFieldValue}
                           propName={'isPublic'}
                           options={[{label:'برای همه',value:'برای همه'},{label:'برای اشخاص و تیم های خاص',value:'برای اشخاص و تیم های خاص'}]}
                             />
                            </Grid>


                            <Grid item xs={12} md={6} >


                              {
                                lIsPublic==='برای اشخاص و تیم های خاص' ?  <MultiSel 
                                data={allTeamAndPersonData||[]}
                                extractTag={setAllIds}
                                label={'برای اشخاص و تیم های خاص'}
                                />:<></>
                              }
                 

                       
  
                      </Grid>

                    


                            <Grid item xs={12} md={12}  >
                                <FormikControl 
                                setFieldValue={setFieldValue}
                                control={'radio'}
                                propName={'calculateProgressType'}
                                mainLabel={'نحوه محاسبه پیشرفت:'}
                                options={[{label:'بر اساس okr های همسو',value:'ForSpecialPeople'},{label:'بر اساس تحقق نتایج کلیدی',value:'BasedOnKR'}]}
                             />
                            </Grid>
                     </Grid>

                     <Grid container >
                       <Grid item xs={12} md={4}  >
                        <Box sx={{padding:'8px'}}>
                       <TextField
                                    // control='textField'
                                    // type='text'
                                      size='small'
                                    label='وزن'
                                    name='Sweight'
                                    fullWidth
                                    value={values?.Sweight|| ''}
                                    type={'number'}
                                    onChange={({target}:any)=>{
                                      let{value}=target;
                                      setFieldValue('Sweight',value)
                                       }}
                                />
                                </Box>
                            </Grid>

                              <Grid item xs={12} md={8}  >
                              <Box sx={{padding:'8px'}}>
                              <TextField
                                     size='small'
                                    type='text'
                                    label='دلیل اهمیت'
                                    name='answerRequest'
                                    fullWidth
                                    value={values?.answerRequest|| ''}
                                    onChange={({target}:any)=>{
                                      let{value}=target;
                                      setFieldValue('answerRequest',value)
                                       }}
                                />
                                {/* TheReasonImportant */}
                                </Box>
                            </Grid>


                               
                            <Grid item xs={12} md={12}  >
                            <Box sx={{padding:'8px'}}>
                                <TextField
                                  size='small'
                                    label='توضیحات'
                                    name='description'
                                    fullWidth
                                    value={values?.description}
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

        </Formik> :""
        }
        {
      showLtoastMessage && <DYToastMessage
      isSuccess={editObjError?.isSuccess}
      message={editObjError?.metaData.message}
      setShow={setShowLtoastMessage}
      show={showLtoastMessage}
      
      />
      
      
    }
    </Box>


    
            </>
  )
}

export default EditObjective