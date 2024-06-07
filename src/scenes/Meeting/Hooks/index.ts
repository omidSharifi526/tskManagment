import { useQuery, useQueryClient, useMutation } from 'react-query';
import {
    getAllMeetingByIds,
    getAllTeamsByTenantId,
    getTeamDetailsById,
    getAllObjectiveByTeamId,
    getAllKeyResultByObjectiveId,
    getAllTeamStatusByTenantId,
    getWebCheckinMeetingDetailsByMeetingId,
    getWebObjectiveDetailsCheckinMeetingByTeamId,
    getAllTeamsForSelByTenantId,
    getAllMeetingsTypeByTenantId, addMeeting,
    exportMeetingDetails,
    getAllMyMeetingByIds,
    getMeetingKeyResultValueById,
    getMeetingDetailById,
    editMeeting,
    deleteMeeting,
    // getAllMeetingByIds

} from '../Api/Index';
import { setMeetingsListR, setObjectivieR, setKeyResultsR, setLoadingR } from '../MeetingsSlice/MeetingsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { setTeamsDataR } from '../MeetingsSlice/MeetingsSlice'
// useQuery


const useGetAllMeetings = (meetIds: any | null) => {
    const dispatch = useDispatch();
    return useQuery(['getAllMeetingByIds', meetIds], getAllMeetingByIds, {
        // staleTime: 0,
        cacheTime:Infinity,
        enabled: !!meetIds,
        refetchOnWindowFocus: false,
        onError: (err) => {
            // console.log(err)
        },
        select: (data: any) => {
            let rawData = data?.data.data;
            // console.log(rawData)
            dispatch(setMeetingsListR(rawData))
            return rawData
        }
    })
}

const useGetAllMyMeetings = (meetIds: any | null) => {
    const dispatch = useDispatch();
    return useQuery(['getAllMyMeetingByIds', meetIds], getAllMyMeetingByIds, {
        // staleTime: 0,
        cacheTime:Infinity,
        enabled: !!meetIds,
        refetchOnWindowFocus: false,
        onError: (err) => {
            // console.log(err)
        },
        select: (data: any) => {
            let rawData = data?.data.data;
            // console.log(rawData)
            dispatch(setMeetingsListR(rawData))
            return rawData
        }
    })
}

const useGetTeamsByTenantId = (getTeamsSuccess: any, getTeamsFailed: any, id: string) => {

    return useQuery(['getTeamsByTenantId', id], getAllTeamsByTenantId, {
        refetchOnWindowFocus: false,
        // cacheTime:Infinity,
        enabled: !!id,
        onSuccess: (data) => {

            getTeamsSuccess();

        },
        onError: (err) => {
            getTeamsFailed()
        }

    })
}

const useGetTeamDetailsById = () => {
    return useQuery(['getTeamDetailsById'], getTeamDetailsById, {
        onSuccess: (data) => {
            //    console.log(data)
        },
        onError: (err) => {
            // console.log(err)
        }

    })
}
// nbiiiiajdliJDFLSDJfZDlZDh bikohodiiiiiiiiii


const useGetAllObjectiveByTeamId = (nodeId: any) => {
    const dispatch = useDispatch();
    return useQuery(['getAllObjectiveByTeamId', nodeId], getAllObjectiveByTeamId, {
        enabled: !!nodeId,
        cacheTime: Infinity,
        refetchOnWindowFocus: false
        ,
        onSuccess: (data: any) => {
            let rawData = data?.data?.data
            //    console.log(rawData)
            dispatch(setObjectivieR(rawData))
        },
        onError: (err) => {
            // console.log(err)
        },


    })
}



const useGetAllKeyResultByObjectiveId = (objectiveId: any) => {
    const dispatch = useDispatch();
    return useQuery(['GetAllKeyResultByObjectiveId', objectiveId], getAllKeyResultByObjectiveId, {
        enabled: !!objectiveId,
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        onError: (err) => {
            // console.log(err)
        },
        onSuccess: (data) => {
            //    console.log(data)
            let rawdata = data?.data.data;
            //    console.log(rawdata);
            dispatch(setKeyResultsR(rawdata))
        },


    })
}

const useGetAllTeamStatusByTenantId = (id: any) => {
    return useQuery(['getAllTeamStatusByTenantId', 'f64c1efe-4213-4502-ab8a-018c88bc9f2d'], getAllTeamStatusByTenantId, {
        refetchOnWindowFocus: false,
        cacheTime: Infinity,
        enabled: !!id,
        onSuccess: (data) => {
            //  console.log(data)
        }
        ,
        onError: (err) => {
            console.log(err)
        }

    })
}

const UseGetWebCheckinMeetingDetailsByMeetingId = (getDetSuccess: any, getDetFailed: any, id: string) => {
    const dispatch = useDispatch()
    return useQuery(['getWebCheckinMeetingDetailsByMeetingId', id], getWebCheckinMeetingDetailsByMeetingId, {
        enabled: !!id,
        cacheTime: Infinity,
        refetchOnWindowFocus: false,
        onSuccess: (data: any) => {
            // console.log(data)
            getDetSuccess();
            // 
        }
        ,
        onError: (er) => {
            // console.log(er)
            getDetFailed()
        }
        ,
        select: (data) => {
            //  console.log(data)
            let teamData = data?.data?.data;
            // console.log(teamData)
            dispatch(setTeamsDataR(teamData));
        }
    })
}

const useGetAllObjectiveByTeamId2=(nodeId: any)=>{
    const dispatch = useDispatch();
    return useQuery(['getAllObjectiveByTeamId', nodeId], getAllObjectiveByTeamId, {
        enabled:false,
        cacheTime: Infinity,
        refetchOnWindowFocus: false
        ,
        onSuccess: (data: any) => {
            let rawData = data?.data?.data
            //    console.log(rawData)
            dispatch(setObjectivieR(rawData))
        },
        onError: (err) => {
            // console.log(err)
        },


    })
}

