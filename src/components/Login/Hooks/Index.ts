import {useMutation,useQuery,useQueryClient} from 'react-query';
import { useNavigate } from 'react-router-dom';
import{login,getPriodById} from '../Api/index';
import {setUserDataR} from '../LoginSlice/LoginSlice';
import { useDispatch } from 'react-redux';
import{setPriodListR} from '../../../scenes/Meeting/MeetingsSlice/MeetingsSlice';
import { useAuth } from "../../../Context/AuthProvider";

const useLogin = (loginSuccess:any,loginFailed:any) => {
    const dispatch=useDispatch();
    const newAuth = useAuth();

    const queryClient = useQueryClient();
    queryClient.setMutationDefaults(["Login-user"], 
    {
      mutationFn: (data:any) => login(data),
      onSuccess: (data) => {
        console.log(data.data.isSuccess);
        let isSuccess=data.data.isSuccess
        if (isSuccess) {
          loginSuccess()
        }
        // console.log(data.data)
        // console.log(data.data.data)
        let userData=data?.data?.data;
        // console.log(userData)
        // console.log(userData)
        dispatch(setUserDataR(userData))
        localStorage.setItem('accessToken',userData?.accessToken);
        
        newAuth.login(userData)
      },


      onError: (error, variables, context) => {
       console.log(error)

      }

    });
    
    return useMutation(["Login-user"]);
  };


  const useGetPriodById=(id:string|null,onSuccesss:any,onFailed:any)=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    // console.log(id)
    return useQuery(['getPeriodById',id],getPriodById,{
  //  retry:false,
   enabled:!!id,
   cacheTime:0,
   staleTime:0,
   refetchOnWindowFocus:false,
   onSuccess:(data:any):void=>{
    let rawData=data;
    dispatch(setPriodListR(rawData));
    onSuccesss()
    // navigate('/dashboard/meetings',{replace:true})
   },
   onError:(err)=>{
  //  console.log(err)
   },
   select:(data:any)=>{
    let rawData:any[]=data?.data.data;
    return rawData
   }

    })
  }

  
export {
    
    useLogin,
    useGetPriodById
   

}