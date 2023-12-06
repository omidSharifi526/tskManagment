import React, { useState, useEffect } from 'react';
import { Button, Typography,Box } from '@mui/material';

interface CountdownTimerProps {
  initialMinutes: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ initialMinutes }) => {
  const initialSeconds = initialMinutes * 60;
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (seconds > 0) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [seconds]);

  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      {seconds === 0 ? (
     <Box mx={'auto'}  px={5} py={3} display={'flex'} justifyContent={'center'} alignItems={'center'}  >
           <Button color='info' variant='outlined'  >
          ارسال مجدد
           </Button>
        </Box>
      ) : (
        <Box mx={'auto'}  px={5} py={3} display={'flex'} justifyContent={'center'} alignItems={'center'}  >
            <Typography fontWeight={800} fontSize={'2.5rem'} color={'InfoText'}  > {formatTime(seconds)}</Typography>
        </Box>
        
      )}
    </div>
  );
};

// Usage:


export default CountdownTimer;
