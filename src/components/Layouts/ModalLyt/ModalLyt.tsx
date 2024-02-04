import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import {Typography,IconButton,Grid} from '@mui/material';
import Close from '@mui/icons-material/Close';
import CircularProgress from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
 borderRadius:'10px',
  boxShadow: 24,
};

export default function ModalLyt({showModal,setShowModal,title,children,KRHLoading}:any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setShowModal(false);

  const initOnClose=()=>{
    handleClose()
  }

  return (
    <>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={showModal}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={showModal}>
      
          <Box sx={style}>
          <Grid container sx={{backgroundColor:'#F9F9F9',p:2}}>
           <Grid item xs={12} mb={1} >
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
           <Box>
            <Typography  color={'#00387C'} variant='body1'  >{title}</Typography>
           </Box>
           <Box>
            <IconButton size={'small'} onClick={initOnClose}><HighlightOffIcon/></IconButton>
           </Box>
            </Box>
           </Grid>
           <Grid item xs={12} sx={{backgroundColor:'#FFFFFF',borderRadius:2,pt:1}}  >
          {
            children
          } 
           </Grid>
          </Grid>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
