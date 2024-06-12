import axiosInstance from "../../../Axios/Axios";

const getAllObjectiveByPeriodId=async({queryKey}:any)=>{
    let periodId=queryKey[1];
    let profileTenantId=queryKey[2];
    return await axiosInstance.get(`/OKR/GetAllOKRInfoByTeamId/?periodId=${periodId}&teamId=${profileTenantId}`)
}

const getAllObjectiveDefinitionLevelByTenantId=async({queryKey}:any)=>{
    let tenantId:string|null=queryKey[1];
  return await axiosInstance.get(`OKR/getAllDefinitionLevelByTenantId?tenantId=${tenantId}`)
}

export{
    getAllObjectiveByPeriodId,
    getAllObjectiveDefinitionLevelByTenantId
}
