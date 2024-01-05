import React,{useState,useEffect} from 'react';
import{Grid,Box,Typography} from '@mui/material';
// import { v4 as uuidv4 } from 'uuid';
import DyDataGrid from '../../../components/GlobalComponents/DyDataGrid/DyDataGrid';
import { useSelector } from 'react-redux';
import {useGetAllKeyResultByObjectiveId} from '../../Meeting/Hooks/index';
import { DataGrid, GridRowsProp, GridColDef,faIR } from '@mui/x-data-grid';
import {EmptyDataIcon} from '../StataicData/index'

const ObjectiveKeyResults:React.FC=()=> {
  // const keyResults:any=useSelector((state:any)=>state.meetings.teamInfo);
  const teamInfo:any=useSelector((state:any)=>state.meetings.teamInfo);
  const objectivies=useSelector((state:any)=>state.meetings.objectivie);
    const[objectivee,setObjectivee]=useState<any>(objectivies?.length>4?'fb7cc4ea-7162-4916-9aa8-834b14308e10':null);
    // const {data:keyRData,isLoading:KeyRDataLoading}=useGetAllKeyResultByObjectiveId(objectiveId);
    const[keyR,setKeyR]=useState<any>([])

    
  const [getCustomerBody, setGetCustomerBody] = useState<any>({
    pageSize: 10,
    page: 1,
    searchTerm: "",
  });

  
  const [counter, setCounter] = useState(1); // Initialize the counter for row index

    const objectiveColumns: any = [
      {
        field: "rowid",
        headerName: "ردیف",
        width: 50,
        sortable: false,
        align: "center",
        renderCell: (params:any) => {
          const rowIndex = params.api.getRowIndexRelativeToVisibleRows(params.id);
         
          return <span>{rowIndex+1}</span>;
        },
      },
        { field: 'name',
         headerName: 'نام هدف',
         align:'center',
         headerAlign:'center',
         sortable:false,
          width: 150 },
      
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
            width: 150,
            //  renderCell: ({ value }:any):any => {
            //     return (
                  
            //          <Typography textAlign={'center'}  >
            //           16
            //          </Typography>
                     
            //     )
            //   } 
            
            },
            ,
      
           { field: 'evaluationPercentage',
           headerName: 'درصد ارزیابی',
           align:'center',
           sortable:false,
           headerAlign:'center',
            width: 150 ,
         
          }
          ,
          { field: 'score',
           headerName: 'امتیاز',
           align:'center',
           sortable:false,
           headerAlign:'center',
            width: 150 ,
            // renderCell:({value}:any)=>{
            //   return<Box m={3} 
              
            //   borderRadius={2} 
            //   width={'100%'} 
            //   display={'flex'} 
            //   justifyContent={'center'} 
            //   alignItems={'center'} 
            //   height={'75%'}   
            //   bgcolor={value==='فعال'?'#D5F7D4':'#E5F1FF'}  >
        
            //     <Typography px={8}  >
            //     36
            //     </Typography>
            //   </Box>
            //       }
         
          }
      ];

      const keyResultColumn: any = [
        // {
        //   field: "rowid",
        //   headerName: "ردیف",
        //   width: 70,
        //   sortable: false,
        //   align: "center",
        //   renderCell: (params:any) => {
        //     const rowIndex = params.api.getRowIndexRelativeToVisibleRows(params.id)
        //     return <span>{rowIndex+1}</span> || 1
        //   },
        // }
        // ,
        { field: 'name',
         headerName: 'شرح نتیجه کلیدی',
         align:'right',
         headerAlign:'center',
         sortable:false,
          minWidth: 250 },
      
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
          headerName: 'مقدار فعلی',
          align:'center',
          sortable:false,
          headerAlign:'center',
           width: 100 },
          //  
          { field:'currentState',
          headerName: 'وضعیت فعلی',
          sortable:false,
          headerAlign:'center',
          align:'center',
           width: 150 },
      
           { field: 'rate',
           headerName: 'درصدارزیابی',
           sortable:false,
           headerAlign:'center',
           align:'center',
            width: 150 },
            ,
      
           { field: 'score',
           headerName: 'امتیاز',
           align:'center',
           sortable:false,
           headerAlign:'center',
           width: 100 ,
    
          }
          ,
      
           { field: '-',
           headerName: 'وضعیت آتی',
           align:'center',
           sortable:false,
           headerAlign:'center',
           width: 100 ,
    
          }
      ];

// وضعیت آتی

      useEffect(() => {
     
      
        setKeysResultsList()
      }, [objectivee])
      
      const setKeysResultsList=():any=>{
        console.log(objectivee)
        let targetObjective=objectivies?.find((objective:any)=>objective.id===objectivee?.id);
        let keyrs=targetObjective?.keyResultCheckingMeetingQueryResultDto;
        setKeyR(keyrs)
      }


      const renderContents=()=>{

      if (!objectivee) {
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
          hiefooter={true}       
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

    


    </Grid>
    </>
  )
}

export default ObjectiveKeyResults