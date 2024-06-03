
// https://api.myokr.ir/api/Person/GetAllActivePersonByTenantId?tenantId=eb781974-3cb0-4c3a-881e-97af686ce7f5;

// https://api.myokr.ir/api/OKR/GetAllHorizontalAlignmentByTenantId/?tenantId=eb781974-3cb0-4c3a-881e-97af686ce7f5&definitionLevelId=fb7cc4ea-7162-4916-9aa8-834b14308e10
import axios from "axios";
import axiosInstance from "../../../Axios/Axios";

const GetAllActivePersonByTenantId=async({queryKey}:any)=>{
    let tenantId=queryKey[1]
    return await axiosInstance.get(`/Person/GetAllActivePersonByTenantId?tenantId=${tenantId}`)
}


const GetAllHorizontalAlignmentByTenantId=async({queryKey}:any)=>{
    let ids=queryKey[1]
return await axiosInstance.get(`/OKR/GetAllHorizontalAlignmentByTenantId/?tenantId=${ids.tenantId}&definitionLevelId=${ids.definitionId}`)
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


// 

// https://api.myokr.ir/api/OKR/getAllPeriodsByTenantId?tenantId=3f2d72cf-cdff-413c-abcd-d5459d97890c




// دریافت همه اهداف
const getAllObjectivePeriodsByTenantId=async()=>{
    return await axiosInstance.get('OKR/getAllPeriodsByTenantId?tenantId=3f2d72cf-cdff-413c-abcd-d5459d97890c')
}




// دریافت دوره ها
// https://api.myokr.ir/api/OKR/GetAllObjectiveByPeriodId/?tenantId=3f2d72cf-cdff-413c-abcd-d5459d97890c&periodId=d3fe4f1c-e2ce-470e-9e48-87ffb411a997&pageIndex=1&pageSize=5&searchTerm=
const getAllObjectiveByPeriodId=async({queryKey}:any)=>{
    // profileTenantId
    let periodId=queryKey[1];
    let profileTenantId=queryKey[2];
    return await axiosInstance.get(`/OKR/GetAllObjectiveByPeriodId/?tenantId=${profileTenantId}&periodId=${periodId}&pageIndex=1&pageSize=50&searchTerm=`)
}


// https://api.myokr.ir/api/OKR/getAllDefinitionLevelByTenantId?tenantId=3f2d72cf-cdff-413c-abcd-d5459d97890c
// دریافت تیم ها
const getAllObjectiveDefinitionLevelByTenantId=async({queryKey}:any)=>{
    let tenantId:string|null=queryKey[1];
  return await axiosInstance.get(`OKR/getAllDefinitionLevelByTenantId?tenantId=${tenantId}`)
}





// دریافت حالت های یک هدف
// https://api.myokr.ir/api/OKR/GetAllOKRStateByTenantId?tenantId=3f2d72cf-cdff-413c-abcd-d5459d97890c
const GetAllObjectiveOKRStateByTenantId=async({queryKey}:any)=>{
    let tenantId:string|null=queryKey[1];
    return await axiosInstance.get(`OKR/GetAllOKRStateByTenantId?tenantId=${tenantId}`)
}


// درج هدف
// https://api.myokr.ir/api/OKR/AddObjective
// {"name":"تست","periodId":"d3fe4f1c-e2ce-470e-9e48-87ffb411a997","definitionLevelId":"ab6af938-af16-4d3d-8d6f-b7079a145c4a","oKRStateId":"b913a620-5078-4249-aa48-3269ded442a7","responsibleId":"e76209ac-35c8-4e13-a85a-ebe0340588cd","tenantId":"3f2d72cf-cdff-413c-abcd-d5459d97890c","isPublic":true,"answerRequest":"تست","description":"تست","CalculateProgressType":"BasedOnKR","createById":"73b54dda-95cf-404e-a641-5abdce6fb8e5","keyResultParentIds":[],"TeamIds":[],"weight":"100"}

// const addObjective=async(ObjectiveData:any)=>{
// return await axiosInstance.post('OKR/AddObjective',ObjectiveData)
// }

const addObjective=async(ObjectiveData:any)=>{
    return await axiosInstance.post(`OKR/AddObjective`,ObjectiveData)
  }

// https://api.myokr.ir/api/OKR/GetObjectiveDetailsById/?id=a29fa52c-7376-49e2-8091-6f5f0a7ccdc2

const getObjectiveDetails=async({queryKey}:any)=>{
    let objId:string|null=queryKey[1];
return await axiosInstance.get(`OKR/GetObjectiveDetailsById/?id=${objId}`)
}




// {"name":"بهار ۳ ک ","responsibleId":"e76209ac-35c8-4e13-a85a-ebe0340588cd","pointingSystemType":"Regularly","keyResultType":"Numerical","oKRStateId":"e71fa848-bf0f-4471-91b1-07168ae8bc8e","weight":"0","startDate":null,"forceEndDate":null,"description":"","valuesDetailCommandDtos":[{"scoreLevelId":"58e2f9cb-2d3a-41db-892c-63539dafc740","value":"100","tenantId":"eb781974-3cb0-4c3a-881e-97af686ce7f5"}],"tenantId":"eb781974-3cb0-4c3a-881e-97af686ce7f5","startValue":"10","horizontalAlignments":[],"objectiveId":"a83b2ee4-93e7-4674-899f-9c66f9a075df","id":"b74cf949-b982-4591-a97d-3e77c69d2285","lastModifiedById":"73b54dda-95cf-404e-a641-5abdce6fb8e5"}
  

// https://api.myokr.ir/api/

// https://api.myokr.ir/api/OKR/EditKeyResult


const getKeyResultDetailsById=async({queryKey}:any)=>{
    let krId:string|null=queryKey[1];
return await axiosInstance.get(`OKR/GetKeyResultDetailsById/?id=${krId}`)
}

const editKeyResult=async(krData:any)=>{
return await axiosInstance.post('OKR/EditKeyResult',krData)
}


// const deletePerson=async(personDeletedBody:any|null)=>{
//     return  await  axiosInstance.post(`/Person/DeletePerson`,personDeletedBody)
//     }

// https://api.myokr.ir/api/OKR/DeleteKeyResult

const deleteKr=async(delteKrBody:any)=>{
    return await axiosInstance.post(`OKR/DeleteKeyResult`,delteKrBody)
}

// https://api.myokr.ir/api/OKR/GetAllObjectiveNameWithKeyResultsByTenantId/?tenantId=eb781974-3cb0-4c3a-881e-97af686ce7f5&definitionLevelId=b25fa8c6-d624-4b41-bc8c-230afabc580a&periodId=a0fcb059-bca7-4dcf-874b-aa0ce7c032b5



const getAllObjectiveNameWithKeyResultsByTenantId=async({queryKey}:any)=>{
let ids:any|null=queryKey[1];
return await axiosInstance.get(`OKR/GetAllObjectiveNameWithKeyResultsByTenantId/?tenantId=${ids.tenantId}&definitionLevelId=${ids.definitionLevelId}&periodId=${ids.periodId}`)
}

const getAllTeamAndPersonNameByTenantId=async({queryKey}:any)=>{
    let tenantId=queryKey[1];
    return await axiosInstance.get(`/Team/WebGetAllTeamAndPersonNameByTenantId/?tenantId=${tenantId}`)
}





export{
    GetAllActivePersonByTenantId,
    GetAllHorizontalAlignmentByTenantId,
    GetAllOKRStateByTenantId,
    GetAllScoreLevelsByTenantId,
    AddKeyResult,
    getAllObjectiveByPeriodId,
    getAllObjectiveDefinitionLevelByTenantId,
    GetAllObjectiveOKRStateByTenantId,
    addObjective,
    getObjectiveDetails,
    getKeyResultDetailsById,
    editKeyResult,
    deleteKr,
    getAllObjectiveNameWithKeyResultsByTenantId,
    getAllTeamAndPersonNameByTenantId
}