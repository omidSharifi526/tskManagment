import { getTenantSetting,addTenantSettings } from "../Api";
import { useQuery,useMutation,useQueryClient } from "react-query";
// {
//     "tenantId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//     "twoFactorAuthentication": true,
//     "useActiveDirectory": true,
//     "unUseDeActivedPersonData": true,
//     "unUseDeletedPersonData": true,
//     "checkPeriod": true,
//     "applyKeyResultInNextMeetings": true,
//     "applyObjectiveInNextMeetings": true,
//     "editObjectiveByAdmin": true,
//     "editKeyResultByAdmin": true
//   }




const useGetTenantSetting=(tenantId:string|null)=>{
return useQuery(['GetTenantSetting',tenantId],getTenantSetting,{
    onError:(err:any)=>{
    console.log(err)
    },
    select:(data:any)=>{
        let rawData=data?.data?.data?.settings;
        return rawData;
    // console.log(data)
    } 
})
}
const useAddSettings=()=>{
    const queryClient=useQueryClient()
    return useMutation({
  mutationFn: (tenantSettingsData:any) =>
  addTenantSettings(tenantSettingsData),
  onSuccess: (data:any) => {
    // console.log(data)
    queryClient.invalidateQueries('GetTenantSetting')
  },
});
   }

export{
    useGetTenantSetting,
    useAddSettings
}