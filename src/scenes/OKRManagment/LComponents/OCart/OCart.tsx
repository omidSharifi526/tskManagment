import React,{useEffect} from 'react';
import { Grid,Box,Typography,IconButton,Button } from '@mui/material';
import { ReactComponent as Oflag } from '../../StaticData/Svgs/Oflag.svg';
import {ReactComponent as CompanyManagmentIcon} from '../../../../components/Dashboard/StaticsData/Icons/companyManagmentIcon1.svg';
import {ReactComponent as PersonIcon} from '../../../../components/Dashboard/StaticsData/Icons/Person1.svg';
import { ReactComponent as comp } from '../../StaticData/Svgs/Oflag.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDeleteObject } from '../../Hooks';
import DyLinearProgress from '../../../../components/GlobalComponents/DyLinearProgress/DyLinearProgress';
import { useSelector } from 'react-redux';

const OCart = (props:any) => {
    const navigate=useNavigate()
    let{obj,setShowToastMessage,setDeleteObjectiveState}=props;
    let{name,responsibleName,definitionLevelName,id,weight,evaluationPercentage}=obj;
    const tenantId=useSelector((state:any)=>state.meetings.profileTenantId);
    const{mutate:deleteObjectve,isError,isSuccess,data:deleteData}=useDeleteObject()

  const goObjectiveDetails=()=>{

        navigate('/dashboard/okrManagment/objectiveDetails',{replace:true,state:{objectiveId:id}})
      
  }

  const initialDeleteObject=()=>{
    let deleteBody={
    deletedId:id,
    tenantId:tenantId
    }
    deleteObjectve(deleteBody)
    }

    useEffect(() => {
        if (deleteData) {
          setShowToastMessage(true);
          setDeleteObjectiveState(deleteData?.data)
        }
      }, [isSuccess,deleteData])
      

  return ( <Box >
    <Grid container boxShadow={4} borderRadius={4} p={1} >
        <Grid item xs={12}  >
   
        <Grid item xs={10}  >
        <Box 
        display={'flex'} 
        alignItems={'start'}
        p={1}
        minHeight={'100px'} 
        justifyContent={'start'}  > 
        
        <Oflag fontSize={'0.9rem'}  />
        <Typography px={2} variant='body1'  >
            {
                name
            }
        </Typography>
        </Box>
        </Grid>


        <Grid item xs={2}   >
        <Box width={'100%'} py={2} textAlign={'center'}>
            <IconButton>
            <MoreVertIcon/>
            </IconButton>
          </Box>
         </Grid>
        </Grid>
        <Grid container   >
        <Grid xs={12}  >
        <Box width={'100%'} p={1} >
        <PersonIcon width={'15px'}  height={'15px'} />
        <Typography variant='button' color={'gray'}  padding={1}>{
            responsibleName
            }</Typography>
        </Box>
        </Grid>
        </Grid>
        <Grid container >
         <Grid item xs={12}  >
         <Box >
         <CompanyManagmentIcon />
            <Typography variant='button' color={'black'} padding={1}>
                {
                    definitionLevelName
                }
            </Typography>
         </Box>
         </Grid>
        </Grid>
        <Grid container   >
        <Grid item xs={12}  >
             <Box width={'265px'}  marginLeft={0}  >
                <DyLinearProgress value={evaluationPercentage}  />
             </Box>
        </Grid>
        </Grid>
        <Grid item xs={12} >
        <Box display={'flex'} marginRight={5} justifyContent={'space-between'} >
        <Box py={1} bgcolor={'#D5f7D4'} width={'70px'} height={'30px'} borderRadius={3} padding={0}>
        <Button variant='text'  > 
            فعال
        </Button>
        </Box> 
        <Box>
        
        <IconButton onClick={()=>{
            initialDeleteObject()
        }}  >
            <DeleteIcon color='error'/>
        </IconButton>
    </Box>   
        <Box py={1}  width={'90px'} height={'30px'} borderRadius={3} padding={0}>
        <Button variant='text' onClick={goObjectiveDetails}  > 
            نمایش جزییات
        </Button>
        {/* <IconButton onClick={()=>{
            //initialEditTeam()
        }}   >
        <EditIcon color='primary'   />
       </IconButton> */}
          </Box>
          
       {/* <Box marginTop={'0.5'}>
      
      </Box> */}




      </Box>
        </Grid>
        </Grid>
    </Box>
  )
}

export default OCart