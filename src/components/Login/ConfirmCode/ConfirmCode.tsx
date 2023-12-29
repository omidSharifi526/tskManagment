import React,{useState} from 'react';
import {Grid,Box,Typography,Button,Stack} from '@mui/material';
import DyTextField from '../../GlobalComponents/DyTextField/DyTextField';
import DyButton from '../../GlobalComponents/DyButton/DyButton';
import DySingleCharTextField from '../../GlobalComponents/DySingleCharTextField/DySingleCharTextField';
import { useAppSelector } from '../../../Store/Store';
import CountdownTimer from '../../GlobalComponents/TimerD/Timer';

const ConfirmCode = ({setContentState}:any) => {
  // const userPhoneNumber:any=useAppSelector((state:any)=>state.loign.userInfo.userPhoneNumber)
    const initialValue:string[]=['0',' 0','0','0'];
const[codeValuesState,setCodeValuesState]=useState(initialValue);
const initialgoBack=()=>{
  setContentState((prev:any):any=>({...prev,content:'login'}))
}

const initialLogin=()=>{
  setContentState((prev:any):any=>({...prev,content:'typeofMembership'}))
}
// console.log(codeValuesState)
  return (
    <Grid  container  >
    <Grid item md={8} xs={10} mx={'auto'} bgcolor={'white'}  >
     <Grid container  borderRadius={4} >
     <Grid>
     
     </Grid>
     <Grid item xs={12}   >
    <Box py={3}  >
      <Typography variant='h6' textAlign={'center'} color={'red'} fontWeight={800}  >کد تایید</Typography></Box>
     </Grid>
     <Grid item xs={12}  >
    
     
           <Grid item xs={12} my={1}  >
           <Typography textAlign={'center'} color={'primary'} >کد یکبار مصرف به شماره موبایل زیر ارسال شده است.</Typography>
            </Grid>
           
           
          


   <Grid item xs={6} mx={'auto'} >
  <Box  sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >

 <Box width={'30%'} >
 <DyButton 
  caption='ویرایش' 
  onClick={initialgoBack} 
  color={'primary'}
  variant='text' />
 </Box>
 <Box>
 {/* <Typography fontWeight={800} variant='body1'  >{userPhoneNumber}</Typography>  */}
 </Box>
    
  </Box>
   </Grid>
     </Grid>

     <Grid item xs={8} mx={'auto'}    >
   <Stack direction={'row'} justifyContent={'space-between'} rowGap={'auto'}  >
   {
        codeValuesState.map((inputs,index)=>{
          return (
            <DySingleCharTextField  
            key={index}
            codeValuesState={codeValuesState} 
            index={index}
            value={codeValuesState[index]}
            onChangee={setCodeValuesState}

             />
          )
        })
      }
   </Stack>
   <CountdownTimer initialMinutes={2} />
  
  
     </Grid>

     <Grid  item xs={12} >
        <Box px={5} py={1} >
        <DyButton 
        onClick={initialLogin}
         color={'primary'} 
         caption={'ورود'} 
         variant={'contained'}
         />
        </Box>
     </Grid>

     </Grid>
    </Grid>
    </Grid>
  )
}

export default ConfirmCode