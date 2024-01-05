
import axios from "axios";
const existToken=localStorage.getItem('accessToken');
const baseURL='https://api.myokr.ir/api/';
const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    'authorization':`Bearer ${existToken}`,
    "Access-Control-Allow-Origin":'*'
  },
});
// https://localhost:7169/api/Meeting/GetAllMeetingsByTenantId?tenantId=004e13a4-1f2e-4fc9-9899-09569ff8b1fe&periodId=62f8b843-28dd-488b-9aaf-5c375b8988ed

const getAllMeetingByIds=async({queryKey:info}:any)=>{
    // console.log(info);
    let ids=info[1];
   return await axios.get(`https://api.myokr.ir/api/Meeting/GetAllMeetingsByTenantId?tenantId=${ids.tenantId}&periodId=${ids.priodId}`)
}

// getAllTeamsByTenantId
// 
// eb781974-3cb0-4c3a-881e-97af686ce7f5
const getAllTeamsByTenantId=async({queryKey}:any)=>{
  let id=queryKey[1];
  // console.log(id)
return await axios.get(`https://api.myokr.ir/api/Team/GetAllTeamByTenantId?tenantId=${id}&pageSize=10&pageIndex=1`)

}
// 
const getTeamDetailsById=async()=>{
return await axios.get('https://api.myokr.ir/api/Team/GetTeamDetailsById?id=fb7cc4ea-7162-4916-9aa8-834b14308e10')
}

// 
const getAllObjectiveByTeamId=async({queryKey}:any)=>{
  let id=queryKey[1];
  return await axios.get(`https://api.myokr.ir/api/OKR/GetAllObjectiveByTeamId?teamId=${id}`)
}


// https://api.myokr.ir/api/OKR/GetAllKeyResultByObjectiveId?objectiveId=1d00c25e-79a0-48c1-af22-975bb8babec6

const getAllKeyResultByObjectiveId=async({queryKey}:any)=>{
  let id:string=queryKey[1];
  // console.log(id)
  // 1d00c25e-79a0-48c1-af22-975bb8babec6
  return await axios.get(`https://api.myokr.ir/api/OKR/GetAllKeyResultByObjectiveId?objectiveId=${id}`)
}

const getAllTeamStatusByTenantId=async({queryKey}:any)=>{
  let id:string=queryKey[1];
return await axios.get(`https://api.myokr.ir/api/Meeting/GetCheckinMeetingDetailsByMeetingId?meetingId=34eb3909-a296-448e-b0f5-dc068984c945`)
}
// https://api.myokr.ir/api/Team/GetAllTeamStatusByTenantId?tenantId=f64c1efe-4213-4502-ab8a-018c88bc9f2d
// https://api.myokr.ir/api/Meeting/GetWebCheckinMeetingDetailsByMeetingId?meetingId=34eb3909-a296-448e-b0f5-dc068984c945


const getWebCheckinMeetingDetailsByMeetingId=async({queryKey}:any)=>{
  let id:string=queryKey[1];
return await axios.get(`https://api.myokr.ir/api/Meeting/GetWebCheckinMeetingDetailsByMeetingId?meetingId=${id}`)
}
 // https://api.myokr.ir/api/Meeting/GetWebObjectiveDetailsCheckinMeetingByTeamId?teamId=7e2a4838-c318-42b9-b874-56f61afeec39

 const getWebObjectiveDetailsCheckinMeetingByTeamId=async({queryKey}:any)=>{
  let id:string=queryKey[1];
  console.log(id)
return await axios.get(`https://api.myokr.ir/api/Meeting/GetWebObjectiveDetailsCheckinMeetingByTeamId?teamId=${id}`)
 }

export{
    getAllMeetingByIds,
    getAllTeamsByTenantId,
    getTeamDetailsById,
    getAllObjectiveByTeamId,
    getAllKeyResultByObjectiveId,
    getAllTeamStatusByTenantId,
    getWebCheckinMeetingDetailsByMeetingId,
    getWebObjectiveDetailsCheckinMeetingByTeamId
}