import * as React from 'react';
import { useEffect } from 'react';
import { DataGrid, GridRowsProp, GridColDef,faIR,GridToolbar } from '@mui/x-data-grid';
import { useDispatch,useSelector } from 'react-redux';
import { Box,Grid, IconButton,Button } from '@mui/material';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import {setinitialStateR} from '../../../components/Login/LoginSlice/LoginSlice'
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
  // setShowToolbarModal={setShowModal}
  // showInformation={showModal}


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
    setSelectionModel,
    setShowHistory,
    additionalToolbar,
    setShowInformation,
    setSpecialId,
    setShowAddEvalModal,
    initialMount,
    setPointSys,
    drName,
    setRowSelectedData
    
  }:any) {
    const[selectedRowData,setSelectedRowData]=React.useState(null);
    function CustomToolbar() {
    
      return (
        <GridToolbarContainer>
       
          {/* <span>hi</span> */}
          <Grid>
          {/* <IconButton size='small'  onClick={()=>{
          setShowToolbarModal((prev:any)=>!prev)
          }}   >
            <KrChartIcon style={{color:'red',backgroundColor:'red !important'}}  />
          </IconButton> */}
       
          {
       selectedRowData && additionalToolbar &&    <Button sx={{fontSize:'10px'}} variant='text'  onClick={()=>{
        setShowHistory((prev:any)=>!prev)
        let{id}=selectedRowData;
        setSpecialId(id)
              }}  startIcon={<HistoryToggleOffIcon/>}   >
                تاریخچه
                              </Button>
          }
             {
     selectedRowData &&  additionalToolbar &&    <Button sx={{fontSize:'10px'}} variant='text'  onClick={()=>{
              setShowInformation((prev:any)=>!prev);
              console.log(selectedRowData)
              initialOnRowClick(selectedRowData)
              // console.log('run')
              }}  startIcon={<ReceiptLongIcon   />}   >
              اطلاعات
                              </Button>
          }
                       {
     selectedRowData &&  additionalToolbar &&    <Button sx={{fontSize:'10px'}} variant='text'  onClick={()=>{
      setShowAddEvalModal((prev:any)=>!prev);
      let{id}=selectedRowData;
      setSpecialId(id)
       
              }}  startIcon={<EditNoteOutlinedIcon  />}   >
              ارزیابی
                              </Button>
          }

          </Grid>
          <GridToolbarColumnsButton />
          <GridToolbarFilterButton />
          <GridToolbarDensitySelector />
          <GridToolbarExport />
        </GridToolbarContainer>
      );
    }

      const initOnRowClick=(row:any)=>{
        console.log(row)
        setSelectionModel(row.id)
        setSelectedRowData(row)
       initialOnRowClick(row)
     if (setPointSys) {
      setPointSys(row?.okR_KeyResultType)
     }

     if (setRowSelectedData) {
      setRowSelectedData(row)
     }
     

      }

      useEffect(() => {
        // console.log(data)
      if (initialMount) {
        setSelectedRowData(data[0])
        setSelectionModel(data[0]?.id)
        initialOnRowClick(data[0])
       
        // console.log(data[0]?.okR_KeyResultType)
      }

      if (setPointSys) {
         setPointSys(data[0]?.okR_KeyResultType)
      }

      if (setRowSelectedData) {
        setRowSelectedData(data[0])
       }
      
      }, []);

      // setinitialStateR
const dispatch=useDispatch();



      const initialChangestate=(data:any)=>{
     if (drName && data) {
      // console.log('existData')
      let columnVisibilityModel=data?.columns?.columnVisibilityModel;
      // let columnVisibilityModel=columns?.columnVisibilityModel
      // console.log(columnVisibilityModel)


     
      dispatch(setinitialStateR({name:drName,colVis:columnVisibilityModel}))
     }

      }
      
   
     
  return (
 
    
   <Grid  width={'100%'} >
   <DataGrid 
   onStateChange={(state)=>{
    initialChangestate(state)
   }}
   density="compact"
   initialState={initState}
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
    // cell

      
     
      />
      
   </Grid>

  
  );
}
