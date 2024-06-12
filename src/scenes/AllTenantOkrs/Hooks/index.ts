import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
    getAllObjectiveByPeriodId,
    getAllObjectiveDefinitionLevelByTenantId
} from '../Api/index';


const useGetAllObjectiveByPeriodId=(periodId:string | null,profileTenantId:string | null)=>{
return useQuery(['GetAllObjectiveByPeriodId',periodId,profileTenantId],getAllObjectiveByPeriodId,{
    enabled:!!periodId,
    refetchOnWindowFocus:false,
    onSuccess:(data:any)=>{
    }
    ,onError:(err)=>{
    } ,
    select:(data)=>{
    let rawData=data?.data?.data;
    return rawData
    }
})
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
         let {name:key,id:value,isCompany
         }=item
        return {key,value,isCompany}
      })
      return transformed
     }
    })
  }


export{
    useGetAllObjectiveByPeriodId,
    useGetAllObjectiveDefinitionLevelByTenantId
}