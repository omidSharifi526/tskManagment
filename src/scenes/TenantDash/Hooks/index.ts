import { useMutation, useQuery, useQueryClient } from 'react-query';
import {GetAllActivePersonByTenantId,
    GetAllHorizontalAlignmentByTenantId,
    GetAllOKRStateByTenantId,
    GetAllScoreLevelsByTenantId,
    AddKeyResult,
    getMyObjectiveByTenantId,
    getMyMeetingByTenantId,
    getMyKeyResultByTenantId,
    AddObjective,
    getObjectiveDetailsById,
    getDashBoardDataByTenantId,
    EditObjective,
    getAllObjectiveDefinitionLevelByTenantId,
    GetAllObjectiveOKRStateByTenantId,
    getObjectiveDetails,
    getKeyResultDetailsById,
    getAllObjectiveByPersonId,
    editKeyResult,
    deleteKr,
getAllObjectiveNameWithKeyResultsByTenantId,
getAllTeamAndPersonNameByTenantId,
    deleteObjective
    

} from '../Api/index';
import { QueryClient } from 'react-query';
import { useDispatch } from 'react-redux';
//import { setOkrDeleteStateR } from '../OKRManageSlice/OKRManageSlice';

type option={
    id:string,
    name:string
}

const useDeleteObject=()=>{
    const queryClient=useQueryClient()
    return useMutation({
  mutationFn: (userData:any) =>deleteObjective(userData),
  onSuccess: (data:any) => {
    queryClient.invalidateQueries('GetAllObjectiveByPeriodId')
  },
   });
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
//    console.log(err)
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
            // console.log(data)
            }
            ,
            onError:(err)=>{
            // console.log(err)
            }
            ,
            select:(data:any)=>{
                let rawData=data?.data?.data;
                // console.log(rawData)
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
    //   console.log(data)
     }
     ,
     onError:(err:any)=>{
    //  console.log(err)
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
    // console.log(data)
    },
    onError:(err:any)=>{
    //  console.log(err)
    }
    ,
    select:(data:any)=>{
    let rawData=data?.data?.data;
    // console.log(rawData);
    let levelids=rawData.map(({id,name}:any)=>{
        return {scoreLevelId:id,value:'',name}
    });
    return levelids
    // console.log(levelids)
    }

})
}


const useAddKeyResult=()=>{
    const queryClient=useQueryClient()
      return useMutation({
    mutationFn: (data:any) =>AddKeyResult(data),
    onSuccess: (data) => {
        queryClient.invalidateQueries('getObjectiveDetails')
    //   console.log(data)
    },
  });


}



const useEditKeyResult=(localEditKrSuccess:any)=>{
    const queryClient=useQueryClient()
      return useMutation({
    mutationFn: (data:any) =>editKeyResult(data),
    onSuccess: (data) => {
        queryClient.invalidateQueries('getObjectiveDetails')
        localEditKrSuccess()
    //   console.log(data)
    },
  });


}



const useGetMyObjectiveByTenantId=(periodId:string | null,profileTenantId:string | null)=>{
    // console.log(periodId)
return useQuery(['GetMyObjectiveByTenantId',periodId,profileTenantId],getMyObjectiveByTenantId,{
    enabled:!!periodId,
    // cacheTime:Infinity,
    refetchOnWindowFocus:false,
    onSuccess:(data:any)=>{
    // console.log(data)
    }
    ,onError:(err)=>{
    // console.log(err)
    } ,
    select:(data)=>{
    let rawData=data?.data?.data;
    return rawData
    }
})
}

const useGetDashBoardDataByyTenantId=(periodId:string | null,profileTenantId:string | null)=>{
    // console.log(periodId)
return useQuery(['GetMyDashBoardDataByTenantId',periodId,profileTenantId],getDashBoardDataByTenantId,{
    enabled:!!periodId,
    // cacheTime:Infinity,
    refetchOnWindowFocus:false,
    onSuccess:(data:any)=>{
    // console.log(data)
    }
    ,onError:(err)=>{
    // console.log(err)
    } ,
    select:(data)=>{
    let rawData=data?.data?.data;
    return rawData
    }
})
}


const useGetMyKeyResultByTenantId=(periodId:string | null,profileTenantId:string | null)=>{
    // console.log(periodId)
return useQuery(['GetMyKeyResultByTenantId',periodId,profileTenantId],getMyKeyResultByTenantId,{
    enabled:!!periodId,
    // cacheTime:Infinity,
    refetchOnWindowFocus:false,
    onSuccess:(data:any)=>{
    // console.log(data)
    }
    ,onError:(err)=>{
    // console.log(err)
    } ,
    select:(data)=>{
    let rawData=data?.data?.data;
    return rawData
    }
})
}

const useGetMyMeetingByTenantId=(periodId:string | null,profileTenantId:string | null)=>{
    // console.log(periodId)
return useQuery(['GetMyMeetingByTenantId',periodId,profileTenantId],getMyMeetingByTenantId,{
    enabled:!!periodId,
    // cacheTime:Infinity,
    refetchOnWindowFocus:false,
    onSuccess:(data:any)=>{
    // console.log(data)
    }
    ,onError:(err)=>{
    // console.log(err)
    } ,
    select:(data)=>{
    let rawData=data?.data?.data;
    return rawData
    }
})
}


