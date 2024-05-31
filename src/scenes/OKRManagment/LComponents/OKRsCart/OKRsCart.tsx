import React,{useEffect, useState} from 'react';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import { Grid,Box,Typography,Button } from '@mui/material';
import KrGradeDetails from '../KrGradeDetails/KrGradeDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from '@mui/material';
import { useDeleteKr } from '../../Hooks';
import { useSelector } from 'react-redux';

const OKRsCart = (props:any) => {
  const[showKrDetails,setShowKrDetails]=useState<Boolean>(false);
  const userId=useSelector((state:any)=>state.loign.userInfo.userId);
  const tenantId=useSelector((state:any)=>state.meetings.profileTenantId);
  // const lDeleteSuccess=()=>{
  //   setShowKrDetails(false)
  // }
  const{mutate:callDeleteKr,data:deleteData,isSuccess}=useDeleteKr()
  let{item,setKrId,setShowEditKr,setAddKrState,setShowToastMessage}=props;
  let{name,okrStateName,responsibleName,pointingSystemType,okR_KeyResultType,okR_GradeDetails,id}:any=item;


const initialShowDet=()=>{
  setShowKrDetails(true);

}

const initialEditKr=()=>{
  setKrId(id);
  setShowEditKr(true);
}

const initialDeleteKr=()=>{
  let deleteBody={
    deletedId:id,
    userId:userId,
    tenantId:tenantId
}

callDeleteKr(deleteBody)
}

useEffect(() => {
      
  if (deleteData) {
    console.log(deleteData)
    setShowToastMessage(true);
    setAddKrState(deleteData?.data)
  }


}, [isSuccess,deleteData])

useEffect(() => {
  
console.log(deleteData)

}, [deleteData])





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
             flexDirection={'row-reverse'}
             justifyContent={'space-between'}   >
            {/* <Button variant='text' onClick={initialShowDet}   >
            جزییات
            </Button> */}
            <IconButton onClick={initialDeleteKr}   >
              <DeleteIcon/>
            </IconButton>
            <Button variant='text' onClick={initialEditKr}   >
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