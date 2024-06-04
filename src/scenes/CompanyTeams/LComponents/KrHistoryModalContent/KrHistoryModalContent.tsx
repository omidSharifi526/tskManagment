import React,{useMemo,useState,useEffect} from 'react'
import { Box, CircularProgress,Grid,Typography,Tooltip } from '@mui/material';
import DyDataGrid from '../../../../components/GlobalComponents/DyDataGrid/DyDataGrid';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend,Tooltip as tooltip, ResponsiveContainer } from 'recharts';
// import{Grid,Box,Typography, IconButton, Tooltip} from '@mui/material';
import { useSelector } from 'react-redux';
const KrHistoryModalContent = ({data,loadingFlag,krDetail,objective}:any) => {
  // console.log(objective)
  const meetSelectedDate = useSelector((state: any) => state.meetings.meetSelectedDate);
  const priodName = useSelector((state: any) => state.meetings.periodName);
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
      const[krDetailSps,setKrDetailSps]=useState<any>(null);

      useEffect(() => {
        // console.log(objective)
        if (krDetail && objective ) {
          let{name}=krDetail;
          let{name:objectiveName}=objective;
          let details:any={
            krName:name,
            objectiveName:objectiveName,
            priodName:priodName
          }
          setKrDetailSps(details)
        }
      
       
      }, [krDetail,objective])
      

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
      <Grid item xs={12}  >
      <Grid container px={2}  >
         <Grid item xs={12} md={12}  >
        <Box display={'flex'} justifyContent={'space-between'}  >
        <Box>
          <Typography fontWeight={700}  >
          نام هدف  :
            {
            krDetailSps?.objectiveName
            }
          </Typography>
         </Box>
         <Box>
         <Typography variant='body1'  >
          تاریخ :
            {
            meetSelectedDate
            }
          </Typography>
         </Box>
        </Box>
         </Grid>
         <Grid item xs={12} md={6}>
         <Box mt={2}  >
          <Typography variant='body2'>
          شرح نتیجه کلیدی :
            {
            krDetailSps?.krName
            }
          </Typography>
         </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {/* priodName */}
            <Box mt={2} textAlign={'right'} >
          <Typography textAlign={'right'} variant='body2'>
          دوره زمانی :
            {
            krDetailSps?.priodName
            }
          </Typography>
         </Box>
          
          </Grid>
      </Grid>
      </Grid>

    <Grid item xs={12}   >
    <Box p={1}  >
    <DyDataGrid  
      data={data} 
      columns={KRHColumns||[]} 
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
    <Grid container item  xs={16} justifyContent="center" width={'400px'} height={'300px'}
    bgcolor={'#effeff'}>
<ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="meetingDate" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          {/* <Tooltip /> */}
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="reportScore" stroke="#e28743" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="reportNewValue" stroke="##e28743" />
        </LineChart>
      </ResponsiveContainer>
    </Grid>
    </Grid>
  )
}

export default KrHistoryModalContent