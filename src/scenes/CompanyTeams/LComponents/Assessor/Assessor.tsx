import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import {Button,Box,Grid} from '@mui/material';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
interface assessorFace  {
    optionList:any[],
    setSelectedInitialValue : (prev:any) => void
}

export default function Assessor({optionList,setSelectedInitialValue}:assessorFace) {
    const[hisCartActiveId,setHisCartActiveId]=useState<string>('')
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


 
    

    const initialSelectHisCart=(item:any)=>{
        let{id,value,problems,currentState,description,...rest}=item;
        console.log(value)
        console.log(id,item)
        setHisCartActiveId(id);
        let initSelVal={
          newValue:value,
          problems:problems===null?'':problems,
          currentState:currentState,
          description:description,
          tensileScore:''
        }
        // console.log(rest)
        // setSelectedInitialValue({...initSelVal,...rest})
        setSelectedInitialValue((prev:any)=>({...prev,...initSelVal}))
        setAnchorEl(null);
        }


    
  




  return (
    <div>
      <Button sx={{px:3,py:1}} endIcon={<PersonIcon/>}  aria-describedby={id} variant="contained" onClick={handleClick}>
       ارزیابی کننده
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Grid container >
       <Grid xs={12}  >
       <Box width={'230px'} minHeight={optionList.length===0?'50px':'250px'} 
       display={'flex'}
       flexDirection={'column'}
       >
        {
            optionList.length===0?<Box py={3} width={'100%'} textAlign={'center'}  ><Typography variant='body1'   >
            بدون مقدار
        </Typography></Box>:''
        }

        {
            optionList && optionList.map((item:any,i:number)=>{
                let{assessmentName,date,id}=item;
                return <Button 
         onClick={()=>{
          initialSelectHisCart(item)
         }}

         key={i} 
         sx={{width:'70%',
         bgcolor:hisCartActiveId===id?'#D5F7D4':'white',
         display:'flex',
         flexDirection:'column',
         alignItems:'center',
         justifyContent:'center',
         boxShadow:3,borderRadius:3,p:2,m:'auto',my:1}} >

           <Typography variant='body1' sx={{color:hisCartActiveId===id?'black':'black'}} >{assessmentName}</Typography>
           <Typography variant='caption' sx={{color:hisCartActiveId===id?'black':'black'}} >{date}</Typography>
               

         </Button>
            })
        }



{/* {
   assessmentHistory && <Box sx={{display:'flex',width:'100%',maxHeight:'280px',overflowY:'scroll',flexDirection:'column',justifyContent:'start',alignItems:'center'}} >
   <Typography  textAlign={'center'} >ارزیابی کننده</Typography>
    {
        assessmentHistory.map((item:any,i:number)=>{
          let{assessmentName,date,id}=item
         return <Button 
         onClick={()=>{
          initialSelectHisCart(item)
         }}

         key={i} 
         sx={{width:'70%',
         bgcolor:hisCartActiveId===id?'#D5F7D4':'white',
         display:'flex',
         flexDirection:'column',
         alignItems:'center',
         justifyContent:'center',
         boxShadow:3,borderRadius:3,p:2,m:'auto',my:1}} >

           <Typography variant='body1' sx={{color:hisCartActiveId===id?'black':'black'}} >{assessmentName}</Typography>
           <Typography variant='caption' sx={{color:hisCartActiveId===id?'black':'black'}} >{date}</Typography>
               

         </Button>
        })
    } */}
   
       </Box>
       </Grid>
        </Grid>
      </Popover>
    </div>
  );
}
