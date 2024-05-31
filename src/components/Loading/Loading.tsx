// import React from 'react';
// import{Grid,Box,Stack,} from '@mui/material';
// import Progress from '../Progress/Progress';
// import BackGround from '../Login/Statics/Imgs/bg3.png'

// import {ReactComponent as Img1} from '../Loading/svg/Group 4242492.svg';
// import {ReactComponent as Img2} from '../Loading/svg/MainLogoOKR.svg';
// import {ReactComponent as Img3} from '../Loading/svg/Group 4242492.svg';
// import {ReactComponent as OKRText} from '../Loading/svg/OKRText.svg';
// import {ReactComponent as Omid} from '../Loading/svg/trace.svg';
// import mainLgo from '../Loading/svg/logo192.png'


// const Loading = ({setContentState,loading}:any) => {
//   return (
//     <Grid container sx={{
     
//        minHeight:'100vh',
//         overflowY:'auto',
//         backgroundImage:`url(${BackGround})`,
//         backgroundSize:'cover'
//     }}   >
// <Omid style={{width:'500px', height:'400px'}}/>
// <Stack spacing={2} alignItems='center'  justifyContent='center'  sx={{width:'150px',height:'150px'}} mx="auto" >
// <Box width='150px' >
// <Box  mx={'auto'}  mt={8}  display={'flex'} justifyContent={'center'}>

// <Img2 onClick={()=>{
// // confirm('test')
// }} style={{width:'200px'}} />
// </Box>
// <OKRText style={{width:'100px', height:'100px'}}/>
// </Box>

// <Box sx={{width:'150px',textAlign:'center'}} mt={2} >
// {
// loading && <Progress setContentState={setContentState} />
// }

// </Box>



// {/* <Box width='100%'  >
//    <Box width='100%' display='flex' flexDirection='row-reverse' >
//    <Img3 style={{width:'150px',height:'150px'}}/>
//    </Box>
// </Box> */}
// </Stack>
        

//     </Grid>
//   )
// }

// export default Loading
//////////////////////////////////////////////////////////////////////////////////////////
import React from 'react';
import{Grid,Box,Stack,} from '@mui/material';
import Progress from '../Progress/Progress';
import BackGround from '../Login/Statics/Imgs/bg3.png'

import {ReactComponent as Img1} from '../Loading/svg/Group 4242492.svg';
import {ReactComponent as Img2} from '../Loading/svg/MainLogoOKR.svg';
import {ReactComponent as Img3} from '../Loading/svg/Group 4242492.svg';
import {ReactComponent as OKRText} from '../Loading/svg/OKRText.svg';

import mainLgo from '../Loading/svg/logo192.png'


const Loading = ({setContentState,loading}:any) => {
  return (
    <Grid container sx={{
     
       minHeight:'100vh',
        overflowY:'auto',
        backgroundImage:`url(${BackGround})`,
        backgroundSize:'cover'
    }}   >
<Stack spacing={2} alignItems='center'  justifyContent='center'  sx={{width:'800px',height:'100%'}} mx="auto" >

<Box width='100%' >
<Box  mx={'auto'}  mt={10}  display={'flex'} justifyContent={'center'}>
<Img2 onClick={()=>{
// confirm('test')
}} style={{width:'400px'}} />
</Box>
</Box>
<Box>
  <OKRText/>
</Box>
{/* <Box>
<Img1/>
</Box> */}

<Box sx={{width:'150px',textAlign:'center'}} mt={2} >
{
loading && <Progress setContentState={setContentState} />
}

</Box>



{/* <Box width='100%'  >
   <Box width='100%' display='flex' flexDirection='row-reverse' >
   <Img3 style={{width:'150px',height:'150px'}}/>
   </Box>
</Box> */}
</Stack>
        

    </Grid>
  )
}

export default Loading