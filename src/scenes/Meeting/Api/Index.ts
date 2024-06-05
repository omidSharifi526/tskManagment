
import axiosInstance from "../../../Axios/Axios";
import MeetingCard from "../MeetingCard/MeetingCard";


// https://localhost:7169/api/Meeting/GetAllMeetingsByTenantId?tenantId=004e13a4-1f2e-4fc9-9899-09569ff8b1fe&periodId=62f8b843-28dd-488b-9aaf-5c375b8988ed

const getAllMeetingByIds=async({queryKey:info}:any)=>{
    // console.log(info);
    let ids=info[1];
   return await axiosInstance.get(`Meeting/GetAllMeetingsByTenantId?tenantId=${ids.tenantId}&periodId=${ids.priodId}&phoneNumber=${ids.userPhoneNumber}`)
}


const getAllTeamsByTenantId=async({queryKey}:any)=>{
  let id=queryKey[1];
  // console.log(id)
return await axiosInstance.get(`Team/GetAllTeamByTenantId?tenantId=${id}&pageSize=10&pageIndex=1`)

}
// 
const getTeamDetailsById=async()=>{
return await axiosInstance.get('Team/GetTeamDetailsById?id=fb7cc4ea-7162-4916-9aa8-834b14308e10')
}

// 
const getAllObjectiveByTeamId=async({queryKey}:any)=>{
  let id=queryKey[1];
  return await axiosInstance.get(`OKR/GetAllObjectiveByTeamId?teamId=${id}`)
}


// https://api.myokr.ir/api/OKR/GetAllKeyResultByObjectiveId?objectiveId=1d00c25e-79a0-48c1-af22-975bb8babec6

const getAllKeyResultByObjectiveId=async({queryKey}:any)=>{
  let id:string=queryKey[1];
  // console.log(id)
  // 1d00c25e-79a0-48c1-af22-975bb8babec6
  return await axiosInstance.get(`OKR/GetAllKeyResultByObjectiveId?objectiveId=${id}`)
}

const getAllTeamStatusByTenantId=async({queryKey}:any)=>{
  let id:string=queryKey[1];
return await axiosInstance.get(`Meeting/GetCheckinMeetingDetailsByMeetingId?meetingId=34eb3909-a296-448e-b0f5-dc068984c945`)
}
// https://api.myokr.ir/api/Team/GetAllTeamStatusByTenantId?tenantId=f64c1efe-4213-4502-ab8a-018c88bc9f2d
// https://api.myokr.ir/api/Meeting/GetWebCheckinMeetingDetailsByMeetingId?meetingId=34eb3909-a296-448e-b0f5-dc068984c945


const getWebCheckinMeetingDetailsByMeetingId=async({queryKey}:any)=>{
  let id:string=queryKey[1];
return await axiosInstance.get(`Meeting/GetWebCheckinMeetingDetailsByMeetingId?meetingId=${id}`)
}
 // https://api.myokr.ir/api/Meeting/GetWebObjectiveDetailsCheckinMeetingByTeamId?teamId=7e2a4838-c318-42b9-b874-56f61afeec39

 const getWebObjectiveDetailsCheckinMeetingByTeamId=async({queryKey}:any)=>{
  let id:string=queryKey[1];
  let priodId=queryKey[2];
  let meetingId=queryKey[3]
// return await axios.get(`https://api.myokr.ir/api/Meeting/GetWebObjectiveDetailsCheckinMeetingByTeamId?teamId=${id}`)
return await axiosInstance.get(`Meeting/GetWebObjectiveDetailsCheckinMeetingByTeamId?teamId=${id}&periodId=${priodId}&meetingId=${meetingId}`)
 }
//  priodId
//  https://api.myokr.ir/api/Meeting/GetWebObjectiveDetailsCheckinMeetingByTeamId?teamId=6fc546d0-8546-45ff-a228-d484016d09e4&periodId=bba7c504-8a8c-4b9e-b92c-6f7386a54c7a&meetingId=4447c504-8a5c-4b9e-b92c-6f7386a54c7a


