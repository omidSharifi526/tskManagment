import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { IconButton,Box } from '@mui/material';
import CountdownTimer from '../TimerD/Timer';
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useState,useEffect} from 'react';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import PauseOutlinedIcon from '@mui/icons-material/PauseOutlined';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import {Stack} from '@mui/material';
// import 


export default function Timer({close,show}:any) {
  const [value, setValue] = React.useState<number>(30);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const[playMode,setPlayMode]=useState<boolean>(false);
  const[initialMinutes,setInitialMinutes]=useState<number>(1)


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    close()
    // setRunTimer(!runTimer)

  };

  const initialPlay=()=>{
    setPlayMode(!playMode)
  }

  const initialStop=()=>{
    setPlayMode(!playMode)
  }

  const initialAddMinutes=()=>{
    setInitialMinutes(prev=>prev+1)
  }

  const intialReduceMinutes=()=>{
    setInitialMinutes(prev=>prev-1)
  }

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const renderOption=()=>{
    if (!playMode) {
      // 
      return <Box display={'flex'} alignItems={'start'} sx={{p:1}}   >
           <IconButton  sx={{bgcolor:'#E5F1FF'}}  onClick={initialPlay}   ><PlayArrowOutlinedIcon sx={{color:'#00387c !important'}}  fontSize='medium'   /></IconButton>
             </Box>
      

    }
    else{
      return <Box  display={'flex'} columnGap={2}  sx={{p:1}}>
           <IconButton  sx={{bgcolor:'#E5F1FF'}} onClick={initialStop}     ><StopOutlinedIcon/></IconButton>
           <IconButton sx={{bgcolor:'#E5F1FF'}} ><PauseOutlinedIcon/></IconButton>
          </Box>
    }
  }

  return (
    <div>
    
      <Popover
        id={id}
        open={show}
        anchorEl={anchorEl}
        // onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{px:2}}
      >
       <Box  width={'262px'} height={'315px'} display={'flex'} flexDirection={'column'}  >
      <Box
      
       width={'100%'}
       display={'flex'} 
       alignItems={'center'} 
       justifyContent={'space-between'} 
       
       >
         <Box    >
          <Typography variant='button' px={1}   >
          تایمر
          </Typography>
        </Box>

        <Box>
        <IconButton onClick={handleClose}     >
          <HighlightOffIcon/>
        </IconButton>
        </Box>
       
      </Box>

      <Box>
        <CountdownTimer   initialMinutes={initialMinutes}   />
      </Box>
      
      <Box   mt={2} width={'100%'} display={'flex'} justifyContent={'space-between'}   >
      <Box display={'flex'} alignItems={'center'}    >
       <IconButton size='small'   >
        <RemoveIcon/>
       </IconButton>
       <Typography>1 دقیقه</Typography>
       <IconButton onClick={initialAddMinutes} size='small'>
        <AddIcon/>
       </IconButton>
      </Box>
      <Box>
       {
        renderOption()
       }
      </Box>
      <Box>
      
      </Box>

      
      </Box>
      <Box mt={2} width={'80%'} mx={'auto'}   >
      <Stack spacing={2} direction="row-reverse" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <VolumeUp />
      </Stack>
      </Box>
       </Box>
      </Popover>
    </div>
  );
}
