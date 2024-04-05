import React, { useState,useEffect, useLayoutEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import{Box,Typography} from '@mui/material'
import 'swiper/swiper-bundle.css';
import CircularProgress from '@mui/material/CircularProgress';

type periodSliderProps = {
    // tenantId?: string;
    setActiveIndex: (tenantId:number) => void;
    slideData?:any;
    dataLoading?:boolean;
    activeIndex?:number
  };


  const PeriodSlider =function({slideData,setActiveIndex,dataLoading,activeIndex}:periodSliderProps){
    // console.log(slideData)
    const data=[
        {
            id:'1'
        }
        ,
        {
            id:'2'
        }
    ]

    const handleSlideChange=(sw:any)=>{
    // console.log(sw.activeIndex)
    setActiveIndex(sw.activeIndex)
    }

    if (dataLoading) {
        return <Box width={'100%'} py={4} textAlign={'center'}  >
          <CircularProgress sx={{color:'blue'}}  />
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
      initialSlide={activeIndex||4}
      style={{textAlign:'center',fontSize:'2rem'}}
       spaceBetween={30}
       slidesPerView={1}
       navigation
       onRealIndexChange={()=>{
         // console.log('hhhhi')
       }}
       // onSlideChange={(swiper) => {
       // console.log(swiper)
       // }}
       onSwiper={(swiper) => {
         // console.log(swiper.realIndex)
         console.log(swiper)
        //  setPriodId()
       }}
       onSlideChange={(swiper) => handleSlideChange(swiper)
    }
     >
     
       {
         slideData && slideData.map((prd:any,i:number)=>{
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
}

export default PeriodSlider