import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';




interface LoginState {

}

interface priodViewStateFace{
  treeView:boolean
}
type meetingsStateType = {
  priodId:string,
  periodName:string,
  meetingId:string,
  profileTenantId:string,
  teamId:string,
  profileName:string,
    periodList: any[],
    meetingsList:any,
    teamsData:any[],
    teamInfo:any,
    teamList:any[],
    companyList:any[],
    objectivie:any[],
    keyResults:any[],
    loading:boolean,
    objUpdated:boolean,
    changeTenantMode:boolean,
    meetSelectedDate:string,
    treeViewState:priodViewStateFace,
    counter:number,
    kRinitialState:any

    
 
};


const initialState:meetingsStateType = {
priodId:'',
periodName:'',
meetingId:'',
profileTenantId:'',
teamId:'',
profileName:'',
periodList:[],
meetingsList:null,
teamsData:[],
teamInfo:{},
companyList:[],
teamList:[],
objectivie:[],
keyResults:[],
loading:false,
objUpdated:false,
changeTenantMode:false,
meetSelectedDate:'',

treeViewState:{
treeView:true
}
,
counter:0,

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


const setPriodList=(state:any,action:PayloadAction<any>)=>{
    let {payload}=action
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
  // console.log(payload)
  state.loading=payload
}

const setTeamsData=(state:any,action:PayloadAction<any>)=>{
// webTeamCheckinMeetingDetailsQueryResultDtos
// webTeamHaveParentCheckinMeetingDetailsQueryResultDtos
// webTeamWithoutParentCheckinMeetingDetailsQueryResultDtos/////

let{payload:treeData}=action;
let{webTeamWithoutParentCheckinMeetingDetailsQueryResultDtos:treeStatus}=treeData;
// console.log(treeStatus,treeData)
if (treeStatus===null) {
  let{webTeamHaveParentCheckinMeetingDetailsQueryResultDtos:companyy}=treeData;
  let companyInfo=companyy[0];
  let{name,managerCompanyName,objectivesCount,keyResultsCount}=treeData;
  
  let totcompanyInfo={
    name:name,
    managerCompanyName:managerCompanyName,
    objectivesCount:objectivesCount,
    keyResultsCount:keyResultsCount,
    isCompany:true
  };
  state.teamInfo=totcompanyInfo;
  let{webTeamCheckinMeetingDetailsQueryResultDtos:teamsNode,...rest}=companyInfo;
  state.teamList=teamsNode;
  state.companyList=rest
  
}

}


const setTeamInfo=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  console.log(payload)


let teamInfoor={
  id:payload.id,
  name:payload.name,
  managerCompanyName:payload.managerCompanyName,
  keyResultsCount:payload.keyResultsCount,
  objectivesCount:payload.objectivesCount,
  isCompany:payload.isCompany


}

  state.teamInfo=teamInfoor
// console.log(payload)
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
state.objectivie=[];
// state.meetings.teamList=null
}

const setProfileName=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  // console.log(payload)
  state.profileName=payload;
  // console.log(payload)
}

const updateObj=(state:any)=>{
state.objUpdated=!state.objUpdated
}

const resetTeamInfo=(state:any)=>{
  state.teamInfo={};
}
const setPriodId=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  let {id,name}=payload
  state.priodId=id;
  state.periodName=name;
// console.log()
}

const setMeetingId=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  // console.log(payload)
  state.meetingId=payload.id;
  state.meetSelectedDate=payload.meetingDate;
}
// changeTenantMode

const setChangeTenantMode=(state:any,action:PayloadAction<any>)=>{
  let{payload}=action;
  state.changeTenantMode=payload;
}

const changeTreeViewState=(state:any)=>{
  state.treeViewState.treeView=!state.treeViewState.treeView
}

const setInitialTreeView=(state:any)=>{
  state.treeViewState.treeView=true;
}

const increaseCounter=(state:any)=>{
state.counter=state.counter+1;
}
const decreaseCounter=(state:any)=>{
  state.counter=state.counter-1;
}
const resetCounter=(state:any)=>{
  state.counter=0;
}
const resetTeamList=(state:any)=>{
state.meetings.teamList=null
}

const resetMeetingSlice=(state:any,action:PayloadAction<any>)=>{
  // console.log(action)
  state.priodId='';
  state.periodName='';
  state.meetingId='';
  state.profileTenantId='';
  state.teamId="";
  state.profileName="";
  state.periodList=[];
  state.meetingsList=null;
    state.teamsData=[];
    state.teamInfo={};
    state.companyList=[];
    state.teamList=[];
    state.objectivie=[];
    state.keyResults=[];
    state.loading=false;
    state.objUpdated=false;
    state.changeTenantMode=false;
    state.meetSelectedDate='';
    
    state.treeViewState={
    treeView:true
    };
    state.counter=0;
}

const setinitialState=(state:any,action:PayloadAction<any>)=>{
let{payload}=action;
console.log(payload)
// state.
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
    resetTeamInfo,
    setTeamInfo,
    setPriodId,
    setMeetingId,
    setChangeTenantMode,
    changeTreeViewState,
    increaseCounter,
    resetCounter,
    decreaseCounter,
    setInitialTreeView,
    resetTeamList,
    resetMeetingSlice,
    setinitialState
    
   
  },
})

export const {
    setPriodList:setPriodListR,
    setProfileTenantId:setProfileTenantIdR,
    setProfileName:setProfileNameR,
    setMeetingsList:setMeetingsListR,
    setLoading:setLoadingR,
    setTeamsData:setTeamsDataR,
    setTeamInfo:setTeamInfoR,
    setObjectivie:setObjectivieR,
    setKeyResults:setKeyResultsR,
    resetRValues:resetRValuesR,
    updateObj:updateObjR,
    resetTeamInfo:resetTeamInfoR,
    setPriodId:setPriodIdR,
    setMeetingId:setMeetingIdR,
    setChangeTenantMode:setChangeTenantModeR,
    changeTreeViewState:changeTreeViewStateR,
    increaseCounter:increaseCounterR,
    resetCounter:resetCounterR,
    decreaseCounter:decreaseCounterR,
    setInitialTreeView:setInitialTreeViewR,
    resetTeamList:resetTeamListR,
    resetMeetingSlice:resetMeetingSliceR,
    setinitialState:setinitialStateR
 } = meetingsSlice.actions



export default meetingsSlice.reducer

