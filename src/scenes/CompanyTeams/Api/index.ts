// https://api.myokr.ir/api/Meeting/GetKeyResultMeetingHistory?tenantId=6cfd9a87-e09b-4f0e-bbe1-c1b65c8f170d&periodId=bba7c504-8a8c-4b9e-b92c-6f7386a54c7a&keyResultId=990cec3a-77e5-4bc6-96dd-c5a4234d9762
import axiosInstance from "../../../Axios/Axios"

const GetKeyResultMeetingHistory=async({queryKey}:any)=>{
    let krId=queryKey[1];
    let prId=queryKey[2];
    // console.log(prId,"api")
return await axiosInstance.get(`Meeting/GetKeyResultMeetingHistory?tenantId=6cfd9a87-e09b-4f0e-bbe1-c1b65c8f170d&periodId=${prId}&keyResultId=${krId}`)
}
// https://api.myokr.ir/api/Meeting/GetAllTeamChildByParentId?teamId=2757391a-4029-4eaa-a36e-737e69a8e130&periodId=bba7c504-8a8c-4b9e-b92c-6f7386a54c7a&meetingId=34c56211-ec89-4b53-a10e-e6e7d1005ff2

const GetAllTeamChildByParentId=async({queryKey}:any)=>{
    // let krId=queryKey[1];
    // let 
    let ids=queryKey[1];
    // console.log(ids)
   if (ids.teamId.length>2) {
    return await axiosInstance.get(`Meeting/GetAllTeamChildByParentId?teamId=${ids.teamId}&periodId=${ids.priodId}&meetingId=${ids.meetingId}`)
   }

}

// https://api.myokr.ir/api/Meeting/AddCheckinMeeting

const addCheckinMeeting=async(checkinData:any)=>{
return await axiosInstance.post('Meeting/AddCheckinMeeting',checkinData)
}
// const addMeeting=async(meetData:any)=>{
  // let meetData={}
// return await axiosInstance.post(`/Meeting/AddMeeting`,meetData)
// }


// https://api.myokr.ir/api/Meeting/GetKeyResultHistoryCheckinByKeyResultId?meetingId=e35d40da-0f4b-45a2-bb86-acad391909c3&periodId=9fc71f3a-3235-492d-927f-38eed39e6550&keyResultId=d73dfbde-b311-4849-bd20-2a0cacee96ea

const GetKeyResultHistoryCheckinByKeyResultId=async({queryKey}:any)=>{
    // formIds
    // {meetingId:meetingId,periodId:periodId,keyResultId:''}
    let mainIds=queryKey[1];
    let{meetingId,periodId,keyResultId}=mainIds
    return axiosInstance.get(`Meeting/GetKeyResultHistoryCheckinByKeyResultId?meetingId=${meetingId}&periodId=${periodId}&keyResultId=${keyResultId}`)
}

export{
    GetKeyResultMeetingHistory,
    GetAllTeamChildByParentId,
    addCheckinMeeting,
    GetKeyResultHistoryCheckinByKeyResultId
}