import * as React from 'react';
import { useEffect } from 'react';
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  // console.log(props)
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="white"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

export default function CircularWithValueLabel({setContentState}:any) {
  const [progress, setProgress] = React.useState(10);
  useEffect(() => {
    
    testLog()
   
  }, [progress])
  

  const testLog=():void=>{
   
   if (progress===30) {
    setContentState((prev:object)=>({...prev,content:'login'}))
   }
  }
 

  React.useEffect(() => {
    const timer = setInterval(() => {
      console.log('tetst')
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);
    return () => {
      clearInterval(timer);
    };
   
  }, []);

  return <CircularProgressWithLabel  value={progress} sx={{color:'white'}}  color='error' />;
}
