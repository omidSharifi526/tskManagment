import React,{useState} from 'react';
import {TextField} from '@mui/material'



type userInfoo={
    name:string,
    family:string,
    age:number
}

 const User = () => {
    const[userInfo,setUserInfo]=useState<userInfoo|null>({
        name:'',
        family:'',
        age:0
    })

    const setInfo=(ifo:any)=>{
     console.log(ifo)
     let{value,name}=ifo;
    //  setUserInfo((prev)=>({...prev,[name]:value}))
    }
  return (
<>
<div>UserInfo</div>
    <TextField 
    label='name'
    name='name' onChange={({target})=>{
        let{value,name}=target;
     setInfo({value,name})
    }} />

<TextField 
label='family'
name='family' onChange={({target})=>{
        let{value,name}=target;
     setInfo({value,name})
    }} />

<TextField 
label='age'
name='age' onChange={({target})=>{
        let{value,name}=target;
     setInfo({value,name})
    }} />
    <button onClick={()=>{
        console.log(userInfo)
    }} >
hi
    </button>
        
   
</>
  )
}
export default User