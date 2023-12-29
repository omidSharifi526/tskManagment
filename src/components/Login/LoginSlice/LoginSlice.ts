import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';



// Define a type for the slice state
interface LoginState {
  userPhoneNumber:string
  userInfo: UserInfo
}
type UserInfo = {
  userTenants: any[]; // This could be an array of a specific type, e.g., UserTenant[]
  // Add more properties here if needed
};

// Define the initial state using that type
const initialState: LoginState = {
   userPhoneNumber:'',
   userInfo:{
    userTenants:[]
   }
}

const setUserPhoneNumber=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
state.userPhoneNumber=payload.phoneNumber;
}

const setUserData=(state:LoginState,action:PayloadAction<any>):any=>{
  let{payload}=action;
  // console.log(payload)
  state.userInfo.userTenants=payload.tenantInfoDtos;
// console.log(payload)
}

export const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    setUserData,
    setUserPhoneNumber
  
   
  },
})

export const {
  setUserPhoneNumber:setUserPhoneNumberR,
  setUserData:setUserDataR
 } = loginSlice.actions



export default loginSlice.reducer

// export default interface Person {
//   name: string;
// }