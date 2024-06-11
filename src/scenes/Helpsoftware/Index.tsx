import React, { useEffect } from 'react';
import {Grid,Box,Typography, IconButton} from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
//import { UserProfileTypeCart } from '../../../../components/GlobalComponents/UserProfileTypeCart/UserProfileTypeCart';
import {useState} from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
//import {useGetPriodById} from '../../../../components/Login/Hooks/Index';
//import LyBackdrop from '../../../../components/Layouts/BackDrop/BackDrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';
//import { setLoadingR } from '../../MeetingsSlice/MeetingsSlice';
import { useDispatch } from 'react-redux';



const Index = (props:any) => {
    const navigate=useNavigate();
    // console.log(width)
    const dispatch=useDispatch()
    const[tenantId,setTenantId]=useState<string>();
    // useEffect(() => {
      
    //   setLoadingR(false)
     
    // }, [])
  
    const onSuccesss=():void=>{
    
      navigate('/dashboard/meetings',{replace:true})
    }
    
    const onFailed=():void=>{
    
    }
    
  
   
    const[currenPriod,setCurrentPeriod]=useState<object|null>({});
  
    // console.log(priodData)
  
  const userTenantsData=useSelector((state:any)=>state.loign.userInfo.userTenants);
  
  
  
      const initialClose=()=>{
          props.handleClose()
      }
  
  
    return (
     
      <Grid  >
     <Grid container  >
  
    <Grid item xs={12} >
    <Box margin={3} borderRadius={10}
   boxShadow={10} >
    <Box  padding={2}    >
    <Box >
    <Typography variant='h1' fontWeight={900} fontSize={'20px'} color={'red'}>
        راهنمای نرم افزار:
    </Typography>
    </Box>
    <Box>
    <Typography variant='h6' fontSize={'17px'} color={'block'} marginTop={2} >
     برای استفاده از نرم افزارOKRcoachبهتر است به ترتیب زیر از نرم افزار استفاده کنید:
    </Typography>
    </Box>
    <Box >
    <Typography variant='h6' fontSize={'17px'} color={'block'} marginLeft={2} marginTop={3}>
      1- در قدم اول با ورود به بخش "مدیریت شرکت" و گزینه "دعوت همکاران" یا"ثبت پرسنل" اقدام به دعوت همکاران خود نمایید.دقت کنید در هر بخش تنها نیاز است شماره تلفن همراه هر کدام از همکاران، نام و نام خانوادگی و سمت ایشان را وارد نمایید. سپس پیامکی برای هر کدام از دعوت شدگان ارسال خواهد شد که می توانند اقدام به ثبت نام نمایند.
    </Typography>
    </Box>     
      <Box>
      <Typography variant='h6' fontSize={'17px'} color={'block'} marginLeft={2} >
        حال برای ایجاد تیم مجدد به بخش مدیریت شرکت مراجعه کرده و در بخش تیم ها اقدام به ایجاد تیم نمایید. دقت کنید برای هر تیم نیاز به وارد کردن  نام آن تیم، تعیین مدیر و سپس تعیین اعضا تیم است. (از بین پرسنلی که دعوت شده اند و ثبت نام خود را تکمیل کرده اند)
      </Typography>
      </Box>
      <Box textAlign={'justify'}>
        <Typography variant='h6' fontSize={'17PX'} color={'block'} marginLeft={2} marginTop={1}>
            2-در قدم دوم می توانید به بخش مدیریت OKRها مراجعه کرده و اهداف و نتایج کلیدی مربوط به شرکت و تیم ها را وارد نمایید.
            دقت کنید بعد از تعریف هر هدف(O)می توانید تعدادی نتیجه کلیدی(KR)برای آن تعریف کنید. پیشنهاد می کنیم در هر تیم و در هر دوره زمانی حداکثر 5 هدف و برای هر هدف بین 3 الی 5 نتیجه کلیدی ایجاد نمایید تا تمرکز تیم افزایش یابد.
      </Typography>
      </Box>

  <Box textAlign={'justify'}  >
  <Typography variant='h6' fontSize={'17px'} color={'block'} marginLeft={2} marginTop={1}>
    3-در نهایت و سومین قدم با مراجعه به بخش"جلسات" می توانید به تعداد دلخواه جلسه ایجاد کرده و با ورود به هر جلسه اقدام به تعیین مقدار جدید نتیجه کلیدی و ثبت ارزیابی نمایید.دقت کنید امتیاز نتایج کلیدی عددی و درصدی بصورت خودکار محاسبه می شود.
    </Typography>
    </Box>
<Box textAlign={'justify'}>
<Typography variant='h6' fontSize={'17px'} color={'block'} marginLeft={2}>
نکته: لازم است در هر دوره زمانی با تعیین اهداف و نتایج کلیدی آن دوره و ایجاد جلسات خاص(در زمان های دلخواه)در آن دوره،اقدام به مدیریت چرخه OKRنمایید.
</Typography>
</Box>
</Box>
</Box>

    </Grid>
  
     </Grid>
      </Grid>
   
  
    )
  }
  
  export default Index