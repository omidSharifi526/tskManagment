import React,{useEffect,useState} from 'react';
import { useGetUserProfileDetail } from '../../Hooks';
import { useSelector } from 'react-redux';
import { Box,Grid,Typography } from '@mui/material';
import {CircularProgress} from '@mui/material';
import ImageSelector from '../../../../components/GlobalComponents/ImageSelector/ImageSelector';
import PersonOutlineOutlined from '@mui/icons-material/PersonOutlineOutlined';
import {ReactComponent as ProfilVector} from '../../StaticData/Vectors/ProfileVector.svg';
import { useGetPersonPicture } from '../../Hooks';
import DYToastMessage from '../../../../components/GlobalComponents/DyToastMessage/DYToastMessage';
// {
//     "name": "امیر ایمن پور",
//     "firstName": "امیر",
//     "lastName": "ایمن پور",
//     "phoneNumber": "09121223615",
//     "registerDate": "1402/08/28",
//     "managerName": "امیر ایمن پور",
//     "companyName": "OKRcoach",
//     "roleName": "مدیر",
//     "teamName": "شرکت اول, تقویت روحیه تیم, تیم توسعه, تیم تولید, طراحی, تیم برنامه ریزی, تیم بالا, تیم قوی, تیم تداررکات, تیم پشتیبانی, تیم ارزیابی, تیم فروش, تیم فنی, تتت",
//     "teamSubCount": "6",
//     "tenantId": "7758033c-c44d-4730-b99b-4e7205635312",
//     "id": "00000000-0000-0000-0000-000000000000",
//     "createById": null,
//     "createByName": null,
//     "createDate": null,
//     "lastModifiedId": null,
//     "lastModifiedName": null,
//     "lastModifiedDate": null,
//     "activated": true,
//     "pageIndex": 1,
//     "pageSize": 50,
//     "searchTerm": ""
// }

const Profile = () => {
    const[showToastMessge,setShowToastMessage]=useState(null)
    const[profileDetials,setProfileDetails]=useState<any>(null)
    const personId=useSelector((state:any)=>state.loign.personId);
    const{data:personPictureData}=useGetPersonPicture(personId);
    const[imgSrc,setImgSrc]=useState<any>(null);
    const[changeImgData,setChangeImgData]=useState<any>(null)
    const tenantId:string=useSelector((state:any)=>state.meetings.profileTenantId);

    // console.log(personId);
    let body:any={
        tenantId:tenantId,
        personId:personId

    };
   
    const{data:personDetData,isLoading}=useGetUserProfileDetail(body);

    
  useEffect(() => {
    
  if (personPictureData) {
    let{pictureBase64String}=personPictureData;
    setImgSrc(pictureBase64String)
  }
    }, [personPictureData])


    
   
    useEffect(() => {
      
    if (personDetData) {
        let{name,
            phoneNumber,
            roleName,
            teamName,
            companyName,
            managerName,
            registerDate

        }=personDetData;
        let details={
            name:name,
            phoneNumber:phoneNumber,
            roleName:roleName,
            teamName:teamName,
            companyName:companyName,
            managerName:managerName,
            registerDate:registerDate
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
   <Box px={4} py={1}>
    <Typography variant='h4' fontWeight={700}  >
    پروفایل
    </Typography>
   </Box>

   <Box sx={{bgcolor:'#E5F1FF',borderRadius:5,p:3,mx:'auto'}} width={'98%'}  >
    <Box display={'flex'} justifyContent={'start'}  >
    <Box sx={{p:1}} width={'10%'}  >
    <img src={imgSrc} width={'70px'} 
    style={{borderRadius:'50%',boxShadow:'20px'}}
     />
    </Box>
    <Box width={'60%'} rowGap={2}   >
         <Box mt={1}  >
            <Typography variant='h5' fontWeight={600}  >{profileDetials?.name}</Typography>
         </Box>
         <Box mt={1}>
            <Typography  variant='h6' fontWeight={400}>{profileDetials?.phoneNumber}</Typography>
         </Box>
    </Box>
    <Box >
        <ImageSelector setChangeImgData={setChangeImgData} setShowToastMessage={setShowToastMessage} />
    </Box>
    </Box>
   </Box>
       
     
    </Grid>

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

export default Profile