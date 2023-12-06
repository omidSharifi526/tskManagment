import React from 'react';
import DyRadioBtn from '../../GlobalComponents/DyRadioBtn/DyRadioBtn';
import{Grid,Box,Typography,Button,FormControl,RadioGroup,FormLabel,FormControlLabel,Radio, TextField} from '@mui/material';
import DyButton from '../../GlobalComponents/DyButton/DyButton';
import{useState,useEffect} from 'react';
import AccordionLyt from '../../Layouts/AccordionLyt/AccordionLyt';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import Switch from '@mui/material/Switch';
import TransitionAccordionLty from '../../Layouts/TransitionAccordionLty/TransitionAccordionLty';


const TypeofMembership = ({setContentState}:any) => {
  const [checked, setChecked] = React.useState(false);
  const[memberShipTypeId,setMEmbershipId]=useState<String>('');
  const handleChange=(e: React.SyntheticEvent)=>{
    let target = e.target as HTMLInputElement;
    console.log(target.value)
//   console.log(target.value)
setMEmbershipId(target.value||'')
  }
  const icon = (
    <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
      <svg>
        <Box
          component="polygon"
          points="0,100 50,00, 100,100"
          sx={{
            fill: (theme) => theme.palette.common.white,
            stroke: (theme) => theme.palette.divider,
            strokeWidth: 1,
          }}
        />
      </svg>
    </Paper>
  );

  const intialCompleteRegistartion=()=>{
    console.log(memberShipTypeId)
    switch (memberShipTypeId) {
      case '1':
        setContentState((prev:any):any=>({...prev,content:'ownerRegistration'}))
        break;

        case '2':
          setContentState((prev:any):any=>({...prev,content:'employeesRegistration'}))
          break;

          case '3':
            setContentState((prev:any):any=>({...prev,content:'personalUseRegistration'}))
            break;

    
      default:
        break;
    }
  }



  return (
   
      
        <Grid  container  >
    <Grid item md={8} xs={10} mx={'auto'} bgcolor={'white'} height={'400px'} >
     <Grid container boxShadow={8} borderRadius={4}  >
   
     <Grid item xs={12}  >
    <Box py={2}  ><Typography variant='h6' fontWeight={800} textAlign={'center'} color={'red'}  >انتخاب نوع عضویت</Typography></Box>
     </Grid>


     <Grid item xs={12 } >
 <Box px={2} >
 <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">کاربران سازمانی</FormLabel>
        <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={memberShipTypeId}
        onChange={handleChange}
        >
    <FormControlLabel value="1" control={<Radio />} label="مالک / نماینده کسب و کار هستم." />
    <FormControlLabel value="2" control={<Radio />} label="کارمند هستم و کد دعوت دارم." />
  
<TransitionAccordionLty expanded={memberShipTypeId==='2'}  >
  <TextField 
  label='کد دعوت'
  variant='outlined'
  />
</TransitionAccordionLty>



    <FormLabel sx={{mt:3}} id="demo-controlled-radio-buttons-group">کاربران شخصی</FormLabel>
    <FormControlLabel value="3" control={<Radio />} label="برای استفاده شخصی ثبت نام میکنم." />


    </RadioGroup> 


    </FormControl>
 </Box>
     </Grid>

     <Grid  item xs={12} >
        <Box px={5} py={3} >
        <DyButton 
        variant={'contained'}
        onClick={intialCompleteRegistartion} 
        color={'primary'} caption={'ثبت نام '}
         />
        </Box>
     </Grid>

     </Grid>
    </Grid>
    </Grid>

  )
}

export default TypeofMembership