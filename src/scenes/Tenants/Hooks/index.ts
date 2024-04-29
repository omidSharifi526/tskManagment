import {getAllTenantsInfo} from '../Api/Index';
import { useQuery,useMutation } from 'react-query';



const useGetAllTenantsInfo=()=>{
    return useQuery(['getAlltenantsInfo'],getAllTenantsInfo,{
        refetchOnWindowFocus:false,
        cacheTime:Infinity,
        
        onError:(err)=>{
        // console.log( err)
        },
        onSuccess:(data)=>{
            let rawdata=data?.data?.data;
            
        // console.log(data)
        }
        ,
        select:(data)=>{
            let rawdata=data?.data?.data;
             return rawdata
        }
    })
}

export{
    useGetAllTenantsInfo
}