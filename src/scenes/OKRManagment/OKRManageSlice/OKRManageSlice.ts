import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';



// Define a type for the slice state
interface okrManageStateFace {
  okrDeleteData:any,
  

}
type UserInfo = {
  userTenants: any[];
  userId:string // This could be an array of a specific type, e.g., UserTenant[]
  // Add more properties here if needed
};

// Define the initial state using that type
const initialState: okrManageStateFace = {

    okrDeleteData:null,


  
}

// const setOkrDeleteState=()=>{

// }
const setOkrDeleteState=(state:any,action:PayloadAction<any>)=>{
    let{payload}=action;
  state.okrDeleteData=payload;
  }






export const okrManageSlice = createSlice({
  name: 'okrManage',
  initialState,
  reducers: {
setOkrDeleteState
  
   
  },
})



export const {
    setOkrDeleteState:setOkrDeleteStateR,
 } = okrManageSlice.actions



export default okrManageSlice.reducer

// export default interface Person {
//   name: string;
// }