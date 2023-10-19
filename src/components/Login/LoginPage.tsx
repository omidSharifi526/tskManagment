import React from 'react'
import { Typography } from '@mui/material';
import { TextField, Button, Container,Box } from '@mui/material';
// import {NavLink,useNavigate} from 'react-router-dom';
import { Navigate } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
const LoginPage = () => {
  const[userPass,setUserPass]=useState({
    userName:'',
    password:''
  })
  const navigate = useNavigate();

  const initialLogin=()=>{
  
      if (userPass.userName==='admin'&&userPass.password==='tskpass') {
        navigate("/dashboard");
      }
      
  }

  const initialSetUserPass=(name:string,value:string)=>{
// console.log(name,value)
setUserPass(prev=>({...prev,[name]:value}))
// setCylinderValues(prev=>({...prev,[name]:value}))
  }


  return (
    <>
     <Container maxWidth="sm"sx={{height:'600px',display:'flex',alignItems:'center'}}>
      <form>
        <TextField
          label="نام کاربری"
          fullWidth
          margin="normal"
          variant="outlined"
          name='userName'
          value={userPass.userName}
          onChange={({target})=>{
            let{name,value}=target
            // console.log(name,value)
            initialSetUserPass(name,value)
            }}
        />
        <TextField
          label="رمز عبور"
          fullWidth
          margin="normal"
          variant="outlined"
          name='password'
          type='password'
          onChange={({target})=>{
          let{name,value}=target
          // console.log(name,value)
          initialSetUserPass(name,value)
          }}
        />
      <Box sx={{width:'100%'}} display='flex' justifyContent='center' >
      <Button variant="contained" size='large' color="primary"  onClick={()=>{
          initialLogin()
        }}>
          ورود
      
        </Button>
      </Box>
      </form>
    </Container>
    </>
  )
}

export default LoginPage