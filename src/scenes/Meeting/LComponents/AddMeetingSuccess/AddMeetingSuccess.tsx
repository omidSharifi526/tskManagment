import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import { ReactComponent as AddMeetingSuccessVector } from '../../Statics/Svg/AddMeetingSuccessVector.svg';


//    formName={'ارزیابی' }
// resetButton={true}
const AddMeetingSuccess = (props:any) => {
    let{formName,resetButton,resetForm}=props
    return (
        <Grid container   >
            <Grid item xs={12} my={1}  >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}   >
                    <Box textAlign={'center'}  >
                        <AddMeetingSuccessVector style={{ width: '150px' }} />
                    </Box>
                    <Box>
                        <Typography variant='body1'   >
                            اطلاعات {formName} شما با موفقیت ثبت شد.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12}   >
               {
                resetButton &&  <Box display={'flex'} justifyContent={'center'} rowGap={0.5} columnGap={1} >
                <Box   >
                    <DyButton
                        caption={`ایجاد ${formName} دیگر`}
                        color={'#00387C'}
                        onClick={() => { 
                            resetForm('add')
                        }}
                        disbled={false}
                        variant={'contained'}
                        bgColor={'#00387C'}
                 
                    />

                    {/* <Box mt={4}>
                        <DyButton
                            caption={'بستن'}
                            // color={'#00387C'}
                            // onClick={loginHandler}
                            disbled={false}
                            variant={'outlined'}
                            onClick={() => {
                                //   setConfrimForm('confirm')
                            }}
                        />
                    </Box> */}
                    
                </Box>

            
            </Box>
               }
            </Grid>
        </Grid>
    )
}

export default AddMeetingSuccess