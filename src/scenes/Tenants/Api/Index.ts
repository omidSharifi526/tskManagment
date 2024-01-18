// https://api.myokr.ir/api/Tenant/GetAllTenantsInfo
import axios from "axios"

const getAllTenantsInfo=async()=>{
return await axios.get('https://api.myokr.ir/api/Tenant/GetAllTenantsInfo')
}


export {
    getAllTenantsInfo
}