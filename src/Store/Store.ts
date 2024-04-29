import { configureStore } from '@reduxjs/toolkit';
import { loginSlice } from '../components/Login/LoginSlice/LoginSlice';
import { meetingsSlice } from '../scenes/Meeting/MeetingsSlice/MeetingsSlice';
import{useDispatch,TypedUseSelectorHook,useSelector} from 'react-redux';
// ...

const loadState = (): RootState | undefined => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState) as RootState;
  } catch (error) {
    return undefined;
  }
};



const saveState = (state: RootState): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (error) {
    
  }
};



const persistedState:any = loadState();
export const store = configureStore({
  
  reducer: {
   loign:loginSlice.reducer,
   meetings:meetingsSlice.reducer,
  },
  preloadedState: persistedState,
  
  
  
})

export const useAppDispatch:()=> typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  saveState(store.getState() as RootState);
});
