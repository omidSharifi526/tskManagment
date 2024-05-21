import React,{useEffect,useState,useMemo} from 'react';
import { v4 as uuid } from 'uuid';
import { Formik, Form } from 'formik';
import FormikControl from '../../../../../components/FormikControls/FormikControl';
import { AddEvalFace } from '../../../Interfaces/interfaces';
import DyButton from '../../../../../components/GlobalComponents/DyButton/DyButton';
import { currentStateOptions, nextStateOptions } from '../../../StataicData';
import { useAddCheckinMeeting } from '../../../Hooks/index';
import ListSelect from '../../../../../components/GlobalComponents/ListSelect/ListSelect';
import { useSelector } from 'react-redux';
import { intaddKrSchema,straddKrSchema } from '../../../StataicData';
import { useGetMeetingKeyResultValueById } from '../../../../Meeting/Hooks';
import { useGetKeyResultHistoryCheckinByKeyResultId } from '../../../Hooks/index';
import {Tooltip} from '@mui/material';
import {CircularProgress} from '@mui/material';
import { Grid,Box,Typography,Divider,Button} from '@mui/material';
import { ObjectiveSelectedFace,krSelectedFace } from '../../../Interfaces/interfaces';
import DyDataGrid from '../../../../../components/GlobalComponents/DyDataGrid/DyDataGrid';
import DyLinearProgress from '../../../../../components/GlobalComponents/DyLinearProgress/DyLinearProgress';
import { addKrValues } from '../../../../OKRManagment/StaticData';
import Assessor from '../../Assessor/Assessor';
import Stack from '@mui/material/Stack';
import {ListItem,List} from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import IconButton from '@mui/material/IconButton';

import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import DyButtonPopper from '../../../../../components/GlobalComponents/DyButtonPopper/DyButtonPopper';
// import sad from '../../../../../Asset/Svgs/Emojys/sad.png';
// import meh from '../../../../../Asset/Svgs/Emojys/meh.png';
// import smile from '../../../../../Asset/Svgs/Emojys/smil.png'










interface CreateKRevalFace {
    cancelo : (prev:boolean) => void,
    // initialAfterAddKr:(val:boolean)=>void,
    objectiveManiInfo:ObjectiveSelectedFace|null,
    krMainInfo:krSelectedFace|null,
    pointingSystem:string|null
    kresultId:string|null,
    objectiveId:string,
    afterAddKr:() => void


}

interface progValueFace{
  assessmentRate:null|number,
  score:null|number
}



