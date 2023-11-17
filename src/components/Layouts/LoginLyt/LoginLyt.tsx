import React, { Children } from 'react';
import{Box} from '@mui/material'

const LoginLyt = (props:any) => {
  return (
    <>
    <Box width={'100%'} height={'700px'} sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundImage: ' radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );'}}  >
        {
            props.children
        }
    </Box>
    </>
  )
}
// background-image: radial-gradient( circle farthest-corner at 16.5% 28.1%,  rgba(15,27,49,1) 0%, rgba(0,112,218,1) 90% )
export default LoginLyt