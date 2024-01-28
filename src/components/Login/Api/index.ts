import axios from "axios";
import axiosInstance from "../../../Axios/Axios";







const login = async (userBody:any) => {

  return await axiosInstance.post('Account/Login',userBody)
}


const getPriodById=async({queryKey:info}:any)=>{
  let tId=info[1];

return await axiosInstance.get(`OKR/GetAllPeriodsByTenantId/?tenantId=${tId}`)
}


export {
  login,
  getPriodById
}