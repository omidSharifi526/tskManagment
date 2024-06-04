// import React from 'react';
// import{Grid,Box,Stack,} from '@mui/material';
// import Progress from '../Progress/Progress';
// import BackGround from '../Login/Statics/Imgs/bg3.png'

// import {ReactComponent as Img1} from '../Loading/svg/Group 4242492.svg';
// import {ReactComponent as Img2} from '../Loading/svg/MainLogoOKR.svg';
// import {ReactComponent as Img3} from '../Loading/svg/Group 4242492.svg';
// import {ReactComponent as OKRText} from '../Loading/svg/OKRText.svg';

// import mainLgo from '../Loading/svg/logo192.png'


// const Loading = ({setContentState,loading}:any) => {
//   return (
//     <Grid container sx={{
     
//        minHeight:'100vh',
//         overflowY:'auto',
//         backgroundImage:`url(${BackGround})`,
//         backgroundSize:'cover'
//     }}   >
// <Stack spacing={2} alignItems='center'  justifyContent='center'  sx={{width:'800px',height:'100%'}} mx="auto" >

// <Box width='100%' >
// <Box  mx={'auto'}  mt={10}  display={'flex'} justifyContent={'center'}>
// <Img2 onClick={()=>{
// // confirm('test')
// }} style={{width:'400px'}} />
// </Box>
// </Box>
// <Box>
//   <OKRText/>
// </Box>
// {/* <Box>
// <Img1/>
// </Box> */}

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
import {ReactComponent as Img2} from '../Loading/svg/MainLogoOKRR.svg';
import {ReactComponent as Img3} from '../Loading/svg/Group 4242492.svg';
import {ReactComponent as OKR} from '../Loading/svg/OKR.svg';
import {ReactComponent as Omid} from '../Loading/svg/Omid.svg';
import mainLgo from '../Loading/svg/logo192.png'


const Loading = ({setContentState,loading}:any) => {
  return (
    <Grid overflow={'hidden'} container sx={{
     
        minHeight:'100vh',
        overflowY:'auto',
        backgroundImage:`url(${BackGround})`,
        backgroundSize:'cover'
    }}   >
<Stack  alignItems='center'  justifyContent='center'  sx={{width:'555px',height:'100%'}}>

{/* <Box>
<Img1/>

</Box> */}

{/* <Box sx={{width:'150px',textAlign:'center'}} mt={2} >
{
loading && <Progress setContentState={setContentState} />
}

</Box> */}
<Box  display={'flex'} margin={5} flexDirection={'column'} justifyContent={'center'} marginRight={2} >
  <Omid/>
  </Box>

<Box display={'flex'} alignItems={'center'} marginTop={10} flexDirection={'column'}  justifyContent={'center'}>
 <a target='-blank' href='https://okrcoach.ir/'> <Img2/></a>
 <a target='-blank' href='https://okrcoach.ir/'> <OKR/></a>
</Box>


</Stack>     

    </Grid>
    
  )
}

export default Loading