import { useMutation, useQuery, useQueryClient } from 'react-query';
import {GetAllActivePersonByTenantId,
    GetAllHorizontalAlignmentByTenantId,
    GetAllOKRStateByTenantId,
    GetAllScoreLevelsByTenantId,
    AddKeyResult,
    getAllObjectiveByPeriodId,
    AddObjective,
    getAllObjectiveDefinitionLevelByTenantId,
    GetAllObjectiveOKRStateByTenantId

} from '../Api/index';
import { QueryClient } from 'react-query';

type option={
    id:string,
    name:string
}

// tenantId:any
const useGetAllActivePersonByTenantId=(tenantId:string|null)=>{
    return useQuery(['GetAllActivePersonByTenantId',tenantId],GetAllActivePersonByTenantId,{
        enabled:!!tenantId,
        cacheTime:Infinity,
        refetchOnWindowFocus:false,
   onSuccess:(data)=>{
//    console.log(data)
   }
   ,
   onError:(err:any)=>{
   console.log(err)
   },
   select:(data:any)=>{
   let rawData=data?.data?.data;
   let tranFormed;
   if (rawData) {
    tranFormed=rawData.map(({name,id}:option)=>{
     return{key:name,value:id}
    })
   }
   
   return tranFormed
   }
    })
}

const useGetAllHorizontalAlignmentByTenantId=(horzIds:any)=>{
    return useQuery(['GetAllHorizontalAlignmentByTenantId',horzIds],GetAllHorizontalAlignmentByTenantId,{
        enabled:!!horzIds.definitionId,
        cacheTime:Infinity,
        refetchOnWindowFocus:false,
            onSuccess:(data)=>{
            console.log(data)
            }
            ,
            onError:(err)=>{
            console.log(err)
            }
            ,
            select:(data:any)=>{
                let rawData=data?.data?.data;
                console.log(rawData)
                let transFormed=rawData?.map((item:any)=>{
                    let{name,id}=item
                    return {year:id,title:name}
                })
                // year, title
                return transFormed
                }
    })
}

const useGetAllOKRStateByTenantId=(tenantId:string|null)=>{
    return useQuery(['GetAllOKRStateByTenantId',tenantId],GetAllOKRStateByTenantId,{
     enabled:!!tenantId,
     cacheTime:Infinity,
     refetchOnWindowFocus:false,
     onSuccess:(data:any)=>{
      console.log(data)
     }
     ,
     onError:(err:any)=>{
     console.log(err)
     },
     select:(data)=>{
   let rawData=data?.data?.data;
  let tranformed=rawData.filter((item:any)=>item.name!=='بسته شده').map(({id,name}:any)=>{
    return {label:name,id:id}
  })
  return tranformed
     }
    })
}
const useGetAllScoreLevelsByTenantId=(tenantId:string|null)=>{
return useQuery(['GetAllScoreLevelsByTenantId',tenantId],GetAllScoreLevelsByTenantId,{
    enabled:!!tenantId,
    refetchOnWindowFocus:false,
    cacheTime:Infinity,
    onSuccess:(data:any)=>{
    console.log(data)
    },
    onError:(err:any)=>{
     console.log(err)
    }
    ,
    select:(data:any)=>{
    let rawData=data?.data?.data;
    // console.log(rawData);
    let levelids=rawData.map(({id}:any)=>{
        return {scoreLevelId:id,value:''}
    });
    return levelids
    // console.log(levelids)
    }

})
}


const useAddKeyResult=()=>{
    return useMutation(AddKeyResult,{
        onSuccess:(data:any)=>{
        console.log(data)
        }
        ,
        onError:(err:any)=>{
         console.log(err)
        }
    })
}

const useGetAllObjectiveByPeriodId=(periodId:string | null,profileTenantId:string | null)=>{
    console.log(periodId)
return useQuery(['GetAllObjectiveByPeriodId',periodId,profileTenantId],getAllObjectiveByPeriodId,{
    enabled:!!periodId,
    cacheTime:Infinity,
    refetchOnWindowFocus:false,
    onSuccess:(data:any)=>{
    console.log(data)
    }
    ,onError:(err)=>{
    console.log(err)
    } ,
    select:(data)=>{
    let rawData=data?.data?.data;
    return rawData
    }
})
}

// return useMutation({
//     mutationFn: (data:any) =>
//         addMeeting(data),
//     onSuccess: (data) => {
//         queryClient.invalidateQueries('getAllMeetingByIds')
//       console.log(data)
//     },
//   });



// AddObjective
 const useAddObjective=()=>{
const queryClient=useQueryClient()

      return useMutation({
    mutationFn: (data:any) =>
        AddObjective(data),
    onSuccess: (data) => {
        
        queryClient.invalidateQueries('GetAllObjectiveByPeriodId')
      console.log(data)
    },
  });
 }

 const useGetAllObjectiveDefinitionLevelByTenantId=(tenantId:string|null)=>{
   return useQuery(['getAllObjectiveDefinitionLevelByTenantId',tenantId],getAllObjectiveDefinitionLevelByTenantId,{
    enabled:!!tenantId,
    cacheTime:Infinity,
    refetchOnWindowFocus:false,
    onError:(err:any)=>{

    },
    select:(data:any)=>{
     let rawData=data?.data?.data;
     let transformed=rawData.map((item:any)=>{
        let {name:key,id:value}=item
       return {key,value}
     })
     return transformed
    }
   })
 }

//   return useMutation({
//     mutationFn: (data:any) =>
//         addMeeting(data),
//     onSuccess: (data) => {
//         queryClient.invalidateQueries('getAllMeetingByIds')
//       console.log(data)
//     },
//   });

// GetAllObjectiveOKRStateByTenantId
const useGetAllObjectiveOKRStateByTenantId=(tenantId:string|null)=>{
    return useQuery(['GetAllOKRStateByTenantId',tenantId],GetAllOKRStateByTenantId,{
        enabled:!!tenantId,
        cacheTime:Infinity,
        refetchOnWindowFocus:false,
        onError:(err)=>{
        console.log(err)
        },
        select:(data)=>{
            let rawData=data?.data?.data;
            let transformed=rawData.map((item:any)=>{
            let{id,name}=item;
             return{id,label:name}
            }).filter((item:any)=>item.label!=="بسته شده")
            return transformed
      
        // "بسته شده"
        }
        
    })
}


export{
    useGetAllActivePersonByTenantId,
    useGetAllHorizontalAlignmentByTenantId,
    useGetAllOKRStateByTenantId,
    useGetAllScoreLevelsByTenantId,
    useAddKeyResult,
    useGetAllObjectiveByPeriodId,
    useAddObjective,
    useGetAllObjectiveDefinitionLevelByTenantId,
    useGetAllObjectiveOKRStateByTenantId
}