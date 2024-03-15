import React, { useRef, useState } from 'react';
import { Typography, Box } from '@mui/material';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-creative';
// Import Swiper styles


import 'swiper/swiper-bundle.css';
import { EffectCreative } from 'swiper';

// import required modules


export default function App() {
    return (
        <>


            <Swiper
                grabCursor={true}
                effect={'creative'}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        translate: [0, 0, -800],
                        rotate: [180, 0, 0],
                    },
                    next: {
                        shadow: true,
                        translate: [0, 0, -800],
                        rotate: [-180, 0, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper4"
            >


                <SwiperSlide>
                    <Box height={'60px'} px={3} display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}  >
                        <Typography fontSize={'20px'}  >
                            Developp
                        </Typography>
                    </Box>
                </SwiperSlide>

                <SwiperSlide>
                    <Box height={'60px'} px={3}  display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}  >
                        <Typography fontSize={'20px'}  >
                            Finance
                        </Typography>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box height={'60px'} px={3}  display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}  >
                        <Typography fontSize={'20px'}  >
                            Production
                        </Typography>
                    </Box>
                </SwiperSlide>
                <SwiperSlide>
                    <Box height={'60px'} px={3}  display={'flex'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}  >
                        <Typography fontSize={'20px'}  >
                            Mearketing
                        </Typography>
                    </Box>
                </SwiperSlide>


            </Swiper>


        </>
    );
}
