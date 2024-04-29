import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useEffect,useState } from 'react';


export default function DYToastMessage({show,setShow,message}:any) {
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
  anchorOrigin={{vertical:'bottom',horizontal:'right'}}
       color={'danger'}
        open={show}
        
        autoHideDuration={6000}
        onClose={handleClose}
        message={message?message:'خطای سرور'}
        action={action}
      >
           <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
           {message?message:'خطای سرور'}
        </Alert>
        </Snackbar>
    </div>
  );
}
