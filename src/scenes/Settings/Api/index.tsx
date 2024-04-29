// https://api.myokr.ir/api/Setting/GetTenantSetting?tenantId=

import axios from "axios";
import axiosInstance from "../../../Axios/Axios";

const getTenantSetting=async({queryKey}:any)=>{
    let tenantId:string|null=queryKey[1];
return axiosInstance.get(`/Setting/GetTenantSetting?tenantId=${tenantId}`)
}

export{
    getTenantSetting
}