const useGetAllObjectiveByPersonId=(periodId:string | null,profileTenantId:string | null)=>{
    // console.log(periodId)
return useQuery(['GetAllObjectiveByPersonId',periodId,profileTenantId],getAllObjectiveByPersonId,{
    enabled:!!periodId,
    // cacheTime:Infinity,
    refetchOnWindowFocus:false,
    onSuccess:(data:any)=>{
    // console.log(data)
    }
    ,onError:(err)=>{
    // console.log(err)
    } ,
    select:(data)=>{
    let rawData=data?.data?.data;
    return rawData
    }
})
}




// AddObjective
//  const useAddObjective=(onSuccesss:any)=>{
// const queryClient=useQueryClient()

//       return useMutation({
//     mutationFn: (data:any) => addObjective(data),
//     onSuccess: (data) => {
//         onSuccesss()
//         queryClient.invalidateQueries('GetAllObjectiveByPeriodId')
//     //   console.log(data)
//     },
//   });
//  }

const useAddObjective=()=>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data:any) =>AddObjective(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries('GetAllObjectiveByPeriodId')

        },
        onError:(err)=>{
        console.log(err)
        }
      });
}

const useEditObjective=()=>{
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data:any) =>EditObjective(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries('GetAllObjectiveByPeriodId')

        },
        onError:(err)=>{
        console.log(err)
        }
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
    //  console.log(rawData)
     let transformed=rawData.map((item:any)=>{
        let {name:key,id:value,isCompany
        }=item
       return {key,value,isCompany}
     })
     return transformed
    }
   })
 }

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
      
        
        }
        
    })
}


const useGetObjectiveDetails=(objectiveId:string|null)=>{
return useQuery(['getObjectiveDetails',objectiveId],getObjectiveDetails,{
enabled:!!objectiveId,
refetchOnWindowFocus:false,
cacheTime:Infinity,
onSuccess:(data:any)=>{
//  console.log(data)
},
select:(data)=>{
 let rawData=data?.data?.data;
//  console.log(rawData)
 return rawData
}
})
}

const useGetKeyResultDetailsById=(krId:string|null)=>{
    return useQuery(['GetKeyResultDetailsById',krId],getKeyResultDetailsById,{
        enabled:!!krId,
        refetchOnWindowFocus:false,
        cacheTime:Infinity,
        onSuccess:(data:any)=>{
         console.log(data)
        },
        select:(data)=>{
         let rawData=data?.data?.data;
        //  console.log(rawData)
         return rawData
        }
        })
}


const useGetObjectiveDetailsById=(krId:string|null)=>{
    return useQuery(['GetObjectiveDetailsById',krId],getObjectiveDetailsById,{
        enabled:!!krId,
        refetchOnWindowFocus:false,
        cacheTime:Infinity,
        onSuccess:(data:any)=>{
         console.log(data)
        },
        select:(data)=>{
         let rawData=data?.data?.data;
        //  console.log(rawData)
         return rawData
        }
        })
}

const useGetAllObjectiveNameWithKeyResultsByTenantId=(Ids:any|null)=>{
    return useQuery(['GetAllObjectiveNameWithKeyResultsByTenantId',Ids],getAllObjectiveNameWithKeyResultsByTenantId,{
        enabled:!!Ids.definitionLevelId,
        refetchOnWindowFocus:false,
        cacheTime:Infinity,
        onSuccess:(data:any)=>{
        //  console.log(data)
        },
        select:(data)=>{
         let rawData=data?.data?.data;
         let transFormed=rawData?.map((item:any)=>{
        let{name,keyResultsQueryResultDtos}=item;
        let teransformedd={gName:name,items:keyResultsQueryResultDtos}
        return teransformedd
         })
         return transFormed
        }
        })
}

const useGetAllTeamAndPersonNameByTenantId=(tenantId:any|string)=>{
    return useQuery(['GetAllTeamAndPersonNameByTenantId',tenantId],getAllTeamAndPersonNameByTenantId,{
        enabled:!!tenantId,
        refetchOnWindowFocus:false,
        cacheTime:Infinity,
        onSuccess:(data:any)=>{
        //  console.log(data)
        },
        select:(data)=>{
         let rawData=data?.data?.data;
         return rawData      
       
        }
        })

}



export{
    useGetAllActivePersonByTenantId,
    useGetAllHorizontalAlignmentByTenantId,
    useGetAllOKRStateByTenantId,
    useGetAllScoreLevelsByTenantId,
    useAddKeyResult,
    useGetMyMeetingByTenantId,
    useGetMyKeyResultByTenantId,
    useGetMyObjectiveByTenantId,
    useGetAllObjectiveByPersonId,
    useAddObjective,
    useGetAllObjectiveDefinitionLevelByTenantId,
    useGetAllObjectiveOKRStateByTenantId,
    useGetObjectiveDetails,
    useGetKeyResultDetailsById,
    useGetDashBoardDataByyTenantId,
    useEditKeyResult,
    useEditObjective,
    useGetObjectiveDetailsById,
    useDeleteObject,
    useGetAllObjectiveNameWithKeyResultsByTenantId,
    useGetAllTeamAndPersonNameByTenantId
}