import React from 'react';
import Example from '../../components/GlobalComponents/Charts/Liner/LinerChart';
import { LineChart, Line } from 'recharts';
import { Grid,Box } from '@mui/material';
import FaDatePicker from '../../components/GlobalComponents/DatePicker/DatePicker';


const OverView = () => {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
  const renderLineChart = (
    <LineChart width={400} height={400} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>
  );
  return (
    < Grid container height={'500px'} >
      <Grid item md={4} >
      <Example/>
      </Grid>
     <Grid item md={8} mt={3}  >
   
   {/* <FaDatePicker/> */}
     </Grid>
    </Grid>
  )
}

export default OverView