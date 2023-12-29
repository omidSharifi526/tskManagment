import React, { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {setLoadingR} from '../../MeetingsSlice/MeetingsSlice'
import 'swiper/swiper-bundle.css';
// import 'swiper/components/navigation/navigation.min.css';
import { Box,Typography } from '@mui/material';
import{useGetPriodById} from '../../../../components/Login/Hooks/Index';
import { useSelector } from 'react-redux';
import { useGetAllMeetings } from '../../Hooks';
import {useDispatch} from 'react-redux'

import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]);


const MeetingSlider = () => {
  const dispatch=useDispatch();
  const profileTenantId=useSelector((state:any)=>state.meetings.profileTenantId);
  // console.log(profileTenantId)
  const [priodIds,setPriodIds]=useState({tenantId:profileTenantId,priodId:'8f4a58ba-ae5f-4c54-89a6-ac643f5ced68'});
  const priods=useSelector((state:any)=>state.meetings.periodList);
  const{isFetched,isLoading}=useGetAllMeetings(priodIds);



  useEffect(() => {
   
  if (isLoading) {
    dispatch(setLoadingR(true))
  } else {
    dispatch(setLoadingR(false))
  } 
  }, [isLoading,isFetched])
  


  // handleSlideChange
  const handleSlideChange = (swiper: any) => {
    const currentSlideIndex = swiper.activeIndex; // Get the active slide index
    const currentSlideData = priods[currentSlideIndex]; // Get data from the periods array

     
    setPriodIds((prev)=>({...prev,priodId:currentSlideData?.id}))
  };

 
  return (
   <Box width={'700px'} py={1} mx={'auto'} display={'flex'} >
    <Box  width={'200px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
   <Typography color={'blueviolet'} textAlign={'center'} fontSize={'0.7rem'}  >
   دوره قبل
    </Typography>
   </Box>
     <Swiper
     initialSlide={2}
     style={{textAlign:'center',fontSize:'2rem'}}
      spaceBetween={30}
      slidesPerView={1}
      navigation
      onRealIndexChange={()=>{
        console.log('hhhhi')
      }}
      // onSlideChange={(swiper) => {
      // console.log(swiper)
      // }}
      onSwiper={(swiper) => {
        console.log(swiper.realIndex)
      }}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
    >
      {/* <SwiperSlide  >
      <Typography fontWeight={700}  >
      پاییز 1402
      </Typography>
      </SwiperSlide>
      <SwiperSlide>
      <Typography fontWeight={700}  >
      زمستان 1402
      </Typography>
      </SwiperSlide>

      <SwiperSlide>
       <Typography fontWeight={700}  >
       بهار1403
      </Typography>
      </SwiperSlide> */}
      {
        priods && priods.map((prd:any,i:number)=>{
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



   
      {/* <div className="swiper-button-prev">
        <span>Previous</span>
      </div>
      <div className="swiper-button-next">
        <span>Next</span>
      </div> */}

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
