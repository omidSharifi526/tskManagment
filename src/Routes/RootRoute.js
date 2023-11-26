import React from "react";
import { Route,Routes } from "react-router-dom";
import Login from "../Components/Login/Login";

import Register from "../Components/Register/Register";
import Home from "../Pages/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";


const RootRoute=()=>{

return(
    <Routes>
    
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/register" element={<Register/>} />
    {/* <Route path="*"  element={<NotFound/>}/> */}
    <Route path="*" element={null} />
    



  </Routes>

)

}

export default RootRoute