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
    < >
             <Grid container   py={2} boxShadow={4} borderRadius={4}  >
            <Grid item xs={12}  >
           <Grid container p={1} alignItems={'center'} >
           <Grid item xs={12} sm={10}  >
          <Box>
            <Typography fontSize={'0.85rem'} fontWeight={700}  >{name}</Typography>
          </Box>
            </Grid>
            <Grid item xs={12} sm={2}   >
                <Box textAlign={'center'} borderRadius={3} p={1} bgcolor={okrStateName === 'فعال' ? '#D5F7D4' : '#E5F1FF'} >
                    <Typography fontWeight={600} color={okrStateName === 'فعال' ? 'green' : 'blue'}  >{okrStateName}</Typography>
                </Box>
            </Grid>
           </Grid>
            </Grid>
            
            <Grid container p={1} >
            <Grid item xs={12}  sm={4} >
            <Box display={'flex'} justifyContent={'start'}  >
             <Typography variant='body2' fontWeight={700} >مسئول : </Typography>
             <Typography variant='button' fontWeight={500}  >
                 {
                    responsibleName
                 }
                </Typography>
            </Box>
            </Grid>
            <Grid item xs={12}  sm={4} >
            <Box display={'flex'} justifyContent={'start'}  >
             <Typography variant='body2' fontWeight={700} >سیستم امتیاز دهی : </Typography>
             <Typography variant='button' fontWeight={500}  >
                 {
                    pointingSystemType
                 }
                </Typography>
            </Box>
            </Grid>

            <Grid item xs={12}  sm={4} >
            <Box display={'flex'} justifyContent={'center'}  >
             <Typography variant='body2' fontWeight={700} >نوع نتیجه : </Typography>
             <Typography variant='button' fontWeight={500}  >
                 {
                    okR_KeyResultType
                 }
                </Typography>
            </Box>
            </Grid>
    

            </Grid>

           

          
           

            <Grid xs={12} sm={12} >
            <Box width={'100%'} 
            p={1}
             display={'flex'}
             justifyContent={'space-between'}   >
            <Button variant='text' onClick={initialShowDet}   >
            جزییات
            </Button>
            <Button variant='text' onClick={initialShowDet}   >
            ویرایش
            </Button>
            </Box>
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
        </>
  )
}

export default OKRsCart