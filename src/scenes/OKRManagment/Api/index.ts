
// https://api.myokr.ir/api/Person/GetAllActivePersonByTenantId?tenantId=eb781974-3cb0-4c3a-881e-97af686ce7f5;

// https://api.myokr.ir/api/OKR/GetAllHorizontalAlignmentByTenantId/?tenantId=eb781974-3cb0-4c3a-881e-97af686ce7f5&definitionLevelId=fb7cc4ea-7162-4916-9aa8-834b14308e10
import axiosInstance from "../../../Axios/Axios";

const GetAllActivePersonByTenantId=async({queryKey}:any)=>{
    let tenantId=queryKey[1]
    return await axiosInstance.get(`/Person/GetAllActivePersonByTenantId?tenantId=${tenantId}`)
}


const GetAllHorizontalAlignmentByTenantId=async({queryKey}:any)=>{
    let tenantId=queryKey[1]
return await axiosInstance.get(`/OKR/GetAllHorizontalAlignmentByTenantId/?tenantId=${tenantId}&definitionLevelId=fb7cc4ea-7162-4916-9aa8-834b14308e10`)
}

// https://api.myokr.ir/api/OKR/GetAllOKRStateByTenantId?tenantId=eb781974-3cb0-4c3a-881e-97af686ce7f5


const GetAllOKRStateByTenantId=async({queryKey}:any)=>{
    let tenantId=queryKey[1];
    return await axiosInstance.get(`/OKR/GetAllOKRStateByTenantId?tenantId=${tenantId}`)
}
// https://api.myokr.ir/api/OKR/GetAllScoreLevelsByTenantId?tenantId=eb781974-3cb0-4c3a-881e-97af686ce7f5

const GetAllScoreLevelsByTenantId=async({queryKey}:any)=>{
    let tenantId=queryKey[1];
    return await axiosInstance.get(`/OKR/GetAllScoreLevelsByTenantId?tenantId=${tenantId}`)
}

// https://api.myokr.ir/api/OKR/AddKeyResult

const AddKeyResult=async(krData:any)=>{
return await axiosInstance.post('OKR/AddKeyResult',krData) 
}
// return await axiosInstance.post('Meeting/AddCheckinMeeting',checkinData)



export{
    GetAllActivePersonByTenantId,
    GetAllHorizontalAlignmentByTenantId,
    GetAllOKRStateByTenantId,
    GetAllScoreLevelsByTenantId,
    AddKeyResult
}