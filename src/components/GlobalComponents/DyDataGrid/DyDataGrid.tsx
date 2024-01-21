import * as React from 'react';
import { DataGrid, GridRowsProp, GridColDef,faIR,GridToolbar } from '@mui/x-data-grid';
import LinearProgress from '@mui/material/LinearProgress';
import { Box,Grid } from '@mui/material';
import './style.css';
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';

  //  export default function CustomToolbarGrid() {
  //       const { data } = useDemoData({
  //         dataSet: 'Commodity',
  //         rowLength: 10,
  //         maxColumns: 6,
  //       });


export default function DyDataGrid(
  {data,
    columns,
    hideFooter,
    selectionModel
    ,initialOnRowClick,
    rowSelection,
    rowHeight,
    onRowSelectionEvent,
    initState,
    setSelectionModel
  }:any) {
    
    function CustomToolbar() {
      return (
        <GridToolbarContainer>
          <GridToolbarColumnsButton />
          {/* <GridToolbarFilterButton /> */}
          <GridToolbarDensitySelector />
          {/* <GridToolbarExport /> */}
        </GridToolbarContainer>
      );
    }

      const initOnRowClick=(row:any)=>{
        setSelectionModel(row.id)
       console.log(row)
       initialOnRowClick(row)
      //  setObjectiveId(id)
      }
   
     
  return (
 
    
   <Grid  width={'100%'} >
   <DataGrid 
   initialState={initState}
    // pageSizeOptions={[10]}
   slots={{ toolbar:CustomToolbar}}

   rowHeight={40}
      sx={{
        cursor:'pointer',
        border:0,
        '& .MuiDataGrid-columnSeparator': {
          display: 'none!important',
        },
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
      rows={data?data:[]} 
      columns={columns} 
      disableColumnMenu
      disableColumnFilter
      checkboxSelection={rowSelection?rowSelection:false}
      rowSelection={true}
      onRowClick={(param)=>{
        initOnRowClick(param.row)
      }}
      
     
      />
      
   </Grid>

  
  );
}
