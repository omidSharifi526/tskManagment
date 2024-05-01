// https://api.myokr.ir/api/Setting/GetTenantSetting?tenantId=

// https://api.myokr.ir/api/Setting/AddTenantSetting


import axios from "axios";
import axiosInstance from "../../../Axios/Axios";

const getTenantSetting=async({queryKey}:any)=>{
    let tenantId:string|null=queryKey[1];
return axiosInstance.get(`/Setting/GetTenantSetting?tenantId=${tenantId}`)
}

const addTenantSettings=(tenantSettingData:any|null)=>{
return axiosInstance.post('/Setting/AddTenantSetting',tenantSettingData)
}

export{
    getTenantSetting,
    addTenantSettings
}