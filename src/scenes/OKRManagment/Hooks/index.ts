import { useQuery } from 'react-query';
import {GetAllActivePersonByTenantId,
    GetAllHorizontalAlignmentByTenantId,
    GetAllOKRStateByTenantId,
    GetAllScoreLevelsByTenantId

} from '../Api/index';


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

const useGetAllHorizontalAlignmentByTenantId=(tenantId:string|null)=>{
    return useQuery(['GetAllHorizontalAlignmentByTenantId',tenantId],GetAllHorizontalAlignmentByTenantId,{
        enabled:!!tenantId,
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
                return rawData
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
        return {id:id,value:''}
    });
    return levelids
    // console.log(levelids)
    }

})
}


export{
    useGetAllActivePersonByTenantId,
    useGetAllHorizontalAlignmentByTenantId,
    useGetAllOKRStateByTenantId,
    useGetAllScoreLevelsByTenantId
}