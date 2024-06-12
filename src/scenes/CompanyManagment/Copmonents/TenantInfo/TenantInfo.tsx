import React,{useEffect,useState} from 'react';
import { useGetTenantInfo} from '../../Hooks';
import { useSelector } from 'react-redux';
import { Box,Grid,Typography } from '@mui/material';
import {CircularProgress} from '@mui/material';
import TenantImageSelector from '../../../../components/GlobalComponents/ImageTenantSelector/ImageTenantSelector';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import {ReactComponent as ProfilVector} from '../../StaticData/Vectors/ProfileVector.svg';
import { useGetTenantPicture } from '../../Hooks';
import DYToastMessage from '../../../../components/GlobalComponents/DyToastMessage/DYToastMessage';


const TenantInfo = () => {
    const[showToastMessge,setShowToastMessage]=useState(null)
    const[profileDetials,setProfileDetails]=useState<any>(null)
    const tenantId:string=useSelector((state:any)=>state.meetings.profileTenantId);
    const{data:personPictureData}=useGetTenantPicture(tenantId);
    const[imgSrc,setImgSrc]=useState<any>(null);
    const[changeImgData,setChangeImgData]=useState<any>(null)
    const personId=useSelector((state:any)=>state.loign.personId);
    // console.log(personId);
    let body:any={
        tenantId:tenantId,
        personId:personId
    };
   
   //  const{data:personDetData,isLoading}=useGetUserProfileDetail(body);
    const{data:personDetData,isLoading}=useGetTenantInfo(body);

    
  useEffect(() => {
    
  if (personPictureData) {
    let{pictureBase64String}=personPictureData;
    setImgSrc(pictureBase64String)
  }
    }, [personPictureData])


    
   
    useEffect(() => {
      
    if (personDetData) {
        let{name,
            code,
            mission,

        }=personDetData;
        let details={
            name:name,
            code:code,
            mission:mission,
        }

        // setProfileDetails(detias)
        setProfileDetails(details)
    }
     
    }, [personDetData])


    


    


    if (isLoading) {
        return  <Box py={5} textAlign={'center'} >
        <CircularProgress/>
        </Box>
    }



  return (
    <Grid container  >
    <Grid item xs={12}  >

   <Box sx={{bgcolor:'#E5F1FF',borderRadius:5,p:1,mx:'auto'}} width={'99%'}  >
    <Box display={'flex'} justifyContent={'start'}  >
    <Box width={'80%'} margin={1} >
    <img src={imgSrc} width={'200px'}  
    style={{borderRadius:'10%',boxShadow:'20px'}}
     />
    </Box>
    
    <Box >
        <TenantImageSelector setChangeImgData={setChangeImgData} setShowToastMessage={setShowToastMessage} />
    </Box>
    
    </Box>
    <Box width={'60%'} rowGap={2} margin={1}   >
         <Box mt={1} display={'flex'} flexDirection={'row-reverse'} justifyContent={'start'}> 
            <Typography fontSize={'13px'} variant='h6' fontWeight={400}  >{profileDetials?.name}</Typography>
            <Typography fontSize={'14px'} variant='h6' fontWeight={600} > نام شرکت:</Typography>
         </Box>
         <Box mt={2} display={'flex'} flexDirection={'row-reverse'} justifyContent={'start'} > 
            <Typography fontSize={'11x'}   variant='h6' fontWeight={300}>{profileDetials?.code}</Typography>
            <Typography fontSize={'14px'} variant='h6' fontWeight={600}>کد دعوت:</Typography>
         </Box>
         <Box mt={2}  display={'flex'} flexDirection={'row-reverse'} justifyContent={'start'}> 
            <Typography fontSize={'13px'}   variant='h6' fontWeight={400}>{profileDetials?.mission}</Typography>
            <Typography fontSize={'14px'} variant='h6' fontWeight={600}>ماموریت:</Typography>
         </Box>
    </Box>
   </Box>
       
     
    </Grid>
{/* 
    <Grid item xs={12}  >
    <Box display={'flex'} 
    p={3}
    flexDirection={'column'}
     alignItems={'start'} 
    justifyContent={'start'} 
    rowGap={1}
    >
     <Box>
        <Typography variant='body1'  fontWeight={900} >
        اطلاعات سازمانی
        </Typography>
     </Box>

     <Box display={'flex'}  >
     <Typography variant='body2' fontWeight={700}  >نقش:</Typography>
        <Typography>
         { profileDetials?.roleName}
        </Typography>
     </Box>
     <Box display={'flex'}>
        <Typography variant='body2' fontWeight={700}>تیم:</Typography>
        <Typography  variant='button' >{profileDetials?.teamName}</Typography>
     </Box>
     <Box display={'flex'}>
        <Typography variant='body2' fontWeight={700}>نام شرکت:</Typography>
        <Typography variant='button'>{profileDetials?.companyName}</Typography>
     </Box>
     <Box display={'flex'}>
        <Typography variant='body2' fontWeight={700}>نام مدیر:</Typography>
        <Typography variant='button'>{profileDetials?.managerName}</Typography>
     </Box>

    <Box sx={{mt:3}}>
        <Typography variant='body1'  fontWeight={900}>
        اطلاعات کاربری
        </Typography>
     </Box>
     <Box display={'flex'}>
        <Typography>تاریخ عضویت:</Typography><Typography>{profileDetials?.registerDate}</Typography>
     </Box>
    </Box>
    
    </Grid>
    <Grid item xs={12}  >
   <Box display={'flex'} flexDirection={'row-reverse'}  >
    <ProfilVector/>
   </Box>
   </Grid>
    */}
   {
      showToastMessge && <DYToastMessage
      isSuccess={true}
      message={'باموفقیت انجام شد'}
      setShow={setShowToastMessage}
      show={showToastMessge}
      
      />
      
      
    }
    </Grid>
  )
}

export default TenantInfo