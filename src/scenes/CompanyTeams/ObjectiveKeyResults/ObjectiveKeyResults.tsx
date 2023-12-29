import React,{useState} from 'react';
import{Grid,Box,Typography} from '@mui/material';
import DyDataGrid from '../../../components/GlobalComponents/DyDataGrid/DyDataGrid';
import { useSelector } from 'react-redux';
import {useGetAllKeyResultByObjectiveId} from '../../Meeting/Hooks/index';
import { DataGrid, GridRowsProp, GridColDef,faIR } from '@mui/x-data-grid';
import {EmptyDataIcon} from '../StataicData/index'

const ObjectiveKeyResults:React.FC=()=> {
  const keyResults:any=useSelector((state:any)=>state.meetings.keyResults);
  const objectivies=useSelector((state:any)=>state.meetings.objectivie);
    const[objectiveId,setObjectiveId]=useState<any>(objectivies.length>4?'fb7cc4ea-7162-4916-9aa8-834b14308e10':null);
    const {data:keyRData,isLoading:KeyRDataLoading}=useGetAllKeyResultByObjectiveId(objectiveId);
    
  
   
    const objectiveColumns: any = [
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
           width: 150 },
           
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
             renderCell: ({ value }:any):any => {
                return (
                  
                     <Typography textAlign={'center'}  >
                      16
                     </Typography>
                     
                )
              } },
            ,
      
           { field: 'calculateProgressType',
           headerName: 'درصد ارزیابی',
           align:'center',
           sortable:false,
           headerAlign:'center',
            width: 150 ,
         
          }
          ,
          { field: '-',
           headerName: 'امتیاز',
           align:'center',
           sortable:false,
           headerAlign:'center',
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
                36
                </Typography>
              </Box>
                  }
         
          }
      ];

      const keyResultColumn: any = [
        { field: 'name',
         headerName: 'شرح نتیجه کلیدی',
         align:'center',
         headerAlign:'center',
         sortable:false,
          width: 150 },
      
        { field: 'responsibleName',
         headerName: 'وضعیت',
         align:'center',
         sortable:false,
         headerAlign:'center',
          width: 150 },
      
          { field: 'keyResultCount',
          headerName: 'تعداد اهداف',
          align:'center',
          sortable:false,
          headerAlign:'center',
           width: 150 },
           
          { field: 'weight',
          headerName: 'وزن',
          sortable:false,
          headerAlign:'center',
          align:'center',
           width: 150 },
      
           { field: 'rate',
           headerName: 'امتیاز',
           sortable:false,
           headerAlign:'center',
           align:'center',
            width: 150 },
            ,
      
           { field: 'evaluationPercentage',
           headerName: 'درصد ارزیابی',
           align:'center',
           sortable:false,
           headerAlign:'center',
            width: 150 ,
            renderCell: ({ value }:any):any => {
                return (
                    <Box sx={{ width: '100%' }}>
                    {/* <LinearProgress variant="buffer" value={value} valueBuffer={value+10} /> */}
                     </Box>
                )
              },
          }
      ];
      const renderContents=()=>{

      if (!objectiveId || objectivies.length<2) {
        return <Box width={'100%'} height={'100%'} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} >
       <EmptyDataIcon/>
       <Typography mt={2} color={'blue'} textAlign={'center'}  >
       برای نمایش نتایج کلیدی از جدول بالا یک هدف را انتخاب نمایید.
       </Typography>
        </Box>
      }
      else {
        return <DyDataGrid 
          data={keyResults}
          columns={keyResultColumn}
          setObjectiveId={()=>{}}   
          hiefooter={true}       
          selectionModel={[]}
          
          />
      }





        // if (KeyRDataLoading) {
        //   return <></>
        // } else {
        //   return 
        // }


      }
  return (
    <>
    <Grid container  >
       <Grid item xs={12}  >
       <Box py={3} bgcolor={'gray'} my={2} borderRadius={2} boxShadow={2} >
            <Grid container >
                <Grid item xs={12} md={3}  >
                <Typography px={3}  variant='body1'   >
                نام شرکت :
               </Typography>
                </Grid>
                <Grid item xs={12} md={3}  >
                <Typography px={3}  variant='body1'   >
                مدیر شرکت :
               </Typography>
                </Grid>
                <Grid item xs={12} md={3} bgcolor={'gray'} >
                <Typography px={3}  variant='body1'   >
                تعداد اهداف کل شرکت:
               </Typography>
                </Grid>
                <Grid item xs={12} md={3} bgcolor={'gray'} >
                <Typography px={3}  variant='body1'   >
                تعداد نتایج کل شرکت:
               </Typography>
                </Grid>
            </Grid>
       </Box>
       </Grid>
    <Grid item xs={12}  >
       <Typography px={3} py={1} textAlign={'left'} variant='h6' color={'blue'}  >
       لیست اهداف
       </Typography>
       <DyDataGrid  
      setObjectiveId={setObjectiveId}
      data={objectivies} 
      columns={objectiveColumns} 
      hideFooter={true}
      selectionModel={[objectiveId]}
      
       />
       </Grid>

      <Box width={'100%'}  rowGap={3} > 
     
       <Grid item xs={12}  >
       <Typography px={3} py={1} textAlign={'left'} variant='h6' color={'blue'}  >
       لیست نتایج کلیدی
       </Typography>
       </Grid>

       {/* <DyDataGrid  
      setObjectiveId={()=>{}}
      data={keyResults} 
      columns={keyResultColumn}  
      /> */}

      {
        renderContents()
      }
      


   </Box>

    


    </Grid>
    </>
  )
}

export default ObjectiveKeyResults