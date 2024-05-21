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
import {TextField, Tooltip} from '@mui/material';
import {CircularProgress} from '@mui/material';
import { Grid,Box,Typography,Divider,Button} from '@mui/material';
import { ObjectiveSelectedFace,krSelectedFace } from '../../../Interfaces/interfaces';
import DyDataGrid from '../../../../../components/GlobalComponents/DyDataGrid/DyDataGrid';
import DyLinearProgress from '../../../../../components/GlobalComponents/DyLinearProgress/DyLinearProgress';
import Assessor from '../../Assessor/Assessor';
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';
import sad from '../../../../../Asset/Svgs/Emojys/sad 1.svg';
import meh from '../../../../../Asset/Svgs/Emojys/neutral 2.svg';
import smile from '../../../../../Asset/Svgs/Emojys/smil.png';
// import { useSelector } from 'react-redux';
// import {ReactComponent as Smile} from '../../../../../Asset/Svgs/Emojys/smile 1.svg';











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



export const CreateKReval = ({cancelo,objectiveManiInfo,krMainInfo,objectiveId, kresultId,afterAddKr,onsucces}:any) => {
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
    // const {data:initialNewValue,isLoading:iniValLoading}=useGetMeetingKeyResultValueById({meetingId:meetingId,krId:kresultId});
    const[formIds,setFormIds]=useState<any>({meetingId:meetingId,periodId:periodId,keyResultId:null});
    const[nextOptCurrIndex,setNextOptCurrIndex]=useState<number>(0);
    const[currOptIndex,setCurrOptIndex]=useState<number>(0);
    const[tensileScore,setTensileScore]=useState<string|null>('');
    const addKrStatusData:any=useSelector((state:any)=>state.meetings.addKrStatusData);
    const[addKrStatus,setAddKrStatus]=useState<any>(null);

    const addCheckinSuccess = () => {
        // afterAddKr()
       
    //     let{isSuccess,metaData}=addKrStatusData;
    // let addSt={
    //   isSuccess:isSuccess,
    //   message:metaData?.message
    // }
    //     if (isSuccess) {
    //         // cancelo(false)
    //         //  onsucces(true)
           
    //     }
    //     else{
    //       setAddKrStatus(addSt)
    //     }
    // afterAddKr()
    cancelo()
    onsucces(true)
        
      }

    const {data:historyData,isLoading:historyDataLoading}:any=useGetKeyResultHistoryCheckinByKeyResultId(formIds)
    const { mutate: addCheck, isSuccess,isLoading:AddChekinLoading,data:addCheckingData } = useAddCheckinMeeting(addCheckinSuccess);
    



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
      // tensileScore: '',
      currentState: '',
      description: '',
      closedKeyResult: false
     
  
    }
    // {...evaluationData,newValue:initialNewValue,...initialValuesForm}
   const[selectedInitialValue,setSelectedInitialValue]=useState<any>(evaluationData)

    const [pointSystemsL,setPointSystemL]=useState<string>('');




  let{name,id}:any|null=objectiveManiInfo;
  let{name:KrNAme,responsibleName,startDate,startValue,threeTenthsValue,sevenTenthsValue,oneValue}:any=krMainInfo;





  const initialSubmitForm: any = (data: any): any => {
    let totalData={...data,tensileScore:String(tensileScore)}
    console.log(totalData)

    addCheck(totalData)
 
  }

  const initialCancel = (): void => {
    cancelo(false)
  }

  useEffect(() => {
    
  // console.log(historyData)
  if (historyData) {
    let{assessmentRate,score,keyResultMeetingHistoryDtos,assessmentHistory}=historyData;
    let progData={assessmentRate:assessmentRate,score:score};
    setKeyResultMeetingHistoryDtos(keyResultMeetingHistoryDtos?.map((item:any)=>({id:uuid(),...item})));
    setAssessmentHistory(assessmentHistory?.map((item:any)=>({id:uuid(),...item})))
    setProgressFormValues(progData)
    
   
  }
  
  }, [historyData])

  useEffect(() => {
    // console.log(krMainInfo)
    let{id:krId,currentValue,problems,currentState,nextState,description,okR_KeyResultType,score}:any=krMainInfo;
    setPointSystemL(okR_KeyResultType);

    if (okR_KeyResultType==='مرحله ای') {
      let pureVal=score?.replace('%','');
     
      setTensileScore(pureVal)
    }


    
    
    let initValues={
      newValue:currentValue,
      problems:problems,
      currentState:currentState,
      nextState:nextState,
      description:description,
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





    if (historyDataLoading) {
       return <Grid container  >
      <Box width={'100%'} py={5} textAlign={'center'} >
       <CircularProgress color='primary'   />
      </Box>
     </Grid>
      
    }





  return (
    <Grid container  >
    <Grid item xs={12}  >
    <Box width={'100%'} 
    minHeight={'110px'} 
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
       <Grid item xs={12} mx={'auto'} sx={{bgcolor:'#F9F9F9'}}  >
       <Formik
              validationSchema={pointSystemsL==="مرحله ای"?straddKrSchema:intaddKrSchema}
               enableReinitialize
               initialValues={selectedInitialValue || evaluationData  }
               
               onSubmit={(data: AddEvalFace) => {
        
                 initialSubmitForm(data)
   
               }}
               validate={(data)=>{
                 console.log(data)
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
                      <Grid item xs={8}  >
                         <FormikControl
                           control='textField'
                          //  type='text'
                           label='مقدار جدید'
                           name='newValue'
                          //  fullWidth
                           value={values?.newValue || ''}
                          //  description={'hi'}
                          //  helperText='kjkj'
                          //  errors={errors}
                          //  type={pointSystemsL==="مرحله ای"?'text':'number'}
                         />
                       </Grid>
                       
                       
                       
                         {
                           pointSystemsL==='مرحله ای'?
                           <Grid item xs={2}  > 
                           {/* <FormikControl
                           fullWidth
                           control='textField'
                           type='text'
                           label='امتیاز'
                           name='tensileScore'
                           value={values?.tensileScore}
                           
                         
                         /> */}
                       <Box  sx={{padding:'8px'}} >
                    
                        <TextField 
                         label='امتیاز' 
                         size='small'
                         value={tensileScore || ''}
                         error={tensileScore===''}
                        //  type={pointSystemsL==="مرحله ای"?'text':'number'}
                          fullWidth
                          onChange={({target}:any)=>{
                            let{value}=target;
                            setTensileScore(value)
                         
                          }}
                           />
                    
                       </Box>
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
   
                       <Grid item xs={8} sx={{mt:1}}   >
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
                            return <Tooltip key={i} arrow title={key}>
                                  <IconButton 
                                  onClick={()=>{
                                    setNextOptCurrIndex(i)
                                    setFieldValue('nextState',value)
                                  }}
                                  sx={{p:1,mx:1,
                                  bgcolor:value===values?.nextState?'#E5F1FF':'inherit',
                                  boxShadow:value===values?.nextState?3:1}} 
                                  
                                  size='large'   >
                                            {i===0?<img src={smile} style={{margin:'1px 3px'}} width={'25px'} />:
                                             i===1?<img src={meh} style={{margin:'1px 3px'}} width={'25px'}/>:
                                             i===2?<img src={sad} style={{margin:'1px 3px'}} width={'25px'} />:''
                                             }
                                  </IconButton>
                                </Tooltip>
                          })
                     }
                          </Box>
                 
                       </Grid> 

                       <Grid item xs={4}  >
                       <Box  py={5} textAlign={'center'}  >
                        {
                          addKrStatus && <Typography mt={2} fontWeight={900} color={'red'}>*{addKrStatus?.message}</Typography>
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
                    <Box width={'99%'} mx={'auto'}   textAlign={'start'}   >
                      <Typography variant='caption'  >وضعیت فعلی  نتیجه کلیدی را چگونه ارزیابی می کنید؟</Typography>
                    </Box>
                      <Box  >
                      <ButtonGroup sx={{mt:1}} variant="contained" aria-label="Basic button group">
                          {
                            currentStateOptions && currentStateOptions.map((item:any,i:number)=>{
                              let{key,value}=item
                            return <Box>
                              <Button 
                              // variant={i===currOptIndex?'contained':'text'} 
                              
                              onClick={()=>{
                                // currOptIndex,setCurrOptIndex
                                setCurrOptIndex(i)
                                setFieldValue('currentState',value)
                              }}
                              sx={{whiteSpace:'nowrap',bgcolor:value===values?.currentState?'#E5F1FF':'inherit'}} 
                              fullWidth 
                                              
                               >
                                <Typography variant='caption' color={'black'} py={1} >{key}</Typography>
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
                               disbled={!dirty || !isValid || AddChekinLoading || (pointSystemsL==="مرحله ای" && tensileScore==='' )}
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
