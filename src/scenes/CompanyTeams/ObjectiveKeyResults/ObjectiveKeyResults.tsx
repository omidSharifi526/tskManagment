import React,{useState,useEffect,useMemo} from 'react';
import{Grid,Box,Typography, IconButton} from '@mui/material';
import ModalLyt from '../../../components/Layouts/ModalLyt/ModalLyt';

// import { v4 as uuidv4 } from 'uuid';
import DyDataGrid from '../../../components/GlobalComponents/DyDataGrid/DyDataGrid';
import { useSelector } from 'react-redux';
import {useGetAllKeyResultByObjectiveId} from '../../Meeting/Hooks/index';
import { DataGrid, GridRowsProp, GridColDef,faIR,GridRenderCellParams  } from '@mui/x-data-grid';
import {EmptyDataIcon} from '../StataicData/index';
import CircularProgress from '@mui/material/CircularProgress';
import {ReactComponent as SmileSt} from '../../../Asset/Svgs/Emojys/smile 1.svg';
import {ReactComponent as NeutralSt} from '../../../Asset/Svgs/Emojys/neutral 2.svg';
import {ReactComponent as SadSt} from '../../../Asset/Svgs/Emojys/sad 1.svg';
import {ReactComponent as InfoIcon} from '../StataicData/Icons/InfoIcon.svg';

