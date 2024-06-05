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
    let{obj,setObjectiveId,setShowEditForm,setShowToastMessage,setObjectiveAsyncOpState}=props;
    let{name,responsibleName,definitionLevelName,setShowEditModal,id,weight,evaluationPercentage
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
      
const initialEditObject=(perId:string|null)=>{
  setShowEditForm(true)
  setObjectiveId(id)
  }
  
      


  return (  
    
    <Grid container boxShadow={4} borderRadius={4} p={2} >
        <Grid item xs={12}  >
        <Grid container >
        <Grid item xs={12}  >
        
        <Box 
        display={'flex'} 
        width={'100%'}
        alignItems={'start'}
         
        minHeight={'100px'} 
        justifyContent={'space-between'}  > 
        <Box display={'flex'}>
        <Oflag fontSize={'0.9rem'}  />
        <Typography px={1} variant='body1' fontWeight={900} >
            {
                name
            }
        </Typography>
        </Box>
        <Box display={'flex'} justifyContent={'end'} >
        <Box >
        <IconButton onClick={()=>{
            initialEditObject(id)
        }}   >
        <EditIcon color='primary'   />
       </IconButton>
        </Box>
        <Box >
        <IconButton onClick={()=>{
            initialDeleteObject()
        }}  >
            <DeleteIcon color='error'/>
        </IconButton>
        </Box>
        </Box>
        </Box>
        
        </Grid>
        {/* <Grid item xs={2}>
        <Box >
       
      </Box>
      </Grid> */}
      </Grid>




        {/* <Grid item xs={2}   >
        <Box width={'100%'} py={2} textAlign={'center'}>
            <IconButton>
            <MoreVertIcon/>
            </IconButton>
          </Box>
         </Grid> */}
        </Grid>
      
        <Grid xs={12}  >
        <Box width={'100%'} marginLeft={1} display={'flex'} alignItems={'center'} justifyContent={'start'}>
        <PersonIcon width={'15px'}  height={'15px'} />
        <Typography px={1} variant='button' fontWeight={900} color={'black'} >{
            responsibleName
            }</Typography>
        </Box>
        </Grid>
     
        <Grid xs={12}  >
        <Box width={'100%'} marginLeft={1}  display={'flex'} alignItems={'center'} justifyContent={'start'}>
        <CompanyManagmentIcon width={'20px'} height={'20px'} />
        <Typography px={1} variant='button' fontWeight={900} color={'black'} >
                {
                    definitionLevelName
                }
        </Typography>
        </Box>
        </Grid>
    
        <Grid item xs={12} >
             <Box width={'100%'}   >
                <DyLinearProgress value={evaluationPercentage}  />
             </Box>
             
        </Grid>

        <Grid xs={12}>
        <Box  display={'flex'} alignItems={'center'} justifyContent={'space-between'} textAlign={'center'}>
        <Box  display={'flex'} alignItems={'center'} textAlign={'center'}  justifyContent={'center'}
        bgcolor={ objectivesStateName === "فعال"?'#D5f7D4':'#bfd3f5'}   width={'90px'} height={'28px'} borderRadius={3} >
        <Typography  color={objectivesStateName === "فعال"? 'green':'#3a82fc'} fontSize={'0.8rem'}  >  {
                objectivesStateName === "فعال"?'فعال':'پیش نویس'
            }
        </Typography>

        </Box> 
    
        
        <Box display={'flex'} alignItems={'center'} textAlign={'center'}  justifyContent={'center'} bgcolor={'#FBF0EA'}  width={'95px'} height={'28px'} borderRadius={3} >

        <Typography color={'#F95700'} fontSize={'0.8rem'}>
          {keyResultCount}  نتیجه کلیدی 
        </Typography>
        </Box> 
       
    
        <Box   display={'flex'} textAlign={'center'} alignItems={'center'} justifyContent={'end'}   marginLeft={1} width={'100px'} borderRadius={3}>
        <Button variant='text' onClick={goObjectiveDetails}  > 
        <Typography fontSize={'0.8rem'} color={'#0d0d0c'}>
         نمایش جزئیات
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
       
      </Box>
      </Grid>
        </Grid>

  )
}

export default OCart