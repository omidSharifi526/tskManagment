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
import CustomDataGrid from './newTreeView'
// import dyPro
import { Box } from '@mui/material';
import LyBackdrop from '../../Layouts/BackDrop/BackDrop';
import {useGetTeamsByTenantId,
  useGetAllObjectiveByTeamId,
  useGetAllTeamStatusByTenantId,
  useGetWebObjectiveDetailsCheckinMeetingByTeamId} from '../../../scenes/Meeting/Hooks/index';
  import {updateObjR,resetTeamInfoR,setTeamsDataR,setTeamInfoR} from '../../../scenes/Meeting/MeetingsSlice/MeetingsSlice';
  import { useDispatch } from 'react-redux';
export default function DyTreeView({setTabIndex}:any) {
const dispatch=useDispatch();
const teamsData:any=useSelector((state:any)=>state.meetings.teamInfo);
const companyNode:any=useSelector((state:any)=>state.meetings.companyList);
const teamList:any=useSelector((state:any)=>state.meetings.teamList);
const priodId:any=useSelector((state:any)=>state.meetings.priodId);
const meetingId:any=useSelector((state:any)=>state.meetings.meetingId);




const[companys,setCompanys]=useState<any|null>([]);
const[nodeId,setNodeId]=useState<any>(companys[0]?.id);
const[teams,setTeams]=useState<any|null>([]);


const getObjectiveSuccess=()=>{
  dispatch(updateObjR())
}

const getObjectiveError=()=>{
  setToastMessage(true)
}
console.log(priodId)
const{data,isError:getObjectiveErrorFlag,isLoading:getObjLoading}=useGetWebObjectiveDetailsCheckinMeetingByTeamId(getObjectiveSuccess,getObjectiveError,nodeId,priodId,meetingId);

const [renderContent,setRenderContent]=useState<any>('companyAndTeams');
const[toastMessage,setToastMessage]=useState<any>(false)
  






















const initNodeSelected=(node:any,i:number)=>{
// let {name}=node;
// let iniName={...node,name:name};
// console.log(iniName)

console.log(node)
dispatch(setTeamsDataR(node));
dispatch(setTeamInfoR(node))
// console.log(node,i)
setNodeId(node.id)
// console.log('hihiih')


}




const renderContentUi=()=>{

  switch (renderContent) {
    case 'companyAndTeams':
      return  <TreeView 
    
       defaultExpanded={['0']}
       aria-label="file system navigator"
       defaultCollapseIcon={<ArrowDropDownIcon fontSize='large' />}
       defaultExpandIcon={<ArrowLeftIcon fontSize='large' />}
       sx={{ flexGrow: 0, maxWidth: 400, overflowY: 'auto',minHeight:50,py:1}}
       >
      <TreeItem 
                   onClick={()=>{
                    // console.log(company)
                    initNodeSelected(companyNode,1)
                    // console.log(company.id)
                  
                   }}
                  nodeId={'0'} 
                  label={companyNode?.name} >

                   {
                 teamList && teamList.map((team:any,i:number)=>{
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
    </TreeView>

      // return  <TreeView 
    
      // defaultExpanded={['0']}
      // aria-label="file system navigator"
      // defaultCollapseIcon={<ArrowDropDownIcon fontSize='large' />}
      // defaultExpandIcon={<ArrowLeftIcon fontSize='large' />}
      // sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto',minHeight:800}}
      // >
      //   {
      //     companys && companys.map((company:any,i:number)=>{
      //       return <TreeItem 
            
      //        key={i}
      //        onClick={()=>{
      //         // console.log(company)
      //         initNodeSelected(company,i)
      //         // console.log(company.id)
            
      //        }}
      //       nodeId={i.toString()} 
      //       label={company.name} >
      //               {
      //                 teams && teams.map((team:any,i:number)=>{
      //                   return <TreeItem 
      //                   onClick={()=>{
                          
      //                     initNodeSelected(team,i)
      //                    }}
      //                   key={i}
      //                   sx={{mt:1,'& .rtl-305k3i-MuiTreeItem-content .MuiTreeItem-label':{fontSize:'0.7rem',fontWeight:800,py:1}}}  
      //                   nodeId={team.id} 
      //                   label={team.name} 
      //                    />
      //                 })
      //               }
      //              </TreeItem>
      //     })
      //   }

      // </TreeView>
    
      
      
      break;
  
     case 'teams' :
      return  <TreeView 
      // onNodeToggle={handleNodeToggle}
      defaultExpanded={['0']}
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
   <Box  sx={{boxShadow:1,borderRadius:1,minHeight:500}} >
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