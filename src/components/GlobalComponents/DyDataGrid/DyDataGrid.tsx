import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef,faIR } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import { Box,Grid } from '@mui/material';




// تعداد اهداف
// امتیاز
export default function DyDataGrid({data,columns,setObjectiveId,hideFooter,selectionModel}:any) {
    
      // console.log(data)

      const initialOnRowClick=(id:string)=>{
       console.log(id)
       setObjectiveId(id)
      }
  return (
 
    
   <Grid  width={'100%'} >
   <DataGrid 
      sx={{
        cursor:'pointer',
        border:0,
        '& .MuiDataGrid-root': {
          backgroundColor: '#00387C !important',
          color: 'white',
          borderRadius:4,
          cursor:'pointer',
          border:0
          // Add other global styles for the Data Grid root
     
        // Add more styles for different components as needed
      },
      "& .MuiDataGrid-columnHeaders": {
        width: "100%",
        position: "sticky",
        zIndex: "1000",
        background: '#00387C !important',
        color:'white',
        borderRadius:5
      },
    
    
    }
    }
    
       hideFooter={hideFooter}
       autoHeight
       localeText={faIR.components.MuiDataGrid.defaultProps.localeText}
       rowSelectionModel={selectionModel}
    // disableColumnMenu
      rows={data?data:[]} 
      columns={columns} 
      // sx={{my:2}}
      onRowClick={(param)=>{
        initialOnRowClick(param.row.id)
        // console.log(param.row.id)
        // setObjectiveId(param.row.id)
      }}
      />
   </Grid>

  
  );
}