const ObjectiveKeyResults:React.FC=()=> {
  // const keyResults:any=useSelector((state:any)=>state.meetings.teamInfo);
  const teamInfo:any=useSelector((state:any)=>state.meetings.teamInfo);
  const objectivies=useSelector((state:any)=>state.meetings.objectivie);
  const objUpdated=useSelector((state:any)=>state.meetings.objUpdated);

    const[objectivee,setObjectivee]=useState<any>(objectivies?.length>4?'fb7cc4ea-7162-4916-9aa8-834b14308e10':null);
    // const {data:keyRData,isLoading:KeyRDataLoading}=useGetAllKeyResultByObjectiveId(objectiveId);
    const[keyR,setKeyR]=useState<any>([]);
    const[showModal,setShowModal]=useState(false)

    
  const [getCustomerBody, setGetCustomerBody] = useState<any>({
    pageSize: 10,
    page: 1,
    searchTerm: "",
  });
  useEffect(() => {
    
  setKeyR([])
  setObjectivee({})
  
  }, [objUpdated])
  

  
  const [counter, setCounter] = useState(1); // Initialize the counter for row index
     

// const CylinderColumn = useMemo(()=>
//       [
//         {
//           field:'index',
//           minWidth:100,
//           flex:1,
//           align:'center',
//           headerName:'',
//           sortable:false,
//           menubar:false,
//           renderCell: (params)=>{
        
//             return (
//             // radioChecked[0] === params.id
//               <Radio checked={machineInfo.cylinderInfoId==params.id} value={params.id}  />
//             )
//           },
          
//         }
//         ,
        
//         {  
//             field:'aroundCylinder',
//             minWidth:100,
//             flex:1,
//             align:'center',
//             headerName:'پیرامون سیلندر',
//             sortable:false,
//             menubar:false,
//             editable:true,
//         }
//         ,
//         {  
//             field:'numberOfCylinders',
//             minWidth:100,
//             flex:1,
//             align:'center',
//             headerName:'تعداد سیلندر',
//             sortable:false,
//             menubar:false,
//             editable:true
//         }
//         ,
//         {
//             field:'gearStep',
//             minWidth:100,
//             flex:1,
//             align:'center',
//             headerName:'گام دنده',
//             sortable:false,
//             menubar:false,
//             editable:true
           
            
//         }
       
        
//         ,
//         {  
//             field:'reactionary',
//             minWidth:100,
//             flex:1,
//             align:'center',
//             headerName:'ارتجاعی',
//             sortable:false,
//             menubar:false,
//             editable:true
//         }
        
       
  
           
    
        
//       ],[])
  
const initGetKRinfo=()=>{
  setShowModal(true)
  console.log('getReport')
}



    const objectiveColumns: any = useMemo(()=>
    [
      {
        field: "rowid",
        headerName: "ردیف",
        width: 75,
      
        sortable: false,
        align:'center',
        headerAlign:'center',
        renderCell: (params:any) => params.api.getAllRowIds().indexOf(params.id)+1
      },
        { field: 'name',
         align:'left',
         headerName: 'نام هدف',
         headerAlign:'center',
         sortable:false,
         wrap:'wrap',
        //  over
          width: 290
          ,
        //   renderCell:(params:any)=>{
        //    return  <div style={{ whiteSpace: 'normal', wordWrap: 'break-word', maxWidth: '100%',margin:'-10px 1px' }}>
        //    {params.value}
        //  </div>
        //   }
        
        },
      
        { field: 'responsibleName',
         headerName: 'مسئول هدف',
         align:'center',
         sortable:false,
         headerAlign:'center',
          width: 150 },
      
          { field: 'keyResultCount',
          headerName: 'تعداد  نتایج',
          align:'center',
          sortable:false,
          headerAlign:'center',
           width: 100 },
           
          { field: 'objectivesStateName',
          headerName: 'وضعیت هدف',
          sortable:false,
          headerAlign:'center',
          align:'center',
           width: 150 ,
          renderCell:({value}:any)=>{
      return<Box m={3} 
      
      borderRadius={2} 
      width={'100%'} 
      display={'flex'} 
      justifyContent={'center'} 
      alignItems={'center'} 
      height={'75%'}   
      bgcolor={value==='فعال'?'#D5F7D4':'#E5F1FF'}  >

        <Typography px={8}  >
        {value}
        </Typography>
      </Box>
          }
          
          },
      
           { field: 'weight',
           headerName: 'وزن',
           sortable:false,
           headerAlign:'center',
           align:'center',
            width: 80,
            //  renderCell: ({ value }:any):any => {
            //     return (
                  
            //          <Typography textAlign={'center'}  >
            //           16
            //          </Typography>
                     
            //     )
            //   } 
            
            },
            { field: 'evaluationPercentage',
            headerName: 'درصد ارزیابی',
            align:'center',
            sortable:false,
            headerAlign:'center',
             width:120 ,
          }
            ,
          { field: 'score',
           headerName: 'امتیاز',
           align:'center',
           sortable:false,
           headerAlign:'center',
            width: 75 ,
            renderCell:(par:any)=>{
              let value:number=par?.row?.score;
         
               console.log(par.row.score)
               let color='';
               let fColor=''
               switch (true) {
                case value>70:
                  color='#D5F7D4';
                  fColor='#125610'
                  break;
                  case value<70 &&  value>30:
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
                height={'75%'}   
                bgcolor={color}
                 >
          
                  <Typography px={8} color={fColor} fontWeight={400} >
                  {value}
                  </Typography>
                </Box>
              
             }
         
          }
      ],[]);

      const keyResultColumn: any = useMemo(()=>[
        {
          field: "rowid",
          headerName: "ردیف",
          width: 75,
        
          sortable: false,
          align:'center',
          headerAlign:'center',
          renderCell: (params:any) => params.api.getAllRowIds().indexOf(params.id)+1
        }
        ,
     
        { field: 'name',
         headerName: 'شرح نتیجه کلیدی',
         align:'left',
         headerAlign:'center',
         sortable:false,
          minWidth: 260 ,
        fontsize:'14px',
        },
      
        { field: 'okrStateName',
         headerName: 'وضعیت',
         align:'center',
         sortable:false,
         headerAlign:'center',
          width: 150,
          renderCell:({value}:any)=>{
            return<Box m={3} 
            
            borderRadius={2} 
            width={'100%'} 
            display={'flex'} 
            justifyContent={'center'} 
            alignItems={'center'} 
            height={'75%'}   
            bgcolor={value==='فعال'?'#D5F7D4':'#E5F1FF'}  >
      
              <Typography px={8}  >
              {value}
              </Typography>
            </Box>
                } 
              },
      
          { field: 'currentValue',
          headerName: 'مقدار جدید',
          align:'center',
          sortable:false,
          headerAlign:'center',
           width: 110 },
          //  
          { field:'currentState',
          headerName: 'وضعیت فعلی',
          sortable:false,
          headerAlign:'center',
          align:'center',
           width: 150 ,
           renderCell:({value}:any)=>{
            return<Box m={3} 
            
            borderRadius={2} 
            width={'100%'} 
            display={'flex'} 
            justifyContent={'center'} 
            alignItems={'center'} 
            height={'75%'}   
            bgcolor={value==='در مسیر مناسب'?'#D5F7D4':value==='نیازمند توجه'?'#FFEBEF':'#F0F1F2'}  >
   
              <Typography px={8} color={value==='نیازمند توجه'?'#F95700':value==='خارج از مسیر مناسب'?'#CC0030':'black'} >
              {value}
              </Typography>
            </Box>
                } 
          
          
          },
           ,
      
           { field: 'nextState',
           headerName: 'وضعیت آتی',
           align:'center',
           sortable:false,
           headerAlign:'center',
           width:100 ,
           renderCell:(par:any)=>{
            // انتظار داریم به نتیجه درست برسیم
            // با ریسک عدم دستیابی مواجه هستیم اما تمام تلاش خود را خواهیم کرد
            let value:string=par?.row?.nextState;
             switch (value) {
              case 'انتظار داریم به نتیجه درست برسیم':
                return <Box sx={{width:'100%',textAlign:'center'}}  ><SmileSt/></Box>
                break;

                case 'با ریسک عدم دستیابی مواجه هستیم اما تمام تلاش خود را خواهیم کرد':
                return <Box sx={{width:'100%',textAlign:'center'}}  ><NeutralSt/></Box>
                break;
             
              default:
                return <Box sx={{width:'100%',textAlign:'center'}}  ><SadSt/></Box>
                break;
             }
            // console.log(par)

            // return <Box><SmileSt/></Box>
           }
    
          }
          ,
           { field: 'score',
           headerName: 'امتیاز',
           align:'center',
           sortable:false,
           headerAlign:'center',
           width: 150 ,
           renderCell:(par:any)=>{
            let value:string=par?.row?.score.slice(0,par.row.score.length-1);
            //  console.log(+value)
             let intVal=+value;
            //  console.log(intVal)
             let color='';
             let fColor=''
             switch (true) {
              case intVal>70:
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
              height={'75%'}   
              bgcolor={color}
               >
        
                <Typography px={8} color={fColor} fontWeight={400} >
                {intVal}
                </Typography>
              </Box>
            
           }
    
          }
          // InfoIcon
          ,
          { field: '-',
          headerName: 'اطلاعات',
          align:'center',
          headerAlign:'center',
          sortable:false,
           minWidth: 100 ,
           renderCell:()=>{
            return <Box  p={2} >
              <IconButton onClick={initGetKRinfo}  >
                <InfoIcon/>
              </IconButton>
            </Box>
           }
         },
         
      ],[]);

      

// وضعیت آتی

      useEffect(() => {
     
        
        setKeysResultsList()
      }, [objectivee])
      
      const setKeysResultsList=():any=>{
        let targetObjective=objectivies?.find((objective:any)=>objective.id===objectivee?.id);
        let keyrs=targetObjective?.keyResultCheckingMeetingQueryResultDto;
        console.log(keyR)
        setKeyR(keyrs)
      }


      const renderContents=()=>{

      if (!keyR) {
        return <Box 
        width={'100%'} 
        height={'100%'} 
        display={'flex'} 
        flexDirection={'column'} 
        justifyContent={'center'} 
        alignItems={'center'} >
       <EmptyDataIcon/>
       <Typography mt={2} color={'blue'} textAlign={'center'}  >
       برای نمایش نتایج کلیدی از جدول بالا یک هدف را انتخاب نمایید.
       </Typography>
        </Box>
      }
      else {
        return  <Grid item xs={12} >
       
        <Grid container  >
        <Grid  item xs={6} >
          <Box py={1} px={3}  >
             <Typography fontSize={'14px'} fontWeight={500} >
             هدف : {objectivee?.name}
             </Typography>
           </Box>
          </Grid>
   
         
           <Grid item xs={6}  >
           <Box py={1} >
             <Typography fontSize={'14px'} fontWeight={500}  >
             مسئول هدف :  {objectivee?.responsibleName}
             </Typography>
           </Box>
      
           </Grid>
        </Grid>
            <Grid item xs={12}  >
           <DyDataGrid 
          data={keyR || []}
          columns={keyResultColumn}
          initialOnRowClick={()=>{}}   
          hideFooter={true}  
          selectionModel={[]}
          />
           </Grid>
          
          </Grid>
      
        
      }

   







        // if (KeyRDataLoading) {
        //   return <></>
        // } else {
        //   return 
        // }


      }

      const selectObjective=()=>{
      console.log(objectivee)
      }
  return (
    <>
    <Grid container sx={{bgcolor:'#F9F9F9'}} >
       <Grid item xs={12}>
       <Box py={1} my={2} borderRadius={2} boxShadow={2} bgcolor={'white'} >
            <Grid container >
                <Grid item xs={12} md={3}  >
               
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  >
                <Typography variant='button' px={1}>نام شرکت:</Typography>
                  <Typography  fontWeight={600} fontSize={'14px'}  >{teamInfo?.companyName}</Typography>

                </Box>
                </Grid>
                <Grid item xs={12} md={3}  >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  >
                <Typography variant='button' px={1}>مدیر شرکت :</Typography>
                  <Typography  fontWeight={600} fontSize={'14px'}  >{teamInfo?.managerCompanyName}</Typography>

                </Box>
                </Grid>

                <Grid item xs={12} md={3}  >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  >
                <Typography variant='button' px={1}>تعداد اهداف کل شرکت:</Typography>
                  <Typography  fontWeight={600} fontSize={'14px'}  >{teamInfo?.objectivesCount}</Typography>

                </Box>
                </Grid>

                <Grid item xs={12} md={3}  >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  >
                <Typography variant='button' px={1}>تعداد نتایج کل شرکت:</Typography>
                  <Typography fontWeight={600} fontSize={'14px'}   >{teamInfo?.keyResultsCount}</Typography>

                </Box>
                </Grid>
              
               
            </Grid>
       </Box>
       </Grid>
    <Box  width={'100%'} borderRadius={2}  boxShadow={2} bgcolor={'white'}>
    <Grid item xs={12}  >
       <Typography px={3} py={1} textAlign={'left'} fontSize={'16px'} color={'blue'}  >
       لیست اهداف
       </Typography>
   <DyDataGrid  
   initialOnRowClick={setObjectivee}
   data={objectivies} 
   columns={objectiveColumns} 
   hideFooter={true}
   selectionModel={[]}
   
    />
 
      
       </Grid>
    </Box>

      <Box 
      bgcolor={'white'} 
      mt={2} 
      width={'100%'} 
      borderRadius={3} 
      boxShadow={2} 
      rowGap={3} > 
     
       <Grid item xs={12}  >
       <Typography px={3} 
       fontSize={'16px'} 
       py={1} 
       textAlign={'left'} 
       variant='h6' 
       color={'blue'}  >
       لیست نتایج کلیدی
       </Typography>
       </Grid>


     <Grid item xs={12} minHeight={'78vh'} >
      
     <Grid container  >
     {
        renderContents()
      }
     </Grid>
     </Grid>
      





   </Box>
   {
    showModal && 
      <ModalLyt  showModal={showModal} setShowModal={setShowModal}  >
      </ModalLyt>
 
   }

    


    </Grid>
    </>
  )
}

export default ObjectiveKeyResults