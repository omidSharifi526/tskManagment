import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';




interface LoginState {

}
type meetingsStateType = {

  profileTenantId:string,
  profileName:string,
    periodList: any[],
    meetingsList:any[],
    teamsData:any[],
    teamInfo:any,
    objectivie:any[],
    keyResults:any[],
    loading:boolean,
    objUpdated:boolean
    
 
};


const initialState:meetingsStateType = {
profileTenantId:'',
profileName:'',
periodList:[],
meetingsList:[],
teamsData:[],
teamInfo:{},
objectivie:[],
keyResults:[],
loading:false,
objUpdated:false
}


const setPriodList=(state:any,action:PayloadAction<any>)=>{
    let {payload}=action
// console.log(payload);
state.periodList=payload;
}

const setProfileTenantId=(state:any,action:PayloadAction<any>)=>{
  let {payload}=action
state.profileTenantId=payload.tenantId;
state.profileName=payload.tenantName;
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

const resetRValues=(state:any)=>{
state.teamInfo={};
state.objectivie=[]
}

const setProfileName=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  console.log(payload)
}

const updateObj=(state:any)=>{
state.objUpdated=!state.objUpdated
}

const resetTeamInfo=(state:any)=>{
  state.teamInfo={};
}





export const meetingsSlice = createSlice({
  name: 'MeetingsSlice',
  initialState,
  reducers: {
    setPriodList,
    setProfileTenantId,
    setProfileName,
    setMeetingsList,
    setLoading,
    setTeamsData,
    setObjectivie,
    setKeyResults,
    resetRValues,
    updateObj,
    resetTeamInfo
  
   
  },
})

export const {
    setPriodList:setPriodListR,
    setProfileTenantId:setProfileTenantIdR,
    setProfileName:setProfileNameR,
    setMeetingsList:setMeetingsListR,
    setLoading:setLoadingR,
    setTeamsData:setTeamsDataR,
    setObjectivie:setObjectivieR,
    setKeyResults:setKeyResultsR,
    resetRValues:resetRValuesR,
    updateObj:updateObjR,
    resetTeamInfo:resetTeamInfoR
 } = meetingsSlice.actions



export default meetingsSlice.reducer

