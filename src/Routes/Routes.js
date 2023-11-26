import { Route,Routes, useLocation } from "react-router-dom";
import Dashboard from "../scenes/dashboard/index";
import { RequierdAuth } from "../utils/RequierdAuth";
import Sales from "../scenes/Sales/Sales";
import Orders from "../scenes/Orders/Orders";
import Team from "../scenes/Team";
import OverView from "../scenes/OverView/OverView";

import React, { Suspense } from "react";

import NotFound from "../Pages/NotFound/NotFound";
import {AnimatePresence} from 'framer-motion'


const LazyStore=React.lazy(()=>import('../scenes/Store/index'));
const LazyOrders=React.lazy(()=>import('../scenes/Orders/Orders.js'));
const LazyDesigner=React.lazy(()=>import('../scenes/Designer/index.js'));
const LazyProduction=React.lazy(()=>import('../scenes/Production/index.js'));
const LazyQualityControl=React.lazy(()=>import('../scenes/Qualitycontrol/Index.js'));
const LazyTeam=React.lazy(()=>import('../scenes/Team/index'));
const LazySales=React.lazy(()=>import('../scenes/Sales/Sales'));
const LazyRoles=React.lazy(()=>import('../scenes/Team/Roles/index.js'));
const LazyPermissions=React.lazy(()=>import('../scenes/Team/Permissions/index'))








 const DashRoutes=()=>{
    
    
const location=useLocation()


    return <div>

       <AnimatePresence>
        <Routes >
            
           

       


      <Route path="/dashboard" element={   
                                             <Dashboard/>
                                          
                                        }>

               <Route index element={<OverView/>} />

             <Route path="overview" element={<OverView/>} />

             <Route path="orders" 
                    element={ <Suspense fallback='در حال بارگزاری...'>  
             <LazyOrders/> 
             </Suspense>} />

             <Route path="designer" 
                    element={ <Suspense fallback='در حال بارگزاری...'>  
             <LazyDesigner/> 
             </Suspense>} />


             <Route path="production" 
                    element={<Suspense fallback='در حال بارگزاری...'> 
                    <LazyProduction/>
             </Suspense>  } />

             <Route path="qualitycontrol" 
                    element={<Suspense fallback='در حال بارگزاری...'> 
                    <LazyQualityControl/> 
             </Suspense>}/>
            
              <Route path="store" 
                     element={<Suspense fallback='در حال بارگزاری...' >
              <LazyStore/>
              </Suspense>}/>

             <Route path="sales" 
                    element={<Suspense fallback='در حال بارگزاری...'> 
                    <LazySales/> 
             </Suspense>} />

             <Route path="team" 
                    element={<Suspense fallback='درحال بارگزاری...'>  
                    <LazyTeam/> 
             </Suspense>}/>

             <Route path="role" element={<Suspense fallback='درحال بارگزاری...' >
              <LazyRoles/>
             </Suspense>}  >
             </Route>

             <Route path="permission" element={<Suspense fallback='درحال بارگزاری...'>
             <LazyPermissions/>
             </Suspense>} >
             </Route>

             

      </Route>
           
          

           </Routes>
           </AnimatePresence>

           </div>

}


export default DashRoutes

 

