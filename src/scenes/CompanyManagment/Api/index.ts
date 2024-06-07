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

// https://api.myokr.ir/api/Person/GetPersonDetailById?id=e76209ac-35c8-4e13-a85a-ebe0340588cd
const editPerson=async({queryKey}:any)=>{
    let perId=queryKey[1];
return await axiosInstance.get(`/Person/GetPersonDetailById?id=${perId}`)
}

// https://api.myokr.ir/api/Team/GetTeamDetailsById?id=d95a39da-8e5c-4d9e-ba66-df9fd0a61bed

const getTeamDetail=async({queryKey}:any)=>{
    let teamId=queryKey[1];
    return await axiosInstance.get(`/Team/GetTeamDetailsById?id=${teamId}`)

}




// https://localhost:7170/api/Person/DeleteInvitedPerson
const deleteInvitedPerson=(perIds:any|null)=>{
return axiosInstance.post(`/Person/DeleteInvitedPerson`,perIds)
}
// https://localhost:7170/api/Person/DeletePerson
const deletePerson=async(personDeletedBody:any|null)=>{
return  await  axiosInstance.post(`/Person/DeletePerson`,personDeletedBody)
}



// api/Team/DeleteTeam
const deleteTeam=async(teamDeletedBody:any|null)=>{
    console.log(teamDeletedBody)
return await axiosInstance.post(`/Team/DeleteTeam`,teamDeletedBody)
}

// https://api.myokr.ir/api/Person/EditPerson
const editPersonStaff=async(personEditedBody:any)=>{
    console.log(personEditedBody)
return await axiosInstance.post('/Person/EditPerson',personEditedBody)
}
// https://api.myokr.ir/api/Team/EditTeam

const editTeam=async(teamEditedBody:any)=>{
    return await axiosInstance.post('/Team/EditTeam',teamEditedBody)
}
// https://api.myokr.ir/api/Account/SendSMS

const sendSms=async(body:any)=>{
return await axiosInstance.post('/Account/SendSMS',body)
}

// 
// https://api.myokr.ir/api/Account/CheckForgetCode

// {"phoneNumber":"09911461820","code":"1111"}

const checkForgetCode=async(body:any)=>{
return await axiosInstance.post(`/Account/CheckForgetCode`,body)
}
// https://api.myokr.ir/api/Account/ForgetPassword
// const forgetPassword=async(body:any)=>{
//     return await axiosInstance.post(`/Account/ForgetPassword`,body)
// }

const addNewPassWord=async(body:any)=>{
return await axiosInstance.post(`/Account/ForgetPassword`,body)
}
// Api/Upload/Upload

    export{
        addTeam,
        getAllTeams,
        getAllActivePersonByTenantId,
        getAllPersonByTenantId,
        inviteUser,
        editPerson,
        deleteTeam,
        deletePerson,
        editPersonStaff,
        deleteInvitedPerson,
        getTeamDetail,
        editTeam,
        sendSms,
        checkForgetCode,
        addNewPassWord
    }