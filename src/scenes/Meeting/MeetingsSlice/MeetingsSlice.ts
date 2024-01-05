import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';




interface LoginState {

}
type meetingsStateType = {
  profileTenantId:string,
    periodList: any[],
    meetingsList:any[],
    teamsData:any[],
    teamInfo:any,
    objectivie:any[],
    keyResults:any[],
    loading:boolean,
    
 
};


const initialState:meetingsStateType = {
profileTenantId:'',
periodList:[],
meetingsList:[],
teamsData:[],
teamInfo:{},
objectivie:[],
keyResults:[],
loading:false
}


const setPriodList=(state:any,action:PayloadAction<any>)=>{
    let {payload}=action
console.log(payload);
state.periodList=payload;
}

const setProfileTenantId=(state:any,action:PayloadAction<any>)=>{
  let {payload}=action
state.profileTenantId=payload;
// console.log('ihihhihi')
}

const setMeetingsList=(state:any,action:PayloadAction<any>)=>{
  let {payload}=action;
  state.meetingsList=payload;
}

const setLoading=(state:any,action:PayloadAction<any>)=>{
  let {payload}=action;
  state.loading=payload
}

const setTeamsData=(state:any,action:PayloadAction<any>)=>{
let{payload}=action;
console.log(payload)
state.teamInfo=payload;
// state.teamsData=[];
}



const setObjectivie=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  state.objectivie=payload;
}

const setKeyResults=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  state.keyResults=payload;
}





export const meetingsSlice = createSlice({
  name: 'MeetingsSlice',
  initialState,
  reducers: {
    setPriodList,
    setProfileTenantId,
    setMeetingsList,
    setLoading,
    setTeamsData,
    setObjectivie,
    setKeyResults
  
   
  },
})

export const {
    setPriodList:setPriodListR,
    setProfileTenantId:setProfileTenantIdR,
    setMeetingsList:setMeetingsListR,
    setLoading:setLoadingR,
    setTeamsData:setTeamsDataR,
    setObjectivie:setObjectivieR,
    setKeyResults:setKeyResultsR
 } = meetingsSlice.actions



export default meetingsSlice.reducer

