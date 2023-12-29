import { useQuery } from 'react-query';
import {getAllMeetingByIds,
    getAllTeamsByTenantId,
    getTeamDetailsById,
    getAllObjectiveByTeamId,
    getAllKeyResultByObjectiveId,
    

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
        console.log(data)
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
    const dispatch=useDispatch()
return useQuery(['getTeamsByTenantId',id],getAllTeamsByTenantId,{
    refetchOnWindowFocus:false,
    cacheTime:Infinity,
    enabled:!!id,
    onSuccess:(data)=>{
        let teamData=data?.data?.data;
        dispatch(setTeamsDataR(teamData));
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

export{
    useGetAllMeetings,
    useGetTeamsByTenantId,
    useGetTeamDetailsById,
    useGetAllObjectiveByTeamId,
    useGetAllKeyResultByObjectiveId
}