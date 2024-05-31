import React,{useEffect} from 'react';
import { Grid,Box, Typography, Button } from '@mui/material';
import {IconButton} from '@mui/material';
import {ReactComponent as StaffVector} from '../../StaticData/Vectors/staffVector.svg';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { useDeletePerson,useDeleteInvitedPerson} from '../../Hooks';
import { useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
export const StaffCart = (props:any) => {
    const userId=useSelector((state:any)=>state.loign.userInfo.userId);
    const tenantId:string|null=useSelector((state:any)=>state.meetings.profileTenantId);
    const userPhoneNumber=useSelector((state:any)=>state.loign.userPhoneNumber);
   
    const{mutate:deletePerson,data:deletePersonData,isSuccess:deletePerSuccess}=useDeletePerson();
    const{mutate:deleteInvitedPerson,data:deleteInvitedData,isSuccess}=useDeleteInvitedPerson();
    // let{setPersonId}=props
    //     setShowToastMessage={setShowToastMessage}
    // setAddStaffState={setUserAsyncOpState}
    let{item,setPersonId,setShowEditModal,setPersonIdFDelete,actived,setDeleteState,setShowToastMessage}=props;
    console.log(item)
    let{name,jobTypeName,activated,id,phoneNumber}=item;


const initialEditPerson=(perId:string|null)=>{
setShowEditModal(true)
setPersonId(id)
}



const initialDelete=(id:any)=>{
    // activated,id
   if (actived) {
    let deletePersonBody={
        DeletedPersonId:id,
        UserId:userId,
        TenantId:tenantId
    }
    console.log(deletePersonBody)
    deletePerson(deletePersonBody)
   }
   else{
    let invitedPersonBody={
        phoneNumber:phoneNumber,
        lastModifiedById:userId,
        userId:userId,
        tenantId:tenantId

    }
    console.log(invitedPersonBody)
    deleteInvitedPerson(invitedPersonBody)
   }

    console.log(item)

}

useEffect(() => {
  
    if (deleteInvitedData) {
        setShowToastMessage(true)
        setDeleteState(deleteInvitedData?.data)
    }


}, [deleteInvitedData,isSuccess])

useEffect(() => {
  
    if (deletePersonData) {
        setShowToastMessage(true)
        setDeleteState(deleteInvitedData?.data)
    }


}, [deletePersonData,deletePerSuccess])





  return (
    <Box width={'335px'} height={'120px'} marginRight={1} borderRadius={3} boxShadow={4}  >
        <Grid container px={2} rowGap={1} >
            
        <Grid item xs={2}   >
    <Box  display={'flex'} 
    flexDirection={'column'} 
    justifyContent={'center'} 
    pt={2}
    
    >
        <Box 
        py={1}
    textAlign={'center'}
    display={'flex'}
    alignItems={'center'}
    flexDirection={'column'}
    justifyContent={'cenetr'}
    >
        <StaffVector fontSize='large'  />
        </Box>
    </Box>
         </Grid>
         <Grid item xs={10} px={1} >
         <Grid container   >
        <Grid item xs={8}  height={'75px'} >
        <Box  p={1} pt={2}   >
            <Typography color={'#001733'} fontSize={'13px'} fontWeight={900}  >
            {
            name
            }
            </Typography>
        </Box>
        </Grid>
        <Grid item xs={4} height={'35px'} >
        <Box width={'90px'} textAlign={'end'} px={1} >
      <Box>
      <IconButton onClick={()=>{
            initialEditPerson(id)
        }}   >
        <EditIcon color='primary'   />
       </IconButton>
        <IconButton onClick={()=>{
            initialDelete(id)
        }}   >
        <DeleteIcon color='error'   />
       </IconButton>
      </Box>
      <Box pt={8}  height={'60px'} marginRight={1} display={'flex'} alignItems={'center'} justifyContent={'end'} >
            <Box   height={'25px'} width={'75px'}
                    bgcolor={'#D5f7D4'}   borderRadius={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Typography fontSize={'0.7rem'} fontWeight={activated?900:400} color={activated?'green':'red'}  >
                            {
                                activated?'فعال':'دعوت شده'

                            }</Typography>
                    </Box>
            </Box>
      </Box>
        </Grid>
        <Grid item xs={7} height={'42px'}  >
        <Box height={'100%'} p={1} display={'flex'} alignItems={'end'} justifyContent={'start'}>
            <Typography fontSize={'0.7rem'} color={'#001733'} fontWeight={600}>
                {
                 jobTypeName
                }
            </Typography>
        </Box>
        </Grid>
        </Grid>
        </Grid>   
        </Grid>
    </Box>
  )
}
