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
import DYToastMessage from '../../../../components/GlobalComponents/DyToastMessage/DYToastMessage';
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

    const tenantId:string=useSelector((state:any)=>state.meetings.profileTenantId);
    const[showAdvanceOptions,setShowAdvanceOptions]=useState<boolean>(false)

    const{data:teamsOptions,isLoading:teamOPloading}=useGetAllObjectiveDefinitionLevelByTenantId(tenantId);
    const{data:personsOptionds}=useGetAllActivePersonByTenantId(tenantId);
    const{data:submitOptions}=useGetAllObjectiveOKRStateByTenantId(tenantId);
   
    const periodId=useSelector((state:any)=>state.meetings.priodId);
const[periodOptions,setPeriodOptions]=useState<any>([]);
const[horzinalAliIds,setHorzinalAliIds]=useState<any[]>([]);
const[allIds,setAllIds]=useState<any>([]);
const[okrStateId,setOkrStateId]=useState<string>('');
const[lIsPublic,setlIsPublic]=useState<any>(false);
const[showLtoastMessage,setShowLtoastMessage]=useState<any>(null);
const[addObjError,setAddObjError]=useState<any>(null)
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
      const{mutate:addObjective,data:addObjectiveData,isSuccess,isLoading}=useAddObjective()

      useEffect(() => {
  if (addObjectiveData) {

      if (addObjectiveData?.data.isSuccess) {
            // setSuccessAddObjective(isSuccess)
            setShowToastMessage(true)
            setAddObjectiveStatus(addObjectiveData?.data)
            onSuccess()
  
      } else {
          setShowLtoastMessage(true);
          setAddObjError(addObjectiveData?.data)
      }
    

  }
  


      }, [addObjectiveData]);

      const addObjectiveInitialValues:addObjectiveFace={
        name:'',
        periodId:periodId,
        calculateProgressType:'',
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


     
      
  

  const initialAddObjective=(data:any)=>{
    let{isPublic}=data;
    // 
    let resIsPublic={isPublic:isPublic==='برای همه'?true:false};
    let total={...data,...resIsPublic,tenantId:tenantId,keyResultParentIds:[...horzinalAliIds],allIds:allIds.map(({value}:any)=>value)};
    // console.log(total)
    total.okRStateId=okrStateId;
    // console.log(total)
    addObjective(total)

  }

  useEffect(() => {
  let transformed=periodsData?.map((item:any)=>{
    let{name:key,id:value}=item;
  return {key,value}
  })
  setPeriodOptions(transformed)
  }, [])


  
  

 

  if (isLoading) {
    return <Box width={'100%'} py={6} textAlign={'center'}   >
        <CircularProgress/>
    </Box>
  }
  


  return (
    <>
    <Box width={'100%'} maxHeight={'50em'}  >
        <Formik 
        validationSchema={addObjectiveSchema}
             validate={(data)=>{
                let{definitionLevelId,responsibleId,isPublic}:any=data;
                // console.log(isPublic)
                setlIsPublic(isPublic)
                if (isPublic==='برای همه') {
                  setAllIds([])
                }
                // setTeameIdObjects((prev:teamIdsFace)=>({...prev,personIds:[responsibleId]}))
                // setHorzIds((prev:any)=>({...prev,definitionId:definitionLevelId}))
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


                              {
                                lIsPublic==='برای اشخاص خاص' ?  <MultiSel 
                                data={allTeamAndPersonData||[]}
                                extractTag={setAllIds}
                                label={'یا اشخاص انتخاب تیم ها'}
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
                                <FormikControl
                                    control='textField'
                                    // type='text'
                                    label='وزن'
                                    name='weight'
                                    fullWidth
                                    values={values?.weight||0}
                                    type={'number'}
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


        {
      showLtoastMessage && <DYToastMessage
      isSuccess={addObjError?.isSuccess}
      message={addObjError?.metaData.message}
      setShow={setShowLtoastMessage}
      show={showLtoastMessage}
      
      />
      
      
    }
    </Box>


    
            </>
  )
}

export default CreateObjective