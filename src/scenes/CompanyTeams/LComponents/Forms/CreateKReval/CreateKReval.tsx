import React from 'react';
import { Grid,Box, Typography } from '@mui/material';
import DyDataGrid from '../../../../../components/GlobalComponents/DyDataGrid/DyDataGrid';
import DyLinearProgress from '../../../../../components/GlobalComponents/DyLinearProgress/DyLinearProgress';
interface CreateKRevalFace {
    cancelo : (show:boolean) => void,
}



export const CreateKReval = ({cancelo}:CreateKRevalFace) => {
  return (
    <Grid container   >
    <Grid item xs={12} p={1}  >
    <Box width={'100%'} 
    minHeight={'120px'} 
    borderRadius={2} 
    boxShadow={3}  
    sx={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center'}}
    >
    <Box sx={{width:'25%',minHeight:'100px',display:'flex',flexDirection:'column',p:1,rowGap:1}}>
    <Box><Typography>هدف:</Typography></Box>
    <Box><Typography>نتیجه کلیدی:</Typography></Box>
    <Box><Typography>مسئول:</Typography></Box>
    <Box><Typography>تاریخ جلسه:</Typography></Box>
    </Box>
    <Box sx={{width:'25%',minHeight:'100px'}}>
    <Box sx={{width:'25%',minHeight:'100px',display:'flex',flexDirection:'column',p:1,rowGap:1}}>
    <Box><Typography>مقدار شروع:</Typography></Box>
    <Box><Typography>سطح 30%:</Typography></Box>
    <Box><Typography>سطح 70%:</Typography></Box>
    <Box><Typography>سطح 100%:</Typography></Box>
    </Box>
    </Box>
    <Box sx={{width:'25%',minHeight:'100px'}}>
    <DyLinearProgress 
    value={30}
    mainLabel={'آخرین درصد تحقق نتیجه'}
     />
      <DyLinearProgress 
    value={60}
    mainLabel={'میزان ارزیابی'}
     />
    </Box>
    </Box>
    </Grid>


    <Grid  item xs={12} >
     <Grid  container >
    <Grid item xs={9}  >
   <Box height={'180px'} width={'100%'} bgcolor={'gray'} >

   </Box>
    </Grid>
    <Grid item xs={3}  >
    <Box height={'180px'} width={'100%'} bgcolor={'blue'} >

    </Box>
    </Grid>
     </Grid>
    </Grid>

    <Grid item xs={12}   >
     <Box height={'200px'} width={'100%'}  >
        <DyDataGrid
        columns={[]}
        data={[]}

        
        />
     </Box>
    </Grid>


    </Grid>
  )
}
