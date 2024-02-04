import { useQuery } from 'react-query';
import {getAllMeetingByIds,
    getAllTeamsByTenantId,
    getTeamDetailsById,
    getAllObjectiveByTeamId,
    getAllKeyResultByObjectiveId,
    getAllTeamStatusByTenantId,
    getWebCheckinMeetingDetailsByMeetingId,
    getWebObjectiveDetailsCheckinMeetingByTeamId

} from '../Api/Index';
import {setMeetingsListR,setObjectivieR,setKeyResultsR} from '../MeetingsSlice/MeetingsSlice';
import { useDispatch } from 'react-redux';
import{setTeamsDataR} from '../MeetingsSlice/MeetingsSlice'
// useQuery


const useGetAllMeetings=(meetIds:any|null)=>{
    const dispatch=useDispatch();
    // console.log(meetIds)
    return useQuery(['getAllMeetingByIds',meetIds],getAllMeetingByIds,{
        cacheTime:Infinity,
        enabled:!!meetIds.priodId,
        onSuccess:(data)=>{
        // console.log(data)
        }
        ,
        onError:(err)=>{
         console.log(err)
        },
        select:(data:any)=>{
            let rawData=data?.data.data
            dispatch(setMeetingsListR(rawData))
            return rawData
        }
    })
}


const useGetTeamsByTenantId=(getTeamsSuccess:any,getTeamsFailed:any,id:string)=>{
   
return useQuery(['getTeamsByTenantId',id],getAllTeamsByTenantId,{
    refetchOnWindowFocus:false,
    cacheTime:Infinity,
    enabled:!!id,
    onSuccess:(data)=>{
       
        getTeamsSuccess();

    },
    onError:(err)=>{
        getTeamsFailed()
    }

})
}

const useGetTeamDetailsById=()=>{
    return useQuery(['getTeamDetailsById'],getTeamDetailsById,{
        onSuccess:(data)=>{
       console.log(data)
        },
        onError:(err)=>{
        console.log(err)
        }
    
    })
}
// nbiiiiajdliJDFLSDJfZDlZDh bikohodiiiiiiiiii


const useGetAllObjectiveByTeamId=(nodeId:any)=>{
    const dispatch=useDispatch();
    return useQuery(['getAllObjectiveByTeamId',nodeId],getAllObjectiveByTeamId,{
       enabled:!!nodeId,
       cacheTime:Infinity,
       refetchOnWindowFocus:false
       ,
        onSuccess:(data:any)=>{
            let rawData=data?.data?.data
       console.log(rawData)
       dispatch(setObjectivieR(rawData))
        },
        onError:(err)=>{
        console.log(err)
        },
        
    
    })
}

const useGetAllKeyResultByObjectiveId=(objectiveId:any)=>{
    const dispatch=useDispatch();
return useQuery(['GetAllKeyResultByObjectiveId',objectiveId],getAllKeyResultByObjectiveId,{
    enabled:!!objectiveId,
   cacheTime:Infinity,
   refetchOnWindowFocus:false,
   onError:(err)=>{
    console.log(err)
   },
   onSuccess:(data)=>{
   console.log(data)
   let rawdata=data?.data.data;
   console.log(rawdata);
   dispatch(setKeyResultsR(rawdata))
   },
  

})
}

const useGetAllTeamStatusByTenantId=(id:any)=>{
    return useQuery(['getAllTeamStatusByTenantId','f64c1efe-4213-4502-ab8a-018c88bc9f2d'],getAllTeamStatusByTenantId,{
      refetchOnWindowFocus:false,
      cacheTime:Infinity,
      enabled:!!id,
      onSuccess:(data)=>{
     console.log(data)
      }
      ,
      onError:(err)=>{
       console.log(err)
      }

    })
}

const UseGetWebCheckinMeetingDetailsByMeetingId=(getDetSuccess:any,getDetFailed:any,id:string)=>{
    const dispatch=useDispatch()
return useQuery(['getWebCheckinMeetingDetailsByMeetingId',id],getWebCheckinMeetingDetailsByMeetingId,{
enabled:!!id,
cacheTime:Infinity,
refetchOnWindowFocus:false,
onSuccess:(data:any)=>{
    // console.log(data)
    getDetSuccess();
    // 
}
,
onError:(er)=>{
// console.log(er)
getDetFailed()
}
,
select:(data)=>{
//  console.log(data)
 let teamData=data?.data?.data;
    // console.log(teamData)
    dispatch(setTeamsDataR(teamData));
}
})
}

const useGetWebObjectiveDetailsCheckinMeetingByTeamId=(getObjectiveSuccess:any,getObjectiveError:any,id:String,priodId:string,meetingId:string)=>{
    // console.log(priodId)
    const dispatch=useDispatch();
    return useQuery(['getWebObjectiveDetailsCheckinMeetingByTeamId',id,priodId,meetingId]
    ,getWebObjectiveDetailsCheckinMeetingByTeamId,{
    // cacheTime:Infinity,
    refetchOnWindowFocus:false,
    enabled:!!id,
    onSuccess:(data)=>{
        let rawData=data?.data?.data
        console.log(rawData)
        dispatch(setObjectivieR(rawData))
        getObjectiveSuccess()
        
    // console.log(data)
    }
    ,
    onError:(err)=>{
        console.log(err)
     
     getObjectiveError()
    
     }
    })
}



// https://api.myokr.ir/api/Meeting/GetWebObjectiveDetailsCheckinMeetingByTeamId?teamId=7e2a4838-c318-42b9-b874-56f61afeec39

export{
    useGetAllMeetings,
    useGetTeamsByTenantId,
    useGetTeamDetailsById,
    useGetAllObjectiveByTeamId,
    useGetAllKeyResultByObjectiveId,
    useGetAllTeamStatusByTenantId,
    UseGetWebCheckinMeetingDetailsByMeetingId,
    useGetWebObjectiveDetailsCheckinMeetingByTeamId
}