const useGetWebObjectiveDetailsCheckinMeetingByTeamId = (getObjectiveSuccess: any, getObjectiveError: any, id: String, priodId: string, meetingId: string) => {
    // console.log(priodId)
    const dispatch = useDispatch();
    return useQuery(['getWebObjectiveDetailsCheckinMeetingByTeamId', id, priodId, meetingId]
        , getWebObjectiveDetailsCheckinMeetingByTeamId, {
        cacheTime:1000,
        refetchOnWindowFocus: false,
        staleTime:1000,
        enabled: !!id,
        onSuccess: (data) => {
            let rawData = data?.data?.data
            // console.log(rawData)
            dispatch(setObjectivieR(rawData))
            getObjectiveSuccess();
            // return rawData

        }
        ,
        onError: (err) => {
            // console.log(err)

            getObjectiveError()

        }
    })
}

const useGetWebObjectiveDetailsCheckinMeetingByTeamId2 = (getObjectiveSuccess: any, getObjectiveError: any, id: String, priodId: string, meetingId: string) => {
    // console.log(priodId)
    const dispatch = useDispatch();
    return useQuery(['useGetWebObjectiveDetailsCheckinMeetingByTeamId2', id, priodId, meetingId]
        , getWebObjectiveDetailsCheckinMeetingByTeamId, {
        cacheTime:Infinity,
        refetchOnWindowFocus: false,
        // staleTime:1000,
        enabled: false,
        onSuccess: (data) => {
            let rawData = data?.data?.data
            // console.log(rawData)
            dispatch(setObjectivieR(rawData))
            getObjectiveSuccess();
            // return rawData

        }
        ,
        onError: (err) => {
            // console.log(err)

            getObjectiveError()

        }
    })
}


const useGetAllTeamsForSelByTenantId = (tenantId: any) => {
    return useQuery(['getAllTeamsForSelByTenantId', tenantId], getAllTeamsForSelByTenantId, {
        enabled: !!tenantId,
        refetchOnWindowFocus: false,
        onSuccess: (data) => {
            // console.log(data)
        }

        ,
        onError: (err) => {
            // console.log(err)
        },
        select: (data) => {
            let rawData = data?.data?.data;
            let readyData = rawData.map(({ id, name }: any) => {
                return { key: name, value: id }
            })
            return readyData
        }
    })
}


const useGetAllMeetingsTypeByTenantId = (tenantId: any) => {
    return useQuery(['GetAllMeetingsTypeByTenantId', tenantId], getAllMeetingsTypeByTenantId, {
        enabled: !!tenantId,
        refetchOnWindowFocus: false,
        onError: (err) => {
            // console.log(err)
        }
        ,
        onSuccess: (data) => {

        }
        ,
        select: (data: any) => {
            let rawData = data?.data?.data;
            let readyData: any[] = rawData.map(({ id, name }: any) => {
                return { key: name, value: id }
            })
            return readyData
        }
    })
}


const useAddMeeting = (addMeetingSuccess: any) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data:any) =>
            addMeeting(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries('getAllMeetingByIds')
        //   console.log(data)
        },
      });
}

 
// https://localhost:7170/api/Download/ExportMeetingDetails?meetingId=b7853e3c-f81b-461b-a360-197150b2a086


const useExportMeetingDetails=()=>{
return useQuery(['ExportMeetingDetails'],exportMeetingDetails,{
    onSuccess:(data:any)=>{
    // console.log(data)
    }
    ,
    onError:(err:any)=>{
//    console.log(err)
    }
})
}

// getMeetingKeyResultValueById
const useGetMeetingKeyResultValueById=(ids:any)=>{
    return useQuery(['getMeetingKeyResultValueById',ids],getMeetingKeyResultValueById,{
        
        enabled:!!ids,
        refetchOnWindowFocus:false,
        select:(data:any)=>{
            let rawData=data?.data?.data;
            // console.log(rawData)add
            return rawData
       
        }
    })
}

const useGetMeetingDetailById=(meetId:any)=>{
    return useQuery(['GetMeetingDetailById',meetId],getMeetingDetailById,{
        
        enabled:!!meetId,
        refetchOnWindowFocus:false,
        select:(data:any)=>{
            let rawData=data?.data?.data;
            // console.log(rawData)
            return rawData
       
        }
    }) 
}


const useEditMeeting=()=>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data:any) =>editMeeting(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries('getAllMeetingByIds')
        //   console.log(data)
        },
      });
}
const useDeleteMeeting=()=>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data:any) =>deleteMeeting(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries('getAllMeetingByIds')
        //   console.log(data)
        },
      });
}


export {
    useGetAllMeetings,
    useGetTeamsByTenantId,
    useGetTeamDetailsById,
    useGetAllObjectiveByTeamId,
    useGetAllKeyResultByObjectiveId,
    useGetAllTeamStatusByTenantId,
    UseGetWebCheckinMeetingDetailsByMeetingId,
    useGetWebObjectiveDetailsCheckinMeetingByTeamId,
    useGetAllTeamsForSelByTenantId,
    useGetAllMeetingsTypeByTenantId,
    useAddMeeting,
    useGetWebObjectiveDetailsCheckinMeetingByTeamId2,
    useExportMeetingDetails,
    useGetMeetingKeyResultValueById,
    useGetMeetingDetailById,
    useEditMeeting,
    useGetAllMyMeetings,
    useDeleteMeeting
}