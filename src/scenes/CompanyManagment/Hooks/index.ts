import { useMutation,useQuery,useQueryClient} from "react-query";
import {addTeam,getAllTeams,getAllActivePersonByTenantId,
  getAllPersonByTenantId,inviteUser,
  editPerson,deleteTeam,deletePerson,
  editPersonStaff,deleteInvitedPerson,
  getTeamDetail,
  editTeam,
  sendSms,
  personByInvitationCode,
  checkForgetCode,
  addNewPassWord,
  getUserProfileDetail,
  getPersonPicture,
  addPersonPicture
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


     const useAddTeam=()=>{
      const queryClient=useQueryClient()
      return useMutation({
    mutationFn: (userData:any) =>addTeam(userData),
    onSuccess: (data:any) => {
      queryClient.invalidateQueries('getAllTeams')
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



    // const useDeleteTeam=()=>{
    //   const queryClient=useQueryClient()
    //   return useMutation({
    // mutationFn: (userData:any) =>deleteTeam(userData),
    // onSuccess: (data:any) => {
    //   queryClient.invalidateQueries('getAllTeams')
    // },
    //  });
    //  }
// localEditKrSuccess:any
      const useDeleteTeam=()=>{
        const queryClient=useQueryClient()
          return useMutation({
        mutationFn: (data:any) =>deleteTeam(data),
        onSuccess: (data) => {
            queryClient.invalidateQueries('getAllTeams')

        },
      });
    
    
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

     const useEditTeam=()=>{
      const queryClient=useQueryClient()
      return useMutation({
    mutationFn: (userData:any) =>editTeam(userData),
    onSuccess: (data:any) => {
      queryClient.invalidateQueries('getAllTeams')
    },
  });
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

     const useSendSms=(sucessSendSms:any)=>{
      return useMutation({
    mutationFn: (body:any) =>sendSms(body),
    onSuccess: (data:any) => {
      sucessSendSms()
    },
  });
     }

     const usePersonByInvitationCode=(sucessSend:any)=>{
      return useMutation({
    mutationFn: (body:any) =>personByInvitationCode(body),
    onSuccess: (data:any) => {
      sucessSend()
    },
  });
     }

     const useCheckForgetCode=()=>{
      return useMutation({
        mutationFn: (body:any) =>checkForgetCode(body),
        onSuccess: (data:any) => {
          // successCheckForgetCode()
        },
      });
     }
    //  forgetPassword

    const useAddNewPassWord=(sucessForgetPassword:any)=>{
      return useMutation({
        mutationFn: (body:any) =>addNewPassWord(body),
        onSuccess: (data:any) => {
          sucessForgetPassword()
        },
      });
     }

    //  getUserProfileDetail

    const useGetUserProfileDetail=(ids:string|null)=>{
      return useQuery(['getUserProfileDetail',ids],getUserProfileDetail,{
       enabled:!!ids,
       refetchOnWindowFocus:false,
       cacheTime:Infinity,
       onError:(err:any)=>{
       console.log(err)
       }
       ,
      select:(data)=>{
        let rawData=data?.data?.data;
        return rawData

      }

      })
    }
    // getPersonPicture

    const useGetPersonPicture=(personId:string|null)=>{
      return useQuery(['getUserProfileImg',personId],getPersonPicture,{
       enabled:!!personId,
       refetchOnWindowFocus:false,
       cacheTime:Infinity,
       onError:(err:any)=>{
       console.log(err)
       }
       ,
      select:(data)=>{
        let rawData=data?.data?.data;
        return rawData

      }

      })
    }

    // const useAddPersonPicture=()=>{
    //   return useMutation({
    //     mutationFn: (body:any) =>addNewPassWord(body),
    //     onSuccess: (data:any) => {
    //       sucessForgetPassword()
    //     },
    //   });
    // }

    const useAddPersonPicture=(sucessSendSms:any)=>{
      const queryClient=useQueryClient()
      return useMutation({
     mutationFn: (body:any) =>addPersonPicture(body),
     onSuccess: (data:any) => {
      queryClient.invalidateQueries('getUserProfileImg')
      sucessSendSms()
    },
  });
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
       useEditTeam,
       useSendSms,
       usePersonByInvitationCode,
       useCheckForgetCode,
       useAddNewPassWord,
       useGetUserProfileDetail,
       useGetPersonPicture,
       useAddPersonPicture
     }