import React,{useMemo, useState,useEffect} from 'react';

import { Grid,Box, Typography,Button } from '@mui/material';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import KrDetails from '../../../CompanyTeams/LComponents/KrDetails/KrDetails';
import OKRsCart from '../OKRsCart/OKRsCart';
const ObjKrs = (props:any) => {
    let{krs,setKrId,setShowEditKr,setAddKrState,setShowToastMessage}:any|null=props;
    const[krDetails,setKrDetails]=useState<any>();
    const[showKrDetails,setShowKrDetails]=useState<Boolean>(false);
    const[okRGradeDetails,setokRGradeDetails]=useState<any>([])

    
    const initialShowDet=()=>{
      // console.log(krs)
      let{okR_GradeDetails}=krs;
  // console.log(okR_GradeDetails)
     setShowKrDetails(true)
    }

    useEffect(() => {
   
      
      if (krs) {
        let{okR_GradeDetails}=krs;
        // console.log(krs)
        // console.log(okR_GradeDetails);
        setokRGradeDetails(okR_GradeDetails)
      }
  
    }, [krs])

 
    
    
  return (
    <Grid container spacing={2} p={1} >
  {
    krs.map((item:any,i:number)=>{
    
      return <Grid item xs={12}  md={6}  key={i} >
        <OKRsCart 
        item={item} 
        setKrId={setKrId} 
        setShowEditKr={setShowEditKr}  
        setAddKrState={setAddKrState}
        setShowToastMessage={setShowToastMessage}
        />
      </Grid>
    })
  }
    </Grid>
  )
}

export default ObjKrs