import React from 'react';
import MiniDrawer from './DashboardPage';
import { Outlet } from 'react-router-dom';
import {Grid} from '@mui/material';
import UserTypeSelection from '../../scenes/Meeting/LComponents/UserTypeSelection/UserTypeSelection';
import LyBackdrop from '../Layouts/BackDrop/BackDrop';
import Header from '../Header/Header';
const Dashboard = () => {
  return (
    <>

      <div className="app">
        {/* <Header/> */}

     <MiniDrawer />

     
     
  


     
     
      

     </div>
    </>
  )
}

export default Dashboard