// https://api.myokr.ir/api/Team/GetAllTeamByTenantId?tenantId=a5c0d516-5f9f-4416-8646-21955c09bc0d&pageIndex=1&pageSize=100


const getAllTeamsForSelByTenantId=async({queryKey}:any)=>{
  let tenantId=queryKey[1];
return await axiosInstance.get(`Team/GetAllTeamByTenantId?tenantId=${tenantId}&pageIndex=1&pageSize=100`)
}


// https://api.myokr.ir/api/Meeting/GetAllMeetingsTypeByTenantId?tenantId=a5c0d516-5f9f-4416-8646-21955c09bc0d\

const getAllMeetingsTypeByTenantId=async({queryKey}:any)=>{
  let tenantId=queryKey[1];
return await axiosInstance.get(`/Meeting/GetAllMeetingsTypeByTenantId?tenantId=${tenantId}`)
}

// https://api.okrcoach.app/api/Meeting/AddMeeting

const addMeeting=async(meetData:any)=>{
  // let meetData={}
return await axiosInstance.post(`/Meeting/AddMeeting`,meetData)
}

// https://localhost:7170/api/Download/ExportMeetingDetails?meetingId=b7853e3c-f81b-461b-a360-197150b2a086

const exportMeetingDetails=async()=>{
return await axiosInstance.get(`/Download/ExportMeetingDetails?meetingId=76d801ee-eedc-4019-a36d-3bb3780ee3e8`)
}

// /Download/ExportMeetingDetails?meetingId=76d801ee-eedc-4019-a36d-3bb3780ee3e8




// https://api.myokr.ir/api/Meeting/GetMeetingKeyResultValueById?meetingId=591d2911-bb83-4d3e-93dd-b6775e86b64d&keyResultId=97d8be97-661a-496f-b711-aa02c43971aa


const getMeetingKeyResultValueById=async({queryKey}:any)=>{
  // meetingId,krId
  let ids:any=queryKey[1];
return await axiosInstance.get(`/Meeting/GetMeetingKeyResultValueById?meetingId=${ids?.meetingId}&keyResultId=${ids?.krId}`)
}

// https://api.myokr.ir/api/Meeting/GetMeetingDetailById?Id=ec0fe0d3-9aaa-416c-9bad-34725183735b

const getMeetingDetailById=async({queryKey}:any)=>{
  let meetingId:any=queryKey[1];
  return await axiosInstance.get(`/Meeting/GetMeetingDetailById?Id=${meetingId}`)
}
// https://api.myokr.ir/api/Meeting/editMeeting

const editMeeting=async(meetingData:any)=>{
  return await axiosInstance.post(`/Meeting/editMeeting`,meetingData)
}

// https://api.myokr.ir/api/Meeting/DeleteMeet
// const deleteMeeting=async({queryKey}:any)=>{
//   let meetingId:any=queryKey[1];
//   console.log(meetingId)
// return await axiosInstance.post(`/Meeting/DeleteMeet`,meetingId)
// }

const deleteMeeting=async(Ids:any)=>{
  // let meetingId:any=queryKey[1];
  return await axiosInstance.post(`/Meeting/DeleteMeeting`,Ids)
}

export{
    getAllMeetingByIds,
    getAllTeamsByTenantId,
    getTeamDetailsById,
    getAllObjectiveByTeamId,
    getAllKeyResultByObjectiveId,
    getAllTeamStatusByTenantId,
    getWebCheckinMeetingDetailsByMeetingId,
    getWebObjectiveDetailsCheckinMeetingByTeamId,
    getAllTeamsForSelByTenantId,
    getAllMeetingsTypeByTenantId,
    addMeeting,
    exportMeetingDetails,
    getMeetingKeyResultValueById,
    getMeetingDetailById,
    editMeeting,
    deleteMeeting
}