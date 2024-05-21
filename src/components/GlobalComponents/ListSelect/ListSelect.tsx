import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Box, Typography } from '@mui/material';
import sad from '../../../Asset/Svgs/Emojys/sad.png';
import smile from '../../../Asset/Svgs/Emojys/smil.png';
import meh from '../../../Asset/Svgs/Emojys/meh.png';
import { useState } from 'react';

const style = {
  p: 0,
  width: '100%',
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
  cursor:'pointer'
  
};


export default function ListSelect({options,withIcon,label,value,setValue,name}:any) {
    const[activeIndex,setActiceIndex]=useState<any>(0)
  return (
   <Box display={'flex'} flexDirection={'column'} alignItems={'center'} px={'0.5 !important'}   >
   <Box><Typography>{label}</Typography></Box>
   <Box width={'100%'} >
   <List sx={style} aria-label="mailbox folders">
        {
            options && options.map((item:any,i:number)=>{
              let{key,value:exValue}=item;
                return <Box key={i} >
                <Box display={'flex'} justifyContent={'start'} maxHeight={'60px !important'}   >
                <ListItem  onClick={()=>{
                  // name     onChangee(propName, teamIds)
                  setValue(name,exValue)
                    setActiceIndex(i)
                }}   sx={{backgroundColor:exValue===value?'#D5F7D4':'white',fontSize:'0.3rem !important'}}  >
                {/* <ListItemText primary={item?.key}  sx={{fontSize:'0.3rem !important '}}  /> */}
                <Typography  variant='caption'>{item?.key}</Typography>
                {
                        
                        i===0 && withIcon?<img src={smile} style={{margin:'1px 3px'}} width={'20px'} />:
                        i===1 && withIcon?<img src={meh} style={{margin:'1px 3px'}} width={'20px'} />:
                        i===2 && withIcon?<img src={sad} style={{margin:'1px 3px'}} width={'20px'} />:''
               }
              </ListItem>
                </Box>
               <Divider component="li" />
                   
                </Box>
            })
        }
    </List>
   </Box>
   </Box>
  );
}
