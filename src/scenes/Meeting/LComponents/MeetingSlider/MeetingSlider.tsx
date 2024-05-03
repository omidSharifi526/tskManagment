import React, { useState,useEffect, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {setLoadingR} from '../../MeetingsSlice/MeetingsSlice'
import 'swiper/swiper-bundle.css';
// import 'swiper/components/navigation/navigation.min.css';
import { Box,Typography } from '@mui/material';
import{useGetPriodById} from '../../../../components/Login/Hooks/Index';
import { useSelector } from 'react-redux';
import { useGetAllMeetings } from '../../Hooks';
import {useDispatch} from 'react-redux';
import {setPriodIdR} from '../../MeetingsSlice/MeetingsSlice';
import CircularProgress from '@mui/material/CircularProgress';
import { useNavigate } from 'react-router-dom';

import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);


const MeetingSlider = () => {
  const navigate=useNavigate();
  // const dispatch=useDispatch();
  const dispatch=useDispatch();

  // const priods=useSelector((state:any)=>state.meetings.periodList);
 
  
  


  const profileTenantId=useSelector((state:any)=>state.meetings.profileTenantId);
  // console.log(profileTenantId)
  


const onSuccesss=():void=>{
  
  // navigate('/dashboard/meetings',{replace:true})
}

const onFailed=():void=>{

}






  const{data:perData,isLoading:perLoading,isError:periodError,isFetched:getPeriodFetched,refetch:getPeriodAgain}=useGetPriodById(profileTenantId,onSuccesss,onFailed);
  // console.log(perData);
  const[currentPriod,setCurrentPriod]=useState<any>(perData?.map((e:any) => e.isCurrent).indexOf(true));
  const currentPriodId=perData?.find((priod:any)=>priod.isCurrent).id;
  const[ids,setIds]=useState<any>(null)
  const{isFetched,isLoading}=useGetAllMeetings(ids);
  const[currentSlide,setCurrentSlide]=useState<undefined|number>(undefined)






  useEffect(() => {
   
  if (isLoading) {
    dispatch(setLoadingR(true))
  } else {
    dispatch(setLoadingR(false))
  } 
  }, [isLoading,isFetched]);



// aval in
  // useEffect(() => {
    
  //   getPeriodAgain()
  //   setCurrentSlide(undefined)
  //   // console.log(profileTenantId)
  //   // dispatch(setLoadingR(true))
  
  // }, [profileTenantId])

  useEffect(() => {
if (perData) {
  const currentPriodId=perData?.find((priod:any)=>priod.isCurrent);
  console.log(currentPriodId)
  dispatch(setPriodIdR(currentPriodId))
}

  }, [perData])
  
  




  


  
  


  // handleSlideChange
  const handleSlideChange = (swiper: any) => {
   
    const currentSlideIndex:any = swiper.activeIndex; // Get the active slide index
    const currentSlideData:any = perData?perData[currentSlideIndex]:null; // Get data from the periods array
    if (!periodError) {
      let{id,name}=currentSlideData;
      // console.log(id,name)
      let priodDetail={
        id:id,
        name:name
      }
      dispatch(setPriodIdR(priodDetail))
      // setIds((prev:any)=>({tenantId:profileTenantId,priodId:id}));
      dispatch(setLoadingR(true))
    }
  };
  if (perLoading) {
    return <Box width={'100%'} py={4} textAlign={'center'}  >
      <CircularProgress sx={{color:'blue'}}  />
    </Box>
  }

  if (periodError) {
    return <Box width={'100%'} py={4} textAlign={'center'} >
      <Typography textAlign={'center'} color={'red'} variant='caption' >
        متاسفانه خطایی رخ داده است
      </Typography>
    </Box>
  }



 
  return (
   <Box width={'700px'} py={1} mx={'auto'} display={'flex'} >

      <Box  width={'200px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Typography color={'blueviolet'} textAlign={'center'} fontSize={'0.7rem'}  >
      دوره قبل
       </Typography>
      </Box>
        <Swiper
        initialSlide={perData?.findIndex(item=>item.isCurrent)}
        style={{textAlign:'center',fontSize:'2rem'}}
         spaceBetween={30}
         slidesPerView={1}
         navigation
         onRealIndexChange={()=>{
           // console.log('hhhhi')
         }}
   
         onSwiper={(swiper) => {
           // console.log(swiper.realIndex)
         }}
         onSlideChange={(swiper) => handleSlideChange(swiper)}
       >
       
         {
           perData && perData.map((prd:any,i:number)=>{
             return (
               <SwiperSlide key={i}  >
               <Typography fontWeight={700}  >
              {
               prd?.name
              }
              </Typography>
              </SwiperSlide>
             )
           })
         }
   
   
   
      
     
   
       </Swiper>
       <Box  width={'200px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Typography color={'blueviolet'} textAlign={'center'} fontSize={'0.7rem'}  >
      دوره بعد
       </Typography>
      </Box>
      
   </Box>
  );
};

export default MeetingSlider;
