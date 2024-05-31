import React,{useState,useEffect} from 'react';
import { Grid,Box,Checkbox,FormControl,FormControlLabel,FormGroup, Button} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetTenantSetting,useAddSettings} from './Hooks';
import {CircularProgress} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import {ReactComponent as SettingVector} from './StaticData/Svgs/settingVector.svg';
import SettingsIcon from '@mui/icons-material/Settings';
import DYToastMessage from '../../../src/components/GlobalComponents/DyToastMessage/DYToastMessage';
// import {CircularProgress} from '@mui/material';

interface settingItemFace{
    key:string,
    title:string,
    value:boolean
}


const Setting = () => {
    const tenantId: any = useSelector((state: any) => state.meetings.profileTenantId);


  
   
    const{data:tenantSettingsData,isLoading:getTenantSettinLoading,isFetched}=useGetTenantSetting(tenantId);
    const{mutate:callAddTenantSetting,isSuccess:changeSettingSuccess,isLoading:changeSettingLoading,data:settingData}=useAddSettings()
    const[SettingsState,setSettingsState]=useState<settingItemFace[]>([]);
    const[remainData,setRemainData]=useState<any>(null);
    const[asyncState,setAsyncState]=useState<any>({
      success:false,
      loading:false
    });

    const[disabledSub,setDisabledSub]=useState<any>(true)
    const[initSett,setInitSett]=useState<any>(null);
    const [loginStatusLocal, setLoginStatusLocal] = useState<boolean | null>(null);
    const [loginMessage, setLoginMessage] = useState<string | null>(null)
    const loginStatus: any = useSelector((state: any) => state.loign.loginStatus);
    const initialChangeSetting=(key:string,value:boolean)=>{
     
      setAsyncState({
        success:false,
        loading:false
      })
      setDisabledSub(false)

        setSettingsState((prev:any)=>(prev.map((item:any)=>{
        if (item.key===key) {
            return { ...item, value: !item.value }; 
        }
        return item;
        })))

    }
    

    useEffect(() => {
     
   setAsyncState((prev:any)=>({...prev,success:changeSettingSuccess}))
  //  setDisabledSub(true)
    }, [changeSettingSuccess])

    useEffect(() => {
     
      setAsyncState((prev:any)=>({...prev,loading:changeSettingLoading}))
       }, [changeSettingLoading])
    


        useEffect(() => {
          
        // console.log(tenantData);
        if (tenantSettingsData && isFetched ) {
          let{settings,...rest}:any=tenantSettingsData
          setSettingsState(settings);
          setRemainData(rest)
        }
        
        }, [isFetched])


        useEffect(() => {
          
        console.log(settingData)
        
        }, [settingData])
        

        const initialAddSetting=()=>{
          
          console.log({settings:[...SettingsState],...remainData})
            callAddTenantSetting({settings:[...SettingsState],...remainData})
        }

        useEffect(() => {
          if (settingData) {
            // console.log(logdata)
            let { data: { isSuccess, data, metaData } }: any = settingData;
            let { message }: any = metaData;
            let logStatus = { success: isSuccess };
            // console.log(message)
            setLoginMessage(message);
            // loginMessage,setLoginMessage
            setLoginStatusLocal(!loginStatus)
            // console.log(isSuccess, data)
          }
      
        }, [settingData])
        if (getTenantSettinLoading) {
          return <Box width={'100%'} py={6} textAlign={'center'}   >
              <CircularProgress/>
          </Box>
        }
        



  return (
   <Grid container   >
   <Grid item xs={12}  md={6} > 

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

   
   </Grid>

   <Grid item xs={12}  md={6}>
   <Box   
   display={'flex'} 
   flexDirection={'column-reverse'} 
   justifyContent={'space-between'} 
   alignItems={'center'}

   minHeight={'100%'} >
    
    <Box  mb={2} >
    <Button 
    endIcon={asyncState.success?<CheckIcon/>:<SettingsIcon/>}
    disabled={disabledSub}
    // sx={{fontSize:'14px',px:6,py:1,bgcolor:asyncState.success?'green':'#00387C'}}
    sx={{fontSize:'14px',px:6,py:1,bgcolor:'#00387C'}}
    variant='contained' 
     onClick={()=>{
     initialAddSetting()
    }}  >
    {/* {
     asyncState.success ?'باموفقیت ثبت شد':' ثبت تنظیمات'
    } */}
      ثبت تنظیمات
    {/* {
      changeSettingLoading?<CircularProgress size={10} />:null
    } */}
    </Button>
    </Box>


    <Box>
      <SettingVector style={{width:'550px'}}  />
    </Box>


   </Box>
   </Grid>
   {
        loginStatusLocal && loginMessage &&
        <DYToastMessage
          show={!loginStatus}
          setShow={setLoginStatusLocal}
          message={loginMessage}
          isSuccess={loginMessage ==  "شما دسترسی تغییر تنظیمات را ندارید" ? false:true}
        />
      }
   </Grid>
  )
}

export default Setting
