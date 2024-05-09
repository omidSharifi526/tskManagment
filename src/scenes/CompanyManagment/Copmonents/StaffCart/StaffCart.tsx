import React from 'react';
import { Grid,Box, Typography, Button } from '@mui/material';
import {ReactComponent as StaffVector} from '../../StaticData/Vectors/staffVector.svg';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const StaffCart = (props:any) => {
    let{item}=props;
    let{name,jobTypeName,activated}=item;
  return (
    <Box width={'396px'} m={1} height={'130px'} borderRadius={3} boxShadow={4}  >
        <Grid container px={1} rowGap={4} >
        <Grid item xs={2}   >
    <Box  display={'flex'} 
    flexDirection={'column'} 
    justifyContent={'center'} 
    pt={2}
    
    >
        <Box 
        py={1}
    textAlign={'center'}
    display={'flex'}
    alignItems={'center'}
    flexDirection={'column'}
    justifyContent={'cenetr'}

    >
        <StaffVector fontSize='large'  />
        </Box>
    </Box>
         </Grid>
         <Grid item xs={10} px={1} >
         <Grid container   >
        <Grid item xs={8} height={'45px'} >
        <Box  p={1} pt={2}   >
            <Typography color={'#001733'} fontWeight={700}  >
            {
            name
            }
            </Typography>
        </Box>
        </Grid>
        <Grid item xs={4} height={'45px'} >
      <Box py={1}>
        <Button variant='text'  >
            ویرایش
        </Button>
      </Box>
        </Grid>
        <Grid item xs={7} height={'52px'}  >
        <Box height={'100%'} p={1} display={'flex'} alignItems={'end'} justifyContent={'start'}>
            <Typography fontSize={'0.7rem'} color={'#001733'} fontWeight={600}>
                {
                 jobTypeName
                }
            </Typography>
        </Box>
        </Grid>
        <Grid item xs={5}   >
     
            <Box pt={2}  height={'60px'} >
            <Box   height={'80%'} width={'100%'}
                    bgcolor={'#D5f7D4'} px={4} borderRadius={2} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                        <Typography fontSize={'0.80rem'} fontWeight={activated?900:400} color={activated?'green':'red'}  >
                            {
                                activated?'فعال':'غیرفعال'

                            }</Typography>
                    </Box>
            </Box>
     
        </Grid>
         </Grid>
         </Grid>
   
        </Grid>
    </Box>
  )
}
