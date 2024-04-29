import React,{useState,useEffect} from 'react';
import { Grid,Box,Checkbox,FormControl,FormControlLabel,FormGroup} from '@mui/material';
interface settingItemFace{
    key:string,
    value:boolean
}
const Setting = () => {
    const[SettingsState,setSettingsState]=useState<settingItemFace[]>([{key:'دسترسی  به اهداف ',value:false},{key:'دسترسی به kr ها',value:false},{key:'دسترسی به جلسات ',value:false},{key:'دسترسی به تاریخچه',value:false}]);
    const initialChangeSetting=(key:string,value:boolean)=>{
        console.log(key,value)
setSettingsState((prev:any)=>(prev.map((item:any)=>{
if (item.key===key) {
    return { ...item, value: !item.value }; 
}
return item;
})))

    }

    useEffect(() => {
  
        console.log(SettingsState)
        }, [SettingsState])
  return (
   <Grid container   >
   <Grid item xs={12}  > 
   <Box
     py={2}
     px={4}
    width={'100%'}
    display={'flex'}
    flexDirection={'column'} alignItems={'start'} >
   {
    SettingsState && SettingsState.map((item:settingItemFace,i:number)=>{
        let{key,value}=item;
        return <FormGroup>
            {
             <FormControlLabel 
             key={i}
             checked={item.value} 
             control={<Checkbox />} 
             label={key} 
             onChange={(event: any)=>{
                initialChangeSetting(key,event.target.checked)
             }}
            //  onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
            //                 initialChangeSetting(key,event.target.checked)
            //             }}
             />
            }
        {/* 
        <FormControlLabel required control={<Checkbox />} label="Required" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" /> */}
      </FormGroup>
//     return <Box>
//    <Checkbox
//         label={key}
//         checked={item.value}
//         onChange={(event: React.ChangeEvent<HTMLInputElement>)=>{
//             initialChangeSetting(key,event.target.checked)
//         }}
//         inputProps={{ 'aria-label': 'controlled' }}
//         />
//     </Box>
    })
   }
   </Box>
   </Grid>
   </Grid>
  )
}

export default Setting