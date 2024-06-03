import React,{useEffect} from 'react';
import {Grid,Box,Typography,Button} from '@mui/material'
import {ReactComponent as ManagerTeamVector} from '../../StaticData/Vectors/managerTeamVector.svg';
import {ReactComponent as PersonelVector} from '../../StaticData/Vectors/personelVector.svg';
import DeleteIcon from '@mui/icons-material/Delete';
import {IconButton} from '@mui/material';
import { useDeleteTeam } from '../../Hooks';
import { useSelector } from 'react-redux';


const TeamCart = (props:any) => {
  const userId=useSelector((state:any)=>state.loign.userInfo.userId);
  const tenantId=useSelector((state:any)=>state.meetings.profileTenantId);
//   setShowToastMessage={setShowToastMessage}
// setEditTeamState={setTeamAsyncOpState}
    let {item,setTeamId,setShowEditForm,setShowToastMessage,setDeleteTeamState}:any=props;
    let{name,managerName,personCount,chlidsTeamCount,activated,id}=item;
    const{mutate:deleteTeam,isError,isSuccess,data:deleteData}=useDeleteTeam()




    const initialDeleteTeam=()=>{
          let deleteBody={
      deletedId:id,
      userId:userId,
      tenantId:tenantId

  }
  deleteTeam(deleteBody)

    }

    const initialEditTeam=()=>{
      setShowEditForm(true)
      setTeamId(id)
    }

    useEffect(() => {
      
      if (deleteData) {
        setShowToastMessage(true);
        setDeleteTeamState(deleteData?.data)
      }
    
    
    }, [isSuccess,deleteData])

    
    






  return (
    <Box width={'390px'} 
 borderRadius={3} 
 boxShadow={4}
    m={1}
    >
        <Grid container p={1} >
       <Grid item xs={12}   >
    <Box width={'100%'} p={1} display={'flex'} justifyContent={'space-between'} >
      <Box>
      <Typography  color={'#001733'} fontWeight={700}   >
            {
                name
            }
        </Typography>
      </Box>
      <Box>
        <IconButton onClick={()=>{
            initialDeleteTeam()
        }}  >
            <DeleteIcon/>
        </IconButton>
      </Box>
    </Box>
       </Grid>



       <Grid item xs={12}   >
       <Box mr={1.5} p={0.5}  display={'flex'} alignItems={'center'} justifyContent={'start'}  >
       <Typography mr={1.5} px={0.5}>
      سرمربی:
       </Typography>
       {/* <Box>
        <ManagerTeamVector/>
       </Box> */}
       <Typography>
        
            -
        
       </Typography>
       
       </Box>
       </Grid>
       <Grid item xs={12}   >
       <Box mr={1.5} p={0.5}   display={'flex'} alignItems={'center'} justifyContent={'start'}  >
       <Typography mr={1.5} px={0.5} >
       مربی:
       </Typography>
       {/* <Box>
        <ManagerTeamVector/>
       </Box> */}
       <Typography>
        
            -
        
       </Typography>
       
       </Box>
       </Grid>

       <Grid item xs={12}   >
       <Box mr={1.5} display={'flex'} alignItems={'center'} justifyContent={'start'}  >
       <Typography variant='body1' fontWeight={500} ml={1} >
       مدیر:
       </Typography>
       <Box  mx={0.5} >
        <ManagerTeamVector/>
       </Box>
       <Typography fontWeight={600}  >
        {
            managerName
        }
       </Typography>
       
       </Box>
       </Grid>

       <Grid item xs={12}  >
        <Box  display={'flex'} justifyContent={'start'} alignItems={'center'} >
   <Box mr={0.5}>
    <PersonelVector/>
   </Box>
   <Box>
    <Typography  variant='caption' color={'GrayText'} >
        {
            `${personCount} عضو و ${chlidsTeamCount} زیر گروه`
        }
    </Typography>
   </Box>
        </Box>
       </Grid>

       <Grid item xs={12}  >
       <Box width={'100%'}  display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
        <Box bgcolor={'#D5f7D4'} display={'flex'} justifyContent={'center'} alignItems={'center'} width={'70px'} height={'30px'} borderRadius={3}>
     <Typography fontSize={'0.80rem'} fontWeight={activated?900:400} color={activated?'green':'red'}>
        {
            activated?'فعال':'غیرفعال'
        }
     </Typography>
        </Box>
        <Box py={1}>
        <Button variant='text' onClick={initialEditTeam}  >
            ویرایش
        </Button>
      </Box>
      <Box py={1}>
        <Button variant='text'  >
        مشاهده جزئیات
        </Button>
      </Box>
       </Box>
       </Grid>



        </Grid>


    </Box>
  )
}

export default TeamCart