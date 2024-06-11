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
import Kr from "../../scenes/OKRManagment/LComponents/KR/Kr";
// import Profile from "../../scenes/CompanyManagment/Copmonents/Profile/Profile";
import OverView from "../../scenes/OverView/OverView";


import LoginPage from "../../components/Login/LoginPage";
import Dashboard from "../../components/Dashboard"; 

const OkrManagmentContainer = lazy(() => import('../../scenes/OKRManagment'));
const CompanyManagment = lazy(() => import('../../scenes/CompanyManagment'));
const NotFoundPage = lazy(() => import('../../components/NotFoundPage/NotFoundPage'));
const Settings = lazy(() => import('../../scenes/Settings/Setting'));
const Aboutus = lazy(() => import('../../scenes/Aboutus/Index'));
const AllTenantOkrs = lazy(() => import('../../scenes/AllTenantOkrs/Index'));
const Helpsoftware = lazy(() => import('../../scenes/Helpsoftware/Index'));
const TenantDash = lazy(() => import('../../scenes/TenantDash/Index'));
const Profile = lazy(() => import('../../scenes/CompanyManagment/Copmonents/Profile/Profile'));
const Mrouter=createBrowserRouter(createRoutesFromElements(
 <>
 <Route path="/" element={<LoginPage/>} />
  
  <Route path="/companyTeams"  element={<RequierAuth><CompanyTeams/></RequierAuth>} />
  <Route  path="/dashboard" element={<RequierAuth><Dashboard/></RequierAuth>}>
  <Route  path="/dashboard/meetings"  element={<MeetingTabsContainer/>} />
  <Route  path="/dashboard/tenants" element={<ReqPhone><Tenants/></ReqPhone>} />
  
  
  
  <Route  path="/dashboard/AllTenantokrs"  
  element={<Suspense 
  fallback={<div>درحال بارگزاری...</div>} >
    <RequierAuth>
    <AllTenantOkrs/>
    </RequierAuth>
  </Suspense>
} />

  

  <Route  path="/dashboard/okrManagment"  
  element={<Suspense 
  fallback={<div>درحال بارگزاری...</div>} >
    <RequierAuth>
    <OkrManagmentContainer/>
    </RequierAuth>
  </Suspense>
} />

<Route  path="/dashboard/companyManagment"  
  element={<Suspense 
  fallback={<div>درحال بارگزاری...</div>} >
    <RequierAuth>
    <CompanyManagment/>
    </RequierAuth>
  </Suspense>
} />

<Route path="/dashboard/companyManagment/profile"  
  element={<Suspense 
  fallback={<div>درحال بارگزاری...</div>} >
    <RequierAuth>
    <Profile/>
    </RequierAuth>
  </Suspense>
} />


<Route  path="/dashboard/aboutus"  
  element={<Suspense 
  fallback={<div>درحال بارگزاری...</div>} >
    <RequierAuth>
    <Aboutus/>
    </RequierAuth>
  </Suspense>
} />

<Route  path="/dashboard/Helpsoftware"  
  element={<Suspense 
  fallback={<div>درحال بارگزاری...</div>} >
    <RequierAuth>
    <Helpsoftware/>
    </RequierAuth>
  </Suspense>
} />


<Route index path="/dashboard/TenantDash"  
  element={<Suspense 
  fallback={<div>درحال بارگزاری...</div>} >
    <RequierAuth>
    <TenantDash/>
    </RequierAuth>
  </Suspense>
} />


<Route  path="/dashboard/okrManagment/objectiveDetails"  
  element={<Suspense 
  fallback={<div>درحال بارگزاری...</div>} >
    <RequierAuth>
    <Kr/>
    </RequierAuth>
  </Suspense>
} />


  {/* OkrManagmentContainer */}
  {/* <Route  element={<OverView/>} /> */}
  
 
  {/* <Route path="/dashboard/contact"  element={<Contact/>} /> */}

  
 
<Route path="*" 

element={<Suspense fallback={<div>درحال بارگزاری...</div>}>
  <NotFoundPage/>
</Suspense>} />

<Route path="/dashboard/settings" 

element={<Suspense fallback={<div>درحال بارگزاری...</div>}>
  <Settings/>
</Suspense>} />

  </Route>

  

 </>
));



export default Mrouter

