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
        // console.log(data.data.data);
        loginSuccess()
        // console.log(data.data.data)
        let userData=data?.data.data
        dispatch(setUserDataR(userData))
        localStorage.setItem('accessToken',data?.data.data);
        
        newAuth.login(data?.data.data)
      },


      onError: (error, variables, context) => {
       console.log(error)

      }

    });
    
    return useMutation(["Login-user"]);
  };


  const useGetPriodById=(id:string|null)=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    console.log(id)
    return useQuery(['getPeriodById',id],getPriodById,{
   enabled:!!id,
   cacheTime:Infinity,
   refetchOnWindowFocus:false,
   onSuccess:(data:any):void=>{
    let rawData=data;
    dispatch(setPriodListR(rawData))
    navigate('/dashboard/meetings',{replace:true})
   },
   onError:(err)=>{
   console.log(err)
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