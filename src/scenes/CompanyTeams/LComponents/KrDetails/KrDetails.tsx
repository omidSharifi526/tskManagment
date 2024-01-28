import React from 'react';
import {Grid,Box,Typography} from '@mui/material'

const KrDetails = ({data}:any) => {
    console.log(data)
  return (
    <>
    <Grid container   >
        <Grid item xs={12} py={1}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
        <Typography fontWeight={800} px={1} color={'#00387C'}>شرح نتیجه:</Typography>
        <Typography>{data?.name}</Typography>
        </Box>
        </Grid>
    <Grid item xs={12} py={1}   >


     <Grid container  >

    <Grid item xs={12} md={4}   >
    <Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>مسئول:</Typography>
    <Typography>{data?.responsibleName}</Typography>
    </Box>
    </Grid>

   <Grid item xs={12} md={4}>
   <Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>سیستم امتیازدهی:</Typography>
    <Typography>{data?.pointingSystemType}</Typography>
    </Box>
   </Grid>


  <Grid item xs={12} md={4}>
  <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>نوع نتیجه:</Typography>
    <Typography>{data?.okR_KeyResultType}</Typography>
    </Box>
  </Grid>


  </Grid>


    </Grid>
    <Grid item xs={12} py={1} >
<Grid container rowGap={2}   >
<Grid item xs={12} md={12}     >
<Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>مقدارشروع:</Typography>
    <Typography>{data.startValue===null?'خالی':data?.startValue}</Typography>
    </Box>
</Grid>

<Grid item xs={12} md={12}     >
<Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>به 30% می رسد:</Typography>
    <Typography>{data.threeTenthsValue===null?'خالی':data?.threeTenthsValue}</Typography>
    </Box>
</Grid>
<Grid item xs={12} md={12}     >
<Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>به 70% می رسد:</Typography>
    <Typography>{data.threeTenthsValue===null?'خالی':data?.sevenTenthsValue}</Typography>
    </Box>
</Grid>
<Grid item xs={12} md={12}     >
<Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>به 100% می رسد:</Typography>
    <Typography>{data.oneValue===null?'خالی':data?.oneValue}</Typography>
    </Box>
</Grid>

<Grid item xs={12}   >
<Grid container   >
<Grid item xs={12} md={4}     >
<Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>وزن:</Typography>
    <Typography>{data.score===null?'خالی':data?.score}</Typography>
    </Box>
</Grid>
<Grid item xs={12} md={4}     >
<Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>تاریخ شروع:</Typography>
    <Typography>{data.startDate===null?'خالی':data?.startDate}</Typography>
    </Box>
</Grid>

<Grid item xs={12} md={4}     >
<Box display={'flex'} alignItems={'center'} justifyContent={'end'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>حداکثر تاریخ انجام:</Typography>
    <Typography>{data.forceEndDate===null?'خالی':data?.forceEndDate}</Typography>
    </Box>
</Grid>
</Grid>
</Grid>

<Grid item xs={12} md={12}     >
<Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>همسویی افقی:</Typography>
    <Typography>خالی</Typography>
    </Box>
</Grid>

<Grid item xs={12} md={12}     >
<Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>توضیحات:</Typography>
    <Typography>{data.description===null?'خالی':data?.description}</Typography>
    </Box>
</Grid>





</Grid>
    </Grid>

{/* okR_KeyResultType
 */}
    </Grid>
    </>
  )
}

export default KrDetails