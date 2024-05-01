import React,{useState,useEffect} from 'react';
import { Grid,Box,Checkbox,FormControl,FormControlLabel,FormGroup, Button} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetTenantSetting,useAddSettings} from './Hooks';
import {CircularProgress} from '@mui/material';

interface settingItemFace{
    key:string,
    title:string,
    value:boolean
}


const Setting = () => {
    const tenantId: any = useSelector((state: any) => state.meetings.profileTenantId);


  
   
    const{data:tenantSettingsData,isLoading:getTenantSettinLoading,isFetched}=useGetTenantSetting(tenantId);
    const{mutate:callAddTenantSetting}=useAddSettings()
    const[SettingsState,setSettingsState]=useState<settingItemFace[]>([]);
    const[initSett,setInitSett]=useState<any>(null);


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
          
        // console.log(tenantData);
        setSettingsState(tenantSettingsData)
        
        }, [isFetched])

        const initialAddSetting=()=>{
          console.log(SettingsState)
            callAddTenantSetting(SettingsState)
        }


        if (getTenantSettinLoading) {
          return <Box width={'100%'} py={6} textAlign={'center'}   >
              <CircularProgress/>
          </Box>
        }
        



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
        let{key,value,title}=item;
        return <FormGroup key={i} sx={{px:4,py:1}} >
            {
             <FormControlLabel 
     
             checked={item.value} 
             control={<Checkbox />} 
             label={title} 
             onChange={(event: any)=>{
                initialChangeSetting(key,event.target.checked)
             }}
    
             />
            }

      </FormGroup>

    })
   }
   </Box>

   <Box mt={2} mx={8}  >
    <Button 
    variant='contained' color='primary'
     onClick={()=>{
     initialAddSetting()
    }}  >
      ثبت تنظیمات
    </Button>
   </Box>
   </Grid>
   </Grid>
  )
}

export default Setting