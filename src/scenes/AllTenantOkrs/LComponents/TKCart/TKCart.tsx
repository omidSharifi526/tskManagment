import React,{useEffect,useState} from 'react';
import { Grid,Box,Typography,IconButton,Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DyLinearProgress from '../../../../components/GlobalComponents/DyLinearProgress/DyLinearProgress';
import { useSelector } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend,Tooltip, ResponsiveContainer } from 'recharts';
import shadows from '@mui/material/styles/shadows';
import {ChartAxis, ChartBullet } from '@patternfly/react-charts';

const TKCart = (props:any) => {
    const navigate=useNavigate()
    let{kr}=props || {};
    let{name,meetValue,score,three,seven ,responsibleName,lineChart,realMeetValue,keyResultType,pointingSystemType
      , threeValue, sevenValue, oneValue}=kr || {};

  return (  
    
    <Grid container boxShadow={4} bgcolor={'white'} borderRadius={4} p={2} >
        <Grid item xs={12}  >
        <Grid container >
        <Grid item xs={12}  >
        
        <Box 
        display={'flex'} 
        width={'100%'}
        alignItems={'start'}
         
        minHeight={'100px'} 
        justifyContent={'space-between'}  > 
        <Box display={'flex'}>
        {/* <Oflag fontSize={'0.9rem'}  /> */}
        <Typography px={1} variant='body1' fontWeight={900} >
            نتیجه: {
                name
            }
        </Typography>
        </Box>
        </Box>
        
        </Grid>
      </Grid>
        </Grid>
        <Grid xs={12}  >
        <Box width={'100%'} marginLeft={1} display={'flex'} alignItems={'center'} justifyContent={'start'}>
        <Typography px={1} variant='button' fontWeight={900} color={'black'} >مسئول: {
            responsibleName} </Typography>
            {/* }-{keyResultType}-{pointingSystemType}-{realMeetValue}</Typography> */}
        </Box>
        </Grid>

        {/* <Grid container item  xs={16} justifyContent="center" width={'400px'} height={'300px'}> */}
        {/* <IgrBulletGraph
                     height="80px"
                     width="100%"
                     minimumValue={0}
                     maximumValue={100}

                     value={50}
                     valueBrush="DodgerBlue"
                     valueStrokeThickness={1}
                     valueInnerExtent={0.5}
                     valueOuterExtent={0.65}

                     targetValue={80}
                     targetValueBreadth={10}
                     targetValueBrush="LimeGreen"
                     targetValueOutline="LimeGreen"
                     targetValueStrokeThickness={1}
                     targetValueInnerExtent={0.3}
                     targetValueOuterExtent={0.85}

                     scaleBackgroundBrush = "#e5e5e5"
                     scaleBackgroundOutline = "#e5e5e5"
                     backingBrush = "#f7f7f7"
                     backingOutline = "#bfbfbf"
                     tickStrokeThickness = {1.5} /> */}
          {/* </Grid> */}

        <Grid container item  xs={16} justifyContent="center" width={'600px'} height={'100px'}>
        {/* <ChartBullet
      ariaDesc={name}
      ariaTitle={name}
      comparativeWarningMeasureData={[{ name: 'Warning', y: 88 }]}
      constrainToVisibleArea
      height={150}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      legendItemsPerRow={2}
      name="chart1"
      primarySegmentedMeasureData={[{ name: 'Measure', y: 60 }]}
      qualitativeRangeData={[{ name: 'Range', y: 50 }, { name: 'Range', y: 75 }]}
      width={600}
    /> */}
     <Typography variant='button' fontWeight={900} color={'black'} >مقدار آخرین جلسه ارزیابی شده:{realMeetValue} </Typography>
       <ChartBullet
      ariaDesc=""
      ariaTitle=""
      axisComponent={
        <ChartAxis 
          tickValues={three === 0 ? [0, 100] : [0, 30, 70, 100]}
          tickFormat={(val: number) => {
            switch (val) {
              case 0:
                return '0';
              case 30:
                return '30';
              case 70:
                return '70';
              case 100:
                return '100';
              default:
                return '';
            }
          }}
        />
      }
      comparativeWarningMeasureData={[{ name: oneValue, y: 100 }]}
      constrainToVisibleArea
      height={150}
      labels={({ datum }) => `${datum.name}: ${datum.y}`}
      maxDomain={{y: 100}}
      name=""
      primarySegmentedMeasureData={[{ name: 'نسبت ارزیابی', y: meetValue}]}
      qualitativeRangeData={[{ name: threeValue , y: three }, { name: sevenValue, y: seven }]}
      width={600}
    />
        </Grid>
        <Grid xs={12}  >
        <Box width={'100%'} marginLeft={1}  display={'flex'} alignItems={'center'} justifyContent={'start'}>
        {/* <CompanyManagmentIcon width={'20px'} height={'20px'} /> */}
        {/* <Typography px={1} variant='button' fontWeight={900} color={'black'} >
                {
                    definitionLevelName
                }
        </Typography> */}
        </Box>
        </Grid>
    
        <Grid container item  xs={16} justifyContent="center" width={'400px'} height={'300px'}>
   <Typography px={1} variant='button' fontWeight={900} color={'black'} > سابقه ارزیابی های اخیر</Typography>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={lineChart}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="meetingDate" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip/>
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="reportScore" stroke="#e28743" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="newValue" stroke="##e28743" />
        </LineChart>
      </ResponsiveContainer>
       </Grid>
        <Grid xs={12}>
        <Box  display={'flex'} alignItems={'center'} justifyContent={'space-between'} textAlign={'center'}>
        {/* <Box  display={'flex'} alignItems={'center'} textAlign={'center'}  justifyContent={'center'}
        bgcolor={ objectivesStateName === "فعال"?'#D5f7D4':'#bfd3f5'}   width={'90px'} height={'28px'} borderRadius={3} >
        <Typography  color={objectivesStateName === "فعال"? 'green':'#3a82fc'} fontSize={'0.8rem'}  >  {
                objectivesStateName === "فعال"?'فعال':'پیش نویس'
            }
        </Typography>

        </Box> 
     */}
{/*         
        <Box display={'flex'} alignItems={'center'} textAlign={'center'}  justifyContent={'center'} bgcolor={'#FBF0EA'}  width={'95px'} height={'28px'} borderRadius={3} >

        <Typography color={'#F95700'} fontSize={'0.8rem'}>
          {keyResultCount}  نتیجه کلیدی 
        </Typography>
        </Box>  */}
    
      </Box>
        </Grid>
   </Grid>
  )
}

export default TKCart