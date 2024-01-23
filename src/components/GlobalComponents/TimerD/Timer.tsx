import React, { useState, useEffect } from 'react';
import { Button, Typography,Box } from '@mui/material';

interface CountdownTimerProps {
  initialMinutes: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialMinutes,addMin }:any) => {

  const[initMin,setinitMin]=useState<number>(initialMinutes)
  const initialSeconds = initMin * 60;
  const [seconds, setSeconds] = useState<number>(initialSeconds);
  
  // useEffect(() => {
    
  // console.log(initialMinutes)
  //   setinitMin(prev=>prev+1)
  // }, [initialMinutes])
  

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [seconds,initialSeconds]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Box width={'80%'}   mx={'auto'}  >
      {seconds === 0 ? (
     <Box mx={'auto'}   px={5} py={1} display={'flex'} justifyContent={'center'} alignItems={'center'}  >
           {/* <Button color='info' variant='outlined'  >
          ارسال مجدد
           </Button> */}
        </Box>
      ) : (
        <Box bgcolor={'#F5F5F5'} borderRadius={3} width={'80%'}  mx={'auto'} mt={2}   display={'flex'} justifyContent={'center'} alignItems={'center'}  >
            <Typography fontWeight={800} fontSize={'2.1rem'} color={'#00378c'}  >{formatTime(seconds)}</Typography>
        </Box>
        
      )}
    </Box>
  );
};

// Usage:


export default CountdownTimer;
