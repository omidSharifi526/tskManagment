import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';



export default function DyLinearProgress(props: any & { value: number}) {
  const [progress, setProgress] = React.useState(10);



  return (
   
  <Box>
       <Box width={'100%'} textAlign={'center'}  >
        <Typography variant='caption'   >
            {
               props.mainLabel
            }
        </Typography>
     </Box> 
    
    <Box sx={{ display: 'flex', alignItems: 'center',p:1 }}>
    <Box sx={{ width: '100%', mr: 1 }}>
      <LinearProgress  variant="determinate" {...props} />
    </Box>
    <Box sx={{ minWidth: 19 }}>
      <Typography variant="body2" color="text.secondary">{`${Math.round(
        props.value,
      )}%`}</Typography>
    </Box>
  </Box>
  </Box>
  );
}
