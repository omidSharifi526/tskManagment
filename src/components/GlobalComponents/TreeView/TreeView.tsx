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
import {useGetTeamsByTenantId,useGetTeamDetailsById,
  useGetAllObjectiveByTeamId,
  useGetAllTeamStatusByTenantId,
  useGetWebObjectiveDetailsCheckinMeetingByTeamId} from '../../../scenes/Meeting/Hooks/index';
  import {updateObjR,resetTeamInfoR} from '../../../scenes/Meeting/MeetingsSlice/MeetingsSlice';
  import { useDispatch } from 'react-redux';
export default function DyTreeView({setTabIndex}:any) {
const dispatch=useDispatch();
const teamsData=useSelector((state:any)=>state.meetings.teamInfo);
// console.log(teamsData);

const[companys,setCompanys]=useState<any|null>([]);
const[nodeId,setNodeId]=useState<any>(companys[0]?.id);
const[teams,setTeams]=useState<any|null>([]);

const [expanded, setExpanded] = useState([]);

const getObjectiveSuccess=()=>{
  dispatch(updateObjR())
  // dispatch(resetTeamInfoR())
}

const getObjectiveError=()=>{
  setToastMessage(true)
}
const{data,isError:getObjectiveErrorFlag,isLoading:getObjLoading}=useGetWebObjectiveDetailsCheckinMeetingByTeamId(getObjectiveSuccess,getObjectiveError,nodeId);

const [renderContent,setRenderContent]=useState<any>(null);
const[toastMessage,setToastMessage]=useState<any>(false)
  
useLayoutEffect(() => {

let teamData={...teamsData};
let TeamWithoutParent:any=teamData?.webTeamWithoutParentCheckinMeetingDetailsQueryResultDtos;
if (TeamWithoutParent===null) {
  let company=teamData?.webTeamHaveParentCheckinMeetingDetailsQueryResultDtos;
  let teams=teamData?.webTeamHaveParentCheckinMeetingDetailsQueryResultDtos[0]?.webTeamCheckinMeetingDetailsQueryResultDtos;
   setCompanys(company);
   setTeams(teams);
   setRenderContent('companyAndTeams')
  //  console.log(company);
  //  console.log(teams)

} else {
  // console.log(teamData);
  let teams=teamData?.webTeamWithoutParentCheckinMeetingDetailsQueryResultDtos;
  setTeams(teams);
  console.log(teams)
  setRenderContent('teams')

}


}, [])

useEffect(() => {
  
  setNodeId(companys[0]?.id)

}, [nodeId])














// const [companySelected,setCompanySelected]=React.useState<any>(null)





const initNodeSelected=(node:any,i:number)=>{

console.log(node,i)
setNodeId(node.id)


}




const renderContentUi=()=>{

  switch (renderContent) {
    case 'companyAndTeams':
      return  <TreeView 
    
    
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
              // console.log(company.id)
            
             }}
            nodeId={i.toString()} 
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