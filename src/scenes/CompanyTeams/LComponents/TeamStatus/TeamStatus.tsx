import React,{useEffect,useState,useMemo} from 'react';
import { useSelector } from 'react-redux';
import {useGetAllTeamChildByParentId} from '../../Hooks/index';
import {Grid,Box,CircularProgress,Typography,Tooltip} from '@mui/material';
import DyDataGrid from '../../../../components/GlobalComponents/DyDataGrid/DyDataGrid';
// import CircularProgress from '@mui/material';
const TeamStatus:React.FC=()=> {
  const priodId:any=useSelector((state:any)=>state.meetings.priodId);
  const meetingId:any=useSelector((state:any)=>state.meetings.meetingId);
  const teamId:any=useSelector((state:any)=>state.meetings.teamInfo.id);
  console.log(priodId,meetingId,teamId);

    const{data:teamStatusData,isLoading}=useGetAllTeamChildByParentId(teamId,meetingId,priodId);


    const teamsColumns: any = useMemo(()=>
    [
      {
        field: "rowid",
        headerName: "ردیف",
        width: 35,
      
        sortable: false,
        align:'center',
        headerAlign:'center',
        renderCell: (params:any) => params.api.getAllRowIds().indexOf(params.id)+1
      }
      ,
      { field: 'name',
      headerName: 'نام تیم',
      align:'center',
      sortable:false,
      headerAlign:'center',
       width: 150 
      }
       ,
       { field: 'managerName',
      headerName: 'مسئول هدف',
      align:'center',
      sortable:false,
      headerAlign:'center',
       width: 150 
      }
       ,
       { field: 'objectiveCount',
      headerName: 'تعداد اهداف',
      align:'center',
      sortable:false,
      headerAlign:'center',
       width: 150 
      }
      ,
       { field: '-',
      headerName: 'وزن',
      align:'center',
      sortable:false,
      headerAlign:'center',
       width: 150 
       ,renderCell:()=>{
        return <Box>
              <Typography>{'خالی'}</Typography>
        </Box>
       }
      }
       ,
       { field: 'evaluationPercentage',
      headerName: 'درصد ارزیابی',
      align:'center',
      sortable:false,
      headerAlign:'center',
       width: 150 
      }
      ,
      { field: 'score',
     headerName: 'درصد ارزیابی',
     align:'center',
     sortable:false,
     headerAlign:'center',
      width: 150 
     }
// objectiveCount
      //  managerName

     

      
       
      
          
         
      ],[]);

    useEffect(() => {
      
    console.log(teamStatusData)
      
    }, [teamStatusData])

    if (isLoading) {
      return <Box height={'300px'} display={'flex'} alignItems={'center'} justifyContent={'center'}  >
         <CircularProgress color='info'  />
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
  

    
  return (
   <Grid container    >
   <Grid item xs={12} >
   <Box width={'100%'} height={'100%'} >
   <DyDataGrid 
   data={teamStatusData}
   columns={teamsColumns}
   hideFooter={true}
   selectionModel={''}
   initialOnRowClick={()=>{}}


   />
   </Box>
   </Grid>
   </Grid>
  )
}

export default TeamStatus