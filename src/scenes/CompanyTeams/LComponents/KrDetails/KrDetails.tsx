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
     <Box display={'flex'}   justifyContent={'space-between'}  >

     <Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>مسئول:</Typography>
    <Typography>{data?.responsibleName}</Typography>
    </Box>
     {/* responsibleName */}
    {/* pointingSystemType*/}
    <Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>سیستم امتیازدهی:</Typography>
    <Typography>{data?.pointingSystemType}</Typography>
    </Box>
    <Box display={'flex'} alignItems={'center'} justifyContent={'start'}>
    <Typography fontWeight={800} px={1} color={'#00387C'}>نوع نتیجه:</Typography>
    <Typography>{data?.okR_KeyResultType}</Typography>
    </Box>
     </Box>
    </Grid>

{/* okR_KeyResultType
 */}
    </Grid>
    </>
  )
}

export default KrDetails