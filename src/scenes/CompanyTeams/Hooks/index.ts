import {GetKeyResultMeetingHistory,
    GetAllTeamChildByParentId,
    addCheckinMeeting,
    GetKeyResultHistoryCheckinByKeyResultId
} from '../Api/index';
import { useDispatch } from 'react-redux';
import { setAddKrStatusDataR } from '../../Meeting/MeetingsSlice/MeetingsSlice';
import { useMutation, useQuery } from 'react-query';
import { v4 as uuidv4 } from 'uuid';
import { useQueryClient } from 'react-query';

const useGetKeyResultMeetingHistory=(krId:string|null,prId:string|null,meetId:string|null)=>{
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





// const useAddCheckinMeeting=(addCheckinSuccess:any)=>{
//     const dispatch=useDispatch();
//     const queryClient=useQueryClient()
//     return useMutation({
//   mutationFn: (checkinData:any) =>AddCheckinMeeting(checkinData),
//   onSuccess: (data:any) => {
//     dispatch(setAddKrStatusDataR(data?.data))
//         addCheckinSuccess()

 
//   },
// });
//    }

// const useAddCheckinMeeting=(addCheckinSuccess:any)=>{
//     const dispatch=useDispatch();
//     const queryClient=useQueryClient()
//       return useMutation({
//     mutationFn: (data:any) =>AddCheckinMeeting(data),
//     onSuccess: (data) => {

//         dispatch(setAddKrStatusDataR(data?.data))
//         addCheckinSuccess()

//         // queryClient.invalidateQueries('getObjectiveDetails')
//         // localEditKrSuccess()
//     //   console.log(data)
//     },
//   });
// }

const useAddCheckinMeeting=()=>{
        const dispatch=useDispatch();
    // const queryClient=useQueryClient()
      return useMutation({
    mutationFn: (data:any) =>addCheckinMeeting(data),
    onSuccess: (data) => {
        // dispatch(setAddKrStatusDataR(data?.data))
        // addCheckinSuccess()
    },
  });
}


// const useAddObjective=(onSuccesss:any)=>{
//     const queryClient=useQueryClient()
    
//           return useMutation({
//         mutationFn: (data:any) =>
//             AddObjective(data),
//         onSuccess: (data) => {
//             onSuccesss()
//             queryClient.invalidateQueries('GetAllObjectiveByPeriodId')
//         //   console.log(data)
//         },
//       });
//      }





// const useAddTeam=()=>{
//     const queryClient=useQueryClient()
//           return useMutation({
//         mutationFn: (teamData:any) =>
//             addTeam(teamData),
//         onSuccess: (data) => {
//           queryClient.invalidateQueries('getAllTeams')
//         //  console.log(data)
//         },
//       });
//      }


// const useGetKeyResultHistoryCheckinByKeyResultId=()=>{
//     return useQuery(['GetKeyResultHistoryCheckinByKeyResultId'],
//     GetKeyResultHistoryCheckinByKeyResultId,{
//         cacheTime:Infinity,
//         refetchOnWindowFocus:false,
//         onError:()=>{

//         },
//         select:(data:any)=>{
//         // let rawData=data?.data
//         console.log(data)
//         // return rawData
//         },
//         onSuccess:(data)=>{
//             console.log('jijijij')
//         console.log(data)
//         }
//     }
   
        
//     )
// }


// (teamId:string | null,meetingId:string | null,priodId:string | null
const useGetKeyResultHistoryCheckinByKeyResultId=(formIds:any)=>{
    // let ids={teamId:teamId,meetingId:meetingId,priodId:priodId}
    return useQuery(['GetKeyResultHistoryCheckinByKeyResultId',formIds],GetKeyResultHistoryCheckinByKeyResultId,{
    enabled:!!formIds.keyResultId,
    cacheTime:Infinity,
    refetchOnWindowFocus:false,
    onError:(err)=>{
    // console.log(err)
    }
    ,
    select:(data:any)=>{
        let rawData=data?.data?.data;
        return rawData
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
    useAddCheckinMeeting,
    useGetKeyResultHistoryCheckinByKeyResultId
}