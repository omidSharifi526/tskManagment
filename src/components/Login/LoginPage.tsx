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
import UserTypeSelection from '../../scenes/Meeting/LComponents/UserTypeSelection/UserTypeSelection';
import LyBackdrop from '../Layouts/BackDrop/BackDrop';
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
      return <PersonalUseRegistration setContentState={setContentState}  />
      break;

      case 'employeesRegistration':
      return <EmployeesRegistration setContentState={setContentState} />
      break;

      case 'ownerRegistration':
        return <OwnerRegistration setContentState={setContentState}/>
        break;



        case 'userTypeSelection':
       return <UserTypeSelection   />
      break;



    




}
  }

  if (contentState.content==='userTypeSelection') {
    return <LyBackdrop visible={true} >
      <UserTypeSelection/>
    </LyBackdrop>
  } 
  

  return (
    <>
<Grid container >
  <Grid item xs={12} md={5}  >
<Loading loading={false} setContentState={setContentState}  />
  </Grid>
  <Grid item xs={12} md={6} height={'600px'} display={'flex'} alignItems={'start'}   mt={'50px'} >
{
  renderContent()
}
  </Grid>
</Grid>
    </>
  )
}

export default LoginPage