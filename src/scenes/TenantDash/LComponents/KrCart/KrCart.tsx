import React,{useEffect, useState} from 'react';
import ModalLyt from '../../../../components/Layouts/ModalLyt/ModalLyt';
import { Grid,Box,Typography,Button } from '@mui/material';
// import KrGradeDetails from '../KrGradeDetails/KrGradeDetails';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from '@mui/material';
// import { useDeleteKr } from '../../Hooks';
import { useSelector,useDispatch } from 'react-redux';
// import { setOkrDeleteStateR } from '../../OKRManageSlice/OKRManageSlice';

const KrCart = (props:any) => {
  const dispatch=useDispatch();
  const deleteOkrState=useSelector((state:any)=>state.okrManage.okrDeleteData);

  const[showKrDetails,setShowKrDetails]=useState<Boolean>(false);
  const userId=useSelector((state:any)=>state.loign.userInfo.userId);
  const tenantId=useSelector((state:any)=>state.meetings.profileTenantId);
  // const lDeleteSuccess=()=>{
  //   setShowKrDetails(false)
  // }

//   const afterSuccessDelete=()=>{
//     setTimeout(() => {
//       dispatch(setOkrDeleteStateR(null))
//     }, 3000);
//   }
//   const{mutate:callDeleteKr,data:deleteData,isSuccess}=useDeleteKr()
  let{item,setKrId,setShowEditKr,setAddKrState,setShowToastMessage}=props;
  let{name,okrStateName,responsibleName,pointingSystemType,okR_KeyResultType,okR_GradeDetails,
    objectiveName,teamName,id}:any=item;


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

// callDeleteKr(deleteBody)
}

useEffect(() => {
      
  if (deleteOkrState) {
    setShowToastMessage(true);
    setAddKrState(deleteOkrState?.data)
  }


}, [deleteOkrState])

// useEffect(() => {
  
//   setTimeout(() => {
//     dispatch(setOkrDeleteStateR(null))
// }, 3000);

// }, [deleteOkrState])


// useEffect(() => {
  
// console.log(deleteData)

// }, [deleteData])






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
                <Box textAlign={'center'} width={'100%'} height={'100%'}  borderRadius={3}  bgcolor={okrStateName === 'فعال' ? '#D5f7D4':'#bfd3f5'} >
                    <Typography fontWeight={600} fontSize={'0.7rem'} color={okrStateName === 'فعال' ? 'green':'#3a82fc'}  >{okrStateName}</Typography>
                </Box>
            </Grid>
           </Grid>
            </Grid>
            
            <Grid container p={1} >
            
            {/* <Box display={'flex'} justifyContent={'start'}  >
             <Typography variant='body2' fontWeight={700} >مسئول : </Typography>
             <Typography variant='button' fontWeight={500}  >
                 {
                    responsibleName
                 }
                </Typography>
            </Box> */}
            
            <Grid item xs={12}   >
            <Box display={'flex'} flexDirection={'column'} justifyContent={'start'}  >
            <Box display={'flex'}  justifyContent={'start'}  >
             <Typography variant='body2' fontWeight={700} >سیستم امتیاز دهی : </Typography>
             <Typography variant='button' fontWeight={500}  >
                 {
                    pointingSystemType
                 }
                </Typography>
                </Box>
                </Box>
                </Grid>
                <Grid item xs={12}   >
                <Box display={'flex'}  flexDirection={'column'} justifyContent={'start'}  >    
            <Box display={'flex'}  justifyContent={'start'}  >
                <Typography variant='body2' fontWeight={700} >نوع نتیجه : </Typography>
             <Typography variant='button' fontWeight={500}  >
                 {
                    okR_KeyResultType
                 }
                </Typography>
                
            </Box>
             </Box>
            </Grid>
{/* 
            <Grid item xs={12}  sm={4} >
            <Box display={'flex'} justifyContent={'end'}  >
             <Typography variant='body2' fontWeight={700} >نوع نتیجه : </Typography>
             <Typography variant='button' fontWeight={500}  >
                 {
                    okR_KeyResultType
                 }
                </Typography>
            </Box>
            </Grid> */}
    
            <Grid item xs={12}  >
            <Box display={'flex'}  flexDirection={'column'} justifyContent={'start'}  >
            
            <Box display={'flex'}  justifyContent={'start'}  >
                
             <Typography variant='body2' fontWeight={700} >سطح: </Typography>
             <Typography variant='button' fontWeight={500}  >
                 {
                    teamName
                 }
                </Typography>

            </Box>
            </Box>
            </Grid>

            <Grid item xs={12}  >
            <Box display={'flex'} flexDirection={'column'} justifyContent={'start'}  >
            <Box display={'flex'}  justifyContent={'start'}  >
             <Typography variant='body2' fontWeight={700} >هدف: </Typography>
             <Typography variant='button' fontWeight={500}  >
                 {
                    objectiveName
                 }
                </Typography>
            </Box>
            </Box>
            </Grid>
            </Grid>

           

          
           

            {/* <Grid xs={12} sm={12} >
            <Box width={'100%'} 
            p={1}
             display={'flex'}
             flexDirection={'row-reverse'}
             justifyContent={'space-between'}   > */}
            {/* <Button variant='text' onClick={initialShowDet}   >
            جزییات
            </Button> */}
            {/* <IconButton onClick={initialDeleteKr}   >
              <DeleteIcon/>
            </IconButton>
            <Button variant='text' onClick={initialEditKr}   >
            ویرایش
            </Button> */}
            {/* </Box>
            </Grid> */}
         


             </Grid>

             {
                showKrDetails && <ModalLyt 
                showModal={showKrDetails} 
                setShowModal={setShowKrDetails}
                title={'نمایش اطلاعات '}

                 >
                  {/* <KrGradeDetails gradeDetails={okR_GradeDetails}   /> */}
                   {/* <KrDetails/> */}
                     
                </ModalLyt>
             }
        </>
  )
}

export default KrCart