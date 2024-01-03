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
import { useEffect,useState } from 'react';
import { Box } from '@mui/material';
import {useGetTeamsByTenantId,useGetTeamDetailsById,useGetAllObjectiveByTeamId,useGetAllTeamStatusByTenantId} from '../../../scenes/Meeting/Hooks/index'
export default function DyTreeView({setTabIndex}:any) {

const teamsData=useSelector((state:any)=>state.meetings.teamsData);
// console.log(teamsData);
const[nodeId,setNodeId]=useState<any>('');
const[company,setCompanys]=useState<any|null>({});
const[teams,setTeams]=useState<any|null>([])
const {data}=useGetAllObjectiveByTeamId(nodeId);
const{data:teamStatusData}=useGetAllTeamStatusByTenantId(nodeId)

  
useEffect(() => {
let teamData=[...teamsData];
let company=teamData.find((item)=>item.name=='شرکت');
let teams=teamData.filter((item)=>item.name!='شرکت');
setTeams(teams)
setCompanys(company)

 
}, [])





const [companySelected,setCompanySelected]=React.useState<any>(null)



const initNodeSelected=(node:any,i:number)=>{

// console.log(node,i)
setNodeId(node.id)


}






  return (
   <Box  sx={{boxShadow:1,borderRadius:1}} >
     <TreeView
    defaultExpanded={['1']}
      aria-label="file system navigator"
      defaultCollapseIcon={<ArrowDropDownIcon fontSize='large' />}
      defaultExpandIcon={<ArrowLeftIcon fontSize='large' />}
      sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto',minHeight:800}}
    >

   <TreeItem sx={{mt:1}}   nodeId="1" onClick={()=>{
    setNodeId(company.id)
   }} label={company?.name}>

        {
          teams && teams.map((item:any,i:number)=>{
            return (
              <TreeItem 
              sx={{fontSize:'10px !important  '}}
              nodeId={`t${i}`} 
              key={i} label={item.name} 
              onClick={()=>{
                initNodeSelected(item,i)
              }}
               />
            )
          })
        }
      </TreeItem>

              
{/* 
   

      <TreeItem sx={{mt:1}} nodeId="4" label="تولید">
        <TreeItem nodeId="5" label="بسته بندی" />
        <TreeItem nodeId="sdsd" label="بارسلونا">
        <TreeItem nodeId="sds" label="hggh">
        <TreeItem nodeId="sd" label="dfdf">
          
          </TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeItem>

      <TreeItem sx={{mt:1}} nodeId="8" label="پشتیبانی">
        <TreeItem nodeId="9" label="OSS" />
        <TreeItem nodeId="10" label="MUI">
          <TreeItem nodeId="11" label="index.js" />
        </TreeItem>
      </TreeItem>

      <TreeItem sx={{mt:1}} nodeId="12" label="تدارکات">
        <TreeItem nodeId="13" label="OSS" />
        <TreeItem nodeId="14" label="MUI">
          <TreeItem nodeId="15" label="index.js" />
        </TreeItem>

        <TreeItem sx={{mt:1}} nodeId="16" label="MUI">
        <TreeItem nodeId="17" label="index.js" />
        </TreeItem>
        <TreeItem nodeId="18" label="yahoo">
        <TreeItem nodeId="105" label="tesr.js" />
        </TreeItem>
      </TreeItem>

      <TreeItem sx={{mt:1}} nodeId="65" label="برنامه نویسی">
        <TreeItem nodeId="534" label="OSS" />
        <TreeItem nodeId="32" label="MUI">
          <TreeItem nodeId="170" label="index.js" />
        </TreeItem>
      </TreeItem> */}


    </TreeView>
   </Box>
  );
}