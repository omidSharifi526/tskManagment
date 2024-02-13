import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Box, Grid, Typography, ListItem, IconButton, Tabs, Tab } from '@mui/material';
import { NavLink, Link } from 'react-router-dom';
import DyTreeView from '../../components/GlobalComponents/TreeView/TreeView';
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useSelector } from 'react-redux';
import { GridRowsProp } from '@mui/x-data-grid';
import { useDispatch } from 'react-redux';
import { resetRValuesR } from '../Meeting/MeetingsSlice/MeetingsSlice';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import LogoutIcon from '@mui/icons-material/Logout';
import CircularProgress from '@mui/material/CircularProgress';
import Timer from '../../components/GlobalComponents/MeetingTimer/MeetingTimer';
// import TeamStatus from './LComponents/TeamStatus/TeamStatus';
import { TabPanelProps } from './Interfaces/interfaces'

import ObjectiveKeyResults from './ObjectiveKeyResults/ObjectiveKeyResults';
// import DyTabs from '../../components/GlobalComponents/DyTabs/DyTabs';
const TeamStatus = lazy(() => import('./LComponents/TeamStatus/TeamStatus'));
const CompanyTeams = () => {
  const tenantName = useSelector((state: any) => state.meetings.profileName);
  const companyAuth = useSelector((state: any) => state.meetings.teamInfo.isCompany);
  const meetSelectedDate = useSelector((state: any) => state.meetings.meetSelectedDate);
  const objectivie = useSelector((state: any) => state.meetings.objectivie)
  // meetSelectedDate
  const dispatch = useDispatch();

  const [runTimer, setRunTimer] = useState<any>(false)



  const [tabIndex, setTabIndex] = useState(0);


  const initialRunTimer = () => {
    // console.log('run timer')
    setRunTimer(!runTimer)
  }




  const tabData = [
    {
      label: 'اهداف و نتایج کلیدی',
      content: <ObjectiveKeyResults />

    },
    {
      label: 'وضعیت تیم ها',
      content: <TeamStatus />
    },
    // Add more tabs as needed
  ];
  const rows: GridRowsProp = [
    {
      id: 1,
      teamName: 'تیم برتر',
      managerName: 'میلاد عبدی',
      targetCounts: 3,
      weight: '45%',
      rate: '50',
      evaluationPercentage: 50
    },
    {
      id: 2,
      teamName: 'تیم تدارکات',
      managerName: 'جواد جوادی',
      targetCounts: 6,
      weight: '65%',
      rate: '40',
      evaluationPercentage: 60
    },
    {
      id: 3,
      teamName: 'تیم پزشکی',
      managerName: 'دکتر قلب ',
      targetCounts: 3,
      weight: '85%',
      rate: '10',
      evaluationPercentage: 50
    },

  ];

  const clickInitial = () => {
    dispatch(resetRValuesR())

  }
  var date = new DateObject({ calendar: persian, locale: persian_fa });
  date.calendar = persian;
  date.locale = persian_fa; //جمعه 31 مرداد
  const now = date.format("dddd DD MMMM  ");


  function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 1 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Grid container  >
      <Grid item xs={12}  >
        <Grid container sx={{ bgcolor: '#F9F9F9' }} >
          <Grid item xs={12} md={1.5}    >
            <Box  >

              <ListItem onClick={clickInitial} sx={{ fontSize: '0.7 rem' }} component={Link} to={'/dashboard/meetings'}  >

                <Typography display={'flex'} color={'red'} variant='body1' sx={{ fontWeight: 600 }}  > <LogoutIcon/> &nbsp;&nbsp; خروج از جلسه      </Typography>
              </ListItem>
            </Box>

          </Grid>

          <Grid item xs={12} md={10.5}  >

            <Box display={'flex'} flexDirection={'row-reverse'}  >
              <Box display={'flex'} alignItems={'center'} pr={2}  >
                <Timer />

              </Box>
              <Box display={'flex'} alignItems={'center'} mt={0.5} >

                <Typography sx={{ color: '#00387C !important', fontSize: '12px' }} fontWeight={700} px={0.5}  >شرکت:&nbsp;&nbsp;{tenantName}</Typography>
                &nbsp;&nbsp;
                <Typography sx={{ color: '#00387C !important', fontSize: '12px' }} fontWeight={700} px={0.5}>جلسه:&nbsp;&nbsp;{meetSelectedDate}</Typography>
              </Box>
            </Box>
            <Box>

            </Box>

          </Grid>
        </Grid>









      </Grid>


      <Grid container   >

        <Grid item xs={12} md={1.5}   >

          <Box boxShadow={2} borderRadius={2} mt={2}  >
            <DyTreeView
              setTabIndex={setTabIndex}
            />
          </Box>

        </Grid>

        <Grid item xs={12} md={10.5}  >

          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="اهداف و نتایج کلیدی" {...a11yProps(0)} />
                {
                  companyAuth && objectivie?.length>0 && <Tab label="وضعیت تیم ها" {...a11yProps(1)} />
                }
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Suspense fallback={<Box width={'100%'} pt={5} textAlign={'center'} py={5}  ><CircularProgress/></Box>}  >
                <ObjectiveKeyResults />

              </Suspense>
            </CustomTabPanel>

            {
              companyAuth && <CustomTabPanel value={value} index={1}>
                <Suspense fallback={<Box width={'100%'} pt={5} textAlign={'center'} py={5}  ><CircularProgress/></Box>}>
                  <TeamStatus />
                </Suspense>
              </CustomTabPanel>
            }


          </Box>





        </Grid>

      </Grid>




    </Grid>
  )
}

export default CompanyTeams