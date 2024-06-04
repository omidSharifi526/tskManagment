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
    
{/*      
     <Grid item xs={12} >
     <Box mx={'auto'}  >
      <Typography fontSize={'25px'} color={'black'} variant='h6' textAlign={'center'}  >لطفا اکانت مورد نظر خود را انتخاب کنید.</Typography>
     </Box>
     </Grid>
         */}
  
     <Grid item xs={12} >
     <Box  padding={2}  margin={2}  >
      <Box>
      <Typography variant='h1' fontSize={'25px'} color={'red'}>
     معرفی ما:
      </Typography>
      </Box>
     <Box marginTop={2}>
      <Typography variant='h6' fontSize={'18px'} color={'block'}  >
     برند OKRcoach یکی از برند های شرکت داده بینش خردمند است.مجموعه OKRcoach ارائه دهنده خدمات تخصصی حوزه OKRدر ایران است و تا به حال افتخار داشته ایم در شرکت های مختلف و بزرگ ایرانی ،این روش را با موفقیت پیاده سازی نماییم. 
     (<a target='-blank' href='https://okrcoach.ir/customers'> لیست مشتریان</a>)
     </Typography>
     </Box>
     <Box >
     <Typography variant='h6' fontSize={'18px'} color={'block'} marginTop={1}>
      یکی از مشکلاتی که ما در پیاده سازیOKR .داشتیم استفاده از یک نرم افزار مناسب برای شرکت های ایرانی بود تا بتوانیم چرخهOKR را بصورت بهینه ای پیاده سازی کنیم. طی دو نسل به نرم افزار حاضر رسیده ایم، در اولین قدم نرم افزاری ویندوزی روانه 
      بازار شد و در نسل دوم نسخه موبایل و وب که در حال حاضر در حال استفاده از آن هستید به بازار عرضه شده است. 
      </Typography>
      </Box>     
     
      
      <Box>
      <Typography variant='h6' fontSize={'18px'} color={'block'} marginTop={1}> 
      نقطه قوت این نرم افزار این است که تمام ویژگی های موجود بر مبنای تجربیات علمی 
      و نیاز های واقعی مشتریان طراحی و پیاده سازی شده است و ما علت موفقیت خود را تمرکز بر این موضوع می دانیم.
      </Typography>
      </Box>
      <Box textAlign={'justify'} marginTop={1}>
        <Typography variant='h6' fontSize={'18PX'} color={'block'}>
      مجموعه OKRcoach در سه زمینه فعالیت می کند:
      <Box margin={2} >1-مربیگری OKRو کمک به شرکت ها جهت پیاده سازی صحیح روش OKRجهت بهره برداری  حداکثری از مزایای این روش </Box>
      <Box margin={2} > 2-ارائه نرم افزار تخصصی مدیریت چرخهOKRتحت عنوانOKRcoach </Box>
      <Box margin={2} > 3-ارائه آموزش های تخصصی شرکتی و عمومی مرتبط با OKRو مهارت های نرم مرتبط با این حوزه</Box>
      </Typography>
      </Box>
      <Box>
  <Box textAlign={'justify'}  >
  <Typography variant='h6' fontSize={'18px'} color={'block'} marginTop={1}>
    لطفا برای ارتباط با ما از روش های زیر اقدام نمایید:
   <Box margin={2}>1-سایتOKRcoach</Box> 
   <Box margin={2}> 2-ارتباط با پشتیبان مجموعه در شبکه های اجتماعی با شماره تلفن همراه 09370687641</Box>
   <Box margin={2}> 3-مراجعه به باشگاه مشتریان به آدرس:   <a target='-blank' href='https://panel.myokr.ir'>https://panel.myokr.ir</a></Box>

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