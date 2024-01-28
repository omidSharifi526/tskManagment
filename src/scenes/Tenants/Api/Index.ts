// https://api.myokr.ir/api/Tenant/GetAllTenantsInfo
import axiosInstance from "../../../Axios/Axios"

const getAllTenantsInfo=async()=>{
return await axiosInstance.get('Tenant/GetAllTenantsInfo')
}


export {
    getAllTenantsInfo
}