import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../components/Login/LoginSlice/LoginSlice';
import{useDispatch,TypedUseSelectorHook,useSelector} from 'react-redux'
// ...

export const store = configureStore({
  reducer: {
loign:counterSlice.reducer
  },
})

export const useAppDispatch:()=> typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
