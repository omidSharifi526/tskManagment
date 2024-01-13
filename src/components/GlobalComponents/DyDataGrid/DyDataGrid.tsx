import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef,faIR,GridToolbar } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import { Box,Grid } from '@mui/material';
import './style.css'




// تعداد اهداف
// امتیاز
export default function DyDataGrid({data,columns,hideFooter,selectionModel,initialOnRowClick}:any) {
    
      // console.log(data)

      const initOnRowClick=(row:any)=>{
       console.log(row)
       initialOnRowClick(row)
      //  setObjectiveId(id)
      }
  return (
 
    
   <Grid  width={'100%'} >
   <DataGrid 
  // className='MuiDataGrid-toolbarContainer'+/
   slots={{ toolbar:GridToolbar}}
//  filterModel={<h1>hi</h1>}
   rowHeight={40}
      sx={{
        cursor:'pointer',
        border:0,
        '& .MuiDataGrid-root': {
          backgroundColor: '#00387C !important',
          color: 'white',
          borderRadius:4,
          cursor:'pointer',
          border:0,
          '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
            fontSize: '10px', // Adjust the font size as needed
          },
          '& .rtl-128fb87-MuiDataGrid-toolbarContainer':{
            alignSelf:'end',
            pb:2
          }
        
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
      disableColumnMenu
      disableColumnFilter
      // sx={{my:2}}
      onRowClick={(param)=>{
        initOnRowClick(param.row)
        // console.log(param.row.id)
        // setObjectiveId(param.row.id)
      }}

      
      />
      
   </Grid>

  
  );
}
