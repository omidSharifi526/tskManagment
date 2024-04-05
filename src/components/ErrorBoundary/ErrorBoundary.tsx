import React, { useState, useEffect } from 'react';
import {Box} from '@mui/material'

function ErrorBoundary({ children }:any) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      // Log the error or send it to an error tracking service
      console.error('Error occurred within the ErrorBoundary');
    }
  }, [hasError]);

  if (hasError) {
    return <>
    <Box>
    خطایی رخ داده است..!!
    </Box>
    </>;
  }

  return children;
}


export default ErrorBoundary;