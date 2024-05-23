import { useMutation,useQuery,useQueryClient} from "react-query";
import {addTeam,getAllTeams,getAllActivePersonByTenantId,
  getAllPersonByTenantId,inviteUser,
  editPerson,deleteTeam,deletePerson,
  editPersonStaff,deleteInvitedPerson,
  getTeamDetail,
  editTeam
} from '../Api/index'


const useGetAllTeams=(tenantId:string|null)=>{
    return useQuery(['getAllTeams',tenantId],getAllTeams,{
        enabled:!!tenantId,
        cacheTime:Infinity,
        refetchOnWindowFocus:false,
     onError:(err:any)=>{
          //  console.log(err)
     }
    ,
    
    select:(data:any)=>{
  let rawData=data?.data?.data;
  return rawData;
    }
    })
}


const useGetAllActivePersonByTenantId=(tenantId:string|null)=>{
  return useQuery(['GetAllActivePersonByTenantId',tenantId],getAllActivePersonByTenantId,{
  enabled:!!tenantId,
  cacheTime:Infinity,
  refetchOnWindowFocus:false,
  onError:(err:any)=>{
  //  console.log(err)
  }
  ,
  select:(data:any)=>{
  let rawData=data?.data.data;
  // return rawData;
  // jobTypeName
  let transformed=rawData.map((item:any,i:number)=>{
    let{jobTypeName,id,name}=item
  return {key:name+'\xa0\xa0\xa0\xa0\xa0\xa0\xa0'+jobTypeName,value:id}
  })

  return transformed


  }
  })
}


const useAddTeam=()=>{
    const queryClient=useQueryClient()
          return useMutation({
        mutationFn: (teamData:any) =>
            addTeam(teamData),
        onSuccess: (data) => {
          queryClient.invalidateQueries('getAllTeams')
        //  console.log(data)
        },
      });
     }

     const useGetAllPersonByTenantId=(tenantId:string|null)=>{
     return useQuery(['getAllPersonByTenantId',tenantId],getAllPersonByTenantId,{
      enabled:!!tenantId,
      cacheTime:Infinity,
      refetchOnWindowFocus:false,

      onSuccess:(data:any)=>{
      // console.log(data)
      },
      select:(data:any)=>{
        let rawData=data?.data?.data;
        return rawData
      // console.log(data)
      }
     })
     }

     const useInviteUser=()=>{
      const queryClient=useQueryClient()
      return useMutation({
    mutationFn: (userData:any) =>
      inviteUser(userData),
    onSuccess: (data:any) => {
      queryClient.invalidateQueries('getAllPersonByTenantId')
    },
  });
     }

     const useGetPersonDetails=(perId:string|null)=>{
      console.log(perId)
  
      return useQuery(['GetPersonDetails',perId],editPerson,{
       enabled:!!perId,
       refetchOnWindowFocus:false,
       cacheTime:Infinity,
       onError:(err:any)=>{
       console.log(err)
       }
       ,
      select:(data)=>{
        let rawData=data?.data.data;
        return rawData
      //  console.log(data)
      }

      })
     
     }


     const useDeleteTeam=()=>{
      const queryClient=useQueryClient()
      return useMutation(deleteTeam,{
        onSuccess:()=>{
          queryClient.invalidateQueries('getAllTeams')
        }
        ,

      })
     }





    const useDeletePerson=()=>{
      const queryClient=useQueryClient()
      return useMutation({
    mutationFn: (userData:any) =>deletePerson(userData),
    onSuccess: (data:any) => {
      queryClient.invalidateQueries('getAllPersonByTenantId')
    },
     });
     }

 

    const useDeleteInvitedPerson=()=>{
      const queryClient=useQueryClient()
      return useMutation({
    mutationFn: (userData:any) =>deleteInvitedPerson(userData),
    onSuccess: (data:any) => {
      queryClient.invalidateQueries('getAllPersonByTenantId')
    },
  });
     }

     






    const useEditPersonStaff=(editSuccess:any)=>{
      const queryClient=useQueryClient()
      return useMutation({
    mutationFn: (userData:any) =>editPersonStaff(userData),
    onSuccess: (data:any) => {
      queryClient.invalidateQueries('getAllPersonByTenantId')
    },
  });
     }
  






     const useEditTeam=(EditTeamSuccess:any)=>{
      const queryClient=useQueryClient();
      return useMutation(editTeam,{
        onSuccess:()=>{
          queryClient.invalidateQueries('getAllTeams');
          EditTeamSuccess()
        }
        ,

      })
     }

     const useGetTeamDetail=(teamId:string|null)=>{
       return useQuery(['GetTeamDetails',teamId],getTeamDetail,{
        enabled:!!teamId,
        refetchOnWindowFocus:false,
        cacheTime:Infinity,
        onError:(err:any)=>{
        console.log(err)
        }
        ,
       select:(data)=>{
         let rawData=data?.data.data;
         return rawData
       //  console.log(data)
       }
 
       })
     }
     

     export{
       useAddTeam,
       useGetAllTeams,
       useGetAllActivePersonByTenantId,
       useGetAllPersonByTenantId,
       useInviteUser,
       useGetPersonDetails,
       useDeleteTeam,
       useDeletePerson,
       useEditPersonStaff,
       useDeleteInvitedPerson,
       useGetTeamDetail,
       useEditTeam
     }