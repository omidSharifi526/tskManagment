import {useMutation,useQuery,useQueryClient} from 'react-query';
import { useNavigate } from 'react-router-dom';
import{login} from '../Api/index';

const useLogin = () => {
    const navigate=useNavigate();
    const queryClient = useQueryClient();
    queryClient.setMutationDefaults(["Login-user"], 
    {
      mutationFn: (data:any) => login(),
      onSuccess: (data) => {
        console.log(data.data.data)
        navigate('/dashboard',{replace:true})
        localStorage.setItem('accessToken',data.data.data.token)
      },


      onError: (error, variables, context) => {
       console.log(error)

      }

    });
    
    return useMutation(["Login-user"]);
  };

  
export {
    
    useLogin,
   

}