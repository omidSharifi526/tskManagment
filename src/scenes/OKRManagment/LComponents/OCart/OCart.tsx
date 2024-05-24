import React from 'react';
import { Grid,Box,Typography,IconButton,Button } from '@mui/material';
import { ReactComponent as Oflag } from '../../StaticData/Svgs/Oflag.svg';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useNavigate } from 'react-router-dom';
import DyLinearProgress from '../../../../components/GlobalComponents/DyLinearProgress/DyLinearProgress';

const OCart = (props:any) => {
    const navigate=useNavigate()
    let{obj}=props;
    let{name,createByName,definitionLevelName,id,weight,evaluationPercentage}=obj;

  const goObjectiveDetails=()=>{

        navigate('/dashboard/okrManagment/objectiveDetails',{replace:true,state:{objectiveId:id}})
      
  }





  return (
    <Grid container boxShadow={4} borderRadius={4} p={2} >
        <Grid item xs={12}   >
        <Grid container    >
         <Grid item xs={10}   >
        <Box width={'100%'}  
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
        <Typography variant='button' color={'gray'}  >{
            createByName
            }</Typography>
        </Box>
        </Grid>
        </Grid>
        <Grid container >
         <Grid item xs={12}  >
         <Box p={2}>
            <Typography variant='button' color={'black'}>
                {
                    definitionLevelName
                }
            </Typography>
         </Box>
         </Grid>
        </Grid>
        <Grid container   >
        <Grid item xs={12} >
             <Box width={'100%'} px={1} >
                <DyLinearProgress value={evaluationPercentage} />
             </Box>
        </Grid>
        </Grid>
        <Grid container  >
      <Box display={'flex'} flexDirection={'row-reverse'}  >
      <Box>
        <Button variant='text' onClick={goObjectiveDetails} > 
            نمایش جزییات
        </Button>
      </Box>
      </Box> 
        </Grid>
        </Grid>
    </Grid>
  )
}

export default OCart