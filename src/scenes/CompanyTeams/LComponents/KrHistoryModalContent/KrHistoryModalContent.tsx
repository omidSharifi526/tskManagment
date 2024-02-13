import React,{useMemo,useState,useEffect} from 'react'
import { Box, CircularProgress,Grid,Typography,Tooltip } from '@mui/material';
import DyDataGrid from '../../../../components/GlobalComponents/DyDataGrid/DyDataGrid';
// import{Grid,Box,Typography, IconButton, Tooltip} from '@mui/material';
const KrHistoryModalContent = ({data,loadingFlag}:any) => {
    // console.log(data)
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
           width: 350,
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
      
        
      
          // { field: 'newValue',
          // headerName: 'مقدار اعلام شده',
          // align:'center',
          // sortable:false,
          // headerAlign:'center',
          //  width: 130,
          //  renderCell:({value}:any)=>{
          //   return <Box>
          //    {
          //     value.length>10? <Tooltip  sx={{fontSize:'1.5rem !important'}} title={value}>
          //     {value}
          //   </Tooltip>:
          //   <Typography  sx={{fontSize:'12px'}} >{value}</Typography>
          //    }
          //   </Box>
          // }
           
          //  },
           
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
        
                <Typography px={8} color={fColor} fontWeight={400} >
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
        
      ],[]);

    if(loadingFlag){
     return <Box width={'100%'} py={4}  textAlign={'center'}  >
   <CircularProgress  color='info'  />
     </Box>
    }
    // data,
    // columns,
    // hideFooter,
    // selectionModel
    // ,initialOnRowClick,
    // rowSelection,
    // rowHeight,
    // onRowSelectionEvent,
    // initState,
    // setSelectionModel,
    // setShowToolbarModal,
    // additionalToolbar
    let KRHistoryinitialState={
      columns: {
        columnVisibilityModel: {
          meetingNumber:false,
          startValue:false,
          // pointingSystemType:false,
          // forceEndDate:false,
          // startDate:false
  
        },
      },
  
    }

  return (
    <Grid container  >

    <Grid item xs={12}   >
    <Box p={1}  >
    <DyDataGrid  
      data={data} 
      columns={KRHColumns} 
      hideFooter={false}
      selectionModel={''}
      initialOnRowClick={()=>{}}
      additionalToolbar={false}
      setSelectionModel={()=>{}}
      initState={KRHistoryinitialState}
      // import 'meetingNumber'
      />
    </Box>
    </Grid>
    <Grid item xs={12}   >
  {/* <Box  minHeight={'600px'} width={'100%'}   >
 
  </Box> */}
    </Grid>
    </Grid>
  )
}

export default KrHistoryModalContent