import React,{useMemo, useState,useEffect} from 'react';

import { Grid,Box, Typography,Button } from '@mui/material';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import KrDetails from '../../../CompanyTeams/LComponents/KrDetails/KrDetails';
import OKRsCart from '../OKRsCart/OKRsCart';
const ObjKrs = (props:any) => {
    let{krs}:any|null=props;
    const[krDetails,setKrDetails]=useState<any>();
    const[showKrDetails,setShowKrDetails]=useState<Boolean>(false);
    const[okRGradeDetails,setokRGradeDetails]=useState<any>([])

    
    const initialShowDet=()=>{
      console.log(krs)
      let{okR_GradeDetails}=krs;
  console.log(okR_GradeDetails)
     setShowKrDetails(true)
    }

    useEffect(() => {
   
      
      if (krs) {
        let{okR_GradeDetails}=krs;
        console.log(krs)
        console.log(okR_GradeDetails);
        setokRGradeDetails(okR_GradeDetails)
      }
  
    }, [krs])

    useEffect(() => {
  console.log(okRGradeDetails)
    }, [okRGradeDetails])
    
    
  return (
    <Grid container  >
  {
    krs.map((item:any,i:number)=>{
        let{name,okrStateName,responsibleName,pointingSystemType,okR_KeyResultType}:any=item
      return <Box key={i}   >
        <OKRsCart item={item}  />
      </Box>
    })
  }
    </Grid>
  )
}

export default ObjKrs