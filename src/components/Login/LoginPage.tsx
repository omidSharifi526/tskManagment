import React,{useState,useEffect} from 'react';
import Loading from '../Loading/Loading';
import LoginLyt from '../Layouts/LoginLyt/LoginLyt';
import LoginForm from '../LoginFrom/LoginForm';
import ForgetPassword from '../ForgetPassword/ForgetPassword';


const LoginPage = () => {

  const[contentState,setContentState]=useState({content:'loading'});


  const renderContent=():any=>{
    let{content}=contentState;
// return <h1>wellCome</h1>
switch (content) {
  case 'loading':
    return <Loading setContentState={setContentState}  />
    break;
  
    case 'login':
    return  <LoginForm setContentState={setContentState} />
    break;

    case 'forgetPassWord':
    return <ForgetPassword setContentState={setContentState}  />
    break;
}
  }
  

  return (
    <>
    <LoginLyt>
    {
      renderContent()
    }
    </LoginLyt>

    </>
  )
}

export default LoginPage