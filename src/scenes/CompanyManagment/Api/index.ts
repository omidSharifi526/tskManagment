import axios from "axios"
import axiosInstance from "../../../Axios/Axios"

// https://api.myokr.ir/api/Team/AddTeam
const addTeam=async(teamData:any)=>{
    return await axiosInstance.post('/Team/AddTeam',teamData)
    }

    // 
// https://api.myokr.ir/api/Team/GetAllTeamByTenantId?tenantId=eb781974-3cb0-4c3a-881e-97af686ce7f5&pageIndex=1&pageSize=100
const getAllTeams=async({queryKey}:any)=>{
    let tenantId=queryKey[1]
    return await axiosInstance.get(`/Team/GetAllTeamByTenantId?tenantId=${tenantId}&pageIndex=1&pageSize=100`)
}
 
// https://api.myokr.ir/api/Person/GetAllActivePersonByTenantId?tenantId=eb781974-3cb0-4c3a-881e-97af686ce7f5&pageIndex=1&pageSize=100
const getAllActivePersonByTenantId=async({queryKey}:any)=>{
    let tenantId=queryKey[1];
    return await axiosInstance.get(`/Person/GetAllActivePersonByTenantId?tenantId=${tenantId}&pageIndex=1&pageSize=100`)
}
// https://api.myokr.ir/api/Person/GetAllPersonByTenantId?tenantId=eb781974-3cb0-4c3a-881e-97af686ce7f5&pageIndex=1&pageSize=100
const getAllPersonByTenantId=async({queryKey}:any)=>{
let tenantId=queryKey[1];
return await axiosInstance.get(`/Person/GetAllPersonByTenantId?tenantId=${tenantId}&pageIndex=1&pageSize=100`)
}
// https://api.myokr.ir/api/Account/InvitedUser
const inviteUser=async(userData:any)=>{
return axiosInstance.post('/Account/InvitedUser',userData)
}



    export{
        addTeam,
        getAllTeams,
        getAllActivePersonByTenantId,
        getAllPersonByTenantId,
        inviteUser
    }