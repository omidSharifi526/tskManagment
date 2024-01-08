import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DyLoadingCircular from '../DyLoadingCircular/DyLoadingCircular';
import { useSelector } from 'react-redux';
import { useEffect,useState,useLayoutEffect } from 'react';
import DYToastMessage from '../DyToastMessage/DYToastMessage';
import CircularProgress from '@mui/material/CircularProgress';
// import dyPro
import { Box } from '@mui/material';
import LyBackdrop from '../../Layouts/BackDrop/BackDrop';
import {useGetTeamsByTenantId,useGetTeamDetailsById,
  useGetAllObjectiveByTeamId,
  useGetAllTeamStatusByTenantId,
  useGetWebObjectiveDetailsCheckinMeetingByTeamId} from '../../../scenes/Meeting/Hooks/index'
export default function DyTreeView({setTabIndex}:any) {

const teamsData=useSelector((state:any)=>state.meetings.teamInfo);
// console.log(teamsData);
const[nodeId,setNodeId]=useState<any>('');
const[companys,setCompanys]=useState<any|null>([]);
const[teams,setTeams]=useState<any|null>([])
// const {data}=useGetAllObjectiveByTeamId(nodeId);
// const{data:teamStatusData}=useGetAllTeamStatusByTenantId(nodeId);
const getObjectiveSuccess=()=>{
  
}
const getObjectiveError=()=>{
  setToastMessage(true)
}
const{data,isError:getObjectiveErrorFlag,isLoading:getObjLoading}=useGetWebObjectiveDetailsCheckinMeetingByTeamId(getObjectiveSuccess,getObjectiveError,nodeId);
const[treeNodes,setTreeNodes]=useState<any>([]);
const [renderContent,setRenderContent]=useState<any>(null);
const[toastMessage,setToastMessage]=useState<any>(false)
  
useLayoutEffect(() => {
let teamData={...teamsData};
// console.log(teamData)
// webTeamWithoutParentCheckinMeetingDetailsQueryResultDtos


let TeamWithoutParent:any=teamData?.webTeamWithoutParentCheckinMeetingDetailsQueryResultDtos;
console.log(TeamWithoutParent)

if (TeamWithoutParent===null) {
  // console.log(teamsData)
  // console.log('companyAndTeams')
  let company=teamData?.webTeamHaveParentCheckinMeetingDetailsQueryResultDtos;
  let teams=teamData?.webTeamHaveParentCheckinMeetingDetailsQueryResultDtos[0]?.webTeamCheckinMeetingDetailsQueryResultDtos;
   setCompanys(company);
   setTeams(teams);
   setRenderContent('companyAndTeams')
   console.log(company);
   console.log(teams)
  // console.log(company)
} else {
  console.log(teamData);
  let teams=teamData?.webTeamWithoutParentCheckinMeetingDetailsQueryResultDtos;
  setTeams(teams);
  console.log(teams)
  setRenderContent('teams')
  // setCompanys(company);
  // console.log('teams',company)
}
// console.log(content)
// setRenderContent(TeamWithoutParent)

}, [])
// console.log(companys);
// console.log(teams)

useEffect(() => {
  let totalData={...teamsData};
  // console.log(totalData);
 if (renderContent=='companyAndTeams') {
  // console.log('companyAndTeams')
 } else {
  // console.log('Teams')
 }
  // webTeamHaveParentCheckinMeetingDetailsQueryResultDtos
  // let company=totalData?.webTeamHaveParentCheckinMeetingDetailsQueryResultDtos;
  // let teams=totalData?.webTeamHaveParentCheckinMeetingDetailsQueryResultDtos[0]?.webTeamCheckinMeetingDetailsQueryResultDtos
  console.log(teams)
  // setTeams(teams)
  // setCompanys(company)
  // console.log(totalData)

  
}, [])










// const [companySelected,setCompanySelected]=React.useState<any>(null)



const initNodeSelected=(node:any,i:number)=>{

console.log(node,i)
setNodeId(node.id)


}
console.log(companys)

const renderContentUi=()=>{

  switch (renderContent) {
    case 'companyAndTeams':
      return  <TreeView 
      
      // defaultExpanded={teamsData?.webTeamHaveParentCheckinMeetingDetailsQueryResultDtos[0]?.id}
      aria-label="file system navigator"
      defaultCollapseIcon={<ArrowDropDownIcon fontSize='large' />}
      defaultExpandIcon={<ArrowLeftIcon fontSize='large' />}
      sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto',minHeight:800}}
      >
        {
          companys && companys.map((company:any,i:number)=>{
            return <TreeItem 
             key={i}
             onClick={()=>{
              // console.log(company)
              initNodeSelected(company,i)
             }}
            nodeId={company.id} 
            label={company.name} >
                    {
                      teams && teams.map((team:any,i:number)=>{
                        return <TreeItem 
                        onClick={()=>{
                          initNodeSelected(team,i)
                         }}
                        key={i}
                        sx={{mt:1,'& .rtl-305k3i-MuiTreeItem-content .MuiTreeItem-label':{fontSize:'0.7rem',fontWeight:800,py:1}}}  
                        nodeId={team.id} 
                        label={team.name} 
                         />
                      })
                    }
                   </TreeItem>
          })
        }

      </TreeView>
      
      break;
  
    default:
      return  <TreeView 
      
      // defaultExpanded={teamsData?.webTeamHaveParentCheckinMeetingDetailsQueryResultDtos[0]?.id}
      aria-label="file system navigator"
      defaultCollapseIcon={<ArrowDropDownIcon fontSize='large' />}
      defaultExpandIcon={<ArrowLeftIcon fontSize='large' />}
      sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto',minHeight:800}}
      >
        {
          teams && teams.map((team:any,i:number)=>{
            return <TreeItem 
             key={i}
             onClick={()=>{
              // console.log(company)
              initNodeSelected(team,i)
             }}
            nodeId={team.id} 
            label={team.name} >
                
                   </TreeItem>
          })
        }

      </TreeView>
      break;
  }
    

 
}


// if



// if (getObjLoading) {
//   return <LyBackdrop visible={true}  >
//     <CircularProgress sx={{color:'white'}}  />
//   </LyBackdrop>
// }





  return (
   <Box  sx={{boxShadow:1,borderRadius:1}} >
    {
      getObjLoading && <LyBackdrop visible={true}  >
      <CircularProgress sx={{color:'white'}}  />
    </LyBackdrop>
    }
   <DYToastMessage 
   show={toastMessage}
   setShow={setToastMessage}
   />
    {
      renderContentUi()
    }

   </Box>
  );
}