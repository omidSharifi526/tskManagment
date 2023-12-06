import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';



// Define a type for the slice state
interface LoginState {
  userPhoneNumber: string
}

// Define the initial state using that type
const initialState: LoginState = {
    userPhoneNumber: '',
}

const setUserPhoneNumber=(state:any,action:PayloadAction<string>)=>{
  let{payload}=action;
    // console.log(action)
state.userPhoneNumber=payload;
}

export const counterSlice = createSlice({
  name: 'Login',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUserPhoneNumber
   
    // Use the PayloadAction type to declare the contents of `action.payload`
   
  },
})

export const {setUserPhoneNumber:setUserPhoneNumberR } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer