import {GetKeyResultMeetingHistory,GetAllTeamChildByParentId,AddCheckinMeeting} from '../Api/index';
import { useMutation, useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';


const useGetKeyResultMeetingHistory=(krId:string|null,prId:string|null,meetId:string|null)=>{
    console.log(krId)
return useQuery(['GetKeyResultMeetingHistory',krId,prId,meetId],GetKeyResultMeetingHistory,{
    refetchOnWindowFocus:false,
    cacheTime:Infinity,
    enabled:!!krId
    ,

    onError:(err)=>{
    //  console.log(err)
    }
    ,
    onSuccess:(data)=>{
    // console.log(data)
    },
    select:(data:any)=>{
    let rawData=data?.data.data;
    let transed=rawData.map((hr:any)=>{
    return{id:uuidv4(),...hr}
    })
   
    return transed
    }

})
}

const useGetAllTeamChildByParentId=(teamId:string | null,meetingId:string | null,priodId:string | null)=>{
    let ids={teamId:teamId,meetingId:meetingId,priodId:priodId}
    return useQuery(['GetAllTeamChildByParentId',ids],GetAllTeamChildByParentId,{
    enabled:!!ids,
    cacheTime:Infinity,
    refetchOnWindowFocus:false,
    onError:(err)=>{
    // console.log(err)
    }
    ,
    select:(data:any)=>{
        let rawData=data?.data.data;
        return rawData
       }
    })
}

// const useAddCheckinMeeting=()=>{
//     return useMutation(AddCheckinMeeting,{
//         onSuccess:(data:any)=>{
//        console.log(data)
//         }
//         ,
//         onError:(err:any)=>{
//         console.log(err)
//         }
//     })
// }

const useAddCheckinMeeting=(addCheckinSuccess:any)=>{
    // const queryClient=useQueryClient();
 return useMutation(AddCheckinMeeting,{
    onSuccess:()=>{
        addCheckinSuccess()
        // queryClient.invalidateQueries('getAllMeetingByIds')
    },
    onError:(err:any)=>{
    //    console.log(err)
    }
 })
}


// const useAddMeeting=(addMeetingSuccess:any)=>{
//     const queryClient=useQueryClient();
//  return useMutation(addMeeting,{
//     onSuccess:()=>{
//         addMeetingSuccess()
//         queryClient.invalidateQueries('getAllMeetingByIds')
//     },
//     onError:(err:any)=>{
//        console.log(err)
//     }
//  })
// }

export{
    useGetKeyResultMeetingHistory,
    useGetAllTeamChildByParentId,
    useAddCheckinMeeting
}