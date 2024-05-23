import React,{useState} from 'react';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import { Grid,Box,Typography,Button } from '@mui/material';
import KrGradeDetails from '../KrGradeDetails/KrGradeDetails';
const OKRsCart = (props:any) => {
  const[showKrDetails,setShowKrDetails]=useState<Boolean>(false);
  let{item}=props;
  let{name,okrStateName,responsibleName,pointingSystemType,okR_KeyResultType,okR_GradeDetails}:any=item;


const initialShowDet=()=>{
  setShowKrDetails(true);
  console.log(okR_GradeDetails)
}


  return (
    <Grid item xs={12} sm={6} key={1} py={4} boxShadow={4} borderRadius={4}   >
             <Grid container   >
            <Grid item xs={12} sm={10} >
          <Box>
            <Typography>{name}</Typography>
          </Box>
            </Grid>

            <Grid item xs={12} sm={2}   >
                <Box>
                    <Typography>{okrStateName}</Typography>
                </Box>
            </Grid>
            <Grid item xs={12}  sm={4} >
            <Box>
                <Typography>
                 {
                    responsibleName
                 }
                </Typography>
            </Box>
            </Grid>

            <Grid item xs={12}  sm={4} >
            <Box>
                <Typography>
                 {
                    pointingSystemType
                 }
                </Typography>
            </Box>
            </Grid>
            <Grid item xs={12}  sm={4} >
            <Box>
                <Typography>
                 {
                    okR_KeyResultType
                 }
                </Typography>
            </Box>
            </Grid>

            <Grid xs={12} sm={6} >
            <Box>
            <Button variant='text' onClick={initialShowDet}   >
           جزییات
            </Button>
            </Box>
            </Grid>
            <Grid xs={12} sm={6} >
            </Grid>


             </Grid>

             {
                showKrDetails && <ModalLyt 
                showModal={showKrDetails} 
                setShowModal={setShowKrDetails}
                title={'نمایش اطلاعات '}

                 >
                  <KrGradeDetails gradeDetails={okR_GradeDetails}   />
                   {/* <KrDetails/> */}
                     
                </ModalLyt>
             }
        </Grid>
  )
}

export default OKRsCart