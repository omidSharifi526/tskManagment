import React,{useState,useEffect} from 'react';
import Loading from '../Loading/Loading';
import LoginLyt from '../Layouts/LoginLyt/LoginLyt';
import LoginForm from '../LoginFrom/LoginForm';
import ForgetPassword from '../ForgetPassword/ForgetPassword';
import {Container,Grid} from '@mui/material';
import ConfirmCode from './ConfirmCode/ConfirmCode';
import TypeofMembership from './TypeofMembership/TypeofMembership';
import PersonalUseRegistration from './PersonalUseRegistration/PersonalUseRegistration';
import EmployeesRegistration from './EmployeesRegistration/EmployeesRegistration';
import OwnerRegistration from './OwnerRegistration/OwnerRegistration';
const LoginPage = () => {

  const[contentState,setContentState]=useState({content:'login'});


  const renderContent=():any=>{
    let{content}=contentState;
// return <h1>wellCome</h1>
switch (content) {
  case 'loading':
    // return <Loading loading={true} setContentState={setContentState}  />
    return ''
    break;
  
    case 'login':
    return  <LoginForm setContentState={setContentState} />
    break;

    case 'forgetPassWord':
    return <ForgetPassword setContentState={setContentState}  />
    break;

    case 'confirmCode':
    return <ConfirmCode setContentState={setContentState}/>
    break;

    case 'typeofMembership':
      return <TypeofMembership setContentState={setContentState} />
      break;
      

      case 'personalUseRegistration':
      return <PersonalUseRegistration  />
      break;

      case 'employeesRegistration':
      return <EmployeesRegistration  />
      break;

      case 'ownerRegistration':
        return <OwnerRegistration/>
        break;




    




}
  }
  

  return (
    <>
<Grid container >
  <Grid item xs={12} md={5} height={'700px'}  bgcolor={'red'} >
<Loading loading={false} setContentState={setContentState}  />
  </Grid>
  <Grid item xs={12} md={7} height={'700px'} display={'flex'} alignItems={'center'}   mt={'10px'} >
{
  renderContent()
}
  </Grid>
</Grid>
    </>
  )
}

export default LoginPage