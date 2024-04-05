import React,{lazy,Suspense} from "react";
import{createBrowserRouter,Outlet,createRoutesFromElements,Route,Link} from 'react-router-dom'
import Contact from "../../components/Contact/Contact";
import Meeting from "../../scenes/Meeting";
import MeetingTabsContainer from '../../scenes/Meeting/LComponents/TabsContainer/MeetingTabsContainer'
import Tenants from "../../scenes/Tenants/Tenants";
import CompanyTeams from "../../scenes/CompanyTeams/CompanyTeams";
import { AuthProvider } from "../../Context/AuthProvider";
import {RequierAuth,ReqPhone} from "../../components/RequierAuth/RequierAuth";
import { useSelector } from "react-redux";

import OverView from "../../scenes/OverView/OverView";


import LoginPage from "../../components/Login/LoginPage";
import Dashboard from "../../components/Dashboard";

const OkrManagmentContainer = lazy(() => import('../../scenes/OKRManagment'));

const Mrouter=createBrowserRouter(createRoutesFromElements(
 <>
 <Route path="/" element={<LoginPage/>} />
 {/* <RequierAuth><CompanyTeams/></RequierAuth> */}
 {/* <RequierAuth><Dashboard/></RequierAuth> */}
  <Route path="/companyTeams"  element={<RequierAuth><CompanyTeams/></RequierAuth>} />
  <Route  path="/dashboard" element={<RequierAuth><Dashboard/></RequierAuth>}>
  <Route index path="/dashboard/meetings"  element={<MeetingTabsContainer/>} />
  <Route  path="/dashboard/tenants" element={<ReqPhone><Tenants/></ReqPhone>} />
  
  <Route  path="/dashboard/okrManagment"  
  element={<Suspense 
  fallback={<div>درحال بارگزاری...</div>} >
    <RequierAuth>
    <OkrManagmentContainer/>
    </RequierAuth>
  </Suspense>
} />
  {/* OkrManagmentContainer */}
  {/* <Route  element={<OverView/>} /> */}
  
 
  {/* <Route path="/dashboard/contact"  element={<Contact/>} /> */}
 

  </Route>
 </>
));


export default Mrouter