export const CreateKReval = ({cancelo,objectiveManiInfo,krMainInfo,pointingSystem,objectiveId, kresultId,afterAddKr,onsucces}:any) => {
  const meetSelectedDate = useSelector((state: any) => state.meetings.meetSelectedDate);
    const meetingId: any = useSelector((state: any) => state.meetings.meetingId);
    const teamId: any = useSelector((state: any) => state.meetings.teamInfo?.id);
    const periodId: any = useSelector((state: any) => state.meetings.priodId);
    const profileTenantId: any = useSelector((state: any) => state.meetings.profileTenantId);
    const[initialValuesForm,setInitialValuesForm]=useState<any>({description:''});
    const[progressFormValues,setProgressFormValues]=useState<progValueFace>({assessmentRate:0,score:0});
    const[keyResultMeetingHistoryDtos,setKeyResultMeetingHistoryDtos]=useState<any[]>([]);
    const[assessmentHistory,setAssessmentHistory]=useState<any[]>([]);
    const[hisCartActiveId,setHisCartActiveId]=useState<string>('')
    const {data:initialNewValue,isLoading:iniValLoading}=useGetMeetingKeyResultValueById({meetingId:meetingId,krId:kresultId});
    const[formIds,setFormIds]=useState<any>({meetingId:meetingId,periodId:periodId,keyResultId:null});
    const[nextOptCurrIndex,setNextOptCurrIndex]=useState<number>(0);
    const[currOptIndex,setCurrOptIndex]=useState<number>(0)

    const addCheckinSuccess = () => {
        // afterAddKr()
         cancelo(false)
         onsucces(true)
    
      }

    const {data:historyData,isLoading:historyDataLoading}:any=useGetKeyResultHistoryCheckinByKeyResultId(formIds)
    const { mutate: addCheck, isSuccess,isLoading } = useAddCheckinMeeting(addCheckinSuccess);




    const evaluationData: AddEvalFace = {
      newValue: '',
      problems: '',
      nextState: '',
      meetingId: meetingId,
      teamId: teamId,
      periodId: periodId,
      tenantId: profileTenantId,
      keyResultId: kresultId,
      objectiveId: objectiveId,
      tensileScore: '',
      currentState: '',
      description: '',
      closedKeyResult: false
     
  
    }
    // {...evaluationData,newValue:initialNewValue,...initialValuesForm}
   const[selectedInitialValue,setSelectedInitialValue]=useState<any>(evaluationData)

    const [pointSystemsL,setPointSystemL]=useState<string>('')
  useEffect(() => {
    if(pointingSystem==='مرحله ای'){
      setPointSystemL('req')
    }
   
  }, [pointingSystem]);

  useEffect(() => {
    
  console.log(selectedInitialValue)
   
  }, [selectedInitialValue])
  




  let{name,id}:any|null=objectiveManiInfo;
  let{name:KrNAme,responsibleName,startDate,startValue,threeTenthsValue,sevenTenthsValue,oneValue}:any=krMainInfo;





  const initialSubmitForm: any = (data: any): any => {
    console.log(data)
    addCheck(data)
 
  }

  const initialCancel = (): void => {
    cancelo(false)
  }

  useEffect(() => {
    
  console.log(historyData)
  if (historyData) {
    let{assessmentRate,score,keyResultMeetingHistoryDtos,assessmentHistory}=historyData;
    let progData={assessmentRate:assessmentRate,score:score};
    setKeyResultMeetingHistoryDtos(keyResultMeetingHistoryDtos?.map((item:any)=>({id:uuid(),...item})));
    setAssessmentHistory(assessmentHistory?.map((item:any)=>({id:uuid(),...item})))
    setProgressFormValues(progData)
  }
  
  }, [historyData])

  useEffect(() => {
    let{id:krId,currentValue,problems,currentState,nextState,description,score}:any=krMainInfo;
    let initValues={
      newValue:currentValue,
      problems:problems,
      currentState:currentState,
      nextState:nextState,
      description:description,
      tensileScore:score

    }

    setFormIds((prev:any)=>({...prev,keyResultId:krId}));

    setSelectedInitialValue((prev:any)=>({...prev,...initValues}))
   
  }, [krMainInfo])
  
  
  
  
// keyResultMeetingHistoryDtos,setkeyResultMeetingHistoryDtos

const KRHColumns: any = useMemo(()=>
  [
    {
      field: "rowid",
      headerName: "ردیف",
      width: 35,
    
      sortable: false,
      align:'center',
      headerAlign:'center',
      renderCell: (params:any) => params.api.getAllRowIds().indexOf(params.id)+1
    },
    { field: 'meetingDate',
         headerName: 'تاریخ جلسه',
         sortable:false,
         headerAlign:'center',
         align:'center',
          width: 100,
          
          }
          ,
    
        { field: 'newValue',
        headerName: 'مقدار اعلام شده',
        align:'center',
        sortable:false,
        headerAlign:'center',
         width: 150,
         renderCell:({value}:any)=>{
          return <Box>
           {
            value.length>10? <Tooltip  sx={{fontSize:'1.5rem !important'}} title={value}>
            {value}
          </Tooltip>:
          <Typography  sx={{fontSize:'12px'}} >{value}</Typography>
           }
          </Box>
        }
        // problems: 
// "موانعی برای نصب وجود ندارد . فقط باید اطلاع رسانی کمپین گسترده تر برگزار گردد"revenue
         
         }
         ,
         { field: 'currentState',
       headerName: 'وضعیت ',
       align:'center',
       sortable:false,
       headerAlign:'center',
        minWidth: 120 ,
        renderCell:({value}:any)=>{
          return<Box m={3} 
          
          borderRadius={2} 
          width={'100%'} 
          display={'flex'} 
          justifyContent={'center'} 
          alignItems={'center'} 
          height={'75%'}   
          bgcolor={value==='در مسیر مناسب'?'#D5F7D4':value==='نیازمند توجه'?'#FFEBEF':'#F0F1F2'}  >
 
            <Typography fontSize={'12px'} px={8} color={value==='نیازمند توجه'?'#F95700':value==='خارج از مسیر مناسب'?'#CC0030':'black'} >
            {value}
            </Typography>
          </Box>
              }
      
      }
          ,
      { field: 'meetingNumber',
       align:'center',
       headerName: 'شماره جلسه',
       headerAlign:'center',
       sortable:false,
       wrap:'wrap',
        minWidth: 130,
        fontsize:'12px !important',
  }
  ,

  {
    field: 'problems',
    headerName: 'موانع',
    align: 'center',
    headerAlign: 'center',
    sortable: false,
    minWidth: 110,
    // fontsize:'12px',

    renderCell:({value}:any)=>{
      return <Box>
       {
        value.length>10? <Tooltip  sx={{fontSize:'1.5rem !important'}} title={value}>
        {value}
      </Tooltip>:
      <Typography  sx={{fontSize:'12px'}} >{value}</Typography>
       }
      </Box>
    }
  },
  { field: 'score',
  headerName: 'امتیاز',
  align:'center',
  sortable:false,
  headerAlign:'center',
  width: 80 ,
  renderCell:(par:any)=>{
   // console.log(par?.row?.score)
   let score:string=par?.row?.score;
   // console.log(score);
   if ( typeof score==='string' &&  score.includes('%')) {
     let pureNum=score.slice(0,score.length-1);
     let intVal=+pureNum;
     let color='';
    let fColor=''
    switch (true) {
     case intVal>=70:
       color='#D5F7D4';
       fColor='#125610'
       break;
       case intVal<70 &&  intVal>30:
       color='#FFF8D0';
       fColor='#6B6440'
       break
     default:
       color='#FFEEE5'
       fColor='#993600'
       break;
    }
     return <Box m={3} 
     borderRadius={2} 
     width={'100%'} 
     display={'flex'} 
     justifyContent={'center'} 
     alignItems={'center'} 
     height={'65%'}   
     bgcolor={color}
     my={1}
      >

       <Typography px={8} fontSize={'0.8rem'} color={fColor} fontWeight={400} >
       {intVal}
       </Typography>
     </Box>
     
   }

   else{
     return<Box>
       <Typography>{score}</Typography>
     </Box>
   }


   

   
  }

 }
 ,
  // revenue

    
        { field: 'startValue',
        headerName: 'مقدار شروع',
        sortable:false,
        headerAlign:'center',
        align:'center',
         width: 110 ,
         renderCell:({value}:any)=>{
          return <Box>
           {
            value.length>10? <Tooltip  sx={{fontSize:'1.5rem !important'}} title={value}>
            {value}
          </Tooltip>:
          <Typography  sx={{fontSize:'12px'}} >{value}</Typography>
           }
          </Box>
        }
        },
    
         

       
        ,
        {
          field: 'revenue',
          headerName: 'عملکرد',
          align: 'center',
          headerAlign: 'center',
          sortable: false,
          minWidth: 110,
          renderCell: ({ value }: any) => {
            // console.log(value)
          if (value) {
            return <Box>
            {
              value.length > 40 ? <Tooltip sx={{ fontSize: '1.5rem !important' }} title={value}>
                {value}
              </Tooltip> :
                <Typography sx={{ fontSize: '12px' }} >{value}</Typography>
            }
          </Box>
          }
          }
        },
      
    ],[]);

    const initialSelectHisCart=(item:any)=>{
    let{id,value,problems,currentState,description,...rest}=item;
    console.log(value)
    console.log(id,item)
    setHisCartActiveId(id);
    let initSelVal={
      newValue:value,
      problems:problems===null?'':problems,
      currentState:currentState,
      description:description,
      tensileScore:''
    }
    // console.log(rest)
    // setSelectedInitialValue({...initSelVal,...rest})
    setSelectedInitialValue((prev:any)=>({...prev,...initSelVal}))
    }



    if (historyDataLoading) {
       return <Grid container  >
      <Box width={'100%'} py={5} textAlign={'center'} >
       <CircularProgress color='primary'   />
      </Box>
     </Grid>
      
    }





  return (
    <Grid container sx={{maxHeight:'90% !important '}}   >
    <Grid item xs={12}  >
    <Box width={'100%'} 
    minHeight={'120px'} 
    borderRadius={2} 
    // boxShadow={3}  
    sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center'}}
    >
    <Box sx={{width:'40%',minHeight:'100px',display:'flex',flexDirection:'column',p:1,rowGap:1}}>
    <Box p={0.15} display={'flex'} columnGap={1} justifyContent={'start'} ><Typography variant='body2' fontWeight={700}  >هدف:</Typography> <Typography variant='caption'  >{name}</Typography>  </Box>
    <Divider />
    <Box p={0.15} display={'flex'} columnGap={1} justifyContent={'start'} ><Typography variant='body2' fontWeight={700}  >نتیجه کلیدی:</Typography> <Typography variant='caption'>{KrNAme}</Typography></Box>
    <Divider />
    <Box p={0.15} display={'flex'} columnGap={1} justifyContent={'start'} ><Typography variant='body2' fontWeight={700}  >مسئول:</Typography> <Typography variant='caption'>{responsibleName}</Typography>  </Box>
    <Divider />
    <Box p={0.15} display={'flex'} columnGap={1} justifyContent={'start'} ><Typography variant='body2' fontWeight={700}  >تاریخ جلسه:</Typography> <Typography variant='caption'>{meetSelectedDate}</Typography>  </Box>
 
    </Box>
    <Box  sx={{width:'35%',minHeight:'100px',display:'flex',flexDirection:'column',p:1,rowGap:1}}>
   
    <Box p={0.15} display={'flex'} columnGap={1} justifyContent={'start'} ><Typography variant='body2' fontWeight={700}  >مقدار شروع:</Typography> <Typography variant='caption'  >{startValue}</Typography>  </Box>
    <Divider />

    
    <Box p={0.15} display={'flex'} columnGap={1} justifyContent={'start'} ><Typography variant='body2' fontWeight={700}  >سطح 30%:</Typography> <Typography variant='caption'  >{threeTenthsValue}</Typography>  </Box>
    <Divider />

    <Box p={0.15} display={'flex'} columnGap={1} justifyContent={'start'} ><Typography variant='body2' fontWeight={700}  > سطح 70%:</Typography> <Typography variant='caption'  >{sevenTenthsValue}</Typography>  </Box>
    <Divider />

    <Box p={0.15} display={'flex'} columnGap={1} justifyContent={'start'} ><Typography variant='body2' fontWeight={700}  >  سطح 100%:</Typography> <Typography variant='caption'  >{oneValue}</Typography>  </Box>
  
    </Box>

    <Box sx={{width:'15%',minHeight:'100px'}}>
    <DyLinearProgress 
    value={progressFormValues?.score}
    // progressFormValues?.score
    mainLabel={'آخرین درصد تحقق نتیجه'}
     />
      <DyLinearProgress 
    value={progressFormValues?.assessmentRate}
    mainLabel={'میزان ارزیابی'}
     />
    </Box>
    </Box>
    </Grid>




    <Grid  item xs={12} >
    {
      historyDataLoading && <Grid container  >
       <Box width={'100%'} py={5} textAlign={'center'} >
        <CircularProgress color='primary'   />
       </Box>
      </Grid>
    }
    {
       historyData && <Grid  container >
       <Grid item xs={12} sx={{bgcolor:'#F9F9F9'}}  >
       <Formik
              validationSchema={pointSystemsL==='req'?straddKrSchema:intaddKrSchema}
               enableReinitialize
               initialValues={selectedInitialValue || evaluationData  }
               onSubmit={(data: AddEvalFace) => {
                // console.log(data)
                 initialSubmitForm(data)
   
               }}
   
   
             >
               {
                 ({ values, setFieldValue, dirty, isValid, touched, errors, setFieldTouched }:any) =>
                   <Form>
                     {
                       true && 
   
                       <Grid container columnSpacing={1} sx={{bgcolor:'#F9F9F9',mx:'auto',borderRadius:3}}   >
   
                       {/* <Grid item xs={4}   >
                       </Grid> */}
                      { !iniValLoading && <Grid item xs={8}  >
                         <FormikControl
                           control='textField'
                           type='text'
                           label='مقدار جدید'
                           name='newValue'
                          //  fullWidth
                           value={values?.newValue || ''}
                         />
                       </Grid>
                       
                       }
                       
                         {
                           pointSystemsL==='req'?
                           <Grid item xs={2}  > 
                           <FormikControl
                           fullWidth
                           control='textField'
                           type='text'
                           label='امتیاز'
                           name='tensileScore'
                           
                           // helperText={'موانعی که با آن مواجه هستید؟'}
                         />
                       </Grid>:''
                         }
   
                       <Grid item xs={10}   >
                         <FormikControl
                           control='textField'
                           type='text'
                           label='موانعی که با آن مواجه هستید؟'
                           name='problems'
                           fullWidth
                           value={values?.problems || ''}
                          
                         />
   
                         
                       </Grid>

                       
                       <Grid item xs={12} md={2} >
                       <Box width={'100%'} textAlign={'center'} py={1} >
                       <Assessor 
                        setSelectedInitialValue={setSelectedInitialValue}
                        optionList={assessmentHistory} 
                        
                        />
                       </Box>
                   
                       </Grid>
   
                       <Grid item xs={10} sx={{mt:1}}   >
                         {/* <FormikControl
                           control='select'
                           type='select'
                           label='وضعیت آتی این نتیجه کلیدی را چگونه پیش بینی می کنید؟'
                           withIcon={true}
                           options={nextStateOptions}
                           name='nextState'
                           fullWidth
                           value={values?.nextState || ''}
                         
                         /> */}
                         {/* <ListSelect 
                         options={nextStateOptions}
                         withIcon={true}
                         label={'وضعیت آتی این نتیجه کلیدی را چگونه پیش بینی می کنید؟'}
                         value={values?.nextState || ''}
                         setValue={setFieldValue}
                         name='nextState'
                         /> */}
                            <Box width={'100%'}  textAlign={'start'} px={1}   >
                            <Typography variant='caption'  >وضعیت آتی این نتیجه کلیدی را چگونه پیش بینی می کنید؟</Typography>
                          </Box>

                          <Box columnGap={6} py={1} >
                          {/* <ButtonGroup sx={{mt:1}}  variant="contained" aria-label="Basic button group">
                      {
                        nextStateOptions && nextStateOptions.map((item:any,i:number)=>{
                          let{key,value}=item
                         return <Box>
                          <Button 
                          color={i===nextOptCurrIndex?'info':'inherit'}
                          onClick={()=>{
                            setNextOptCurrIndex(i)
                            setFieldValue('nextState',value)
                          }}
                          sx={{whiteSpace:'nowrap'}} 
                          fullWidth endIcon={i===0?<TagFacesIcon/>:
                                             i===1?<SentimentDissatisfiedIcon/>:
                                             i===2?<SentimentVeryDissatisfiedIcon/>:''
                                             } >
                            <Typography py={1} >{key}</Typography>
                            </Button>
                         </Box>
                        })
                      }
                     </ButtonGroup> */}
                     {
                          nextStateOptions && nextStateOptions.map((item:any,i:number)=>{
                            let{key,value}=item
                            return <Tooltip  arrow title={key}>
                                  <IconButton 
                                  onClick={()=>{
                                    setNextOptCurrIndex(i)
                                    setFieldValue('nextState',value)
                                  }}
                                  sx={{p:1,mx:1,
                                    bgcolor:i===nextOptCurrIndex?'#DBDBDB':'inherit',
                                  boxShadow:i===nextOptCurrIndex?4:0}} 
                                  
                                  size='large'   >
                                            {i===0?<TagFacesIcon color={i===nextOptCurrIndex?'info':'inherit'} fontSize={'large'}  />:
                                             i===1?<SentimentDissatisfiedIcon  color={i===nextOptCurrIndex?'info':'inherit'} fontSize={'large'} />:
                                             i===2?<SentimentVeryDissatisfiedIcon  color={i===nextOptCurrIndex?'info':'inherit'} fontSize={'large'} />:''
                                             }
                                  </IconButton>
                                </Tooltip>
                          })
                     }
                          </Box>
                 
                       </Grid> 
   
   
                       <Grid item xs={12} md={12} sx={{mt:1}} >

                      {/* <Box display={'flex'}  > 
                      {
                        currentStateOptions && currentStateOptions.map((item:any,i:number)=>{
                     return  <DyButtonPopper item={item}   />
                   
                        }) 
                      }
                      </Box> */}

                    {/* <DyButtonPopper   /> */}
                     




                         {/* <FormikControl
                           control='select'
                           type='select'
                           label='وضعیت فعلی  نتیجه کلیدی را چگونه ارزیابی می کنید؟'
                         
                           options={currentStateOptions}
                           name='currentState'
                           fullWidth
                           value={values?.currentState || ''}
                   
                         /> */}
                         {/* <ListSelect 
                         options={currentStateOptions}
                         label={'وضعیت فعلی  نتیجه کلیدی را چگونه ارزیابی می کنید؟'}
                         name='currentState'
                         setValue={setFieldValue}
                         value={values?.currentState || ''}
                         /> */}
                    <Box width={'100%'} px={1}  textAlign={'start'}   >
                      <Typography variant='caption'  >وضعیت فعلی  نتیجه کلیدی را چگونه ارزیابی می کنید؟</Typography>
                    </Box>
                      <Box px={1}  >
                      <ButtonGroup sx={{mt:1}} variant="contained" aria-label="Basic button group">
                          {
                            currentStateOptions && currentStateOptions.map((item:any,i:number)=>{
                              let{key,value}=item
                            return <Box>
                              <Button 
                              // variant={i===currOptIndex?'contained':'text'} 
                              color={i===currOptIndex?'info':'inherit'}
                              onClick={()=>{
                                // currOptIndex,setCurrOptIndex
                                setCurrOptIndex(i)
                                setFieldValue('currentState',value)
                              }}
                              sx={{whiteSpace:'nowrap'}} 
                              fullWidth 
                                              
                               >
                                <Typography py={1} >{key}</Typography>
                                </Button>
                            </Box>
                            })
                          }
                        </ButtonGroup>
                      </Box>


                       </Grid>
   
                       <Grid item xs={12} md={10} mt={1} >
                         <FormikControl
                           control='textField'
                           type='text'
                           label='توضیحات'
                           name='description'
                           fullWidth
                           value={values?.description || ''}
                           placeholder={'توضیحات (اختیاری)  0/300'}
                         />
                       </Grid>


                       <Grid item xs={12}   >
                       
                          <DyDataGrid
                          columns={KRHColumns || []}
                          data={keyResultMeetingHistoryDtos||[]}
                          setRowSelectedData={()=>{}}
                          hideFooter={true}

                          setSelectionModel={()=>{}}
                          selectionModel={''}
                          additionalToolbar={false}
                          drName={'hisTable'}
                          initialOnRowClick={()=>{}}
                          />
                        
                      </Grid>
   
   
   
                   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
                       <Grid item xs={12}  mt={3} >
                         <Box   columnGap={2} display={'flex'} flexDirection={'row-reverse'}  >
                           <Box >
                             <DyButton
                               caption={'ذخیره'}
                               color={'#00387C'}
                               onClick={() => { }}
                              //  disbled={!dirty || !isValid}
                               // !isValid || !dirty 
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
                               onClick={initialCancel}
                             />
                           </Box>
   
                         </Box>
                       </Grid>
   
   
                     </Grid>
                     }
   
   
             
                   </Form>
               }
   
             </Formik>
       </Grid>
    




     
        </Grid>
    }
    </Grid>

   


    </Grid>
  )
}
