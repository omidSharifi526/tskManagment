import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import DyButton from '../../../../components/GlobalComponents/DyButton/DyButton';
import { ReactComponent as AddMeetingSuccessVector } from '../../Statics/Svg/AddMeetingSuccessVector.svg';

const AddMeetingSuccess: React.FC = () => {
    return (
        <Grid container   >
            <Grid item xs={12}   >
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}   >
                    <Box textAlign={'center'}  >
                        <AddMeetingSuccessVector style={{ width: '150px' }} />
                    </Box>
                    <Box>
                        <Typography variant='body1'   >
                            اطلاعات جلسه شما با موفقیت ثبت شد.
                        </Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12}   >
                <Box display={'flex'} justifyContent={'center'} columnGap={2} >
                    <Box   >
                        <DyButton
                            caption={'ایجاد جلسه دیگر'}
                            color={'#00387C'}
                            onClick={() => { }}
                            disbled={false}
                            variant={'contained'}
                            bgColor={'#00387C'}
                        // type={'submit'}
                        />
                    </Box>

                    <Box>
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
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default AddMeetingSuccess