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
    let{obj,setShowToastMessage,setObjectiveAsyncOpState}=props;
    let{name,responsibleName,definitionLevelName,id,weight,evaluationPercentage
        ,objectivesStateName,keyResultCount
    }=obj;
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
          setObjectiveAsyncOpState(deleteData?.data)
        }
      }, [deleteData,isSuccess])
      


  return (  
    <Grid container boxShadow={4} borderRadius={4} p={2} width={'100%'} height={'100%'}>
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


        {/* <Grid item xs={2}   >
        <Box width={'100%'} py={2} textAlign={'center'}>
            <IconButton>
            <MoreVertIcon/>
            </IconButton>
          </Box>
         </Grid> */}
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
        <Grid xs={12}  >
        <Box width={'100%'} p={1} >
        <CompanyManagmentIcon width={'25px'} height={'25px'} />
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
             <Box width={'350px'}  marginLeft={0}  >
                <DyLinearProgress value={evaluationPercentage}  />
             </Box>
        </Grid>
        </Grid>
        <Grid container >
        <Box  display={'flex'} justifyContent={'space-between'} textAlign={'center'}>
        <Box  bgcolor={ objectivesStateName === "فعال"?'#D5f7D4':'#bfd3f5'}  width={'90px'} height={'28px'} borderRadius={3} >
        <Button variant='text' > 
        <Typography  color={objectivesStateName === "فعال"? 'green':'#3a82fc'} fontSize={'0.8rem'}  >  {
                objectivesStateName === "فعال"?'فعال':'پیش نویس'
            }
        </Typography>
        </Button>
        </Box> 
    
        
        <Box  bgcolor={'#fadbb9'}  width={'100px'} marginLeft={1} height={'28px'} borderRadius={3} >
        <Button variant='text'  > 
        <Typography color={'#f77f23'} fontSize={'0.8rem'}>
          {keyResultCount}  نتیجه کلیدی 
        </Typography>
        </Button>
        </Box> 
       
    
        <Box   height={'30px'} marginLeft={0} width={'100px'} borderRadius={3}>
        <Button variant='text' onClick={goObjectiveDetails}  > 
        <Typography fontSize={'0.8rem'} color={'#0d0d0c'}>
         نمایش جزییات
         </Typography>
         </Button>

        {/* <IconButton onClick={()=>{
            //initialEditTeam()
        }}   >
        <EditIcon color='primary'   />
       </IconButton> */}
          </Box>
          
       {/* <Box marginTop={'0.5'}>
      
      </Box> */}

{/* 
<IconButton onClick={()=>{
            initialDeleteObject()
        }}  >
            <DeleteIcon color='error'/>
        </IconButton> */}
        
        <IconButton onClick={()=>{
            initialDeleteObject()
        }}  >
            <DeleteIcon color='error'/>
        </IconButton>


      </Box>
        </Grid>
    </Grid>
     
  )
}

export default OCart