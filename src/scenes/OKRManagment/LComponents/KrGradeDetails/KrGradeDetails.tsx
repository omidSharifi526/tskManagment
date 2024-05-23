import React,{useMemo,useState,useEffect} from 'react';
import DyDataGrid from '../../../../components/GlobalComponents/DyDataGrid/DyDataGrid';
import { Grid,Box } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
const KrGradeDetails = ({gradeDetails}:any) => {
const[ogd,setOgd]=useState<any[]>([])

    useEffect(() => {
      let ogdWithId=gradeDetails.map((item:any)=>{
        let{id,...rest}=item;
      return {id:uuidv4(),...rest}
      })
      console.log(ogdWithId)
        setOgd(ogdWithId)
  
    }, [gradeDetails])
    

    const krgdColumns=useMemo(()=>[
        {
            field: "rowid",
            headerName: "ردیف",
            width: 75,
          
            sortable: false,
            align:'center',
            headerAlign:'center',
            renderCell: (params:any) => params.api.getAllRowIds().indexOf(params.id)+1
          },
          ,
              { field: 'value',
               align:'left',
               headerName: 'مقدار',
               headerAlign:'center',
               sortable:false,
               wrap:'wrap',
                width: 170,
                flex:1
            },
    ],[])


  return (
    <Grid container   >
        <DyDataGrid 
        columns={krgdColumns} 
        data={ogd}
        
        />
    </Grid>
  )
}

export default KrGradeDetails