import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';



// Define a type for the slice state
interface LoginState {
  rBaseUrl:string,
  userPhoneNumber:string
  userInfo: UserInfo,
  loginStatus:any,
  kRinitialState:any,
  ObjctivieInitialState:any

}
type UserInfo = {
  userTenants: any[];
  userId:string // This could be an array of a specific type, e.g., UserTenant[]
  // Add more properties here if needed
};

// Define the initial state using that type
const initialState: LoginState = {
   userPhoneNumber:'',
   rBaseUrl:'https://api.myokr.ir/api/',
   loginStatus:null,
   userInfo:{
    userId:'',
    userTenants:[]
   },

   ObjctivieInitialState:{
    columns: {
      columnVisibilityModel: {
        weight: false,
      }
    }
  }
  ,

   kRinitialState:{
    columns: {
      columnVisibilityModel: {
        rowid: false,
        okrStateName: false,
        okR_KeyResultType: false,
        pointingSystemType: false,
        forceEndDate: false,
        startDate: false,
        threeTenthsValue: false,
        oneValue: false
      }
    }
  }

  
}

const setUserPhoneNumber=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
state.userPhoneNumber=payload.phoneNumber;
}

const setUserData=(state:LoginState,action:PayloadAction<any>):any=>{
  let{payload}=action;
  // console.log(payload);
  state.userInfo.userId=payload?.userId;
  state.loginStatus=payload?.data
  state.userInfo.userTenants=payload?.tenantInfoDtos;
// console.log(payload)
}
const setinitialState=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  let{name,colVis}=payload
  // console.log(name,colVis)
  switch (name) {
    case 'ObjctivieInitialState':
      state.ObjctivieInitialState.columns.columnVisibilityModel=colVis
      break;
      case 'KRinitialState':
        state.kRinitialState.columns.columnVisibilityModel=colVis
      break;
  
   
  }
  

  

  }

export const loginSlice = createSlice({
  name: 'Login',
  initialState,
  reducers: {
    setUserData,
    setUserPhoneNumber,
    setinitialState
  
   
  },
})



export const {
  setUserPhoneNumber:setUserPhoneNumberR,
  setUserData:setUserDataR,
  setinitialState:setinitialStateR
 } = loginSlice.actions



export default loginSlice.reducer

// export default interface Person {
//   name: string;
// }