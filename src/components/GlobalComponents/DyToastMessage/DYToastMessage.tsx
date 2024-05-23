import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useEffect,useState } from 'react';

interface ToastFace{
  show:boolean,
  message:string|null,
  isSuccess:boolean|null,
  setShow:(show:boolean) => void
}


export default function DYToastMessage({show,setShow,message,isSuccess}:ToastFace) {
    // console.log(show);
  const [open, setOpen] = React.useState(show);

  useEffect(() => {
    
// console.log(message)

  
  }, [message])
  



  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setShow(false)
  };

  const action = (
    <React.Fragment>

      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div>
      <Snackbar
  anchorOrigin={{vertical:'bottom',horizontal:'left'}}
       color={isSuccess?'success':'error'}
        open={show}
        
        autoHideDuration={6000}
        onClose={handleClose}
        message={message?message:'خطای سرور'}
        action={action}
      >
           <Alert onClose={handleClose} severity={isSuccess?'success':'error'} sx={{ width: '100%' }}>
           {message?message:'خطای سرور'}
        </Alert>
        </Snackbar>
    </div>
  );
}
